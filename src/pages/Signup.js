import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import API from '../utils/api';

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!emailRegex.test(formData.email)) tempErrors.email = 'Enter a valid email';

        if (!formData.password) tempErrors.password = 'Password is required';
        else if (formData.password.length < 8) tempErrors.password = 'Password must be at least 8 characters';

        if (formData.confirmPassword !== formData.password) tempErrors.confirmPassword = 'Passwords do not match';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validate()) return;

        try {
            const response = await API.post('/users/signup', {
                email: formData.email,
                password: formData.password,
            });
            console.log('Signup Successful:', response.data);
            alert('Signup Successful!');
        } catch (error) {
            console.error('Signup Error:', error.response || error);
            alert('Signup failed. Please check the console for details.');
        }
    };


    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #e09, #d0e)',
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={5}
                    sx={{
                        padding: 4,
                        borderRadius: '15px',
                        backgroundColor: 'white',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                error={!!errors.confirmPassword}
                                helperText={errors.confirmPassword}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    bgcolor: 'primary.main',
                                    ':hover': {
                                        bgcolor: 'primary.dark',
                                    },
                                }}
                            >
                                Sign Up
                            </Button>
                            <Button
                                fullWidth
                                variant="outlined"
                                onClick={() => alert('Google Sign-Up Coming Soon!')}
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    borderColor: '#4285F4',
                                    color: '#4285F4',
                                    ':hover': {
                                        bgcolor: '#4285F4',
                                        color: 'white',
                                    },
                                }}
                            >
                                Sign Up with Google
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
