import { Text, StyleSheet,Image, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([
    { "id": "1",
      "name": "Blue Blouse",
      "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901396/Joanna_Blouse_u6ie8h.jpg",
      "type": "top",
      "tag": "vintage",
      "price": "10",
      "sustainability": "7"
    },
    {
      "id": "9",
      "name": "Flare Jeans",
      "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902436/rag_bone_Flexi_Sofie_Full_Length_High_Rise_Wide_Leg_Jeans_in_Whitney_at_Nordstrom_Size_32_fnahal.jpg",
      "type": "pants",
      "tag": "trending",
      "price": "12",
      "sustainability": "10"
    },
    {
      "id": "3",
      "name": "White Off-Shoulder Top",
      "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901486/Vintage_1980s_blouse_from_Dalena_Vintage_iompep.jpg",
      "type": "top",
      "tag": "vintage",
      "price": "6",
      "sustainability": "4"
    },
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
          source={{ uri: item.imageUrl}}
          style={styles.image}
        />
        <View>
          <Text style={{fontFamily: 'Abhaya Libre Regular', fontSize: 20}}>
            {item.tag}
          </Text>
          <Text style={{fontFamily: 'Abhaya Libre Regular', fontSize: 20}}>
            {item.name}
          </Text>
          <Text style={{fontFamily: 'Abhaya Libre Regular', fontSize: 20}}>
            ${item.price}
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
        }}
        >
          Total: $28.00
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
    height:60,
    width:'100%',
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
      borderRadius: 5,
      justifyContent: 'space-between',
      padding: 10,
      flexDirection: 'row',
    },
    checkoutBox: {
      backgroundColor: "#F9D9DA",
      borderRadius: 5,
      height: 30,
      width: 120,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 100,
      width: 80,
      borderRadius: 5,
      marginRight: 5,
  },
});