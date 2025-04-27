import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Company headquarters"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TransCargo Logistics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A trusted name in the logistics industry with over 25 years of experience delivering excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#003366] mb-6">Our Story</h2>
              <p className="text-[#333333] mb-4">
                Founded in 1995, TransCargo Logistics began with just three trucks and a vision to provide reliable
                transportation services. Our founder, Robert Johnson, recognized the need for a logistics company that
                truly understood the challenges businesses face in moving their goods efficiently and safely.
              </p>
              <p className="text-[#333333] mb-4">
                From those humble beginnings, we've grown into one of the region's most trusted logistics providers,
                with a fleet of over 200 vehicles and a comprehensive range of services that span the entire supply
                chain.
              </p>
              <p className="text-[#333333] mb-4">
                Throughout our journey, we've remained committed to our founding principles: reliability, integrity, and
                customer satisfaction. These values continue to guide every aspect of our operations as we expand our
                services and reach.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Company history"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Mission</h3>
              <p className="text-[#333333] mb-4">
                To provide innovative logistics solutions that optimize our clients' supply chains, enabling them to
                focus on their core business while we handle the complexities of transportation and distribution.
              </p>
              <p className="text-[#333333]">
                We strive to deliver value through reliability, efficiency, and exceptional customer service, building
                long-term partnerships with our clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Vision</h3>
              <p className="text-[#333333] mb-4">
                To be the leading logistics provider known for setting industry standards in service quality,
                technological innovation, and environmental responsibility.
              </p>
              <p className="text-[#333333]">
                We aim to expand our reach while maintaining the personalized service that has been the cornerstone of
                our success, adapting to the evolving needs of global commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Core Values</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              These principles guide our decisions, shape our culture, and define how we interact with our clients,
              partners, and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-[#FF6600]" />,
                title: "Reliability",
                description:
                  "We deliver on our promises, ensuring consistent and dependable service that our clients can count on.",
              },
              {
                icon: <Award className="h-12 w-12 text-[#FF6600]" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our operations, continuously improving our processes and services.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#FF6600]" />,
                title: "Teamwork",
                description:
                  "We believe in the power of collaboration, working together to achieve common goals and deliver exceptional results.",
              },
              {
                icon: <Clock className="h-12 w-12 text-[#FF6600]" />,
                title: "Efficiency",
                description:
                  "We optimize our operations to maximize efficiency, saving time and resources for our clients and ourselves.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-[#F2F2F2] p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{value.title}</h3>
                <p className="text-[#333333]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Leadership Team</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Meet the experienced professionals who guide our company's strategic direction and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Johnson",
                position: "Founder & CEO",
                bio: "With over 30 years in the logistics industry, Robert founded TransCargo with a vision to revolutionize how businesses handle their transportation needs.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Williams",
                position: "Chief Operations Officer",
                bio: "Sarah brings 20 years of supply chain expertise, ensuring our operations run smoothly and efficiently while maintaining our high standards.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                position: "Chief Technology Officer",
                bio: "Michael leads our technological innovations, implementing systems that keep us at the forefront of logistics technology and efficiency.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Jennifer Lopez",
                position: "VP of Customer Relations",
                bio: "Jennifer ensures our clients receive exceptional service, building and maintaining the strong relationships that are central to our business.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Smith",
                position: "Fleet Manager",
                bio: "David oversees our extensive fleet operations, ensuring our vehicles are well-maintained and operated safely and efficiently.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Thompson",
                position: "HR Director",
                bio: "Lisa cultivates our company culture and ensures we attract and retain the talented professionals who make our success possible.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#003366]">{leader.name}</h3>
                <p className="text-[#FF6600] font-medium mb-2">{leader.position}</p>
                <p className="text-[#333333]">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're looking for a logistics partner or interested in career opportunities, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-6 text-lg"
            >
              <Link href="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
