import { Text, View, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from "react-native-safe-area-context";
export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#DB658D',
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
          <View style={{marginTop: 30}}>
            <Text style ={{
              color : 'white',
              fontSize : 25,
            }}>
              Jazmin Gutierrez:
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
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});