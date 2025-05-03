import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonComp({ navigation, label = "Kembali" }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={20} color="#333" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  text: {
    marginLeft: 6,
    fontSize: 16,
    color: "#333",
  },
});
