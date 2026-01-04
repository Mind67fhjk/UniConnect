import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const SURFACE_ALT = '#161b26';
const BORDER = '#2a3441';
const TEXT_MUTED = '#94a3b8';

const THREAD = [
  { id: 't1', sender: 'other', text: "Hey, did you finish the assignment for the Calculus class? I'm stuck on problem 4.", time: '10:42 AM' },
  { id: 't2', sender: 'me', text: "Almost, I'm just adding the references now. Problem 4 was tricky!", time: '10:43 AM' },
  {
    id: 't3',
    sender: 'me',
    text: 'Here is what I have so far.',
    time: '10:44 AM',
    attachment: { title: 'Calculus_Final.pdf', meta: '2.4 MB • PDF' },
  },
  { id: 't4', sender: 'other', text: "You're a lifesaver! Thanks! 🙏", time: '10:45 AM' },
];

export default function MessageThreadScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const user = useMemo(() => {
    if (id === '2') {
      return { name: 'Calculus Study Group', avatar: undefined, gradient: ['#6366f1', '#a855f7'], status: 'Group' };
    }
    return {
      name: 'Abebe Kebede',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuApwXIzTi3hneJogr12hntX6iwbw8hi1FFiHkRCkZBFUO_V88wJ5R1BSaxmpwC5sWUsBzi47mbaTvgS9XqWdOzWTOHYCxvThVxof4utS2ZNMgipOWa9h1NLwL1VbGFyF1EOyXnwQn0T52kCnUmV9uu-jAMH67mFzyuXN75id4trtK0ZtopEXz99_TgsMupsVkiwu5nYMS6ekFwvOhIvI7eGYFNTb_e8czeHwMfoXjUpV1MmPsmKZd_sVXNgesqMF3NEUi3oHZioVF0',
      status: 'Online',
    };
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={styles.headerIcon}
            activeOpacity={0.85}
            onPress={() => {
              setMenuOpen(false);
              setConnectOpen(false);
              router.back();
            }}
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <View style={styles.threadUser}>
            <View style={styles.threadAvatar}>
              {user.avatar ? (
                <Image source={{ uri: user.avatar }} style={styles.threadAvatarImg} />
              ) : (
                <View
                  style={[styles.groupAvatar, { backgroundColor: user.gradient ? user.gradient[0] : PRIMARY }]}
                >
                  <Ionicons name="people" size={20} color="white" />
                </View>
              )}
              <View style={styles.threadStatus} />
            </View>
            <View>
              <Text style={styles.threadName}>{user.name}</Text>
              <Text style={styles.threadStatusText}>{user.status}</Text>
            </View>
          </View>
        </View>
        <View style={styles.threadActions}>
          <TouchableOpacity style={styles.threadIcon} activeOpacity={0.85}>
            <Ionicons name="videocam" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.threadIcon} activeOpacity={0.85}>
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.dayBadge}>
          <Text style={styles.dayBadgeText}>Today</Text>
        </View>
        {THREAD.map((item) => {
          const fromMe = item.sender === 'me';
          return (
            <View key={item.id} style={[styles.bubbleWrap, fromMe ? styles.bubbleWrapMe : styles.bubbleWrapThem]}>
              <View style={[styles.bubble, fromMe ? styles.bubbleMe : styles.bubbleThem]}>
                {item.attachment ? (
                  <View style={styles.attachment}>
                    <View style={styles.attachmentIcon}>
                      <Ionicons name="document" size={18} color="#ef4444" />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.attachmentTitle}>{item.attachment.title}</Text>
                      <Text style={styles.attachmentMeta}>{item.attachment.meta}</Text>
                    </View>
                  </View>
                ) : null}
                <Text style={[styles.bubbleText, item.attachment ? styles.bubbleTextSecondary : null]}>{item.text}</Text>
              </View>
              <View style={styles.bubbleMeta}>
                <Text style={styles.timeText}>{item.time}</Text>
                {fromMe ? <Ionicons name="checkmark-done" size={14} color={PRIMARY} /> : null}
              </View>
            </View>
          );
        })}
        <View style={{ height: 100 }} />
      </ScrollView>

      <View style={styles.inputBar}>
        <TouchableOpacity style={styles.addButton} activeOpacity={0.85}>
          <Ionicons name="add" size={20} color={TEXT_MUTED} />
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.messageInput}
            placeholder="Type a message..."
            placeholderTextColor={TEXT_MUTED}
          />
          <TouchableOpacity style={styles.smiley} activeOpacity={0.85}>
            <Ionicons name="happy-outline" size={18} color={TEXT_MUTED} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sendButton} activeOpacity={0.9}>
          <Ionicons name="paper-plane" size={18} color="white" />
        </TouchableOpacity>
      </View>

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
    paddingBottom: 36,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  threadUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  threadAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: SURFACE_ALT,
  },
  groupAvatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  threadAvatarImg: {
    width: '100%',
    height: '100%',
  },
  threadStatus: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
    borderWidth: 2,
    borderColor: SURFACE,
  },
  threadName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
  threadStatusText: {
    color: '#22c55e',
    fontSize: 12,
    fontWeight: '700',
  },
  threadActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  threadIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  dayBadge: {
    alignSelf: 'center',
    backgroundColor: SURFACE_ALT,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: BORDER,
  },
  dayBadgeText: {
    color: TEXT_MUTED,
    fontSize: 11,
    fontWeight: '700',
  },
  bubbleWrap: {
    maxWidth: '86%',
    gap: 4,
  },
  bubbleWrapMe: {
    alignSelf: 'flex-end',
  },
  bubbleWrapThem: {
    alignSelf: 'flex-start',
  },
  bubble: {
    padding: 12,
    borderRadius: 16,
  },
  bubbleMe: {
    backgroundColor: PRIMARY,
    borderTopRightRadius: 6,
  },
  bubbleThem: {
    backgroundColor: SURFACE_ALT,
    borderTopLeftRadius: 6,
  },
  bubbleText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 19,
  },
  bubbleTextSecondary: {
    marginTop: 8,
  },
  bubbleMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  timeText: {
    color: TEXT_MUTED,
    fontSize: 10,
  },
  attachment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255,255,255,0.04)',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
  },
  attachmentIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachmentTitle: {
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
  attachmentMeta: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 12,
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: SURFACE_ALT,
    borderRadius: 24,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: BORDER,
    gap: 10,
    height: 46,
  },
  addButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  messageInput: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    paddingVertical: 0,
  },
  smiley: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: SURFACE,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    paddingBottom: 18,
    gap: 14,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
  },
  menuRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  menuItem: {
    width: '30%',
    minWidth: 110,
    padding: 12,
    borderRadius: 12,
    backgroundColor: SURFACE_ALT,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    gap: 10,
  },
  menuLabel: {
    color: 'white',
    fontWeight: '800',
    fontSize: 13,
    textAlign: 'center',
  },
});
