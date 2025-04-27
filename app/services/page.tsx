import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Truck, Package, BarChart3, Globe, Warehouse, CheckCircle } from "lucide-react"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#003366] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=400&width=1920"
            alt="Logistics services"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Logistics Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive transportation and logistics solutions tailored to your business needs.
          </p>
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

          <div className="grid grid-cols-1 gap-16">
            {/* Freight Shipping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Truck className="h-10 w-10 text-[#FF6600] mr-4" />
                  <h3 className="text-2xl font-bold text-[#003366]">Freight Shipping</h3>
                </div>
                <p className="text-[#333333] mb-4">
                  Our core service provides reliable transportation for your goods across the country. With our modern
                  fleet of trucks and experienced drivers, we ensure your freight arrives safely and on time.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full truckload (FTL) shipping for large shipments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Less than truckload (LTL) options for smaller shipments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Temperature-controlled transport for sensitive goods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time tracking and status updates</span>
                  </li>
                </ul>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">Get a Freight Quote</Button>
              </div>
              <div className="relative h-[300px] order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Freight shipping"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Express Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Express delivery"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Package className="h-10 w-10 text-[#FF6600] mr-4" />
                  <h3 className="text-2xl font-bold text-[#003366]">Express Delivery</h3>
                </div>
                <p className="text-[#333333] mb-4">
                  When time is of the essence, our express delivery service ensures your shipments reach their
                  destination as quickly as possible. We offer expedited shipping options to meet your urgent delivery
                  needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Same-day delivery options for local shipments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Overnight delivery for longer distances</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority handling and expedited processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated vehicles for time-critical shipments</span>
                  </li>
                </ul>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">Learn About Express Options</Button>
              </div>
            </div>

            {/* Warehousing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Warehouse className="h-10 w-10 text-[#FF6600] mr-4" />
                  <h3 className="text-2xl font-bold text-[#003366]">Warehousing & Distribution</h3>
                </div>
                <p className="text-[#333333] mb-4">
                  Our warehousing solutions provide secure storage for your inventory, with efficient distribution
                  services to ensure your products reach their destinations on schedule.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Short and long-term storage options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Climate-controlled facilities for sensitive goods</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Inventory management and tracking systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Order fulfillment and distribution services</span>
                  </li>
                </ul>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">Explore Warehousing Solutions</Button>
              </div>
              <div className="relative h-[300px] order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Warehousing facilities"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Supply Chain Solutions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Supply chain management"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-10 w-10 text-[#FF6600] mr-4" />
                  <h3 className="text-2xl font-bold text-[#003366]">Supply Chain Solutions</h3>
                </div>
                <p className="text-[#333333] mb-4">
                  Our comprehensive supply chain management services help optimize your logistics operations from end to
                  end, improving efficiency and reducing costs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Supply chain analysis and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Integrated transportation and warehousing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Demand forecasting and inventory planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance metrics and continuous improvement</span>
                  </li>
                </ul>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">Optimize Your Supply Chain</Button>
              </div>
            </div>

            {/* Cross-Border Logistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center mb-4">
                  <Globe className="h-10 w-10 text-[#FF6600] mr-4" />
                  <h3 className="text-2xl font-bold text-[#003366]">Cross-Border Logistics</h3>
                </div>
                <p className="text-[#333333] mb-4">
                  Our expertise in international shipping and customs requirements makes cross-border logistics
                  seamless, helping you expand your reach to new markets.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>International shipping to major global markets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customs documentation and compliance assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Import/export regulations expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#FF6600] mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cross-border supply chain optimization</span>
                  </li>
                </ul>
                <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white">Explore International Options</Button>
              </div>
              <div className="relative h-[300px] order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Cross-border logistics"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[#F2F2F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#003366] mb-4">Industries We Serve</h2>
            <p className="text-[#333333] max-w-2xl mx-auto">
              Our logistics solutions are tailored to meet the specific needs of various industries, providing
              specialized services for each sector.
            </p>
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#003366] mb-2">{item.industry}</h3>
                <p className="text-[#333333]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#003366] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Streamline Your Logistics?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Contact us today to discuss how our services can be tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#FF6600] hover:bg-[#FF6600]/90 text-white px-8 py-6 text-lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#003366] px-8 py-6 text-lg"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
