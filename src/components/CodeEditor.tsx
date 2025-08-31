
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const CodeEditor = () => {
  const [code, setCode] = useState(`def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("World")`);
  
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState("Hello, World!");
  const [fileName, setFileName] = useState("main.py");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    
    // Update code template and filename based on language
    switch (newLanguage) {
      case "python":
        setCode(`def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("World")`);
        setFileName("main.py");
        setOutput("Hello, World!");
        break;
      case "java":
        setCode(`public class Main {
    public static void main(String[] args) {
        greet("World");
    }
    
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }
}`);
        setFileName("Main.java");
        setOutput("Hello, World!");
        break;
      case "javascript":
        setCode(`function greet(name) {
    console.log(\`Hello, \${name}!\`);
}

greet("World");`);
        setFileName("main.js");
        setOutput("Hello, World!");
        break;
      case "typescript":
        setCode(`function greet(name: string): void {
    console.log(\`Hello, \${name}!\`);
}

greet("World");`);
        setFileName("main.ts");
        setOutput("Hello, World!");
        break;
    }
  };

  const handleRun = () => {
    // Simulate code execution
    setOutput("Code executed successfully!\nHello, World!");
  };

  const handleCompile = () => {
    // Simulate code compilation
    setOutput("Compilation successful!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-editor-bg rounded-lg shadow-large overflow-hidden border border-editor-border">
        {/* Editor Header */}
        <div className="flex items-center justify-between p-4 border-b border-editor-border">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-editor-foreground text-sm font-medium">{fileName}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-32 h-8 bg-card text-foreground border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" className="h-8 px-3" onClick={handleCompile}>
              <span className="mr-1">⚡</span>
              Compile
            </Button>
            <Button size="sm" className="h-8 px-6" onClick={handleRun}>
              ▶ Run
            </Button>
          </div>
        </div>

        <div className="flex">
          {/* Code Input Area */}
          <div className="flex-1 p-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 font-mono text-sm bg-editor-bg text-editor-foreground border-0 resize-none focus:ring-0 focus:ring-offset-0"
              placeholder="Write your code here..."
            />
          </div>

          {/* Output Area */}
          <div className="w-80 border-l border-editor-border bg-editor-bg p-4">
            <div className="text-editor-foreground font-mono text-sm">
              <div className="text-muted-foreground mb-2">Output:</div>
              <div className="bg-card p-3 rounded border border-border">
                <pre className="text-success whitespace-pre-wrap">{output}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
