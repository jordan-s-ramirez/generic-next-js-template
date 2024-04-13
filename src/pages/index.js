import Layout from "@/components/layout/layout";
const Page = () => {
  return (
    <>
      <p>hello</p>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
