import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Box,
    Card,
    Typography,
    Snackbar,
    Alert,
    Fade,
    Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ContactMail, Send } from '@mui/icons-material';

// Styled components for modern look
const StyledPaper = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
}));

const FormCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 500,
    padding: theme.spacing(4),
    borderRadius: 16,
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
}));

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success', // 'success' or 'error'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Formspree submission
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
                        setFormData({ name: '', email: '', mobile: '', message: '' });
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
            <StyledPaper>
                <Container maxWidth="sm">
                    <Fade in={true} timeout={800}>
                        <FormCard elevation={8}>
                            <IconWrapper>
                                <ContactMail sx={{ fontSize: 48 }} />
                            </IconWrapper>
                            <Typography
                                variant="h4"
                                component="h1"
                                gutterBottom
                                align="center"
                                sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    background: 'linear-gradient(45deg, #1976d2, #2196f3)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Contact Us
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                color="textSecondary"
                                sx={{ mb: 3 }}
                            >
                                Have questions or want to get in touch? Fill out the form below and we'll respond as soon as possible.
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                }}
                            >
                                <TextField
                                    label="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                />
                                <TextField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                />
                                <TextField
                                    label="Mobile Number"
                                    name="mobile"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                />
                                <TextField
                                    label="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    error={!!errors.message}
                                    helperText={errors.message}
                                    multiline
                                    rows={4}
                                    fullWidth
                                    variant="outlined"
                                    size="medium"
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    endIcon={<Send />}
                                    sx={{
                                        mt: 2,
                                        py: 1.5,
                                        borderRadius: 2,
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        background: 'linear-gradient(45deg, #1976d2, #2196f3)',
                                        boxShadow: '0 4px 8px rgba(25, 118, 210, 0.3)',
                                        '&:hover': {
                                            boxShadow: '0 6px 12px rgba(25, 118, 210, 0.4)',
                                            background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </FormCard>
                    </Fade>
                </Container>
            </StyledPaper>

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