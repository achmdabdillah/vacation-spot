import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import ButtonComp from "../components/Button";

export default function DetailScreen({ navigation, route }) {
  const { place } = route.params;

  const openMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ButtonComp navigation={navigation} label="Kembali" />
      <Image source={place.image} style={styles.image} />
      <Text style={styles.title}>{place.title}</Text>
      <Text style={styles.desc}>{place.desc}</Text>
      <Text style={styles.cost}>Biaya: {place.cost}</Text>
      <Button title="Lihat Peta Lokasi" onPress={openMap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 65, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  desc: { fontSize: 16, color: "#333", marginBottom: 10 },
  cost: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
});
