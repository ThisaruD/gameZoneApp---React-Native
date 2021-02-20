import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from "../screens/about";

const Stack = createStackNavigator();

function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor:'#4EE9B1',height: 100},
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="about"
                component={About}
                options={{
                    title:'about',

                }}
            />

        </Stack.Navigator>
    );
} 

export default AboutStack;
