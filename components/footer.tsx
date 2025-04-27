import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TransCargo Logistics</h3>
            <p className="mb-4">
              Providing reliable trucking and logistics solutions since 1995. Your trusted partner for all your
              transportation needs.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#99CCFF]" scroll={true}>
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-[#99CCFF]" scroll={true}>
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-[#99CCFF]" scroll={true}>
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-[#99CCFF]" scroll={true}>
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#99CCFF]" scroll={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#99CCFF]" scroll={true}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#99CCFF]" scroll={true}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#99CCFF]" scroll={true}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#99CCFF]" scroll={true}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Freight Shipping
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Supply Chain Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#99CCFF]" scroll={true}>
                  Cross-Border Logistics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#FF6600]" />
                <span>123 Logistics Way, Trucking City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#FF6600]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#FF6600]" />
                <span>info@transcargo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} TransCargo Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
