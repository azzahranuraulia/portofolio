import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Sertifikat = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📜 Sertifikat Saya</Text>
      <Text style={styles.description}>
        Alhamdulillah, ini beberapa sertifikat yang berhasil aku kumpulkan dari berbagai pelatihan dan pengalaman belajar. 
        Apapun itu, aku percaya setiap ilmu itu berharga dan patut disyukuri 🌸💫
      </Text>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-uiux.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>UI/UX Design & Development - Xpresso ACP Lite (2024)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-web.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Web Programming - Xpresso ACP Lite (2024)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-python.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Python Programming - Xpresso ACP Lite (2024)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-mobile.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Mobile App Development - Xpresso ACP Lite (2024)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-revou.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Software Engineering - RevoU (2025)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-dsf.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Front End - Digital Skill Fair 37.0 (2025)</Text>
      </View>

      <View style={styles.certItem}>
        <Image
          source={require('../assets/images/sertifikat-myskill.jpg')}
          style={styles.image}
        />
        <Text style={styles.caption}>Website Development Fundamental - MySkill (2025)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFF7F1', // pastel peach
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#E29578',
    textShadowColor: '#FFDDD2',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    color: '#8B6F5C',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  certItem: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#FDFCFB',
    padding: 16,
    borderRadius: 18,
    width: '90%',
    shadowColor: '#FFE5D9',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#FAD6C9',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F2C6B4',
  },
  caption: {
    marginTop: 10,
    fontSize: 15,
    fontStyle: 'italic',
    color: '#77675A',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default Sertifikat;
