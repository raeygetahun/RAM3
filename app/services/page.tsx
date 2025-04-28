"use client"

import Link from "next/link"
import { Truck, Package, BarChart3, Globe, Warehouse, CheckCircle, MapPin } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { AnimatedButton } from "@/components/ui/animated-button"
import { motion } from "framer-motion"

export default function Services() {
  // Service data array to make the code more maintainable
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-[#FF6600]" />,
      title: "Freight Shipping",
      description:
        "Our core service provides reliable transportation for your goods across the country. With our modern fleet of trucks and experienced drivers, we ensure your freight arrives safely and on time.",
      features: [
        "Full truckload (FTL) shipping for large shipments",
        "Less than truckload (LTL) options for smaller shipments",
        "Temperature-controlled transport for sensitive goods",
        "Real-time tracking and status updates",
      ],
      cta: "Get a Freight Quote",
      delay: 0.4,
      iconDelay: 0.5,
      featureDelay: 0.6,
    },
    {
      icon: <Package className="h-10 w-10 text-[#FF6600]" />,
      title: "Express Delivery",
      description:
        "When time is of the essence, our express delivery service ensures your shipments reach their destination as quickly as possible. We offer expedited shipping options to meet your urgent delivery needs.",
      features: [
        "Same-day delivery options for local shipments",
        "Overnight delivery for longer distances",
        "Priority handling and expedited processing",
        "Dedicated vehicles for time-critical shipments",
      ],
      cta: "Learn About Express Options",
      delay: 0.6,
      iconDelay: 0.7,
      featureDelay: 0.8,
    },
    {
      icon: <Warehouse className="h-10 w-10 text-[#FF6600]" />,
      title: "Warehousing & Distribution",
      description:
        "Our warehousing solutions provide secure storage for your inventory, with efficient distribution services to ensure your products reach their destinations on schedule.",
      features: [
        "Short and long-term storage options",
        "Climate-controlled facilities for sensitive goods",
        "Inventory management and tracking systems",
        "Order fulfillment and distribution services",
      ],
      cta: "Explore Warehousing Solutions",
      delay: 0.8,
      iconDelay: 0.9,
      featureDelay: 1.8,
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-[#FF6600]" />,
      title: "Supply Chain Solutions",
      description:
        "Our comprehensive supply chain management services help optimize your logistics operations from end to end, improving efficiency and reducing costs.",
      features: [
        "Supply chain analysis and optimization",
        "Integrated transportation and warehousing",
        "Demand forecasting and inventory planning",
        "Performance metrics and continuous improvement",
      ],
      cta: "Optimize Your Supply Chain",
      delay: 1.0,
      iconDelay: 1.1,
      featureDelay: 1.8,
    },
    {
      icon: <Globe className="h-10 w-10 text-[#FF6600]" />,
      title: "Cross-Border Logistics",
      description:
        "Our expertise in international shipping and customs requirements makes cross-border logistics seamless, helping you expand your reach to new markets.",
      features: [
        "International shipping to major global markets",
        "Customs documentation and compliance assistance",
        "Import/export regulations expertise",
        "Cross-border supply chain optimization",
      ],
      cta: "Explore International Options",
      delay: 1.2,
      iconDelay: 1.3,
      featureDelay: 2.8,
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#FF6600]" />,
      title: "Local Pickup & Delivery",
      description:
        "We offer reliable local pickup and delivery services to help businesses move goods quickly within the region. Perfect for last-mile deliveries and short-haul transportation needs.",
      features: [
        "Flexible scheduling for pickups and drop-offs",
        "Fast service within the local area",
        "Ideal for small businesses and frequent deliveries",
        "Professional, friendly drivers you can trust",
      ],
      cta: "Schedule a Pickup",
      delay: 1.4,
      iconDelay: 1.5,
      featureDelay: 2.8,
    },
    
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          {/* <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Logistics services"
            fill
            className="object-cover opacity-30"
          /> */}
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Logistics Services</h1>
          <AnimatedSection delay={1.3}>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive transportation and logistics solutions tailored to your business needs.
            </p>
            </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Comprehensive Logistics Solutions</h2>
              <p className="text-[#333333] max-w-2xl mx-auto">
                At TransCargo, we offer a wide range of logistics services designed to meet the diverse needs of
                businesses across industries.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                delay={service.delay}
                className="bg-[#F2F2F2] p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <AnimatedIcon delay={service.iconDelay} className="mr-4">
                    {service.icon}
                  </AnimatedIcon>
                  <h3 className="text-2xl font-bold text-[#003366]">{service.title}</h3>
                </div>
                <p className="text-[#333333] mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: service.featureDelay + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link href="/contact" scroll={true}>
                  <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">
                    {service.cta}
                  </AnimatedButton>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Industries We Serve</h2>
              
          <AnimatedSection delay={0.5}>
              <p className="text-[#333333] max-w-2xl mx-auto">
                Our logistics solutions are tailored to meet the specific needs of various industries, providing
                specialized services for each sector.
              </p>
              </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                industry: "Manufacturing",
                description: "Just-in-time delivery and supply chain solutions for manufacturers of all sizes.",
              },
              {
                industry: "Retail",
                description:
                  "Distribution and fulfillment services to keep your stores stocked and customers satisfied.",
              },
              {
                industry: "E-commerce",
                description: "Fast, reliable shipping solutions to meet the demands of online retail.",
              },
              {
                industry: "Food & Beverage",
                description: "Temperature-controlled transport for perishable goods and food products.",
              },
              {
                industry: "Pharmaceuticals",
                description: "Secure, compliant transportation for sensitive medical supplies and pharmaceuticals.",
              },
              {
                industry: "Construction",
                description: "Heavy equipment and building materials transport for construction projects.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#003366] mb-2">{item.industry}</h3>
                <p className="text-[#333333]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
            
          <AnimatedSection delay={0.3}>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Contact us today to discuss how our services can be tailored to your specific needs.
            </p>
            </AnimatedSection>
          <AnimatedSection delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" scroll={true}>
                <AnimatedButton className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
                  Request a Quote
                </AnimatedButton>
              </Link>
              <Link href="/contact" scroll={true}>
                <AnimatedButton
                  variant="outline"
                  className="border-white text-black hover:text-[#003366] px-8 py-6 text-lg"
                  >
                  Contact Our Team
                </AnimatedButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
