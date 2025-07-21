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
              <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-tight">
                <span className="text-white">Hello</span>
                <span className="text-orange-500">.</span>
              </h1>

              <div className="space-y-4">
                <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
                <h2 className="text-2xl lg:text-4xl text-orange-500 font-medium">
                  My Name is Adhel Siddique
                </h2>
                <h3 className="text-lg lg:text-2xl text-white/90 font-light">
                  Professional Data Analyst & AI Developer
                </h3>
              </div>
            </div>

            {/* CV Download Button */}
            <div>
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
• Accurately entered stock reports into database systems, maintaining 99.5% data accuracy
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

                  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'Adhel_Siddique_Complete_CV.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                }}
                className="group bg-orange-500 text-black hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-xl
                         transition-all duration-300 hover:shadow-lg
                         flex items-center gap-3"
              >
                <Download className="w-5 h-5 transition-transform group-hover:animate-bounce" />
                Download Complete CV
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer">
                <div className="w-1 h-3 bg-orange-500 rounded-full mt-2"></div>
              </div>
            </div>
          </div>

          {/* Bottom Hero Description */}
          <div className="mt-12 lg:mt-24 max-w-md">
            <p className="text-orange-500 text-lg leading-relaxed mb-6">
              I am a Data Analyst & AI Developer. My specialty lies in
              transforming complex data into actionable insights. That's
              creativity in determining solutions that fit business goals.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-orange-500 text-2xl font-medium">
                Let's Talk
              </span>
              <ArrowRight className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-20 bg-orange-500"></div>

      {/* About Section */}
      <section id="about" className="bg-black py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide transition-all duration-500 hover:tracking-widest">
              Biography
            </h3>
            <h2 className="text-white text-5xl font-bold mb-8 transition-all duration-500 hover:text-orange-500 hover:scale-105">Who am I?</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto transition-all duration-500 hover:w-32"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image with frame */}
            <div className="relative group">
              <div className="bg-black p-8 border border-orange-500 rounded-lg shadow-2xl transition-all duration-500 hover:shadow-orange-500/50 hover:scale-105 hover:border-orange-400">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fc08b90088e804256b075841c946b0250%2F5fb71b5e59bb44e3bfcf26621c78d6c8"
                  alt="Adhel Siddique Professional"
                  className="w-full h-full object-cover rounded transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -left-8 -top-8 grid grid-cols-8 gap-2">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-orange-500 rounded-full opacity-60 transition-all duration-300 hover:opacity-100 hover:scale-150"
                    style={{ animationDelay: `${i * 0.01}s` }}
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
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Name
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">Adhel Siddique</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Email
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">Adhelsiddique@gmail.com</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Location
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">NY , USA</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-orange-500 transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 group">
                  <h5 className="text-orange-500 text-sm font-bold mb-1 group-hover:text-orange-400 transition-colors">
                    Phone
                  </h5>
                  <p className="text-white group-hover:text-orange-100 transition-colors">+1(585)2303740</p>
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
                <div className="flex-1">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
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
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Projects Done" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "5", label: "Awards Won" },
              { number: "2+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {stat.number}
                </h3>
                <p className="text-black text-sm font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-white text-6xl font-bold mb-4 transition-all duration-500 hover:text-orange-500">
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
                institution: "RIT Croatia"
              },
              {
                text: "One of the most remarkable projects Adhel undertook was the Yumi project. His passion for AI-driven technologies is evident in his approach to problem-solving and technical knowledge.",
                author: "Dr. Abhilasha Singh",
                role: "AIRC Coordinator & Postdoctoral Researcher",
                institution: "RIT Dubai"
              },
              {
                text: "Mr. Siddique maintained very good grades and pinned himself in the top 10% of the class. His endless curiosity combined with his willingness to take risks is remarkable.",
                author: "Dr. Omar Abdul Latif",
                role: "Assistant Professor & Director of Coding Center",
                institution: "RIT Dubai"
              },
            ].map((recommendation, index) => (
              <Card
                key={index}
                className="bg-black border border-orange-500/30 p-8 transition-all duration-500 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 group"
              >
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-white/60">[</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400 transition-transform group-hover:scale-110"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <span className="text-white/60">]</span>
                  </div>

                  <p className="text-white/80 text-lg leading-relaxed mb-6 transition-colors group-hover:text-white">
                    "{recommendation.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:rotate-12">
                      {recommendation.author.split(' ').map(name => name[0]).join('').slice(0,2)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium group-hover:text-orange-500 transition-colors">
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
            <span className="text-white/60 text-sm animate-pulse">[ RECOMMENDATIONS ]</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[black] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-orange-500 text-xl mb-4 uppercase tracking-wide">
              Contact Info
            </h3>
            <h2 className="text-white text-5xl font-bold">Get in Touch</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 ml-[200px]">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-orange-500 text-xl font-bold mb-4">
                  Message
                </h3>
                <h4 className="text-white text-2xl font-bold mb-6">
                  Write Me Something
                </h4>

                <div className="space-y-4 mb-6">
                  <p className="text-orange-500 flex items-center gap-2">
                    <span>Call Me:</span>
                    <span className="text-white font-bold">
                      +1(585)2303740
                    </span>
                  </p>
                  <p className="text-orange-500 flex items-center gap-2">
                    <span>E-mail:</span>
                    <span className="text-white font-bold">
                      Adhelsiddique@gmail.com
                    </span>
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="bg-gray-900 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-[orange-500]"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-gray-900 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-[orange-500]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-gray-900 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-[orange-500]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-gray-900 text-white p-4 rounded border-none focus:outline-none focus:ring-2 focus:ring-[orange-500] resize-none"
                />
              </div>

              <Button className="bg-orange-500 text-black hover:bg-orange-500/90 px-12 py-4 text-xl font-medium rounded-lg">
                Send Message
              </Button>
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
