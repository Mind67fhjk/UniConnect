import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const PRIMARY = '#137fec';
const BACKGROUND = '#101922';
const SURFACE = '#1c242e';
const SURFACE_ALT = '#1a202a';
const BORDER = '#2a3441';
const TEXT_MUTED = '#9ca3af';

const CATEGORIES = ['All', 'Computer Science', 'Engineering', 'Exam Prep', 'Biology'];

const GROUPS = [
  {
    id: '1',
    category: 'Computer Science',
    tag: 'CS 101',
    tagColor: '#0ea5e9',
    location: 'Addis Ababa U',
    title: 'Intro to Programming',
    description: 'Visual learners focusing on Python and Data Structures.',
    members: '5/8 Members',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgguEBDTKV-6eKOVYO_rk4R4P7ohFjxFeNIylGeseapZmiTPE6be3WNvw9VIrDoOqafg4-Hh65HUdFsMvHRyRy0nB3CarE4YACFXBegNusptzRR3AwYq1Rhs4yAL_LQsxTAHFn6F4aq9OjS28M6SSwGQZDZ6KM087mab9eenaD_EeFrvmAtIprgjmQh2Sze_I6k0kGAiGkuFoOiU77VBh-Xff_sSbmvXREgBtTctAGceiNeURaicP3SmeOISqh57yFjwiIhJikW6w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDGWjp3sYa5-MnZoYbBWekRUh1xc3REdvBwmQKglFDJKLioTo-K2krUuTLVLYpn4ej7JGSu_43qb1Zasio_IHxC4ld2WAAZmJy5mufO7kuBhHGjCk5-YXuWRwzkzX815PaMdIW1tFiarcDajj-vWZ8YsLxrXJi4ZHvW6lf8y_nQHJS15W8JyYEKX2QhJh2L0O012FGqIXA-Avzs3b8P3bPi062BLrmQ2vpFeDqdNi525TTF-y62VH73cR97UGg9o-lwi4xV-_cFog4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDu8asgGbHTuE7LQJYgH4am7oHJtgBYyTTQIrAXGeQ5PQQQfoCX7WiVFCI51ARc2-BxyyJzVNQKyRK6y1Vuej3jtI1rq-W7Y7XSw88-97hQ_XWIWvhbZ9yT4yIrIBc8gfZQQuDTV6PzrTngydfv0vNdtNgwstaVIuacGlES6cexRgNEY2s9m-g-l33O9IYfHjjNwAp5icX254fdPrlPbO7LWXoat3jP1WPJP3BUhYfboJJ--O61GBxKNSLopPXLcWtDzt2GLuqzXMQ',
    ],
    extraCount: 2,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDPg5iLC55zndoCGdgxFfKvX9-ztNEFPtnmsy_qDFUIw6QpN56hVahLyseR-elslueVKzFU7tdkhYgAgoZdbGkZkhwbdxSGg9pHOnOt9uie9oC5qK7xsUuGv_KoFOKyRvRczWRmXJ8zJ56sXcgnhMEhxva4Nzeve6U1YQif5iDJV_0nb_hvm9WD22TztrQPoe-gSgPnEeyZDt9x_1PP5labqyIkoQKsd6UlZNlZTY6GKbM6BwFpi3d7CIxeQjEWRsv7GNLsqjT3Yfw',
  },
  {
    id: '2',
    category: 'Exam Prep',
    tag: 'Exam Prep',
    tagColor: '#f97316',
    location: 'Bahir Dar U',
    title: 'Civil Eng. Finals',
    description: 'Intensive study sessions for structural analysis. Past paper review.',
    members: '2/6 Members',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBVsTx6mIEmWsYpjeNkSelDrdL7p_6DwOYxZF2V42vkAeXnnnE-NzeimCN08H8nL9TXzTc_psdtszruVXaxr62_m4vuitXeBVtolCrq76G08qyayF4V2xukjmPb5W9RSDMro093I-AmOEFqm-TNqsU-OIdgX7YnaHb7J4jtFuzJqb4iLvh9bp12q6yz2irQI2CHHZMxgK0526J_z-Lr8TSALsoMhFxTmCNdOj287EcALqoHtNxk6Bpb-wLgISEp5GZs_jK50CCgTY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Y3fTeuvABAx6RnTTVSVqCj_7nx916TvMm1Bz8Db65dFEDp7gXCXmPeH0fk7xpD7UgDGq2v462ptneonyHOSrNJtM1vPduUXtDkPxHpxQIb2zlwGwRArab41UwqlbJ_Ososp-9ukjlknKz4KSSjzPsM1p_eFZQA6B3pZzrdLRipjxm4Py3F3h-WIE8rrvE7LwLoX3d3W3T26labAzril8hIwPOyIYdtYIkqD8IWvCfVgyZGj9INkaMIba2lgvtAOPwejxpYEZpfc',
    ],
    extraCount: 0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDeERDLlreQghu2pk890QkvdNaM8xY0ZnILVwLASKSlSXoWfebtDAWKS-DTOKWhloz3SFxxJ0oByPcn3PD3oB9hIrO-ym8eccGCAuBojV_-E_At2yWgDFORw_aMLXYAdA6gtqfVLugb5yiSf0zZjpP6F-0mqDI0Ivn8T7BNlVFAhnDOlCDQPxcOM1I9vozhLHrOcAvrvh_UAz2dZvw0eos3fg106CzN-eOj4Ge04dJbZxZEqE8UCwOTtPLqtoHQpgAt6bvW_okK0ss',
  },
  {
    id: '3',
    category: 'Engineering',
    tag: 'Robotics',
    tagColor: '#a855f7',
    location: 'Adama Sci & Tech',
    title: 'Robotics Club',
    description: 'Building Arduino projects for the national competition.',
    members: '9/12 Members',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-rS0FXQ92gIEFRF_31Chz2H15vAQ-EFWjPcAaMfRCtiK9jmenZ0AnpSAIuxwWEI3jDDqTOWpXkkv7uyKn6qap8PPv285KpBEd46kAIZyEQoWhK0wsyxPhn11XKKwxqLahP2flRSVuxrUGR80fx-gtCBPDXdsSTUPZIBFypAzLzAh1tBdnSg_Fo-6aP6tg-G4_llj_r72tGHGnxE25hULu4B1DXx5VCChImZfiLEYYuV0APG8fy1JRX74vTt93f1sOaZQse8ytULY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8E0Kc_1adXplUJDX48bzxKwHO62xoIfMrm7-Mxync_ERQ8-UqoK8Iy36yniCaVCPiQ6y3i5e1qf4YxjU7RetmPjaFo14hF6PIZNDQnYLtQyz3PBWsGWo9f2bnQIrx0rP4XmAubkCB81yUCQRiNS0xRM_X4dvhPln1cEKlSBdotijuLaTqsuH1TGrSlX4s9uhN2OZfKDuJhBXOubTgJ-84pbnD3ATWetb29aDArW0KLYyB47YVqIBzM7V7uyaRO7DGW_GFvHvoBPY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_h5YHQ15Tzl2RhuFpXLekD7rxm42JbT1hpB7sk8nOdD5Dr3AxWkdnITcs86RkFoapA8WCop3J1-eOSgrCT0WvFidMKWMQDjzwC5o3pMwgCsC4pNUmrP9vENbJdd49qa9J3wBN9RTpeetcqMADfYIkW6QVb8bdfTEcWcW-2YFaIhGyyjTw0M--fD2GJsGlr0elrNxiKtgDWr8354Dno3BNM_NKcUP2H6FCJm4yIcQs73DwOV7uS7_VoHQLR4qCDjmTO5nZKB2nlFY',
    ],
    extraCount: 6,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBhPyFp3yUFDTBz3byMibmO8o6k4K4eYtgmCoF6421yyJFIX9AYInBZvQpoqH52fOrwUl9oA6XLWHh9ln9cKcbWjqyi1zvDVYK5Ydg8u_hAj6_5T_gYP5HQp4zMAStUrFUPw1jRcV-ms5B8TMtteqvM4BR-N_j1K3uDKigOfwNi6DzJuTqEsA4EzRFeDsFhkO03-M_dQF6aw2AA87Y20MlMhtOY6uVZLV_O0sQ4xcmpsTS_w-TwHBFfxqGFXyNr1FWzDn0Db6QAL-Q',
  },
  {
    id: '4',
    category: 'Biology',
    tag: 'Biology',
    tagColor: '#22c55e',
    location: 'Hawassa U',
    title: 'Med School Prep',
    description: 'Anatomy study group. We use flashcards and diagrams.',
    members: '1/5 Members',
    avatars: ['https://lh3.googleusercontent.com/aida-public/AB6AXuCh-BbhnXdIEZMkosZ8FFReF4yuimqH8hHQuSiXPc19CyoOezI6wZ3Chpwu81LC5AZi0wP3EKktDg1gBsjBBbNy7NWxRaoqWRiAs8EfLEnzEXI1BWzL1DpUSRHjXcn9zOEggk8zXDdgV3Q-v_MnRH6GciqlkEfDCxmZn1gp3_4n2JZD6Q7dscs6JCfGyELom1HKeBn_Ux_bm-GSqN6Qs-MO1ngBWvVepVh-eFRS2Saa7lvHGQRYfnxCfaRWm_ardjQw4A1Dc7EpGBc'],
    extraCount: 0,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ4LeuUMvvv1aFN6o-6E6Es9CaHpV4UKd6bsp4jnAIHOTIAHuEBXU7O4Koji_qxpPct4nICyELyXLM2-vqZA_Fp-8zc-hI4ucxmRJe9X4wa5QJc82f-V-mhffzJ9PhI8K57NtNtWsFUsIlq21Hnwj0cFKnM3qHywyoSs1PMOQZDqzWcWF6mO_LOBbymkYi9yZiC-WGL_h1ln9rJddpxIp06Wc_nU00wUQYnFiBFFIHbNe_sY2ZbNEUUi9wGWRKdpRBedrje5NFsc0',
  },
];

export default function GroupsScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const filteredGroups = useMemo(() => {
    if (selectedCategory === 'All') return GROUPS;
    return GROUPS.filter((group) => group.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Find Groups</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
              <Ionicons name="notifications-outline" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, styles.iconButtonAlt]} activeOpacity={0.85}>
              <Ionicons name="filter" size={18} color={PRIMARY} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color={TEXT_MUTED} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by course code, topic..."
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
                activeOpacity={0.9}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[styles.chipText, active ? styles.chipTextActive : styles.chipTextInactive]}>{cat}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.list}>
          {filteredGroups.map((group) => (
            <View key={group.id} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={{ flex: 1, gap: 6 }}>
                  <View style={styles.metaRow}>
                    <View style={[styles.tag, { backgroundColor: `${group.tagColor}22` }]}>
                      <Text style={[styles.tagText, { color: group.tagColor }]}>{group.tag.toUpperCase()}</Text>
                    </View>
                    <View style={styles.locationRow}>
                      <Ionicons name="location" size={12} color={TEXT_MUTED} />
                      <Text style={styles.locationText}>{group.location}</Text>
                    </View>
                  </View>
                  <Text style={styles.cardTitle}>{group.title}</Text>
                  <Text style={styles.cardDesc}>{group.description}</Text>
                  <View style={styles.memberRow}>
                    <View style={styles.avatarStack}>
                      {group.avatars.map((uri, idx) => (
                        <View key={uri} style={[styles.avatarWrap, { left: idx * 14 }]}> 
                          <Image source={{ uri }} style={styles.avatarImg} />
                        </View>
                      ))}
                      {group.extraCount > 0 ? (
                        <View style={[styles.avatarWrap, styles.avatarExtra, { left: group.avatars.length * 14 }]}>
                          <Text style={styles.avatarExtraText}>+{group.extraCount}</Text>
                        </View>
                      ) : null}
                    </View>
                    <Text style={styles.memberText}>{group.members}</Text>
                  </View>
                </View>
                <Image source={{ uri: group.image }} style={styles.cardImage} />
              </View>
              <TouchableOpacity style={styles.joinButton} activeOpacity={0.9}>
                <Text style={styles.joinButtonText}>Join Group</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
        <Ionicons name="add" size={26} color="white" />
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
          <Ionicons name="git-network" size={22} color={PRIMARY} />
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

        <TouchableOpacity style={styles.bottomItem} activeOpacity={0.9}>
          <Ionicons name="chatbubble-ellipses-outline" size={22} color={TEXT_MUTED} />
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
    paddingBottom: 40,
    gap: 14,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 22,
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
  },
  iconButtonAlt: {
    backgroundColor: PRIMARY + '22',
    borderColor: PRIMARY + '44',
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
    paddingHorizontal: 16,
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
    fontSize: 13,
    fontWeight: '800',
  },
  chipTextActive: {
    color: 'white',
  },
  chipTextInactive: {
    color: TEXT_MUTED,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
  },
  cardTop: {
    flexDirection: 'row',
    gap: 12,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  cardDesc: {
    color: TEXT_MUTED,
    fontSize: 13,
    lineHeight: 18,
  },
  memberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 6,
  },
  avatarStack: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  avatarWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: SURFACE,
    position: 'absolute',
    backgroundColor: SURFACE_ALT,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  avatarExtra: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarExtraText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 11,
  },
  memberText: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 6,
  },
  cardImage: {
    width: 92,
    height: 92,
    borderRadius: 12,
    backgroundColor: SURFACE_ALT,
  },
  joinButton: {
    height: 44,
    borderRadius: 12,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.3,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
  },
  joinButtonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    right: 18,
    bottom: 110,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PRIMARY,
    shadowOpacity: 0.35,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
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
});
