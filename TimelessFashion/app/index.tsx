import { Text,TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
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
      <Text style={{
        fontSize: 40,
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
      }}>
        Forgot Password?
      </Text>


      <TouchableOpacity
        onPress={() => router.push('/home')}
        style={styles.loginButton}>
      <Text style={{
        fontSize: 30,
        color:"#7E0A3F",
      }}
      >Login</Text>
      
      </TouchableOpacity>
      
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
    }
    
});