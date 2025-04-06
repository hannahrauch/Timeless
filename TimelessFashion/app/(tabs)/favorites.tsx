import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Favorites() {
  return (

    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#DB658D',
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
          fontSize: 25,
          fontFamily: 'Bio Rhyme SemiBold',
          alignSelf: 'flex-start',
          marginLeft: 10,
          }}>
          Saved Items
        </Text>
        <View style = {styles.iteminfobox}>
          <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',}}>
            <Image
              source={{uri: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain'}}
              style={styles.image}
             />
             <View>
             <Text style = {{
                color: 'black',
                fontSize: 22,
                fontFamily: 'Abhaya Libre Regular',
              }}>
                1980's Dress
              </Text>
              <Text style = {{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Abhaya Libre Regular'
              }}>
                $10.00
              </Text>
             </View>
          </View>
        </View>
        <Text style = {{
          color:'white',
          marginTop: 50,
          fontSize: 25,
          fontFamily: 'Bio Rhyme SemiBold',
          alignSelf: 'flex-start',
          marginLeft: 10,
        }}>
          Saved Outfits
        </Text>
        <View style = {styles.outfitinfobox}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style = {{
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 22
        }}>
          Name: Vintage
        </Text>
        <Ionicons name="close-circle-outline" size={25}></Ionicons>
          </View>
        
        <Text style = {{
          fontFamily: 'Abhaya Libre Regular',
          fontSize: 22
        }}>
          Includes:
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
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
        <View>
          <Text style = {{
            marginTop: 40,
            fontFamily: 'Abhaya Libre Regular',
            fontSize: 17
          }}>
            1970's Gloves
          </Text>
          <Text style = {{
            fontFamily: 'Abhaya Libre Regular',
            fontSize: 17
          }}>
            $8.50
          </Text>
        </View>
        <View>
          <Text style = {{
            marginTop: 40,
            fontFamily: 'Abhaya Libre Regular',
            fontSize: 17
          }}>
            Earrings
          </Text>
          <Text style = {{
            fontFamily: 'Abhaya Libre Regular',
            fontSize: 17
          }}>
            $15.00
          </Text>
        </View>
        </View>
        
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
  backgroundColor: '#E793AC',
  borderRadius: 5,
  height:620,
  width:'90%',
  marginTop: 15,
  padding: 5,
  alignItems: 'center',
},
iteminfobox:{
  backgroundColor: 'white',
  height: 150,
  width: '95%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
},
outfitinfobox:{
  backgroundColor: 'white',
  height: 230,
  width: '95%',
  borderRadius: 5,
  padding: 5,
},
image: {
  height: 100,
  width: 80,
  borderRadius: 5,
},
});