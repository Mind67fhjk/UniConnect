import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const SURFACE_ALT = '#161b26';
const BORDER = '#2a3441';
const TEXT_MUTED = '#94a3b8';
const BOTTOM_NAV_HEIGHT = 88;

const FILTERS = ['All Chats', 'Groups', 'Unread'] as const;

type FilterKey = typeof FILTERS[number];

type Chat = {
  id: string;
  name: string;
  subtitle: string;
  time: string;
  unread?: number;
  isGroup?: boolean;
  avatar?: string;
  gradient?: [string, string];
  status?: 'online' | 'offline';
};

const CHATS: Chat[] = [
  {
    id: '1',
    name: 'Abebe Kebede',
    subtitle: 'Can you send the PDF for the...',
    time: '2m ago',
    unread: 2,
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKhHMjXxJ2YGfTCxVMsFjQWGshq12PuC1yj62x6zxQi1DTUuQcw4SQQpi62VyCDMW13rC9sNEMokrEHis-rwSJn7Iis7GINZiOaZ70vcQSZn7Wzo34N1HNNL8gjQvW7bOpA8jS9lqsX4JHflUlEv8PHQnNP0w3aDn1rgmFLMkBao1XsVFtXzhYotXST5fCWqJ6OIFafQEkX9UK_D511RMeKIzMgWYudVf6YMC_w02xKYsMdvlarnzAnJA4O24J-gYyKWUcSxS9FU4',
    status: 'online',
  },
  {
    id: '2',
    name: 'Calculus Study Group',
    subtitle: 'Sara: The exam is next Tuesday right?',
    time: '1h ago',
    isGroup: true,
    gradient: ['#6366f1', '#a855f7'],
  },
  {
    id: '3',
    name: 'Hana Tefera',
    subtitle: 'Thanks for the help!',
    time: '3h ago',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA33V01rXhXTyhUAbpUzUyw5OWPMTbK93wrGV7Cz1jqC2TQ9ysfdeLhGrxaMkM6E08mbVhm_vLtopkCNZPCsgcTRw_NgNbuSkq8t7pWypAIzDYCDPOWRTK21587O1ceZK29f27VsZkM9ctblv0AazIgqYpHsMOF-kxu_cIiSNS5bW3H4_5fWUMaF2yO_S8DiR9lXj1DXoySKmV4wdJ6YnsUZyixlMQfULZ_fwx-ytd2EGYpKRxpIRGhQQLIcPv6Y_AIlUWZ3ZCJZkQ',
  },
  {
    id: '4',
    name: 'Dawit Solomon',
    subtitle: 'Project_Proposal_v2.docx',
    time: 'Yesterday',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6KKheUuIqxTId8RX7Ag3n5Z-_UCsoxtqVxtw51-PIyZgGw0kFQOTSEsU_L0UEdGA3PX6v3ZRfxxfMG5Jh15vXL_3FzZ16a9UoVgTcJF-iW3N4_QtBpS1iTJiTcdjFKJ3PAAh6BxhRHBXsnQtZWWFIXE_mphVqsQS5ccGNUqQMNiAxxfY5V85u0mh21NN1qKBqXYo1s_iBb0cqmM1rIjg3p0SIfqfmVvlL9B-veubuFXeeJ6PgXU0VZmBvk6PXGswSw44jGohHaTg',
    status: 'online',
  },
  {
    id: '5',
    name: 'Bethlehem Yared',
    subtitle: 'Are you going to the campus event?',
    time: 'Yesterday',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhZRqI68UGH10FOqj9-q-HwJ_9YSWv2wUT3vK-XeMN3My4D-2t9HQaLLuKr4g86WukOiXCRbVSBklg3hsNSeITj1txGkWr4f1DZjdPxHyv15oxw9d_sbxU0ljgsn4A0rgDMZBda5WJfV62TaBhnjLpK9woYhEFmaqYCvf_ACpehVG0Tsgvwp0JVL3mIKfSRswpex-kEjODy6Rp5XVyrYUnu1aV4e64ncvq0iMcbFCAsYh5tirvfsUurQqJw4n8hHV9_QvhyHlHj8s',
  },
];

export default function MessagesScreen() {
  const router = useRouter();
  const [filter, setFilter] = useState<FilterKey>('All Chats');
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const filteredChats = useMemo(() => {
    if (filter === 'Groups') return CHATS.filter((chat) => chat.isGroup);
    if (filter === 'Unread') return CHATS.filter((chat) => chat.unread && chat.unread > 0);
    return CHATS;
  }, [filter]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.avatarWrap}>
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZXgsqp4djlshEnLAF36Ub_ixr7PuGPeClQjEEU6t4lgoPJDgSlSLjdMoLSoqeEW9RbQ9ouw-WoRuQDUpcVxhgC1BWqAcJ4bG_DrTH_xPqDa28h_Va6O5feW4xLGzEUD2qt3grQZf1ByZZzQgnoNNJRoICSF1sCLcSiJbQUkSHmyP2epdGhbGViCkt_lYouD_r_7BAxRWEYhFp3jDVQ3AFu4eIqIUh_7ojOhRryMIn6eo-SXEx51BrmMAa9fxX7yFlZj-ygAC42qE' }}
                style={styles.avatarImg}
              />
              <View style={styles.statusDot} />
            </View>
            <Text style={styles.title}>Messages</Text>
          </View>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="pencil" size={18} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={TEXT_MUTED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search students or groups..."
            placeholderTextColor={TEXT_MUTED}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
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

        <View style={styles.list}>
          {filteredChats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              style={styles.chatRow}
              activeOpacity={0.9}
              onPress={() => {
                setMenuOpen(false);
                setConnectOpen(false);
                router.push({ pathname: '/(tabs)/messages/[id]', params: { id: chat.id } });
              }}
            >
              <View style={styles.chatAvatarWrap}>
                {chat.isGroup ? (
                  <View style={[styles.groupAvatar, { backgroundColor: chat.gradient ? chat.gradient[0] : PRIMARY }]}>
                    <Ionicons name="people" size={22} color="white" />
                  </View>
                ) : (
                  <View style={styles.chatAvatarFrame}>
                    <Image source={{ uri: chat.avatar }} style={styles.chatAvatarImg} />
                    {chat.status === 'online' ? <View style={styles.chatStatusDot} /> : null}
                  </View>
                )}
              </View>
              <View style={styles.chatTextWrap}>
                <View style={styles.chatRowTop}>
                  <Text style={styles.chatName} numberOfLines={1}>
                    {chat.name}
                  </Text>
                  <Text style={[styles.chatTime, chat.unread ? styles.chatTimeHighlight : null]}>{chat.time}</Text>
                </View>
                <View style={styles.chatRowBottom}>
                  <Text style={[styles.chatSubtitle, chat.unread ? styles.chatSubtitleHighlight : null]} numberOfLines={1}>
                    {chat.subtitle}
                  </Text>
                  {chat.unread ? (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>{chat.unread}</Text>
                    </View>
                  ) : null}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 120 }} />
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
          <Ionicons name="git-network-outline" size={22} color={TEXT_MUTED} />
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
            <Ionicons name="chatbubble-ellipses" size={22} color={PRIMARY} />
            <View style={styles.badgeDot} />
          </View>
          <Text style={[styles.bottomLabel, { color: PRIMARY }]}>Messages</Text>
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
    paddingBottom: 160,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    position: 'relative',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
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
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
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
  filterRow: {
    gap: 10,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
  },
  filterChipActive: {
    backgroundColor: PRIMARY,
    borderColor: PRIMARY,
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
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
  list: {
    backgroundColor: SURFACE,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: BORDER,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
    gap: 12,
  },
  chatAvatarWrap: {
    width: 52,
    alignItems: 'center',
  },
  chatAvatarFrame: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: SURFACE_ALT,
    borderWidth: 2,
    borderColor: SURFACE_ALT,
    position: 'relative',
  },
  chatAvatarImg: {
    width: '100%',
    height: '100%',
  },
  chatStatusDot: {
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
  groupAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
  },
  chatTextWrap: {
    flex: 1,
    gap: 4,
  },
  chatRowTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  chatName: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    flex: 1,
  },
  chatTime: {
    color: TEXT_MUTED,
    fontSize: 11,
    fontWeight: '700',
  },
  chatTimeHighlight: {
    color: PRIMARY,
  },
  chatRowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  chatSubtitle: {
    color: TEXT_MUTED,
    fontSize: 13,
    flex: 1,
  },
  chatSubtitleHighlight: {
    color: 'white',
  },
  unreadBadge: {
    minWidth: 22,
    paddingHorizontal: 6,
    height: 22,
    borderRadius: 11,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 11,
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
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
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
    backgroundColor: '#e11d48',
    borderWidth: 2,
    borderColor: SURFACE,
  },
});
