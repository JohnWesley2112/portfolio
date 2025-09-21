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
import TeacherAppPreview from '../assets/projects/teacher-app/teacher-app-preview.png'
import StudentAttendance from '../assets/projects/teacher-app/student-attendance.png'
import StudentExamDetails from '../assets/projects/teacher-app/student-exam-details.png'
import QuestionBank from '../assets/projects/teacher-app/question-bank.png'
import AOSCards from '../components/AOSCards';

const TeacherAppProject = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const caseStudyData = [
        {
            title: "Teacher Profile & Role Management",
            description: "Enabled teachers to update and manage their personal profiles while implementing role-based permissions for secure access to various features.",
            image: TeacherAppPreview,
            features: ["Profile update", "User-based permissions", "User authentication", "Secure access control"],
            technical: ["React Hooks", "Basic for forms", "Custom validation",]
        },
        {
            title: "Attendance Management",
            description: "Developed a dual attendance system for students and teachers, allowing teachers to add or edit attendance records seamlessly based on their role and permissions.",
            image: StudentAttendance,
            features: ["Student attendance tracking", "Teacher attendance logging", "Edit & update functionality", "Role-specific access"],
            technical: ["React Bootstrap", "REST API integration", "Quick update"]
        },
        {
            title: "Student Progress & Performance",
            description: "Integrated modules for teachers to view student progress, access marks, and generate performance insights for better academic tracking.",
            image: StudentExamDetails,
            features: ["Student progress reports", "Marks entry & tracking", "Performance analytics", "Exportable reports"],
            technical: ["Tables", "Excel export", "REST API", "Responsive UI"]
        },
        // {
        //     title: "Payroll Management",
        //     description: "Implemented payroll access for teachers, providing a secure and transparent view of their salary, deductions, and allowances.",
        //     image: FeeMgmt,
        //     features: ["Salary breakdown", "Downloadable payslips", "Payroll history", "Secure transactions"],
        //     technical: ["PDF generation", "Secure API integration", "React Table", "Authentication guard"]
        // },
        {
            title: "Exam & Question Bank",
            description: "Built a robust module for teachers to add questions, create exam/test papers, and manage the question bank for streamlined academic assessments.",
            image: QuestionBank, // Replace with relevant image import
            features: ["Question bank management", "Exam/test paper setup", "Add/edit questions", "Categorization & tagging"],
            technical: ["Rich text editor", "Dynamic forms", "REST API", "Search & filter functionality"]
        }
    ];


    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
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
                Teacher App
            </Typography>

            <Typography
                variant="h5"
                align="center"
                sx={{
                    mb: { xs: 10, lg: 2 },
                    maxWidth: 800,
                    mx: 'auto',
                    color: 'text.secondary'
                }}
            >
                A comprehensive React-based teacher dashboard designed to simplify college administration,
                enabling faculty to manage profiles, attendance, student progress, payroll, and exam
                question banks through an intuitive interface.
            </Typography>

            {caseStudyData.map((section, index) => (
                <Box key={index} sx={{ mb: { xs: 8, lg: 20 } }}>
                    <Grid
                        container
                        spacing={6}
                        alignItems="center"
                        direction={isMobile ? 'column-reverse' : (index % 2 === 0 ? 'row' : 'row-reverse')}
                    >
                        {/* <Grid size={{ xs: 12, md: 6 }}>
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
                                        image={section.image}
                                        alt={section.title}
                                        sx={{
                                            maxWidth: "100%",      // Prevent overflow
                                            height: "auto",        // Keep proportions
                                            maxHeight: 400,        // Prevent very tall images
                                            objectFit: "contain",  // Fit inside without cropping
                                            margin: "0 auto",      // Center horizontally
                                        }}
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
                        </Grid> */}

                        <Grid mt={{ xs: 12, lg: 0 }} size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    '&:hover img': {
                                        transform: "scale(1.02)",
                                        boxShadow: theme.shadows[10]
                                    }
                                }}
                            >
                                {/* The image only, no Card */}
                                <Box
                                    component="img"
                                    src={section.image}
                                    alt={section.title}
                                    sx={{
                                        maxWidth: "100%",
                                        height: "auto",
                                        maxHeight: 350,
                                        borderRadius: { xs: 2, lg: 2.5 },          // keeps soft rounded corners
                                        transition: "all 0.3s ease-in-out",
                                        boxShadow: theme.shadows[5],
                                        // filter: "drop-shadow(0px 8px 16px rgba(0,0,0,0.25))", // custom drop shadow
                                        zIndex: 1
                                    }}
                                />

                                {/* Decorative circle */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        // top: -30,
                                        // left: index % 2 === 0 ? -30 : "auto",
                                        // right: index % 2 === 0 ? "auto" : -30,
                                        right: { md: '12%', lg: '22%' },
                                        bottom: '0%',
                                        width: 400,
                                        height: 400,
                                        borderRadius: "50%",
                                        backgroundColor: "primary.light",
                                        opacity: 0.25,
                                        zIndex: 0
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

            <AOSCards animateType='zoom-out' duration={1000}>
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
                    <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Project Impact
                    </Typography>

                    <Grid container spacing={4} sx={{ mt: 2 }}>

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Dashboard sx={{ fontSize: 50, mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>9</Typography>
                                <Typography variant="h6">Integrated Modules</Typography>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 4 }}>
                            <Box sx={{ textAlign: 'center' }}>
                                <AccountBalance sx={{ fontSize: 50, mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>75%</Typography>
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
            </AOSCards>
        </Container>
    );
};

export default TeacherAppProject;
