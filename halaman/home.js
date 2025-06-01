import React from "react";
import {View, StatusBar, Text, Image, StyleSheet, TouchableOpacity, ScrollView,} from "react-native";

export default Home = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
  <Image
      source={require("../assets/images/azzahra.jpg")}
      style={styles.logo}
    />
    <Text style={styles.appName}>Azzahra Nur Aulia🌸</Text>
    <Text style={styles.description}>
<Text style={styles.description}>
  Sebuah perjalanan dalam warna dan cerita 🎨✨,{"\n"}
  karya-karya yang berbicara tanpa kata 🖼️🤫,{"\n"}
  dan mimpi yang terus terajut dalam setiap langkah 🌙🧵.  
</Text>
    </Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.button, styles.buttonPink]}
        onPress={() => navigation.navigate("TentangSaya")}
      >
        <Text style={styles.buttonText}>🧕 Tentang Saya</Text>
      </TouchableOpacity>
            <TouchableOpacity
        style={[styles.button, styles.buttonGrey]}
        onPress={() => navigation.navigate("Skills")}
      >
        <Text style={styles.buttonText}>🛠️ Skills</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonOrange]}
        onPress={() => navigation.navigate("Sertifikat")}
      >
        <Text style={styles.buttonText}>📜 Sertifikat</Text>
      </TouchableOpacity>
            <TouchableOpacity
        style={[styles.button, styles.buttonGreen]}
        onPress={() => navigation.navigate("Kontak")}
      >
        <Text style={styles.buttonText}>📞 Kontak</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: StatusBar.currentHeight,
    flexGrow: 1,
    backgroundColor: "#FAF3F3",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: "#E0D0C9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  appName: {
    fontSize: 32,
    fontWeight: "600",
    color: "#4B4A4A",
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 1.2,
  },
  description: {
    fontSize: 18,
    color: "#5F6368",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 25,
    lineHeight: 28,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  button: {
    width: "85%",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonPink: {
    backgroundColor: "#F4A6D7",
  },
  buttonPurple: {
    backgroundColor: "#D1B3FF",
  },
  buttonBlue: {
    backgroundColor: "#A2DFF7",
  },
  buttonGreen: {
    backgroundColor: "#B0E57C",
  },
  buttonOrange: {
    backgroundColor: "#FFD59E",
  },
  buttonGrey: {
    backgroundColor: "#D8D8D8",
  },
  buttonText: {
    fontSize: 18,
    color: "#4B4A4A",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1.3,
  },
});
