import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import useApiRequest from "../services/useApiRequest";
import { object, string } from "yup";

const Register = () => {
  const { register } = useApiRequest();

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
    displayName: string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(12, "Username must be at most 10 characters"),
    first_name: string().required("firstname is required"),
    last_name: string().required("lastname is required"),
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
        pt: 35,
      }}
    >
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          // p: 2,
        }}
      >
        <Grid
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
            <AccountCircleIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="logoColor"
            fontFamily={"logo"}
            fontWeight={"bold"}
            letterSpacing={10}
            mt={5}
          >
            REGISTER
          </Typography>

          <Formik
            initialValues={{
              displayName: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
              register(values.email, values.password, values.displayName);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ values, handleChange, handleBlur, touched, errors }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    label="User Name *"
                    name="displayName"
                    id="userName"
                    type="text"
                    variant="outlined"
                    value={values.displayName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.displayName && Boolean(errors.displayName)}
                    helperText={touched.displayName && errors.displayName}
                    InputProps={{
                      sx: {
                        color: "white",
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
                    label="First Name *"
                    name="first_name"
                    id="firstName"
                    type="text"
                    variant="outlined"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.first_name && Boolean(errors.first_name)}
                    helperText={touched.first_name && errors.first_name}
                    InputProps={{
                      sx: {
                        color: "white",
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
                    label="Last Name *"
                    name="last_name"
                    id="last_name"
                    type="text"
                    variant="outlined"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.last_name && Boolean(errors.last_name)}
                    helperText={touched.last_name && errors.last_name}
                    InputProps={{
                      sx: {
                        color: "white",

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
                    label="Email *"
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
                        color: "white",

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
                    label="Password *"
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
                        color: "white",

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
                  <Button color="warning" type="submit" variant="contained" size="large">
                    Register
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/login">Do you have an account?</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
