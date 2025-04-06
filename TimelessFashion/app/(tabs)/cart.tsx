import { Text, StyleSheet,Image, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([
    { id: '1', title: 'Green blouse', tag: 'Vintage', type: 'Top', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$10'},
    { id: '2', title: 'spiffy shoes', tag: 'Trending', type: 'Accessories', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$20'},
    { id: '3', title: 'joe mama pants', tag: 'Upcoming', type: 'Bottom', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$30'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#DB658D",
      }}
    >
      <View style = {styles.box}>
        <Text style={{
        color:'white',
        fontSize: 32,
        fontFamily: 'Bio Rhyme SemiBold',
        }}>
        Cart
        </Text>
      </View>

      <View
        style={styles.inputContainer}
        >
      </View>

      {items.map((item,index) => (
        <View key={index}
        style={styles.viewBox}
        >
        <Image
          source={{uri: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain'}}
          style={styles.image}
        />
        <View>
          <Text style={{fontFamily: 'Abhaya Libre Regular', fontSize: 23}}>
            {item.tag}
          </Text>
          <Text style={{fontFamily: 'Abhaya Libre Regular', fontSize: 23}}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}
        onPress={()=>deleteItem(item.id)}>
          <Ionicons name="close-circle-outline" size={23} color={'gray'} />
        </TouchableOpacity>
      </View>
      ))}
      
      <View
      style={styles.checkout}
      >
        <Text
        style = {{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 18,
          marginTop: 10,
          marginLeft: 10,
        }}
        >
          Total: $10.00
        </Text>
        <TouchableOpacity
        style={styles.checkoutBox}
        >
          <Text
          style={{
            fontFamily: 'Bio Rhyme SemiBold',
            fontSize: 15,
          }}
          >
            Checkout 
          </Text>

        </TouchableOpacity>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 100,
    backgroundColor: '#7E0A3F',
    height: 70,
    width:400,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#E793AC',
        borderRadius: 5,
        height: 520,
        width: '90%',
        marginTop: 25,
  },
    viewBox: {
      backgroundColor: 'white',
      borderRadius: 5,
      height: 125,
      width: '80%',
      bottom: 500,
      marginBottom: 10,
      flexDirection: 'row',
      padding: 10,
      
  },
    checkout: {
      backgroundColor: 'white',
      height: 50,
      width: '90%',
      bottom: 35,
      position: 'absolute',
    },
    checkoutBox: {
      backgroundColor: "#F9D9DA",
      borderRadius: 5,
      height: 30,
      width: 120,
      marginLeft: 220,
      bottom: 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 100,
      width: 80,
      borderRadius: 5,
  },
});