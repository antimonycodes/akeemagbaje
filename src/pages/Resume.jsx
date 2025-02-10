import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Professional Profile
            </h1>
            <button className="w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </button>
          </div>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    Federal Representative
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2019 - Present
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-muted-foreground space-y-1">
                    <li>Chairman, House Committee on Judiciary</li>
                    <li>Authored 15+ significant pieces of legislation</li>
                    <li>Led judicial reform initiatives</li>
                    <li>Represented Nigeria at international legal forums</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    Senior Advocate of Nigeria (SAN)
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2015 - Present
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-muted-foreground space-y-1">
                    <li>Argued landmark cases before the Supreme Court</li>
                    <li>Specialized in constitutional and corporate law</li>
                    <li>Mentored junior advocates</li>
                  </ul>
                </div>

                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    Managing Partner, Ogunjobi & Associates
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2010 - 2019
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm sm:text-base text-muted-foreground space-y-1">
                    <li>Built and led a team of 50+ legal professionals</li>
                    <li>
                      Handled high-profile corporate and constitutional cases
                    </li>
                    <li>
                      Established pro bono program for underserved communities
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Education
              </h2>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    Harvard Law School
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Master of Laws (LL.M), International Law
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2008 - 2009
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    Nigerian Law School
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Barrister at Law (BL), First Class Honours
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2006 - 2007
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium">
                    University of Lagos
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Bachelor of Laws (LL.B), First Class Honours
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    2001 - 2006
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Professional Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    Legal Expertise
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
                    <li>Constitutional Law</li>
                    <li>Corporate Law</li>
                    <li>Environmental Law</li>
                    <li>Human Rights Law</li>
                    <li>Legislative Drafting</li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    Leadership
                  </h3>
                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
                    <li>Policy Development</li>
                    <li>Strategic Planning</li>
                    <li>Public Speaking</li>
                    <li>Negotiation</li>
                    <li>Team Management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Professional Memberships
              </h2>
              <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm">
                <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
                  <li>Nigerian Bar Association (NBA)</li>
                  <li>International Bar Association (IBA)</li>
                  <li>Commonwealth Lawyers Association</li>
                  <li>Chartered Institute of Arbitrators (CIArb)</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
