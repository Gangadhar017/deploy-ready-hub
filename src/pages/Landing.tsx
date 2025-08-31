import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CodeEditor from "@/components/CodeEditor";
import FeatureCard from "@/components/FeatureCard";
import { Cloud, Zap, Database, Shield } from "lucide-react";

const Landing = () => {
  console.log("Landing component rendering");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative py-32 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary-dark/5"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-xl float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary-light/20 rounded-full blur-xl float" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Cloud-based</span>
            <br />
            <span className="text-foreground">Online IDE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Log in and access a personal, containerized coding environment with 
            <span className="text-primary font-semibold"> real-time execution</span> and 
            <span className="text-accent font-semibold"> collaborative features</span>.
          </p>
          
          {/* Code Editor Demo */}
          <div className="mb-16 hover-glow transition-smooth">
            <CodeEditor />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-12 py-4 text-lg font-semibold shadow-hero hover:shadow-glow transition-smooth bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for modern development in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={<Cloud className="w-8 h-8 text-primary" />}
              title="Containerized Environments"
              description="Isolated, secure coding spaces with Docker containers for consistent development across all projects"
            />
            
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-accent" />}
              title="Real-time Execution"
              description="Immediate feedback on code with lightning-fast compilation and execution in the cloud"
            />
            
            <FeatureCard
              icon={<Database className="w-8 h-8 text-primary" />}
              title="Persistent Storage"
              description="Your code autosaves to disk with version control integration and backup systems"
            />
            
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-accent" />}
              title="Sandboxed Execution"
              description="Secure execution with timeouts and resource limits to protect your system and data"
            />
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-24 px-4 relative">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-primary/5"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Developer</span> <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive guides and documentation to get you coding faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  Getting Started
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Start coding immediately with our cloud-based IDE. No setup required, just pure development power.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Create your account in seconds
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Choose your programming language
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Start coding in your browser instantly
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Run and test your code in real-time
                  </li>
                </ul>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
                  Supported Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Python 3.9+", color: "bg-green-500" },
                    { name: "Java 17", color: "bg-orange-500" },
                    { name: "JavaScript", color: "bg-yellow-500" },
                    { name: "TypeScript", color: "bg-blue-500" },
                    { name: "C++", color: "bg-blue-600" },
                    { name: "Go", color: "bg-cyan-500" }
                  ].map((lang, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                      <span className="text-muted-foreground font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-border/50">
                <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  Advanced Features
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Intelligent syntax highlighting",
                    "AI-powered auto-completion",
                    "Real-time collaborative editing",
                    "Git integration & version control",
                    "Built-in package management",
                    "Integrated terminal access",
                    "Custom themes & extensions",
                    "Cloud-based debugging tools"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl shadow-medium hover:shadow-large transition-smooth border border-primary/20">
                <h3 className="text-3xl font-bold text-foreground mb-4">API Integration</h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Integrate with our powerful RESTful API for advanced functionality and custom workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent border-0 shadow-medium hover:shadow-glow transition-smooth">
                    View API Docs
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-smooth">
                    Download SDK
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-t from-muted/50 to-background border-t border-border/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="text-4xl font-bold mb-6">
            <span className="gradient-text">TAG</span>
          </div>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            Empowering developers with cloud-based coding environments since 2024
          </p>
          
          {/* Social links or additional info could go here */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Support</a>
          </div>
          
          <p className="text-muted-foreground/70 text-sm">
            © 2024 TAG. All rights reserved. Built with ❤️ for developers.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;