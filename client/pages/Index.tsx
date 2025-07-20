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
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-from via-gradient-via to-gradient-to">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              ADHEL SIDDIQUE
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-blue-100">
              Tech-Driven Data Analyst & Computing Sciences Student
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin className="h-4 w-4" />
                Rochester, NY
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Phone className="h-4 w-4" />
                +1 (585) 230-3740
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Mail className="h-4 w-4" />
                adhelsiddique@gmail.com
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-background">
        {/* Summary Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                About Me
              </h2>
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Tech-driven Data Analyst with expertise in{" "}
                    <strong>Power BI, SQL, Python, and Azure</strong>. Skilled
                    at transforming complex sensor and telematics data into
                    actionable insights to enhance product performance and
                    customer experience. Proven track record in creating
                    effective dashboards and reports, while collaborating with
                    cross-functional teams to drive continuous improvement.
                    Passionate about leveraging analytical skills in dynamic,
                    data-driven environments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Experience
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        Business Analyst
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        SIROCO LLC
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      Oct 2024 - Jan 2025
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Remote, United States
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Monitored and analyzed business data to identify trends,
                      anomalies, and actionable insights, leveraging statistical
                      analysis and time-series data techniques
                    </li>
                    <li>
                      • Developed and maintained interactive dashboards and
                      reports using Power BI and SQL, effectively visualizing
                      performance metrics
                    </li>
                    <li>
                      • Collaborated with cross-functional teams to optimize
                      processes and enhance data-driven decision-making
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">Brand Promoter</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        Sketches
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      May 2023 - Jul 2023
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dubai, UAE
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Engaged customers with product demos and upcoming
                      offers, ensuring clear communication and positive brand
                      representation
                    </li>
                    <li>
                      • Collected feedback and handled inquiries with confidence
                      to support customer satisfaction
                    </li>
                    <li>
                      • Utilized strong communication skills to connect with
                      customers and drive sales
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">Sales Associate</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        Threads, Time
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4" />
                      Apr 2021 - Dec 2021
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dubai, UAE
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Assisted over 80 customers daily by guiding them to
                      appropriate products and addressing inquiries effectively
                    </li>
                    <li>
                      • Supported team operations through accurate cash register
                      handling, systematic inventory organization, and precise
                      product labeling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                                            <CardTitle className="text-xl">
                        BSc, Computing and Information Technologies
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        Rochester Institute of Technology, Dubai
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-2">
                        Expected Dec 2025 • Cumulative GPA: 3.5 • Minor: Web Development
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                                            <span className="text-sm">
                        Dean's List - Recognized for academic excellence four
                        times
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        40% scholarship towards tuition
                      </span>
                    </div>
                                        <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Global Scholarship Program: $3,270 USD (granted to only
                        one student per semester)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Active member of AIRC (Artificial Intelligence & Robotics Club)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Higher Secondary Education
                    </CardTitle>
                    <CardDescription>Vijayagiri Public School</CardDescription>
                    <p className="text-sm text-muted-foreground">
                      PCMC • May 2021
                    </p>
                  </CardHeader>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Secondary Education
                    </CardTitle>
                    <CardDescription>
                      Gems Our Own Indian School
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      CBSE • Dec 2019
                    </p>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      Data Analysis & Visualization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Data Analysis</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Statistical Analysis</Badge>
                      <Badge variant="secondary">
                        Time-Series Data Analysis
                      </Badge>
                      <Badge variant="secondary">Data Visualization</Badge>
                      <Badge variant="secondary">Power BI</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      Programming & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">Excel/Google Sheets</Badge>
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Microsoft Azure</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      Domain Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">IoT Systems</Badge>
                      <Badge variant="secondary">
                        Hardware-Related Experience
                      </Badge>
                      <Badge variant="secondary">Robotics</Badge>
                      <Badge variant="secondary">AI & Machine Learning</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      Soft Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Problem-Solving</Badge>
                      <Badge variant="secondary">Communication</Badge>
                      <Badge variant="secondary">Team Collaboration</Badge>
                      <Badge variant="secondary">Leadership</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Certifications & Achievements
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          Microsoft Certified: Azure Fundamentals
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Cloud Computing Certification
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          PL-300 Certified: Microsoft Power BI Data Analyst
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Data Analytics Certification
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          CS50P – Harvard's Introduction to Programming with
                          Python
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Programming Certification
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          DEWA Robotics Championship Winner (2017)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Robotics Competition
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          First Place – Wollongong Annual Robotics Competition
                          (2017)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Robotics Competition
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold">
                          Transforming Tasks with AI – TDRA
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          AI & Innovation
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Academic Recommendations
            </h2>
            <div className="max-w-6xl mx-auto space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Assoc. Prof. Martin Žagar, PhD, EMBA
                      </CardTitle>
                      <CardDescription className="text-lg">
                        RIT Croatia - Scientific Advisor in Computer Science
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "Adhel has shown an impressive set of abilities that are
                    expected from an IT professional. He has shown he is good at
                    working in teams, a fast learner, and an organized person.
                    His expertise and knowledge in application development show
                    advanced computational problem-solving skills with very
                    promising final results. He is an outstanding scholar and
                    member of our college community."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Dr. Abhilasha Singh
                      </CardTitle>
                      <CardDescription className="text-lg">
                        AIRC Coordinator and Postdoctoral Researcher - RIT Dubai
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "One of the most remarkable projects Adhel undertook was his
                    work on the Yumi project, where he developed a sophisticated
                    system for sorting resistors. He demonstrated an impressive
                    level of problem-solving and technical knowledge,
                    programming a dual-arm robot to identify, classify, and sort
                    resistors with precision. His passion for AI-driven
                    technologies is evident in his approach to problem-solving."
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">
                        Dr. Omar Abdul Latif
                      </CardTitle>
                      <CardDescription className="text-lg">
                        Assistant Professor - RIT Dubai
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "Mr. Siddique always maintained very good grades and pinned
                    himself in the top 10% of the class. He is a perceptive and
                    sharp student with a high aptitude for problem solving. His
                    mind works in a structured way that is simply remarkable and
                    perfect for academic research. His endless curiosity
                    combined with his willingness to take risks leads me to
                    believe there will be no limit to his growth."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in collaborating or learning more about my work? I'd
                love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Me
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
