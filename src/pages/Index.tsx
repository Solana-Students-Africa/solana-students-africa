
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, BookOpen, Code, Zap, Github, Twitter, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full solana-gradient"></div>
              <h1 className="text-xl font-bold solana-gradient-text">Solana Students Africa</h1>
            </div>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#tracks" className="text-sm font-medium hover:text-primary transition-colors">Tracks</a>
            <a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">Timeline</a>
            <a href="#partners" className="text-sm font-medium hover:text-primary transition-colors">Partners</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 solana-gradient opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              September 2025 • University of Lagos
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 solana-gradient-text floating-animation">
              Build with Solana
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground">
              On-Chain Meets Intelligence
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              Join Nigeria's premier student hackathon focused on Solana blockchain development and AI agents. 
              Exclusively for university students - no prior experience needed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="solana-gradient hover:opacity-90 text-white">
                Register Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="about" className="py-16 px-4">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Calendar className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle>3-Week Hackathon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pre-workshops + 3 weeks of building amazing Solana projects</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Users className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle>700+ Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From 6+ universities across Lagos and Nigeria</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Trophy className="w-8 h-8 mx-auto text-primary mb-2" />
                <CardTitle>Amazing Prizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dev kits, swag, mentorship, and cash prizes for winners</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your track and build innovative solutions using Solana and AI technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DeFi + AI Analytics",
                description: "Build intelligent DeFi applications with AI-powered analytics and insights",
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: "AI-Powered Metadata Engines",
                description: "Create smart metadata systems that leverage AI for enhanced blockchain data",
                icon: <Code className="w-6 h-6" />
              },
              {
                title: "Campus Tools with Solana Pay",
                description: "Develop payment solutions and campus utilities using Solana Pay",
                icon: <MapPin className="w-6 h-6" />
              },
              {
                title: "AI Agents",
                description: "Build autonomous AI agents that interact with the Solana blockchain",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Education & Accessibility",
                description: "Create educational tools using LLMs and smart contracts for better accessibility",
                icon: <Users className="w-6 h-6" />
              }
            ].map((track, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
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
      <section id="timeline" className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Timeline</h2>
            <p className="text-lg text-muted-foreground">
              From onboarding to final presentations
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  phase: "Pre-Week",
                  title: "Onboarding & Workshops",
                  description: "Physical Solana + AI workshops, Discord community setup, and team formation"
                },
                {
                  phase: "Week 1",
                  title: "Kickoff & Hacking Begins",
                  description: "Official kickoff event, team finalization, and start building your projects"
                },
                {
                  phase: "Week 2",
                  title: "Development & Mentorship",
                  description: "Continue building with remote mentor check-ins and community support"
                },
                {
                  phase: "Week 3",
                  title: "Demo Day & Judging",
                  description: "Project presentations, judging, and GitHub repository showcase"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full solana-gradient flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-primary/10 text-primary">{item.phase}</Badge>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partners & Communities</h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading Web3 communities and universities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Web3Afrika",
              "Web3Unilag", 
              "GDSC",
              "GitHub Campus Experts",
              "WomenInDefi",
              "University Communities"
            ].map((partner, index) => (
              <Card key={index} className="text-center p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="font-semibold text-lg">{partner}</h3>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Participating Universities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-muted-foreground">
              <p>University of Lagos</p>
              <p>Lagos State University</p>
              <p>Yaba College of Technology</p>
              <p>Ladoke Akintola University</p>
              <p>University of Ibadan</p>
              <p>And more...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Ready to join the future of blockchain development in Africa?
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Tobiloba Adedeji</CardTitle>
                <CardDescription>Lead Hackathon Organizer & Solana Student Representative</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-6">
                  <a 
                    href="mailto:adedejitobiloba7@gmail.com" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                  <a 
                    href="https://x.com/toby_solutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="https://github.com/tobySolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
                <Button className="solana-gradient hover:opacity-90 text-white">
                  Join Our Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/40 bg-muted/30">
        <div className="container text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded-full solana-gradient"></div>
            <span className="font-semibold solana-gradient-text">Solana Students Africa</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering the next generation of blockchain developers in Africa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
