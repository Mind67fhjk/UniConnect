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
const SURFACE = '#1c2127';
const BORDER = '#3b4754';
const TEXT_MUTED = '#9dabb9';

export default function SignupScreen() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [agreed, setAgreed] = useState(false);

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
						<View style={styles.headerSpacer} />
					</View>

					<View style={styles.titleBlock}>
						<Text style={styles.title}>Create Account</Text>
						<Text style={styles.subtitle}>Join the community of students across Ethiopia.</Text>
					</View>

					<View style={styles.form}>
						<View style={styles.fieldGroup}>
							<Text style={styles.label}>Full Name</Text>
							<TextInput
								placeholder="Abebe Kebede"
								placeholderTextColor={TEXT_MUTED}
								style={styles.input}
							/>
						</View>

						<View style={styles.fieldGroup}>
							<Text style={styles.label}>Email Address</Text>
							<TextInput
								placeholder="student@uni.edu.et"
								placeholderTextColor={TEXT_MUTED}
								style={styles.input}
								keyboardType="email-address"
								autoCapitalize="none"
							/>
						</View>

						<View style={styles.fieldGroup}>
							<Text style={styles.label}>Password</Text>
							<View style={styles.inputWithIcon}>
								<TextInput
									placeholder="Min 8 characters"
									placeholderTextColor={TEXT_MUTED}
									style={[styles.input, styles.inputNoBorder]}
									secureTextEntry={!passwordVisible}
									autoCapitalize="none"
								/>
								<TouchableOpacity
									style={styles.eyeButton}
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

						<View style={styles.fieldGroup}>
							<Text style={styles.label}>University</Text>
							<TouchableOpacity style={styles.select} activeOpacity={0.9}>
								<Text style={styles.selectText}>Select your institution</Text>
								<Ionicons name="chevron-down" size={18} color={TEXT_MUTED} />
							</TouchableOpacity>
						</View>

						<View style={styles.checkboxRow}>
							<TouchableOpacity
								style={[styles.checkbox, agreed && styles.checkboxChecked]}
								onPress={() => setAgreed((prev) => !prev)}
								activeOpacity={0.85}
							>
								{agreed ? <Ionicons name="checkmark" size={16} color="white" /> : null}
							</TouchableOpacity>
							<Text style={styles.checkboxLabel}>
								I agree to the <Text style={styles.link}>Terms of Service</Text> and{' '}
								<Text style={styles.link}>Privacy Policy</Text>.
							</Text>
						</View>

						<TouchableOpacity style={styles.primaryButton} activeOpacity={0.9}>
							<Text style={styles.primaryButtonText}>Sign Up</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.dividerRow}>
						<View style={styles.divider} />
						<Text style={styles.dividerText}>Or sign up with</Text>
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

					<View style={styles.footer}> 
						<Text style={styles.footerText}>Already have an account?</Text>
                        <Link href="/login" asChild>
							<TouchableOpacity activeOpacity={0.85}>
								<Text style={styles.footerLink}>Log In</Text>
							</TouchableOpacity>
						</Link>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

const baseInput = {
	height: 56,
	borderRadius: 14,
	borderWidth: 1,
	borderColor: BORDER,
	backgroundColor: SURFACE,
	color: 'white',
	fontSize: 15,
	paddingHorizontal: 14,
};

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
		paddingBottom: 28,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 10,
	},
	iconButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerSpacer: {
		flex: 1,
	},
	titleBlock: {
		gap: 8,
		marginBottom: 18,
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
		lineHeight: 22,
	},
	form: {
		gap: 16,
	},
	fieldGroup: {
		gap: 8,
	},
	label: {
		color: 'white',
		fontSize: 14,
		fontWeight: '700',
	},
	input: {
		...baseInput,
	},
	inputWithIcon: {
		...baseInput,
		flexDirection: 'row',
		alignItems: 'center',
		paddingRight: 8,
	},
	inputNoBorder: {
		borderWidth: 0,
		flex: 1,
		paddingHorizontal: 0,
		height: '100%',
	},
	eyeButton: {
		paddingHorizontal: 8,
		height: '100%',
		justifyContent: 'center',
	},
	select: {
		...baseInput,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	selectText: {
		color: TEXT_MUTED,
		fontSize: 15,
	},
	checkboxRow: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		gap: 10,
	},
	checkbox: {
		width: 22,
		height: 22,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: BORDER,
		backgroundColor: SURFACE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	checkboxChecked: {
		backgroundColor: PRIMARY,
		borderColor: PRIMARY,
	},
	checkboxLabel: {
		color: TEXT_MUTED,
		fontSize: 13,
		lineHeight: 18,
		flex: 1,
	},
	link: {
		color: PRIMARY,
		fontWeight: '700',
	},
	primaryButton: {
		marginTop: 4,
		height: 56,
		borderRadius: 28,
		backgroundColor: PRIMARY,
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
		backgroundColor: BORDER,
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
		borderColor: BORDER,
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
