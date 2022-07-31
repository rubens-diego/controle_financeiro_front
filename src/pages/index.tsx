import { GetServerSideProps } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { withSSRGuest } from "../utils/withSSRGuest";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { CardLogin, CardUserImage, Container } from "../styles/Home.module";
import { BiUser } from "react-icons/bi";
import { toast } from "react-toastify";
import Router from "next/router";
import { api } from "../services/apiClient";
import { setCookie } from "nookies";

type SignInCredentials = {
  email: string;
  password: string;
};

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addUser } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    await signIn(data);
  }

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.get("auth", {
        headers: {
          user: email,
          password: password,
        },
      });

      if (response.status === 200) {
        const { authorization, refreshToken, permissions, roles } =
          response.data;

        if (authorization) {
          setCookie(undefined, "nextauth.token", authorization, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          });

          setCookie(undefined, "nextauth.refreshToken", refreshToken, {
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: "/",
          });

          addUser({
            email,
            permissions,
            roles,
            theme: "dark",
          });
        } else {
          toast.error("Erro ao conectar");
        }
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${authorization}`;

        Router.push("/home");
      } else {
        Router.push("/");
      }
    } catch (err: any) {
      toast.error(`Erro na rede! ${err.message}`);
    }
  }

  return (
    <Container>
      <Image src={fundo} layout="fill" />
      <CardLogin>
        <CardUserImage>
          <BiUser
            color="#c0c0c0"
            size={150}
            style={{
              borderRadius: "150px",
              boxSizing: "border-box",
            }}
          />
        </CardUserImage>

        <Input
          type={"password"}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="button" onClick={handleSubmit}>
          Entrar
        </Button>
      </CardLogin>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRGuest(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
