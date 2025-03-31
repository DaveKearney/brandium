import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart2, Plus, ArrowRight, Users, Search, TrendingUp, Globe, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function MarketResearchPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Market Research</h2>
          <p className="text-muted-foreground">Analyze your market and competitors to identify opportunities.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <BarChart2 className="mr-2 h-4 w-4" />
            View Reports
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Research
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Size</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.2B</div>
            <p className="text-xs text-muted-foreground">+8% YoY growth</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Target Audience</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8M</div>
            <p className="text-xs text-muted-foreground">In your primary segment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Keyword Opportunities</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+18 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Market Trends</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Emerging trends identified</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Competitor Analysis</CardTitle>
            <CardDescription>Track and analyze your competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>CX</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">CompetitorX</h3>
                      <p className="text-sm text-muted-foreground">Primary Competitor</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Market Share</p>
                    <p className="font-medium">28%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Growth Rate</p>
                    <p className="font-medium">+12% YoY</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pricing</p>
                    <p className="font-medium">$80-150/mo</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Threat Level</p>
                    <Badge className="bg-red-500">High</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Competitive Position</h4>
                  <div className="mt-2 space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Product Features</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Marketing Effectiveness</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Customer Satisfaction</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>MP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">MarketPro</h3>
                      <p className="text-sm text-muted-foreground">Secondary Competitor</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Market Share</p>
                    <p className="font-medium">15%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Growth Rate</p>
                    <p className="font-medium">+22% YoY</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Pricing</p>
                    <p className="font-medium">$120-200/mo</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Threat Level</p>
                    <Badge className="bg-amber-500">Medium</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium">Competitive Position</h4>
                  <div className="mt-2 space-y-2">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Product Features</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Marketing Effectiveness</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Customer Satisfaction</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Competitors
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Market Trends</CardTitle>
            <CardDescription>Emerging trends in your industry</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#25B879]">Rising</Badge>
                  <h3 className="font-semibold">AI-Powered Marketing Automation</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The integration of AI in marketing automation tools is growing rapidly, with a 45% increase in
                  adoption over the past year.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500">+45% YoY</span>
                  </div>
                  <Button size="sm" variant="outline">
                    View Analysis
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#25B879]">Rising</Badge>
                  <h3 className="font-semibold">Personalized Customer Experiences</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Brands are increasingly focusing on delivering highly personalized customer experiences across all
                  touchpoints.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-500">+32% YoY</span>
                  </div>
                  <Button size="sm" variant="outline">
                    View Analysis
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-amber-500">Steady</Badge>
                  <h3 className="font-semibold">Video Content Marketing</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Video continues to be a dominant content format, with short-form videos gaining particular traction.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-amber-500" />
                    <span className="text-sm text-amber-500">+18% YoY</span>
                  </div>
                  <Button size="sm" variant="outline">
                    View Analysis
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="audience">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="audience">Audience Insights</TabsTrigger>
            <TabsTrigger value="keywords">Keyword Research</TabsTrigger>
            <TabsTrigger value="swot">SWOT Analysis</TabsTrigger>
            <TabsTrigger value="reports">Research Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="audience" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Audience Insights</CardTitle>
                <CardDescription>Understand your target audience demographics and behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Demographics</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Age: 25-34</span>
                          <span className="text-sm">42%</span>
                        </div>
                        <Progress value={42} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Age: 35-44</span>
                          <span className="text-sm">28%</span>
                        </div>
                        <Progress value={28} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Age: 45-54</span>
                          <span className="text-sm">18%</span>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Age: 18-24</span>
                          <span className="text-sm">12%</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold">Geographic Distribution</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">North America</span>
                          <span className="text-sm">45%</span>
                        </div>
                        <Progress value={45} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Europe</span>
                          <span className="text-sm">32%</span>
                        </div>
                        <Progress value={32} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Asia Pacific</span>
                          <span className="text-sm">18%</span>
                        </div>
                        <Progress value={18} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Rest of World</span>
                          <span className="text-sm">5%</span>
                        </div>
                        <Progress value={5} className="h-2" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Behavioral Insights</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">Primary Pain Points</h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Lack of time for marketing</li>
                          <li>• Difficulty measuring ROI</li>
                          <li>• Content creation challenges</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">Purchase Motivators</h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• Time-saving automation</li>
                          <li>• Comprehensive analytics</li>
                          <li>• Ease of use</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">Content Preferences</h4>
                        <ul className="mt-2 space-y-1 text-sm">
                          <li>• How-to guides and tutorials</li>
                          <li>• Case studies</li>
                          <li>• Industry reports</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="keywords" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Research</CardTitle>
                <CardDescription>Discover high-value keywords for your content and SEO strategy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
                      <div className="col-span-4">Keyword</div>
                      <div className="col-span-2 text-center">Search Volume</div>
                      <div className="col-span-2 text-center">Difficulty</div>
                      <div className="col-span-2 text-center">CPC</div>
                      <div className="col-span-2 text-center">Opportunity</div>
                    </div>

                    <div className="divide-y">
                      <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                        <div className="col-span-4">digital marketing platform</div>
                        <div className="col-span-2 text-center">5,400</div>
                        <div className="col-span-2 text-center">
                          <Badge
                            variant="outline"
                            className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
                          >
                            Medium
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">$12.50</div>
                        <div className="col-span-2 text-center">
                          <Badge className="bg-[#25B879]">High</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                        <div className="col-span-4">marketing automation tools</div>
                        <div className="col-span-2 text-center">8,200</div>
                        <div className="col-span-2 text-center">
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500"
                          >
                            High
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">$15.80</div>
                        <div className="col-span-2 text-center">
                          <Badge className="bg-amber-500">Medium</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                        <div className="col-span-4">ai marketing software</div>
                        <div className="col-span-2 text-center">4,800</div>
                        <div className="col-span-2 text-center">
                          <Badge
                            variant="outline"
                            className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500"
                          >
                            Medium
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">$14.20</div>
                        <div className="col-span-2 text-center">
                          <Badge className="bg-[#25B879]">High</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                        <div className="col-span-4">brand management software</div>
                        <div className="col-span-2 text-center">3,800</div>
                        <div className="col-span-2 text-center">
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500"
                          >
                            Low
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">$10.40</div>
                        <div className="col-span-2 text-center">
                          <Badge className="bg-[#25B879]">High</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                        <div className="col-span-4">social media management</div>
                        <div className="col-span-2 text-center">22,500</div>
                        <div className="col-span-2 text-center">
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-500"
                          >
                            High
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">$18.60</div>
                        <div className="col-span-2 text-center">
                          <Badge className="bg-amber-500">Medium</Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Keyword Clusters</h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">Marketing Automation</h4>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• marketing automation tools</li>
                          <li>• best marketing automation</li>
                          <li>• email marketing automation</li>
                          <li>• automation platform</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">AI Marketing</h4>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• ai marketing software</li>
                          <li>• ai for marketing</li>
                          <li>• ai content creation</li>
                          <li>• ai analytics</li>
                        </ul>
                      </div>

                      <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4">
                        <h4 className="text-sm font-medium">Brand Management</h4>
                        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                          <li>• brand management software</li>
                          <li>• brand asset management</li>
                          <li>• brand guidelines tool</li>
                          <li>• brand consistency</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="swot" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>SWOT Analysis</CardTitle>
                <CardDescription>Analyze your Strengths, Weaknesses, Opportunities, and Threats</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border p-4 bg-green-50 dark:bg-green-950/20">
                    <h3 className="font-semibold text-green-700 dark:text-green-400">Strengths</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-green-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Advanced AI Capabilities</p>
                          <p className="text-sm text-muted-foreground">
                            Our AI technology is more advanced than competitors, offering better automation and
                            insights.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-green-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">All-in-One Platform</p>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive solution that eliminates the need for multiple tools and platforms.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-green-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-green-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">User-Friendly Interface</p>
                          <p className="text-sm text-muted-foreground">
                            Intuitive design that requires minimal training and onboarding.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
                    <h3 className="font-semibold text-red-700 dark:text-red-400">Weaknesses</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-red-700"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Limited Enterprise Features</p>
                          <p className="text-sm text-muted-foreground">
                            Need to develop more robust features for large enterprise clients.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-red-700"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Newer Brand in the Market</p>
                          <p className="text-sm text-muted-foreground">
                            Less established brand recognition compared to some competitors.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-red-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-red-700"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Limited Integration Ecosystem</p>
                          <p className="text-sm text-muted-foreground">
                            Need to expand third-party integrations to compete with established platforms.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4 bg-blue-50 dark:bg-blue-950/20">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-400">Opportunities</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-blue-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Growing Market Demand</p>
                          <p className="text-sm text-muted-foreground">
                            Increasing demand for AI-powered marketing solutions across industries.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-blue-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Strategic Partnerships</p>
                          <p className="text-sm text-muted-foreground">
                            Potential for partnerships with complementary service providers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-blue-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-blue-700"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">International Expansion</p>
                          <p className="text-sm text-muted-foreground">
                            Opportunity to expand into emerging markets with growing digital adoption.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950/20">
                    <h3 className="font-semibold text-amber-700 dark:text-amber-400">Threats</h3>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-amber-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-amber-700"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Increasing Competition</p>
                          <p className="text-sm text-muted-foreground">
                            Growing number of competitors entering the AI marketing space.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-amber-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-amber-700"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Rapid Technology Changes</p>
                          <p className="text-sm text-muted-foreground">
                            Fast-paced technological advancements requiring continuous innovation.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-amber-200 p-1 mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 text-amber-700"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Data Privacy Regulations</p>
                          <p className="text-sm text-muted-foreground">
                            Evolving regulatory landscape around data privacy and AI usage.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Research Reports</CardTitle>
                <CardDescription>Access comprehensive market research reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <BarChart2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">2023 Digital Marketing Landscape</h3>
                          <p className="text-sm text-muted-foreground">
                            Comprehensive analysis of current trends and future projections
                          </p>
                        </div>
                      </div>
                      <Button>View Report</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Target Audience Analysis</h3>
                          <p className="text-sm text-muted-foreground">
                            Detailed breakdown of your ideal customer segments
                          </p>
                        </div>
                      </div>
                      <Button>View Report</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">AI in Marketing: 2023 Benchmark</h3>
                          <p className="text-sm text-muted-foreground">How AI is transforming the marketing industry</p>
                        </div>
                      </div>
                      <Button>View Report</Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Industry Competitive Analysis</h3>
                          <p className="text-sm text-muted-foreground">
                            Detailed comparison of top competitors in your space
                          </p>
                        </div>
                      </div>
                      <Button>View Report</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Generate Custom Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

