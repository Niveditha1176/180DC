import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Monitor, Megaphone, DollarSign, BarChart3, Settings, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ContactDialog } from "@/components/ContactDialog";

const services = [
  { name: "Digital Transformation", href: "/services/digital-transformation", icon: Monitor },
  { name: "Marketing & Engagement", href: "/services/marketing-engagement", icon: Megaphone },
  { name: "Financial Sustainability", href: "/services/financial-sustainability", icon: DollarSign },
  { name: "Market Assessment", href: "/services/market-assessment", icon: BarChart3 },
  { name: "Operational Efficiency", href: "/services/operational-efficiency", icon: Settings },
  { name: "Impact Measurement", href: "/services/impact-measurement", icon: Target },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About", href: "/about", isPage: true },
    { name: "Process", href: "#process", isPage: false },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/images/180dc-logo.avif" 
            alt="180 Degrees Consulting" 
            className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
          />
          <div className="hidden sm:flex flex-col border-l border-[#73B744]/30 pl-3">
            <span className="text-xs font-bold text-gray-900 tracking-wide">VIT CHENNAI</span>
            <span className="text-[10px] text-gray-500">Est. 2024</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={`px-4 py-2 text-sm font-medium flex items-center gap-1 rounded-full transition-colors ${
                isServicesOpen ? "text-[#73B744] bg-[#73B744]/5" : "text-gray-700 hover:text-[#73B744] hover:bg-[#73B744]/5"
              }`}
              data-testid="button-services-dropdown"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#73B744]/5 hover:text-[#73B744] transition-colors group"
                    data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="w-10 h-10 bg-gray-100 group-hover:bg-[#73B744]/10 rounded-xl flex items-center justify-center transition-colors">
                      <service.icon className="w-5 h-5 text-gray-500 group-hover:text-[#73B744]" />
                    </div>
                    <span className="font-medium">{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#73B744] transition-colors rounded-full hover:bg-[#73B744]/5"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#73B744] transition-colors rounded-full hover:bg-[#73B744]/5"
              >
                {link.name}
              </a>
            )
          ))}
          <div className="ml-4">
            <ContactDialog type="join">
              <Button className="bg-gradient-to-r from-[#73B744] to-[#049648] hover:from-[#049648] hover:to-[#73B744] text-white font-semibold rounded-full px-6 shadow-md shadow-[#73B744]/20 transition-all duration-300">
                Join Us
              </Button>
            </ContactDialog>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b shadow-lg p-6 flex flex-col space-y-2 animate-in slide-in-from-top-5">
          {/* Mobile Services */}
          <div className="py-2">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-lg font-medium text-gray-700 px-2 py-1"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="mt-2 ml-4 space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => { setIsServicesOpen(false); setIsMobileMenuOpen(false); }}
                    className="flex items-center gap-2 py-2 text-gray-600 hover:text-[#73B744]"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-700 hover:text-[#73B744] px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-lg font-medium text-gray-700 hover:text-[#73B744] px-2 py-1"
              >
                {link.name}
              </a>
            )
          ))}
          <ContactDialog type="join">
            <Button className="w-full bg-gradient-to-r from-[#73B744] to-[#049648] text-white font-semibold rounded-full mt-2">
              Join Us
            </Button>
          </ContactDialog>
        </div>
      )}
    </nav>
  );
}
