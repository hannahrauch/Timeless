import { Text,TextInput,Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DB658D",
      }}
    >
      <Image
      source={require("../assets/images/image6.png")}
      style={{position: 'absolute', top: 50, width: '100%'}}
      />
      <View style={{width: '100%', position: 'absolute', top: 250,justifyContent: "center", alignItems: "center",}}>
        <Text style={{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 33,
          margin: 20,
        }}>
          Timeless Fashion
        </Text>
        <TextInput
            style={styles.inputContainer}
            placeholder="Email"
            placeholderTextColor="#1C2021"
        >
        </TextInput>
        
        <TextInput
            style={styles.inputContainer}
            placeholder="Password"
            placeholderTextColor="#1C2021"
        >
        </TextInput>

        <Text style={{
          fontSize: 18,
          alignSelf: 'flex-start',
          marginLeft: '10%',
        }}>
          Forgot Password?
        </Text>


        <TouchableOpacity
          onPress={() => router.push('/home')}
          style={styles.loginButton}>
        <Text style={{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 25,
          color:"#7E0A3F",
        }}
        >Login</Text>
        
        </TouchableOpacity>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#E9E9E9',
        elevation: 10,
        height: 50,
        width: '80%',
        fontSize: 20,
        color: "#A39F9F",
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    
    loginButton: {
      backgroundColor: '#F9D9DA',
      borderRadius: 5,
      width: 160,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      margin: 40,
    }
    
});