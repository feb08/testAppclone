import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomTabNavigator from '../components/BottomTabNavigator';
import home from '../screens/home';
import favorite from '../screens/favorite';
import custom from '../screens/custom';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
            <Tab.Screen name="Home" component={home}/>
            <Tab.Screen name="Fav" component={favorite}/>
        </Tab.Navigator>
    );
};

const Router = () => {
    return(
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({

});