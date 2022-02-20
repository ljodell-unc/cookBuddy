import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', margin: 15,}}>     If you are learning to cook, CookBuddy is the app for you! We hope to add features that range from: </Text>
      <Text style={{margin: 20,}}></Text>
      
      <View>
        <Text style={{fontSize:20,}}>- user authentication (personalization)</Text>
        <Text style={{fontSize:20,}}>- meal plan capabilities</Text>
        <Text style={{fontSize:20,}}>- ability to share recipes with your friends</Text>
        <Text style={{fontSize:20,}}>- adjustable shopping list</Text>
      </View>
      <Text style={{padding: 20,}}></Text>
      <Text style={styles.title}>Keep an eye out for future updates!</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <Text></Text>
      <Text style={{margin: 50,}}></Text>
      <Text>Swipe down to go back to the home screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
