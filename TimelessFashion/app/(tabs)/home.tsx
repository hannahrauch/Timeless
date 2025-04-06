import { Text, View, TextInput, StyleSheet, ScrollView, Image } from "react-native";
import { useState} from "react";

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async (query: string) => {
        setSearchQuery(query);
    }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
        <TextInput
                style={styles.inputContainer}
                placeholder="Search"
                placeholderTextColor="#807A7A"
                clearButtonMode="always"
                value={searchQuery}
                onChangeText={(query) => handleSearch(query)}>
        </TextInput>
        <ScrollView>
            <View style={styles.box}>
                <Image
                    source={{uri: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain'}}
                    style={styles.image}
                />
                <View style={styles.pricebox}>
                    <Text style={{
                        color: 'white',
                    }}>$10</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#E9E9E9',
        elevation: 10,
        height: 50,
        width: '100%',
        fontSize: 20,
        color: "#A39F9F",
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    box: {
        backgroundColor: 'black',
        height: 200,
        width: 125,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        height: 150,
        width: 100,
        margin: 10,
        borderRadius: 5,
    },
    pricebox: {
        width: '100%',
        height: 30,
        backgroundColor: '#7E0A3F',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    }
});