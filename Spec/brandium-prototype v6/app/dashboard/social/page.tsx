import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Share2, Plus, ArrowRight, Calendar, MessageSquare, Heart, Users, Sparkles } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SocialMediaPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Social Media</h2>
          <p className="text-muted-foreground">Manage and optimize your presence across all social platforms.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Content Calendar
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Post
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,892</div>
            <p className="text-xs text-muted-foreground">+1,234 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.8%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Post Reach</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78,432</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled Posts</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">For the next 7 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
            <CardDescription>Track your social media metrics across platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
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
                      className="h-6 w-6 text-blue-500"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <h3 className="font-semibold">Facebook</h3>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Followers</p>
                    <p className="font-medium">12,458</p>
                    <p className="text-xs text-green-600">+245</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium">3.2%</p>
                    <p className="text-xs text-green-600">+0.3%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reach</p>
                    <p className="font-medium">32,567</p>
                    <p className="text-xs text-green-600">+12%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Link Clicks</p>
                    <p className="font-medium">1,245</p>
                    <p className="text-xs text-green-600">+18%</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
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
                      className="h-6 w-6 text-pink-500"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <h3 className="font-semibold">Instagram</h3>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Followers</p>
                    <p className="font-medium">8,742</p>
                    <p className="text-xs text-green-600">+387</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium">4.8%</p>
                    <p className="text-xs text-green-600">+0.7%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reach</p>
                    <p className="font-medium">24,876</p>
                    <p className="text-xs text-green-600">+22%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Story Views</p>
                    <p className="font-medium">3,456</p>
                    <p className="text-xs text-green-600">+15%</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
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
                      className="h-6 w-6 text-sky-500"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <h3 className="font-semibold">Twitter</h3>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Followers</p>
                    <p className="font-medium">3,692</p>
                    <p className="text-xs text-green-600">+124</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium">2.1%</p>
                    <p className="text-xs text-red-600">-0.2%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Impressions</p>
                    <p className="font-medium">18,543</p>
                    <p className="text-xs text-green-600">+8%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Retweets</p>
                    <p className="font-medium">245</p>
                    <p className="text-xs text-green-600">+12%</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Platforms
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Posts</CardTitle>
            <CardDescription>Scheduled content for the next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">15</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">10 Tips for Effective Digital Marketing</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-blue-500"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        Facebook
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-pink-500"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        Instagram
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Scheduled for 10:00 AM</span>
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
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">16</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">How to Create a Content Strategy</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-blue-500"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        Facebook
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-sky-500"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        Twitter
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Scheduled for 2:00 PM</span>
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
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7F9]">
                    <span className="text-sm font-medium">18</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Social Media Marketing in 2025</h3>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-pink-500"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        Instagram
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
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
                          className="h-3 w-3 text-blue-500"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        LinkedIn
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Scheduled for 11:30 AM</span>
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
      </div>

      <div>
        <Tabs defaultValue="feed">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="feed">Social Feed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="mentions">Brand Mentions</TabsTrigger>
            <TabsTrigger value="influencers">Influencers</TabsTrigger>
          </TabsList>
          <TabsContent value="feed" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Social Feed</CardTitle>
                <CardDescription>Monitor and engage with your social media content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>YB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Your Brand</p>
                            <p className="text-sm text-muted-foreground">2 days ago • Facebook</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="mt-2">
                          Looking to improve your digital marketing strategy? Check out our latest blog post: "10 Tips
                          for Effective Digital Marketing" 🚀 #DigitalMarketing #MarketingTips
                        </p>
                        <div className="mt-4 h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">Post Image</span>
                        </div>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>124 Likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>18 Comments</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="h-4 w-4" />
                            <span>32 Shares</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>YB</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Your Brand</p>
                            <p className="text-sm text-muted-foreground">5 days ago • Instagram</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="mt-2">
                          Behind the scenes at our latest product photoshoot! Can't wait to share what we've been
                          working on. 📸 #ComingSoon #BehindTheScenes
                        </p>
                        <div className="mt-4 h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">Post Image</span>
                        </div>
                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>287 Likes</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>42 Comments</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="h-4 w-4" />
                            <span>15 Shares</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Analytics</CardTitle>
                <CardDescription>Track your social media performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Audience Growth</h3>
                    <div className="mt-4 h-64 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Audience Growth Chart</span>
                    </div>
                    <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <p className="text-muted-foreground">Facebook</p>
                        <p className="text-lg font-bold">+245</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">Instagram</p>
                        <p className="text-lg font-bold">+387</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">Twitter</p>
                        <p className="text-lg font-bold">+124</p>
                      </div>
                      <div className="text-center">
                        <p className="text-muted-foreground">LinkedIn</p>
                        <p className="text-lg font-bold">+98</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Content Performance</h3>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Engagement Rate</p>
                          <p className="text-sm text-muted-foreground">3.8%</p>
                        </div>
                        <Progress value={38} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Click-Through Rate</p>
                          <p className="text-sm text-muted-foreground">2.4%</p>
                        </div>
                        <Progress value={24} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Conversion Rate</p>
                          <p className="text-sm text-muted-foreground">1.2%</p>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mentions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Brand Mentions</CardTitle>
                <CardDescription>Monitor and respond to mentions of your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Jane Doe</p>
                            <p className="text-sm text-muted-foreground">1 day ago • Twitter</p>
                          </div>
                          <Badge className="bg-green-500">Positive</Badge>
                        </div>
                        <p className="mt-2">
                          Just tried @YourBrand's new service and I'm blown away! The customer support was amazing and
                          the product exceeded my expectations. Highly recommend! 👏
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                            Reply
                          </Button>
                          <Button size="sm" variant="outline">
                            Like
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>MS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">Mark Smith</p>
                            <p className="text-sm text-muted-foreground">3 days ago • Facebook</p>
                          </div>
                          <Badge className="bg-amber-500">Neutral</Badge>
                        </div>
                        <p className="mt-2">
                          Has anyone compared @YourBrand with their competitors? Looking for some honest feedback before
                          I make a decision.
                        </p>
                        <div className="mt-4 flex items-center gap-2">
                          <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                            Reply
                          </Button>
                          <Button size="sm" variant="outline">
                            Like
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="influencers" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Influencer Management</CardTitle>
                <CardDescription>Manage your influencer partnerships</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Sarah Johnson</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
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
                                className="h-3 w-3 text-pink-500"
                              >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                              </svg>
                              45K Followers
                            </Badge>
                            <Badge className="bg-[#25B879]">Active</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Campaign</p>
                        <p className="font-medium">Summer Launch</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">Content Approved</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Due Date</p>
                        <p className="font-medium">Jul 22, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>TB</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Tom Brown</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
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
                                className="h-3 w-3 text-blue-500"
                              >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                              </svg>
                              78K Followers
                            </Badge>
                            <Badge className="bg-amber-500">Pending</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Campaign</p>
                        <p className="font-medium">Product Review</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Status</p>
                        <p className="font-medium">Contract Sent</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Due Date</p>
                        <p className="font-medium">Aug 5, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-[#106D7C] hover:bg-[#0A5A68]">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Influencer
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Social Media Assistant</CardTitle>
          <CardDescription>Generate social media content with AI assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Content Calendar Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate a month's worth of social media content based on your brand guidelines and marketing goals.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Generate Calendar</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Caption Writer</h3>
                  <p className="text-sm text-muted-foreground">
                    Create engaging captions for your social media posts with appropriate hashtags and calls-to-action.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Write Captions</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Trend Analyzer</h3>
                  <p className="text-sm text-muted-foreground">
                    Identify trending topics in your industry and generate content ideas to capitalize on current
                    trends.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Analyze Trends</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

