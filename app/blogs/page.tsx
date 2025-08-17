import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Programming Languages to Learn in 2024",
      excerpt:
        "Discover the most in-demand programming languages that will boost your career prospects in the current tech landscape...",
      content:
        "The technology industry continues to evolve rapidly, and staying updated with the most relevant programming languages is crucial for career growth.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      author: "Dr. Rajesh Kumar",
      category: "Programming",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "The Future of AI in Education",
      excerpt:
        "How artificial intelligence is revolutionizing the way we learn and teach technology, making education more personalized and effective...",
      content:
        "Artificial Intelligence is transforming education by providing personalized learning experiences and intelligent tutoring systems.",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      author: "Priya Sharma",
      category: "AI/ML",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 3,
      title: "Building Your First Mobile App: A Complete Guide",
      excerpt:
        "Step-by-step guide to creating your first mobile application using Flutter, from setup to deployment on app stores...",
      content:
        "Mobile app development has become more accessible than ever with modern frameworks like Flutter and React Native.",
      date: "Dec 5, 2024",
      readTime: "10 min read",
      author: "Arjun Patel",
      category: "Mobile Development",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "IoT Projects for Beginners: Smart Home Automation",
      excerpt:
        "Learn how to create your first IoT project by building a smart home automation system using Arduino and sensors...",
      content:
        "Internet of Things (IoT) is making our homes smarter and more efficient. Here's how you can get started.",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      author: "Sneha Reddy",
      category: "IoT",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "Web Development Trends in 2024",
      excerpt:
        "Explore the latest trends in web development including new frameworks, design patterns, and best practices...",
      content: "The web development landscape is constantly evolving with new technologies and methodologies.",
      date: "Nov 20, 2024",
      readTime: "6 min read",
      author: "Priya Sharma",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "Career Opportunities in Robotics Engineering",
      excerpt:
        "Discover the exciting career paths available in robotics engineering and the skills you need to succeed...",
      content:
        "Robotics engineering offers diverse career opportunities across industries from healthcare to manufacturing.",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      author: "Sneha Reddy",
      category: "Robotics",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const categories = ["All", "Programming", "AI/ML", "Mobile Development", "Web Development", "IoT", "Robotics"]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Tech Insights & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Stay updated with the latest trends, tutorials, and insights in technology and education
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {featuredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                    <Badge className="absolute top-4 left-4 bg-blue-600 text-white">Featured</Badge>
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                    <Button className="group bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="bg-white hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 transition-all duration-300 rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{post.category}</Badge>
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">{post.readTime}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <CardTitle className="text-lg hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <Button
                        variant="outline"
                        className="group bg-transparent hover:bg-sky-50 hover:text-sky-600 hover:border-sky-600 rounded-full"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 bg-white hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest tech insights and course updates
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-full text-gray-900 flex-1"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
