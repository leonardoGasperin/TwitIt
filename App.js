import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Pages/Home/home';
import Register from './src/Pages/Register/register';
import Postages from './src/Pages/Tab/Postages/postage';

export default function App() {
    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function AppStackNav() {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
            </Stack.Navigator>
        )

    }

    function AppBottomTabNav() {
        return(
            <Tab.Navigator initialRouteName='Postages'>
                <Tab.Screen name='Postages' component={Postages} options={{headerShown: false}}/>
            </Tab.Navigator>
        )

    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='AppStackNav'>
                <Stack.Screen name='AppStackNav' component={AppStackNav} options={{headerShown: false}}/>
                <Stack.Screen name='AppBottomTabNav' component={AppBottomTabNav} options={{headerShown: false}}/>
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
    
}
