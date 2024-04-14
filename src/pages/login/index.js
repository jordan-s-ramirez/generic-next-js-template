import Layout from "@/components/layout/layoutLogin";
import LoginForm from "@/components/form/loginForm";

const Page = () => {
  function handleLogin(form) {
    let username, password;
    username = form[0].value;
    password = form[1].value;

    // Handle Custom Login

    // Route to Home Page
    window.location = "/";
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Basic Form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(e.target);
        }}
      >
        <LoginForm />
      </form>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
