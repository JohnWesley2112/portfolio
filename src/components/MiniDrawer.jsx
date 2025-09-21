import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import AOSCards from "./AOSCards";
import HeroPage from "../pages/HeroPage";
import AboutMePage from "../pages/AboutMePage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";
import Logo from '../assets/logo.svg'
import mobileNavBanner from '../assets/mobile_nav_banner.jpg'
import { AutoAwesome, Build, Email, FolderSpecial, MilitaryTech, Person, School, WorkHistory } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const navLinks = [
    { LinkName: "Home", iconName: <AutoAwesome />, targetId: "hero" },
    { LinkName: "About", iconName: <Person />, targetId: "about" },
    { LinkName: "Experience", iconName: <WorkHistory />, targetId: "experience" },
    { LinkName: "Projects", iconName: <FolderSpecial />, targetId: "projects" },
    { LinkName: "Skills", iconName: <Build />, targetId: "skills" },
    // { LinkName: "Certificates", iconName: <MilitaryTech />, targetId: "certificates" },
    // { LinkName: "Education", iconName: <School />, targetId: "education" },
    { LinkName: "Contact", iconName: <Email />, targetId: "contact" },
];

export default function MiniDrawer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);
    const [activeSection, setActiveSection] = useState("hero");

    // helper that scrolls to a real DOM element and accounts for AppBar height
    const scrollToId = (id) => {
        const section = document.getElementById(id);
        if (!section) return;
        // get MUI AppBar height (fallback to 64)
        const appBar = document.querySelector(".MuiAppBar-root");
        const headerOffset = (appBar && appBar.offsetHeight) ? appBar.offsetHeight : 64;
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
        // const offsetPosition = elementPosition - headerOffset - 8; // small gap
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    const handleScroll = (id) => {
        if (isMobile) {
            // close the drawer first (so body can scroll); then scroll after the close animation
            setOpen(false);

            const closeDuration = (theme && theme.transitions && theme.transitions.duration && theme.transitions.duration.leavingScreen)
                ? theme.transitions.duration.leavingScreen
                : 225;

            // small buffer after the animation
            const delay = closeDuration + 50;

            setTimeout(() => {
                scrollToId(id);
            }, delay);
        } else {
            // desktop: scroll immediately
            scrollToId(id);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -50% 0px", // triggers when section is halfway visible
                threshold: 0.3,
            }
        );

        navLinks.forEach((link) => {
            const el = document.getElementById(link.targetId);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={!isMobile && open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={isMobile ? handleDrawerOpen : () => setOpen(true)}
                        edge="start"
                        sx={[
                            { marginRight: 5 },
                            !isMobile && open && { display: "none" },
                        ]}
                    >
                        <img src={Logo} alt="Logo" width={'40rem'} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        JOHN WESLEY | Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>

            {isMobile ? (
                <MuiDrawer
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerClose}
                    ModalProps={{ keepMounted: true }}
                >
                    <DrawerHeader>
                        <img src={mobileNavBanner} width={100} />
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {navLinks.map((nav) => (
                            <ListItem key={nav.LinkName} disablePadding>
                                <ListItemButton
                                    onClick={() => handleScroll(nav.targetId)}>
                                    <ListItemIcon>{nav.iconName}</ListItemIcon>
                                    <ListItemText primary={nav.LinkName} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </MuiDrawer>
            ) : (
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader sx={{ justifyContent: open ? "space-between" : "center" }}>
                        <img src={mobileNavBanner} width={'80%'} />
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {navLinks.map((text) => (
                            <ListItem key={text.LinkName} disablePadding sx={{ display: "block" }}>
                                <ListItemButton
                                    onClick={() => handleScroll(text.targetId)}
                                    selected={activeSection === text.targetId} // <-- this highlights it
                                    sx={{
                                        minHeight: 48,
                                        px: 2.5,
                                        justifyContent: open ? "initial" : "center",
                                        "&.Mui-selected": {
                                            backgroundColor: theme.palette.action.selected,
                                            color: theme.palette.primary.main,
                                            "& .MuiListItemIcon-root": {
                                                color: theme.palette.primary.main,
                                            },
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : "auto", justifyContent: "center" }}>
                                        {text.iconName}
                                    </ListItemIcon>
                                    <ListItemText primary={text.LinkName} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            )}

            <Box component="main" sx={{
                flexGrow: 1,
                //  px: { xs: 1, md: 5 }, py: { xs: 1, md: 3 },
                overflowX: 'hidden', width: '100%'
            }}>
                <DrawerHeader />
                <div id="hero"><HeroPage handleScroll={handleScroll} /></div>
                <div id="about"><AboutMePage handleScroll={handleScroll} /></div>
                <div id="experience"><ExperiencePage /></div>
                <div id="projects"><ProjectsPage /></div>
                <div id="skills"><SkillsPage /></div>
                <div id="contact"><ContactPage /></div>
                <Box
                    component="footer"
                    sx={{
                        mt: 5,
                        py: 2,
                        textAlign: "center",
                        backgroundColor: theme.palette.background.paper,
                        borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    © {new Date().getFullYear()} John Wesley. All rights reserved.
                </Box>
            </Box>
        </Box>
    );
}

