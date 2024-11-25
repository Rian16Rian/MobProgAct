import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useRouter } from 'expo-router'

const Settings = () => {
  const router = useRouter();

  const buttonColor = '#0e62a3'; 
  const textColor = '#FFFFFF';   

  return (
    <View>
      <Text>Settings</Text>
      <Button mode="contained" onPress={() => router.replace('/')} style={{ backgroundColor: buttonColor }} labelStyle={{ color: textColor }}>Logout</Button>
    </View>
  )
}

export default Settings