import { Box, Typography, Button, Container, Stack } from '@mui/material';
// import bgVideo from '../assets/hero-bg4.mp4'; // <-- BigBang effect
// import bgVideo from '../assets/hero-bg7.mp4'; // <-- Blue and Pink Smoke
// import bgVideo from '../assets/hero-bg8.mp4'; // <-- Smoke burst from left and right
import bgVideo from '../assets/hero-bg4.mp4'; // <-- Smoke burst from left and right
import nature from '../assets/nature.jpg'; // <-- add your video file here

function HeroPage({ handleScroll }) {

    return (
        <Container
            sx={{
                height: '100%',
                p: '0 !important',
                maxWidth: '100% !important',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                poster={nature}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                    // borderRadius: '0.8rem'
                }}
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero content */}
            <Box
                sx={{
                    minHeight: '100vh',
                    w100idth: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    // p: 4,
                    color: 'white', // ensures text is visible on video
                    backgroundColor: 'rgba(0,0,0,0.4)', // optional dark overlay for readability
                    // borderRadius: 2,
                }}
            >
                <Typography
                    variant="h2"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        position: "relative",
                        display: "inline-block",
                        background: "linear-gradient(145deg, #000000, #000000, #f2f2f2f2, #000000 , #000000)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "shimmer 5s linear infinite",
                        "@keyframes shimmer": {
                            "0%": { backgroundPosition: "0% 50%" },
                            "100%": { backgroundPosition: "200% 50%" },
                        },
                    }}
                >
                    John Wesley
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Full-Stack Developer | React.js • Node.js • Express.Js • Mysql • MongoDB
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ maxWidth: 600, mb: 3 }}
                >
                    Building scalable, responsive, and high-performance applications with
                    a focus on clean UI/UX and cloud-ready deployments.
                </Typography>

                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/JohnWesleyResume(Sept2025).pdf"
                        target="_blank"
                    >
                        Download Resume
                    </Button>
                    <Button variant="outlined" color="primary" onClick={() => handleScroll('contact')}>
                        Contact Me
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}

export default HeroPage;
