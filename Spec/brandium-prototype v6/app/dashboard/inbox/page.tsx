import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle, ArrowRight, Sparkles, Lightbulb } from "lucide-react"

export default function InboxPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Inbox</h2>
          <p className="text-muted-foreground">Manage your AI recommendations, tasks, and notifications</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Action Center</CardTitle>
          <CardDescription>Tasks and recommendations from your AI marketing assistant</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs defaultValue="ai">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ai">AI Recommendations</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Tasks</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="p-4 pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">Generate Social Media Content</h4>
                      <Badge variant="outline" className="ml-auto">
                        High Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Based on your brand guidelines, I can create a week's worth of social media posts for your
                      upcoming product launch.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                        Generate Content
                      </Button>
                      <Button size="sm" variant="outline">
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <Lightbulb className="h-6 w-6 text-[#FF7557] mt-1" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">SEO Improvement Opportunity</h4>
                      <Badge variant="outline" className="ml-auto">
                        Medium Priority
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      I've identified 3 high-value keywords your competitors are ranking for that you're missing. Would
                      you like me to suggest content ideas?
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                        View Suggestions
                      </Button>
                      <Button size="sm" variant="outline">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <AlertCircle className="h-6 w-6 text-[#FF7557] mt-1" />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">Website Performance Alert</h4>
                      <Badge variant="outline" className="ml-auto">
                        Urgent
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your homepage load time has increased by 35% in the last week. I've analyzed the issue and found
                      that large image files are the cause.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Button size="sm" className="bg-[#106D7C] hover:bg-[#0A5A68]">
                        Fix Automatically
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="p-0">
              <div className="divide-y">
                <div className="flex items-center gap-4 p-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Update social media content calendar</p>
                    <p className="text-xs text-muted-foreground">Due in 2 days</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Mark Complete
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Review Q2 marketing performance</p>
                    <p className="text-xs text-muted-foreground">Due in 3 days</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Mark Complete
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Finalize email newsletter content</p>
                    <p className="text-xs text-muted-foreground">Due in 5 days</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Mark Complete
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Prepare monthly analytics report</p>
                    <p className="text-xs text-muted-foreground">Due in 7 days</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    Mark Complete
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="completed" className="p-0">
              <div className="divide-y">
                <div className="flex items-center gap-4 p-4">
                  <CheckCircle className="h-5 w-5 text-[#25B879]" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Update brand guidelines document</p>
                    <p className="text-xs text-muted-foreground">Completed 2 days ago</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <CheckCircle className="h-5 w-5 text-[#25B879]" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Create landing page for summer campaign</p>
                    <p className="text-xs text-muted-foreground">Completed 5 days ago</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <CheckCircle className="h-5 w-5 text-[#25B879]" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Analyze competitor social media strategy</p>
                    <p className="text-xs text-muted-foreground">Completed 1 week ago</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4">
                  <CheckCircle className="h-5 w-5 text-[#25B879]" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">Optimize website images for faster loading</p>
                    <p className="text-xs text-muted-foreground">Completed 1 week ago</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
          <CardDescription>Updates and alerts from your marketing activities</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            <div className="flex items-start gap-4 p-4">
              <div className="rounded-full bg-blue-100 p-2">
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Campaign "Summer Sale" is now live</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
              <Button size="sm" variant="ghost">
                View
              </Button>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="rounded-full bg-green-100 p-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Weekly analytics report is ready</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
              <Button size="sm" variant="ghost">
                View
              </Button>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="rounded-full bg-amber-100 p-2">
                <AlertCircle className="h-4 w-4 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Social media engagement down 5% this week</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
              <Button size="sm" variant="ghost">
                Analyze
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

