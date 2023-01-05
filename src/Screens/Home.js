import React from 'react'
import { Button, View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Home = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Swiper 
            paginationStyle={{
              position :"absolute",
              bottom :"14%"
            }}>
         <View style={styles.slide1}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:380,marginLeft:20,marginRight:20,}}
              source={require('../Images/Hot.png')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>


      <View style={styles.slide2}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:380,marginLeft:20,marginRight:20,marginTop:40}}
              source={require('../Images/Hot2.png')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>
      
      <View style={styles.slide3}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:380,marginLeft:20,marginRight:20,marginTop:40}}
              source={require('../Images/Hot3.png')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>

      <View style={styles.slide4}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:380,marginLeft:20,marginRight:20,marginTop:40}}
              source={require('../Images/Hot4.jpeg')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>

      <View style={styles.slide5}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:380,marginLeft:20,marginRight:20,marginTop:40}}
              source={require('../Images/instant.png')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>

      <View style={styles.slide6}>
        <Text style={styles.text}>Secure Communication</Text>
        <Image style={{height: 300 ,width:350,marginLeft:20,marginRight:20,marginTop:40}}
              source={require('../Images/Hot6.jpeg')}
        />
        <Text style={{fontSize: 18,textAlign:'center',fontWeight:'bold',marginBottom:100,marginTop:40,color:'#000'}}>{`Instent Messaging \n Stay Connected with teams And Comanies`}</Text>
      </View>

      </Swiper>
      <View style={{
        position:'absolute',
         bottom:'1%',
         
        

      }}>
      <TouchableOpacity  style={styles.styleLoginBtn}>
      <Button 

      onPress={() => navigation.navigate('Details')}
      title={"Let's Start"}
     
    />
      
       </TouchableOpacity>

    </View>
        </View>
    )
}

export default Home;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
   
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:60
  },

 textStartedStyle:{
  fontWeight:'bold',
  color: '#fff',
  marginLeft: 13,
  marginTop:6
 },

 input_container:{
    padding:10,
    marginTop:40,
    fontSize:16,
    borderWidth:2,
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
 },
    styleLoginBtn: {
      backgroundColor:'#3776FF',
      marginBottom:20,
       marginLeft:100,
       marginRight:100,
       borderRadius: 50,
       overflow: "hidden"
    },

 },
 

);