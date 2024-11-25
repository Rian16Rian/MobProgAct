import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const DashboardLayout = () => {
  return (
     <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'white',
            tabBarActiveBackgroundColor: '#347dce',
            tabBarLabelStyle: {
                fontSize: 12
            },
            tabBarStyle:{
                margin: 10,
                borderRadius: 10,
            },            
            tabBarShowLabel: true
        }} 
     >
        <Tabs.Screen name='index'
            options={{
                title: 'Home',  
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'home': 'home-outline'} size={24} color='#73b3f9' />
            }}
        />
        <Tabs.Screen name='profile'
            options={{
                title: 'Profile',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'account': 'account-outline'} size={24} color='#73b3f9' />
            }}
        />
        <Tabs.Screen name='settings'
            options={{
                title: 'Settings',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline'} size={24} color='#73b3f9' />
            }}
        />
     </Tabs>
  )
}

export default DashboardLayout