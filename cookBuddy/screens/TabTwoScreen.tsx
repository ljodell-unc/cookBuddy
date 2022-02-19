import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Your Cookbook</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />*/}
      
      <Image style={{height: 200, width: 200}} source = {{uri: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'}}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
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
