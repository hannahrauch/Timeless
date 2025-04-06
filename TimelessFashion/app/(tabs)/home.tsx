import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    const items = [
        { id: '1', title: 'Green blouse', type: 'Top', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$10'},
        { id: '2', title: 'spiffy shoes', type: 'Accessories', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$20'},
        { id: '3', title: 'joe mama pants', type: 'Bottom', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$30'},
        { id: '4', title: 'Green blouse', type: 'Bottom', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$10'},
        { id: '5', title: 'spiffy shoes', type: 'Accessories', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$20'},
        { id: '6', title: 'joe mama pants', type: 'Top', image: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain', price: '$30'},
    ];

    const groupItemsIntoOutfits = (items) => {
        const grouped = [];
        const used = new Set();
      
        while (true) {
          const top = items.find(item => item.type === 'Top' && !used.has(item.id));
          const bottom = items.find(item => item.type === 'Bottom' && !used.has(item.id));
          const accessories = items.find(item => item.type === 'Accessories' && !used.has(item.id));
      
          if (!top || !bottom || !accessories) break;
      
          grouped.push([top, bottom, accessories]);
          used.add(top.id);
          used.add(bottom.id);
          used.add(accessories.id);
        }
      
        return grouped;
      };
    const outfits = groupItemsIntoOutfits(items);
    const [searchQuery, setSearchQuery] = useState("");
    const handleSearch = async (query: string) => {
        setSearchQuery(query);
    }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#DB658D',
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

        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%'}}>
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

        <View style={{
                height: 2,
                width: '90%',
                backgroundColor: '#F7FF8B',
                marginVertical: 15,
            }}>
        </View>

        <ScrollView>
            {outfits.map((outfit,index) => (
            <View key={index}>
                <TouchableOpacity>
                    <Text style= {{
                        color: 'white',
                        alignSelf: 'flex-end',
                        margin: 10,
                        fontSize: 20,
                        fontFamily: 'Abhaya Libre Regular',
                    }}>{`See outfit details >`}
                    </Text>
                </TouchableOpacity>

                <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '90%'}}>
                    {outfit.map((item) => (
                        <View key={item.id} style={styles.box}>
                        <Image
                            source={{uri: 'https://th.bing.com/th/id/OIP.Cet7Hd9-jbva_ZCOpjCFwQAAAA?rs=1&pid=ImgDetMain'}}
                            style={styles.image}
                        />
                        <View style={styles.pricebox}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'Abhaya Libre Regular',
                                fontSize: 17,
                            }}>{item.price}</Text>
                        </View>
                    </View>
                    ))}
                </View>

                <View style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#F7FF8B',
                    marginVertical: 15,
                }}>
                </View>
            </View>
            ))}
        </ScrollView>
    </SafeAreaView>
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
        width: '90%',
        fontSize: 20,
        color: "#A39F9F",
        paddingHorizontal: 15,
        marginVertical: 15,
    },
    box: {
        backgroundColor: 'white',
        height: 200,
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 4,
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

    },
    textStyle1: {
        color: '#1C2021',
        fontSize: 20,
        fontFamily: 'Abhaya Libre Regular',
    },
    tag: {
        width: 115,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
});