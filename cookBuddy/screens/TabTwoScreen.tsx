import React, {Component} from 'react';
import { StyleSheet, Image, ScrollView, Dimensions, Button, TouchableOpacity, Modal} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

/*Global Variables*/
class RecipesArray extends Component<any, any> {
  static state: string[][] = [];//[["https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg", "soup", "this is some soup"], 
  //["https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg", "another soup", "this is some very delicious soup"],
  //["https://img.delicious.com.au/5aLcV7cG/del/2021/05/slow-roasted-butter-eggplant-curry-152139-2.jpg", "SOUP", "SOUP"]];

  constructor(props: string[]) {
    super(props);
  }

  public static getRecipesArray = () => {
    return this.state;
  };

};

export default function TabTwoScreen(this: any) {
  var recipes = RecipesArray.getRecipesArray();
  
  if (recipes.length == 0) {
    return (
      <View style={styles.noRecipes}>
        <View style={styles.noRecipes}>
          <Text style={styles.title}>You don't have any recipes! Click the button below to add your first recipe.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {<Text>Did it work?</Text>}}>
          <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold",}}> Add a New Recipe </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    var renderedCookbook = renderCookbook(recipes);

    return (
      <View style={styles.container1}>
        <ScrollView>
          
          {/* List of Recipes*/}
            {/*Individual recipe cards (image and name)*/}
              <Text>
                {renderedCookbook}
              </Text>

        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={() => {<Text>Did it work?</Text>}}>
            <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold",}}> Add a New Recipe </Text>
        </TouchableOpacity>


      </View>
    );
  
}

function renderCookbook (recipes:any) {
  var renderedCookbook = [];

  /*where recipes[i][0] == image url, 
    recipes[i][1] == recipe title, 
    and recipes[i][2] == recipe info */

  for (var i = 0; i < recipes.length; i++) {
    renderedCookbook.push( 
      <View style={styles.recipeCard}>
            <View style={recipeCard.cardContent}>
              <View style={recipeCard.image}>
                <Image style={recipeCard.image} source = {{uri: recipes[i][0]}}/> 
              </View>                                                                      
              <View style={recipeCard.cardText}>
                <Text style={recipeCard.title}>
                  {recipes[i][1]}                                                     
                </Text>
                <Text style={recipeCard.info}>
                  {recipes[i][2]}                                                     

                </Text>
              </View>
            </View>
          </View>
    );
  };

  return (
    renderedCookbook
  );

}};


const styles = StyleSheet.create({
  container1: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E8E8E8",
    margin: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    
    
  },
  noRecipes: {
    width: Dimensions.get('window').width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E8E8E8",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  }, 
  recipeCard: {
    
    flexDirection: "column", // column bc it moves up to down when adding new recipe cards
    marginVertical: 5,
    width: Dimensions.get('window').width,
    backgroundColor: "#889F53",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',

  },
  button: {
    backgroundColor: "#4587FF",
    alignContent: "flex-end",
    padding: 20,
  }
});

const recipeCard = StyleSheet.create({
  cardContent: {
    flexDirection: 'row', // it's row because it moves from left to right when doing picture and text
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#889F53',
    //flexWrap: 'wrap',

  }, 
  cardText: {
    flex: 2,
    flexDirection: 'column', // it's column bc it moves up to down when adding title and info
    backgroundColor: '#889F53',
    //flexWrap: 'wrap',
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    //flexWrap: 'wrap',
  },
  info: {
    //flex: 2,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 15,
    //flexWrap: 'wrap',
    
  },

  image: {
  
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

});
