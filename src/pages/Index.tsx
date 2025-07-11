import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, BookOpen, Code, Zap, Github, Twitter, Mail, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Index = () => {
  const handleRegisterClick = () => {
    // This will be updated with actual registration link
    window.open("https://hackquest.io", "_blank");
  };

  const handleViewDetailsClick = () => {
    // Smooth scroll to about section
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      
<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex h-16 items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green flex-shrink-0"></div>
        <h1 className=" font-bold bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green bg-clip-text text-transparent  text-base sm:text-xl  min-[321px]:whitespace-nowrap">
          Solana Students Africa
        </h1>
      </div>
    </div>

    {/* Desktop Navigation  */}
    <nav className="hidden md:flex items-center space-x-6">
      <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
      <a href="#tracks" className="text-sm font-medium hover:text-primary transition-colors">Tracks</a>
      <a href="#timeline" className="text-sm font-medium hover:text-primary transition-colors">Timeline</a>
      <a href="#partners" className="text-sm font-medium hover:text-primary transition-colors">Partners</a>
      <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
      <ThemeToggle />
    </nav>

    {/* Mobile Menu, added an hamburger menu for mobile view */} 
    <div className="flex items-center space-x-2 md:hidden">
      <ThemeToggle />
      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 py-6">
            <a href="#about" onClick={handleMenuLinkClick}className="text-lg font-medium hover:text-primary transition-colors">About</a>
            <a href="#tracks" onClick={handleMenuLinkClick}className="text-lg font-medium hover:text-primary transition-colors">Tracks</a>
            <a href="#timeline" onClick={handleMenuLinkClick}className="text-lg font-medium hover:text-primary transition-colors">Timeline</a>
            <a href="#partners" onClick={handleMenuLinkClick}className="text-lg font-medium hover:text-primary transition-colors">Partners</a>
            <a href="#contact" onClick={handleMenuLinkClick}className="text-lg font-medium hover:text-primary transition-colors">Contact</a>
          </div>
        </SheetContent>
      </Sheet>
      
    </div>
    
  </div>
</header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-solana-purple/20 via-solana-blue/20 to-solana-green/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-solana-purple/20 to-solana-green/20 text-foreground border-solana-purple/30 hover:from-solana-purple/30 hover:to-solana-green/30 transition-all">
              September 2025 • University of Lagos
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green bg-clip-text text-transparent animate-pulse-glow">
              Build with Solana
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold bg-gradient-to-r from-solana-green to-solana-blue bg-clip-text text-transparent">
              On-Chain Meets Intelligence
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join Nigeria's premier student hackathon focused on Solana blockchain development and AI agents. 
              Exclusively for university students - no prior experience needed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/90 hover:to-solana-green/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleRegisterClick}
              >
                Register Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-solana-purple text-solana-purple hover:bg-solana-purple/10 hover:border-solana-green hover:text-solana-green transition-all duration-300"
                onClick={handleViewDetailsClick}
              >
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
            <Card className="text-center border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Calendar className="w-8 h-8 mx-auto text-solana-purple mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle>3-Week Hackathon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pre-workshops + 3 weeks of building amazing Solana projects</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Users className="w-8 h-8 mx-auto text-solana-blue mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle>700+ Students</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">From 6+ universities across Lagos and Nigeria</p>
              </CardContent>
            </Card>
            <Card className="text-center border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
              <CardHeader>
                <Trophy className="w-8 h-8 mx-auto text-solana-green mb-2 group-hover:scale-110 transition-transform" />
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
      <section id="tracks" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Hackathon Tracks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your track and build innovative solutions using Solana and AI technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DeFi + AI Analytics",
                description: "Build intelligent DeFi applications with AI-powered analytics and insights",
                icon: <Zap className="w-6 h-6" />,
                gradient: "from-solana-purple to-solana-blue"
              },
              {
                title: "AI-Powered Metadata Engines",
                description: "Create smart metadata systems that leverage AI for enhanced blockchain data",
                icon: <Code className="w-6 h-6" />,
                gradient: "from-solana-blue to-solana-green"
              },
              {
                title: "Campus Tools with Solana Pay",
                description: "Develop payment solutions and campus utilities using Solana Pay",
                icon: <MapPin className="w-6 h-6" />,
                gradient: "from-solana-green to-solana-purple"
              },
              {
                title: "AI Agents",
                description: "Build autonomous AI agents that interact with the Solana blockchain",
                icon: <BookOpen className="w-6 h-6" />,
                gradient: "from-solana-purple to-solana-green"
              },
              {
                title: "Education & Accessibility",
                description: "Create educational tools using LLMs and smart contracts for better accessibility",
                icon: <Users className="w-6 h-6" />,
                gradient: "from-solana-blue to-solana-purple"
              }
            ].map((track, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${track.gradient} text-white shadow-lg group-hover:scale-110 transition-transform`}>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Event Timeline
            </h2>
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-solana-purple to-solana-green flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-2 bg-gradient-to-r from-solana-purple/20 to-solana-green/20 text-foreground border-solana-purple/30">{item.phase}</Badge>
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
      <section id="partners" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Partners & Communities
            </h2>
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
              <Card key={index} className="text-center p-6 border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-lg">{partner}</h3>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-solana-blue to-solana-green bg-clip-text text-transparent">
              Participating Universities
            </h3>
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


      {/* FAQ Section, added an FAQ section */}
<section id="faq" className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
  <div className="container">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Have questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who is eligible to participate?</AccordionTrigger>
          <AccordionContent>
            This hackathon is exclusively for currently enrolled university students in Nigeria. You may be asked to provide student identification to confirm your eligibility.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Do I need experience with Solana or AI?</AccordionTrigger>
          <AccordionContent>
            Not at all! This event is beginner-friendly. We will host pre-hackathon workshops and provide developer kits to get you up to speed with all the necessary tools.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can I participate remotely?</AccordionTrigger>
          <AccordionContent>
            The hackathon includes physical onboarding workshops and a final demo day at the University of Lagos. While most of the building phase can be done remotely, attendance at the key physical events is highly encouraged.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How are teams formed? Can I work alone?</AccordionTrigger>
          <AccordionContent>
            You can form your own team (up to 4 members) or we can help you find a team during the pre-week team formation sessions. While you can work alone, we encourage collaboration!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>What are the submission requirements?</AccordionTrigger>
          <AccordionContent>
            All submissions must include a link to a deployed, functional project and a public GitHub repository. Submissions will be managed through a Hackquest link that will be provided.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to join the future of blockchain development in Africa?
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Tobiloba Adedeji</CardTitle>
                <CardDescription>Lead Hackathon Organizer & Solana Student Representative</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center space-x-6">
                  <a 
                    href="mailto:adedejitobiloba7@gmail.com" 
                    className="flex items-center space-x-2 text-muted-foreground hover:text-solana-purple transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                  </a>
                  <a 
                    href="https://x.com/toby_solutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-solana-blue transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="https://github.com/tobySolutions" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-solana-green transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
                <Button className="bg-gradient-to-r from-solana-purple to-solana-green hover:from-solana-purple/90 hover:to-solana-green/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Our Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/40 bg-gradient-to-r from-muted/30 to-muted/10">
        <div className="container text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-solana-purple via-solana-blue to-solana-green"></div>
            <span className="font-semibold bg-gradient-to-r from-solana-purple to-solana-green bg-clip-text text-transparent">
              Solana Students Africa
            </span>
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
