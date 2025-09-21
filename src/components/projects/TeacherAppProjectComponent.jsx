import React from 'react'
// Import multiple sizes
// import HomePageSm from '../../assets/projects/erp/homepage-sm.png'
// import HomePageMd from '../../assets/projects/erp/homepage-md.png'
// import HomePageLg from '../../assets/projects/erp/homepage-lg.png'
import TeacherAppPreview from '../../assets/projects/teacher-app/teacher-app-preview.png'
import { Box, Button, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function TeacherAppProjectComponent() {
    return (
        <Container
            sx={{
                // height: "100vh",
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 3,
                p: 4,
                textAlign: "center"
            }}
        >
            {/* Responsive Image */}
            <Box
                component="img"
                src={TeacherAppPreview}
                alt="ERP"
                sx={{
                    width: { xs: "50%", sm: "25%", md: "15%" }, // responsive sizing
                    borderRadius: 2,
                    mb: 2,
                    filter: "drop-shadow(0px 0px 20px rgba(118, 75, 162, 0.6))",
                    // content: {
                    //     xs: `url(${HomePageSm})`, // mobile
                    //     sm: `url(${HomePageMd})`, // tablet
                    //     md: `url(${HomePageLg})`, // desktop
                    // }
                }}
            />

            <Typography variant="h4" gutterBottom>Teacher App</Typography>
            <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                An enterprise solution for Teachers for students management.
            </Typography>
            <Button component={Link} to="/teacher-app" variant="contained">
                View Case Study
            </Button>
        </Container>
    )
}

export default TeacherAppProjectComponent
