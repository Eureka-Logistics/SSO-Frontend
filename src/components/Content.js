import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';

import { SitemarkIcon } from './CustomIcons';

// Import Montserrat font from Google Fonts
import '@fontsource/montserrat';

const items = [
  {
    icon: <LinkRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Streamlined Access',
    description:
      'Easily log in across all your connected services in one step, saving you time and hassle.',
  },
  {
    icon: <LockRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Reliable Security',
    description:
      'Trust a robust, secure authentication experience that keeps your data protected.',
  },
  {
    icon: <LanguageRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'User-Centric Design',
    description:
      'Enjoy an intuitive, responsive interface that fits naturally into your workflow.',
  },
  {
    icon: <PrecisionManufacturingRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Cutting-Edge Technology',
    description:
      'Experience powerful functionality tailored to your needs, backed by the latest advancements.',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 4,
        maxWidth: 450,
        fontFamily: 'Montserrat, sans-serif', // Set the default font family to Montserrat
      }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <SitemarkIcon />
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography
              gutterBottom
              sx={{ fontWeight: 'medium', fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontFamily: 'Montserrat, sans-serif' }}
            >
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
