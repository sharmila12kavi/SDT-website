import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Award, ArrowRight, Trophy } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import AnimatedBackground from "@/components/animated-background"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sharmila A",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      description: "At Skill Decode Tech, our mission is to empower the next generation with hands-on technology skills. From IoT to AI, we believe learning should be practical, inspiring, and accessible to all. Together, let’s build innovations that shape the future",
      expertise: ["AI/ML", "Development", "Educational Technology"],
    },
    /*{
      name: "Priya Sharma",
      role: "Head of Curriculum",
      image: "/placeholder.svg?height=300&width=300",
      description: "Former tech lead with expertise in modern web technologies and curriculum design",
      expertise: ["Web Development", "Curriculum Design", "Student Mentoring"],
    },
    {
      name: "Arjun Patel",
      role: "Lead Instructor - Mobile Development",
      image: "/placeholder.svg?height=300&width=300",
      description: "Mobile app developer with 8+ years experience in Flutter and React Native",
      expertise: ["Flutter", "React Native", "Mobile UI/UX"],
    },
    {
      name: "Sneha Reddy",
      role: "Robotics & IoT Specialist",
      image: "/placeholder.svg?height=300&width=300",
      description: "Hardware engineer specializing in robotics, IoT, and embedded systems",
      expertise: ["Arduino", "IoT", "Robotics", "Embedded Systems"],
    },*/
  ]

  const achievements = [
    {
      number: "1000+",
      label: "Students Trained",
      color: "text-blue-600",
      icon: Users,
    },
    {
      number: "10+",
      label: "Workshops Conducted",
      color: "text-emerald-600",
      icon: Trophy,
    },
    {
      number: "5+",
      label: "Industry Partners",
      color: "text-purple-600",
      icon: Award,
    },
    {
      number: "5+",
      label: "Years of Excellence",
      color: "text-orange-600",
      icon: Target,
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly innovate our teaching methods and curriculum to stay ahead of industry trends.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a strong community of learners, mentors, and industry professionals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality education and achieving outstanding results.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "Empowering students with future-ready skills and preparing them for tomorrow's challenges.",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                About Skill Decode Tech
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Empowering the next generation with cutting-edge technology skills
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-teal-400 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2019, Skill Decode Tech emerged from a simple yet powerful vision: to bridge the gap
                  between traditional education and the rapidly evolving technology industry. Our founders, experienced
                  professionals from top tech companies, recognized the need for practical, hands-on learning that
                  prepares students for real-world challenges.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  What started as a small initiative to teach coding to local students has grown into a comprehensive
                  learning hub that serves students from Grade 2 to college level. Today, we're proud to be Chennai's
                  leading technology education institute, with over 1000 successful graduates working in top companies
                  worldwide.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our approach combines theoretical knowledge with practical application, ensuring that every student
                  not only learns to code but also develops problem-solving skills, creativity, and the confidence to
                  innovate in the digital world.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Our Mission</h4>
                      <p className="text-gray-600">
                        To democratize technology education and make it accessible to learners of all ages, backgrounds,
                        and skill levels.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Our Vision</h4>
                      <p className="text-gray-600">
                        To be India's leading institute shaping the next generation of tech innovators and digital
                        creators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <video
    src="/videos/bottom1.mp4" // change to your video file name
    className="rounded-4xl shadow-4xl w-full h-[500px] object-cover"

    autoPlay
    muted
    loop
    playsInline
  />
                
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-700 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-purple-300 to-blue-100 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
         <div className="text-center mb-16">
         <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        The principles that guide everything we do at Skill Decode Tech
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {values.map((value, index) => (
        <Card
          key={index}
          className="text-center border-0 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <CardContent className="p-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <value.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
            <p className="text-black-600 text-sm leading-relaxed">{value.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Message from the Founder</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Leading with passion, experience, and a vision for innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> 
          </div>
        </section> 

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Achievements</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center text-white">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <achievement.icon className="h-8 w-8 mx-auto mb-3 text-white" />
                  <div className={`text-4xl font-bold mb-2 text-white`}>{achievement.number}</div>
                  <div className="text-blue-100 font-semibold">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with Skill Decode Tech
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-sky-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-4 text-lg rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 bg-transparent shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
