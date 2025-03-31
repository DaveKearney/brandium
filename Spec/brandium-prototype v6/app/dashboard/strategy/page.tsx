import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, CheckCircle, Clock, LineChart, ListTodo, Target, TrendingUp } from "lucide-react"

export default function StrategyPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Strategy & Planning</h1>
        <p className="text-muted-foreground">
          Develop comprehensive marketing strategies and plan your campaigns effectively.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Goals Progress</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/36</div>
                <p className="text-xs text-muted-foreground">67% completion rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Time to Next Review</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8 days</div>
                <p className="text-xs text-muted-foreground">Quarterly strategy review</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Strategy Performance</CardTitle>
                <CardDescription>Track how your strategies are performing against goals</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-muted/20 flex items-center justify-center rounded-md">
                  <LineChart className="h-8 w-8 text-muted" />
                  <span className="ml-2 text-muted">Performance chart visualization</span>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>AI Strategy Recommendations</CardTitle>
                <CardDescription>Personalized recommendations based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Increase social media frequency</p>
                      <p className="text-sm text-muted-foreground">
                        Data shows 32% higher engagement on days with 3+ posts
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Refine target audience</p>
                      <p className="text-sm text-muted-foreground">
                        Current campaigns perform 45% better with 25-34 age group
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <LineChart className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Adjust content strategy</p>
                      <p className="text-sm text-muted-foreground">
                        Video content generates 2.8x more conversions than static images
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Tasks due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListTodo className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Finalize Q3 campaign brief</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Tomorrow</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListTodo className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Review competitor analysis</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Wed</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListTodo className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Update content calendar</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Thu</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ListTodo className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Prepare monthly report</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Fri</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Campaign Timeline</CardTitle>
                <CardDescription>Active and upcoming campaign schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Summer Promotion</span>
                    <span className="ml-auto text-xs text-muted-foreground">Active</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">Product Launch</span>
                    <span className="ml-auto text-xs text-muted-foreground">Starts in 2 weeks</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm font-medium">Holiday Campaign</span>
                    <span className="ml-auto text-xs text-muted-foreground">Starts in 6 weeks</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-0 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common strategy and planning tasks</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Button variant="outline" className="justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Create new goal
                </Button>
                <Button variant="outline" className="justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Plan new campaign
                </Button>
                <Button variant="outline" className="justify-start">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  Schedule strategy meeting
                </Button>
                <Button variant="outline" className="justify-start">
                  <ListTodo className="mr-2 h-4 w-4" />
                  Assign new task
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Goals</CardTitle>
              <CardDescription>Track and manage your marketing objectives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Increase website traffic</h3>
                    <span className="text-sm text-muted-foreground">75% complete</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Target: 50,000 monthly visitors by Q4</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Grow email subscribers</h3>
                    <span className="text-sm text-muted-foreground">40% complete</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Target: 10,000 subscribers by year end</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Improve conversion rate</h3>
                    <span className="text-sm text-muted-foreground">60% complete</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/5 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Target: 3.5% conversion rate by Q3</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Expand social media reach</h3>
                    <span className="text-sm text-muted-foreground">85% complete</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-primary rounded-full"></div>
                  </div>
                  <p className="text-sm text-muted-foreground">Target: 100,000 combined followers across platforms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Management</CardTitle>
              <CardDescription>Plan, track, and optimize your marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Summer Promotion</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Seasonal discount campaign across all channels
                      </p>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">Active</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">$12,500</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">Jun 1 - Aug 31</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROI</p>
                      <p className="font-medium">2.4x</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Product Launch</h3>
                      <p className="text-sm text-muted-foreground mt-1">New product introduction campaign</p>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                      Scheduled
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">$25,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">Sep 15 - Oct 31</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">Planning</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Holiday Campaign</h3>
                      <p className="text-sm text-muted-foreground mt-1">End-of-year holiday promotion</p>
                    </div>
                    <div className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                      Draft
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">$30,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">Nov 15 - Dec 31</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">Concept</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Calendar</CardTitle>
              <CardDescription>Schedule and visualize your marketing activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full bg-muted/20 flex items-center justify-center rounded-md">
                <CalendarDays className="h-8 w-8 text-muted" />
                <span className="ml-2 text-muted">Calendar visualization</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

