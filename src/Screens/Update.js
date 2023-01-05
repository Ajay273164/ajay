import React from "react";
import { SafeAreaView, StyleSheet, TextInput,View,Text,TouchableOpacity,Image,Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const Stack = createNativeStackNavigator();

  return (
         <View>
           <View
      style={{
         backgroundColor: "#1E50A0",height:70,width:400,
      }}>
       <View style={{flexDirection:"row"}}>
         <TouchableOpacity>
         <View  style = {{height:1,width:1,marginTop:15}} >
         <Image style={{height:30,width:30,marginLeft:30}}
             source={require('../Images/menu.png')}>
           </Image>
         </View>
         </TouchableOpacity>
         <Text style={{color:"#fff",fontSize:15,fontWeight:"bold",marginTop:15,marginLeft:75}}>RETAINUSER</Text>
           </View> 
         <Text style={{color: "#fff",marginLeft:80,fontSize:15,fontWeight:"bold"}}>crm software</Text>
         </View>
         <Text style={{color:'#000',fontSize:20,alignSelf : "center",marginTop:15 }}>Update Invoice Setup Details</Text>

         <SafeAreaView>
         <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Company Name</Text>
      <TextInput
        style={styles.input}
        placeholder='Company Name'
      />
        <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder='Address'
      />
    </SafeAreaView>
    <View style={{flexDirection:'row'}}>
     
    <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>State</Text>
    <Text style={{fontSize:15,marginLeft: 150,color:"#000",marginTop:10}}>City</Text>
    </View>
    <View style={{flexDirection:'row'}}>
    <TextInput
        style={styles.inputa}
        placeholder='Select status                       '
      />
        <TextInput
        style={styles.inputs}
        placeholder='City                                    '
      />
     
    </View>
    <View style={{flexDirection:'row'}}>
     
     <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Enter Pan No</Text>
     <Text style={{fontSize:15,marginLeft: 100,color:"#000",marginTop:10}}>Enter Gstin</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <TextInput
         style={styles.inputa}
         placeholder='Select status                       '
       />
         <TextInput
         style={styles.inputs}
         placeholder='City                                    '
       />
      
     </View>
     <View style={{flexDirection:'row'}}>
     
     <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Logo</Text>
     <Text style={{fontSize:15,marginLeft: 150,color:"#000",marginTop:10}}>Authorized Signatory</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <TextInput
         style={styles.inputa}
         placeholder='Select status                       '
       />
         <TextInput
         style={styles.inputs}
         placeholder='City                                    '
       />
      
     </View>
     <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Invoice Prefix</Text>
      <TextInput
        style={styles.input}
        placeholder='Invoice Prefix'
      />
       <Text style={{fontSize:15,marginLeft: 30,color:"#000",marginTop:10}}>Term & Conditions</Text>
      <TextInput
        style={styles.input}
        placeholder='Term & Conditions'
      />
       <TouchableOpacity  style={{ 
           backgroundColor:'#3776FF',
            marginLeft:80,
           marginRight:80,
            marginTop:40,
          marginBottom:10,
          borderRadius:10,
          marginBottom:50,
          overflow: "hidden"
           }}>
      <Button 
      onPress={() => navigation.navigate("LeadAdd")}
      title={"Update"}
     
    />
       </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
        padding:4,
        fontSize:15,
        marginLeft:20,
        marginRight:30,
        borderRadius:2,
        backgroundColor:"#F0F8FD"
  },
  inputs:{
     marginLeft:10,
     backgroundColor:"#F0F8FD",
     padding:4,

  },
  inputa:{
    marginLeft:10,
    backgroundColor:"#F0F8FD",
    padding:4,
    marginLeft:20,
 },

});

export default UselessTextInput;