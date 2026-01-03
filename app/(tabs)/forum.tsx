import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
  Image,
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
const SURFACE_ALT = '#1c2127';
const BORDER = '#2a3441';
const TEXT_MUTED = '#9ca3af';

const CATEGORIES = ['All', 'Admissions', 'Engineering', 'Campus Life', 'Scholarships', 'Marketplace'];

const POSTS = [
  {
    id: '1',
    name: 'Abebe K.',
    university: 'Addis Ababa University',
    time: '2h ago',
    title: 'When do Freshmen registration dates start for 2024?',
    body:
      "I haven't seen any updates on the portal yet. Does anyone know if the registrar office posted the new calendar? Last year it was around mid-September.",
    tags: ['Admissions', 'Freshman'],
    likes: 12,
    comments: 5,
  },
  {
    id: '2',
    name: 'Sara M.',
    university: 'Bahir Dar University',
    time: '5h ago',
    title: 'Selling used Calculus II textbooks - cheap!',
    body: "Hi everyone! I just finished the semester and I'm selling my Thomas' Calculus book. It's in great condition, almost new. DM if interested!",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASj42C-nywx2r_sSGOPDjZTHaNOdaWtn-wcmT966hwGSw3VFGqNuvTuApzviFGAcnr_7Op1OM7uqVbpudNaj_FlwP4DyBUx8j4NLuX3iUKtv4v76qUaM7a9ZYPn-r6efYa5Ac1WxeRhEL4K8qGGjI0fJ42AFeCxxTHyLrO2g0Gl333PD7z9QUuABEMsggB-_4fPgNVYlmyXqh8-rwmLB1l58jyXQb8a-z995N-QoOTdjS_U76on250mOslb4yJz-7dBdo7RdaPw9E',
    tags: ['Marketplace', 'Textbooks'],
    likes: 3,
    comments: 1,
  },
  {
    id: '3',
    name: 'Student Union',
    university: 'Hawassa University',
    time: '1d ago',
    title: 'Inter-University Hackathon 2024',
    body:
      "Registration closes this Friday! Don't miss out on the biggest tech event of the year. Teams from all over Ethiopia will be competing.",
    tags: ['Events', 'Engineering'],
    likes: 85,
    comments: 24,
  },
];

export default function ForumScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return POSTS;
    return POSTS.filter((p) => p.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase()));
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Forum</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
              <Ionicons name="notifications-outline" size={20} color="white" />
              <View style={styles.badgeDot} />
            </TouchableOpacity>
            <View style={styles.avatarSmall}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbvoA99lLN66ZPJjg9aBLomoQxQf3c1BZo434GfK9H8HAwhA0qTFALGWMIAeEUxdqF3WPe_GzuTr9SGQSYYb316VFUSHxMuDpgAsJ6N9CqWoTec66jBjP3sMypjzoDUxLeae62u6iUmdZQ26GMXSkUC5zPjkS4XpHlyy4X3vo4o7nVIckrnbbnOeFaFWElgFS5-gYKUHctPb3F4JoWdYix1tJi7HQQMwSmu2k01WCIQcnXHneVsSfpxQv8UUpjRW2Rj2QsUY92vyE' }}
                style={{ width: '100%', height: '100%' }}
              />
            </View>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={TEXT_MUTED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search topics, questions, or universities..."
            placeholderTextColor={TEXT_MUTED}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipRow}>
          {CATEGORIES.map((cat) => {
            const active = cat === selectedCategory;
            return (
              <TouchableOpacity
                key={cat}
                style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}
                onPress={() => setSelectedCategory(cat)}
                activeOpacity={0.9}
              >
                <Text style={[styles.chipText, active ? styles.chipTextActive : styles.chipTextInactive]}>{cat}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.composer}>
          <View style={styles.composerAvatar}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZoUy8hSAB92WjTO1TqI3adoaTRRKaGWLPFdH_rgACa9NjGpKsC8PSFMvESJEweWTAwxWwwYT4aG7jarJ8PGJXbL9eEFE8AuN8VM5Q7pS-ykl9pYym_WG779kKZXFbNMr3bXO18xQqwaCtks36u8APVEjy137lDwo1LnZzdJ2bj1KONxx5LyFlgqEduBGDzC19zgeUWU3N_VbairZocW9IxVMwbK8kiXJs-ofgsDdxqoMwTgzP5YaK1hq6f6ARkWGuXUwa4d25w-Y' }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              style={styles.composerInput}
              placeholder="What's on your mind? Ask a question..."
              placeholderTextColor={TEXT_MUTED}
            />
            <View style={styles.composerFooter}>
              <View style={styles.composerActions}>
                <TouchableOpacity style={styles.composerIcon}>
                  <Ionicons name="image" size={18} color={TEXT_MUTED} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.composerIcon}>
                  <Ionicons name="pricetag" size={18} color={TEXT_MUTED} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.postButton} activeOpacity={0.9}>
                <Text style={styles.postButtonText}>Post</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.feed}>
          {filteredPosts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.postAvatar}>
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmjNHLVM87WVjPp_RRBDTYwKiQMvZt6sYeH26_TsiuhkdXhFqbEwKkum6MMQYKzYtJDc2wVBn3or6_-d5Pa_kRoHPfTD7MeO09QRbzZz3uyeZr_rdUV7ypMDnJd6oKlxUkuAo5pyNs0rHVnvTXok4tdnna5VBZ3x92T61ayiOTMBdK0YKlWaKBNmureSbw7CbLg27d7OeO60CU-Mcfcws8vBExL2_90RiHiyg1OTKOfCQ8B3gQK8FmBKv54ALAJEzNwzHZZYfuoRA' }}
                    style={{ width: '100%', height: '100%' }}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.postTitleRow}>
                    <Text style={styles.postName}>{post.name}</Text>
                    <Text style={styles.postTime}>{post.time}</Text>
                  </View>
                  <Text style={styles.postUniversity}>{post.university}</Text>
                </View>
              </View>

              <View style={styles.postBody}>
                <Text style={styles.postHeadline}>{post.title}</Text>
                <Text style={styles.postText}>{post.body}</Text>
                {post.image ? <Image source={{ uri: post.image }} style={styles.postImage} /> : null}
              </View>

              <View style={styles.tagRow}>
                {post.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>#{tag}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.postActions}>
                <View style={styles.actionItem}>
                  <Ionicons name="thumbs-up-outline" size={16} color={TEXT_MUTED} />
                  <Text style={styles.actionText}>{post.likes}</Text>
                </View>
                <View style={styles.actionItem}>
                  <Ionicons name="chatbubble-ellipses-outline" size={16} color={TEXT_MUTED} />
                  <Text style={styles.actionText}>{post.comments}</Text>
                </View>
                <View style={styles.actionItem}>
                  <Ionicons name="share-social-outline" size={16} color={TEXT_MUTED} />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpace} />
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
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9} onPress={() => { setConnectOpen(false); router.replace('/(tabs)/forum'); }}>
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
            <Ionicons name="git-network" size={22} color={PRIMARY} />
          </View>
          <Text style={[styles.bottomLabel, { color: PRIMARY }]}>Connect</Text>
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
          <View style={styles.iconWithDot}>
            <Ionicons name="chatbubble-ellipses-outline" size={22} color={TEXT_MUTED} />
            <View style={styles.badgeDotSmall} />
          </View>
          <Text style={styles.bottomLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); setConnectOpen(false); router.replace('/(tabs)/profile'); }}>
          <Ionicons name="person-outline" size={22} color={TEXT_MUTED} />
          <Text style={styles.bottomLabel}>Profile</Text>
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
    paddingBottom: 110,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
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
  badgeDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e11d48',
    borderWidth: 2,
    borderColor: SURFACE,
  },
  badgeDotSmall: {
    position: 'absolute',
    top: -4,
    right: -8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e11d48',
    borderWidth: 2,
    borderColor: SURFACE,
  },
  avatarSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: PRIMARY,
    borderWidth: 1,
    borderColor: BORDER,
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
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 14,
  },
  chipRow: {
    gap: 10,
    paddingRight: 12,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
  },
  chipInactive: {
    backgroundColor: SURFACE,
    borderColor: BORDER,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '800',
  },
  chipTextActive: {
    color: 'white',
  },
  chipTextInactive: {
    color: TEXT_MUTED,
  },
  composer: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: SURFACE,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },
  composerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#1f2937',
  },
  composerInput: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 6,
  },
  composerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: BORDER,
    paddingTop: 8,
    marginTop: 8,
  },
  composerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  composerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  postButton: {
    backgroundColor: PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  postButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 13,
  },
  feed: {
    gap: 12,
  },
  postCard: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: BORDER,
    gap: 10,
  },
  postHeader: {
    flexDirection: 'row',
    gap: 10,
  },
  postAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: '#334155',
  },
  postTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postName: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  postTime: {
    color: TEXT_MUTED,
    fontSize: 11,
  },
  postUniversity: {
    color: PRIMARY,
    fontSize: 12,
    fontWeight: '700',
  },
  postBody: {
    gap: 6,
  },
  postHeadline: {
    color: 'white',
    fontWeight: '900',
    fontSize: 15,
    lineHeight: 20,
  },
  postText: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
  },
  postImage: {
    marginTop: 6,
    width: '100%',
    height: 160,
    borderRadius: 12,
    backgroundColor: '#0f172a',
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    backgroundColor: '#1e293b',
  },
  tagText: {
    color: '#cbd5e1',
    fontSize: 11,
    fontWeight: '700',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: BORDER,
    paddingTop: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
  },
  bottomSpace: {
    height: 110,
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
