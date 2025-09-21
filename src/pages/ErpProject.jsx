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
    Dashboard
} from '@mui/icons-material';
import HomePage from '../assets/projects/erp/homepage.png'
import StudentMgmtSys from '../assets/projects/erp/student-mgmt-sys.png'
import FeeMgmt from '../assets/projects/erp/fee-mgmt.png'
import AttendanceTracking from '../assets/projects/erp/attendance-tracking.png'

const ErpProject = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const caseStudyData = [
        {
            title: "Student Management System",
            description: "Developed a complete student information system with advanced filtering, search capabilities, and bulk operations for efficient student data management.",
            image: StudentMgmtSys,
            features: ["Advanced search & filter", "Bulk operations", "Profile management", "Document tracking"],
            technical: ["React Table", "Formik for forms", "Yup validation", "REST API integration"]
        },
        {
            title: "Fee Management Module",
            description: "Created a comprehensive fee management system with payment processing, receipt generation, and financial reporting capabilities.",
            image: FeeMgmt,
            features: ["Multiple payment modes", "Receipt generation", "Due date reminders", "Financial reports"],
            technical: ["Payment gateway API", "PDF generation", "Chart.js for visuals", "Secure transactions"]
        },
        {
            title: "Attendance Tracking",
            description: "Built a responsive attendance system that works seamlessly on desktop and mobile devices, allowing teachers to mark attendance from anywhere.",
            image: AttendanceTracking,
            features: ["Biometric integration", "Mobile-friendly", "Reporting analytics", "Export functionality"],
            technical: ["PWA capabilities", "Chart visualization", "Excel export", "Push notifications"]
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

                                <Button
                                    variant="outlined"
                                    sx={{
                                        mt: 3,
                                        px: 3,
                                        py: 1
                                    }}
                                >
                                    View Details
                                </Button>
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
                    {/* <Grid size={{ xs: 12, sm: 3 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <People sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>2,000+</Typography>
                            <Typography variant="h6">Active Users</Typography>
                        </Box>
                    </Grid> */}

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Dashboard sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>17</Typography>
                            <Typography variant="h6">Integrated Modules</Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <AccountBalance sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>60%</Typography>
                            <Typography variant="h6">Time Saved</Typography>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <LibraryBooks sx={{ fontSize: 50, mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>100%</Typography>
                            <Typography variant="h6">Adoption Rate</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default ErpProject;
