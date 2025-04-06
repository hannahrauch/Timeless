import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Favorites() {
  return (

    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
>     <View style = {styles.headerbox}>
<Text style = {{
        color:'white',
        fontSize: 32,
        fontFamily: 'Bio Rhyme SemiBold',
      }}>
        Favorites
      </Text>
        </View>
      
      <View style = {styles.subtitlebox}>
        <Text style = {{
          color: 'white',
          fontSize: 28,
          fontFamily: 'Bio Rhyme SemiBold'
          }}>
          Saved Items
        </Text>
        <View style = {styles.iteminfobox}>
          <Text style = {{
            color: 'black',
            fontSize: 22,
            fontFamily: 'Abhaya Libre Regular'
          }}>
            1980's Dress
            <Ionicons name="close-circle-sharp"></Ionicons>
          </Text>
          <Text style = {{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Abhaya Libre Regular'
          }}>
            $10.00
          </Text>
        </View>
        <Text style = {{
          color:'white',
          marginTop: 50,
          fontSize: 25,
          fontFamily: 'Bio Rhyme SemiBold'
        }}>
          Saved Outfits
        </Text>
        <View style = {styles.outfitinfobox}>
        <Text style = {{
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 22
        }}>
          Name: Vintage
          <Ionicons name="close-circle-sharp"></Ionicons>
        </Text>
        <Text style = {{
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 22
        }}>
          Includes:
          <Ionicons name="create-outline" size = {20}></Ionicons>
        </Text>
        <Text style = {{
          marginTop: 40,
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 17
        }}>
          1980's Dress
        </Text>
        <Text style = {{
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 17
        }}>
          $10.00
        </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
headerbox:{
  backgroundColor: '#7E0A3F',
  height:60,
  width:'100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 100,
},
subtitlebox:{
  backgroundColor: '#F9D9DA',
  height:640,
  width:380,
},
iteminfobox:{
  backgroundColor: 'white',
  height: 250,
  width: 360,
  alignItems: 'center',
},
outfitinfobox:{
  backgroundColor: 'white',
  height: 230,
  width: 360,
}
});