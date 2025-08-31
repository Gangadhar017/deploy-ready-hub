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
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Cloud-based Online IDE
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Log in and access a personal, containerized coding environment.
          </p>
          
          {/* Code Editor Demo */}
          <div className="mb-12">
            <CodeEditor />
          </div>

          <Button size="lg" className="px-8 py-3 text-lg">
            Log In
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Cloud className="w-6 h-6 text-primary" />}
              title="Containerized Environments"
              description="Isolated, secure coding spaces"
            />
            
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Real-time Execution"
              description="Immediate feedback on code"
            />
            
            <FeatureCard
              icon={<Database className="w-6 h-6 text-primary" />}
              title="Persistent Storage"
              description="Code autosaves to disk"
            />
            
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-primary" />}
              title="Sandboxed Execution"
              description="Timeouts and resource limits"
            />
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Documentation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Getting Started</h3>
                <p className="text-muted-foreground mb-4">
                  Start coding immediately with our cloud-based IDE. No setup required.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Create your account</li>
                  <li>• Choose your programming language</li>
                  <li>• Start coding in your browser</li>
                  <li>• Run and test your code instantly</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Supported Languages</h3>
                <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <div>• Python 3.9+</div>
                  <div>• Java 17</div>
                  <div>• JavaScript (Node.js)</div>
                  <div>• TypeScript</div>
                  <div>• C++</div>
                  <div>• Go</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Syntax highlighting</li>
                  <li>• Auto-completion</li>
                  <li>• Real-time collaboration</li>
                  <li>• Version control integration</li>
                  <li>• Package management</li>
                  <li>• Terminal access</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">API Reference</h3>
                <p className="text-muted-foreground mb-4">
                  Integrate with our RESTful API for advanced functionality.
                </p>
                <Button variant="outline">
                  View API Docs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold text-foreground mb-4">TAG</div>
          <p className="text-muted-foreground">
            © 2024 TAG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;