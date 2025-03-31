import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Eye, MessageSquare, Volume2 } from "lucide-react"

export default function BrandVisionPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Brand Vision</h2>
          <p className="text-muted-foreground">
            Define your brand's vision, voice, and values to guide your marketing strategy
          </p>
        </div>
        <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Save Changes</Button>
      </div>

      <Tabs defaultValue="vision" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="vision">
            <Eye className="mr-2 h-4 w-4" />
            Vision & Mission
          </TabsTrigger>
          <TabsTrigger value="voice">
            <MessageSquare className="mr-2 h-4 w-4" />
            Brand Voice
          </TabsTrigger>
          <TabsTrigger value="values">
            <Volume2 className="mr-2 h-4 w-4" />
            Core Values
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vision" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Vision Statement</CardTitle>
              <CardDescription>
                Your vision statement describes what your brand aspires to achieve in the future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What does your brand aspire to achieve in the future? What impact do you want to make in your industry or the world?"
                className="min-h-[150px]"
              />
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium">Tips for a strong vision statement:</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Focus on the future (5-10 years ahead)</li>
                  <li>Be aspirational but achievable</li>
                  <li>Keep it concise (1-2 sentences)</li>
                  <li>Make it memorable and inspiring</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mission Statement</CardTitle>
              <CardDescription>
                Your mission statement defines your brand's purpose and how you'll achieve your vision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="What is your brand's purpose? Why does your company exist? How do you serve your customers?"
                className="min-h-[150px]"
              />
              <div className="mt-4 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium">Tips for a compelling mission statement:</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Focus on what you do today</li>
                  <li>Explain how you serve customers</li>
                  <li>Highlight what makes your approach unique</li>
                  <li>Keep it action-oriented</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Brand Voice</CardTitle>
              <CardDescription>
                Define how your brand communicates with your audience across all channels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="tone">Tone of Voice</Label>
                  <Textarea
                    id="tone"
                    placeholder="How would you describe your brand's tone? (e.g., friendly, professional, playful, authoritative)"
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="personality">Brand Personality</Label>
                  <Textarea
                    id="personality"
                    placeholder="If your brand were a person, how would you describe their personality traits?"
                    className="mt-2 min-h-[100px]"
                  />
                </div>

                <div>
                  <Label htmlFor="language">Language Guidelines</Label>
                  <Textarea
                    id="language"
                    placeholder="What words or phrases should your brand use or avoid? Any specific language patterns to maintain?"
                    className="mt-2 min-h-[100px]"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium">Why brand voice matters:</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  A consistent brand voice helps build recognition and trust with your audience. It ensures all your
                  communications feel cohesive and authentic, regardless of channel or team member creating the content.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="values" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Core Values</CardTitle>
              <CardDescription>Define the principles that guide your brand's behavior and decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="values">Primary Values</Label>
                  <Textarea
                    id="values"
                    placeholder="List 3-5 core values that define your brand (e.g., innovation, integrity, customer-centricity)"
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <div>
                  <Label htmlFor="descriptions">Value Descriptions</Label>
                  <Textarea
                    id="descriptions"
                    placeholder="For each value, provide a brief description of what it means for your brand and how it guides your actions"
                    className="mt-2 min-h-[200px]"
                  />
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-muted p-4">
                <p className="text-sm font-medium">How to use your core values:</p>
                <ul className="mt-2 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Use them to guide strategic decisions</li>
                  <li>Incorporate them into your hiring and onboarding processes</li>
                  <li>Reference them when creating marketing content</li>
                  <li>Evaluate partnerships and opportunities against them</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

