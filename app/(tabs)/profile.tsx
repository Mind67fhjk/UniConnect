import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const SURFACE_ALT = '#161b26';
const BORDER = '#2a3441';
const TEXT_MUTED = '#9ca3af';

const SKILLS = ['Python', 'React Native', 'UI Design', 'Data Structures', 'Public Speaking'];
const ACHIEVEMENTS = [
  { title: "Dean's List 2023", icon: 'ribbon', tint: '#f59e0b' },
  { title: 'Hackathon Winner', icon: 'code-slash', tint: '#06b6d4' },
  { title: 'Community Lead', icon: 'people', tint: '#a855f7' },
];

const PORTFOLIO = [
  {
    title: 'Campus Delivery App',
    tag: 'App',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTpVqSbbXirCvKm8ALW0IEx6Rx5t4YGuDGgXiLrf6uxYLnCvE4CWSS5l9BVc3RTll0K-S1nJId1abzS6QQL4p91BrRRTAg8ltuE6XSqwQ1EFOIunLndfAHLovDxOuL4Rq3QTNiL_QOhKvKXK7kMKGfh_U4K5iIMp3xgWo_MRE5TiLnw1adtVIdqFKIgP3pVk7jSOVMg_Gr8e3lpPTSr7eRVU76Z81vr8eEe9GXIv4tcC3f2CA1BLZDounEeSpcq3tfCyIIfvQZ-7M',
  },
  {
    title: 'Traffic Analysis',
    tag: 'Data',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8QoCeBvWl3mOVRlJZAy_fJE50vQstjDV6oFbrrPTUXzf8hhlAd7PZxdMv4Q5L2i8YAopcLzxChF0pKvIgROfIIA_pSmrJDQ8TvbfjWt13AcSldXuMm6v_LL4CwYxdKkjvMgIi9dmR-YbBE64RLmGGWEhIdFclpv6C1-SDkaioHu-LSim9AHBcuHxHOU3QyKfb2_--y1U5rcwdjntXRW9Po8P8blgjoXGtaNjcK4SP1glYqKZm5fmTHBb3c9I6y3nMGODYoORlIB8',
  },
  {
    title: 'UniConnect Web',
    tag: 'Web',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDkGaKmmUJKHNzw9WIHzyljomKCDPqUJXZzn2xx9F0vHvqFqDgQ34D1GvALAkycp2TGMIYO25bWJ6_-yruNJB_JAGaOLWDkA7rqfNqfVup48DcjnYlxrmNJxX6Cm9d25zP5BwTQ8bAkcamMlLCaNgtHoXSiDAiytSlw1pgBTbZoI4Pm_XFAvJ2KKLoVKLK3pdFyGJwBTrTRJxcuUemZQXpn4sWMhekLmega-H4B7X9lBdMhZGAVsNDhnj-e-eQbUb4JrJH-b-JQfEg',
  },
];

const DOCUMENTS = [
  { title: 'Resume_2024_Final.pdf', subtitle: 'Updated 2 days ago', icon: 'document-outline' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Ionicons name="chevron-back" size={22} color="white" />
            <Text style={styles.headerTitle}>My Profile</Text>
          </View>
          <TouchableOpacity
            style={styles.headerIcon}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/settings')}
          >
            <Ionicons name="settings-outline" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.avatarGlow}>
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8yx-9hy9FXChH5NGyJOlxccvYwbjp2al-e0XethhcHEqsWBIh0JdjF49e91kM2beiP_fmuA21fBcID6bC-CXzChkDY-iw0KG8C2vcdgMgvyaCyP_zbtK_4K8PmYtNbegoMoEUwn7ygStXAqg6aPqC8_8znnYAHSPi8-3R1w---mZ3eK62xh1Ru70EgFVbUhxGoP-UtfsTidXbp2wbiA_SDuzxt_5mk4X0v6HQI4Qp0HV9AuBR-Uf5S1nocM2w_AuH6by-ld0d9Zk',
              }}
              style={styles.avatar}
              imageStyle={styles.avatarImage}
            >
              <View style={styles.verifyBadge}>
                <Ionicons name="checkmark-circle" size={20} color={PRIMARY} />
              </View>
            </ImageBackground>
          </View>
          <Text style={styles.name}>Hanna Bekele</Text>
          <Text style={styles.role}>Software Engineering, Addis Ababa University</Text>
          <View style={styles.tagsRow}>
            <View style={[styles.tag, styles.tagPrimary]}>
              <Text style={[styles.tagText, { color: PRIMARY }]}>Student</Text>
            </View>
            <View style={styles.tag}>
              <View style={styles.pulseDot} />
              <Text style={styles.tagText}>Open to Work</Text>
            </View>
          </View>
          <View style={styles.heroActions}>
            <TouchableOpacity
              style={styles.primaryButton}
              activeOpacity={0.9}
              onPress={() => router.push('/(tabs)/edit-profile')}
            >
              <Text style={styles.primaryButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton} activeOpacity={0.85}>
              <Ionicons name="share-social" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3.8</Text>
            <Text style={styles.statLabel}>GPA</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>4th</Text>
            <Text style={styles.statLabel}>Year</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
        </View>

        <View style={styles.verificationCard}>
          <View style={styles.verificationLeft}>
            <View style={styles.verificationIcon}>
              <Ionicons name="shield-checkmark" size={20} color={PRIMARY} />
            </View>
            <View>
              <Text style={styles.verificationTitle}>Social Verification</Text>
              <Text style={styles.verificationSubtitle}>Identity confirmed via ID</Text>
            </View>
          </View>
          <Text style={styles.link}>Details</Text>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Skills & Competencies</Text>
          <Text style={styles.link}>Edit</Text>
        </View>
        <View style={styles.chipRow}>
          {SKILLS.map((skill) => (
            <View key={skill} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
          <TouchableOpacity style={[styles.chip, styles.chipAdd]} activeOpacity={0.85}>
            <Ionicons name="add" size={14} color={PRIMARY} />
            <Text style={[styles.chipText, { color: PRIMARY }]}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <Text style={styles.link}>View All</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.achievementsRow}>
          {ACHIEVEMENTS.map((item) => (
            <View key={item.title} style={styles.achievementCard}>
              <View style={[styles.achievementIcon, { borderColor: `${item.tint}55`, backgroundColor: `${item.tint}22` }]}>
                <Ionicons name={item.icon as React.ComponentProps<typeof Ionicons>['name']} size={26} color={item.tint} />
              </View>
              <Text style={styles.achievementLabel}>{item.title}</Text>
            </View>
          ))}
          <View style={[styles.achievementCard, styles.achievementGhost]}>
            <Ionicons name="add" size={20} color={TEXT_MUTED} />
            <Text style={styles.achievementLabel}>Earn More</Text>
          </View>
        </ScrollView>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Portfolio</Text>
          <TouchableOpacity style={styles.addCircle} activeOpacity={0.85}>
            <Ionicons name="add" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.portfolioGrid}>
          {PORTFOLIO.map((item) => (
            <View key={item.title} style={styles.portfolioCard}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.portfolioImage}
                imageStyle={styles.portfolioImageRadius}
              >
                <View style={styles.portfolioTag}>
                  <Text style={styles.portfolioTagText}>{item.tag}</Text>
                </View>
              </ImageBackground>
              <View style={styles.portfolioTextWrap}>
                <Text style={styles.portfolioTitle}>{item.title}</Text>
                <Text style={styles.portfolioSubtitle}>Tap to view details</Text>
              </View>
            </View>
          ))}
          <View style={[styles.portfolioCard, styles.addProjectCard]}>
            <View style={styles.addProjectIcon}>
              <Ionicons name="add" size={20} color={TEXT_MUTED} />
            </View>
            <Text style={styles.portfolioSubtitle}>Add Project</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Documents</Text>
        <View style={styles.documentList}>
          {DOCUMENTS.map((doc) => (
            <View key={doc.title} style={styles.documentCard}>
              <View style={styles.documentIcon}>
                <Ionicons name={doc.icon as React.ComponentProps<typeof Ionicons>['name']} size={18} color="#ef4444" />
              </View>
              <View style={styles.documentText}>
                <Text style={styles.documentTitle}>{doc.title}</Text>
                <Text style={styles.documentSubtitle}>{doc.subtitle}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.85}>
                <Ionicons name="download-outline" size={18} color={TEXT_MUTED} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
      {menuOpen && (
        <View style={styles.menuSheet}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuTitle}>Quick Navigation</Text>
            <TouchableOpacity onPress={() => setMenuOpen(false)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Ionicons name="close" size={18} color={TEXT_MUTED} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuRow}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); router.replace('/(tabs)/explore'); }}>
              <Ionicons name="compass" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Explore</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9}>
              <Ionicons name="school" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Academics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9}>
              <Ionicons name="calendar-clear" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9}>
              <Ionicons name="people" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Clubs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9}>
              <Ionicons name="briefcase" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Career</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {connectOpen && (
        <View style={styles.menuSheet}>
          <View style={styles.menuHeader}>
            <Text style={styles.menuTitle}>Connect</Text>
            <TouchableOpacity onPress={() => setConnectOpen(false)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
              <Ionicons name="close" size={18} color={TEXT_MUTED} />
            </TouchableOpacity>
          </View>
          <View style={styles.menuRow}>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPress={() => {
                setConnectOpen(false);
                router.replace('/(tabs)/forum');
              }}
            >
              <Ionicons name="chatbubbles" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Forum</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPress={() => {
                setConnectOpen(false);
                router.replace('/(tabs)/groups');
              }}
            >
              <Ionicons name="people" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Groups</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); router.replace('/(tabs)'); }}>
          <Ionicons name="home-outline" size={22} color={TEXT_MUTED} />
          <Text style={styles.bottomLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomItem}
          activeOpacity={0.9}
          onPress={() => {
            setMenuOpen(false);
            setConnectOpen((v) => !v);
          }}
        >
          <View style={styles.iconWithDot}>
            <Ionicons name="git-network-outline" size={22} color={TEXT_MUTED} />
            <View style={styles.badgeDot} />
          </View>
          <Text style={styles.bottomLabel}>Connect</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          activeOpacity={0.9}
          onPress={() => {
            setConnectOpen(false);
            setMenuOpen((v) => !v);
          }}
        >
          <Ionicons name="menu" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9}>
          <View style={styles.iconWithDot}>
            <Ionicons name="chatbubble-ellipses-outline" size={22} color={TEXT_MUTED} />
            <View style={styles.badgeDot} />
          </View>
          <Text style={styles.bottomLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9}>
          <Ionicons name="person" size={22} color={PRIMARY} />
          <Text style={[styles.bottomLabel, { color: PRIMARY }]}>Profile</Text>
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
  content: {
    padding: 16,
    paddingBottom: 32,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  hero: {
    alignItems: 'center',
    gap: 10,
    paddingVertical: 8,
  },
  avatarGlow: {
    padding: 6,
    borderRadius: 90,
    backgroundColor: 'rgba(19,127,236,0.12)',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImage: {
    borderRadius: 60,
  },
  verifyBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: SURFACE,
    borderRadius: 14,
    padding: 2,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
  },
  role: {
    color: TEXT_MUTED,
    fontSize: 14,
    textAlign: 'center',
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: SURFACE,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: BORDER,
  },
  tagPrimary: {
    backgroundColor: 'rgba(19,127,236,0.1)',
    borderColor: 'rgba(19,127,236,0.3)',
  },
  tagText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
  },
  heroActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 24,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: SURFACE,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    paddingVertical: 14,
    gap: 4,
  },
  statNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  statLabel: {
    color: TEXT_MUTED,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  verificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0f172a',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1d2a44',
    padding: 14,
    gap: 12,
  },
  verificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  verificationIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(19,127,236,0.12)',
  },
  verificationTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  verificationSubtitle: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  link: {
    color: PRIMARY,
    fontWeight: '700',
    fontSize: 13,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  chipText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  chipAdd: {
    borderColor: 'rgba(19,127,236,0.4)',
    backgroundColor: 'rgba(19,127,236,0.08)',
  },
  achievementsRow: {
    gap: 12,
    paddingVertical: 6,
  },
  achievementCard: {
    width: 110,
    alignItems: 'center',
    gap: 8,
    backgroundColor: SURFACE,
    borderRadius: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },
  achievementGhost: {
    borderStyle: 'dashed',
    borderColor: BORDER,
  },
  achievementIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  achievementLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  addCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  portfolioCard: {
    width: '48%',
    backgroundColor: SURFACE,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    overflow: 'hidden',
  },
  portfolioImage: {
    height: 140,
    width: '100%',
    justifyContent: 'flex-start',
  },
  portfolioImageRadius: {
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  portfolioTag: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
  },
  portfolioTagText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700',
  },
  portfolioTextWrap: {
    padding: 10,
    gap: 4,
  },
  portfolioTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  portfolioSubtitle: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  addProjectCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: SURFACE_ALT,
    borderColor: BORDER,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  addProjectIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  documentList: {
    gap: 10,
  },
  documentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: SURFACE,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2f1b1b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentText: {
    flex: 1,
    gap: 2,
  },
  documentTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  documentSubtitle: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  bottomSpacer: {
    height: 120,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 88,
    backgroundColor: SURFACE,
    borderTopWidth: 1,
    borderColor: BORDER,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  bottomItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  bottomLabel: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '600',
  },
  iconWithDot: {
    position: 'relative',
  },
  badgeDot: {
    position: 'absolute',
    top: -4,
    right: -8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: PRIMARY,
    borderWidth: 2,
    borderColor: SURFACE,
  },
  menuButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
    marginBottom: 18,
  },
  menuSheet: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 96,
    backgroundColor: SURFACE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 12,
    gap: 10,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  menuRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  menuItem: {
    width: '48%',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    gap: 6,
  },
  menuLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
});
