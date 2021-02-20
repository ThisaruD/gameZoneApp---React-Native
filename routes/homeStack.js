import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {backgroundColor:'#4EE9B1',height: 100},
            headerTintColor: '#fff',
        }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title:'GameZone',

                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title:'ReviewDetails',

                }}
            />
        </Stack.Navigator>
    );
}

export default HomeStack;
