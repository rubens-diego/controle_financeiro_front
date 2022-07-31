import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import moment from 'moment'



export const alertWarn = async (mensagem: string) => {
  toast.warn(mensagem);
};

export const alertInfo = async (mensagem: string) => {
  toast.info(mensagem);
};

export const alertError = async (mensagem: string) => {
  toast.error(mensagem);
};
