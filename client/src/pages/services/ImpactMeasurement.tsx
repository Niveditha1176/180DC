import { motion } from "framer-motion";
import { Target, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function ImpactMeasurement() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#73B744] to-[#049648] rounded-2xl flex items-center justify-center text-white mb-6">
                <Target className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Impact Measurement
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Content coming soon. Check back for details about our Impact Measurement services.
              </p>
              <Link href="/">
                <Button className="mt-8 bg-gradient-to-r from-[#73B744] to-[#049648] text-white rounded-full">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
