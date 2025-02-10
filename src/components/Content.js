import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PrecisionManufacturingRoundedIcon from '@mui/icons-material/PrecisionManufacturingRounded';
import logo from './eureka_group_logo.png';

import { SitemarkIcon } from './CustomIcons';

// Import Montserrat font from Google Fonts
import '@fontsource/montserrat';

const items = [
  {
    icon: <LinkRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Akses Mudah',
    description:
      'Login sekali untuk terhubung ke semua aplikasi internal perusahaan, lebih cepat dan praktis.',
  },
  {
    icon: <LockRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Keamanan Terjamin',
    description:
      'Data Anda tetap aman dengan sistem autentikasi yang andal dan terlindungi.',
  },
  {
    icon: <LanguageRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Desain Intuitif',
    description:
      'Antarmuka yang responsif dan mudah digunakan, mendukung kenyamanan dalam bekerja.',
  },
  {
    icon: <PrecisionManufacturingRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Teknologi Canggih',
    description:
      'Didukung oleh inovasi terbaru untuk memastikan akses yang lancar dan efisien.',
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
      <img src={logo} style={{ width: '30%', height: '30%', objectFit: 'cover' }} />
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
