import React from 'react';
import { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter,useNavigate, Router } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  BlurCircular as HomeIcon
} from '@mui/icons-material';

function HomePage() {

  return (
    <div>
            Hoşgeldiniz
    </div>
  );
}

export default HomePage;