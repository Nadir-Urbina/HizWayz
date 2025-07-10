"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mic, Brain, BookOpen, Users, Calendar, Shield, Star, Play, Zap, Cpu, Network, X, Mail, Phone, MessageSquare } from "lucide-react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function LandingPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement Resend integration here
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsContactModalOpen(false)
      // You can add success toast here
    }, 2000)
  }

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
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

          {/* Tech Icons Floating */}
          <div className="absolute top-32 right-1/4 text-purple-300/30 animate-bounce delay-300">
            <Cpu className="w-8 h-8" />
          </div>
          <div className="absolute bottom-32 left-1/3 text-pink-300/30 animate-bounce delay-700">
            <Network className="w-6 h-6" />
          </div>
          <div className="absolute top-1/2 right-10 text-blue-300/30 animate-bounce delay-1000">
            <Zap className="w-7 h-7" />
          </div>
        </div>

        <div className="container mx-auto text-center max-w-4xl relative z-10">
          {/* Enhanced Badge with Tech Styling */}
          <div className="mb-6 inline-flex items-center">
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border border-purple-200/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
              <Zap className="w-3 h-3 mr-1" />
              Kingdom Entrepreneurs Hub
            </Badge>
          </div>

          {/* Enhanced Title with Tech Styling */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Kingdom Ideas
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-pulse">
                {" "}
                Become Reality
              </span>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 blur-2xl -z-10"></div>
            </span>
          </h1>

          {/* Enhanced Description */}
          <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            HizWayz empowers <span className="font-semibold text-purple-700">Kingdom Entrepreneurs</span> with cutting-edge technology and strategic guidance to transform <span className="font-semibold text-pink-700">divine inspiration</span> into{" "}
            <span className="font-semibold text-blue-700">marketplace success</span>.
          </p>
          
          {/* Target Audience Explanation */}
          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto">
            <em>Kingdom Entrepreneurs are faith-driven business leaders and innovators who seek to integrate their spiritual calling with entrepreneurial ventures.</em>
          </p>



          {/* Enhanced CTA Buttons */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Tech Stats/Metrics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Top Tech</div>
              <div className="text-sm text-gray-600">Advanced Technology</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Network className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Connected</div>
              <div className="text-sm text-gray-600">Global Community</div>
            </div>
            <div className="text-center p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Innovative</div>
              <div className="text-sm text-gray-600">Cutting-Edge Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700">About HizWayz</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Kingdom Entrepreneurs</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At HizWayz, we believe that divine inspiration deserves innovative execution. We're more than a
                consulting company – we're a community of Kingdom Entrepreneurs dedicated to transforming God-given
                ideas into reality.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is to bridge the gap between spiritual vision and practical application, providing the
                tools, technology, and guidance needed to bring Kingdom purposes to life in the marketplace.
              </p>
              
              {/* Biblical Foundation */}
              <div className="bg-purple-50 rounded-2xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-purple-900 font-medium mb-2">Biblical Foundation</p>
                    <p className="text-purple-700 italic">
                      "Write the vision and make it plain on tablets, that he may run who reads it." - Habakkuk 2:2
                    </p>
                    <p className="text-sm text-purple-600 mt-2">
                      We believe God calls us to record, understand, and act upon His revelations in our lives.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-pink-500 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Join our community</p>
                  <p className="text-sm text-gray-600">of Kingdom Entrepreneurs</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Kingdom Entrepreneurs Community"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-purple-50/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700">Our Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Founded by Kingdom Entrepreneurs</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                HizWayz was born from personal experience. As Kingdom Entrepreneurs ourselves, we understood the challenge of bridging the gap between divine revelation and practical application in business and ministry.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                After years of manually journaling visions, dreams, and prophetic words, we realized technology could enhance this sacred practice - not replace it, but amplify our ability to hear and understand God's voice more clearly.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Built by the community</p>
                  <p className="text-sm text-gray-600">For the community</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Prophetic Horizon Apps</h3>
                  <p className="text-gray-600 text-sm mb-4">The development team behind HizWayz</p>
                  <p className="text-gray-600 italic text-sm">
                    "We're committed to creating technology that serves Kingdom purposes and enhances spiritual growth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & Credibility Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Trusted by Kingdom Entrepreneurs</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join a Growing Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kingdom Entrepreneurs worldwide are already experiencing breakthrough spiritual growth with My Prophetic Journal, our flagship product
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
              <div className="text-sm text-gray-600">Prophetic Entries Recorded</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Kingdom Entrepreneurs Served</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Report Increased Spiritual Clarity</div>
            </div>
          </div>

          {/* Testimonial placeholder */}
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-600 italic mb-6">
                  "My Prophetic Journal has revolutionized how I process and understand God's voice in my life. The AI insights have helped me recognize patterns I never would have seen on my own."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SJ</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Kingdom Entrepreneur, Ministry Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Product Section with Tabs */}
      <section id="products" className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Featured Product</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Prophetic Journal</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The world's first AI-powered prophetic journaling platform designed for serious spiritual growth
            </p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-white data-[state=active]:text-purple-600"
              >
                Experience the App
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-white data-[state=active]:text-purple-600">
                Pricing
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      "Discover God's Patterns in Your Spiritual Journey"
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Transform your spiritual experiences into profound insights with advanced AI technology. Record
                      visions, dreams, and prophetic words, then let AI help you recognize divine patterns and growth
                      opportunities.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mic className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Voice & Text Recording</h4>
                        <p className="text-sm text-gray-600">Capture spiritual experiences instantly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Brain className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">AI Pattern Recognition</h4>
                        <p className="text-sm text-gray-600">Identify divine patterns and themes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Biblical Integration</h4>
                        <p className="text-sm text-gray-600">AI suggests relevant scriptures</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Team Collaboration</h4>
                        <p className="text-sm text-gray-600">Share insights with mentors</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                      <Zap className="mr-2 h-4 w-4" />
                      Begin Your Prophetic Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="bg-black hover:bg-gray-800 text-white">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download for iOS
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                      </svg>
                      Get it on Google Play
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  {/* Single featured image - Dashboard */}
                  <div className="relative z-10">
                    <Image
                      src="/images/app-dashboard.png"
                      alt="My Prophetic Journal Dashboard"
                      width={300}
                      height={600}
                      className="mx-auto rounded-3xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-30 transform scale-105"></div>
                </div>
              </div>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Cutting-edge AI meets ancient wisdom to transform your spiritual journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Mic className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Voice & Text Recording</CardTitle>
                    <CardDescription>
                      Capture spiritual experiences instantly with voice or text. AI transcription powered by OpenAI
                      Whisper technology.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>AI Pattern Recognition</CardTitle>
                    <CardDescription>
                      Advanced spiritual insight analysis using OpenAI technology. Identify recurring themes and divine
                      patterns.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Biblical Integration</CardTitle>
                    <CardDescription>
                      Seamlessly add scriptural references. AI suggests relevant biblical passages based on your
                      experiences.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Team Collaboration</CardTitle>
                    <CardDescription>
                      Connect with spiritual mentors, prayer partners, and ministry teams. Share insights within our secure Kingdom Entrepreneurs community. Collaborative commenting and wisdom-sharing features.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>Spiritual Timeline</CardTitle>
                    <CardDescription>
                      Beautiful calendar view of your spiritual journey. Track growth patterns over time and visualize
                      seasons.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="flex items-center">
                      Privacy & Security
                      <Badge className="ml-2 bg-green-100 text-green-700 text-xs">Military-Grade</Badge>
                    </CardTitle>
                    <CardDescription>
                      <strong>Your spiritual content is sacred.</strong> End-to-end encryption ensures your most intimate conversations with God remain private. GDPR compliant with enterprise-grade Firebase infrastructure.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Experience the App Tab */}
            <TabsContent value="experience" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Experience the App</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  See how My Prophetic Journal transforms your spiritual journey with intuitive design and powerful
                  features
                </p>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 items-end">
                {/* Splash Screen */}
                <div className="text-center">
                  <Image
                    src="/images/app-splash.jpeg"
                    alt="My Prophetic Journal App Launch"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Beautiful Launch</h4>
                  <p className="text-sm text-gray-600">Inspiring design from the moment you open the app</p>
                </div>

                {/* Dashboard */}
                <div className="text-center">
                  <Image
                    src="/images/app-dashboard.png"
                    alt="Dashboard Overview"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Personal Dashboard</h4>
                  <p className="text-sm text-gray-600">Track your spiritual journey with detailed stats</p>
                </div>

                {/* Calendar with Notes */}
                <div className="text-center">
                  <Image
                    src="/images/app-calendar-with-notes.png"
                    alt="Calendar with Spiritual Notes"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Spiritual Calendar</h4>
                  <p className="text-sm text-gray-600">Organize visions, dreams, and prophetic words by date</p>
                </div>

                {/* AI Insights */}
                <div className="text-center">
                  <Image
                    src="/images/app-insights.png"
                    alt="AI-Powered Pattern Discovery"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">AI Pattern Discovery</h4>
                  <p className="text-sm text-gray-600">Discover divine patterns with biblical wisdom</p>
                </div>

                {/* Empty Calendar */}
                <div className="text-center">
                  <Image
                    src="/images/app-calendar.png"
                    alt="Clean Calendar Interface"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">Clean Interface</h4>
                  <p className="text-sm text-gray-600">Intuitive design that focuses on your spiritual growth</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Zap className="mr-2 h-4 w-4" />
                    Begin Your Prophetic Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    Download for iOS
                  </Button>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Get it on Google Play
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Pricing Tab */}
            <TabsContent value="pricing" className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Affordable Spiritual Growth</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Invest in your spiritual journey with comprehensive AI-powered insights and analysis
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="max-w-md mx-auto border-0 shadow-2xl">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">My Prophetic Journal</CardTitle>
                    <CardDescription>Complete spiritual journaling solution</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">$9.99</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Unlimited AI analysis
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Voice transcription
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Team collaboration
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Biblical insights
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        Secure cloud storage
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-4">
                      Start Free Trial
                    </Button>
                    <p className="text-sm text-gray-500">✨ Free trial available</p>
                  </CardContent>
                </Card>

                {/* Additional pricing benefits */}
                <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">30-Day Money Back</h4>
                    <p className="text-sm text-gray-600">Not satisfied? Get a full refund within 30 days</p>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
                    <p className="text-sm text-gray-600">Join our community of Kingdom Entrepreneurs</p>
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Regular Updates</h4>
                    <p className="text-sm text-gray-600">Continuous improvements and new features</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Get In Touch</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Kingdom Vision?</h2>
            <p className="text-lg text-gray-600 mb-12">
              Connect with our team to discuss how HizWayz can help bring your divine inspiration to life through innovative solutions and strategic guidance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Start a Conversation</h3>
                <p className="text-gray-600 text-sm mb-4">Tell us about your vision and goals</p>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Contact Us
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Schedule Consultation</h3>
                <p className="text-gray-600 text-sm mb-4">Book a strategy session with our team</p>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Book Now
                </Button>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Join Community</h3>
                <p className="text-gray-600 text-sm mb-4">Connect with other Kingdom Entrepreneurs</p>
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full"
                  onClick={() => setIsContactModalOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Ideas Into Reality?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the HizWayz community and discover how Kingdom Entrepreneurs are using innovative solutions to fulfill
            their divine calling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" onClick={() => setIsContactModalOpen(true)}>
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => setIsContactModalOpen(true)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold text-white">HizWayz</span>
              </div>
              <p className="text-gray-400">
                Empowering Kingdom Entrepreneurs to transform divine inspiration into innovative reality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    My Prophetic Journal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support & Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Getting Started Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Prophetic Journaling 101
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Spiritual Mentorship
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <p className="text-gray-400 mb-4">Join our community of Kingdom Entrepreneurs</p>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => setIsContactModalOpen(true)}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HizWayz. All rights reserved. Built by Prophetic Horizon Apps.</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-purple-600" />
              Contact HizWayz
            </DialogTitle>
            <DialogDescription>
              Tell us about your Kingdom vision and how we can help bring it to reality.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" name="firstName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" name="lastName" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="inquiryType">How can we help?</Label>
              <Select name="inquiryType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consulting">Business Consulting</SelectItem>
                  <SelectItem value="strategy">Strategic Planning</SelectItem>
                  <SelectItem value="technology">Technology Solutions</SelectItem>
                  <SelectItem value="community">Community & Mentorship</SelectItem>
                  <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your vision</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Share your Kingdom vision, goals, and how HizWayz can help..."
                className="min-h-[100px]"
                required 
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactModalOpen(false)}
                className="flex-1"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
