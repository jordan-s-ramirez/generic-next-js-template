import React from "react";
import { Grid, Button, Input, Card } from "@mui/material";
import { IoSend } from "react-icons/io5";
export default function Form() {
  return (
    <>
      <Card variant="outlined" sx={{ padding: "1%", margin: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
            <Input fullWidth />
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
            <Button fullWidth endIcon={<IoSend />} type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
