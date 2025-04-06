import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
          <View style = {styles.box}>
            <Text style={{
              color:'white',
              fontSize: 32,
            }}>
              Profile
            </Text>
          </View>
          <View style = {styles.contentbox}>
            <Text style ={{
              color : 'white',
              fontSize : 25,
            }}>
              Jazmin Guiterrez:
            </Text>
            <Text style = {{
              color : '#7E0A3F',
              fontSize : 20,
            }}>
              @jazming
              <Ionicons name="create-outline" size = {20}></Ionicons>
            </Text>
            <Text
            style = {{
              color: 'white',
              marginTop: 25,
              fontSize: 25
            }}
            >
              Contact Information:
            </Text>
            <Text style = {{
              color: '#7E0A3F',
              fontSize : 16
            }}>
              Email: jazmin@email.com
              <Ionicons name="create-outline" size = {20}></Ionicons>
            </Text>
            <Text style = {{
              color: '#7E0A3F',
              fontSize : 16,
            }}>
            Phone: #123-456-7890
            <Ionicons name="create-outline" size = {20}></Ionicons>
            </Text>
            <Text style = {{
              color: 'white',
              marginTop: 25,
              fontSize : 24,
              }}>
              Payment Information:
            </Text>
            <Text style = {{
              color: '#7E0A3F',
              fontSize: 17,
            }}>
              MasterCard #1234567812345678
              <Ionicons name="create-outline" size = {20}></Ionicons>
            </Text>
            <Text style = {{
              color: 'white',
              fontSize: 23,
              marginTop: 25}}>
              Upload Inspo Images:
            </Text>
            <Text style = {{
              color : '#7E0A3F',
              fontSize : 17,
            }}>
              Access Your Files Here
              <Ionicons name="archive-outline" size = {20}></Ionicons>
            </Text>
          </View>
    </View>

    );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#7E0A3F',
    height:200,
    width:400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentbox:
  {
    backgroundColor: '#DB658D',
    height: 600,
    width: 400,
  },
});