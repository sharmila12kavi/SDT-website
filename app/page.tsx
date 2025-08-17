import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "Skill Decode Tech - From Code to Creativity | Technology Education Institute Chennai",
  description:
    "Leading technology education institute in Chennai offering hands-on training in Web Development, Mobile App Development, Robotics, AI, IoT, 3D Printing for students Grade 2 to College level.",
  keywords:
    "technology education, coding classes Chennai, web development course, mobile app development, robotics training, AI course, IoT training, programming classes, skill development, tech institute Chennai",
}

export default function HomePage() {
  return <HomePageClient />
}
