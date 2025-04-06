import { useLocalSearchParams } from 'expo-router';
import { View, Text, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native';
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
                <ScrollView horizontal={true} pagingEnabled={true}>
                    <View style={styles.outfitContainer}>
                        {outfit.map((currentItem, itemIndex) => (
                            <View key={currentItem.id} style={styles.itemContainer}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                    source={{ uri: currentItem.imageUrl }}
                                    style={styles.itemImage}
                                />
                                <Text style={styles.itemName}>{currentItem.name}</Text>

                                </View>
                                <Text>Type: {currentItem.type}</Text>
                                <Text>Tag: {currentItem.tag}</Text>
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
        alignItems: 'center',
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
});

export default OutfitDetails;