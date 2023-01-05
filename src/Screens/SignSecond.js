import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from "react";
import { Alert, Button, Image, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

  const SignSecond = ({navigation,route}) => {
  const Stack = createNativeStackNavigator();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }} >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <LinearGradient colors={["#FFE6D5","#FFE6DF", "#ECF0FD"]} style={{height:"100%",borderRadius:10,}}>
          <TouchableOpacity   onPress={() => setModalVisible(!modalVisible)}>
           <Image source={require("../Images/icons8-multiply-30.png")}
                  style={{marginLeft:270,height:20,width:20,marginTop:10}}>
                  
           </Image>
           </TouchableOpacity>
            <Text style={{fontSize:20,marginLeft: 130,color:"#000",marginBottom:10}}>FORM</Text>
            <Text style={{fontSize:15,marginLeft: 20,color:"#000"}}>Customer Name</Text>
            <TextInput 
           icon ="mail"
        placeholder='Customer name'
    
       style={{ 
        padding:4,
        fontSize:13,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>
      
            <Text style={{fontSize:15,marginLeft: 20,color:"#000",marginTop:10}}>Customer Email</Text>
            <TextInput
           icon ="mail"
        placeholder='Customer Email'
    
       style={{ 
        padding:4,
        fontSize:15,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>

       <Text style={{fontSize:15,marginLeft: 20,color:"#000",marginTop:10}}>Customer Mobile</Text>
            <TextInput
           icon ="mail"
        placeholder='Customer Mobile'
    
       style={{ 
        padding:4,
        fontSize:15,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>

       <Text style={{fontSize:15,marginLeft: 20,color:"#000",marginTop:10}}>Customer Query</Text>
            <TextInput
           icon ="mail"
        placeholder='Customer Query'
    
       style={{ 
        padding:4,
        fontSize:15,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>

       <Text style={{fontSize:15,marginLeft: 20,color:"#000",marginTop:10}}>Select Lead Source</Text>
            <TextInput 
           icon ="mail"
        placeholder='Select Lead Source'
    
       style={{ 
        padding:4,
        fontSize:15,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>
       <Text style={{fontSize:15,marginLeft: 20,color:"#000" ,marginTop:10}}>Select Lead Priorities</Text>
            <TextInput
           icon ="mail"
        placeholder='Select Lead Priorities'
    
       style={{ 
        padding:4,
        fontSize:15,
        marginLeft:20,
         marginRight:30,
        borderRadius:2,
        backgroundColor:"#fff"
         }} >

       </TextInput>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Add Lead</Text>
            </Pressable>
            </LinearGradient>
          </View>
        </View>
      </Modal>
      
      <View
      style={{
         backgroundColor: "#1E50A0",height:90,width:400,marginBottom:638,marginTop:20
      }}>
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity>
         <View  style = {{height:1,width:1,marginLeft:20,marginTop:15}} >
         <Image style={{height:30,width:30,marginLeft:30}}
             source={require('../Images/menu.png')}>
           </Image>

        
         </View>
         </TouchableOpacity>
         <Text style={{color:"#fff",fontSize:15,fontWeight:"bold",marginTop:15,marginLeft:75}}>RETAINUSER</Text>
           </View> 

         <Text style={{color: "#fff",marginLeft:100,fontSize:15,fontWeight:"bold"}}>crm software</Text>
     
         <View style={{ backgroundColor:"#E8EFFF", height:650,width:360,paddingTop:5, borderTopRightRadius:20,borderTopLeftRadius:20,marginTop:10,marginLeft:20}}>
   
         <View style={{flex:1,flexDirection:"row"}}>
       <LinearGradient colors={["#FFE6D5","#FFE6D5","#80A4EF"]} style={{height:150,width:150,borderRadius:20,marginTop:10,marginLeft:20}}>
       <Text style={{fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:10}}>FRESH LEAD</Text>
       <Text style={{fontWeight:'bold',marginLeft:20,color:'#000'}}>100</Text>
       <Text style={{marginLeft:30}}>in your wallet</Text>
       <TouchableOpacity  style={{ 
          
           backgroundColor:'#3776FF',
            marginLeft:36,
           marginRight:36,
            marginTop:40,
          marginBottom:10,
          borderRadius:10,
          marginBottom:50,
          overflow: "hidden"
           }}>
      <Button 
      onPress={() => navigation.navigate("LeadAdd")}
      title={"VIEW ALL"}
     
    />
       </TouchableOpacity>
     </LinearGradient> 

     <LinearGradient colors={["#FFE6D5","#FFE6D5","#80A4EF"]} style={{height:150,width:150,borderRadius:20,marginTop:10,marginLeft:20}}>
       <Text style={{fontSize:12,fontWeight:'bold',marginTop:10,marginLeft:10}}>FRESH LEAD</Text>
       <Text style={{fontWeight:'bold',marginLeft:20,color:'#000'}}>500</Text>
       <Text style={{marginLeft:30}}>in your wallet</Text>
       <TouchableOpacity  style={{ 
           backgroundColor:'#3776FF',
            marginLeft:36,
           marginRight:36,
            marginTop:40,
          marginBottom:10,
          borderRadius:10,
          marginBottom:50,
          overflow: "hidden"
           }}>
      <Button 
      onPress={() => navigation.navigate("LeadAdd")}
      title={"VIEW ALL"}
     
    />
       </TouchableOpacity>
     </LinearGradient> 
       </View>
       <Swiper  showsPagination={false} autoplay={true}>

        <View style={styles.slide1}>
        <Image style={{marginLeft:20,height:110,width:320,marginTop:30,}}
              source={require('../Images/mobile.png')} />
          </View>

          <View style={styles.slide1}>
        <Image style={{marginLeft:20,height:110,width:320,marginTop:30,}}
              source={require('../Images/mobile.png')} />
          </View>

         </Swiper>
         <View style={{ backgroundColor:"#fff", height:300,width:342, marginTop:20,marginLeft:10,marginRight:10,marginBottom:40}}>

<Text style={{marginLeft:40,marginTop:10,fontSize:12}}>SHORTCUT</Text>

<View style={{flex:1,flexDirection:"row"}}>
 <View>

<View style={{ backgroundColor:"#D2DBF9", height:50,width:50, marginTop:20,  marginLeft:20,borderRadius:30}}>

<TouchableOpacity  onPress={() => setModalVisible(true)}>
  <Image style={{height:30,width:30,margin:9}}
      source={require('../Images/Form.png')}/>  
</TouchableOpacity>
 <Text style={{color:"#000" ,marginTop:10}}> Form </Text>
  </View>


 </View>
 <View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginTop:20,marginLeft:35,borderRadius:30}}>

 <TouchableOpacity  onPress={() => setModalVisible(true)}>
  <Image style={{height:30,width:30,margin:9}}
      source={require('../Images/Form.png')}/>  
</TouchableOpacity>
 <Text style={{color:"#000" ,marginTop:10}}>Pay bills</Text>
    </View>

   <View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginTop:20,marginLeft:35,borderRadius:30}}>
   <TouchableOpacity  onPress={() => setModalVisible(true)}>
  <Image style={{height:30,width:30,margin:9}}
      source={require('../Images/Form.png')}/>  
</TouchableOpacity>
 <Text style={{color:"#000" ,marginTop:10}}>roaming</Text>
    </View>


     <View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginTop:20,marginLeft:35,borderRadius:30}}>
     <TouchableOpacity  onPress={() => setModalVisible(true)}>
  <Image style={{height:30,width:30,margin:9}}
      source={require('../Images/Form.png')}/>  
</TouchableOpacity>
 <Text style={{color:"#000" ,marginTop:10}}>Missedcall</Text>

    </View>

     </View>

<View style={{flex:1,flexDirection:"row"}}>

   <View style={{ backgroundColor:"#D2DBF9", height:50,width:50, marginLeft:20,borderRadius:30}}>
    </View>

<View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginLeft:35,borderRadius:30}}>
    </View>

<View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginLeft:35,borderRadius:30}}>
    </View>

    
<View style={{ backgroundColor:"#D2DBF9", height:50,width:50,marginLeft:35,borderRadius:30}}>

   

    

    </View>
    </View>
     </View>

         </View>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    height:550,
    width:300,
    marginLeft:20,
    marginRight:20,
   

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 2,
    padding: 8,
    elevation: 2,
    marginLeft:100,
    marginRight:120,
    marginTop: 20,
    fontWeight:"bold"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    overflow: "hidden",
    borderRadius:5
  },
 


});



export default SignSecond;