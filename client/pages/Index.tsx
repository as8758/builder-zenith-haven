import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  Calendar,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
  ChevronRight,
  Menu,
  Plus,
  Code,
  Database,
  BarChart3,
  Brain,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-white/60 flex items-center justify-center">
                <div className="w-2 h-2 bg-white/60"></div>
              </div>
              <span className="text-sm font-bold tracking-wider">ADHEL—SIDDIQUE</span>
              <span className="text-xs text-white/60">™</span>
            </div>
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-sm font-bold tracking-wide text-white/60 hover:text-white transition-colors">
                <Plus className="h-4 w-4" />
                NEW PROJECT
              </button>
              <button className="flex items-center gap-2 text-sm font-bold tracking-wide">
                <Menu className="h-3 w-3" />
                MENU
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255, 165, 0, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, rgba(128, 0, 128, 0.3) 0%, transparent 50%), 
                             radial-gradient(circle at 40% 80%, rgba(0, 100, 255, 0.3) 0%, transparent 50%)`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
              <span className="text-white">HIGH-END </span>
              <span className="text-white/60 italic font-normal">analytics</span>
            </h1>
            <h2 className="text-7xl md:text-9xl font-bold mb-12 text-white">
              FOR BUSINESSES
            </h2>
            
            <p className="text-lg text-white/80 max-w-md mb-12 leading-relaxed">
              Hey! I'm Adhel, I've done it all – from data analysis, machine learning, and 
              business intelligence all the way to automation development. I go always 
              above and beyond and with most clients I work long-term, some like me so 
              much they invite me to events. No BS.
            </p>

            <div className="flex items-center justify-center gap-8 mb-12 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white font-bold">5/5 (12)</span>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">3+</span>
                  <div className="px-2 py-1 border border-white/60 text-xs">PROJECTS</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">2y</span>
                  <div className="px-2 py-1 border border-white/60 text-xs">EXPERIENCE</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">0%</span>
                  <div className="px-2 py-1 border border-white/60 text-xs">FAILED PROJECTS</div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold">
                <ExternalLink className="h-4 w-4" />
                SEE WORK
              </button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="text-white/60">Trusted by 5+ businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Database className="h-16 w-16 text-white/60 mx-auto mb-4" />
                  <p className="text-white/60">IoT Data Analysis Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span className="text-white font-bold">Project</span>
                <div className="px-2 py-1 border border-white/60 text-xs">ANALYSIS</div>
                <div className="px-2 py-1 border border-white/60 text-xs">DASHBOARD</div>
                <span className="text-white/60">/</span>
                <div className="px-2 py-1 border border-white/60 text-xs">BUSINESS PROJECT</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Use your existing data
              </h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Transform complex sensor and telematics data into actionable insights</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Leverage Power BI and SQL for comprehensive data visualization</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Generated reports enhance product performance and customer experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-32">
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-16 w-16 text-white/60 mx-auto mb-4" />
                  <p className="text-white/60">AI-Powered Robotics System</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span className="text-white font-bold">Project</span>
                <div className="px-2 py-1 border border-white/60 text-xs">AI</div>
                <div className="px-2 py-1 border border-white/60 text-xs">ROBOTICS</div>
                <span className="text-white/60">/</span>
                <div className="px-2 py-1 border border-white/60 text-xs">ACADEMIC PROJECT</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Bring in your AI innovations
              </h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Developed sophisticated system for dual-arm robot control</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Implemented resistor identification and classification algorithms</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Demonstrated precision sorting with AI-driven technologies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-white/60 mx-auto mb-4" />
                  <p className="text-white/60">Business Intelligence Platform</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4 text-sm">
                <span className="text-white font-bold">Project</span>
                <div className="px-2 py-1 border border-white/60 text-xs">BI</div>
                <div className="px-2 py-1 border border-white/60 text-xs">ANALYTICS</div>
                <span className="text-white/60">/</span>
                <div className="px-2 py-1 border border-white/60 text-xs">ENTERPRISE PROJECT</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 text-white">
                Visually monitor anything
              </h3>
              <div className="space-y-4 text-white/70">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Monitor and analyze business data to identify trends and anomalies</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Create interactive dashboards with statistical analysis techniques</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-white/60 rounded-full mt-2"></div>
                  <span>Fine-tune data visualization with full precision control</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Expertise Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white/60 italic mb-4">
              one-stop
            </h2>
            <h3 className="text-6xl font-bold text-white">
              SOLUTION TO YOUR ENTIRE DATA NEEDS
            </h3>
          </div>

          <div className="max-w-4xl mx-auto space-y-1">
            {/* Service 1 */}
            <div className="border-t border-white/20 py-8 flex items-center justify-between group hover:bg-white/5 transition-colors px-8">
              <h4 className="text-3xl font-medium text-white group-hover:text-white transition-colors">
                DATA ANALYSIS SPRINT
              </h4>
              <div className="flex items-center gap-4">
                <div className="px-3 py-1 border border-white/60 text-xs text-white/60">
                  50% DEPOSIT
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border-t border-white/20 py-8 flex items-center justify-between group hover:bg-white/5 transition-colors px-8">
              <h4 className="text-3xl font-medium text-white/60 group-hover:text-white transition-colors">
                BUSINESS INTELLIGENCE SPRINT
              </h4>
              <div className="px-3 py-1 border border-white/60 text-xs text-white/60">
                50% DEPOSIT
              </div>
            </div>

            {/* Service 3 */}
            <div className="border-t border-white/20 py-8 flex items-center justify-between group hover:bg-white/5 transition-colors px-8">
              <h4 className="text-3xl font-medium text-white/60 group-hover:text-white transition-colors">
                AI & AUTOMATION ON DEMAND
              </h4>
              <div className="px-3 py-1 border border-white/60 text-xs text-white/60">
                MONTHLY PLAN
              </div>
            </div>

            {/* Service 4 */}
            <div className="border-t border-b border-white/20 py-8 flex items-center justify-between group hover:bg-white/5 transition-colors px-8">
              <h4 className="text-3xl font-medium text-white/60 group-hover:text-white transition-colors">
                CONSULTING SUPPORT
              </h4>
              <div className="px-3 py-1 border border-white/60 text-xs text-white/60">
                ONE-TIME FREE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-white mb-4">
              Don't take my word for it.
            </h2>
            <h3 className="text-4xl text-white/60 italic">
              Hear it directly from my professors.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-black border border-white/20 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-white/60">[</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/60">]</span>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  "Adhel has shown an impressive set of abilities that are expected from an IT professional. 
                  He is an outstanding scholar and member of our college community."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm font-medium">Martin Žagar</p>
                    <p className="text-white/60 text-xs">[ HR ] [ PROFESSOR ] / [ FROM RIT ]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-black border border-white/20 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-white/60">[</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/60">]</span>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  "One of the most remarkable projects Adhel undertook was the Yumi project. 
                  His passion for AI-driven technologies is evident in his approach to problem-solving."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm font-medium">Abhilasha Singh</p>
                    <p className="text-white/60 text-xs">[ AE ] [ RESEARCHER ] / [ FROM RIT ]</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-black border border-white/20 p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-white/60">[</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white/60">]</span>
                </div>
                
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  "Mr. Siddique maintained very good grades and pinned himself in the top 10% of the class. 
                  His endless curiosity combined with his willingness to take risks is remarkable."
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  <div>
                    <p className="text-white text-sm font-medium">Omar Abdul Latif</p>
                    <p className="text-white/60 text-xs">[ AE ] [ PROFESSOR ] / [ FROM RIT ]</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <span className="text-white/60 text-sm">[ TESTIMONIALS ]</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-8xl font-bold text-white mb-16">
            LET'S BUILD IT
          </h2>
          
          <div className="w-16 h-16 mx-auto mb-32 rounded-full bg-orange-500 flex items-center justify-center">
            <Plus className="h-8 w-8 text-white" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white font-bold">AVAILABLE NOW</span>
                <div className="px-2 py-1 border border-white/60 text-xs text-white/60">GMT +4</div>
              </div>
            </div>
            <div className="text-center">
              <span className="text-white font-bold">REMOTE/DXB</span>
              <div className="px-2 py-1 border border-white/60 text-xs text-white/60 inline-block ml-2">
                25°15'N 55°18'E
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-8">
                <span className="text-white">Work</span>
                <span className="text-white">Services</span>
                <span className="text-white">Contact</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-white/80 text-sm">
            Copyright © 2025 Adhel Siddique. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
