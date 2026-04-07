import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { MoveRight, QrCode } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-16 overflow-hidden">
        {/* Hero Section */}
        <div className="container mx-auto px-4 text-center mt-12 max-w-4xl relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -z-10 mix-blend-multiply" />
          
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
            QuickMenu is now in Beta
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            The Digital Menu For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Modern Restaurants</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Create beautiful, responsive digital menus in minutes. Generate QR codes automatically and let your customers browse on their own devices without downloading anything.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all w-full sm:w-auto">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full w-full sm:w-auto group border-border/50 hover:bg-muted/50">
              View Demo Menu <MoveRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Feature Teaser */}
        <div className="container mx-auto px-4 mt-32">
          <div className="rounded-3xl border border-border/40 bg-card overflow-hidden shadow-2xl relative shadow-primary/5">
            <div className="grid md:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <QrCode className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">No App Needed</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your customers just scan the QR code and instantly view your categorized, photo-rich menu. It is lightning fast and updates in real-time when you run out of an item.
                </p>
              </div>
              <div className="bg-muted/30 border-l border-border/40 min-h-[300px] flex items-center justify-center p-8 relative">
                {/* Visual placeholder for app mockup */}
                <div className="w-full max-w-[280px] h-[500px] bg-background rounded-[40px] shadow-2xl border-4 border-muted/50 p-4 relative overflow-hidden ring-1 ring-border/20 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                  <div className="w-1/3 h-5 bg-muted rounded-full mx-auto mb-6 absolute top-2 left-1/2 -translate-x-1/2" />
                  <div className="mt-6 flex gap-2 overflow-hidden pb-4">
                    <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Starters</div>
                    <div className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Mains</div>
                    <div className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">Drinks</div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-16 h-16 bg-muted rounded-xl shrink-0" />
                        <div>
                          <div className="w-24 h-4 bg-muted rounded mb-2" />
                          <div className="w-32 h-2 bg-muted/50 rounded mb-2" />
                          <div className="w-10 h-3 bg-primary/20 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
