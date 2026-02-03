import { Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/180dc-logo.avif" 
                alt="180 Degrees Consulting" 
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(58%) sepia(68%) saturate(432%) hue-rotate(60deg) brightness(95%) contrast(88%)' }}
              />
              <div className="border-l border-gray-600 pl-3">
                <span className="font-bold text-white block text-sm">VIT CHENNAI</span>
                <span className="text-xs text-[#73B744]">Est. 2024</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's largest university-based consulting organization. Creating impact through innovation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wider text-gray-300 uppercase">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {["About", "Services", "Process", "Team"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-[#73B744] transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wider text-gray-300 uppercase">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>VIT Chennai Campus</li>
              <li>Kelambakkam - Vandalur Rd</li>
              <li>Chennai, Tamil Nadu 600127</li>
              <li>
                <a href="mailto:vitc@180dc.org" className="text-[#73B744] hover:underline">
                  vitc@180dc.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-5 text-sm tracking-wider text-gray-300 uppercase">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/company/180dc-vitc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#73B744] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/180dc.vitc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#73B744] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:vitc@180dc.org" 
                className="w-10 h-10 bg-gray-800 hover:bg-[#73B744] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <p className="text-xs text-gray-400">Part of the global</p>
              <p className="font-bold text-[#73B744]">180 Degrees Consulting</p>
              <p className="text-xs text-gray-500 mt-1">180+ branches worldwide</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 180 Degrees Consulting VIT Chennai. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with passion by Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
