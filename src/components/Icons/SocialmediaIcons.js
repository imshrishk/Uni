import React from 'react'
import './SocialmediaIcons.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialmediaIcons = () => {
    return (
        <>
            <a href="instagram.com"><i class="fab fa-instagram fa-2x" /></a>
            <a href="facebook.com"><i class="fab fa-facebook fa-2x" /></a>
            <a href="twitter.com"><i class="fab fa-twitter fa-2x" /></a>
            <a href="linkedin.com"><i class="fab fa-linkedin fa-2x" /></a>
        </>
    )
}

export default SocialmediaIcons;