import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Heart,
  Zap,
  TrendingUp,
  Globe2,
  Award,
  ArrowRight,
  Clock,
  MessageCircle,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Quote
} from "lucide-react";
import { Link } from "wouter";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ContactDialog } from "@/components/ContactDialog";

const globalTeam = {
  boardOfDirectors: [
    { name: "Kim Brander", role: "Board Director" },
    { name: "Mishka Nikolas", role: "Board Director" },
    { name: "Nat Ware", role: "Founder and Chairman of the Board" },
    { name: "Nick Charinos", role: "Board Director" },
  ],
  executiveTeam: [
    { name: "Abhishek Jain", role: "Chief Global Programs & External Relations Officer" },
    { name: "Angelina Lau", role: "Chief Finance & Compliance Officer" },
    { name: "Chris Garner", role: "Chief Executive Officer" },
    { name: "Varaidzo Ndebele", role: "Chief Digital Officer" },
    { name: "Veronika Xaveria", role: "Chief Operations Officer" },
  ],
};

const vitcTeam = [
  { name: "Niharika Haridas", role: "President" },
  { name: "Sai Ayush Pattnaik", role: "Vice President" },
  { name: "Sajith Krishnaa", role: "General Secretary" },
  { name: "Vyshag V", role: "Business Strategy" },
  { name: "Surya Vamsi", role: "Marketing Director" },
  { name: "Anish Patro", role: "Technical Director" },
  { name: "Ashley Sanu", role: "Finance & Legal" },
  { name: "Jerome Mathew", role: "HR Director" },
];

const values = [
  { 
    icon: <Target className="w-8 h-8" />, 
    title: "Method trumps money", 
    desc: "We prioritise effective and efficient problem-solving methods over financial resources." 
  },
  { 
    icon: <Lightbulb className="w-8 h-8" />, 
    title: "Prioritising innovative, practical and sustainable solutions", 
    desc: "We focus on finding creative and sustainable solutions that address the root causes of social challenges." 
  },
  { 
    icon: <Sparkles className="w-8 h-8" />, 
    title: "Turning ideas into reality", 
    desc: "We strive to turn ideas and aspirations into tangible, measurable outcomes that create real impact." 
  },
  { 
    icon: <TrendingUp className="w-8 h-8" />, 
    title: "Turning challenges into opportunities", 
    desc: "We view challenges as opportunities for growth and learning, and approach them with a positive, solutions-focused mindset." 
  },
  { 
    icon: <Heart className="w-8 h-8" />, 
    title: "Focus on positive transformation", 
    desc: "We are committed to creating positive change and transforming communities, organisations, and individuals for the better." 
  },
];

const history = [
  {
    year: "2007",
    title: "180 Degrees Consulting is born",
    desc: "Nat Ware founded 180 Degrees Consulting at the University of Sydney in Australia after undertaking charitable work in Mozambique. He realised that the effectiveness of funds is even more important than the level of funds, yet most non-profit organisations and social enterprises do not have access to affordable high-quality consulting services. At the same time, Nat realised that talented university students have more to offer than simply collecting money or raising awareness.",
  },
  {
    year: "2011",
    title: "180 Degrees Consulting goes global",
    desc: "Exchange students from Mexico and Sweden, after completing their study abroad at the University of Sydney, found the first branches outside of Australia in Mexico City and Stockholm, respectively.",
  },
  {
    year: "2018",
    title: "Our 100th branch is established",
    desc: "After a decade of impact, the 100th branch of 180 Degrees Consulting is established, expanding the impact of our organisation across 20 countries and 4 continents.",
  },
  {
    year: "2023",
    title: "Local impact, global presence",
    desc: "With more than 170 branches in 33+ countries, 180 Degrees Consulting continues to grow globally and increase its local impact, as we embrace new levels of maturity.",
  },
  {
    year: "2024",
    title: "180DC VIT Chennai is established",
    desc: "The first 180DC branch in VIT is established at VIT Chennai, bringing world-class pro-bono consulting to the vibrant social enterprise ecosystem of Tamil Nadu.",
  },
];

const benefitsCycle = [
  { icon: <Clock className="w-6 h-6" />, label: "Time & Expertise", position: "top" },
  { icon: <MessageCircle className="w-6 h-6" />, label: "Feedback", position: "right" },
  { icon: <Heart className="w-6 h-6" />, label: "Social Impact", position: "bottom-right" },
  { icon: <GraduationCap className="w-6 h-6" />, label: "Training & Mentoring", position: "bottom-left" },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* HERO */}
        <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-green-100/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#73B744]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#049648]/10 rounded-full blur-3xl"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Who We Are</span>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mt-4 mb-6">
                Turning Good Into <span className="gradient-text">Great</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                180 Degrees Consulting offers high-quality consulting services without the premium price tag. 
                Our team comprises of carefully selected top-tier university students who volunteer their time because they share our vision and values.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY 180DC - Quote + Benefits Cycle */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Quote Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#73B744] to-[#049648] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                  {/* Quote Icon */}
                  <Quote className="w-16 h-16 text-white/20 absolute top-6 left-6" />
                  
                  <div className="relative z-10">
                    <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mt-8 mb-8">
                      "Why are we called 180 Degrees? It's because we work to turn good organisations into great organisations, challenges into opportunities."
                    </blockquote>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#73B744] font-bold text-xl shadow-lg">
                        NW
                      </div>
                      <div>
                        <p className="font-bold text-lg">Nat Ware</p>
                        <p className="text-white/80 text-sm">(Founder & Chairman of Board)</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative circles */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-5 -right-5 w-20 h-20 bg-white/5 rounded-full"></div>
                </div>
              </motion.div>

              {/* Why 180DC Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why 180 Degrees Consulting?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At 180 Degrees Consulting, we offer a mutually beneficial consulting service to our clients and consultants alike. 
                  We connect the untapped capabilities of top university students around the globe to socially-conscious organisations to fulfil their unmet needs.
                </p>

                {/* Benefits Cycle */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {benefitsCycle.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-[#73B744]/10 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#73B744] shadow-sm group-hover:bg-[#73B744] group-hover:text-white transition-all">
                          {item.icon}
                        </div>
                        <span className="font-semibold text-gray-700 text-sm">{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Center Logo */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.7 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10"
                  >
                    180
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-8">
                Empowering Organizations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-xl flex items-center justify-center text-white mb-4">
                    <Target className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">For Our Clients</h3>
                  <p className="text-gray-600">
                    We are dedicated to providing affordable and high-quality strategic and operational assistance that enables our clients to create meaningful impact in their communities.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#73B744] to-[#049648] rounded-xl flex items-center justify-center text-white mb-4">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">For Our Consultants</h3>
                  <p className="text-gray-600">
                    We are committed to nurturing the next generation of social impact leaders by offering our consultants valuable opportunities for professional development and hands-on experience.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HISTORY TIMELINE */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Our History
              </h2>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#73B744] to-[#049648] -translate-x-1/2 hidden md:block"></div>
              
              {history.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: idx * 0.15 }}
                  className={`relative flex items-center mb-12 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-gray-100">
                      <span className="text-3xl font-bold text-[#73B744]">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#73B744] rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Our Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-gradient-to-br from-[#73B744]/10 to-[#049648]/20 rounded-full flex items-center justify-center text-[#73B744] mb-6 group-hover:from-[#73B744] group-hover:to-[#049648] group-hover:text-white transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL TEAM */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#73B744]/5 to-transparent"></div>
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-6"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">Global Leadership</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Our Team
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center text-gray-600 max-w-3xl mx-auto mb-16"
            >
              The Global Leadership Team is the body that leads and manages the work of 180 Degrees Consulting around the world. 
              This includes supporting existing 180 Degrees branches, helping new branches get established, facilitating collaboration between branches, 
              ensuring consulting quality control, measuring the social impact of 180 Degrees worldwide, and making crucial strategic decisions about the future of the organisation.
            </motion.p>

            {/* Board of Directors */}
            <div className="mb-16">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-2xl font-bold text-gray-900 text-center mb-8"
              >
                Board of Directors
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {globalTeam.boardOfDirectors.map((member, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#73B744]/20 to-[#049648]/30 rounded-full flex items-center justify-center mb-4 group-hover:from-[#73B744] group-hover:to-[#049648] transition-all duration-300">
                      <Users className="w-10 h-10 text-[#73B744]/60 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                    <p className="text-xs text-[#73B744]">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Executive Team */}
            <div className="mb-16">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-2xl font-bold text-gray-900 text-center mb-8"
              >
                Executive Leadership Team
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {globalTeam.executiveTeam.map((member, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#73B744]/20 to-[#049648]/30 rounded-full flex items-center justify-center mb-4 group-hover:from-[#73B744] group-hover:to-[#049648] transition-all duration-300">
                      <Users className="w-8 h-8 text-[#73B744]/60 group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{member.name}</h4>
                    <p className="text-xs text-[#73B744] leading-tight">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VIT CHENNAI TEAM */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-center mb-16"
            >
              <span className="text-[#73B744] font-semibold text-sm tracking-wider uppercase">VIT Chennai Branch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
                Our Leadership
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {vitcTeam.map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#73B744]/20">
                    <div className="relative mb-4 mx-auto w-24 h-24 bg-gradient-to-br from-[#73B744]/20 to-[#049648]/30 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 flex items-center justify-center text-[#73B744]/50">
                        <Users size={36} />
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                    <p className="text-xs text-[#73B744] font-medium mt-1">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#73B744]/10 rounded-full blur-[200px] w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                Be part of a global network creating real social impact.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <ContactDialog type="join">
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-[#73B744] to-[#049648] text-white rounded-full shadow-xl">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </ContactDialog>
                
                <Link href="/">
                  <Button size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-lg font-semibold bg-white text-gray-900 rounded-full shadow-xl">
                    Back to Home
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
