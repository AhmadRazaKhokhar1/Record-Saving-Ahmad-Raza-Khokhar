import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div>
      <div className="footer">
            <div className="footerIcons">
                <a href="https://www.facebook.com/ahmadrazakhokhar786/">
                   <FacebookIcon label='Facebook' />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-raza-/?originalSubdomain=pk">
                   <InstagramIcon label='Instargram' />
                </a>
                <a href="https://www.linkedin.com/in/ahmad-raza-/?originalSubdomain=pk">
                    <LinkedInIcon label='LinkedIn' />
                </a>
            </div>
      </div>
    </div>
  )
}
