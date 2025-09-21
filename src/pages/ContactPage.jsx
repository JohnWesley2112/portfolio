import { Send } from '@mui/icons-material'
import { Container, Stack, Typography, Grid, Button, TextField, Box, Snackbar, Alert } from '@mui/material'
import React, { useState } from 'react'
import ContactMe from '../assets/contact-me.jpg'
import AOSCards from '../components/AOSCards';

function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Phone must be 10 digits';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('https://formspree.io/f/mvojjbok', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
                .then((res) => {
                    if (res.ok) {
                        setSnackbar({
                            open: true,
                            message: 'Message sent successfully!',
                            severity: 'success',
                        });
                        setFormData({ firstName: '', lastName: '', email: '', mobile: '', message: '' });
                    } else {
                        setSnackbar({
                            open: true,
                            message: 'Failed to send message. Please try again.',
                            severity: 'error',
                        });
                    }
                })
                .catch((err) => {
                    setSnackbar({
                        open: true,
                        message: `Error: ${err.message || 'Something went wrong'}`,
                        severity: 'error',
                    });
                });
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <>
            <Container sx={{ height: '100%', py: { xs: 2, md: 8 } }}>
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" spacing={10}>
                    {/* Left Image */}
                    <Box sx={{ flex: 1, mx: "auto", }}>
                        <AOSCards animateType='fade-right' duration={1000}>
                            <Box
                                src={ContactMe}
                                width={'100%'}
                                sx={{ borderRadius: 2 }}
                                component={'img'}
                            />
                        </AOSCards>
                    </Box>

                    {/* Right Form */}

                    <Box sx={{ flex: 1, mx: "auto", }}>
                        <AOSCards animateType='fade-left' duration={1000}>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="h6" component="p" fontWeight={100} mb={3}>
                                    Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
                                </Typography>

                                <form onSubmit={handleSubmit} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="First Name"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                error={!!errors.firstName}
                                                helperText={errors.firstName}
                                                variant="standard"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Last Name"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                error={!!errors.lastName}
                                                helperText={errors.lastName}
                                                variant="standard"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                error={!!errors.email}
                                                helperText={errors.email}
                                                variant="standard"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <TextField
                                                fullWidth
                                                label="Phone Number"
                                                name="mobile"
                                                type="tel"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                error={!!errors.mobile}
                                                helperText={errors.mobile}
                                                variant="standard"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                error={!!errors.message}
                                                helperText={errors.message}
                                                variant="standard"
                                                InputLabelProps={{ shrink: true }}
                                            />
                                        </Grid>

                                        <Grid size={{ xs: 12 }}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                endIcon={<Send />}
                                            >
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Box>
                        </AOSCards>
                    </Box>
                </Stack>
            </Container>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ContactPage;
