import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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
const BORDER = '#2a3441';
const TEXT_MUTED = '#94a3b8';
const BADGE = '#e11d48';

const QUICK_ACTIONS = [
  { label: 'New Post', icon: 'pencil', emphasis: 'primary' },
  { label: 'Create Group', icon: 'person-add-outline' },
  { label: 'Upload File', icon: 'cloud-upload-outline' },
  { label: 'Add Event', icon: 'calendar-outline' },
];

const COURSES = [
  { title: 'Calculus II', progress: 75, icon: 'calculator-outline', tint: '#f97316' },
  { title: 'Software Engineering', progress: 45, icon: 'code-slash-outline', tint: '#3b82f6' },
  { title: 'Intro to Economics', progress: 90, icon: 'trending-up-outline', tint: '#22c55e' },
];

const DISCUSSIONS = [
  {
    course: 'Intro to Economics',
    title: 'Week 4 Homework help',
    time: '1h ago',
    replies: '3 New replies',
    accent: '#22c55e',
  },
  {
    course: 'Software Engineering',
    title: 'Project partners needed for Final',
    time: '3h ago',
    replies: '12 Replies',
    accent: '#3b82f6',
  },
];

export default function DashboardScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.avatarRow}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlCD6MVMJ8lFDqmjf3drIEVo9g3_sNGiPcA2Mp1eIYFsblVRuY31XQaiLwUI6wpwOUB-hAydbUuTfRRPHEzM_k1XNEKvqNUWiRPYmLr-bfpsPi2LWoyI93_KFvHztKnqykeeZTrSbVipaMWj423RxZNPcPoRTlanvp02Cg296fuKYUM3JwGP5nqNQH6hOPFkkUWIoh0_F3-UeewWOxdaWeb0y-gI5yK7e2Iz5KBDRjFDIrfFKKxOKQgq_S_50MmsDQlQ2r8nCsYBw',
              }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.greetingMuted}>Good Morning,</Text>
              <Text style={styles.greetingName}>Abebe</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="notifications-outline" size={22} color="white" />
            <View style={styles.badge} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={TEXT_MUTED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search courses, people, or papers..."
            placeholderTextColor={TEXT_MUTED}
          />
        </View>

        <View style={styles.quickRow}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity key={action.label} style={styles.quickItem} activeOpacity={0.9}>
              <View
                style={[
                  styles.quickIcon,
                  action.emphasis === 'primary' ? styles.quickIconPrimary : styles.quickIconMuted,
                ]}
              >
                <Ionicons
                  name={action.icon as React.ComponentProps<typeof Ionicons>['name']}
                  size={22}
                  color={action.emphasis === 'primary' ? 'white' : PRIMARY}
                />
              </View>
              <Text style={styles.quickLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Courses</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.link}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.courseRow}>
          {COURSES.map((course) => (
            <View key={course.title} style={styles.courseCard}>
              <View style={[styles.courseIcon, { backgroundColor: `${course.tint}22` }]}>
                <Ionicons
                  name={course.icon as React.ComponentProps<typeof Ionicons>['name']}
                  size={18}
                  color={course.tint}
                />
              </View>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${course.progress}%`, backgroundColor: course.tint }]} />
              </View>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Upcoming Study Group</Text>
        <View style={styles.studyCard}>
          <View style={styles.studyHeader}>
            <View style={styles.studyIcon}>
              <Ionicons name="people" size={18} color={PRIMARY} />
            </View>
            <View style={styles.studyText}>
              <Text style={styles.studyTitle}>Calculus II Prep</Text>
              <View style={styles.studyMetaRow}>
                <Ionicons name="time-outline" size={14} color={TEXT_MUTED} />
                <Text style={styles.studyMeta}>4:00 PM Today</Text>
              </View>
            </View>
          </View>
          <View style={styles.studyActions}>
            <TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
              <Ionicons name="videocam" size={16} color="white" />
              <Text style={styles.primaryButtonText}>Join Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineButton} activeOpacity={0.9}>
              <Text style={styles.outlineButtonText}>Agenda</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Discussions</Text>
        <View style={styles.discussionList}>
          {DISCUSSIONS.map((item) => (
            <View key={item.title} style={styles.discussionCard}>
              <View style={styles.discussionTop}>
                <Text style={[styles.discussionCourse, { color: item.accent }]}>{item.course.toUpperCase()}</Text>
                <Text style={styles.discussionTime}>{item.time}</Text>
              </View>
              <Text style={styles.discussionTitle}>{item.title}</Text>
              <View style={styles.discussionMetaRow}>
                <Ionicons name="chatbubble-ellipses-outline" size={14} color={TEXT_MUTED} />
                <Text style={styles.discussionMeta}>{item.replies}</Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Research Overview</Text>
        <View style={styles.researchCard}>
          <View style={styles.researchHeader}>
            <View style={styles.researchIcon}>
              <Ionicons name="flask" size={18} color="#a855f7" />
            </View>
            <View>
              <Text style={styles.researchTitle}>Renewable Energy in Addis</Text>
              <Text style={styles.researchStatus}>Status: Data Collection</Text>
            </View>
          </View>
          <View style={styles.progressTrackTall}>
            <View style={[styles.progressFillTall, { width: '45%' }]} />
          </View>
          <Text style={styles.progressLabel}>45% Complete</Text>
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

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); router.replace('/(tabs)'); }}>
          <Ionicons name="home-outline" size={22} color={PRIMARY} />
          <Text style={[styles.bottomLabel, { color: PRIMARY }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9}>
          <View style={styles.iconWithDot}>
            <Ionicons name="git-network-outline" size={22} color={TEXT_MUTED} />
            <View style={styles.badgeDot} />
          </View>
          <Text style={styles.bottomLabel}>Connect</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} activeOpacity={0.9} onPress={() => setMenuOpen((v) => !v)}>
          <Ionicons name="menu" size={22} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9}>
          <View style={styles.iconWithDot}>
            <Ionicons name="chatbubble-ellipses-outline" size={22} color={TEXT_MUTED} />
            <View style={styles.badgeDot} />
          </View>
          <Text style={styles.bottomLabel}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9} onPress={() => { setMenuOpen(false); router.replace('/(tabs)/profile'); }}>
          <Ionicons name="person" size={22} color={TEXT_MUTED} />
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
    paddingBottom: 40,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: PRIMARY,
  },
  greetingMuted: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '600',
  },
  greetingName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 10,
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 14,
    height: 52,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 15,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickItem: {
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  quickIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  quickIconPrimary: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
    shadowColor: PRIMARY,
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
  quickIconMuted: {
    backgroundColor: SURFACE,
  },
  quickLabel: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  link: {
    color: PRIMARY,
    fontWeight: '700',
  },
  courseRow: {
    gap: 12,
    paddingVertical: 6,
  },
  courseCard: {
    width: 160,
    backgroundColor: SURFACE,
    borderRadius: 18,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: BORDER,
  },
  courseIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  progressTrack: {
    height: 6,
    borderRadius: 6,
    backgroundColor: '#1f2933',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 6,
  },
  studyCard: {
    backgroundColor: SURFACE,
    borderRadius: 20,
    padding: 16,
    gap: 14,
    borderWidth: 1,
    borderColor: BORDER,
  },
  studyHeader: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  studyIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#137fec22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  studyText: {
    flex: 1,
  },
  studyTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
  studyMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  studyMeta: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  studyActions: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    backgroundColor: PRIMARY,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '800',
  },
  outlineButton: {
    height: 48,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
  },
  outlineButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  discussionList: {
    gap: 12,
  },
  discussionCard: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    padding: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: BORDER,
  },
  discussionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discussionCourse: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },
  discussionTime: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  discussionTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  discussionMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  discussionMeta: {
    color: TEXT_MUTED,
    fontSize: 13,
  },
  researchCard: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: BORDER,
  },
  researchHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  researchIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#a855f722',
    alignItems: 'center',
    justifyContent: 'center',
  },
  researchTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 15,
  },
  researchStatus: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  progressTrackTall: {
    height: 8,
    borderRadius: 6,
    backgroundColor: '#1f2933',
    overflow: 'hidden',
  },
  progressFillTall: {
    height: '100%',
    borderRadius: 6,
    backgroundColor: '#7c3aed',
  },
  progressLabel: {
    color: PRIMARY,
    fontWeight: '700',
    textAlign: 'right',
    fontSize: 12,
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
