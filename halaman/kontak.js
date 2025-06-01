import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Animated } from "react-native";

export default function Kontak() {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.title}>Hubungi Aku</Text>
        <Text style={styles.subtitle}>Kalau mau tanya atau kerja sama, bisa kontak aku lewat:</Text>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("mailto:azzahranuraulia07@gmail.com")}
        >
          <Text style={styles.icon}>✉️</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.linkText}>azzahranuraulia07@gmail.com</Text>
            <Text style={styles.contactDesc}>Kirim email kalau mau ngobrol serius atau kerjaan.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("https://wa.me/6287878830498")}
        >
          <Text style={styles.icon}>📞</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>WhatsApp</Text>
            <Text style={styles.linkText}>+62 878-7883-0498</Text>
            <Text style={styles.contactDesc}>Chat langsung di WA buat ngobrol santai.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("https://instagram.com/azhranuala")}
        >
          <Text style={styles.icon}>💖</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Instagram</Text>
            <Text style={styles.linkText}>@azhranuala</Text>
            <Text style={styles.contactDesc}>Lihat foto-foto dan cerita seru aku di sini.</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() =>
            Linking.openURL(
              "https://www.linkedin.com/in/azzahranuraulia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            )
          }
        >
          <Text style={styles.icon}>🔗</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>LinkedIn</Text>
            <Text style={styles.linkText}>@azzahranuraulia</Text>
            <Text style={styles.contactDesc}>Tempat aku berbagi perjalanan belajar dan pengalaman .</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactItem}
          onPress={() => Linking.openURL("https://github.com/azzahranuraulia")}
        >
          <Text style={styles.icon}>💻</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>GitHub</Text>
            <Text style={styles.linkText}>@azzahranuraulia</Text>
            <Text style={styles.contactDesc}>Tempat aku simpan semua project coding.</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFF0F5", // pink pastel background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#D36BA6", // pink magenta
    textAlign: "center",
    marginBottom: 12,
    fontFamily: "sans-serif-medium",
  },
  subtitle: {
    fontSize: 16,
    color: "#B084BC",
    textAlign: "center",
    marginBottom: 25,
    fontStyle: "italic",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFF8FB",
    padding: 15,
    borderRadius: 20,
    marginBottom: 18,
    shadowColor: "#FADADD", // soft pink shadow
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: "#FADADD",
  },
  icon: {
    fontSize: 28,
    marginRight: 15,
    color: "#D36BA6",
    marginTop: 5,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#B76BA3",
    marginBottom: 2,
  },
  linkText: {
    fontSize: 16,
    color: "#A774C1",
    textDecorationLine: "underline",
    marginBottom: 4,
  },
  contactDesc: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#7F8C8D",
  },
});
