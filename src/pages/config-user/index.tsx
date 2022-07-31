import { GetServerSideProps } from "next";
import { withSSRAuth } from "../../utils/withSSRAuth";
import LayoutBody from "../../components/LayoutBody";
import { Input } from "../../components/Input";

export default function ConfigUser() {
  return (
    <>
      <LayoutBody>
        <h1>Gym: Rubens </h1>
        <div>
          <Input label="nome fantazia" />
          <Input label="razão social" />
          <Input label="CNPJ" />
        </div>
        <div>
          <Input label="Cep" />
          <Input label="rua" />
          <Input label="complemento" />
          <Input label="setor" />
          <Input label="cidade" />
          <Input label="estado" />
          <Input label="numero" />
        </div>
        <div>
          <Input label="email" />
        </div>
        <div>
          <Input label="dd" />
          <Input label="telefone" />
        </div>
      </LayoutBody>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx: any) => {
    return {
      props: {},
    };
  }
);
