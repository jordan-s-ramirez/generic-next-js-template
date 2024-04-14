import Layout from "@/components/layout/layout";
import Form from "@/components/form/form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

const Page = () => {
  const [isVerifying, setIsVerifying] = React.useState(false);
  const [currFormData, setCurrFormData] = React.useState("");
  async function handleVerifedSubmit() {
    // Submit Data to the Backend
    console.log("SUBMIT DATA FOR", currFormData);
  }

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Basic Form</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCurrFormData(e.target[0].value);
          setIsVerifying((a) => !a);
        }}
      >
        <Form />
      </form>
      <Dialog
        open={isVerifying}
        onClose={() => {
          setIsVerifying((e) => !e);
        }}
      >
        <DialogTitle>{"Are you sure you want to submit?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            You are about to ... {currFormData}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsVerifying((e) => !e);
            }}
          >
            Disagree
          </Button>
          <Button
            onClick={async () => {
              await handleVerifedSubmit();
              setIsVerifying((e) => !e);
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Page;
