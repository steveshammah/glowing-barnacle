/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MenuScreen from '../screens/MenuScreen';
import NotFoundScreen from '../screens/ChannelScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LatestContentScreen from '../screens/LatestContentScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SubscribeScreen from '../screens/SubscribeScreen';
import ChannelScreen from '../screens/ChannelScreen';
import ShowScreen from '../screens/ShowScreen';
import { UserIcon } from 'react-native-heroicons/solid';



const MyTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },

};


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer theme={DarkTheme}>
     {/* <DrawerNavigator /> */}
     <StackNavigator />
    </NavigationContainer>)

}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }}  />
      <Stack.Screen name="Channel" component={ChannelScreen} />
        <Stack.Screen name="Latest" component={ProfileScreen}  />
        <Stack.Screen name="Profile" component={ProfileScreen}  />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Show" component={ShowScreen}  options={{ headerShown: false }} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({navigation}) {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Root"
        screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
   

      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Discover',
          tabBarIcon: ({ color }) => <TabBarIcon name="compass" color={color} size={20} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
               <UserIcon
                size={25}
                color={'white'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Latest"
        component={LatestContentScreen}
        options={{
          title: 'Latest',
          tabBarIcon: ({ color }) => <TabBarIcon name="clock-o" color={color} size={20} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <UserIcon
                size={25}
                color={'white'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          title: 'Upload',
          tabBarIcon: ({ color }) => <TabBarIcon name="upload" color={color} size={20} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
                <UserIcon
                size={25}
                color={'white'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} size={20} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Profile')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
               <UserIcon
                size={25}
                color={'white'}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

// const DrawerNavigator = ({navigation}) => {
//   return (
//     <Drawer.Navigator initialRouteName="Music"  >
//       <Drawer.Screen name="Music" component={HomeScreen} />
//       <Drawer.Screen name="Radio" component={LatestContentScreen} />
//       <Drawer.Screen name="Events" component={MenuScreen} />
//       <Drawer.Screen name="G-Spot" component={ProfileScreen} />
//       <Drawer.Screen name="Channel" component={ChannelScreen} options={ 
//         {
//           title: 'Oops!',
//           drawerIcon: ({ color }) => <TabBarIcon name="compass" color={color} size={20} />
//         }
        
//        } />
//       <Drawer.Screen name="About" component={ProfileScreen} />
//       <Drawer.Screen name='Settings' component={SubscribeScreen} />
//       <Drawer.Screen name='Logout' component={ProfileScreen} />
//       <Drawer.Screen name="Tab Nav" component={BottomTabNavigator} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   )
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
