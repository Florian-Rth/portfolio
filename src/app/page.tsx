'use client'; // Required for useContext and event handlers

import * as React from 'react';
import Button from '@mui/material/Button';
import { ColorModeContext } from '../components/ThemeRegistry'; // Adjust path if necessary

export default function Home() {
  const { toggleColorMode } = React.useContext(ColorModeContext);

  return (
    <div>
      Test
      <Button variant="outlined" onClick={toggleColorMode} sx={{ m: 1 }}>
        Toggle Dark Mode
      </Button>
    </div>
  );
}
