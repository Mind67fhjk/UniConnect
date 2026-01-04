import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
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
const TEXT_MUTED = '#94a3b8';

const SKILLS = ['Python', 'React Native', 'UI Design', 'Data Science', 'Football'];

export default function EditProfileScreen() {
  const router = useRouter();
  const [tab, setTab] = useState<'about' | 'academic' | 'connections'>('about');
  const [isPublic, setIsPublic] = useState(true);
  const [showGpa, setShowGpa] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const tabs = useMemo(
    () => [
      { key: 'about', label: 'About' },
      { key: 'academic', label: 'Academic' },
      { key: 'connections', label: 'Connections' },
    ],
    [],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85} onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={22} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
            <Ionicons name="create-outline" size={18} color={PRIMARY} />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.avatarWrap}>
            <ImageBackground
              source={{
                uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9OWKYlOo0tKe9-ifqlEmMfnS5wNaT6jjS801dtx7B0LySvmdr5dRRZCaRFZx5uzqlGovWzvpooYja_y6aTbRxO1S3vAgaWSSbPXxfdJsRR5TWgp0Gm2DV3FhekMQYWy-Z5K0howXyHo_OE9WH-loi5HlQHWNlQunNaptP6FsEZJq-djt_Z42Praa4zgtn-_A-Idx0DgIq9X9MLypAfq9fqvsvviKBTPR0noeoULoCqkvZEhRi74tti6iUzZ22dDuf1Cm4JTCeGUU',
              }}
              style={styles.avatar}
              imageStyle={styles.avatarImage}
            >
              <TouchableOpacity style={styles.cameraBadge} activeOpacity={0.85}>
                <Ionicons name="camera" size={16} color="white" />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <Text style={styles.name}>Abebe Bikila</Text>
          <Text style={styles.subtitle}>Computer Science • Year 3</Text>
          <View style={styles.universityPill}>
            <Ionicons name="school" size={14} color={PRIMARY} />
            <Text style={styles.universityText}>Addis Ababa University</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3.8</Text>
            <Text style={styles.statLabel}>GPA</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>UGR</Text>
            <Text style={styles.statLabel}>ID TYPE</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>142</Text>
            <Text style={styles.statLabel}>PEERS</Text>
          </View>
        </View>

        <View style={styles.tabsRow}>
          {tabs.map((item) => {
            const active = tab === item.key;
            return (
              <TouchableOpacity key={item.key} style={styles.tabButton} activeOpacity={0.8} onPress={() => setTab(item.key as typeof tab)}>
                <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{item.label}</Text>
                {active && <View style={styles.tabIndicator} />}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.link}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
            <View style={styles.fieldBlock}>
              <Text style={styles.fieldLabel}>Bio</Text>
              <TextInput
                style={[styles.input, styles.inputMultiline]}
                placeholder="Passionate CS student interested in AI and Web Development."
                placeholderTextColor={TEXT_MUTED}
                multiline
                numberOfLines={4}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.contactRow}>
              <View style={styles.iconPill}>
                <Ionicons name="mail" size={18} color={PRIMARY} />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Email</Text>
                <TextInput
                  style={styles.contactInput}
                  placeholder="abebe.bikila@aau.edu.et"
                  placeholderTextColor={TEXT_MUTED}
                  keyboardType="email-address"
                />
              </View>
            </View>
            <View style={styles.contactRow}>
              <View style={styles.iconPill}>
                <Ionicons name="call" size={18} color={PRIMARY} />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Phone</Text>
                <TextInput
                  style={styles.contactInput}
                  placeholder="+251 91 123 4567"
                  placeholderTextColor={TEXT_MUTED}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <View style={styles.contactRow}>
              <View style={styles.iconPill}>
                <Ionicons name="location" size={18} color={PRIMARY} />
              </View>
              <View style={styles.contactText}>
                <Text style={styles.contactLabel}>Location</Text>
                <TextInput
                  style={styles.contactInput}
                  placeholder="Addis Ababa, Ethiopia"
                  placeholderTextColor={TEXT_MUTED}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Skills & Interests</Text>
            <TouchableOpacity style={styles.addCircle} activeOpacity={0.8}>
              <Ionicons name="add" size={16} color={PRIMARY} />
            </TouchableOpacity>
          </View>
          <View style={styles.chipRow}>
            {SKILLS.map((skill) => (
              <View key={skill} style={styles.chip}>
                <Text style={styles.chipText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Visibility</Text>
          <View style={styles.card}>
            <View style={styles.visibilityRow}>
              <View style={styles.visibilityTextWrap}>
                <Ionicons name="eye" size={18} color={TEXT_MUTED} />
                <View>
                  <Text style={styles.visibilityTitle}>Public Profile</Text>
                  <Text style={styles.visibilitySubtitle}>Allow others to find you</Text>
                </View>
              </View>
              <Switch
                value={isPublic}
                onValueChange={setIsPublic}
                trackColor={{ false: '#374151', true: PRIMARY }}
                thumbColor={isPublic ? '#ffffff' : '#9ca3af'}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.visibilityRow}>
              <View style={styles.visibilityTextWrap}>
                <Ionicons name="school" size={18} color={TEXT_MUTED} />
                <View>
                  <Text style={styles.visibilityTitle}>Show GPA</Text>
                  <Text style={styles.visibilitySubtitle}>Visible to connections only</Text>
                </View>
              </View>
              <Switch
                value={showGpa}
                onValueChange={setShowGpa}
                trackColor={{ false: '#374151', true: PRIMARY }}
                thumbColor={showGpa ? '#ffffff' : '#9ca3af'}
              />
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} activeOpacity={0.9} onPress={() => router.back()}>
            <Text style={styles.secondaryText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.primaryButton]} activeOpacity={0.9}>
            <Text style={styles.primaryText}>Save Changes</Text>
          </TouchableOpacity>
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
    paddingBottom: 140,
    gap: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: SURFACE,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: BORDER,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  hero: {
    alignItems: 'center',
    gap: 8,
    paddingTop: 6,
  },
  avatarWrap: {
    padding: 6,
    borderRadius: 80,
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
  cameraBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: BACKGROUND,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    color: TEXT_MUTED,
    fontSize: 14,
  },
  universityPill: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: SURFACE,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
  },
  universityText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 4,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 14,
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  statValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  statLabel: {
    color: TEXT_MUTED,
    fontSize: 12,
    letterSpacing: 0.6,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: BORDER,
    marginTop: 6,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    gap: 4,
  },
  tabLabel: {
    color: TEXT_MUTED,
    fontWeight: '800',
    fontSize: 13,
  },
  tabLabelActive: {
    color: PRIMARY,
  },
  tabIndicator: {
    width: '60%',
    height: 3,
    backgroundColor: PRIMARY,
    borderRadius: 999,
  },
  section: {
    gap: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  card: {
    backgroundColor: SURFACE,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    padding: 14,
    gap: 12,
  },
  fieldBlock: {
    gap: 6,
  },
  fieldLabel: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  input: {
    marginTop: 4,
    backgroundColor: SURFACE_ALT,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: 'white',
    fontSize: 14,
  },
  inputMultiline: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
  divider: {
    height: 1,
    backgroundColor: BORDER,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconPill: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: PRIMARY + '22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactText: {
    flex: 1,
    gap: 2,
  },
  contactLabel: {
    color: TEXT_MUTED,
    fontSize: 12,
    fontWeight: '700',
  },
  contactInput: {
    backgroundColor: SURFACE_ALT,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: BORDER,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: 'white',
    fontSize: 14,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
  },
  chipText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },
  addCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SURFACE,
  },
  visibilityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  visibilityTextWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  visibilityTitle: {
    color: 'white',
    fontWeight: '800',
    fontSize: 14,
  },
  visibilitySubtitle: {
    color: TEXT_MUTED,
    fontSize: 12,
  },
  link: {
    color: PRIMARY,
    fontWeight: '700',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: BORDER,
    backgroundColor: SURFACE,
  },
  secondaryText: {
    color: 'white',
    fontWeight: '700',
  },
  primaryButton: {
    backgroundColor: PRIMARY,
  },
  primaryText: {
    color: 'white',
    fontWeight: '800',
  },
  bottomSpace: {
    height: 32,
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
