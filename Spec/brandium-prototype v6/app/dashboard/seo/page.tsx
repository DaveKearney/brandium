import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Plus,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Minus,
  BarChart2,
  ExternalLink,
  AlertTriangle,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SEOPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">SEO & Analytics</h2>
          <p className="text-muted-foreground">
            Improve search rankings and track performance with detailed analytics.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <BarChart2 className="mr-2 h-4 w-4" />
            Analytics Report
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Keyword
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,842</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Keyword Rankings</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 18 22 12 16 6" />
              <path d="M8 6 2 12 8 18" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+5 new rankings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Domain Authority</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42/100</div>
            <p className="text-xs text-muted-foreground">+3 from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">287</div>
            <p className="text-xs text-muted-foreground">+24 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Keyword Rankings</CardTitle>
            <CardDescription>Track your search engine positions for target keywords</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <Input placeholder="Search keywords..." className="max-w-sm" />
                <Button variant="ghost" size="icon" className="ml-2">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 p-4 text-sm font-medium">
                  <div className="col-span-5">Keyword</div>
                  <div className="col-span-2 text-center">Position</div>
                  <div className="col-span-2 text-center">Change</div>
                  <div className="col-span-2 text-center">Volume</div>
                  <div className="col-span-1 text-right">Actions</div>
                </div>

                <div className="divide-y">
                  <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                    <div className="col-span-5">digital marketing platform</div>
                    <div className="col-span-2 text-center">3</div>
                    <div className="col-span-2 text-center flex items-center justify-center text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />2
                    </div>
                    <div className="col-span-2 text-center">5.4K</div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                    <div className="col-span-5">marketing automation tools</div>
                    <div className="col-span-2 text-center">8</div>
                    <div className="col-span-2 text-center flex items-center justify-center text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />4
                    </div>
                    <div className="col-span-2 text-center">8.2K</div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                    <div className="col-span-5">brand management software</div>
                    <div className="col-span-2 text-center">5</div>
                    <div className="col-span-2 text-center flex items-center justify-center text-red-600">
                      <ArrowDown className="mr-1 h-4 w-4" />1
                    </div>
                    <div className="col-span-2 text-center">3.8K</div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                    <div className="col-span-5">social media management</div>
                    <div className="col-span-2 text-center">12</div>
                    <div className="col-span-2 text-center flex items-center justify-center">
                      <Minus className="mr-1 h-4 w-4" />0
                    </div>
                    <div className="col-span-2 text-center">22.5K</div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-2 p-4 text-sm">
                    <div className="col-span-5">content marketing platform</div>
                    <div className="col-span-2 text-center">7</div>
                    <div className="col-span-2 text-center flex items-center justify-center text-green-600">
                      <ArrowUp className="mr-1 h-4 w-4" />3
                    </div>
                    <div className="col-span-2 text-center">6.7K</div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Keywords
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Technical SEO</CardTitle>
            <CardDescription>Audit your website for technical SEO issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Site Health</h3>
                  <Badge className="bg-[#25B879]">Good</Badge>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">Overall Score</div>
                    <div className="text-sm text-muted-foreground">82/100</div>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">Issues Found</h3>
                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Missing Meta Descriptions</p>
                      <p className="text-xs text-muted-foreground">4 pages affected</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Slow Page Load</p>
                      <p className="text-xs text-muted-foreground">2 pages affected</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Broken Links</p>
                      <p className="text-xs text-muted-foreground">3 links affected</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-[#106D7C] hover:bg-[#0A5A68]">Run Full Audit</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="analytics">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content-seo">Content SEO</TabsTrigger>
            <TabsTrigger value="local-seo">Local SEO</TabsTrigger>
          </TabsList>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Website Analytics</CardTitle>
                <CardDescription>Track your website performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Sessions</div>
                      <div className="mt-1 text-2xl font-bold">4,287</div>
                      <div className="mt-1 text-xs text-green-600">+8.3% from last month</div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Avg. Session Duration</div>
                      <div className="mt-1 text-2xl font-bold">2:34</div>
                      <div className="mt-1 text-xs text-green-600">+12% from last month</div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="text-sm text-muted-foreground">Bounce Rate</div>
                      <div className="mt-1 text-2xl font-bold">42.3%</div>
                      <div className="mt-1 text-xs text-red-600">+2.1% from last month</div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Traffic Sources</h3>
                    <div className="mt-4 h-64 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Traffic Source Chart</span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Organic</div>
                        <div className="text-lg font-bold">42%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Direct</div>
                        <div className="text-lg font-bold">28%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Referral</div>
                        <div className="text-lg font-bold">18%</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground">Social</div>
                        <div className="text-lg font-bold">12%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="content-seo" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Content SEO</CardTitle>
                <CardDescription>Optimize your content for search engines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Content Performance</h3>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">10 Tips for Effective Digital Marketing</p>
                          <p className="text-sm text-muted-foreground">Blog Post • Published 2 weeks ago</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">1,245 Views</p>
                          <p className="text-sm text-green-600">Ranking for 5 keywords</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">How to Build a Brand Strategy</p>
                          <p className="text-sm text-muted-foreground">Guide • Published 1 month ago</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">2,872 Views</p>
                          <p className="text-sm text-green-600">Ranking for 8 keywords</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Social Media Marketing in 2025</p>
                          <p className="text-sm text-muted-foreground">Blog Post • Published 3 days ago</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">876 Views</p>
                          <p className="text-sm text-amber-600">Ranking for 2 keywords</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Content Optimization Suggestions</h3>
                    <div className="mt-4 space-y-2">
                      <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 p-3">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Improve Keyword Density</p>
                            <p className="text-xs text-muted-foreground">
                              Your "Social Media Marketing in 2025" post could benefit from better keyword optimization.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg bg-amber-50 dark:bg-amber-950/20 p-3">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">Add More Internal Links</p>
                            <p className="text-xs text-muted-foreground">
                              Your "How to Build a Brand Strategy" guide needs more internal links to related content.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-[#106D7C] hover:bg-[#0A5A68]">
                  <Plus className="mr-2 h-4 w-4" />
                  Create SEO-Optimized Content
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="local-seo" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Local SEO</CardTitle>
                <CardDescription>Optimize your business for local search</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Google Business Profile</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm">Profile Completeness</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Progress value={85} className="h-2 w-40" />
                          <span className="text-sm">85%</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                        Complete Profile
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Local Citations</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-xs font-medium">YP</span>
                          </div>
                          <span>Yellow Pages</span>
                        </div>
                        <Badge className="bg-[#25B879]">Listed</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-xs font-medium">YL</span>
                          </div>
                          <span>Yelp</span>
                        </div>
                        <Badge className="bg-[#25B879]">Listed</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-xs font-medium">FB</span>
                          </div>
                          <span>Facebook</span>
                        </div>
                        <Badge className="bg-[#25B879]">Listed</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-xs font-medium">BB</span>
                          </div>
                          <span>BBB</span>
                        </div>
                        <Badge variant="outline">Not Listed</Badge>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Add More Citations
                    </Button>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Local Reviews</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span>Average Rating</span>
                        <div className="flex items-center">
                          <span className="mr-2 font-medium">4.7</span>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill={i < 4 || i === 4 ? "#FFD700" : "none"}
                                  stroke={i < 4 ? "none" : "#FFD700"}
                                  className="h-4 w-4"
                                >
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Total Reviews</span>
                        <span className="font-medium">48</span>
                      </div>
                    </div>
                    <Button size="sm" className="mt-4">
                      Manage Reviews
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

