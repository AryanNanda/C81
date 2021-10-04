import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Profile from "../screens/Profile"
const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
  <Drawer.Screen name = "Home" componenent = {TabNavigator}/>
  <Drawer.Screen name = "Profile" componenent = {Profile}/>
     </Drawer.Navigator>
  )
}
export default DrawerNavigator 