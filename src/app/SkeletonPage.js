import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, useNavigate, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RouteDefinitions from './RouteDefinitions';
import store from '../redux/configureStore';

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

import { useSelector, useDispatch } from 'react-redux'

function SkeletonPage() {

  const itemCount = useSelector(state => state.itemCount)


  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);



  const urlList = "http://localhost:8080/category/list";
  let [categoryList, setCategoryList] = useState([]);


  useEffect(() => {
    let isSubscribed = true;

    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(urlList);
      // convert the data to json
      const json = await data.json();

      // set state with the result if `isSubscribed` is true
      if (isSubscribed) {
        setCategoryList(json);
      }
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);

    // cancel any future `setData`
    return () => isSubscribed = false;
  }, [urlList])



  return (
    <>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon /> Kategoriler
            </IconButton>
            <IconButton color="inherit" href='/home'>
              < HomeIcon />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <IconButton color="inherit" href='/cartSummary/1'>
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            {categoryList.map((category) => (
              <li>
                <a href={`/products/${category.categoryId}`}>{category.categoryName}</a>
              </li>
            ))}
          </List>
        </Drawer>
        <br></br>
        <br></br>
        <br></br>
      <div      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
      <RouteDefinitions />
      </div>
      </div>
    </>
  );
}

export default SkeletonPage;