import Link from "next/link";
import { Copy, LayoutDashboard, QrCode, Settings, Store, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Store className="h-6 w-6 text-primary" />
            <span className="">QuickMenu Owner</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
            >
              <LayoutDashboard className="h-4 w-4" />
              Overview
            </Link>
            <Link
              href="/dashboard/menu"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Utensils className="h-4 w-4" />
              Menu Items
            </Link>
            <Link
              href="/dashboard/qr"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <QrCode className="h-4 w-4" />
              QR Code
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t">
          <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
            <h4 className="text-sm font-semibold mb-2">Share your Menu</h4>
            <p className="text-xs text-muted-foreground mb-3">Copy your public link.</p>
            <Button size="sm" variant="outline" className="w-full gap-2 font-mono text-xs">
              <Copy className="h-3 w-3" />
              /menu/my-store
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64 w-full">
        {/* Mobile Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <div className="flex-1 sm:hidden">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Store className="h-5 w-5 text-primary" />
              <span className="">QuickMenu</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xs text-primary ring-2 ring-background">
              OW
            </div>
          </div>
        </header>
        
        <main className="flex-1 items-start p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}
