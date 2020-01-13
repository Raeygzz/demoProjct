import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

// import screens
import Home from "../screens/dashboard/home/home";
import Inventory from "../screens/dashboard/inventory/inventory";
import OrderRecord from "../screens/dashboard/orderRecord/orderRecord";
import Settings from "../screens/dashboard/settings/settings";
// import screens


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Icon;
  let iconName;
  if (routeName === 'Home') {
    iconName = `home`;
  } else if (routeName === 'Inventory') {
    iconName = `layers`;
  } else if (routeName === 'OrderRecord') {
    iconName = `folder`;
  } else if (routeName === 'Settings') {
    iconName = `settings`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={20} color={tintColor} style={{ lineHeight: 22 }} />;
};

const DashboardBar = createBottomTabNavigator(
  {
    Home: { screen: Home },
    Inventory: { screen: Inventory },
    OrderRecord: { screen: OrderRecord },
    Settings: { screen: Settings },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    backBehavior: "initialRoute",
    lazy: true,
    keyboardHidesTabBar: true,
    tabBarOptions: {
      activeTintColor: '#FFBD00',
      inactiveTintColor: 'white',
      activeBackgroundColor: "transparent",
      inactiveBackgroundColor: "transparent",
      showIcon: true,
      labelStyle: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: "Apercu Light",
        paddingBottom: 14
      },
      style: {
        backgroundColor: "transparent",
        elevation: 0,
        shadowOpacity: 0,
        shadowColor: "transparent",
        borderTopColor: "transparent",
        height: 60,
        alignItems: "center"
      },
    },
  }
)

export default DashboardBar;


// const DashboardBar = createAppContainer(createBottomTabNavigator({
//   Product: { screen: Product },
//   Amount: { screen: Amount },
//   PurchaseOrderRecord: {screen: PurchaseOrderRecord},
//   Profile:{ screen: Profile }
// },
// {
//   defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, horizontal, tintColor }) => {
//       const { routeName } = navigation.state;
//       let IconComponent = Icon;
//       let iconName;
//       if (routeName === 'Product') {
//         iconName = `layers`;

//       } else if (routeName === 'Amount') {
//         iconName = `organization`;

//       } else if (routeName === 'PurchaseOrderRecord') {
//         iconName = `folder`;

//       } else if (routeName === 'Profile') {
//         iconName = `user`;
//       }

//       // You can return any component that you like here!
//       return <IconComponent name={iconName} size={25} color={tintColor} />;
//     },
//   }),
//   backBehavior:"initialRoute",
//   lazy: true,
//   keyboardHidesTabBar: true,
//   tabBarOptions: {
//     activeTintColor: '#FFBD00',
//     inactiveTintColor: 'white',
//     activeBackgroundColor:"transparent",
//     inactiveBackgroundColor:"transparent",
//     showIcon: true,
//     labelStyle:{
//       fontSize:12,
//       lineHeight:15,
//       fontFamily:"Apercu Light",
//       paddingBottom:14
//     },
//     style:{
//       backgroundColor:"#171635",
//       elevation: 0,
//       shadowOpacity:0,
//       shadowColor: "transparent",
//       borderTopColor:"transparent",
//       height:60,
//       alignItems:"center"
//     },
//   },
// })
// );

// export default DashboardBar;
