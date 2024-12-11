import React, { useState } from 'react';
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    Paper,
    Alert,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Mock API call
            console.log('Reset link sent to:', email);
            setSuccessMessage('Password reset link has been sent to your email.');
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Something went wrong, please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div
            style={{
                background: 'linear-gradient(135deg, #5cdb95, #05386b)',
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
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                            <EmailOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" sx={{ marginBottom: 3 }}>
                            Forgot Password
                        </Typography>
                        {successMessage && <Alert severity="success">{successMessage}</Alert>}
                        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                Send Reset Link
                            </Button>
                            <Grid container justifyContent="center">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Remembered? Go back to Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};

export default ForgotPassword;
