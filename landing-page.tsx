import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Smartphone, Zap, Code } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Code className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-bold">TechEdu</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-slate-900">
                  Empowering Future Innovators
                </h1>
                <p className="mx-auto max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  STEM Education | Coding | Software Solutions
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-900">Our Services</h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive technology education and software solutions to prepare students for the digital future
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
              {/* Robotics */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="p-4 bg-orange-100 rounded-full group-hover:bg-orange-200 transition-colors">
                    <Cpu className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Robotics</h3>
                  <p className="text-sm text-slate-600 text-center">
                    Build and program robots while learning engineering principles and problem-solving skills
                  </p>
                </CardContent>
              </Card>

              {/* IoT */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                    <Zap className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">IoT</h3>
                  <p className="text-sm text-slate-600 text-center">
                    Connect devices and create smart solutions using Internet of Things technologies
                  </p>
                </CardContent>
              </Card>

              {/* Mobile App Development */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="p-4 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                    <Smartphone className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Mobile App Development</h3>
                  <p className="text-sm text-slate-600 text-center">
                    Create mobile applications for iOS and Android platforms using modern frameworks
                  </p>
                </CardContent>
              </Card>

              {/* mBlock */}
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">mBlock</h3>
                  <p className="text-sm text-slate-600 text-center">
                    Visual programming platform for beginners to learn coding through interactive projects
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Start Your Tech Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have transformed their future through our comprehensive tech education
                  programs
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Enroll Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} TechEdu. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
