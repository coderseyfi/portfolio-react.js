import './NavbarComponents.css'
import { Link } from "react-router-dom"
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"

export const socialIcons = [
    <FaInstagram />,
    <FaLinkedin />,
    <FaTwitter />,
    <FaGithub />,
]

export const Logo = (
    <Link to='/' className='logo'>
        Seyfaddin Najafli
    </Link>
);

export const navItems = [
    {
        name: "Home",
        id: '/'
    },
    {
        name: "About",
        id: 'about'
    },
    {
        name: "Projects",
        id: 'portfolio'
    },
    {
        name: "FAQ's",
        id: 'faq'
    },
    {
        name: "Appointment",
        id: 'appointment'
    }
]