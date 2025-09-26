import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Trash2, 
  Shield, 
  AlertTriangle, 
  Smartphone, 
  Mail, 
  Clock, 
  Database, 
  Users, 
  MessageSquare,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  XCircle
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Delete Account - My Prophetic Journal | HizWayz',
  description: 'Learn how to delete your My Prophetic Journal account and understand what data will be removed. Complete guide for account deletion on iOS and Android.',
  keywords: 'delete account, My Prophetic Journal, account removal, data deletion, HizWayz',
}

export default function DeleteAccountPage() {
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
            <Link href="/mpj-privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4 inline mr-1" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <section className="py-4 px-4 bg-gray-50/50">
        <div className="container mx-auto max-w-4xl">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/mpj-privacy-policy" className="hover:text-gray-900">Privacy Policy</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">Delete Account</span>
          </nav>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <Trash2 className="w-3 h-3 mr-1" />
              Account Deletion
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Delete Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">My Prophetic Journal</span> Account
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This page provides complete instructions for requesting account deletion from <strong>My Prophetic Journal</strong> by <strong>Hiz Wayz, LLC</strong>. 
              Please read all information carefully before proceeding.
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Alert className="mb-8 border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              <strong>Important:</strong> Account deletion is permanent and irreversible. Once confirmed, all your data will be permanently deleted and cannot be recovered.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">

            {/* Before You Delete */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Before You Delete Your Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-amber-600" />
                      Cancel Subscriptions
                    </h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Please cancel any active subscriptions through your device's app store <strong>before</strong> deleting your account:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>iOS:</strong> Settings → Apple ID → Subscriptions</li>
                      <li>• <strong>Android:</strong> Google Play Store → Profile → Payments & subscriptions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600" />
                      Team Collaborations
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Consider that you'll lose access to any team collaborations and shared content. 
                      Other team members will no longer see your contributions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Method 1: In-App Deletion */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-purple-600" />
                  Method 1: In-App Deletion (Primary Method)
                </CardTitle>
                <CardDescription>
                  The fastest way to delete your account directly from the My Prophetic Journal app
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Step-by-Step Instructions
                  </h4>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span>Open the <strong>My Prophetic Journal</strong> app on your device</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span>Go to <strong>Profile/Settings</strong> page</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span>Scroll down and tap <strong>"Delete Account"</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span>Read the confirmation dialog that explains what will be deleted</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">5</span>
                      <span>Tap <strong>"Delete Account"</strong> to confirm</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">6</span>
                      <span>Enter your current password when prompted</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">7</span>
                      <span>Tap <strong>"Confirm Deletion"</strong></span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">✓</span>
                      <span>Account deletion will be initiated immediately and processed in the background</span>
                    </li>
                  </ol>
                </div>

                <Alert className="border-blue-200 bg-blue-50">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Processing Time:</strong> Account deletion is initiated immediately after password confirmation. 
                    Complete data removal happens automatically in the background and may take a few minutes to hours depending on your data volume.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Method 2: Email Request */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600" />
                  Method 2: Email Request (Alternative)
                </CardTitle>
                <CardDescription>
                  If you cannot access the app or prefer to request deletion via email
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Instructions
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label className="font-medium text-gray-700 text-sm">Send email to:</label>
                      <div className="mt-1 p-3 bg-white rounded border">
                        <code className="text-purple-600 font-medium">support@hizwayz.org</code>
                      </div>
                    </div>
                    <div>
                      <label className="font-medium text-gray-700 text-sm">Subject line:</label>
                      <div className="mt-1 p-3 bg-white rounded border">
                        <code className="text-gray-900">"Account Deletion Request - My Prophetic Journal"</code>
                      </div>
                    </div>
                    <div>
                      <label className="font-medium text-gray-700 text-sm">Required information to include:</label>
                      <ul className="mt-2 space-y-2 text-sm text-gray-700">
                        <li>• <strong>Email address:</strong> The email address associated with your account</li>
                        <li>• <strong>Reason for deletion:</strong> Optional, but helps us improve our service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="border-green-200 bg-green-50">
                  <Clock className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    <strong>Response Time:</strong> We will process your email request and respond within 48 hours to confirm account deletion.
                  </AlertDescription>
                </Alert>

                <div className="text-center">
                  <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <a href="mailto:support@hizwayz.org?subject=Account%20Deletion%20Request%20-%20My%20Prophetic%20Journal&body=Hello%2C%0A%0AI%20would%20like%20to%20request%20the%20deletion%20of%20my%20My%20Prophetic%20Journal%20account.%0A%0AAccount%20Email%3A%20%5BYour%20email%20address%20here%5D%0A%0AReason%20for%20deletion%20(optional)%3A%20%5BYour%20reason%20here%5D%0A%0AThank%20you.">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Deletion Request Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Deletion Details */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-red-600" />
                  What Data Gets Deleted
                </CardTitle>
                <CardDescription>
                  Complete breakdown of all data that will be permanently removed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      Data That Gets Deleted
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>User profile:</strong> Name, email, profile picture</li>
                      <li>• <strong>Personal notes:</strong> All your prophetic journal entries</li>
                      <li>• <strong>Audio recordings:</strong> Voice notes and transcriptions</li>
                      <li>• <strong>Team collaborations:</strong> Shared content and team memberships</li>
                      <li>• <strong>Comments:</strong> All comments on notes and shared content</li>
                      <li>• <strong>Biblical references:</strong> Your saved verses and notes</li>
                      <li>• <strong>Notification data:</strong> Push notification preferences</li>
                      <li>• <strong>Storage files:</strong> All uploaded images and attachments</li>
                      <li>• <strong>AI analysis data:</strong> Generated insights and patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      Data Retention Policy
                    </h4>
                    <div className="space-y-4 text-sm text-gray-700">
                      <div className="p-4 bg-white/60 rounded-lg">
                        <p className="font-medium text-green-800 mb-2">✓ Complete Deletion</p>
                        <p>We do not retain any personal data after account deletion. All user information is permanently removed from our systems.</p>
                      </div>
                      <div className="p-4 bg-white/60 rounded-lg">
                        <p className="font-medium text-red-800 mb-2">⚠ Irreversible Process</p>
                        <p>Once confirmed, account deletion cannot be undone. You will need to create a new account to use the service again.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="border-red-200 bg-red-50">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    <strong>Processing Details:</strong>
                    <br />• <strong>Initiation:</strong> Immediate after password confirmation
                    <br />• <strong>Background Processing:</strong> Complete data removal happens automatically (may take minutes to hours)
                    <br />• <strong>Completion Time:</strong> Depends on data volume, typically within hours
                    <br />• <strong>Verification:</strong> You will receive confirmation when deletion is complete
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Technical Information */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-600" />
                  Technical Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">App Details</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>App Name:</strong> My Prophetic Journal</li>
                      <li><strong>Developer:</strong> Hiz Wayz, LLC</li>
                      <li><strong>Platform:</strong> iOS and Android</li>
                      <li><strong>Authentication:</strong> Firebase Authentication</li>
                      <li><strong>Database:</strong> Firebase Firestore</li>
                      <li><strong>Subscriptions:</strong> RevenueCat integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features Affected</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Note creation and organization</li>
                      <li>• Audio transcription services</li>
                      <li>• Team collaboration features</li>
                      <li>• Biblical reference integration</li>
                      <li>• AI-powered pattern analysis</li>
                      <li>• Cloud synchronization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have questions about account deletion or need assistance with the process, our support team is here to help.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/60 rounded-lg">
                      <Mail className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
                      <p className="text-sm text-gray-600 mb-3">Get detailed help via email</p>
                      <Button variant="outline" size="sm" asChild>
                        <a href="mailto:support@hizwayz.org">support@hizwayz.org</a>
                      </Button>
                    </div>
                    
                    <div className="text-center p-4 bg-white/60 rounded-lg">
                      <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                      <p className="text-sm text-gray-600">Within 48 hours for all deletion requests</p>
                    </div>
                    
                    <div className="text-center p-4 bg-white/60 rounded-lg">
                      <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Privacy Commitment</h4>
                      <p className="text-sm text-gray-600">Your data privacy and security are our priority</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">HizWayz</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering Kingdom Entrepreneurs with innovative spiritual technology solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">My Prophetic Journal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">App Features</Link></li>
                <li><Link href="/mpj-privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/delete-account" className="hover:text-white transition-colors">Delete Account</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:support@hizwayz.org" className="hover:text-white transition-colors">Email Support</a></li>
                <li><span>Response: Within 48 hours</span></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><span>Developer: Hiz Wayz, LLC</span></li>
                <li><span>Platform: iOS & Android</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Hiz Wayz, LLC. All rights reserved.</p>
            <p className="mt-2">My Prophetic Journal - Spiritual journaling with AI-powered insights</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
