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
      <section className="py-20 px-4">
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