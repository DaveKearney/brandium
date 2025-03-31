import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Clock, Code, Cpu, FileCode, Gauge, Globe, Smartphone, Zap } from "lucide-react"

export default function WebsiteOptimizationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Website Optimization</h1>
        <p className="text-muted-foreground">
          Improve your website's performance, user experience, and conversion rates.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="ux">User Experience</TabsTrigger>
          <TabsTrigger value="conversion">Conversion</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
                <Gauge className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86/100</div>
                <p className="text-xs text-muted-foreground">
                  +12 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Load Time</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.8s</div>
                <p className="text-xs text-muted-foreground">
                  -0.3s from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mobile Score</CardTitle>
                <Smartphone className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78/100</div>
                <p className="text-xs text-muted-foreground">
                  +8 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Website Health Overview</CardTitle>
                <CardDescription>
                  Key metrics and performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Gauge className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Core Web Vitals</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">Passed</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">LCP</div>
                        <div className="text-sm font-medium">2.1s</div>
                      </div>
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">FID</div>
                        <div className="text-sm font-medium">18ms</div>
                      </div>
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">CLS</div>
                        <div className="text-sm font-medium">0.05</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Cpu className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Resource Usage</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">JS</div>
                        <div className="text-sm font-medium">342KB</div>
                      </div>
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">CSS</div>
                        <div className="text-sm font-medium">86KB</div>
                      </div>
                      <div className="rounded-md border p-2">
                        <div className="text-xs text-muted-foreground">Images</div>
                        <div className="text-sm font-medium">1.2MB</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Browser Compatibility</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="rounded-md border p-2 text-center">
                        <div className="text-xs text-muted-foreground">Chrome</div>
                        <div className="text-sm font-medium">100%</div>
                      </div>
                      <div className="rounded-md border p-2 text-center">
                        <div className="text-xs text-muted-foreground">Firefox</div>
                        <div className="text-sm font-medium">98%</div>
                      </div>
                      <div className="rounded-md border p-2 text-center">
                        <div className="text-xs text-muted-foreground">Safari</div>
                        <div className="text-sm font-medium">96%</div>
                      </div>
                      <div className="rounded-md border p-2 text-center">
                        <div className="text-xs text-muted-foreground">Edge</div>
                        <div className="text-sm font-medium">99%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>AI Optimization Suggestions</CardTitle>
                <CardDescription>
                  Personalized recommendations to improve your website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Optimize image delivery
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Convert images to WebP format to reduce size by up to 30%
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Code className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Implement code splitting
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Reduce initial load time by 25% with JavaScript code splitting
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Improve mobile navigation
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Simplify mobile menu to increase mobile conversion rate by 15%
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <FileCode className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Minify CSS and JavaScript
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Reduce file sizes by up to 20% by removing unnecessary code
                      </p>
                    </div>
                \

