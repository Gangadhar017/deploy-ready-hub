import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CodeEditor = () => {
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
            <span className="text-editor-foreground text-sm font-medium">main.py</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Select defaultValue="python">
              <SelectTrigger className="w-24 h-8 bg-card text-foreground border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm" className="h-8 px-3">
              <span className="mr-1">C</span>
            </Button>
            <Button size="sm" className="h-8 px-6">
              Run
            </Button>
          </div>
        </div>

        <div className="flex">
          {/* Code Area */}
          <div className="flex-1 p-4 font-mono text-sm">
            <div className="space-y-1">
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">1</span>
                <span className="text-editor-foreground">
                  <span className="text-code-keyword">def</span> <span className="text-code-string">greet</span>(name):
                </span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">2</span>
                <span className="text-editor-foreground ml-4">
                  <span className="text-code-keyword">print</span>(<span className="text-code-string">"greet name"</span>)
                </span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">3</span>
                <span className="text-editor-foreground"></span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">4</span>
                <span className="text-editor-foreground">
                  <span className="text-code-comment">;?</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">5</span>
                <span className="text-editor-foreground">
                  <span className="text-code-keyword">if</span> s &lt; nin &lt; -- main":
                </span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">6</span>
                <span className="text-editor-foreground ml-4">
                  greet(<span className="text-code-string">"World"</span>)
                </span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">7</span>
                <span className="text-editor-foreground"></span>
              </div>
              <div className="flex">
                <span className="text-muted-foreground w-6 text-right mr-4">8</span>
                <span className="text-editor-foreground"></span>
              </div>
            </div>
          </div>

          {/* Output Area */}
          <div className="w-80 border-l border-editor-border bg-editor-bg p-4">
            <div className="text-editor-foreground font-mono text-sm">
              <div className="text-success">Hello, World!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;