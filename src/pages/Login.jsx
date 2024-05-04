import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import { object, string } from "yup";
import useApiRequest from "../services/useApiRequest";

const Login = () => {
  const { signIn } = useApiRequest();

  const loginSchema = object({
    email: string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must be at most 10 characters")
      .matches(/\d+/, "The password must contain at least one number")
      .matches(
        /[a-z]+/,
        "The password must contain at least one lowercase letter"
      )
      .matches(
        /[A-Z]+/,
        "The password must contain at least one uppercase letter"
      )
      .matches(
        /[@$!%*?&]+/,
        "The password must contain at least one special character(@$!%*?&)"
      ),
  });

  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100vw",
        marginRight: "-.2px",
        backgroundImage: `url("/images/loginback.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundColor: "#000000",
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid
          pt={35}
          px={1}
          item
          xs={12}
          sm={10}
          md={6}
          sx={{ backdropFilter: "blur(8px)" }}
        >
          <Avatar
            sx={{
              backgroundColor: "primary",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <HowToRegIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="logoColor"
            fontFamily={"logo"}
            fontWeight={"bold"}
            letterSpacing={10}
            mt={2}
          >
            LOGIN
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              signIn(values.email, values.password);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              isSubmitting,
            }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    variant="outlined"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    InputProps={{
                      sx: {
                        color:"white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "warning", 
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "logoColor", 
                        },
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      sx: {
                        color:"white",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "warning", // Odaklandığında border rengi
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "logoColor", // Üzerine gelindiğinde border rengi
                        },
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: "white",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    color="warning"
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        {/* <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src="images/loginback.png" alt="img" />
          </Container>
        </Grid> */}
      </Grid>
    </Container>
  );
};

export default Login;
