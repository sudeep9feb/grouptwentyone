import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik';
import React from 'react'
import * as yup from 'yup';

function Login() {

    // validation rules with Yup
    const formSchema = yup.object({
        email: yup.string().email("Not a valid email").required("Email is required"),
        password: yup.string().required("Password is required"),
        username: yup.string().required("Username is required").
            min(5, "no less than 5 schracters").
            max(10, "no more than 10 characters")
    })

    // form handling with formik
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: ""
        },
        validateSchema: formSchema,
        onSubmit: (values) => {
            console.log(values);
        }
    })
    return (
        <Box
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            margin={"auto"}
            marginTop={20}
            maxWidth="300px"
            boxShadow={"3px 3px 3px 3px #ccc"}
            padding={"20px"}
        >
            <form onSubmit={formik.handleSubmit}>
                <Stack direction={"column"} spacing={2}>
                    <Typography variant="h3" sx={{ color: "#ccc" }}>Login Page</Typography>
                    <TextField
                        variant='filled'
                        label="Username"
                        type={"text"}
                        placeholder="Enter the username"
                        name="username"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.username && formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                    />
                    <TextField
                        variant='filled'
                        label="Email"
                        type={"email"}
                        name="email"
                        placeholder="Enter the email"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        variant='filled'
                        label="Password"
                        type={"password"}
                        name="password"
                        placeholder="Enter the password"
                        onChange={formik.handleChange}
                        error={Boolean(formik.touched.password && formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button type="submit" variant="contained">Login</Button>
                </Stack>
            </form>
        </Box >
    )
}

export default Login