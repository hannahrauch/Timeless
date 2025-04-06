import { Text, StyleSheet, View } from "react-native";

export default function Cart() {
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
        }}>
        Cart
        </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
})