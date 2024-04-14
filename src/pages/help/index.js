import Layout from "@/components/layout/layout";
import Form from "@/components/form/form";

const Page = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Basic Form</h3>
      <Form />
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
