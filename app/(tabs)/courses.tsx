import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
    Image,
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
const TEXT_MUTED = '#9dabb9';
const BADGE = '#e11d48';
const BOTTOM_NAV_HEIGHT = 88;

const SEGMENTS = ['Discussion', 'Lecture Notes', 'Past Papers'] as const;
const FILTERS = ['Latest', 'Top', 'Unanswered', 'My Posts'] as const;

type SegmentKey = typeof SEGMENTS[number];
type FilterKey = typeof FILTERS[number];

type Post = {
  id: string;
  tag: 'Announcement' | 'Question' | 'Resource' | 'Note';
  title: string;
  text: string;
  author: string;
  time: string;
  likes?: number;
  comments?: number;
  pinned?: boolean;
  avatar?: string;
  initials?: string;
  preview?: { title: string; source: string; image: string };
  file?: { name: string; meta: string };
};

const PINNED: Post = {
  id: 'pinned-1',
  tag: 'Announcement',
  title: 'Mid-term Exam Syllabus Update',
  text: 'Please review the attached syllabus for the upcoming mid-term. Changes include the removal of Heapsort from the core requirements.',
  author: 'Prof. Abebe',
  time: '2h ago',
  pinned: true,
  avatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC9exi1Z9G_3WQap1YOzZUtvOM2opCj6HerOsC8XcnDGHqhXkZ4opFFYNGrck-DRptz5QJ9EXYdzoOG_GdKkWgQWICd76jkktht_NlmSd0oqooDBoRIeJUK-UbqafsrRcWm16G1l__wkK3zCvkkhC0ecGKb6uaSMbQ0K-_m-IlFhBodBu6WcNq3DJI6-WEJa6EEfcTvUTNiRa5MCIjIEOL984PR3lqQcME6ARnSeKNJDdapPYc161wxfFNjfjelBr_TlDyLdmjGUx0',
};

const POSTS: Post[] = [
  {
    id: '1',
    tag: 'Question',
    title: 'Can someone explain Big O notation simply?',
    text: "I'm really struggling with the concept of worst-case complexity vs average case. Does anyone have a good analogy?",
    author: 'John Doe',
    time: '15m ago',
    likes: 12,
    comments: 5,
    initials: 'JD',
  },
  {
    id: '2',
    tag: 'Resource',
    title: 'Found this great YouTube playlist for Week 3 Graph Theory',
    text: 'The visualizations really helped me understand BFS vs DFS traversal logic.',
    author: 'Sarah M.',
    time: '1h ago',
    likes: 45,
    comments: 8,
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjdU7q_yRrado1Wk1uiN-12e76Pmmah0bhnGBnyVoIKrYZSwKL_sUStqkqUgh8mIWlcdeUD4WqpqlxwSzMw6ihJjaoVq26cOHfvnpGvT4PFFE8NrqLFiLR8NhubOshQ0iaYOhSvln7SiVvG-J8wBrqPGhQNu-g4DJJ9c7IzMV6QePhRLaZ_FKFRIth6iarTDF55ybT1hzP2GqVD1JJ7jCUx_fCXKMZ6sMMayhIF-Qp4tMcqT20JSaEYYGQS0J0H09i1O9OweilcW8',
    preview: {
      title: 'Graph Theory Visualized',
      source: 'youtube.com',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCNwxD9Nfgy2hOBezX-_25aP5W7MmZLvaXSnKeixqaLi97agHKalQuSQbAwS3BPsFZ-NwX3aSe0qOptbqSZYj0xFiRMVm8ogQf98LLHFnrAPr2gCrX_nnaL9eMDdDjImUkxXYtvKQ_I-jmgurZiY-Jiou-ys27rcIXdQTaGrqKRR4tHBaYohFrSqqYIbUYknYIo7UvuD42waiuvsOq9ettZUlCp8Tf3YHzcm-J3aoq2MU6f557k7mkqEh-VAYSThZvDv_O3J4BTE1A',
    },
  },
  {
    id: '3',
    tag: 'Question',
    title: 'Homework 2, Problem 4 clarification',
    text: 'Is the input array sorted or unsorted? The prompt is ambiguous.',
    author: 'Mikael K.',
    time: '3h ago',
    likes: 2,
    comments: 1,
    initials: 'MK',
  },
  {
    id: '4',
    tag: 'Note',
    title: 'Week 1: Introduction.pdf',
    text: '',
    author: 'TA Uploads',
    time: '2 days ago',
    file: { name: 'Week 1: Introduction.pdf', meta: '2.4 MB • Uploaded 2 days ago' },
    likes: 0,
    comments: 0,
  },
];

export default function CoursesScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [segment, setSegment] = useState<SegmentKey>('Discussion');
  const [filter, setFilter] = useState<FilterKey>('Latest');

  const feed = useMemo(() => {
    // Placeholder: filter/segment could alter data; currently returns all.
    return POSTS;
  }, [segment, filter]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.topIcon}
            activeOpacity={0.85}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <View style={{ flex: 1, paddingHorizontal: 12 }}>
            <Text style={styles.courseTitle}>CS101: Intro to Algorithms</Text>
            <Text style={styles.courseMeta}>Dr. Abebe • 124 Students</Text>
          </View>
          <TouchableOpacity style={styles.topIcon} activeOpacity={0.85}>
            <Ionicons name="search" size={18} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.segmentRow}>
          {SEGMENTS.map((tab) => {
            const active = segment === tab;
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.segmentChip, active ? styles.segmentActive : styles.segmentInactive]}
                onPress={() => setSegment(tab)}
                activeOpacity={0.9}
              >
                <Text style={[styles.segmentText, active ? styles.segmentTextActive : styles.segmentTextInactive]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterRow}
        >
          {FILTERS.map((item) => {
            const active = filter === item;
            return (
              <TouchableOpacity
                key={item}
                style={[styles.filterChip, active ? styles.filterChipActive : styles.filterChipInactive]}
                onPress={() => setFilter(item)}
                activeOpacity={0.9}
              >
                <Text style={[styles.filterText, active ? styles.filterTextActive : styles.filterTextInactive]}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <PostCard post={PINNED} />
        {feed.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        <View style={{ height: BOTTOM_NAV_HEIGHT + 120 }} />
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

function PostCard({ post }: { post: Post }) {
  const badgeStyle = useMemo(() => {
    switch (post.tag) {
      case 'Announcement':
        return { bg: '#0b1220', text: PRIMARY };
      case 'Question':
        return { bg: 'rgba(22,163,74,0.16)', text: '#22c55e' };
      case 'Resource':
        return { bg: 'rgba(37,99,235,0.16)', text: '#60a5fa' };
      case 'Note':
        return { bg: 'rgba(239,68,68,0.12)', text: '#f97316' };
      default:
        return { bg: SURFACE_ALT, text: TEXT_MUTED };
    }
  }, [post.tag]);

  return (
    <View style={[styles.card, post.pinned ? styles.cardPinned : null]}>
      <View style={styles.cardHeader}>
        <View style={styles.cardAvatarWrap}>
          {post.avatar ? (
            <Image source={{ uri: post.avatar }} style={styles.cardAvatarImg} />
          ) : (
            <View style={styles.cardAvatarFallback}>
              <Text style={styles.cardAvatarInitials}>{post.initials ?? 'CS'}</Text>
            </View>
          )}
          {post.tag === 'Announcement' ? (
            <View style={styles.cardAvatarBadge}>
              <Ionicons name="school" size={12} color="white" />
            </View>
          ) : null}
        </View>
        <View style={styles.cardTitleWrap}>
          <View style={styles.tagRow}>
            <View style={[styles.tagChip, { backgroundColor: badgeStyle.bg }]}> 
              <Text style={[styles.tagText, { color: badgeStyle.text }]}>{post.tag}</Text>
            </View>
            {post.pinned ? <Ionicons name="pin" size={16} color={PRIMARY} style={{ transform: [{ rotate: '45deg' }] }} /> : null}
          </View>
          <Text style={styles.postTitle}>{post.title}</Text>
          {post.text ? <Text style={styles.postText}>{post.text}</Text> : null}
        </View>
      </View>

      {post.preview ? (
        <View style={styles.previewCard}>
          <View style={[styles.previewThumb, { backgroundColor: SURFACE_ALT }]}> 
            <Image source={{ uri: post.preview.image }} style={styles.previewThumb} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.previewTitle} numberOfLines={1}>
              {post.preview.title}
            </Text>
            <Text style={styles.previewMeta} numberOfLines={1}>
              {post.preview.source}
            </Text>
          </View>
        </View>
      ) : null}

      {post.file ? (
        <View style={styles.fileRow}>
          <View style={styles.fileIcon}>
            <Ionicons name="document-text" size={18} color="#ef4444" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.fileTitle}>{post.file.name}</Text>
            <Text style={styles.fileMeta}>{post.file.meta}</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton} activeOpacity={0.85}>
            <Ionicons name="download" size={18} color={PRIMARY} />
          </TouchableOpacity>
        </View>
      ) : null}

      <View style={styles.cardFooter}>
        <View style={styles.authorRow}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.time}>{post.time}</Text>
        </View>
        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <Ionicons name="thumbs-up" size={14} color={TEXT_MUTED} />
            <Text style={styles.metaText}>{post.likes ?? 0}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="chatbubble-ellipses" size={14} color={TEXT_MUTED} />
            <Text style={styles.metaText}>{post.comments ?? 0}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  content: {
    padding: 16,
    gap: 12,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  courseTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  courseMeta: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
  segmentRow: {
    flexDirection: 'row',
    backgroundColor: SURFACE,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 4,
    gap: 6,
  },
  segmentChip: {
    flex: 1,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: SURFACE_ALT,
    borderWidth: 1,
    borderColor: BORDER,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  segmentInactive: {
    backgroundColor: 'transparent',
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '800',
  },
  segmentTextActive: {
    color: 'white',
  },
  segmentTextInactive: {
    color: TEXT_MUTED,
  },
  filterRow: {
    gap: 10,
    paddingVertical: 4,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    borderWidth: 1,
  },
  filterChipActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
  },
  filterChipInactive: {
    backgroundColor: SURFACE,
    borderColor: BORDER,
  },
  filterText: {
    fontSize: 13,
    fontWeight: '800',
  },
  filterTextActive: {
    color: 'white',
  },
  filterTextInactive: {
    color: TEXT_MUTED,
  },
  card: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 14,
    gap: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 6 },
  },
  cardPinned: {
    backgroundColor: '#0f1923',
    borderColor: PRIMARY,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 12,
  },
  cardAvatarWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: SURFACE_ALT,
    position: 'relative',
  },
  cardAvatarImg: {
    width: '100%',
    height: '100%',
  },
  cardAvatarFallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2937',
  },
  cardAvatarInitials: {
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
  cardAvatarBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: SURFACE,
  },
  cardTitleWrap: {
    flex: 1,
    gap: 4,
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tagChip: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  postTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 22,
  },
  postText: {
    color: TEXT_MUTED,
    fontSize: 13,
    lineHeight: 19,
  },
  previewCard: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: SURFACE_ALT,
  },
  previewThumb: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  previewTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 13,
  },
  previewMeta: {
    color: TEXT_MUTED,
    fontSize: 11,
  },
  fileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: SURFACE_ALT,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 12,
  },
  fileIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#2d1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '800',
  },
  fileMeta: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  downloadButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  author: {
    color: '#e5e7eb',
    fontWeight: '700',
    fontSize: 12,
  },
  dot: {
    color: TEXT_MUTED,
  },
  time: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
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
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
  },
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
  iconWithDot: {
    position: 'relative',
  },
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
