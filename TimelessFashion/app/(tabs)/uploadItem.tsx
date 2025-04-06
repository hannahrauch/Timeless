import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";

export default function UploadItem() {
  const [image, setImage] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#DB658D',
      }}
    >
      <View style={styles.form}>
        <Text style ={styles.textStyle2}>
          Title:
        </Text>
        <TextInput
        style={styles.inputContainer}>
        </TextInput>

        <Text style ={styles.textStyle2}>
          Price:
        </Text>
        <TextInput
        style={styles.inputContainer}>
        </TextInput>

        <Text style ={styles.textStyle2}>
          Material:
        </Text>
        <TextInput
        style={styles.inputContainer}>
        </TextInput>

        <Text style ={styles.textStyle2}>
          Era Category:
        </Text>
         <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%', margin: 10}}>
                    <View style={[styles.tag,{backgroundColor: '#FFC4DF'}]}>
                        <Text style={styles.textStyle1}>
                            Vintage
                        </Text>
                    </View>
                    <View style={[styles.tag,{backgroundColor: '#D63B82'}]}>
                        <Text style={styles.textStyle1}>
                            Trending
                        </Text>
                    </View>
                    <View style={[styles.tag,{backgroundColor: '#D30262'}]}>
                        <Text style={styles.textStyle1}>
                            Upcoming
                        </Text>
                    </View>
                </View>
        <Text style ={styles.textStyle2}>
          Upload Picture:
        </Text>

        <View style={styles.imagebox}></View>

        <TouchableOpacity style={[styles.tag,{backgroundColor: '#7E0A3F', marginTop: 15,}]}>
          <Text style={[styles.textStyle1, {color: 'white'}]}>
            Submit
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#F4D0DD',
    height:'85%',
    width:'90%',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 20,
  },
  textStyle1: {
    color: '#1C2021',
    fontSize: 20,
    fontFamily: 'Abhaya Libre Regular',
},
textStyle2: {
  color: '#1C2021',
  fontSize: 25,
  fontFamily: 'Abhaya Libre Regular',
  alignSelf: 'flex-start',
  marginLeft: 20,
},
  tag: {
      width: 110,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
  },
  inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: '#E9E9E9',
    elevation: 10,
    height: 50,
    width: '90%',
    fontSize: 17,
    color: "#A39F9F",
    paddingHorizontal: 15,
    margin: 10,
},
  imagebox: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: '#E9E9E9',
    height: 150,
    width: '90%',
    fontSize: 17,
    color: "#A39F9F",
    paddingHorizontal: 15,
    margin: 10,
  },
});