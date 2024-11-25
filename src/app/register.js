import React from 'react';
import { View, StyleSheet, Image, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import MyButton from '../components/MyButton';
import { useRouter } from 'expo-router';
import { KeyboardAvoidingView } from 'react-native';

const Register = () => {const router = useRouter();
    
  return (
    <SafeAreaView style={regStyle.container}>

      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 

          <ScrollView contentContainerStyle={regStyle.scrollContainer}>

            <View style={{ ...regStyle.section, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/tweeter.png')} style={regStyle.logo} />
            </View>
            <View style={regStyle.section}>
              <TextInput
                label={'Full name'}
                placeholder='Full name'
                style={[regStyle.textInput, { backgroundColor: '#f0f8ff' }]}
                theme={{ colors: { primary: '#0277bd', underlineColor: 'transparent' } }}
              />
              <TextInput
                label={'Email'}
                placeholder='Email'
                style={[regStyle.textInput, { backgroundColor: '#f0f8ff' }]}
                theme={{ colors: { primary: '#0277bd', underlineColor: 'transparent' } }}
              />
              <TextInput
                label={'Password'}
                placeholder='Password'
                style={[regStyle.textInput, { backgroundColor: '#f0f8ff' }]}
                theme={{ colors: { primary: '#0277bd', underlineColor: 'transparent' } }}
                secureTextEntry
              />
            </View>
            <View style={{ ...regStyle.section, marginTop: 40 }}>
              <View style={{ margin: 5 }}>
                <MyButton text='Register' action={() => console.log("register")} mode='contained' size='small' />
              </View>
              <View style={{ margin: 5 }}>
                <MyButton text='Login' action={() => router.back()} mode='contained' size='small' />
              </View>
            </View>

          </ScrollView>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default Register;

const regStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  textInput: {
    margin: 10,
  },
});
