import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

const bookPages = [
  "Halo, nama saya Azzahra Nur Aulia. Saya seorang pelajar di SMKN 4 Padalarang yang terus berkembang dan berusaha untuk mencapai impian saya setiap hari. 🌟📚",
  "Saya memiliki ketertarikan besar dalam seni, desain, dan teknologi. Saya senang menciptakan hal-hal baru yang dapat memberikan dampak positif dalam kehidupan orang lain. 🎨💻✨",
  "Sejak kelas 10, saya mulai tertarik dengan dunia teknologi dan bagaimana teknologi bisa menciptakan perubahan yang lebih baik. 🤖🚀",
  "Saat ini, saya memilih jurusan Pengembangan Perangkat Lunak dan Gim, yang memberi saya kesempatan untuk mendalami dunia pemrograman, pembuatan aplikasi, dan pengembangan game. 🎮💡💻",
];

const hobbyList = [
  {
    img: "https://i.pinimg.com/236x/de/71/f9/de71f9a7295cb4e07e69f079e7759089.jpg",
    text: "✍️ Menulis apapun yang ada di pikiran saya.",
  },
  {
    img: "https://i.pinimg.com/236x/e6/b5/5f/e6b55f8000ecc0915c1bd6cc46734262.jpg",
    text: "🖥️ Membuat proyek coding yang kreatif.",
  },
  {
    img: "https://i.pinimg.com/236x/aa/35/25/aa35259c00142c02f2315e7b42a7215b.jpg",
    text: "📖 Membaca buku tentang teknologi dan pengembangan diri.",
  },
  {
    img: "https://i.pinimg.com/236x/98/76/84/987684cc3f85135957362cc546140fb6.jpg",
    text: "🎶 Mendengarkan musik untuk inspirasi.",
  },
  {
    img: "https://i.pinimg.com/474x/41/a9/5a/41a95a8fa6623fa4cefa0a25cd4ccb76.jpg",
    text: "🏋️‍♂️ Berolahraga untuk menjaga kebugaran tubuh.",
  },
  {
    img: "https://i.pinimg.com/236x/52/30/c9/5230c9b06f0d0653aeec6dfb9a1ef35e.jpg",
    text: "🍳 Memasak hidangan lezat di dapur.",
  },
];

const organisasiData = [
  {
    orgName: "MPK (Majelis Permusyawaratan Kelas) - SMKN 4 Padalarang",
    period: "September 2023 - Sekarang",
    role: "Anggota MPK",
    duties: [
      "Membantu evaluasi dan pengawasan program kerja OSIS",
      "Menyampaikan aspirasi siswa kepada pihak sekolah",
    ],
    img: require("../assets/images/mpk.jpg"),
  },
  {
    orgName: "OSIS (Organisasi Siswa Intra Sekolah) - MTS Al-Bidayah",
    period: "November 2021 – Maret 2023",
    role: "Wakil Ketua OSIS (Februari 2022 – Februari 2023)",
    duties: [
      "Memimpin & mengkoordinasikan program kerja OSIS",
      "Meningkatkan komunikasi & kepimpinan",
    ],
    img: require("../assets/images/osis.jpg"),
  },
];

const TentangHobi = () => {
  const [selectedTab, setSelectedTab] = useState("tentang");
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage < bookPages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <View style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {["tentang", "hobi", "organisasi"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              selectedTab === tab && styles.activeTab,
            ]}
            onPress={() => setSelectedTab(tab)}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={{ selected: selectedTab === tab }}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab === "tentang"
                ? "Tentang Saya"
                : tab === "hobi"
                ? "Hobi"
                : "Organisasi"}
            </Text>
            {selectedTab === tab && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      {selectedTab === "tentang" && (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.imageWrapper}>
            <Image
              source={require("../assets/images/zahra.jpg")}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.bookContainer}>
            <View style={styles.bookCover}>
              <Text style={styles.bookTitle}>Tentang Saya</Text>
            </View>
            <View style={styles.bookPage}>
              <Text style={styles.pageText}>{bookPages[currentPage]}</Text>
            </View>
            <View style={styles.navigation}>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  currentPage === 0 && styles.disabledButton,
                ]}
                onPress={handlePreviousPage}
                disabled={currentPage === 0}
                activeOpacity={0.8}
              >
                <Text style={styles.navText}>Sebelumnya</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.navButton,
                  currentPage === bookPages.length - 1 && styles.disabledButton,
                ]}
                onPress={handleNextPage}
                disabled={currentPage === bookPages.length - 1}
                activeOpacity={0.8}
              >
                <Text style={styles.navText}>Berikutnya</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.additionalInfo}>
              Saya percaya bahwa kreativitas adalah kunci untuk melihat dunia
              dari sudut pandang yang berbeda, dan setiap langkah kecil yang
              saya ambil adalah bagian dari perjalanan besar menuju impian saya.
              ✨🌱💭
            </Text>
          </View>

          <Text style={styles.motto}>
            "Berani bermimpi besar, dan lakukan dengan sepenuh hati." ✨💪💖
          </Text>
        </ScrollView>
      )}

      {selectedTab === "hobi" && (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.hobbyTitle}>🎉 Hobi Saya 🎉</Text>
          <Text style={styles.hobbyIntro}>
            Aku memiliki berbagai hobi yang membuat hidupku lebih berwarna: 🌈
          </Text>
          {hobbyList.map((hobby, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.hobbyCard}
              onPress={() => Alert.alert(hobby.text)}
              activeOpacity={0.7}
            >
              <Image source={{ uri: hobby.img }} style={styles.hobbyImage} />
              <Text style={styles.hobbyText}>{hobby.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {selectedTab === "organisasi" && (
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.orgTitle}>🏢 Pengalaman Organisasi</Text>
          {organisasiData.map((org, idx) => (
            <View key={idx} style={styles.orgCard}>
              <Image source={org.img} style={styles.orgImage} />
              <View style={styles.orgTextContainer}>
                <Text style={styles.orgName}>{org.orgName}</Text>
                <Text style={styles.orgPeriod}>{org.period}</Text>
                <Text style={styles.orgRole}>{org.role}</Text>
                <View style={styles.orgDuties}>
                  {org.duties.map((duty, i) => (
                    <Text key={i} style={styles.orgDutyItem}>
                      • {duty}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3F3",
    paddingTop: 40,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginHorizontal: 40,
    marginBottom: 25,
  },
  tabButton: {
    marginHorizontal: 20,
    paddingBottom: 6,
    alignItems: "center",
  },
  // hapus empty activeTab atau tambahkan style jika ingin
  tabText: {
    fontSize: 18,
    color: "#888",
    fontWeight: "600",
  },
  activeTabText: {
    color: "#FF7043",
    fontWeight: "bold",
  },
  underline: {
    marginTop: 6,
    height: 3,
    width: 50,
    backgroundColor: "#FF7043",
    borderRadius: 3,
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  // Tentang Saya styles
  imageWrapper: {
    alignItems: "center",
    marginBottom: 24,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "#FFD700",
  },
  bookContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  bookCover: {
    width: "100%",
    maxWidth: 360,
    height: 52,
    backgroundColor: "#FF7043",
    justifyContent: "center",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginBottom: 4,
  },
  bookTitle: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  bookPage: {
    width: "100%",
    maxWidth: 360,
    minHeight: 140,
    backgroundColor: "#FFF",
    padding: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
  },
  pageText: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 360,
    marginTop: 10,
  },
  navButton: {
    backgroundColor: "#FF7043",
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "#E0E0E0",
  },
  navText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
  infoContainer: {
    marginTop: 12,
  },
  additionalInfo: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    fontStyle: "italic",
  },
  motto: {
    marginTop: 16,
    fontSize: 16,
    color: "#FF7043",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },

  // Hobi styles
  hobbyTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FF7043",
    textAlign: "center",
    marginBottom: 6,
  },
  hobbyIntro: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 14,
  },
  hobbyCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  hobbyImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 14,
  },
  hobbyText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    flexWrap: "wrap",
  },

  // Organisasi styles
  orgTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF7043",
    marginBottom: 12,
    textAlign: "center",
  },
  orgCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  orgImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 16,
  },
  orgTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  orgName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  orgPeriod: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#666",
    marginBottom: 8,
  },
  orgRole: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: "#FF7043",
  },
  orgDuties: {},
  orgDutyItem: {
    fontSize: 14,
    color: "#444",
    marginBottom: 2,
  },
});

export default TentangHobi;
