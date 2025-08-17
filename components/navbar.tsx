"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Facebook, } from "lucide-react"
import { Linkedin } from "lucide-react"; 
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "For Schools / Colleges", href: "/tieup" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    //{ name: "Blogs", href: "/blogs" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/skill-decode-logo.jpg"
              alt="Skill Decode Tech - Technology Education Institute"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  pathname === item.href
                    ? "bg-blue-100/80 text-blue-700 shadow-sm backdrop-blur-sm"
                    : "text-black-700 hover:bg-white/60 hover:text-blue-600 hover:shadow-sm backdrop-blur-sm"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex space-x-2">
              <a
                href="https://www.instagram.com/skill_decode_tech?igsh=MXNzdmU2dWJwZDc0dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-50/80 text-pink-600 hover:bg-pink-100/80 hover:text-pink-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AJ5dXL1xr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50/80 text-blue-600 hover:bg-blue-100/80 hover:text-blue-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/skill-decode-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50/80 text-blue-600 hover:bg-blue-100/80 hover:text-blue-700 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100/80 transition-all duration-300 backdrop-blur-sm"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/50"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-blue-600 bg-blue-50/80 shadow-sm"
                    : "hover:text-blue-600 hover:bg-blue-50/60"
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-2 px-4 py-2">
              <a
                href="https://www.instagram.com/skill_decode_tech?igsh=MXNzdmU2dWJwZDc0dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-50/80 text-pink-600 hover:bg-pink-100/80 transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1AJ5dXL1xr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50/80 text-blue-600 hover:bg-blue-100/80 transition-all duration-300"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
