import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const toggleDarkMode = () => {setIsDarkMode(!isDarkMode)};
  useEffect(() => {const time = new Date().toLocaleString(); setCurrentTime(time)}, []);

  return (
    <SafeAreaView

      style={ [styles.container, {backgroundColor: isDarkMode ? '#000' : '#fff'}] } >
        
      <View style={styles.profilePictureContainer}>
        <Image source = {require('../../../assets/picture.png')} style = {styles.profileImage} />
      </View>

      <View style={styles.avatarContainer}>

        <Text style={ [styles.userName, {color: isDarkMode ? '#fff' : '#000'}] } >
          Rianson Amar
        </Text>

        <Text style={ [styles.joinedText, {color: isDarkMode ? '#ccc' : '#666'}] } >
          Joined: {currentTime}
        </Text>

      </View>

      <View style={styles.iconRow}>
        <IconButton
          icon="account-edit"
          size={30}
          onPress={() => console.log('Manage User')}
        />

        <IconButton
          icon="bell"
          size={30}
          onPress={() => console.log('Notifications')}
        />

        <IconButton
          icon={isDarkMode ? 'weather-sunny' : 'weather-night'}
          size={30}
          onPress={toggleDarkMode} 
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePictureContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 80,
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  joinedText: {
    marginTop: 5,
    fontSize: 14,
    fontStyle: 'italic',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default Profile