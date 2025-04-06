import { Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { useState} from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

    const items = [
        {
            "id": "1",
            "name": "Blue Blouse",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901396/Joanna_Blouse_u6ie8h.jpg",
            "type": "top",
            "tag": "vintage",
            "price": "10",
            "sustainability": "7"
          },
          {
            "id": "2",
            "name": "Striped Shirt",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901486/This_item_is_unavailable_-_Etsy_vngper.jpg",
            "type": "top",
            "tag": "vintage",
            "price": "7",
            "sustainability": "6"
          },
          {
            "id": "3",
            "name": "White Off-Shoulder Top",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901486/Vintage_1980s_blouse_from_Dalena_Vintage_iompep.jpg",
            "type": "top",
            "tag": "vintage",
            "price": "6",
            "sustainability": "4"
          },
          {
            "id": "4",
            "name": "Orange Pants with Gold Buttons",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743901943/1940s_Swing_Trousers_-_Rust_zqb0o9.jpg",
            "type": "pants",
            "tag": "vintage",
            "price": "9",
            "sustainability": "5"
          },
          {
            "id": "5",
            "name": "Brass Pocketwatch",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902115/Old_Clocks_pocket_watches_k2t1tk.jpg",
            "type": "accessory",
            "tag": "vintage",
            "price": "13",
            "sustainability": "7"
          },
          {
            "id": "6",
            "name": "Jewel Hairband",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902122/Crowley_Party_vws2vp.jpg",
            "type": "accessory",
            "tag": "vintage",
            "price": "5",
            "sustainability": "9"
          },
          {
            "id": "7",
            "name": "Black Floral Top",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902295/Open-shoulder_Blouse_kk1fpd.jpg",
            "type": "top",
            "tag": "trending",
            "price": "7",
            "sustainability": "3"
          },
          {
            "id": "8",
            "name": "Cream Top",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902305/Designer_Collection_Sale_Moda_Operandi_esezpe.jpg",
            "type": "top",
            "tag": "trending",
            "price": "9",
            "sustainability": "8"
          },
          {
            "id": "9",
            "name": "Flare Jeans",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902436/rag_bone_Flexi_Sofie_Full_Length_High_Rise_Wide_Leg_Jeans_in_Whitney_at_Nordstrom_Size_32_fnahal.jpg",
            "type": "pants",
            "tag": "trending",
            "price": "12",
            "sustainability": "10"
          },
          {
            "id": "10",
            "name": "Green Flowy Pants",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902424/Designer_Ready_To_Wear_Shorts_Pants_and_Trousers_ZIMMERMANN_elzcx5.jpg",
            "type": "pants",
            "tag": "trending",
            "price": "4",
            "sustainability": "6"
          },
          {
            "id": "11",
            "name": "Jewelry Belt",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902533/nunqjskhaktikubf32mp.jpg",
            "type": "accessory",
            "tag": "trending",
            "price": "3",
            "sustainability": "2"
          },
          {
            "id": "12",
            "name": "Gold Sunglasses",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902550/Shop_Women_s_Accessories_odhnjg.jpg",
            "type": "accessory",
            "tag": "trending",
            "price": "4",
            "sustainability": "5"
          },
          {
            "id": "13",
            "name": "Floral Chain Necklace",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902555/Embossed_Chain_Belt_in_Antique_Brass_Women_s_at_Urban_Outfitters_hmk2kz.jpg",
            "type": "accessory",
            "tag": "trending",
            "price": "6",
            "sustainability": "7"
          },
          {
            "id": "14",
            "name": "Black Asymmetrical Top",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902709/Stargirl_Aesthetic_Asymmetric_Crop_Top_gvnduq.jpg",
            "type": "top",
            "tag": "upcoming",
            "price": "6",
            "sustainability": "4"
          },
          {
            "id": "15",
            "name": "Jeans with Denim Bows",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902828/Fall_winter_Women_Jeans_Stylish_Bow_Tie_High_Waist_Straight_Legs_Denim_Pants_dw0gby.jpg",
            "type": "pants",
            "tag": "upcoming",
            "price": "13",
            "sustainability": "10"
          },
          {
            "id": "16",
            "name": "Black Pants with Zippers",
            "imageUrl": "https://res.cloudinary.com/dffapgrga/image/upload/v1743902862/TECHWEAR_WIDE_LEG_MULTI_POCKET_PANTS_vogffa.jpg",
            "type": "pants",
            "tag": "upcoming",
            "price": "12",
            "sustainability": "9"
          },
    ];

    const router = useRouter();

    const groupItemsIntoOutfits = (items) => {
        const grouped = [];
        const used = new Set();
      
        while (true) {
          const top = items.find(item => item.type === 'top' && !used.has(item.id));
          const bottom = items.find(item => item.type === 'pants' && !used.has(item.id));
          const accessories = items.find(item => item.type === 'accessory' && !used.has(item.id));
      
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
                <TouchableOpacity onPress={()=>router.push({ pathname: "/outfitDetails", params: { item: JSON.stringify(outfit) }})}>
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
                            source={{ uri: item.imageUrl}}
                            style={styles.image}
                        />
                        <View style={[styles.pricebox, 
                           {backgroundColor:
                            item.tag == 'vintage' ? '#FFC4DF':
                            item.tag == 'trending' ? '#D63B82':
                            item.tag == 'upcoming' ? '#D30262': null
                           }
                        ]}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'Abhaya Libre Regular',
                                fontSize: 17,
                            }}>{item.tag} ${item.price}</Text>
                        </View>
                        
                        <Image
                            source={require("../../assets/images/leafimg2.png")}
                            style={{position: 'absolute', right: -1, top: 0, height: 35, width: 35}}
                            />
                            <View
                        style={{position: 'absolute', right: -2, width: 35, height: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{color: 'black', fontWeight: 600,}}>{item.sustainability}</Text>
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