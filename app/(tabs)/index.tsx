import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const BORDER = '#2e3642';
const TEXT_MUTED = '#94a3b8';

const AVATARS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBzyXb6HJ9G1dmuQGh7rMNgvFQv4w7UPRAjtMpOW_78kRHUlSp8BwYiiLpiNqmuBgBlDfUIYKJxhMAzKtz4aRkaekmkxXpLYtvqZJ1iPWnaSpSyybJBfeJkInA4Da-JwrnhSCWTQXl68infA0hpiRAs1KzXcipC66a_C9V5OuscrLQA-ZPM3Q2jwQSxM5P5jZieFCd0FwFpPmhS6IISK4ChCRel5wslL8FY9emujrvRaELSLqFlE9UASUw3YUcLx7i3T_oBV-F0A-E',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDPvdksNiEhHcKL04Vfz76KcK4CZzOCdMImoT-jlDqHmfdkb34g3C2ILq43B23vNoCbfPusxVOa5JEJrJnUTkO99XnWo-mnbprfXfovgfBtxwy7pDkB3EuWCTYPXUqC5LBaBq9ozeCK555Oyfe2hC59bZ-2qEmhNSpO4GgTeR523-jLEyQswSYP2J9IujfufCLLwPbcnWQCF-Alv46TH4HeuDZHxRPLCmmr8bpvyK-Ko2aMOXLGmM2KdHI-gWxfxszaIMbcwCnXC4g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBTKkKUgc2SA2e2a04538Dlr0wy-6nezDRUqEr9Q7EoUrKG7A95Gl79JkkVlnUYonszyGsIePtblnoojiur6p7VB9b_7O5p0C6B7k_GPrW4RGzI2j7kYxbDJjD7B71J88Jil2uGan6HmeXFbNupWzyis96yKDxgqrq_4DEi5Ssqwmc158vtJsSQC05eWgdN3Gw3X9NYsi_LK-5-8tOKC_gfOn55WoSelu18RkEQE5y0YG-KoraBhL0bKk2-VF62XooH8jChnvCZRYA',
];

const FEATURES = [
  {
    title: 'Resource Sharing',
    description:
      'Access and share lecture notes, exam papers, and reference materials from any university across the country.',
    icon: 'book-outline',
  },
  {
    title: 'Campus Forums',
    description:
      'Join discussions specific to your field of study. Connect with engineering, medicine, or law students nationwide.',
    icon: 'chatbubbles-outline',
  },
  {
    title: 'Event Calendar',
    description: 'Never miss a beat. Stay informed about academic calendars, national deadlines, and campus events.',
    icon: 'calendar-outline',
  },
];

export default function WelcomeScreen() {
  const { width } = useWindowDimensions();
  const featureWidth = width >= 900 ? '32%' : width >= 600 ? '48%' : '100%';

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.logoRow}>
            <View style={styles.logoIconBox}>
              <Ionicons name="school" size={20} color="white" />
            </View>
            <Text style={styles.logoText}>UniConnect</Text>
          </View>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="globe-outline" size={22} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.heroImageWrapper}>
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvqe-E6tozfTEipvp8Xa2EutgT9PmALyktS3OVejOt0q6CyDJkwjd0uE2u_ynO4ZVYgiP-MLkUhjQbv9Vp15rsY9eTlDhrL9F_LHe25_TdXdpSZK5nPelMYRFqB9h7ynNnAj3-d8ypGdovYQ-vXobOe1KeNcGmKH-40fWh-Ul4BajDxH0gK9vA-h-RHl4OUv6pjoD6ymVGI80dNb2MvUzRG-Cfrl7U_TtrpUdXQ7sp4g-FkR4FoMV0xrxo1aLAAvY4hHWdXqiTNjk',
              }}
              style={styles.heroImage}
              imageStyle={styles.heroImageRadius}
            >
              <View style={styles.heroOverlay} />
              <View style={styles.heroBadge}>
                <Text style={styles.heroBadgeText}>#1 Student Platform</Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.heroTextBlock}>
            <Text style={styles.heroTitle}>Uniting Students{'\n'}Across Ethiopia</Text>
            <Text style={styles.heroSubtitle}>
              The premier digital hub for sharing resources, connecting with peers, and staying updated on academic events
              from Addis Ababa to Jimma.
            </Text>
          </View>

          <View style={styles.socialProof}>
            <View style={styles.avatarRow}>
              {AVATARS.map((uri, index) => (
                <Image
                  key={uri}
                  source={{ uri }}
                  style={[styles.avatar, index !== 0 && styles.avatarOverlap]}
                />
              ))}
            </View>
            <Text style={styles.socialProofText}>Join 5,000+ students</Text>
          </View>
        </View>

        <View style={styles.trustSection}>
          <Text style={styles.trustLabel}>TRUSTED BY STUDENTS FROM</Text>
          <View style={styles.trustRow}>
            {['AAU', 'JU', 'HU', 'MU'].map((code) => (
              <View key={code} style={styles.trustPill}>
                <Text style={styles.trustPillText}>{code}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Everything you need to succeed</Text>
            <Text style={styles.sectionSubtitle}>
              We have built a platform specifically designed for the Ethiopian higher education ecosystem.
            </Text>
          </View>

          <View style={styles.featureGrid}>
            {FEATURES.map((feature) => (
              <View key={feature.title} style={[styles.featureCard, { width: featureWidth }]}>
                <View style={styles.featureIconBox}>
                  <Ionicons name={feature.icon as any} size={20} color={PRIMARY} />
                </View>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.missionWrapper}>
          <View style={styles.missionCard}>
            <Ionicons name="rocket-outline" size={28} color={PRIMARY} />
            <Text style={styles.missionTitle}>Our Mission</Text>
            <Text style={styles.missionText}>
              "To democratize access to academic resources and foster a collaborative environment where every Ethiopian
              student has the tools to excel."
            </Text>
          </View>
        </View>

        <View style={styles.footerLinks}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.footerLinkText}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.footerLinkText}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>© 2023 UniConnect Ethiopia</Text>
      </ScrollView>

      <View style={styles.stickyBar}>
        <Link href={"/login" as unknown as any} asChild>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.85}>
          <Text style={styles.secondaryButtonText}>Log In</Text>
        </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Join the Community</Text>
          <Ionicons name="arrow-forward" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  scrollContent: {
    paddingBottom: 160,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 16,
  },
  heroImageWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    height: 220,
    width: '100%',
    justifyContent: 'flex-end',
  },
  heroImageRadius: {
    borderRadius: 16,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(16,25,34,0.55)',
  },
  heroBadge: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: PRIMARY,
  },
  heroBadgeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 11,
    letterSpacing: 0.2,
  },
  heroTextBlock: {
    gap: 10,
  },
  heroTitle: {
    color: 'white',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    color: TEXT_MUTED,
    fontSize: 15,
    lineHeight: 22,
  },
  socialProof: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarRow: {
    flexDirection: 'row',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: BACKGROUND,
  },
  avatarOverlap: {
    marginLeft: -10,
  },
  socialProofText: {
    color: TEXT_MUTED,
    fontSize: 13,
    fontWeight: '600',
  },
  trustSection: {
    alignItems: 'center',
    paddingVertical: 26,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
    gap: 16,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  trustLabel: {
    color: '#64748b',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  trustRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  trustPill: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  trustPillText: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '800',
  },
  sectionHeader: {
    gap: 8,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  sectionSubtitle: {
    color: TEXT_MUTED,
    fontSize: 14,
    lineHeight: 20,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  featureCard: {
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },
  featureIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: 'rgba(19,127,236,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  featureDescription: {
    color: TEXT_MUTED,
    fontSize: 13,
    lineHeight: 18,
  },
  missionWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  missionCard: {
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 18,
    padding: 22,
    alignItems: 'center',
    gap: 10,
    overflow: 'hidden',
  },
  missionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  missionText: {
    color: '#cbd5e1',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 18,
    paddingTop: 18,
  },
  footerLinkText: {
    color: TEXT_MUTED,
    fontSize: 13,
    fontWeight: '600',
  },
  copyright: {
    color: '#7c8a9f',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 14,
  },
  stickyBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: BACKGROUND,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  secondaryButton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  primaryButton: {
    flex: 2,
    height: 50,
    borderRadius: 12,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
    letterSpacing: 0.2,
  },
});
