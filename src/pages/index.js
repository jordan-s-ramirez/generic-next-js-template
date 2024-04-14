import Layout from "@/components/layout/layout";
const Page = () => {
  return (
    <>
      <h3 style={{ marginLeft: "1vw" }}>Internal Tools</h3>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
