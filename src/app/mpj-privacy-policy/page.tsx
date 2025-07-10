import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, BookOpen, Users, Brain, Lock, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-gray-900">HizWayz</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Shield className="w-3 h-3 mr-1" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy for <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Prophetic Notes</span>
            </h1>
            <p className="text-lg text-gray-600">
              Last Updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            
            {/* Introduction */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  1. Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Prophetic Notes ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (the "Service").
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  2. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.1 Personal Information You Provide</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Account Information:</strong> Email address, display name, and profile picture</li>
                    <li><strong>Spiritual Notes:</strong> Text content, audio recordings, categories, and timestamps of your prophetic notes</li>
                    <li><strong>Biblical References:</strong> Verses, personal notes, and spiritual insights you add</li>
                    <li><strong>Team Information:</strong> Team names, descriptions, and member interactions</li>
                    <li><strong>Communication Data:</strong> Comments, team discussions, and shared content</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Usage Data:</strong> App features used, session duration, and interaction patterns</li>
                    <li><strong>Device Information:</strong> Device type, operating system, and app version</li>
                    <li><strong>Technical Data:</strong> IP address, crash reports, and performance metrics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">2.3 Third-Party Services Data</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Firebase Authentication:</strong> Manages your account securely</li>
                    <li><strong>Firebase Firestore:</strong> Stores your notes and team data</li>
                    <li><strong>OpenAI API:</strong> Processes your note content for spiritual pattern analysis</li>
                    <li><strong>Bible API Services:</strong> Retrieves biblical verse content for references</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  3. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">3.1 Core App Functionality</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Provide spiritual note-taking and organization features</li>
                    <li>Enable team collaboration and note sharing</li>
                    <li>Facilitate biblical reference lookups and suggestions</li>
                    <li>Generate AI-powered spiritual pattern insights</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">3.2 Service Improvement</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Analyze usage patterns to improve app features</li>
                    <li>Monitor app performance and fix technical issues</li>
                    <li>Develop new features based on user needs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">3.3 Communication</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Send important account and security notifications</li>
                    <li>Provide team-related updates and invitations</li>
                    <li>Share app updates and new features</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI and Data Processing */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  4. AI and Data Processing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">4.1 Spiritual Pattern Analysis</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Your note content may be processed by OpenAI's API to identify spiritual patterns</li>
                    <li>This analysis helps provide insights into your spiritual journey</li>
                    <li><strong>Important:</strong> AI analysis is a tool for pattern recognition, not spiritual guidance</li>
                    <li>The Holy Spirit remains your ultimate guide for spiritual truth (John 16:13)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">4.2 Data Minimization</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>We only send necessary note content for analysis</li>
                    <li>Personal identifiers are removed where possible</li>
                    <li>Analysis results are stored securely with your account</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  5. Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">5.1 Team Sharing</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Notes you explicitly share with teams are visible to team members</li>
                    <li>Team members can see shared content, comments, and biblical references</li>
                    <li>You control what content to share and with which teams</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">5.2 Third-Party Service Providers</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Firebase (Google):</strong> Cloud storage and authentication</li>
                    <li><strong>OpenAI:</strong> AI-powered spiritual pattern analysis</li>
                    <li><strong>Bible API Services:</strong> Biblical verse retrieval</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">5.3 Legal Requirements</h4>
                  <p className="text-gray-700 mb-2">We may disclose your information if required by law or to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights and safety</li>
                    <li>Prevent fraud or security threats</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">5.4 What We Never Share</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>We never sell your personal information</li>
                    <li>We never share your private notes without your consent</li>
                    <li>We never use your spiritual content for commercial purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-purple-600" />
                  6. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">6.1 Security Measures</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Secure cloud storage with Firebase</li>
                    <li>Regular security audits and updates</li>
                    <li>API key protection and secure authentication</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">6.2 Your Responsibilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Keep your account credentials secure</li>
                    <li>Use strong, unique passwords</li>
                    <li>Report any suspicious account activity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  7. Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">7.1 Account Control</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Access:</strong> View and download your personal data</li>
                    <li><strong>Correction:</strong> Update inaccurate personal information</li>
                    <li><strong>Deletion:</strong> Request account and data deletion</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">7.2 Privacy Settings</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Control team sharing preferences</li>
                    <li>Manage notification settings</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">7.3 Opting Out</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>You can disable AI pattern analysis in settings</li>
                    <li>You can leave teams or stop sharing content at any time</li>
                    <li>You can delete your account and all associated data</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Additional Sections */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>8. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our app is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>9. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy periodically. We will notify you of any material changes by:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Posting the updated policy in the app</li>
                  <li>Sending an email notification</li>
                  <li>Displaying a prominent notice upon app opening</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  11. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> [Your Support Email]</p>
                  <p><strong>Address:</strong> [Your Business Address]</p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Spiritual Commitment */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-100 to-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  12. Spiritual Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a faith-based application, we are committed to:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>Treating your spiritual content with reverence and respect</li>
                  <li>Maintaining the highest ethical standards in data handling</li>
                  <li>Supporting your spiritual growth while protecting your privacy</li>
                  <li>Honoring the sacred nature of prophetic and spiritual content</li>
                </ul>
                
                <div className="bg-white/60 rounded-lg p-4 border-l-4 border-purple-600">
                  <p className="text-purple-900 font-medium mb-2">
                    <strong>Remember:</strong> "But when he, the Spirit of truth, comes, he will guide you into all the truth." - John 16:13
                  </p>
                  <p className="text-purple-800 text-sm">
                    This app serves as a tool for spiritual organization and pattern recognition, but the Holy Spirit remains your ultimate guide for spiritual discernment.
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold">HizWayz</span>
          </div>
          <p className="text-gray-400">
            © {new Date().getFullYear()} HizWayz. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 