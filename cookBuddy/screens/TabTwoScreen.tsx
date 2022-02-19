import { StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container1}>
      {/*<Text style={styles.title}>Your Cookbook</Text>*/}
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />*/}
      <ScrollView contentContainerStyle={{flex: 1, alignContent: "flex-start"}}>

        {/* List of Recipes*/}
        {/*<View style={styles.recipeList}>*/}

          {/*Individual recipe cards (image and name)*/}
          <View style={styles.recipeCard}>
            <View style={recipeCard.image}>
              <Image style={recipeCard.image} source = {{uri: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'}}/>
            </View>
            <Text style={recipeCard.info}>
              Good Soup.
            </Text>
          </View>


          <View style={styles.recipeCard}>
            <View style={recipeCard.image}>
              <Image style={recipeCard.image} source = {{uri: 'https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg'}}/>
            </View>
            <>
              <Text style={recipeCard.info}>
                Another good Soup.
              </Text>
            </>
            
          </View>
          

        {/*</View>*/}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E8E8E8",
  },
  /*
  recipeList: {
    flex: 1,
    flexDirection: "column",

  },*/
  recipeCard: {
    
    flexDirection: "row",
    alignContent: "stretch",
    marginHorizontal: 10,
    marginVertical: 5,
    flexWrap: "wrap"
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

const recipeCard = StyleSheet.create({
  info: {
    /*flex: 3,*/
    height: 50,
    width: Dimensions.get('window').width,
  },
  image: {
    /*flex: 1,*/
    height: 100,
    width: 100,
    margin: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
