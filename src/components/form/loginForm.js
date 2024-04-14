import React from "react";
import {
  Grid,
  Button,
  Input,
  Card,
  IconButton,
  Stack,
  Tooltip,
  CardContent,
  CardMedia,
} from "@mui/material";
import { CiLogin } from "react-icons/ci";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xl={4} lg={5} md={6} sm={8} xs={12}>
          <Card
            variant="outlined"
            sx={{ padding: "2%", margin: 1, width: "100%" }}
          >
            <CardMedia
              sx={{ height: 240 }}
              image="/tiger.jpg"
              title="green iguana"
            />
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p style={{ marign: 0 }}>Username</p>
                  <Input fullWidth placeholder="Your login" required />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <p style={{ marign: 0 }}>Password</p>
                  <Stack direction="row">
                    <Input
                      fullWidth
                      placeholder="Your password"
                      type={showPassword ? "text" : "password"}
                      required
                    />
                    <Tooltip
                      placement="right"
                      title={(!showPassword ? "Show" : "Hide") + " Password"}
                    >
                      <IconButton
                        onClick={() => {
                          setShowPassword((e) => !e);
                        }}
                      >
                        {!showPassword ? <FaEye /> : <IoEyeOffSharp />}
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Button fullWidth endIcon={<CiLogin />} type="submit">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
