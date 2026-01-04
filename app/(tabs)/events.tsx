import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const SURFACE_ALT = '#161b26';
const BORDER = '#2a3441';
const TEXT_MUTED = '#9da1b9';
const BADGE = '#e11d48';
const BOTTOM_NAV_HEIGHT = 88;

const CATEGORIES = ['All Events', 'Academic', 'Social', 'Career', 'Sports', 'National'] as const;
type Category = typeof CATEGORIES[number];

type FeaturedCard = {
  id: string;
  title: string;
  tag: string;
  location: string;
  image: string;
};

type EventItem = {
  id: string;
  dateLabel: string;
  day: string;
  tag: string;
  org: string;
  title: string;
  time: string;
  place: string;
  color: string;
};

const FEATURED: FeaturedCard[] = [
  {
    id: 'f1',
    title: 'National Coding Hackathon',
    tag: 'NATIONAL',
    location: 'AAU, 4 Kilo Campus',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRor6S8eB6e_FHkRNtG9lGrKP48oAbps2NdZwWgzFnFUL7IHSYoT0RUlfEJ2NDdFsN-bR7OptokNOe-RXIZJ421UnVPlL24o36dDsUzGsr93zdw1uq9LGP4Z1H_xola4R_ums0FolbQpfd7MKvzq8QqASrePAG7GpHXWQZICe0FfEP_mRWnpDxrP6EArsvTdUrnU-53HlGapop8PLXcT3KpFb_SKJ3t_xDwOp6_QZ9RHzHy40TcxLZuUCqFT5_G72YMlu9ARTRehQ',
  },
  {
    id: 'f2',
    title: 'Freshman Welcome Party',
    tag: 'SOCIAL',
    location: 'Unity Park',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDe55bjr5dG9Y6mcWEuvnAUI-iTGlf2wIOaWDl9PUFWOuByr7ANU0i3KNdnL3pTmbUoiu2qjJ_DiTRVi-ji0ckyIHjpWUTah292iIgWz1embAf7t9kwKzTK43TOUxljjLqtWsDCBBH8tasi7MQ9JTB2EzVhA67CMV1N6phOnX0_SY9OrEYZI6wgbv9xGZf6WYtuui1JJmJ4SIrFwHI_MghzEB7mWTlsstnJLMUoM47XoUfMDv3Vnqjqrb2oS3vCBN2ywIDS67G1AwY',
  },
];

const UPCOMING: EventItem[] = [
  {
    id: 'u1',
    dateLabel: 'Oct',
    day: '24',
    tag: 'Academic',
    org: 'Addis Ababa University',
    title: 'AI Research Symposium',
    time: '2:00 PM',
    place: 'Hall B',
    color: '#6366f1',
  },
  {
    id: 'u2',
    dateLabel: 'Oct',
    day: '26',
    tag: 'Sports',
    org: 'Hawassa University',
    title: 'Inter-University Football Final',
    time: '4:30 PM',
    place: 'Main Stadium',
    color: '#f97316',
  },
  {
    id: 'u3',
    dateLabel: 'Oct',
    day: '28',
    tag: 'Career',
    org: 'Online Event',
    title: 'CV Writing Masterclass',
    time: '6:00 PM',
    place: 'Zoom',
    color: '#22c55e',
  },
  {
    id: 'u4',
    dateLabel: 'Nov',
    day: '02',
    tag: 'Arts',
    org: 'Alle School of Arts',
    title: 'Student Art Exhibition',
    time: '10:00 AM',
    place: 'Gallery 1',
    color: '#9ca3af',
  },
];

export default function EventsScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [category, setCategory] = useState<Category>('All Events');
  const filteredEvents = useMemo(() => {
    if (category === 'All Events') return UPCOMING;
    return UPCOMING.filter((e) => e.tag.toLowerCase() === category.toLowerCase());
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View style={styles.topLeft}>
            <View style={styles.avatarWrap}>
              <ImageBackground
                source={{
                  uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOK_D_zA6gqLUo5N-8GES0z0V_3QHkdaMDz01kAnm2n1ZHKqZMIBIoJCE84D2bWh9msEPQ7dxhmhlFice3ZQr16_YCNQFHZHcyMfzQfnY4BHDZscxXel4oms717OMpYpmClM011SiT-JJILw2fC3SRFptTgs3ueyB-EL7inv6KWZHAdI-QsqwvQRTL7WmYnet7xOzWPeJGPXvX-YUZcJG-B7ymPsb9FH8OUVyDhF6Ycj6LLQj7SugNnZA3zOfAYRco30bXCgWZ2KI',
                }}
                style={styles.avatarImg}
              />
              <View style={styles.statusDot} />
            </View>
            <View>
              <Text style={styles.greeting}>Discover Campus</Text>
              <Text style={styles.subheading}>UniConnect Ethiopia</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="notifications-outline" size={20} color="white" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={TEXT_MUTED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search events, clubs, keywords..."
            placeholderTextColor={TEXT_MUTED}
          />
        </View>

        <View style={styles.toggleRow}>
          <TouchableOpacity style={[styles.toggleButton, styles.toggleActive]} activeOpacity={0.9}>
            <Ionicons name="list" size={18} color={PRIMARY} />
            <Text style={[styles.toggleText, { color: PRIMARY }]}>List View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleButton} activeOpacity={0.9}>
            <Ionicons name="calendar-clear" size={18} color={TEXT_MUTED} />
            <Text style={[styles.toggleText, { color: TEXT_MUTED }]}>Calendar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {CATEGORIES.map((item) => {
            const active = category === item;
            return (
              <TouchableOpacity
                key={item}
                style={[styles.filterChip, active ? styles.filterChipActive : styles.filterChipInactive]}
                onPress={() => setCategory(item)}
                activeOpacity={0.9}
              >
                <Text style={[styles.filterText, active ? styles.filterTextActive : styles.filterTextInactive]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <TouchableOpacity activeOpacity={0.85}>
            <Text style={styles.link}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredRow}>
          {FEATURED.map((card) => (
            <View key={card.id} style={styles.featuredCard}>
              <ImageBackground source={{ uri: card.image }} style={styles.featuredImage} imageStyle={{ borderRadius: 16 }}>
                <View style={styles.featuredOverlay} />
                <View style={styles.featuredTag}>
                  <Text style={styles.featuredTagText}>{card.tag}</Text>
                </View>
                <View style={styles.featuredBottom}>
                  <Text style={styles.featuredTitle}>{card.title}</Text>
                  <View style={styles.featuredMetaRow}>
                    <Ionicons name="location" size={14} color="white" />
                    <Text style={styles.featuredMeta}>{card.location}</Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <Text style={styles.sectionMeta}>Oct 2023 / Meskerem 2016</Text>
        </View>

        <View style={styles.upcomingStack}>
          {filteredEvents.map((item) => (
            <View key={item.id} style={styles.eventCard}>
              <View style={[styles.eventDate, { backgroundColor: `${item.color}22` }]}> 
                <Text style={styles.eventMonth}>{item.dateLabel}</Text>
                <Text style={[styles.eventDay, { color: item.color }]}>{item.day}</Text>
              </View>
              <View style={styles.eventBody}>
                <View style={styles.eventTopRow}>
                  <Text style={[styles.eventTag, { color: item.color }]}>{item.tag.toUpperCase()}</Text>
                  <Text style={styles.dot}>•</Text>
                  <Text style={styles.eventOrg} numberOfLines={1}>
                    {item.org}
                  </Text>
                </View>
                <Text style={styles.eventTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <View style={styles.eventMetaRow}>
                  <View style={styles.metaItem}>
                    <Ionicons name="time" size={14} color={TEXT_MUTED} />
                    <Text style={styles.metaText}>{item.time}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Ionicons name="location" size={14} color={TEXT_MUTED} />
                    <Text style={styles.metaText}>{item.place}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.bookmark} activeOpacity={0.8}>
                <Ionicons name="bookmark" size={18} color={TEXT_MUTED} />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={{ height: BOTTOM_NAV_HEIGHT + 80 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>

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
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); router.replace('/(tabs)/events'); }}>
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
            <TouchableOpacity
              style={styles.menuItem}
              activeOpacity={0.9}
              onPress={() => {
                setConnectOpen(false);
                router.replace('/(tabs)/courses');
              }}
            >
              <Ionicons name="book" size={18} color={PRIMARY} />
              <Text style={styles.menuLabel}>Courses</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); setConnectOpen(false); router.replace('/(tabs)'); }}>
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

        <TouchableOpacity
          style={styles.bottomItem}
          activeOpacity={0.9}
          onPress={() => {
            setMenuOpen(false);
            setConnectOpen(false);
            router.replace('/(tabs)/messages');
          }}
        >
          <Ionicons name="chatbubble-ellipses-outline" size={22} color={TEXT_MUTED} />
          <Text style={styles.bottomLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); setConnectOpen(false); router.replace('/(tabs)/profile'); }}>
          <Ionicons name="person" size={22} color={TEXT_MUTED} />
          <Text style={styles.bottomLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BACKGROUND },
  content: { padding: 16, gap: 14 },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  topLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatarWrap: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    position: 'relative',
  },
  avatarImg: { width: '100%', height: '100%' },
  statusDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: SURFACE,
  },
  greeting: { color: 'white', fontSize: 16, fontWeight: '900' },
  subheading: { color: PRIMARY, fontSize: 11, fontWeight: '700', letterSpacing: 0.4 },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: BADGE,
    borderWidth: 2,
    borderColor: SURFACE,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SURFACE,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    height: 50,
    gap: 10,
  },
  searchInput: { flex: 1, color: 'white', fontSize: 14 },
  toggleRow: {
    flexDirection: 'row',
    backgroundColor: SURFACE,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 4,
    gap: 6,
  },
  toggleButton: {
    flex: 1,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  toggleActive: {
    backgroundColor: SURFACE_ALT,
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  toggleText: { fontSize: 14, fontWeight: '800' },
  filterRow: { gap: 10, paddingVertical: 4 },
  filterChip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 18, borderWidth: 1 },
  filterChipActive: { backgroundColor: PRIMARY, borderColor: PRIMARY },
  filterChipInactive: { backgroundColor: SURFACE, borderColor: BORDER },
  filterText: { fontSize: 12, fontWeight: '800' },
  filterTextActive: { color: 'white' },
  filterTextInactive: { color: TEXT_MUTED },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  sectionTitle: { color: 'white', fontSize: 20, fontWeight: '900' },
  sectionMeta: { color: TEXT_MUTED, fontSize: 12, fontWeight: '700' },
  link: { color: PRIMARY, fontWeight: '800', fontSize: 12 },
  featuredRow: { gap: 12, paddingVertical: 6 },
  featuredCard: { width: 280, height: 180 },
  featuredImage: { flex: 1, borderRadius: 16, overflow: 'hidden' },
  featuredOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.35)' },
  featuredTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  featuredTagText: { color: 'white', fontSize: 10, fontWeight: '800', letterSpacing: 0.5 },
  featuredBottom: { position: 'absolute', left: 12, right: 12, bottom: 12, gap: 6 },
  featuredTitle: { color: 'white', fontSize: 18, fontWeight: '900', lineHeight: 22 },
  featuredMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  featuredMeta: { color: '#e5e7eb', fontSize: 12, fontWeight: '700' },
  upcomingStack: { gap: 10 },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: SURFACE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 12,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },
  eventDate: {
    width: 60,
    height: 64,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  eventMonth: { color: 'white', fontSize: 11, fontWeight: '800', letterSpacing: 0.3 },
  eventDay: { fontSize: 22, fontWeight: '900', lineHeight: 24 },
  eventBody: { flex: 1, gap: 6 },
  eventTopRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  eventTag: { fontSize: 10, fontWeight: '900', letterSpacing: 0.6 },
  eventOrg: { color: TEXT_MUTED, fontSize: 11, fontWeight: '700', flexShrink: 1 },
  dot: { color: TEXT_MUTED },
  eventTitle: { color: 'white', fontSize: 15, fontWeight: '900' },
  eventMetaRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  metaItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  metaText: { color: TEXT_MUTED, fontSize: 12, fontWeight: '700' },
  bookmark: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE_ALT,
    borderWidth: 1,
    borderColor: BORDER,
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: BOTTOM_NAV_HEIGHT + 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    zIndex: 3,
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
    zIndex: 4,
  },
  menuHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  menuTitle: { color: 'white', fontSize: 14, fontWeight: '800' },
  menuRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 10 },
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
  menuLabel: { color: 'white', fontWeight: '700', fontSize: 12, textAlign: 'center' },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: BOTTOM_NAV_HEIGHT,
    backgroundColor: SURFACE,
    borderTopWidth: 1,
    borderColor: BORDER,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 8,
    zIndex: 2,
  },
  bottomItem: { alignItems: 'center', justifyContent: 'center', gap: 4 },
  bottomLabel: { color: TEXT_MUTED, fontSize: 12, fontWeight: '600' },
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
  iconWithDot: { position: 'relative' },
  badgeDot: {
    position: 'absolute',
    top: -6,
    right: -10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: BADGE,
    borderWidth: 2,
    borderColor: SURFACE,
  },
});
