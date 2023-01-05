import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const DetailsScreen = ({ navigation, route }) => {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }} >
      <Image style={{ height: 90, width: 150, marginLeft: 110, marginRight: 20, marginTop: 40, marginBottom: 10 }}
        source={require('../Images/Logo1.png')} />

      <Text style={{ textAlign: 'center', fontSize: 30, color: '#000', fontWeight: 'bold' }}> Run Your Business</Text>
      <Text style={{ textAlign: 'center', fontSize: 20, color: '#000' }}> integrated and on the cloud</Text>


      <View >

        <LinearGradient colors={["#FFE6D5", "#000099"]} style={{ height: "100%", borderRadius: 30, marginTop: 50 }}>

          <View>
            <Text style={{ textAlign: 'left', fontSize: 13, marginTop: 20, marginLeft: 10, }}>

              <Image source={require("../Images/back.png")} style={{ width: 30, height: 30, }} />

              <Text style={{ color: '#000', fontSize: 25, fontWeight: 'bold' }}> Sign in with comapny name </Text>
            </Text>
          </View>

          <View>


            <TextInput

              placeholder='Company Name'
              style={{
                padding: 10,
                marginTop: 40,
                fontSize: 18,
                borderWidth: 2,
                marginLeft: 20,
                marginRight: 20,
                borderRadius: 10,
              }} >



            </TextInput>
          </View>

          <TouchableOpacity style={{
            backgroundColor: '#3776FF',
            borderRadius: 20,
            marginBottom: 40,
            marginLeft: 140,
            marginRight: 140,
            marginTop: 50,
            overflow: "hidden"

          }}>



            <Button

              onPress={() => navigation.navigate("Signin")}
              title={"Sign in"}

            />

          </TouchableOpacity>


        </LinearGradient>



      </View>
    </View>
  )
}

export default DetailsScreen;

const styles = StyleSheet.create({
  wrapper: {},
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 100
  },

  textStartedStyle: {
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 13,
    marginTop: 6
  },

});