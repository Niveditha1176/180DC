import { motion } from "framer-motion";
import { DollarSign, ArrowRight, ArrowLeft, Handshake, TrendingUp, Package, Tag, CheckCircle2, Sparkles, Wallet, PiggyBank, LineChart, Award } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/card";
import { ContactDialog } from "@/components/ContactDialog";
import heroImage from "@assets/stock_images/financial_sustainabi_4d99632a.jpg";
import secondaryImage from "@assets/stock_images/financial_sustainabi_df0e9e0b.jpg";
import revenueImage from "@assets/image_1766932887818.png";
import benefitsCycleImage from "@assets/image_1766932999901.png";

const stats = [
  { icon: Wallet, value: "$2M+", label: "Funds Secured" },
  { icon: PiggyBank, value: "75+", label: "Grants Obtained" },
  { icon: LineChart, value: "60%", label: "Revenue Growth" },
  { icon: Award, value: "100+", label: "Success Stories" },
];

const services = [
  {
    title: "Strategic Partnerships & Grants",
    icon: Handshake,
    image: benefitsCycleImage,
    items: [
      { title: "Partnership Analysis", description: "We analyse your current partnerships and grants to determine their effectiveness and alignment with your goals." },
      { title: "Partner Identification", description: "We help identify potential partners whose values and skills align with your organisation's mission." },
      { title: "Grant Recommendations", description: "We analyse potential grants and provide recommendations on how to secure them successfully." }
    ]
  },
  {
    title: "Fundraising Strategy",
    icon: TrendingUp,
    image: revenueImage,
    items: [
      { title: "Mission Deep Dive", description: "We take a deep dive into your organisation's mission and current programs to understand your goals." },
      { title: "Campaign Analysis", description: "We analyse your current fundraising efforts and propose new events and campaigns aligned with your mission." },
      { title: "Digital Fundraising", description: "We identify digital fundraising methods including online donation portals and social media campaigns." }
    ]
  },
  {
    title: "Offering Assessment",
    icon: Package,
    image: heroImage,
    items: [
      { title: "Offerings Analysis", description: "We conduct thorough analysis of your current offerings and assess their appeal to your target market." },
      { title: "Mission Alignment", description: "We evaluate how well your offerings align with your organisation's mission and values." },
      { title: "Alternative Recommendations", description: "We provide recommendations for offerings that may better align with your mission and market." }
    ]
  },
  {
    title: "Pricing Strategy",
    icon: Tag,
    image: secondaryImage,
    items: [
      { title: "Competitive Analysis", description: "We perform comprehensive analysis of competitive landscape and industry trends." },
      { title: "Financial Modelling", description: "We develop dynamic and segmented pricing strategies that maximise revenue while remaining competitive." },
      { title: "Promotions Design", description: "We help design promotions and discounts that resonate with your target market and maximise ROI." }
    ]
  }
];

export default function FinancialSustainability() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section with Background Image */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Financial Sustainability" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-2xl flex items-center justify-center text-white shadow-2xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <DollarSign className="w-8 h-8" />
                  </motion.div>
                  <span className="text-[#73B744] font-semibold text-lg">Our Services</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Financial{" "}
                  <span className="bg-gradient-to-r from-[#73B744] to-[#049648] bg-clip-text text-transparent">
                    Sustainability
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Helping organisations manage budgets effectively, secure grants and loans, and develop strategies for long-term financial success.
                </p>

                <ContactDialog type="partner">
                  <Button size="lg" className="bg-gradient-to-r from-[#73B744] to-[#049648] text-white rounded-full px-8">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </ContactDialog>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Ribbon */}
        <section className="py-12 bg-gradient-to-r from-[#73B744] to-[#049648] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }} />
          </div>
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-80" />
                  <div className="text-4xl md:text-5xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Support Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How We Can Support Your Organisation
                </h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    At 180 Degrees Consulting, we help organisations to manage their budget and funds effectively to secure grants and loans. Our team has extensive experience in financial management and works closely with social impact organisations.
                  </p>
                  <p>
                    Our goal is to help organisations achieve financial sustainability and long-term success through sound financial management practices and strategic planning.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={secondaryImage} alt="Financial Solutions" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#049648]/40 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-2xl flex items-center justify-center shadow-xl">
                  <PiggyBank className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Our Financial Sustainability Services
            </motion.h2>
            
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotateY: 15 }}
                        className="w-14 h-14 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-xl flex items-center justify-center text-white shadow-lg"
                      >
                        <service.icon className="w-7 h-7" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                          className="flex gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow"
                        >
                          <CheckCircle2 className="w-6 h-6 text-[#73B744] flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  >
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <img src={service.image} alt={service.title} className="w-full h-72 object-cover" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#73B744]/20 rounded-full blur-2xl" />
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#049648]/20 rounded-full blur-2xl" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#73B744] to-[#049648] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }} />
          </div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <Sparkles className="w-12 h-12 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Financial Resilience?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Partner with our team to develop sustainable financial strategies that secure your organisation's future and amplify your impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <ContactDialog type="partner">
                  <Button size="lg" className="bg-white text-[#049648] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl">
                    Work With Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </ContactDialog>
                <Link href="/">
                  <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-semibold shadow-xl">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back to Home
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
