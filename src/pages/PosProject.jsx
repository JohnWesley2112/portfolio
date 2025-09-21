import React from 'react';
import {
    Container,
    Typography,
    Box,
    Paper,
    useTheme,
    useMediaQuery,
    Card,
    Grid,
    CardMedia,
    Button,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    CheckCircle,
    People,
    AccountBalance,
    LibraryBooks,
    Dashboard,
    DashboardCustomize,
    GeneratingTokens,
    Print
} from '@mui/icons-material';
import HomePage from '../assets/projects/erp/homepage.png'
import StudentMgmtSys from '../assets/projects/erp/student-mgmt-sys.png'
import FeeMgmt from '../assets/projects/erp/fee-mgmt.png'
import AttendanceTracking from '../assets/projects/erp/attendance-tracking.png'

const PosProject = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const caseStudyData = [
        {
            title: "Sales & POS System",
            description: "Developed an integrated sales and point-of-sale module for fast billing, invoice generation, and real-time transaction tracking, designed to work across multiple devices.",
            image: AttendanceTracking, // Replace with actual import
            features: ["Quick billing", "Invoice generation", "Multiple payment modes", "Discount & coupon support"],
            technical: ["React + Redux", "REST API", "Barcode integration", "Receipt printing"]
        },
        {
            title: "Vendor & Customer Management",
            description: "Implemented a centralized vendor and customer management system to streamline supplier relationships and improve customer experience through detailed records and transactions.",
            image: AttendanceTracking, // Replace with actual import
            features: ["Vendor database", "Customer profiles", "Transaction history", "Credit/Debit management"],
            technical: ["React Table", "Formik forms", "Role-based access", "API-driven architecture"]
        },
        {
            title: "Purchase & Inventory",
            description: "Created a purchase and warehouse management module to track inventory, manage stock levels, and optimize procurement workflows for cost efficiency.",
            image: AttendanceTracking, // Replace with actual import
            features: ["Stock tracking", "Warehouse transfers", "Low-stock alerts", "Purchase order management"],
            technical: ["Chart.js for stock trends", "Excel export", "REST API", "Notification system"]
        },
        {
            title: "Accounts & Reports",
            description: "Integrated a robust accounts and reporting system providing financial insights, expense tracking, and detailed reports for better decision-making.",
            image: AttendanceTracking, // Replace with actual import
            features: ["Expense management", "Financial reports", "Tax calculation", "Custom report generation"],
            technical: ["PDF/Excel export", "Chart.js visualizations", "Secure APIs", "Data filtering & search"]
        },
        {
            title: "Settings & User Roles",
            description: "Added a flexible settings and role management module, allowing administrators to configure system preferences and assign permissions to different user groups.",
            image: AttendanceTracking, // Replace with actual import
            features: ["Role-based access", "User management", "System preferences", "Audit logging"],
            technical: ["JWT authentication", "Role-permission mapping", "Secure APIs", "Responsive UI"]
        }
    ];


    return (
        <Container maxWidth="xl" sx={{ py: 8 }}>
            <Typography
                variant="h2"
                component="h1"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: 'primary.main'
                }}
            >
                College Management System
            </Typography>

            <Typography
                variant="h5"
                align="center"
                sx={{
                    mb: 8,
                    maxWidth: 800,
                    mx: 'auto',
                    color: 'text.secondary'
                }}
            >
                A comprehensive React-based dashboard managing all aspects of college administration,
                serving staff, faculty, and students through an intuitive interface.
            </Typography>

            {caseStudyData.map((section, index) => (
                <Box key={index} sx={{ mb: 12 }}>
                    <Grid
                        container
                        spacing={6}
                        alignItems="center"
                        direction={isMobile ? 'column-reverse' : (index % 2 === 0 ? 'row' : 'row-reverse')}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                '&:hover': {
                                    '& .case-study-image': {
                                        transform: 'scale(1.02)',
                                        boxShadow: theme.shadows[10]
                                    }
                                }
                            }}>
                                <Card
                                    className="case-study-image"
                                    sx={{
                                        transition: 'all 0.3s ease-in-out',
                                        borderRadius: 2,
                                        overflow: 'hidden',
                                        boxShadow: theme.shadows[5]
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        image={section.image}
                                        alt={section.title}
                                    />
                                </Card>

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -20,
                                        left: index % 2 === 0 ? -20 : 'auto',
                                        right: index % 2 === 0 ? 'auto' : -20,
                                        width: 100,
                                        height: 100,
                                        borderRadius: '50%',
                                        backgroundColor: 'primary.light',
                                        opacity: 0.2,
                                        zIndex: -1
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{
                                pl: index % 2 === 0 ? 0 : { md: 4 },
                                pr: index % 2 === 0 ? { md: 4 } : 0
                            }}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    gutterBottom
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'primary.dark'
                                    }}
                                >
                                    {section.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    paragraph
                                    sx={{
                                        fontSize: '1.1rem',
                                        lineHeight: 1.7,
                                        mb: 3
                                    }}
                                >
                                    {section.description}
                                </Typography>

                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            Key Features
                                        </Typography>
                                        <List dense>
                                            {section.features.map((feature, i) => (
                                                <ListItem key={i} sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 32 }}>
                                                        <CheckCircle color="primary" sx={{ fontSize: 20 }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={feature} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>

                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            Technical Highlights
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                            {section.technical.map((tech, i) => (
                                                <Chip
                                                    key={i}
                                                    label={tech}
                                                    size="small"
                                                    color="secondary"
                                                    variant="outlined"
                                                />
                                            ))}
                                        </Box>
                                    </Grid>
                                </Grid>

                                {/* <Button
                                    variant="outlined"
                                    sx={{
                                        mt: 3,
                                        px: 3,
                                        py: 1
                                    }}
                                >
                                    View Details
                                </Button> */}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            ))}

            <Paper
                elevation={0}
                sx={{
                    p: 5,
                    borderRadius: 4,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    mt: 8
                }}
            >
                <Typography variant="h3" mb={6} align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Project Impact
                </Typography>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Print sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Labels</Typography>
                            <Typography variant="h6">Generate Labels for Products</Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Dashboard sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>20+</Typography>
                            <Typography variant="h6">Integrated Modules</Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            {/* <AccountBalance sx={{ fontSize: 50, mb: 1 }} /> */}
                            <DashboardCustomize sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>100%</Typography>
                            <Typography variant="h6">Mordern & Resopnsive UI</Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <LibraryBooks sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Digital Bills</Typography>
                            <Typography variant="h6">Save Pdf or Print</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default PosProject;
