import React, {Component, useState} from 'react';
import { StyleSheet, Image, ScrollView, Dimensions, Button, TouchableOpacity, Modal, TextInput} from 'react-native';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTransparent, setModalTransparent] = useState(false);
  const [userInput1, setText1] = useState("");
  const [userInput2, setText2] = useState("");
  const [userInput3, setText3] = useState("");
  
  if (recipes.length == 0) {
    return (
      <View style={styles.noRecipes}>
        <View style={styles.noRecipes}>
          <Text style={styles.title}>You don't have any recipes! Click the button below to add your first recipe.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true); setModalTransparent(false);}}>
          <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold",}}> Add a New Recipe </Text>
        </TouchableOpacity>
        <Modal
          animationType = "slide"
          transparent = {modalTransparent}
          visible = {modalVisible}
          onRequestClose = {()=>{setModalVisible(false); setModalTransparent(true);}} 
        >
          <View style={styles.totalForm}>
            <View style={styles.userInputSpaces}>
              <Text style={styles.title}>   Picture URL:</Text>
              <TextInput
                style={styles.userInputBox}
                onChangeText = { userInput1 => setText1(userInput1) } > 
              </TextInput>
              <Text style={styles.title}>   Title</Text>
              <TextInput 
                  style={styles.userInputBox}
                  onChangeText = { userInput2 => setText2(userInput2) } > 
              </TextInput>
              <Text style={styles.title}>   Info</Text>
              <TextInput 
                  style={styles.userInputBox}
                  onChangeText = { userInput3 => setText3(userInput3) } > 
              </TextInput>
            </View>
            <View style={styles.submitAndCancel}>
              <Text style = {styles.cancel} onPress={()=> {setModalVisible(false); setModalTransparent(false); setText1(""); setText2(""); setText3("");}}> 
                Cancel
              </Text>
              <Text style = {styles.submit} onPress={()=> {
                setModalVisible(false); 
                setModalTransparent(false); 
                var entry: string[] = ["" + userInput1, userInput2, userInput3];
                recipes.push(entry); 
                setText1(""); 
                setText2(""); 
                setText3("");}}>
                Submit
              </Text>
            </View>

          </View>

          
        </Modal>
        
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

        <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(true)}}>
            <Text style={{fontSize: 20, color: "#FFFFFF", fontWeight: "bold",}}> Add a New Recipe </Text>
        </TouchableOpacity>
        <Modal style = {styles.modalForm}
          animationType = "slide"
          transparent = {true}
          visible = {modalVisible}
        />
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
    backgroundColor: "#0016FF",
    alignContent: "flex-end",
    padding: 20,
  },
  modalForm: {
    backgroundColor: "white",
    // flex: 1,
    
    
  },
  totalForm: {
    flexDirection: 'column', // column bc it puts them from top to bottom
     marginTop:40,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  userInputSpaces:{
    flex: 3,
    flexDirection: 'column', // column bc it puts them from top to bottom
  },
  submitAndCancel: {
    flex: 1,
    flexDirection: "row", // row bc it puts them from left to right
    alignContent: 'center',
    justifyContent: 'center',
  },
  submit:{
    fontSize: 30,
    padding: 30,
    fontWeight: 'bold',
    backgroundColor: '#1100FF',
    marginBottom:90,
    marginLeft: 10,
    color: 'white',

  },
  cancel:{
    fontSize: 30,
    padding: 30,
    backgroundColor: '#BABABA',
    fontWeight: 'bold',
    marginBottom: 90,
    marginRight: 10,
    
  },
  userInputBox: {
    borderColor: "#9E9E9E", 
    borderWidth:2, 
    margin: 5, 
    padding: 5,
    marginVertical: 40,
  },
});

const recipeCard = StyleSheet.create({
  cardContent: {
    flexDirection: 'row', // it's row because it moves from left to right when doing picture and text
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#889F53',

  }, 
  cardText: {
    flex: 2,
    flexDirection: 'column', // it's column bc it moves up to down when adding title and info
    backgroundColor: '#889F53',
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 15,
    
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
