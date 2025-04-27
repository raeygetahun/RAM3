import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Package, Clock, BarChart3, Shield, Globe } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Logistics truck on highway"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Delivering Excellence in Logistics</h1>
            <p className="text-xl mb-8">
              Your trusted partner for reliable, efficient, and safe transportation solutions across the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">Get a Quote</Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-6 text-lg"
              >
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Our Logistics Services</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              We offer comprehensive logistics solutions tailored to meet your specific needs, ensuring timely and safe
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Truck className="h-10 w-10 text-[#FF6600]" />,
                title: "Freight Shipping",
                description: "Reliable transportation for your goods across the country with our modern fleet.",
              },
              {
                icon: <Package className="h-10 w-10 text-[#FF6600]" />,
                title: "Express Delivery",
                description: "Fast and efficient delivery services for time-sensitive shipments.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#FF6600]" />,
                title: "Just-in-Time Delivery",
                description: "Precision logistics to support your just-in-time inventory management.",
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-[#FF6600]" />,
                title: "Supply Chain Solutions",
                description: "Comprehensive supply chain management to optimize your logistics operations.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#FF6600]" />,
                title: "Secure Transport",
                description: "Specialized secure transport for high-value or sensitive cargo.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#FF6600]" />,
                title: "Cross-Border Logistics",
                description: "Expert handling of international shipping and customs requirements.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-[#F2F2F2] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{service.title}</h3>
                <p className="text-[#333333] mb-4">{service.description}</p>
                <Link href="/services" className="text-[#FF6600] font-medium hover:underline">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Why Choose TransCargo</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              With over 25 years of experience, we've built our reputation on reliability, efficiency, and customer
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Modern truck fleet"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex">
                  <div className="mr-4 bg-[#FF6600] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-1">Modern Fleet</h3>
                    <p className="text-[#333333]">
                      Our well-maintained, state-of-the-art trucks ensure reliable and efficient transportation.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-[#FF6600] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-1">Experienced Team</h3>
                    <p className="text-[#333333]">
                      Our professional drivers and logistics experts bring years of industry experience.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-[#FF6600] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-1">Nationwide Coverage</h3>
                    <p className="text-[#333333]">
                      Extensive network covering all major routes and destinations across the country.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 bg-[#FF6600] text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#003366] mb-1">Customer Satisfaction</h3>
                    <p className="text-[#333333]">
                      We pride ourselves on our high customer satisfaction rates and personalized service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Logistics?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss how our logistics solutions can help your business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-6 text-lg"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">What Our Clients Say</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TransCargo has been instrumental in streamlining our supply chain. Their reliable service and professional team have made logistics the least of our worries.",
                author: "John Smith",
                company: "ABC Manufacturing",
              },
              {
                quote:
                  "We've been working with TransCargo for over 5 years, and they've consistently delivered on time and with care. A true logistics partner.",
                author: "Sarah Johnson",
                company: "XYZ Retail Group",
              },
              {
                quote:
                  "Their cross-border logistics expertise has helped us expand into new markets seamlessly. Highly recommended for international shipping needs.",
                author: "Michael Chen",
                company: "Global Exports Inc.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#F2F2F2] p-6 rounded-lg">
                <div className="text-[#FF6600] text-4xl font-serif mb-4">"</div>
                <p className="text-[#333333] mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-[#003366]">{testimonial.author}</p>
                  <p className="text-[#333333]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
