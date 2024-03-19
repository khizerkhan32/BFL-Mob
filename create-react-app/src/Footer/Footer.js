import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

export const MENU_OPEN = '@customization/MENU_OPEN';

const StyledFooter = styled('div')({
  borderTop: '5px solid white',
  padding: '16px 0',
  backgroundColor: 'white',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',

  // Media query for responsive layout
  '@media (max-width: 500px)': {
    flexDirection: 'column',
    textAlign: 'center',
    marginRight: '10rem'
  }
});
const StyledLinks = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Make links appear in a column
  alignItems: 'center', // Center align links
  marginTop: '8px', // Add margin for spacing
  gap: '16px',
  marginRight: '20px' // Adjust the gap according to your design
});

const StyledLink = styled('a')({
  color: 'black',
  textDecoration: 'none'
});

const Footer = () => {
  const leftDrawerOpened = useSelector((state) => state.customization.opened);

  return (
    <StyledFooter>
      <div className="leftContent" style={{ marginLeft: leftDrawerOpened ? '17rem' : '0rem' }}>
        <Typography sx={{ whiteSpace: 'nowrap', marginRight: '15rem' }}>copy right 2023 Your Company. All rights reserved.</Typography>
      </div>

      <StyledLinks>
        <StyledLink href="https://www.example.com/disclaimer/">Disclaimer</StyledLink>
        <StyledLink href="https://www.example.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
          Privacy
        </StyledLink>
        <StyledLink href="https://www.example.com/security/" target="_blank" rel="noopener noreferrer">
          Security
        </StyledLink>
        <StyledLink href="https://www.example.com/contact-us/" target="_blank" rel="noopener noreferrer">
          Contact Us
        </StyledLink>
        <StyledLink href="https://www.example.com/user-guide/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
          User Guide
        </StyledLink>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;
