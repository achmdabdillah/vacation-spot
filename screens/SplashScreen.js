import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function SplashScreen({ navigation }) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => navigation.replace("List");

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/logo.png")}
        style={[styles.logo, { transform: [{ scale: scaleAnim }] }]}
      />
      <Text style={styles.title}>Where adventure awaits at every turn</Text>
      {showButton && (
        <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
          <Text style={styles.continueText}>Lanjutkan</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: Platform.OS === "web" ? "20%" : 0,
    height: Platform.OS === "web" ? "100vh" : undefined,
    overflow: Platform.OS === "web" ? "auto" : undefined,
  },
  logo: { width: 150, height: 150, marginBottom: 20 },
  title: { fontSize: 16, marginBottom: 20 },
  continueBtn: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  continueText: { color: "#fff", fontSize: 18 },
});
