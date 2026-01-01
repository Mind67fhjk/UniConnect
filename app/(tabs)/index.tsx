import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ለአዶዎች (Icons)

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. ScrollView ገጹ ወደ ታች እንዲንሸራተት ያደርጋል */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header - ርዕስ እና ቋንቋ መቀየሪያ */}
        <View style={styles.header}>
           <View style={styles.logoContainer}>
              <View style={styles.iconBox}>
                <Ionicons name="school" size={20} color="white" />
              </View>
              <Text style={styles.logoText}>UniConnect</Text>
           </View>
           <Ionicons name="language" size={24} color="white" />
        </View>

        {/* Hero Section - ዋናው ምስል እና ጽሁፍ */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1523240693567-d92e8a9990eb?q=80&w=2070&auto=format&fit=crop' }} 
            style={styles.heroImage} 
          />
          <Text style={styles.heroTitle}>Uniting Students Across Ethiopia</Text>
          <Text style={styles.heroSubtitle}>
            The premier digital hub for sharing resources, connecting with peers, and staying updated.
          </Text>
        </View>

      </ScrollView>

      {/* 2. Sticky Footer - ሁልጊዜ ከታች የሚቀመጡ Buttons */}
      <View style={styles.footer}>
         <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Log In</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Join the Community →</Text>
         </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101922', // ጥቁር ዳራ (Dark Background)
  },
  scrollContent: {
    paddingBottom: 100, // ለታችኛው Buttons ቦታ ለመተው
  },
  header: {
    flexDirection: 'row', // እቃዎችን በጎን በኩል ለማሰለፍ
    justifyContent: 'space-between', // በግራ እና በቀኝ ለማራራቅ
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBox: {
    backgroundColor: '#137fec', // ሰማያዊ ቀለም
    padding: 6,
    borderRadius: 8,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  heroSection: {
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  heroTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
  },
  heroSubtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    position: 'absolute', // ከታች እንዲጣበቅ ያደርገዋል
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#101922',
    gap: 10,
  },
  loginBtn: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2e3642',
  },
  joinBtn: {
    flex: 2,
    backgroundColor: '#137fec',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  loginBtnText: { color: 'white', fontWeight: 'bold' },
  joinBtnText: { color: 'white', fontWeight: 'bold' },
});


