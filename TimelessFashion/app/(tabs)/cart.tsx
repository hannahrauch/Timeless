import { Text, StyleSheet,TextInput, View } from "react-native";

export default function Cart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#DB658D",
        backgroundColor: "#DB658D",
      }}
    >
      <View style = {styles.box}>
        <Text style={{
        color:'white',
        fontSize: 32,
        }}>
        Cart
        </Text>
      </View>

      <View
        style={styles.inputContainer}
        >
      </View>
      <View
        style={styles.viewBox}
        >
      </View>
      <View
        style={styles.viewBox1}
        >
      </View>
      <View
      style={styles.viewBox2}
      >
      </View>
      <View
      style={styles.checkout}
      >
        <Text
        style = {{
          fontFamily: 'Bio Rhyme SemiBold',
          fontSize: 18,
          marginTop: 10,

        }}
        >
          Total: $10.00
        </Text>
        <View
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

        </View>
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
      
  },
  viewBox1: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 125,
    width: '80%',
    bottom: 480,
  },
    viewBox2: {
      backgroundColor: 'white',
      borderRadius: 5,
      height: 125,
      width: '80%',
      bottom: 460,
    },
    checkout: {
      backgroundColor: 'white',
      height: 50,
      width: '90%',
      bottom: 425,
      
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
    }

});