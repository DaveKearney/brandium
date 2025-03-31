import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Plus, ArrowRight, Calendar, BarChart2, FileEdit, BookOpen, Video, Sparkles } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Content Marketing</h2>
          <p className="text-muted-foreground">Create engaging content that resonates with your target audience.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Content Calendar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Content
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Content</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+8 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Content Engagement</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,845</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Page</CardTitle>
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
            <div className="text-2xl font-bold">3:24</div>
            <p className="text-xs text-muted-foreground">+0:42 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lead Conversions</CardTitle>
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
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">284</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>Track how your content is performing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">10 Tips for Effective Digital Marketing</h3>
                    <p className="text-sm text-muted-foreground">Blog Post • Published 2 weeks ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Views</p>
                    <p className="font-medium">2,845</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg. Time</p>
                    <p className="font-medium">4:12</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shares</p>
                    <p className="font-medium">124</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversions</p>
                    <p className="font-medium">32</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">The Ultimate Guide to Brand Building</h3>
                    <p className="text-sm text-muted-foreground">Ebook • Published 1 month ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Downloads</p>
                    <p className="font-medium">487</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Form Fills</p>
                    <p className="font-medium">487</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shares</p>
                    <p className="font-medium">56</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversions</p>
                    <p className="font-medium">78</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">How to Create a Social Media Strategy</h3>
                    <p className="text-sm text-muted-foreground">Video • Published 3 days ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Views</p>
                    <p className="font-medium">1,245</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Avg. Watch Time</p>
                    <p className="font-medium">2:34</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shares</p>
                    <p className="font-medium">87</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Conversions</p>
                    <p className="font-medium">18</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Content
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Content Calendar</CardTitle>
            <CardDescription>Upcoming content schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">SEO Best Practices for 2025</h3>
                    <p className="text-sm text-muted-foreground">Blog Post • Scheduled for Jul 15</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline">SEO</Badge>
                  <Badge variant="outline">Marketing</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                    <span className="text-sm">John Doe</span>
                  </div>
                  <Badge className="bg-amber-500">In Progress</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">22</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email Marketing Strategies</h3>
                    <p className="text-sm text-muted-foreground">Webinar • Scheduled for Jul 22</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline">Email</Badge>
                  <Badge variant="outline">Webinar</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                    <span className="text-sm">Jane Smith</span>
                  </div>
                  <Badge className="bg-[#106D7C]">Planning</Badge>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">28</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Social Media Content Creation</h3>
                    <p className="text-sm text-muted-foreground">Video Tutorial • Scheduled for Jul 28</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline">Social</Badge>
                  <Badge variant="outline">Video</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                    <span className="text-sm">Mark Johnson</span>
                  </div>
                  <Badge className="bg-[#106D7C]">Planning</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="blog">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="blog">Blog Posts</TabsTrigger>
            <TabsTrigger value="lead-magnets">Lead Magnets</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="blog" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Blog Posts</CardTitle>
                    <CardDescription>Manage your blog content</CardDescription>
                  </div>
                  <Button>
                    <FileEdit className="mr-2 h-4 w-4" />
                    New Blog Post
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">10 Tips for Effective Digital Marketing</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Learn the top strategies for improving your digital marketing efforts and driving better results.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">John Doe • 2 weeks ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">How to Create a Content Strategy</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A step-by-step guide to developing a comprehensive content strategy for your business.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">Jane Smith • 1 month ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">SEO Best Practices for 2025</h3>
                      <Badge variant="outline">Draft</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Stay ahead of the competition with these cutting-edge SEO techniques for the coming year.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">John Doe • Last edited 2 days ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="lead-magnets" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Lead Magnets</CardTitle>
                    <CardDescription>Manage your downloadable content</CardDescription>
                  </div>
                  <Button>
                    <BookOpen className="mr-2 h-4 w-4" />
                    New Lead Magnet
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">The Ultimate Guide to Brand Building</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A comprehensive guide to building a strong brand identity and strategy from the ground up.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">Jane Smith • 1 month ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Social Media Marketing Checklist</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A step-by-step checklist to ensure your social media marketing campaigns are set up for success.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">Mark Johnson • 2 weeks ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Email Marketing Templates Pack</h3>
                      <Badge variant="outline">Draft</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A collection of 10 proven email templates to boost your open rates and conversions.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">John Doe • Last edited 3 days ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="case-studies" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Case Studies</CardTitle>
                    <CardDescription>Showcase your success stories</CardDescription>
                  </div>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    New Case Study
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">How Company X Increased Conversions by 150%</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      A detailed look at how our strategies helped Company X achieve remarkable growth in just 6 months.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">B2B</Badge>
                      <Badge variant="outline">SaaS</Badge>
                      <Badge variant="outline">Conversion Optimization</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">Jane Smith • 2 months ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">Startup Y's Journey to 10,000 Users</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      How we helped a startup scale their user acquisition through strategic marketing initiatives.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">Startup</Badge>
                      <Badge variant="outline">Growth</Badge>
                      <Badge variant="outline">User Acquisition</Badge>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-gray-200"></div>
                        <span className="text-sm">Mark Johnson • 3 weeks ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="videos" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Videos</CardTitle>
                    <CardDescription>Manage your video content</CardDescription>
                  </div>
                  <Button>
                    <Video className="mr-2 h-4 w-4" />
                    New Video
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">How to Create a Social Media Strategy</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <div className="mt-2 h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Video Thumbnail</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
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
                              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                            <span className="text-sm text-muted-foreground">1,245 views</span>
                          </div>
                          <div className="flex items-center gap-1">
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
                            <span className="text-sm text-muted-foreground">3 days ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">5 Tips for Better Email Campaigns</h3>
                      <Badge className="bg-[#25B879]">Published</Badge>
                    </div>
                    <div className="mt-2 h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Video Thumbnail</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
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
                              <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
                              <path d="M12 16v-4" />
                              <path d="M12 8h.01" />
                            </svg>
                            <span className="text-sm text-muted-foreground">876 views</span>
                          </div>
                          <div className="flex items-center gap-1">
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
                            <span className="text-sm text-muted-foreground">2 weeks ago</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Content Generator</CardTitle>
          <CardDescription>Generate high-quality content with AI assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Blog Post Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate SEO-optimized blog posts based on your target keywords and audience.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Generate Blog Post</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Social Media Content</h3>
                  <p className="text-sm text-muted-foreground">
                    Create engaging social media posts for multiple platforms with just a few clicks.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Generate Social Posts</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Email Newsletter</h3>
                  <p className="text-sm text-muted-foreground">
                    Draft compelling email newsletters that drive engagement and conversions.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Generate Newsletter</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

