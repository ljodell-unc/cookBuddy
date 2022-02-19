import { StyleSheet, Image, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source = {{uri:'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'}}/>
      <Text style={styles.title}>Welcome to CookBuddy!</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      <Text> Cookbuddy is the all inclusive app for cooking college students. With features ranging from 
        your own customizable cookbook, to shopping lists, to meal planning, CookBuddy is the app for you!
      </Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}> Today's Meal Plan </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E8E8E8",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  banner: {
    height: 100,
    width: Dimensions.get('window').width,
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
  card: {
    marginVertical: 30,
    width: Dimensions.get('window').width,
    height: 150,
  },
  cardTitle: {
    marginVertical: 5,
    
  },
});
