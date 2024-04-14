import Layout from "@/components/layout/layout";
import { navbarConfig } from "@/components/layout/sub-components/navbar-config";
import { Alert, Stack, AlertTitle, Button } from "@mui/material";
const Page = () => {
  return (
    <>
      <h3 style={{ marginLeft: "1vw" }}>Internal Tools</h3>
      <Stack spacing={2} style={{ margin: "1%" }}>
        {navbarConfig.config
          .filter((e) => e.type !== "SubMenu")
          .map((obj, idx) => {
            return (
              <Alert icon={obj.icon} key={obj.title + idx}>
                <AlertTitle>{obj.title}</AlertTitle>
                <p>{obj.description}</p>
              </Alert>
            );
          })}
      </Stack>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
