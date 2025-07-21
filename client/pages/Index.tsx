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
  Download,
  ArrowRight,
  Database,
  BarChart3,
  Brain,
  TrendingUp,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background blur effects */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 105px 192px at right top, rgba(217, 217, 217, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 105px 192px at left center, rgba(217, 217, 217, 0.3) 0%, transparent 50%)
            `,
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 px-4 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                </div>
                <span className="text-orange-500 font-bold text-2xl">
                  ADHEL—SIDDIQUE
                </span>
              </div>
              <div className="hidden md:flex items-center gap-16">
                <a
                  href="#about"
                  className="text-orange-500 text-lg hover:text-white transition-colors"
                >
                  About me
                </a>
                <a
                  href="#services"
                  className="text-orange-500 text-lg hover:text-white transition-colors"
                >
                  Service
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-16">
              <a
                href="#portfolio"
                className="text-orange-500 text-lg hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="text-orange-500 text-lg hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight transform transition-all duration-1000 animate-fade-in-up">
                <span className="text-white hover:text-orange-400 transition-colors duration-500">
                  Hello
                </span>
                <span className="text-orange-500 animate-pulse hover:animate-bounce">
                  .
                </span>
              </h1>

              <div className="space-y-4 animate-fade-in-delay">
                <div className="w-16 h-1 bg-orange-500 mx-auto transition-all duration-700 hover:w-32 animate-expand"></div>
                <h2 className="text-2xl lg:text-4xl text-orange-500 font-medium transform transition-all duration-700 hover:scale-105 animate-slide-in-left">
                  My Name is Adhel Siddique
                </h2>
                <h3 className="text-lg lg:text-2xl text-white/90 font-light transform transition-all duration-700 hover:text-white animate-slide-in-right">
                  Professional Data Analyst & AI Developer
                </h3>
              </div>
            </div>

            {/* CV Download Button */}
            <div className="animate-bounce-in-delayed">
              <button
                onClick={() => {
                  // Create comprehensive CV content
                  const cvContent = `ADHEL SIDDIQUE
Rochester, NY | +1 (585) 2303740 | adhelsiddique@gmail.com
LinkedIn: linkedin.com/in/adhel-siddique | Portfolio: adhel-portfolio.com

SUMMARY
Data-focused Business Analyst with proven expertise in Power BI, SQL, Python, and MS Office tools, including Excel and Access.
Experienced in extracting and analyzing data to identify trends and opportunities that enhance operational processes and profitability.
Adept at designing reports and recommending actionable improvements to support business initiatives in dynamic environments.

EDUCATION
Rochester Institute of Technology, Dubai                                                     Expected Dec 2025
Bachelor of Science, Computing and Information Technologies
• GPA: 3.49 (Cumulative) - Dean's List Recognition (3 times)
• Scholarships: 40% tuition scholarship + 12,000 AED Global Scholarship Program
• Top 10% of class consistently across multiple courses

Vijayagiri Public School, India                                                                    May 2021
Higher Secondary Education, PCMC

Gems Our Own Indian School, Dubai                                                               Dec 2019
Secondary Education, Grades 6-10, CBSE

PROFESSIONAL EXPERIENCE
SIROCO LLC                                                                            Oct 2024 - Jan 2025
Business Analyst | Remote, United States
• Analyzed business data to identify trends and insights, supporting strategic decision-making processes
• Developed detailed reports and interactive dashboards using Power BI, PostgreSQL, and Excel
• Implemented query design techniques that improved data retrieval efficiency by 35%
• Recommended process improvements that enhanced overall profitability and operational efficiency
• Collaborated with cross-functional teams to translate business requirements into technical solutions

Sketches                                                                              May 2023 - Jul 2023
Brand Promoter | Dubai, UAE
• Engaged 100+ customers daily with product demonstrations and promotional offers
• Collected customer feedback and handled inquiries with 95% satisfaction rate
• Utilized strong communication skills to connect with diverse customer base and drive sales
• Exceeded monthly sales targets by 20% through effective customer relationship management

GMG, Sports Market                                                                    Jan 2022 - Apr 2022
Inventory & Stock Assistant | Dubai, UAE
• Efficiently managed and organized stock inventory for smooth operational flow
��� Accurately entered stock reports into database systems, maintaining 99.5% data accuracy
• Streamlined inventory processes that reduced stock discrepancies by 15%
• Collaborated with team members to ensure timely stock replenishment and organization

TECHNICAL SKILLS
Programming Languages: Python, Java, SQL, DAX
Data Analysis Tools: Power BI, Excel, PostgreSQL, Microsoft Azure, Tableau
Database Management: SQL Server, Access, Data Modeling
Web Technologies: HTML, CSS, JavaScript, React
Development Tools: Git, Visual Studio Code, Jupyter Notebooks
Statistical Analysis: Regression Analysis, Data Visualization, Predictive Modeling

SOFT SKILLS
• Advanced Problem-Solving and Analytical Thinking
• Excellent Communication and Presentation Skills
• Team Collaboration and Leadership
• Project Management and Time Management
• Adaptability and Continuous Learning

CERTIFICATIONS & ACHIEVEMENTS
• Microsoft Certified: Azure Fundamentals (2024)
• PL-300 Certified: Microsoft Power BI Data Analyst (2024)
• CS50P – Harvard's Introduction to Programming with Python (2024)
• DEWA Robotics Championship Winner (2017)
• First Place – Wollongong Annual Robotics Competition (2017)
• Transforming Tasks with AI Certificate – TDRA (2024)

ACADEMIC PROJECTS
Yumi Robotics Project                                                                          2024
• Developed sophisticated resistor sorting system using dual-arm robot technology
• Implemented AI algorithms for object identification and classification
• Collaborated with robotics team to achieve 98% sorting accuracy

Business Intelligence Dashboard                                                                 2024
• Created comprehensive BI dashboard for academic project using Power BI
• Integrated multiple data sources and implemented advanced analytics
• Presented findings to faculty panel, receiving highest marks in class

IoT Data Analysis Platform                                                                     2023
• Built real-time data processing system for IoT sensor data
• Developed predictive models using Python and machine learning algorithms
• Optimized system performance resulting in 40% faster data processing

ACADEMIC RECOMMENDATIONS
"Adhel has shown an impressive set of abilities that are expected from an IT professional.
He is an outstanding scholar and member of our college community."
- Prof. Martin Žagar, PhD, EMBA, Scientific Advisor, RIT Croatia

"His passion for AI-driven technologies is evident in his approach to problem-solving.
Adhel demonstrated impressive technical knowledge in the Yumi robotics project."
- Dr. Abhilasha Singh, AIRC Coordinator, RIT Dubai

"Mr. Siddique maintained very good grades and pinned himself in the top 10% of the class.
His endless curiosity combined with willingness to take risks is remarkable."
- Dr. Omar Abdul Latif, Assistant Professor, RIT Dubai

LANGUAGES
• English: Native/Fluent
• Arabic: Conversational
• Hindi: Conversational

INTERESTS
• Artificial Intelligence and Machine Learning
• Data Science and Analytics
• Robotics and Automation
• Technology Innovation
• Competitive Programming`;

                  const blob = new Blob([cvContent], {
                    type: "text/plain;charset=utf-8",
                  });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "Adhel_Siddique_Complete_CV.txt";
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                }}
                className="group bg-orange-500 text-black hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-xl
                         transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-110
                         animate-glow-pulse transform active:scale-95 flex items-center gap-3"
              >
                <Download className="w-5 h-5 transition-all duration-300 group-hover:animate-bounce group-hover:text-yellow-400 group-hover:scale-125" />
                Download Complete CV
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-fade-in-up-delayed">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-orange-500 transition-all duration-300 animate-bounce-slow">
                <div className="w-1 h-3 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-20 bg-orange-500"></div>

      {/* About Section */}
      <section id="about" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide hover:tracking-widest transition-all duration-500 transform hover:scale-105">
              Biography
            </h3>
            <h2 className="text-white text-5xl font-bold mb-8 hover:text-orange-500 transition-all duration-500 transform hover:scale-105">
              Who am I?
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto transition-all duration-700 hover:w-32 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image with frame */}
            <div className="relative group">
              <div className="bg-black p-8 border border-orange-500 rounded-lg shadow-2xl transition-all duration-500 hover:shadow-orange-500/50 hover:border-orange-400 hover:scale-105 group-hover:rotate-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc08b90088e804256b075841c946b0250%2F5fb71b5e59bb44e3bfcf26621c78d6c8"
                  alt="Adhel Siddique Professional"
                  className="w-full h-[500px] object-cover rounded transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -left-8 -top-8 grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-orange-500 rounded-full opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-150 hover:bg-orange-400"
                    style={{ animationDelay: `${i * 0.02}s` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h3 className="text-orange-500 text-xl mb-4">About Me</h3>
              <h4 className="text-white text-2xl font-bold mb-6">
                Adhel Siddique
              </h4>

              <p className="text-white text-lg leading-relaxed mb-8">
                I specialize in transforming complex data into actionable
                business insights. With expertise in machine learning, business
                intelligence, and automation development, I help organizations
                make data-driven decisions that drive growth and innovation.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:bg-gray-700 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transform group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Name
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">
                    Adhel Siddique
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:bg-gray-700 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transform group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Email
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">
                    Adhelsiddique@gmail.com
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:bg-gray-700 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transform group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Location
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">
                    NY , USA
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:bg-gray-700 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 transform group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Phone
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">
                    +1(585)2303740
                  </p>
                </div>
              </div>

              <Button className="bg-orange-500 text-black hover:bg-orange-500/90 px-8 py-3 rounded-lg">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[black] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide">
              Service
            </h3>
            <h2 className="text-white text-5xl font-bold">What I Do?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01.",
                title: "Data Analysis",
                description:
                  "Transform raw data into meaningful insights using advanced statistical methods and visualization techniques.",
                icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
              },
              {
                number: "02.",
                title: "Business Intelligence",
                description:
                  "Create comprehensive BI solutions that drive strategic decision-making and business growth.",
                icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
              },
              {
                number: "03.",
                title: "Machine Learning",
                description:
                  "Develop AI models and automation solutions that optimize processes and predict outcomes.",
                icon: <Brain className="w-8 h-8 text-orange-500" />,
              },
              {
                number: "04.",
                title: "Database Design",
                description:
                  "Design and optimize database systems for maximum performance and data integrity.",
                icon: <Database className="w-8 h-8 text-orange-500" />,
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-orange-500 p-6 hover:bg-gray-900/80 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-[#D4BD8E] text-4xl font-medium mb-4">
                    {service.number}
                  </h3>
                  <h4 className="text-[#C5B8A6] text-2xl font-medium mb-4">
                    {service.title}
                  </h4>
                  <p className="text-[#C5B8A6] text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="w-12 h-1 bg-orange-500 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide animate-fade-in transform hover:tracking-widest transition-all duration-500">
              My Journey
            </h3>
            <h2 className="text-white text-5xl font-bold mb-8 animate-fade-in-up transform hover:text-orange-500 hover:scale-105 transition-all duration-500">
              Experience & Achievements
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto animate-expand-delayed transition-all duration-700 hover:w-32"></div>
          </div>

          {/* Work Experience Timeline */}
          <div className="mb-20">
            <h3 className="text-white text-3xl font-bold text-center mb-12">
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-orange-500 h-full"></div>

              {[
                {
                  period: "Aug 2025 – Present",
                  position: "SI Leader",
                  company: "Rochester Institute of Technology (RIT), US",
                  location: "Rochester, NY",
                  type: "Academic Success Center",
                  highlights: [
                    "Facilitate two weekly peer-led Supplemental Instruction (SI) study sessions for students",
                    "Support students in historically challenging courses (Software Development, Computer Science)",
                    "Plan and organize study session content; maintain accurate attendance records",
                    "Communicate regularly with SI Supervisor and course faculty regarding student progress",
                  ],
                  side: "left",
                },
                {
                  period: "Oct 2024 – Jan 2025",
                  position: "Business Analyst",
                  company: "SIROCO LLC",
                  location: "Remote, US",
                  type: "Data Analytics",
                  highlights: [
                    "Analyzed business data to identify trends and actionable insights",
                    "Developed comprehensive reports and dashboards using Power BI and PostgreSQL",
                    "Worked cross-functionally to improve processes and data quality",
                    "Implemented data-driven solutions that enhanced operational efficiency",
                  ],
                  side: "right",
                },
                {
                  period: "May 2023 – Jul 2023",
                  position: "Brand Promoter",
                  company: "Sketches",
                  location: "Dubai, UAE",
                  type: "Marketing & Promotion",
                  highlights: [
                    "Engaged customers through product demos and promotional events",
                    "Collected customer feedback and performed competitive analysis",
                    "Exceeded engagement targets through strategic customer interaction",
                    "Utilized online research for market analysis and trend identification",
                  ],
                  side: "left",
                },
                {
                  period: "Jan 2022 – Apr 2022",
                  position: "Inventory & Stock Assistant",
                  company: "GMG, Sports Market",
                  location: "Dubai, UAE",
                  type: "Operations",
                  highlights: [
                    "Managed stock organization and tracked inventory with 99.5% accuracy",
                    "Entered stock reports into databases, maintaining up-to-date records",
                    "Streamlined inventory processes reducing discrepancies by 15%",
                    "Collaborated with team to ensure efficient stock management",
                  ],
                  side: "right",
                },
                {
                  period: "Apr 2021 – Dec 2021",
                  position: "Sales Associate",
                  company: "Threads, Time",
                  location: "Dubai, UAE",
                  type: "Retail Sales",
                  highlights: [
                    "Assisted over 80 customers daily with sales and product information",
                    "Handled cash registers and maintained store presentation",
                    "Organized inventory and ensured optimal product display",
                    "Achieved 95% customer satisfaction rate through excellent service",
                  ],
                  side: "left",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-16 ${job.side === "left" ? "justify-start" : "justify-end"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-black z-10 flex items-center justify-center transition-all duration-300 hover:scale-125 animate-pulse-slow">
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${job.side === "left" ? "mr-auto pr-8" : "ml-auto pl-8"}`}
                  >
                    <Card className="bg-gray-900 border border-orange-500/30 p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 transform hover:scale-105 hover:-translate-y-2 animate-slide-in-stagger group">
                      <CardContent className="p-0">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-orange-500 text-sm font-bold px-2 py-1 bg-orange-500/10 rounded">
                              {job.period}
                            </span>
                            <span className="text-gray-400 text-sm">
                              {job.type}
                            </span>
                          </div>
                          <h4 className="text-white text-xl font-bold mb-1">
                            {job.position}
                          </h4>
                          <h5 className="text-orange-500 text-lg font-semibold mb-1">
                            {job.company}
                          </h5>
                          <p className="text-gray-400 text-sm mb-4">
                            {job.location}
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {job.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-white/80 text-sm"
                            >
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Timeline */}
          <div>
            <h3 className="text-white text-3xl font-bold text-center mb-12">
              Certifications & Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Microsoft Certified: Azure Fundamentals",
                  year: "2024",
                  icon: "☁️",
                  category: "Cloud Computing",
                  description:
                    "Fundamental understanding of Azure services and cloud concepts",
                },
                {
                  title: "Microsoft PL-300: Power BI Data Analyst Associate",
                  year: "2024",
                  icon: "📊",
                  category: "Data Analytics",
                  description:
                    "Advanced Power BI skills for data modeling and visualization",
                },
                {
                  title:
                    "CS50P: Harvard's Introduction to Programming with Python",
                  year: "2024",
                  icon: "🐍",
                  category: "Programming",
                  description:
                    "Computer science fundamentals and Python programming",
                },
                {
                  title: "DEWA Robotics Championship Participant",
                  year: "2017",
                  icon: "🏆",
                  category: "Robotics",
                  description:
                    "Participated in Dubai Electricity and Water Authority robotics competition",
                },
                {
                  title: "First Place – Wollongong Annual Robotics Competition",
                  year: "2017",
                  icon: "🥇",
                  category: "Robotics",
                  description:
                    "Champion in international university robotics competition",
                },
                {
                  title: "Transforming Tasks with AI – TDRA",
                  year: "2024",
                  icon: "🤖",
                  category: "Artificial Intelligence",
                  description:
                    "AI implementation and automation technologies workshop",
                },
                {
                  title: "Microsoft Excel - Excel from Beginner to Advanced",
                  year: "2022",
                  icon: "📊",
                  category: "Data Analysis",
                  description:
                    "Comprehensive Excel training covering advanced functions and data analysis",
                },
              ].map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-900 border border-orange-500/30 p-6 hover:border-orange-500 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/30 group transform hover:scale-105 hover:-translate-y-3 animate-fade-in-stagger"
                >
                  <CardContent className="p-0">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-in">
                        {cert.icon}
                      </div>
                      <div className="text-orange-500 text-xs font-bold px-2 py-1 bg-orange-500/10 rounded-full inline-block mb-2">
                        {cert.year}
                      </div>
                      <span className="text-gray-400 text-xs block">
                        {cert.category}
                      </span>
                    </div>
                    <h4 className="text-white font-bold text-center mb-3 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-white/70 text-sm text-center leading-relaxed">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-20 text-center">
            <h3 className="text-white text-3xl font-bold mb-8">
              Academic Highlights
            </h3>
            <div className="bg-gray-900 border border-orange-500/30 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-orange-500 text-xl font-bold mb-4">
                    Education
                  </h4>
                  <div className="text-left space-y-3">
                    <div>
                      <p className="text-white font-semibold">
                        Bachelor of Science in Computing and Information
                        Technologies
                      </p>
                      <p className="text-orange-500">
                        Rochester Institute of Technology, Dubai
                      </p>
                      <p className="text-gray-400 text-sm">Expected Dec 2025</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-white">
                        GPA: <strong className="text-orange-500">3.54</strong>
                      </span>
                      <span className="text-white">
                        Dean's List:{" "}
                        <strong className="text-orange-500">4 times</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-orange-500 text-xl font-bold mb-4">
                    Scholarships & Awards
                  </h4>
                  <div className="text-left space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">
                        40% merit-based scholarship for academic excellence
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">
                        Global Scholarship (~$3,270 USD) - Only one student per
                        semester
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 text-sm">
                        Top 10% of class consistently across multiple courses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[black] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide">
              2+ Years Experience
            </h3>
            <h2 className="text-white text-5xl font-bold">My Skills</h2>
          </div>

          <div className="space-y-8">
            {/* Skills Timeline */}
            <div className="space-y-6">
              {[
                {
                  title: "Data Analysis & Visualization",
                  institution: "Advanced Level (2022-2024)",
                  description:
                    "Expertise in Python, R, SQL, Power BI, and Tableau for comprehensive data analysis and visualization.",
                  rating: 5.0,
                },
                {
                  title: "Machine Learning & AI",
                  institution: "Intermediate Level (2023-2024)",
                  description:
                    "Proficient in scikit-learn, TensorFlow, and PyTorch for building predictive models and AI solutions.",
                  rating: 5.0,
                },
                {
                  title: "Business Intelligence",
                  institution: "Professional Level (2022-2024)",
                  description:
                    "Strategic BI implementation using modern tools and methodologies for enterprise solutions.",
                  rating: 5.0,
                },
              ].map((skill, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <div className="w-12 h-0.5 bg-orange-500"></div>
                  </div>
                  <Card className="bg-gray-900 border-orange-500 p-6 flex-1">
                    <CardContent className="p-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-white text-xl font-bold mb-2">
                            {skill.title}
                          </h4>
                          <p className="text-orange-500 text-sm">
                            {skill.institution}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                          <span className="text-orange-500 text-sm">
                            {skill.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-orange-500 leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-20 bg-orange-500"></div>

      {/* Projects Section */}
      <section id="portfolio" className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide">
              Portfolio
            </h3>
            <h2 className="text-white text-5xl font-bold">Latest Projects</h2>
          </div>

          {/* Project filters */}
          <div className="flex justify-center mb-16">
            <div className="flex gap-8 p-2 border border-orange-500 rounded-full">
              {["Data Analysis", "BI Dashboard", "ML Models", "Automation"].map(
                (filter) => (
                  <button
                    key={filter}
                    className="px-6 py-2 text-orange-500 font-bold hover:bg-orange-500 hover:text-black transition-colors rounded-full"
                  >
                    {filter}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {[
              {
                title: "IoT Analytics Platform",
                category: "Data Analysis",
                description:
                  "Comprehensive analytics platform for IoT sensor data processing and real-time insights.",
                image:
                  "https://cdn.builder.io/o/assets%2Fc08b90088e804256b075841c946b0250%2Ff2135de5e5ce44fdbd2e71ab50f2ae66?alt=media&token=1fe48924-5aa0-452c-888a-29664a81b486&apiKey=c08b90088e804256b075841c946b0250",
              },
              {
                title: "Business Intelligence Dashboard",
                category: "BI Dashboard",
                description:
                  "Executive dashboard providing key business metrics and performance indicators for strategic decision making.",
                image:
                  "https://cdn.builder.io/api/v1/image/assets%2Fc08b90088e804256b075841c946b0250%2F9175e56b23c74a31947432f230bb7492?format=webp&width=800",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-16`}
              >
                <div className="flex-1" />
                <div className="flex-1 space-y-6">
                  <div>
                    <h4 className="text-orange-500 text-lg font-bold mb-2">
                      {project.category}
                    </h4>
                    <h3 className="text-white text-4xl font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-orange-500 text-xl font-bold">
                      See More
                    </span>
                    <ArrowRight className="w-6 h-6 text-orange-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center bg-orange-500 p-8 rounded-lg">
            {[
              { number: "15+", label: "Projects Done" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5", label: "Awards Won" },
              { number: "2+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-white text-sm font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-6xl font-bold mb-4">
              Academic Recommendations
            </h2>
            <h3 className="text-4xl text-white/60 italic">
              Hear it directly from my professors.
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                text: "Adhel has shown an impressive set of abilities that are expected from an IT professional. He is an outstanding scholar and member of our college community with advanced computational problem-solving skills.",
                author: "Prof. Martin Žagar, PhD, EMBA",
                role: "Scientific Advisor in Computer Science",
                institution: "RIT Croatia",
              },
              {
                text: "One of the most remarkable projects Adhel undertook was the Yumi project. His passion for AI-driven technologies is evident in his approach to problem-solving and technical knowledge.",
                author: "Dr. Abhilasha Singh",
                role: "AIRC Coordinator & Postdoctoral Researcher",
                institution: "RIT Dubai",
              },
              {
                text: "Mr. Siddique maintained very good grades and pinned himself in the top 10% of the class. His endless curiosity combined with his willingness to take risks is remarkable.",
                author: "Dr. Omar Abdul Latif",
                role: "Assistant Professor & Director of Coding Center",
                institution: "RIT Dubai",
              },
            ].map((recommendation, index) => (
              <Card
                key={index}
                className="bg-black border border-orange-500/30 p-8 hover:border-orange-500 transition-colors duration-300"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-white/60">[</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-white/60">]</span>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    "{recommendation.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {recommendation.author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {recommendation.author}
                      </p>
                      <p className="text-white/60 text-xs leading-tight">
                        {recommendation.role}
                      </p>
                      <p className="text-orange-500 text-xs font-medium">
                        {recommendation.institution}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <span className="text-white/60 text-sm animate-pulse">
              [ RECOMMENDATIONS ]
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide">
              Contact Info
            </h3>
            <h2 className="text-white text-6xl font-bold mb-8">Get in Touch</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-orange-500 text-2xl font-bold mb-6">
                    Let's Connect
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    Ready to transform your data into actionable insights? Let's
                    discuss how I can help your business grow through
                    data-driven solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border-l-4 border-orange-500">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-orange-500 text-sm font-medium">
                        Phone
                      </p>
                      <p className="text-white font-bold">+1 (585) 230-3740</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border-l-4 border-orange-500">
                    <Mail className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-orange-500 text-sm font-medium">
                        Email
                      </p>
                      <p className="text-white font-bold">
                        adhelsiddique@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border-l-4 border-orange-500">
                    <MapPin className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-orange-500 text-sm font-medium">
                        Location
                      </p>
                      <p className="text-white font-bold">Rochester, NY, USA</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-white text-xl font-bold mb-4">
                    Available For
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-white/80">
                        Data Analysis Projects
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-white/80">
                        Business Intelligence Consulting
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-white/80">
                        AI & Automation Solutions
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-white/80">
                        Full-time Opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-orange-500 text-2xl font-bold mb-6">
                    Send a Message
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-900 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full bg-gray-900 text-white p-4 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all"
                  />

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-black font-bold py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 rounded-full border border-orange-500/30">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-black text-xl">
              Copyright 2024 All Rights Reserved
            </p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-orange-500 rounded"></div>
              </div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-orange-500 rounded"></div>
              </div>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-orange-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
