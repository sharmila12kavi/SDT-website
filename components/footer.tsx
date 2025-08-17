import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    //{ name: "Blogs", href: "/blogs" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/skill-decode-logo.jpg" alt="Skill Decode Tech" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering the next generation with cutting-edge technology skills through hands-on, practical learning
              experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/skill_decode_tech?igsh=MXNzdmU2dWJwZDc0dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AJ5dXL1xr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
  href="https://www.linkedin.com/company/skill-decode-tech/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 rounded-full bg-blue-50/80 text-blue-600 hover:bg-blue-100/80 hover:text-blue-800 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
  aria-label="Follow us on LinkedIn"
>
  <Linkedin className="h-5 w-5" />
</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-blue-200 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <div className="space-y-4 text--300">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>9884954247</p>
                  <p>6380607261</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="break-all">skilldecodetech@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="leading-relaxed">
                  No:60/33, Pillayar Kovil Street,
                  <br />
                  Zamin Royapettah, Chromepet,
                  <br />
                  Chennai – 600044
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Skill Decode Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
