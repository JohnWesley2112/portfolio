import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import multiple sizes
// import HomePageSm from '../assets/projects/erp/homepage-sm.png'
import HomePageSm from '../assets/projects/erp/homepage-sm.png'
import HomePageMd from '../assets/projects/erp/homepage-md.png'
import HomePageLg from '../assets/projects/erp/homepage-lg.png'
import ErpProjectComponent from '../components/projects/ErpProjectComponent';
import TeacherAppProjectComponent from '../components/projects/TeacherAppProjectComponent';
import PosProjectComponent from '../components/projects/PosProjectComponent';

function ProjectsPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
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
                Projects
            </Typography>

            <Typography
                // variant="h6"
                component="p"
                align="center"
                sx={{
                    mb: 2,
                    color: 'text.secondary',
                    maxWidth: 600,
                    mx: 'auto',
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
                }}
            >
                Projects that showcase my skills and expertise in web development.
            </Typography>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); width: 12px; height: 12px;"></span>`;
                    }
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                navigation={true}
                loop={true}
                speed={500}
                style={{
                    // padding: "2rem 0 4rem",
                    '--swiper-navigation-color': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    '--swiper-pagination-bullet-inactive-color': '#ccc',
                    '--swiper-pagination-bullet-inactive-opacity': 1,
                }}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <ErpProjectComponent />
                </SwiperSlide>

                <SwiperSlide>
                    <TeacherAppProjectComponent />
                </SwiperSlide>
                <SwiperSlide>
                    <PosProjectComponent />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default ProjectsPage
