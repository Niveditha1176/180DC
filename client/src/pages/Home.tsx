import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { 
  ArrowRight, 
  BarChart3, 
  CheckCircle2, 
  Globe2, 
  Lightbulb, 
  LineChart, 
  Users, 
  Target,
  Search,
  Zap,
  Briefcase,
  Network,
  Heart,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  Award,
  Camera
} from "lucide-react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ContactDialog } from "@/components/ContactDialog";

const teamMembers = [
  { name: "Niharika Haridas", role: "President", email: "n.haridas@180dc.org" },
  { name: "Sai Ayush Pattnaik", role: "Vice President", email: "s.pattnaik@180dc.org" },
  { name: "Sajith Krishnaa", role: "General Secretary", email: "s.krishnaa@180dc.org" },
  { name: "Vyshag V", role: "Business Strategy", email: "vyshag@180dc.org" },
  { name: "Surya Vamsi", role: "Marketing Director", email: "s.vamsi@180dc.org" },
  { name: "Anish Patro", role: "Technical Director", email: "a.patro@180dc.org" },
  { name: "Ashley Sanu", role: "Finance & Legal", email: "a.sanu@180dc.org" },
  { name: "Jerome Mathew", role: "HR Director", email: "jvarghese@180dc.org" },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* HERO SECTION - 3D Layered Design */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 mesh-gradient"></div>
          
          {/* Floating Blobs */}
          <motion.div 
            style={{ y }}
            className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#73B744]/30 to-[#049648]/20 blob float"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
            className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-[#049648]/20 to-[#73B744]/10 blob float"
            initial={{ animationDelay: "2s" }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-br from-[#73B744]/20 to-transparent rounded-full blur-2xl float"
            style={{ animationDelay: "4s" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ 
            backgroundImage: `linear-gradient(#73B744 1px, transparent 1px), linear-gradient(90deg, #73B744 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>

          <motion.div 
            style={{ opacity }}
            className="container-custom relative z-10 text-center max-w-5xl mx-auto pt-32"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-[#73B744]/20 rounded-full shadow-lg shadow-[#73B744]/10"
              >
                <Sparkles className="w-4 h-4 text-[#73B744]" />
                <span className="text-sm font-semibold text-[#049648]">First 180DC Branch in VIT</span>
              </motion.div>
              
              {/* Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="text-gray-900">Consulting for</span>
                <br />
                <span className="gradient-text">Social Impact</span>
              </motion.h1>
              
              {/* Subheading */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
              >
                We bridge the gap between ambitious students and organizations 
                driving positive change in the world.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <ContactDialog type="join">
                  <Button size="lg" className="group w-full sm:w-auto h-14 px-8 text-lg bg-gradient-to-r from-[#73B744] to-[#049648] hover:from-[#049648] hover:to-[#73B744] text-white font-semibold rounded-full shadow-xl shadow-[#73B744]/30 transition-all duration-300">
                    Join Our Team 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ContactDialog>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto h-14 px-8 text-lg border-2 border-[#049648] text-[#049648] bg-white hover:bg-[#049648] hover:text-white rounded-full transition-all duration-300 font-semibold" 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}
                >
                  View Our Work
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16"
              >
                {[
                  { value: "50+", label: "Projects" },
                  { value: "100+", label: "Consultants" },
                  { value: "15K+", label: "Lives Impacted" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#73B744]">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </section>

        {/* ABOUT SECTION - Glass Cards */}
        <section id="about" className="section-padding bg-gray-50 relative noise">
          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="space-y-6"
              >
                <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">About Us</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Empowering the Next Generation of 
                  <span className="text-[#049648]"> Social Leaders</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Established in January 2024, 180DC VIT Chennai taps into Chennai's dynamic spirit - 
                  a megacity with over 900 NGOs and social enterprises. We're the first 180DC branch 
                  in VIT, bringing world-class consulting to India's social sector.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our diverse team of engineering, business, and law students collaborates to deliver 
                  real-world solutions that create measurable social impact.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Pro-bono Consulting", "Student-led", "Global Network"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-[#73B744]/20 rounded-full text-sm font-medium text-[#049648]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right - 3D Card Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative"
              >
                <div className="relative">
                  {/* Background Cards */}
                  <div className="absolute -top-4 -left-4 w-full h-full bg-[#73B744]/10 rounded-3xl transform rotate-3"></div>
                  <div className="absolute -top-2 -left-2 w-full h-full bg-[#049648]/10 rounded-3xl transform rotate-1"></div>
                  
                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { icon: <Globe2 className="w-8 h-8" />, value: "180+", label: "Global Branches" },
                        { icon: <Users className="w-8 h-8" />, value: "10K+", label: "Consultants" },
                        { icon: <Award className="w-8 h-8" />, value: "#1", label: "University Consultancy" },
                        { icon: <TrendingUp className="w-8 h-8" />, value: "900+", label: "Chennai NGOs" },
                      ].map((item, idx) => (
                        <div key={idx} className="text-center p-4 rounded-2xl bg-gray-50 hover:bg-[#73B744]/5 transition-colors">
                          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-2xl text-white mb-3">
                            {item.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                          <div className="text-sm text-gray-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION - Modern Cards */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Why Join Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Transform Your Career
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Briefcase className="h-7 w-7" />,
                  title: "Real Consulting Experience",
                  desc: "Work on live projects for NGOs and social enterprises. Build a portfolio that sets you apart.",
                  gradient: "from-emerald-500 to-teal-600"
                },
                {
                  icon: <Network className="h-7 w-7" />,
                  title: "Global Network Access",
                  desc: "Connect with 10,000+ consultants across 180+ branches worldwide. Unlimited opportunities.",
                  gradient: "from-[#73B744] to-[#049648]"
                },
                {
                  icon: <Users className="h-7 w-7" />,
                  title: "Cross-disciplinary Teams",
                  desc: "Collaborate with students from engineering, business, law, and social sciences.",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  icon: <Heart className="h-7 w-7" />,
                  title: "Measurable Impact",
                  desc: "Create tangible change in communities. See your work make a real difference.",
                  gradient: "from-lime-500 to-green-600"
                }
              ].map((card, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative card-3d"
                >
                  <div className="relative bg-white border border-gray-100 rounded-2xl p-8 h-full hover:border-[#73B744]/30 transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Creative Grid */}
        <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#73B744]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049648]/5 rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Our Services</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                What We Deliver
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <LineChart className="h-8 w-8" />, title: "Strategy & Growth", desc: "Market entry and sustainable business modeling" },
                { icon: <Zap className="h-8 w-8" />, title: "Operations", desc: "Process optimization and efficiency improvement" },
                { icon: <BarChart3 className="h-8 w-8" />, title: "Impact Analysis", desc: "Data-driven measurement frameworks" },
                { icon: <Globe2 className="h-8 w-8" />, title: "Digital Strategy", desc: "Technology adoption and digital presence" }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#73B744]/30 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#73B744]/10 to-[#049648]/10 rounded-2xl flex items-center justify-center text-[#73B744] mb-5 group-hover:bg-gradient-to-br group-hover:from-[#73B744] group-hover:to-[#049648] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION - Timeline Style */}
        <section id="process" className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                How We Work
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#73B744] via-[#049648] to-[#73B744] -translate-y-1/2 rounded-full"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Understand", icon: <Search className="w-6 h-6" />, desc: "Deep dive into client challenges" },
                  { step: "02", title: "Analyze", icon: <BarChart3 className="w-6 h-6" />, desc: "Data-driven insights" },
                  { step: "03", title: "Collaborate", icon: <Users className="w-6 h-6" />, desc: "Co-create solutions" },
                  { step: "04", title: "Deliver", icon: <CheckCircle2 className="w-6 h-6" />, desc: "Actionable roadmap" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative text-center"
                  >
                    <div className="relative z-10 mx-auto w-20 h-20 bg-white border-4 border-[#73B744] rounded-full flex items-center justify-center text-[#73B744] shadow-lg shadow-[#73B744]/20 mb-6">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-[#73B744] tracking-wider">{item.step}</span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE GALLERY TEASER */}
        <section id="gallery" className="section-padding bg-gray-50 overflow-hidden">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-12"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Join Our Experiences
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
                Be part of a vibrant community making real impact through consulting
              </p>
            </motion.div>

            {/* Gallery Placeholder - Will be replaced with actual images */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                    className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#73B744]/20 to-[#049648]/30 cursor-pointer group"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-[#73B744]/30 rounded-xl flex items-center justify-center">
                        <Camera className="w-8 h-8 text-[#73B744]/40" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                ))}
              </div>

              {/* Overlay CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-center mt-10"
              >
                <Link href="/about">
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold bg-gradient-to-r from-[#73B744] to-[#049648] text-white rounded-full shadow-lg shadow-[#73B744]/20 group">
                    See More About Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA SECTION - Gradient & Glow */}
        <section id="contact" className="relative py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          
          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#73B744]/20 rounded-full blur-[128px]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#049648]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#73B744]/10 rounded-full blur-3xl"></div>

          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Create
                <br />
                <span className="gradient-text">Real Impact?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-xl mx-auto mb-10">
                Join our community of change-makers or partner with us for transformative consulting solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <ContactDialog type="join">
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-[#73B744] to-[#049648] hover:from-[#049648] hover:to-[#73B744] text-white rounded-full shadow-xl shadow-[#73B744]/30 transition-all duration-300">
                    Join Our Team
                  </Button>
                </ContactDialog>
                
                <ContactDialog type="partner">
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 rounded-full transition-all duration-300">
                    Partner With Us
                  </Button>
                </ContactDialog>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Bar */}
        <section className="py-6 bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4 text-[#73B744]" />
                <span className="text-sm">VIT Chennai, Kelambakkam - Vandalur Rd</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <a href="mailto:vitc@180dc.org" className="flex items-center gap-2 text-[#049648] hover:underline">
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">vitc@180dc.org</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
