import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

export default function Layout(){
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: '#F4D0DD' },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#7E0A3F',
        }}>
            <Tabs.Screen name='home'
                options={{title: 'Home',
                tabBarIcon: ({ color }) => (<Ionicons name="home-outline" size={30} color={color} />),
            }} />
            <Tabs.Screen name='cart'
                options={{title: 'cart',
                tabBarIcon: ({color}) => (<Ionicons name="cart-outline" size={30} color={color}/>),
            }} />
            <Tabs.Screen name='uploadItem'
                options={{title: 'uploadItem',
                tabBarIcon: ({color}) => (<Ionicons name="add-circle" size={30} color={color}/>),
            }} />
            <Tabs.Screen name='favorites'
                options={{title: 'favorites',
                tabBarIcon: ({ color }) => (<Ionicons name="bookmark-outline" size={30} color={color} />),
            }} />
            <Tabs.Screen name='profile'
                options={{title: 'Profile',
                tabBarIcon: ({ color }) => (<Ionicons name="person-outline" size={30} color={color} />),
            }} />
        </Tabs>
    );
}