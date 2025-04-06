import { useLocalSearchParams } from 'expo-router';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

interface Item {
    id: string;
    name: string;
    type: string;
    tag: string;
    imageUrl: string;
}

const OutfitDetails = () => {
    const params = useLocalSearchParams();
    let outfit: Item[] = [];

    if (params.item) {
        try {
            outfit = JSON.parse(params.item as string);
        } catch (error) {
            console.error("Error parsing outfit:", error);
        }
    }

    if (outfit && outfit.length > 0) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#DB658D' }}>
                <View style = {styles.headerbox}>
                      <Text style = {{
                        color:'white',
                        fontSize: 32,
                        fontFamily: 'Bio Rhyme SemiBold',
                      }}>
                        Outfit Items
                      </Text>
                </View>
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={styles.outfitContainer}>
                        {outfit.map((currentItem, itemIndex) => (
                            <View key={currentItem.id} style={styles.itemContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                    source={{ uri: currentItem.imageUrl }}
                                    style={styles.itemImage}
                                    />
                                    <View>
                                        <Text style={styles.textfont}>Item {currentItem.id}</Text> 
                                        <Image
                                        source={require("../assets/images/yellowStars.png")}
                                        style={{width: 180, height: 32,}}
                                        />      
                                    </View>                         
                                </View>
                                <Text style={styles.textfont}>Name: {currentItem.name} </Text>
                                <Text style={styles.textfont}>Type: {currentItem.type}</Text>
                                <Text style={styles.textfont}>Tag: {currentItem.tag}</Text>
                                <Text style={styles.textfont}>Sustainability: </Text>
                                <Text style={styles.textfont}>Seller Rating: 8/10</Text>

                                <TouchableOpacity
                                    style={[styles.checkoutBox,{ bottom: 100}]}>
                                          <Text
                                          style={{
                                            fontFamily: 'Bio Rhyme SemiBold',
                                            fontSize: 15,
                                          }}
                                          >
                                            Favorite Item 
                                          </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.checkoutBox, {backgroundColor: '#DB658D'}]}>
                                          <Text
                                          style={{
                                            fontFamily: 'Bio Rhyme SemiBold',
                                            fontSize: 15,
                                          }}
                                          >
                                            Add to Cart 
                                          </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error rendering outfit</Text>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    outfitContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    itemContainer: {
        alignItems: 'flex-start',
        width: 370,
        height: 600,
        backgroundColor: 'white',
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 10,
    },
    itemImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    itemName: {
        marginTop: 5,
        fontWeight: 'bold',
    },
    checkoutBox: {
        backgroundColor: "#F9D9DA",
        borderRadius: 5,
        height: 50,
        width: 300,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
      },
      headerbox:{
        backgroundColor: '#7E0A3F',
        height:60,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
      },
      textfont: {
        fontFamily: 'Abhaya Libre Regular',
        fontSize: 22,
        marginTop: 15,
      },
});

export default OutfitDetails;