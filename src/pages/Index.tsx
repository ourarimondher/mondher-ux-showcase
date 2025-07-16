import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Hero Content */}
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Mondher Ourari
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Frontend developer passionate about{" "}
            <span className="text-primary font-semibold">UX/UI</span>
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              variant="hero" 
              size="lg"
              className="px-12 py-6 text-lg animate-glow-pulse"
            >
              View My Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
