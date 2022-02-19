import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet, Image, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
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
      
      {/*Meal Plan Card*/}
      <View style={{marginVertical: 30,
                    width: Dimensions.get('window').width,
                    height: 150,
                    alignItems: 'center',}}>
        <Text style={styles.cardTitle}> Today's Meal Plan </Text>
        <View style={styles.cardContent}>
          <Image style={styles.cardImage} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl8hOC_dR77UOwmnleVXh_aV7WDb7T2R5hrQ&usqp=CAU'}}/>
          <View style={styles.cardText}>
            <Text style={styles.recipeTitle}> Shrimp and Broccoli </Text>
            <Text style={styles.recipeText}> Total Duration: 30 minutes </Text>
            <Text style={styles.recipeText}> Prep Time: 20 minutes </Text>
            <Text style={styles.recipeText}> Cook Time: 10 minutes </Text>
          </View>
          
        </View>
      </View>

      {/*Shopping List Card*/}
      
      
      
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.cardTitle}> Current Shopping List </Text>
            
            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.listButton}> 
              </TouchableOpacity>
              <View style={styles.cardText}>
                <Text style = {styles.cardTitle}>Shrimp</Text>
              </View>
            </View>

            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.listButton}> 
              </TouchableOpacity>
              <View style={styles.cardText}>
                <Text style = {styles.cardTitle}>Sesame Seeds</Text>
              </View>
            </View>

            <View style={styles.cardContent}>
              <TouchableOpacity style={styles.listButton}> 
              </TouchableOpacity>
              <View style={styles.cardText}>
                <Text style = {styles.cardTitle}>Broccoli</Text>
              </View>
            </View>

        </View>
      </ScrollView>

      
        

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
    /*height: 150,*/
    alignItems: 'center',

  },
  cardTitle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  cardContent: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  cardImage: {
    flex: 1,
    height: 100,
    width: 100,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  cardText: {
    flexDirection: 'column',
    flex: 2,
  },
  recipeTitle: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 20,
  },
  recipeText: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  listButton: {
    height: 40,
    width: 40,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    backgroundColor: '#C5C5C5',
    margin: 10,
  },

});
