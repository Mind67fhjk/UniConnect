import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
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
const SURFACE = '#1c242d';
const BORDER_LIGHT = '#2a3441';
const TEXT_MUTED = '#94a3b8';

export default function LoginScreen() {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				style={styles.flex}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 24 : 0}
			>
				<ScrollView
					style={styles.flex}
					contentContainerStyle={styles.content}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.headerRow}>
						<TouchableOpacity style={styles.iconButton} activeOpacity={0.85}>
							<Ionicons name="arrow-back" size={22} color="white" />
						</TouchableOpacity>
						<Text style={styles.headerTitle}>UniConnect</Text>
						<View style={styles.iconButtonSpacer} />
					</View>

					<View style={styles.hero}>
						<View style={styles.logoWrapper}>
							<Ionicons name="school" size={40} color="white" />
						</View>
						<Text style={styles.title}>Welcome Back</Text>
						<Text style={styles.subtitle}>
							Enter your credentials to continue your learning journey.
						</Text>
					</View>

					<View style={styles.form}>
						<View style={styles.fieldGroup}>
							<Text style={styles.label}>Email or Student ID</Text>
							<View style={styles.inputWrapper}>
								<Ionicons name="mail" size={18} color={TEXT_MUTED} style={styles.inputIcon} />
								<TextInput
									placeholder="student@uni.edu.et"
									placeholderTextColor={TEXT_MUTED}
									style={styles.input}
									keyboardType="email-address"
									autoCapitalize="none"
								/>
							</View>
						</View>

						<View style={styles.fieldGroup}>
							<Text style={styles.label}>Password</Text>
							<View style={styles.inputWrapper}>
								<Ionicons name="lock-closed" size={18} color={TEXT_MUTED} style={styles.inputIcon} />
								<TextInput
									placeholder="••••••••"
									placeholderTextColor={TEXT_MUTED}
									style={styles.input}
									secureTextEntry={!passwordVisible}
									autoCapitalize="none"
								/>
								<TouchableOpacity
									style={styles.trailingIcon}
									onPress={() => setPasswordVisible((prev) => !prev)}
									activeOpacity={0.85}
								>
									<Ionicons
										name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
										size={20}
										color={TEXT_MUTED}
									/>
								</TouchableOpacity>
							</View>
						</View>

						<TouchableOpacity style={styles.forgotButton} activeOpacity={0.8}>
							<Text style={styles.forgotText}>Forgot Password?</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
							<Text style={styles.primaryButtonText}>Log In</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.dividerRow}>
						<View style={styles.divider} />
						<Text style={styles.dividerText}>Or continue with</Text>
						<View style={styles.divider} />
					</View>

					<View style={styles.socialRow}>
						<TouchableOpacity style={styles.socialButton} activeOpacity={0.9}>
							<Ionicons name="logo-google" size={18} color="white" />
							<Text style={styles.socialText}>Google</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialButton} activeOpacity={0.9}>
							<Ionicons name="logo-apple" size={18} color="white" />
							<Text style={styles.socialText}>Apple</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.footer}
					>
						<Text style={styles.footerText}>Don't have an account?</Text>
						<Link href="/signup" asChild>
							<TouchableOpacity activeOpacity={0.85}>
								<Text style={styles.footerLink}>Sign Up</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: BACKGROUND,
	},
	flex: {
		flex: 1,
	},
	content: {
		paddingHorizontal: 20,
		paddingBottom: 24,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 8,
	},
	headerTitle: {
		color: 'white',
		fontSize: 18,
		fontWeight: '800',
		letterSpacing: -0.2,
	},
	iconButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconButtonSpacer: {
		width: 40,
		height: 40,
	},
	hero: {
		alignItems: 'center',
		paddingVertical: 24,
		gap: 10,
	},
	logoWrapper: {
		width: 80,
		height: 80,
		borderRadius: 16,
		backgroundColor: PRIMARY,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: PRIMARY,
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 12 },
		shadowRadius: 24,
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: '900',
		letterSpacing: -0.4,
	},
	subtitle: {
		color: TEXT_MUTED,
		fontSize: 15,
		textAlign: 'center',
		lineHeight: 22,
		maxWidth: 280,
	},
	form: {
		gap: 16,
	},
	fieldGroup: {
		gap: 8,
	},
	label: {
		color: '#d8dee9',
		fontSize: 13,
		fontWeight: '600',
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: SURFACE,
		borderColor: BORDER_LIGHT,
		borderWidth: 1,
		borderRadius: 14,
		paddingHorizontal: 12,
		height: 56,
		gap: 8,
	},
	inputIcon: {
		width: 22,
	},
	input: {
		flex: 1,
		color: 'white',
		fontSize: 15,
	},
	trailingIcon: {
		paddingHorizontal: 4,
	},
	forgotButton: {
		alignSelf: 'flex-end',
	},
	forgotText: {
		color: PRIMARY,
		fontWeight: '700',
		fontSize: 13,
	},
	primaryButton: {
		marginTop: 4,
		backgroundColor: PRIMARY,
		height: 56,
		borderRadius: 14,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: PRIMARY,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 20,
	},
	primaryButtonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '800',
	},
	dividerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		paddingVertical: 20,
	},
	divider: {
		flex: 1,
		height: 1,
		backgroundColor: BORDER_LIGHT,
	},
	dividerText: {
		color: TEXT_MUTED,
		fontSize: 13,
		fontWeight: '600',
	},
	socialRow: {
		flexDirection: 'row',
		gap: 12,
	},
	socialButton: {
		flex: 1,
		height: 50,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: BORDER_LIGHT,
		backgroundColor: SURFACE,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8,
	},
	socialText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 14,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 6,
		paddingVertical: 24,
	},
	footerText: {
		color: TEXT_MUTED,
		fontSize: 13,
	},
	footerLink: {
		color: PRIMARY,
		fontSize: 13,
		fontWeight: '800',
	},
});
