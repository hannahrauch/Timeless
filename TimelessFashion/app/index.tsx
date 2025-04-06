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
        backgroundColor: "#89023E",
      }}
    >
      <View
      style={styles.inputContainer}
      >
      </View>

      <Image
      source={require("../assets/images/image6.png")}
      style={{position: 'absolute', top: 50, width: '100%'}}
      />

  
      <View style={{width: '120%', position: 'absolute', top: 250,justifyContent: "center", alignItems: "center",}}>
        <Text style={{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 35,
          margin: 10,
        }}>
          Timeless Fashion
        </Text>

        <Image
      source={require("../assets/images/FashionLogo.png")}
      style={{position: 'absolute', top: 100, width: 250, height: 250, borderRadius: 150,}}
      />


        <TouchableOpacity
          onPress={() => router.push('/login')}
          style={styles.loginButton}>
        <Text style={{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 26,
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
        backgroundColor: '#AF5D7D',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#E9E9E9',
        elevation: 10,
        height: 550,
        width: '90%',
        fontSize: 20,
        color: "#A39F9F",
        paddingHorizontal: 15,
        marginTop: 110,
    },
    
    loginButton: {
      backgroundColor: '#F9D9DA',
      borderRadius: 5,
      width: 160,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      margin: 40,
      top: 280,
    },
});