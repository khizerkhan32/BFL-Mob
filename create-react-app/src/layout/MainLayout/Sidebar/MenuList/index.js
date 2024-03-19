import React from 'react';
import { Typography } from '@mui/material';
import NavGroup from './NavGroup';
import menuItem from 'menu-items';

const MenuList = () => {
  // Check if menuItem is defined and has items array
  if (!menuItem || !menuItem.items || !Array.isArray(menuItem.items)) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error: Menu items not found
      </Typography>
    );
  }

  const navItems = menuItem.items.map((item, index) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={index} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
