import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, PlusCircle, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground mt-1">Manage your restaurant menu and QR codes.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <QrCode className="w-4 h-4" /> Download QR
          </Button>
          <Button className="gap-2 focus:ring-2 focus:ring-primary/50 transition-all">
            <PlusCircle className="w-4 h-4" /> Add Item
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Menu Items</CardDescription>
            <CardTitle className="text-4xl text-primary">24</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">+3 added this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>QR Code Views</CardDescription>
            <CardTitle className="text-4xl">1,048</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground border-primary overflow-hidden relative">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <CardHeader className="pb-2">
            <CardDescription className="text-primary-foreground/80">Public Link</CardDescription>
            <CardTitle className="text-2xl flex items-center justify-between">
              Status: Active
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <Button variant="secondary" className="w-full gap-2 font-mono text-xs shadow-lg hover:shadow-xl transition-all">
              <Copy className="w-3 h-3" /> /menu/my-store
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-bold tracking-tight mb-4 mt-4">Quick Setup Actions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/dashboard/menu">
            <Card className="hover:border-primary/50 cursor-pointer transition-colors hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Add your first menu item</CardTitle>
                <CardDescription>Create categories and add dishes with descriptions and prices.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Link href="/dashboard/settings">
            <Card className="hover:border-primary/50 cursor-pointer transition-colors hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Store details</CardTitle>
                <CardDescription>Update your restaurant name, logo, and customize your theme.</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
