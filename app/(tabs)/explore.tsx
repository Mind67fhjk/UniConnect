import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
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
const CARD = '#1c2127';
const BORDER = '#2a3441';
const TEXT_MUTED = '#94a3b8';
const BADGE = '#e11d48';
const BOTTOM_NAV_HEIGHT = 88;

const HERO = {
  title: 'Tech Campus Launch',
  subtitle: "Discover Addis Ababa University's new innovation hub and student labs.",
  badge: 'Feature of the Week',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAkWzr3F73CxLAjb360DaiwAmTqysWYSKchwugan-F_H4ke-9xyNwrOgxEF3ncwPtHp-fRC8AXB3acm-AtelQSQ7hsWQuE5NC3EZ2Drd1sTssyuC38XF0FAPZv5eHTz9Okc-I9_X9zG29a548mM0jwvSATDV_BafRFaPKkWOkP3k8_SZf60Se6nkataP6b77-mDB2asvsDrfJlYhUUdcubd7ZwlmCD3Wv9QeZ4wxkHbu0RyCrnVJ2BddI3lmte_b0Bq58xjowNRvRY',
};

const DIRECTORY = [
  {
    title: 'Universities',
    description: 'Browse profiles of universities across Ethiopia.',
    cta: 'Browse',
    icon: 'school',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAa4XZFdJ7tSxRMzi2tdtt1hem90TR2_BMOkWkO1shsdBoPyyJbgjtnaQwV-7IXFsF2QGNPR2GjdBma75yDfNnZEl_AcufmgQh-Uj2M6DDTrw0ByNkleZJN2Gb20H0rLs8Wi-67lO2BtS8f16Fd5F5x5a_VRQFC3oVoPPzavuhFhDcLhTa7hEPg-yJ7j4VU5wwAlIc3MbBnVyUiDX5CFnqd7nxfyxHQaXMTy0WRxf3htgYPocrI4cyLtdDEdMFQ-grI1UfmOGhax5s',
  },
  {
    title: 'Interest Groups',
    description: 'Join clubs, student unions, and communities.',
    cta: 'Join',
    icon: 'people',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGDRJoGKh4La3Z3fskVffJK02qWJkqAxm1EY4ZUmt-Us9llDuG14KxJIpY-1SweNAA4v6DXLnd4hIOZQsnXcK2D8YNYELZfjFoPVCIiXLyLWNIxnHoATcJkXM39FFt-5U2a-vh_w9fvnrPEL-gaGKMGnzx2BkdUp6QvEQ_B2FyM1k-4dsIIiv5vADXyCsTxlfQqUwyVKlzs_7qPR2Z3I189yV8qN77L1LMjVaplRKhTs_pObGmAyphAWYuEIZ1GwtE55C8cCdBDJs',
  },
];

const OPPORTUNITIES = [
  {
    title: 'Jobs & Internships',
    description: 'Find your next career move or summer internship.',
    cta: 'Search',
    icon: 'briefcase',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGn03425kc8oWHuC9j2oOwZs4v4UdH03G11X15m75jKLjx1eigpG26ZFx47c7X1NrqmTclxewH7xhr0vn747ORx7yN3xSWvKyQDhPZz7Fn_-jpQZQxHU2PmwtfEd34y3FhWfLu5Q_hDfWI1eEJlrlto0Gh8gaMk5P3tDlP-9cn8zC11gH62qCNl9vbfN3jG2lwrMD4Ghr5n-E1eckhw_7IPbiYWeSGkiv6cmZL_hfgoa3EP_tFpQDJ5Ft3ELef79q5sFsuYd0hduo',
  },
  {
    title: 'Research Board',
    description: 'Collaborate on academic projects and papers.',
    cta: 'Explore',
    icon: 'flask',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8ihLeq-hS24X5wB7B-IHsdO3HOxiwHfXRobs-PXzr2V8OUssXshhphOirvPIwajdxl6HgCsHaj3CGmfe3qqTL3niYJTBdXaCSrEmIAxrjIfBPYWpNTuPm4APQS7Ta8A5CXiSATEKlQUQgYXWRh40InP_9_1TiRta5zZ13K8Q1GGAyC1pwpFR0gpCv-glKPZ077A7Y56P3P8C5JlJCj087W7x7rRtKpdUcy_N7lZW5yzEjqJWA-4DoGRhcwt1KUmHG_6Ac9iG1qs',
  },
];

const SOCIAL = [
  {
    title: 'Events Calendar',
    description: 'Workshops, seminars, and social gatherings nearby.',
    cta: 'View All',
    icon: 'calendar',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJlXFLXedIOr3zdJZNRSboBwm0IPJvS0bwUrgmtkNXc-qiiy5gU5Dy_pJKAlKEvxABPS2LC9WzNOJVL14J9oLH8uWahhzah46pHiLnKY9nzfWZGR3KVllgc5ScQjbWxURvrzO_VpkaxiTxnkO1ze3XxcwlWdScTvRH7fOTZCbSFoueizfPS3sswQWzxRvO6OWWsIe4vD3iJztgwtUpMb5kfE-NUCtJlTLP6uYymDEhZdHiiio_Y5metb9aG30dyCznMUTrt1mqxaQ',
  },
];

export default function ExploreScreen() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="search" size={18} color="white" />
          </TouchableOpacity>
          <Text style={styles.pageTitle}>Explore Hub</Text>
          <TouchableOpacity style={styles.avatarFrame} activeOpacity={0.85}>
            <Image
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrTRkvSXgWVSmjOW73R_GCNlm_JFqDGF4eGrPE_MD4UPHazCA4VVOCJNcsmJGUj4tNrKGSFVnAR7Rvj12Fon7QucdYYZ143nG86ngjdYswzfUgQdfmgUgSFViCtsP8yuptHzx1FMJj_X23dzefdPdrKb9AggpNv0f3K8puft68KB6GK6gd5htKb0-__Hboo3X7DYgl1hdHg2D-EBr4QJonjhYDusOSpfnH2-nUoMGeOC0wEcszkVvtKzKiuptW7at2QfPlUfTWEEc',
              }}
              style={styles.avatarImg}
            />
          </TouchableOpacity>
        </View>

        <ImageBackground source={{ uri: HERO.image }} style={styles.hero} imageStyle={styles.heroImage}>
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.heroBadge}>
              <Ionicons name="star" size={14} color="white" />
              <Text style={styles.heroBadgeText}>{HERO.badge}</Text>
            </View>
            <Text style={styles.heroTitle}>{HERO.title}</Text>
            <Text style={styles.heroSubtitle}>{HERO.subtitle}</Text>
            <TouchableOpacity style={styles.heroButton} activeOpacity={0.9}>
              <Text style={styles.heroButtonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Section title="Directory & Network">
          {DIRECTORY.map((card) => (
            <ExploreCard key={card.title} card={card} />
          ))}
        </Section>

        <Section title="Opportunities">
          {OPPORTUNITIES.map((card) => (
            <ExploreCard key={card.title} card={card} />
          ))}
        </Section>

        <Section title="Social">
          {SOCIAL.map((card) => (
            <ExploreCard key={card.title} card={card} />
          ))}
        </Section>

        <View style={{ height: BOTTOM_NAV_HEIGHT + 120 }} />
      </ScrollView>

      <TouchableOpacity style={styles.fab} activeOpacity={0.9}>
        <Ionicons name="pencil" size={22} color="white" />
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
            <TouchableOpacity style={styles.menuItem} activeOpacity={0.9}>
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

type Card = {
  title: string;
  description: string;
  cta: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  image: string;
};

function ExploreCard({ card }: { card: Card }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTextCol}>
        <View style={styles.cardTitleRow}>
          <Ionicons name={card.icon} size={18} color={PRIMARY} />
          <Text style={styles.cardTitle}>{card.title}</Text>
        </View>
        <Text style={styles.cardDescription}>{card.description}</Text>
        <TouchableOpacity style={styles.cardLink} activeOpacity={0.85}>
          <Text style={styles.cardLinkText}>{card.cta}</Text>
          <Ionicons name="arrow-forward" size={16} color={PRIMARY} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: card.image }} style={styles.cardImage} />
    </View>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionStack}>{children}</View>
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
    gap: 16,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    color: 'white',
    fontSize: 18,
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
  avatarFrame: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: SURFACE,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  hero: {
    height: 320,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    borderRadius: 16,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 18,
    gap: 10,
  },
  heroBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: `${PRIMARY}dd`,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  heroBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '800',
  },
  heroTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    color: '#d7e0ea',
    fontSize: 14,
    lineHeight: 20,
  },
  heroButton: {
    height: 42,
    backgroundColor: PRIMARY,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  heroButtonText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  sectionStack: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  cardTextCol: {
    flex: 1,
    gap: 10,
  },
  cardTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
  },
  cardDescription: {
    color: TEXT_MUTED,
    fontSize: 13,
    lineHeight: 18,
  },
  cardLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardLinkText: {
    color: PRIMARY,
    fontSize: 13,
    fontWeight: '800',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: SURFACE,
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
    left: 0,
    right: 0,
    bottom: BOTTOM_NAV_HEIGHT,
    backgroundColor: SURFACE,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 16,
    paddingBottom: 24,
    gap: 14,
    zIndex: 4,
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
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    gap: 8,
  },
  menuLabel: {
    color: 'white',
    fontWeight: '800',
    fontSize: 13,
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
