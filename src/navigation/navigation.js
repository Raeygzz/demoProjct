import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HeaderBackButton from "../components/layouts/header/HeaderBackButton";

import Launch from '../screens/welcome/launch';
import Login from '../screens/login/login';
import Signup from '../screens/signup/signup';

import DashboardBar from "./bottomDashboard";

import Liability from '../screens/dashboard/home/liability';

import Product from '../screens/dashboard/inventory/product';
import Client from '../screens/dashboard/inventory/client';
import AddProduct from '../screens/dashboard/inventory/addProduct';
import AddClient from '../screens/dashboard/inventory/addClient';
import ProductDetails from '../screens/dashboard/inventory/productDetail';
import ClientDetails from '../screens/dashboard/inventory/clientDetail';

import OrderRecord from '../screens/dashboard/orderRecord/orderRecord';
import AddOrderRecord from '../screens/dashboard/orderRecord/addOrderRecord';
import OrderRecordDetails from '../screens/dashboard/orderRecord/orderRecordDetail';


const RootStack = createStackNavigator({
  // Home
  Welcome: {
    screen: Launch,
    headerMode: "none",
    navigationOptions: {}
  },

  // Login
  Login: Login,

  // Signup
  Signup: Signup,

  // Dashboard
  DashboardBar: {
    screen: DashboardBar,
    headerMode: "none",
    navigationOptions: {
      header: null
    }
  },

  // Home
  Liability: Liability,

  // Inventory
  AddProduct: AddProduct,
  AddClient: AddClient,
  Product: Product,
  Client: Client,
  ProductDetails: ProductDetails,
  ClientDetails: ClientDetails,

  // Order Record
  OrderRecord: OrderRecord,
  AddOrderRecord: AddOrderRecord,
  OrderRecordDetails: OrderRecordDetails
},
  {
    headerLayoutPreset: "center",
    initialRouteName: 'Welcome',
    mode: "card",
    headerMode: "float",
    headerTitleStyle: "red",
    cardStyle: {
      backgroundColor: "none",
      backfaceVisibility: "hidden"
    },

    // common navigation styles
    defaultNavigationOptions: {
      headerLeft: <HeaderBackButton onPress={() => this.navigation.goBack(null)} />,
      headerStyle: {
        backgroundColor: "transparent",
        height: 44,
        marginBottom: 25,
        marginTop: 55
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: 'Apercu Medium',
        fontSize: 20
      }
    },
  });

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
