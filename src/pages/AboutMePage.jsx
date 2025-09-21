import { Box, Grid, Typography, Button, Container, Stack } from '@mui/material';
import HeroImage from '../assets/optimized-images/HeroImage.png'; // Ensure you have an image at this path
import AOSCards from '../components/AOSCards';
import { ArrowRight } from '@mui/icons-material';

function AboutMePage({ handleScroll }) {
    return (
        // <Container sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Container sx={{ height: '100%', py: { xs: 2, md: 8 }, }}>
            <Grid container spacing={4} alignItems={'center'} py={{ xs: 1, sm: 5 }}>
                {/* Content Grid Item */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <AOSCards animateType='fade-right' duration={1000}>
                        <Typography
                            variant="h6"
                            component="h6"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: 'primary.main',
                            }}
                        >
                            Hello There! I'm
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '3.5rem', md: '3.5rem' }
                            }}
                        >
                            John
                            Wesley
                        </Typography>
                        <Typography
                            variant="h5"
                            component={'p'}
                            fontSize={{ xs: '1.2rem', md: '1.5rem' }}
                            color="text.secondary"
                            fontWeight={200}
                            sx={{ mb: 3 }}
                        >
                            I'm a web designer and developer. My areas of interst include User-Interface Design. Having a background in Engineering, i'm passionate about connecting the dots between the design, goals and technology.
                        </Typography>
                        <Button
                            variant="contained"
                            color='primary'
                            size="large"
                            onClick={() => handleScroll('contact')}
                            endIcon={<ArrowRight fontSize='large' />}
                            sx={{
                                py: 1.5,
                                px: 4,
                                fontSize: '1.1rem'
                            }}
                        >
                            Get Started
                        </Button>
                    </AOSCards>
                </Grid>
                {/* Image Grid  - Changes order based on screen size */}
                <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <AOSCards animateType='fade-left' duration={1000}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                border: '1px solid',
                                borderColor: 'primary.main',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* Circle background */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '5%',
                                    top: '20%',
                                    width: '130%',
                                    height: '130%',
                                    // inset: 0, // fill parent
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main',
                                    zIndex: -1,
                                    // m: 'auto'
                                }}
                            />
                            {/* Image */}
                            <Box
                                component="img"
                                src={HeroImage}
                                alt="Hero Image"
                                sx={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Box>

                    </AOSCards>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AboutMePage