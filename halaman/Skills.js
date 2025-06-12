import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const skills = {
  "💻 Bahasa Pemrograman": [
    "JavaScript (dasar)",
    "TypeScript (dasar)",
    "PHP (dasar)",
  ],
  "🎨 Markup & Styling": ["HTML", "CSS"],
 "🧰 Framework & Library": ["Laravel (dasar)", "React Native (dasar)"],
  "🗄️ Database": ["MySQL"],
  "🛠️ Tools": [
    "Visual Studio Code",
    "Git & GitHub",
    "XAMPP",
    "Figma",
    "Canva",
  ],
  "💗 Soft Skills": [
    "Kerja sama tim",
    "Komunikasi",
    "Tanggung jawab",
    "Berpikir kritis",
  ],
};

export default function Skills() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>✨ Keahlian & Kemampuan</Text>
      <Text style={styles.description}>
        Senang belajar hal baru, semangat bantu tim, dan suka bikin hal jadi lebih rapih & aestetic💖💖💖
      </Text>
      {Object.entries(skills).map(([category, items], index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.category}>{category}</Text>
          {items.map((item, idx) => (
            <Text key={idx} style={styles.item}>• {item}</Text>
          ))}
        </View>
      ))}
      <Text style={styles.funFact}>
        <Text style={styles.funFact}>
  🎀 Fun Fact: Pas ngedesain portofolio ini, aku dengerin satu lagu di Spotify non-stop 8 jam. Estetik dapet, koding beres~ 💕💻
</Text>

      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#FFF8F0", 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#D8836C", 
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#6E4B3A",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 25,
    paddingHorizontal: 10,
    lineHeight: 22,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    borderColor: "#FFE5D4",
    borderWidth: 1,
    shadowColor: "#FAD6C9",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  category: {
    fontSize: 18,
    fontWeight: "600",
    color: "#B26E63",
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
    color: "#4A3F35",
    marginLeft: 8,
    marginBottom: 5,
  },
  funFact: {
    fontSize: 14,
    color: "#9C6E5E",
    textAlign: "center",
    marginTop: 10,
    fontStyle: "italic",
  },
});
