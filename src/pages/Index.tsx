
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Trophy, Github, ExternalLink, Code, Brain, Coins, Smartphone, GraduationCap } from "lucide-react";

const Index = () => {
  const tracks = [
    {
      title: "DeFi + AI Analytics",
      description: "Build intelligent DeFi tools that leverage AI for market analysis and automated trading strategies",
      icon: <Coins className="h-6 w-6" />
    },
    {
      title: "AI-Powered Metadata Engines",
      description: "Create smart systems that automatically generate and manage NFT metadata using AI",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Campus Tools with Solana Pay",
      description: "Develop student-focused applications integrating Solana Pay for campus transactions",
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: "AI Agents",
      description: "Build autonomous AI agents that interact with Solana blockchain for various use cases",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Education & Accessibility",
      description: "Create educational tools using LLMs and smart contracts to improve learning experiences",
      icon: <GraduationCap className="h-6 w-6" />
    }
  ];

  const partners = [
    "Web3Afrika", "Web3Unilag", "GDSC", "GitHub Campus Experts", "WomenInDefi", "Superteam Lagos"
  ];

  const universities = [
    "University of Lagos", "Lagos State University", "Yaba College of Technology", 
    "Ladoke Akintola University", "University of Ibadan", "Obafemi Awolowo University"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 solana-gradient rounded-lg"></div>
              <span className="text-xl font-bold solana-gradient-text">Solana Students Africa</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#tracks" className="text-muted-foreground hover:text-primary transition-colors">Tracks</a>
              <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Timeline</a>
              <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button className="solana-gradient text-white hover:opacity-90 transition-opacity">
              Register Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-green-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="floating-animation">
            <Badge className="mb-6 solana-gradient text-white border-0 px-4 py-2 text-sm">
              September 2025 • University of Lagos
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="solana-gradient-text">Build with Solana:</span>
            <br />
            On-Chain Meets Intelligence
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A 3-week hackathon exclusively for university students in Nigeria. Build the future of Web3 with AI agents, 
            Solana blockchain, and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="solana-gradient text-white hover:opacity-90 transition-opacity animate-pulse-glow">
              <ExternalLink className="mr-2 h-5 w-5" />
              Submit on HackQuest
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold solana-gradient-text">700+</div>
              <div className="text-sm text-muted-foreground">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold solana-gradient-text">6+</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold solana-gradient-text">5</div>
              <div className="text-sm text-muted-foreground">Tracks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold solana-gradient-text">3</div>
              <div className="text-sm text-muted-foreground">Weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Solana Students Africa?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empowering the next generation of African developers with cutting-edge blockchain and AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Student-First Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Exclusively designed for university students with beginner-friendly workshops and mentorship
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cutting-Edge Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn Solana blockchain development, AI agents, and build real-world applications
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Real Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build solutions that matter, win prizes, and launch your Web3 career in Africa
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your path and build innovative solutions at the intersection of Web3 and AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 solana-gradient rounded-lg flex items-center justify-center text-white">
                      {track.icon}
                    </div>
                    <CardTitle className="text-lg">{track.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{track.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Timeline</h2>
            <p className="text-lg text-muted-foreground">3 weeks of intensive learning, building, and innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2 border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 solana-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    PRE
                  </div>
                  <CardTitle>Pre-Week</CardTitle>
                  <CardDescription>Preparation & Onboarding</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Physical Solana + AI workshops</li>
                    <li>• Discord community setup</li>
                    <li>• Tool familiarization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 solana-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    1-2
                  </div>
                  <CardTitle>Week 1-2</CardTitle>
                  <CardDescription>Building & Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Kickoff & team formation</li>
                    <li>• Intensive hacking sessions</li>
                    <li>• Mentor check-ins</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-primary/20">
                <CardHeader>
                  <div className="w-16 h-16 solana-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                    3
                  </div>
                  <CardTitle>Week 3</CardTitle>
                  <CardDescription>Demo & Judging</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Project demonstrations</li>
                    <li>• GitHub repo showcase</li>
                    <li>• Awards ceremony</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-lg text-muted-foreground">Everything you need to succeed in Web3 and AI development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Solana + AI Dev Kits</h3>
              <p className="text-sm text-muted-foreground">Complete toolsets for blockchain and AI development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Prizes & Recognition</h3>
              <p className="text-sm text-muted-foreground">Win prizes for innovation and technical excellence</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Mentorship</h3>
              <p className="text-sm text-muted-foreground">Learn from industry experts and experienced developers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 solana-gradient rounded-lg mx-auto mb-4 flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Career Opportunities</h3>
              <p className="text-sm text-muted-foreground">Launch your Web3 career with real-world experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground">Collaborating with leading Web3 communities across Africa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <div className="font-semibold text-sm">{partner}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Participating Universities</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {universities.map((university, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">{university}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students in building innovative solutions with Solana and AI. Registration opens soon!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="solana-gradient text-white hover:opacity-90 transition-opacity">
              <ExternalLink className="mr-2 h-5 w-5" />
              Register on HackQuest
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Join Discord Community
            </Button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Contact Lead Organizer</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="font-semibold">Tobiloba Adedeji</span>
                <Badge variant="secondary">Lead Hackathon Organizer</Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a href="mailto:adedejitobiloba7@gmail.com" className="text-primary hover:underline">
                  adedejitobiloba7@gmail.com
                </a>
                <a href="https://x.com/toby_solutions" className="text-primary hover:underline flex items-center">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  @toby_solutions
                </a>
                <a href="https://github.com/tobySolutions" className="text-primary hover:underline flex items-center">
                  <Github className="h-3 w-3 mr-1" />
                  tobySolutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 solana-gradient rounded-lg"></div>
                <span className="text-xl font-bold">Solana Students Africa</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering African students to build the future with Solana blockchain and AI technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#tracks" className="hover:text-white transition-colors">Tracks</a></li>
                <li><a href="#timeline" className="hover:text-white transition-colors">Timeline</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Solana Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Development Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Details</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>September 2025</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>University of Lagos</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>700+ Students Expected</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Solana Students Africa. Building the future of Web3 in Africa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
