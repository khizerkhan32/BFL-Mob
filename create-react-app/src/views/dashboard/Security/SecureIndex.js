import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

const CollapsibleMenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.isOpen);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom onClick={handleClick}>
        {item.title}
      </Typography>
      {isOpen && (
        <div>
          {item.children.map((child) => (
            <Typography variant="h6" key={child.id} gutterBottom>
              {child.title}
            </Typography>
          ))}
        </div>
      )}
    </div>
  );
};

export default CollapsibleMenuItem;
