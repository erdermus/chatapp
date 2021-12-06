import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAssets } from 'expo-asset';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [currentUser , setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setLoading(false);
      if(user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, [])

  if(loading){
    return <Text>loading ...</Text>
  }

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(currentUser)}</Text>
      <Text>TEST</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Main() {
  const [assets] = useAssets(
    require('./assets/icon-square.png'),
    require('./assets/chatbg.png'),
    require('./assets/user-icon.png'),
    require('./assets/welcome-img.png'),
  );

  if(!assets) {
    return <Text>loading ...</Text>
  }
  return <App />
}

export default Main