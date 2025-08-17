"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, ArrowRight, ExternalLink } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"


interface Event {
  title: string
  description: string
  date: string
  time: string
  registerLink: string
  paymentLink: string
}

export default function EventsPage() {
  const [formCompleted, setFormCompleted] = useState(false);
   // Load saved state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("formCompleted");
    if (saved === "true") {
      setFormCompleted(true);
    }
  }, []);
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  

  // Mock data - Replace with actual Google Sheets API call
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock event data - Replace with actual Google Sheets data
        const mockEvents: Event[] = [
          {
            title: "Canva Designing Workshop",
            description:
              "Unleash your creativity in our power-packed Canva Designing Workshop! Learn professional design techniques, create eye-catching posters, social media posts, and stunning presentations — all without complex software. Perfect for beginners & creatives ready to make their ideas pop!",
            date: "2025-08-30",
            time: "7:00 PM - 9:00 PM",
            registerLink: "https://forms.gle/q4dwi1idf3bRqiNr6",
            paymentLink: "upi://pay?pa=skilldecodetech@oksbi&pn=Skill%20Decode%20Tech&am=99&cu=INR",
          },
        ]

        setEvents(mockEvents)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching events:", error)
        setEvents([])
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Countdown timer
  useEffect(() => {
    if (events.length === 0) return

    const timer = setInterval(() => {
      const eventDate = new Date(`${events[0].date}T10:00:00`)
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [events])

  const upcomingEvent = events.length > 0 ? events[0] : null

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1
  className="text-4xl sm:text-5xl font-bold mb-4 
             bg-gradient-to-r from-blue-500 to-blue-700 
             bg-clip-text text-transparent drop-shadow-lg 
             transform transition-all duration-500 ease-out 
             hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.7)] 
             opacity-0 translate-y-4 animate-fadeUp"
>
  Upcoming Events
</h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our workshops, seminars, and tech events to enhance your skills and network with fellow learners
              </p>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading events...</p>
              </div>
            ) : upcomingEvent ? (
              <div className="max-w-4xl mx-auto">
                <h2
  className="text-3xl font-bold text-center mb-12 
             bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
             bg-clip-text text-transparent 
             animate-gradientMove transition-transform duration-500 
             hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
>
  Next Upcoming Event
</h2>


                {/* Event Card */}
                <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{upcomingEvent.title}</CardTitle>
                        <div className="flex items-center gap-4 text-blue-100">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(upcomingEvent.date).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {upcomingEvent.time}
                          </span>
                        </div>
                      </div>
                      <Badge className="bg-white/20 text-white text-lg px-4 py-2">Upcoming</Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">{upcomingEvent.description}</p>

                    {/* Countdown Timer */}
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 mb-8">
                      <h3 className="text-xl font-semibold text-center mb-4">Event Starts In:</h3>
                      <div className="grid grid-cols-4 gap-4 text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-blue-600">{timeLeft.days}</div>
                          <div className="text-sm text-gray-600">Days</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-purple-600">{timeLeft.hours}</div>
                          <div className="text-sm text-gray-600">Hours</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-emerald-600">{timeLeft.minutes}</div>
                          <div className="text-sm text-gray-600">Minutes</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <div className="text-3xl font-bold text-orange-600">{timeLeft.seconds}</div>
                          <div className="text-sm text-gray-600">Seconds</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {!formCompleted ? (
    <a
      href={upcomingEvent.registerLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setFormCompleted(true)} 
    >
      <Button
        size="lg"
        className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Users className="mr-2 h-5 w-5" />
        Register Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </a>
  ) : (
    <a
      href={upcomingEvent.paymentLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="lg"
        variant="outline"
        className="w-full sm:w-auto px-8 py-4 text-lg rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
      >
        💳 Pay Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </a>
  )}
</div>

                  </CardContent>
                </Card>
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🚀</div>
                <h2 className="text-2xl font-bold mb-4">Upcoming event details will be announced soon. Stay tuned!</h2>
                <p className="text-gray-600 mb-8">
                  Follow us on social media or subscribe to our newsletter to get notified about upcoming events.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-purple-700 text-white rounded-full">
                  Subscribe to Updates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
        {/* Past Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Past Events</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Check out our previous workshops and events</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {/* Past event cards would go here */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-200">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-500 text-black-600">Completed</Badge>
                  <h3 className="text-xl font-semibold mb-2">Master Python in 3 domains</h3>
                  <p className="text-gray-600 mb-4">
                    Intensive 2-day workshop covering AI in python, Web Development & Data analysis using python.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    April 18th & 19th, 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-200">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-500 text-black-600">Completed</Badge>
                  <h3 className="text-xl font-semibold mb-2">Mobile App Development Workshop</h3>
                  <p className="text-gray-600 mb-4">
                    Participants explored Flutter development by building Whatsapp UI during the hands-on workshop.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    May 17th, 2025
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-100 to-blue-200">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-blue-500 text-black-600">Completed</Badge>
                  <h3 className="text-xl font-semibold mb-2">Mobile App Development Workshop</h3>
                  <p className="text-gray-600 mb-4">
                    Participants explored Flutter development by building interactive mobile apps during the hands-on workshop.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    June 21st, 2025
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
