/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import ASOCards from '../components/AOSCards'
function ExperiencePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const experien = [
        {
            year: '2024 - Present',
            title: 'React Developer',
            company: 'Beingmash Services',
            description:
                // 'Developing and optimizing scalable React applications, implementing modern state management and performance practices, and mentoring junior developers in React and broader web development concepts.',
                'Developing and optimizing scalable React applications, implementing modern state management and performance practices, and mentoring junior developers in React, JavaScript, and core web development skills.',

        },
        {
            year: '2022 - 2024',
            title: 'Software Developer',
            company: 'Hola9 Classifieds India Pvt Ltd',
            description:
                'Built responsive web applications with React and Material UI, focusing on performance and accessibility.',
        },
        {
            year: '2019 - 2021',
            title: 'Junior Developer',
            company: 'WebWorks',
            description:
                'Assisted in building client websites, fixing bugs, and contributing to UI improvements.',
        },
        {
            year: '2019 - 2021',
            title: 'Junior Developer',
            company: 'WebWorks',
            description:
                'Assisted in building client websites, fixing bugs, and contributing to UI improvements.',
        },
    ];
    const experiences = [
        {
            year: '2024 - Present',
            title: 'React Developer',
            company: 'Beingmash Services',
            description:
                'Developed billing software modules (POS, Sales, Purchase, Warehouse) using React.js with REST API integration, optimized components with lazy loading and code splitting (35% faster performance), redesigned login UI for improved responsiveness (40% higher user satisfaction), and mentored junior developers in React and web development best practices.',
        },
        {
            year: '2022 - 2024',
            title: 'Software Developer',
            company: 'Hola9 Classifieds India Pvt. Ltd.',
            description:
                'Built core School ERP modules (enrolment, attendance, fee management) using React.js, TypeScript, and REST APIs. Improved performance by 25% through lazy loading, boosted satisfaction by 30% with responsive UI/UX, and developed a Teacher’s Android App with React.js + Capacitor. Worked in a 6-member Agile team ensuring timely delivery and Vercel cloud deployment.',
        },
        {
            year: '2021 - 2022',
            title: 'Graduate Apprentice',
            company: 'Hutti Gold Mines',
            description:
                'Assisted with infrastructure and safety operations as part of apprenticeship training, gaining exposure to structured workflows and teamwork in industrial environments.',
        },
        {
            year: '2016 - 2019',
            title: "Bachelor's Degree",
            company: 'P.D.A. College of Engineering',
            description:
                'Successfully completed an engineering degree, gaining strong foundations in problem-solving, analytical thinking, and technical skills that support my professional journey.',
        },
    ];

    return (
        <Container
            sx={{
                py: 6,
                bgcolor: 'background.default',
                color: 'text.primary',
                minHeight: '100vh',
            }}
        >
            <Typography sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease'
            }} variant="h4" align="center" gutterBottom fontWeight="bold">
                Education | Experience
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                gutterBottom
            >
                A journey of growth, learning, and building impactful solutions
            </Typography>

            <Timeline position={isMobile ? "right" : "alternate"} sx={{
                ...(isMobile && {
                    "& .MuiTimelineContent-root": {
                        flex: 1, // expand content to take full width
                        maxWidth: "100%",
                    },
                    "& .MuiTimelineItem-root": {
                        "&::before": {
                            display: "none", // remove the extra before line
                        },
                    },
                }),
            }}>
                {experiences.map((exp, index) => (
                    <TimelineItem key={index}>
                        {!isMobile && (
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {exp.year}
                            </TimelineOppositeContent>
                        )}

                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            {index < experiences.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>

                        <TimelineContent sx={{ py: '0.5rem', px: 2 }}>
                            <ASOCards animateType={index % 2 === 0 ? "fade-up-right" : "fade-up-left"} duration={800}>
                                <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
                                    {isMobile && (
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            {exp.year}
                                        </Typography>
                                    )}
                                    <Typography variant="h6" component="span" fontWeight="bold">
                                        {exp.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exp.description}
                                    </Typography>
                                </Paper>
                            </ASOCards>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>

        </Container>
    );
}

export default ExperiencePage;
