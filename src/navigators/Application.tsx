import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LandingIcon from '../assets/svgs/ic_landing';
import WorldIcon from '../assets/svgs/ic_world';
import EmailIcon from '../assets/svgs/ic_email';
import NotificationIcon from '../assets/svgs/ic_notification';
import MenuIcon from '../assets/svgs/ic_menu';
import {HomeScreen, SettingsScreen} from '../screens';
import {SafeAreaView} from 'react-native-safe-area-context';

const renderTabIcon = (_focused: boolean) => <LandingIcon />;
const renderTabIconTwo = (_focused: boolean) => <WorldIcon />;
const renderTabIconThree = (_focused: boolean) => <EmailIcon />;
const renderTabIconFour = (_focused: boolean) => <NotificationIcon />;
const renderTabIconFive = (_focused: boolean) => <MenuIcon />;

const Tab = createBottomTabNavigator();

export default function ApplicationNavigator() {
  return (
    <SafeAreaView style={{flex: 1}} edges={['top']}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => renderTabIcon(focused),
            }}
            component={HomeScreen}
          />
          <Tab.Screen
            name="Profile"
            component={SettingsScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => renderTabIconTwo(focused),
            }}
          />
          <Tab.Screen
            name="Message"
            component={SettingsScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => renderTabIconThree(focused),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={SettingsScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => renderTabIconFour(focused),
            }}
          />
          <Tab.Screen
            name="Menu"
            component={SettingsScreen}
            options={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarIcon: ({focused}: any) => renderTabIconFive(focused),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
