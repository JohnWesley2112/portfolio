/* eslint-disable no-unused-vars */
import { Container, Stack, Typography, Box, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
const svgs = import.meta.glob("../assets/svg-icons/*.svg", { eager: true });
// const svgs = import.meta.glob("../assets/svg-icons/*.svg");

const skills = [
    { name: "Bootstrap", description: "A CSS framework for building responsive and mobile-first websites with prebuilt components." },
    { name: "CSS", description: "Stylesheet language used to control the design and layout of web pages." },
    { name: "ExpressJS", description: "A minimalist web framework for Node.js that simplifies building APIs and server-side apps." },
    { name: "Git", description: "A distributed version control system that tracks code changes and enables collaboration." },
    { name: "GitHub", description: "A cloud platform for hosting Git repositories with collaboration and project management tools." },
    { name: "HTML", description: "The standard markup language for structuring content on web pages." },
    { name: "JavaScript", description: "The core programming language of the web, enabling interactive and dynamic content." },
    { name: "Material UI", description: "A React component library implementing Google's Material Design for modern UI development." },
    { name: "MongoDB", description: "A NoSQL database that stores data in flexible, JSON-like documents." },
    { name: "MySQL", description: "A relational database system that organizes data into structured tables using SQL." },
    { name: "NodeJS", description: "A JavaScript runtime that executes code outside the browser, often used for backend services." },
    { name: "Postman", description: "A tool for testing, debugging, and documenting APIs via HTTP requests and responses." },
    { name: "ReactJS", description: "A JavaScript library for building reusable, fast, and dynamic user interfaces." },
    { name: "TypeScript", description: "A superset of JavaScript that adds static typing and enhances scalability." }
];

function SkillsPage() {
    const theme = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
        }
    };

    return (
        <Box sx={{
            py: 4,
            // background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Container maxWidth="xl" sx={{
                px: { xs: 2, sm: 3, md: 4 },
                position: 'relative'
            }}>
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
                    Skills | Technologies
                </Typography>

                <Typography
                    // variant="h6"
                    component="p"
                    align="center"
                    sx={{
                        mb: 6,
                        color: 'text.secondary',
                        maxWidth: 600,
                        mx: 'auto',
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
                    }}
                >
                    Technologies and tools I use to create innovative and efficient solutions
                </Typography>

                <Box sx={{ opacity: mounted ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}>
                    <Swiper
                        spaceBetween={30}
                        modules={[Navigation, Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 12px; height: 12px;"></span>`;
                            }
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        navigation={true}
                        loop={true}
                        speed={800}
                        style={{
                            padding: "2rem 0 4rem",
                            '--swiper-navigation-color': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            '--swiper-pagination-bullet-inactive-color': '#ccc',
                            '--swiper-pagination-bullet-inactive-opacity': 1,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }}
                    >
                        {Object.entries(svgs).map(([path, module], idx) => {
                            const skillName = path.split("/").pop().replace(".svg", "").replaceAll("-", " ");
                            const skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
                            return (
                                <SwiperSlide key={path}>
                                    <Box sx={cardStyle}>
                                        <Box sx={{
                                            width: 80,
                                            height: 80,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            borderRadius: '50%',
                                            padding: '12px'
                                        }}>
                                            <img
                                                src={module.default || module}
                                                width="100%"
                                                // style={{ filter: 'brightness(0) invert(0)' }}
                                                alt={skillName}
                                            />
                                        </Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 1.5,
                                                fontWeight: 600,
                                                textAlign: 'center',
                                                color: '#000'
                                            }}
                                        >
                                            {skillName}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                textAlign: 'center',
                                                color: 'text.secondary',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {skill?.description || "Description not available"}
                                        </Typography>
                                    </Box>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
}

export default SkillsPage;