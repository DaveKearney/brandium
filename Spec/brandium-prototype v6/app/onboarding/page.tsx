"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function OnboardingPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("brand")
  const [progress, setProgress] = useState(25)

  const handleNext = () => {
    if (activeTab === "brand") {
      setActiveTab("audience")
      setProgress(50)
    } else if (activeTab === "audience") {
      setActiveTab("competitors")
      setProgress(75)
    } else if (activeTab === "competitors") {
      setActiveTab("goals")
      setProgress(100)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#106D7C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17.5 5.5C19 7 20.5 9 21 11c.5 2 0 4-1 6-1 2-3 4-5.5 5.5-2.5 1.5-5.5 2-8 1.5-2.5-.5-4.5-2-6-4.5C-1 17 .5 13 2 10c1.5-3 4-6 7-7.5C12 1 15 1 17.5 2.5c2.5 1.5 4 4.5 4.5 7.5.5 3-1 6-3 8.5" />
              <path d="M13 13c-2 2-4 4-6 4" />
              <path d="M14 6c-1.5 1.5-3 3.5-4 6.5-1 3-1 5.5 0 8" />
            </svg>
            <span className="text-xl font-bold">Brandium</span>
          </div>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Welcome to Brandium</h1>
              <p className="text-gray-500">Let's set up your brand profile to get started</p>
            </div>
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>Brand Foundation</span>
                <span>Target Audience</span>
                <span>Competitors</span>
                <span>Goals</span>
              </div>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="brand">Brand</TabsTrigger>
                <TabsTrigger value="audience">Audience</TabsTrigger>
                <TabsTrigger value="competitors">Competitors</TabsTrigger>
                <TabsTrigger value="goals">Goals</TabsTrigger>
              </TabsList>
              <TabsContent value="brand" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Brand Foundation</CardTitle>
                    <CardDescription>Define your brand's core elements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mission">Mission Statement</Label>
                      <Textarea
                        id="mission"
                        placeholder="What is your brand's purpose? Why does your company exist?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vision">Vision Statement</Label>
                      <Textarea
                        id="vision"
                        placeholder="What does your brand aspire to achieve in the future?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="values">Core Values</Label>
                      <Textarea
                        id="values"
                        placeholder="What principles guide your brand's behavior and decisions?"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" disabled>
                      Back
                    </Button>
                    <Button onClick={handleNext}>Next</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="audience" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Target Audience</CardTitle>
                    <CardDescription>Define who your brand serves</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="demographics">Demographics</Label>
                      <Textarea
                        id="demographics"
                        placeholder="Age, gender, location, income, education, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="psychographics">Psychographics</Label>
                      <Textarea
                        id="psychographics"
                        placeholder="Values, interests, lifestyle, attitudes, behaviors, etc."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pain-points">Pain Points & Needs</Label>
                      <Textarea
                        id="pain-points"
                        placeholder="What problems does your audience face that your brand solves?"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveTab("brand")
                        setProgress(25)
                      }}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext}>Next</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="competitors" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Competitor Analysis</CardTitle>
                    <CardDescription>Understand your market landscape</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="competitor1">Primary Competitor 1</Label>
                      <Input id="competitor1" placeholder="Competitor name" />
                      <Textarea
                        id="competitor1-analysis"
                        placeholder="Strengths, weaknesses, positioning, and how you differentiate"
                        className="min-h-[100px] mt-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="competitor2">Primary Competitor 2</Label>
                      <Input id="competitor2" placeholder="Competitor name" />
                      <Textarea
                        id="competitor2-analysis"
                        placeholder="Strengths, weaknesses, positioning, and how you differentiate"
                        className="min-h-[100px] mt-2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="market-gap">Market Gap</Label>
                      <Textarea
                        id="market-gap"
                        placeholder="What opportunity exists in the market that your brand can uniquely fill?"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveTab("audience")
                        setProgress(50)
                      }}
                    >
                      Back
                    </Button>
                    <Button onClick={handleNext}>Next</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="goals" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Marketing Goals</CardTitle>
                    <CardDescription>Define what success looks like</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="short-term">Short-term Goals (3-6 months)</Label>
                      <Textarea
                        id="short-term"
                        placeholder="What do you want to achieve in the next 3-6 months?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="long-term">Long-term Goals (1-3 years)</Label>
                      <Textarea
                        id="long-term"
                        placeholder="What do you want to achieve in the next 1-3 years?"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="kpis">Key Performance Indicators</Label>
                      <Textarea
                        id="kpis"
                        placeholder="What metrics will you use to measure success?"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveTab("competitors")
                        setProgress(75)
                      }}
                    >
                      Back
                    </Button>
                    <Button onClick={() => router.push("/dashboard")} className="bg-[#106D7C] hover:bg-[#0A5A68]">
                      Complete Setup
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

