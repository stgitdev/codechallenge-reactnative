import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Colors from '../../Colors';

import Home from './Home/Home';
import CancerDetails from './Home/CancerDetails';
import WebDetails from './Home/WebDetails';

import More from './More/More';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home'}}
      />
      <HomeStack.Screen
        name="CancerDetails"
        component={CancerDetails}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
      <HomeStack.Screen
        name="WebDetails"
        component={WebDetails}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </HomeStack.Navigator>
  );
}

const MoreStack = createStackNavigator();

function MoreScreen() {
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.blue,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MoreStack.Screen
        name="More"
        component={More}
        options={{title: 'More'}}
      />
      <MoreStack.Screen
        name="WebDetails"
        component={WebDetails}
        options={({route}) => ({
          title: route.params.title,
        })}
      />
    </MoreStack.Navigator>
  );
}
/**
 * @author Stanley George
 * @function Tabbar
 **/
const Tabbar = props => {
  const getColorByRouteName = route => {
    if (route === 'Home') {
      return 'home-outline';
    } else if (route === 'More') {
      return 'reorder-four-outline';
    }
  };
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons
                name={getColorByRouteName(route.name)}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </>
  );
};

export default Tabbar;