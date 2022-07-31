import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie } from 'nookies'
import { signOut } from '../contexts/AuthContext';
import { AuthTokenError } from './errors/AuthTokenError';

let isRefreshing = false;
let failedRequestsQueue: any = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({

    //baseURL: "http://localhost:3333/v1/",
    //baseURL: "https://academia-back-prod.herokuapp.com/v1/",
    baseURL: process.env.NEXT_PUBLIC_URL_API,
    headers: {
      Authorization: `Bearer ${cookies['nextauth.token']}`
    }
  });

  api.interceptors.response.use(response => {
    return response;
  }, (error: AxiosError) => {

    if (error.response?.status === 401) {
      const erro: any = error.response?.data

      if (erro.code === 'token.expired') {
        cookies = parseCookies(ctx);

        const { 'nextauth.refreshToken': refreshToken } = cookies;

        const originalConfig: any = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api.get('/refresh', {
            headers: {
              refreshToken,
            }
          }).then(response => {
            const { token } = response.data;

            setCookie(ctx, 'nextauth.token', token, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: '/'
            })

            setCookie(ctx, 'nextauth.refreshToken', response.data.refreshToken, {
              maxAge: 60 * 60 * 24 * 30, // 30 days
              path: '/'
            })

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            failedRequestsQueue.forEach((request: any) => request.onSuccess(token))
            failedRequestsQueue = [];
          }).catch(err => {
            failedRequestsQueue.forEach((request: any) => request.onFailure(err))
            failedRequestsQueue = [];

            let isServer = (typeof window === 'undefined') ? false : true;

            if (!isServer) {
              signOut()
            }
          }).finally(() => {
            isRefreshing = false
          });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers['Authorization'] = `Bearer ${token}`

              resolve(api(originalConfig))
            },
            onFailure: (err: AxiosError) => {
              reject(err)
            }
          })
        });
      } else {


        let isServer = (typeof window === 'undefined') ? false : true;

        if (!isServer) {
          signOut()

        } else {
          return Promise.reject(new AuthTokenError())
        }
      }
    }

    return Promise.reject(error);
  });


  api.interceptors.request.use(response => {


    return response
  })

  return api;
}