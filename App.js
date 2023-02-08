import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import SingUp from './src/screens/auth/SignUp';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SignIn from './src/screens/auth/SignIn';
import Config from "react-native-config";



const GOOGLE_WEB_CLIENT_ID = "759709836835-1fkmtoa4drg98eqso1omeur87a2f2qr8.apps.googleusercontent.com"


const App = () => {
  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  return (
    // safeAreaView prevents text and components from being in the status bar, so its safe to wrap things in one
    <SafeAreaView> 
      <SignIn/>
      {/* <SingUp/> */}
      {/* <Splash/> */}
    </SafeAreaView>
  );
};

export default App;
