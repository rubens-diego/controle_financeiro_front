import { GetServerSideProps } from "next";
import { withSSRAuth } from "../../utils/withSSRAuth";
import LayoutBody from "../../components/LayoutBody";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <LayoutBody>
        <h1>Home: {user?.email} </h1>
      </LayoutBody>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async (ctx: any) => {
    //const apiClient = setupAPIClient(ctx);

    return {
      props: {},
    };
  }
);
