import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { outfitSuggestions, Outfit } from "./outfitSuggestions";

const UploadImageScreen: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Outfit[]>([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 1 });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      generateSuggestions();
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      generateSuggestions();
    }
  };

  const generateSuggestions = () => {
    const shuffled = [...outfitSuggestions].sort(() => 0.5 - Math.random());
    setSuggestions(shuffled.slice(0, 2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload or Take a Picture</Text>
      <View style={styles.buttonGroup}>
        <Button title="Pick from Gallery" onPress={pickImage} />
        <View style={{ height: 10 }} />
        <Button title="Take a Photo" onPress={takePhoto} />
      </View>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.uploadedImage} />
      )}

      {suggestions.length > 0 && (
        <View style={styles.suggestionSection}>
          <Text style={styles.suggestionTitle}>Suggested Outfits</Text>
          <FlatList
            data={suggestions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>

                <Text style={styles.cardItem}>
                  Top: {item.top.name} ({item.top.tag})
                </Text>
                <Text style={styles.cardItem}>
                  Bottom: {item.bottom.name} ({item.bottom.tag})
                </Text>
                <Text style={styles.cardItem}>
                  Accessory: {item.accessory.name} ({item.accessory.tag})
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "600", textAlign: "center" },
  buttonGroup: { marginVertical: 20 },
  uploadedImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    marginVertical: 10,
  },
  suggestionSection: { marginTop: 20 },
  suggestionTitle: { fontSize: 20, fontWeight: "600", marginBottom: 10 },
  card: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f4f4f4",
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 8,
  },
  cardItem: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default UploadImageScreen;
