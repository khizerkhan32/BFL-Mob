import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, OutlinedInput, Avatar } from '@mui/material';
import User1 from 'assets/images/users/user-round.svg'; // Import the image file

// Styles
const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  width: 350,
  marginLeft: 16,
  paddingLeft: 16,
  paddingRight: 16,
  borderRadius: 10,
  borderColor: theme.palette.primary.main,
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  '& input': {
    background: 'transparent !important',
    paddingLeft: '4px !important',
    cursor: 'not-allowed', // Disable cursor for the input
    fontFamily: 'Arial, sans-serif', // Custom font
    fontSize: '16px', // Custom font size
    fontWeight: 'bold', // Custom font weight
    color: '#333' // Custom font color
  },
  [theme.breakpoints.down('lg')]: {
    width: 250
  },
  [theme.breakpoints.down('md')]: {
    width: '70%',
    marginLeft: 4,
    background: '#fff'
  }
}));

// SearchSection component
const SearchSection = () => {
  const theme = useTheme(); // Get the current theme

  return (
    <Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <StyledInput
          startAdornment={
            // Avatar as the startAdornment
            <Avatar
              src={User1} // Add the image source
              sx={{
                marginRight: '8px',
                width: '35px',
                height: '35px',
                border: '2px solid #fff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#f0f0f0'
              }}
            />
          }
          value="Hey! Jossy Sultan" // Custom font applied to this text
          readOnly // Set input as read-only
          theme={theme}
        />
      </Box>
    </Box>
  );
};

export default SearchSection;
