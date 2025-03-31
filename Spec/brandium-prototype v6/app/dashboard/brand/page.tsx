import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Palette, Plus, ArrowRight, Download, Upload, FileText, Image, Music, Sparkles } from "lucide-react"

export default function BrandDesignPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Brand Design</h2>
          <p className="text-muted-foreground">Manage your brand's visual identity and design assets.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Assets
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Asset
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assets</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground">+32 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brand Consistency</CardTitle>
            <Palette className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+5% from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Asset Usage</CardTitle>
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
            <div className="text-2xl font-bold">1,842</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Brand Recognition</CardTitle>
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
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+7% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Brand Assets</CardTitle>
            <CardDescription>Manage your brand's design assets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <Image className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Logo Collection</h3>
                      <p className="text-sm text-muted-foreground">12 files • Updated 2 weeks ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-4">
                  <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Logo 1</span>
                  </div>
                  <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Logo 2</span>
                  </div>
                  <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Logo 3</span>
                  </div>
                  <div className="h-16 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">+9</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <Palette className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Brand Colors</h3>
                      <p className="text-sm text-muted-foreground">6 color palettes • Updated 1 month ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#106D7C]"></div>
                  <div className="h-8 w-8 rounded-full bg-[#1A8A9C]"></div>
                  <div className="h-8 w-8 rounded-full bg-[#25A7BC]"></div>
                  <div className="h-8 w-8 rounded-full bg-[#30C4DC]"></div>
                  <div className="h-8 w-8 rounded-full bg-[#FF7557]"></div>
                  <div className="h-8 w-8 rounded-full bg-[#F4F7F9]"></div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <FileText className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Typography</h3>
                      <p className="text-sm text-muted-foreground">3 font families • Updated 2 months ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div>
                    <p className="text-sm font-medium">Inter</p>
                    <p className="text-sm text-muted-foreground">Primary Font • Headings & Body</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Montserrat</p>
                    <p className="text-sm text-muted-foreground">Secondary Font • Accents</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Roboto Mono</p>
                    <p className="text-sm text-muted-foreground">Tertiary Font • Code & Technical</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Assets
            </Button>
          </CardFooter>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Brand Guidelines</CardTitle>
            <CardDescription>Access and manage your brand guidelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <FileText className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Brand Style Guide</h3>
                      <p className="text-sm text-muted-foreground">PDF • Updated 1 month ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <FileText className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Logo Usage Guidelines</h3>
                      <p className="text-sm text-muted-foreground">PDF • Updated 2 months ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <FileText className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Brand Voice & Tone</h3>
                      <p className="text-sm text-muted-foreground">PDF • Updated 3 months ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                      <FileText className="h-5 w-5 text-[#106D7C]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Social Media Guidelines</h3>
                      <p className="text-sm text-muted-foreground">PDF • Updated 2 weeks ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            <Button className="mt-6 bg-[#106D7C] hover:bg-[#0A5A68]">
              <Plus className="mr-2 h-4 w-4" />
              Add Guideline
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="templates">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="icons">Icons & Illustrations</TabsTrigger>
            <TabsTrigger value="photos">Photography</TabsTrigger>
            <TabsTrigger value="audio">Audio & Video</TabsTrigger>
          </TabsList>
          <TabsContent value="templates" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Design Templates</CardTitle>
                    <CardDescription>Access and manage your design templates</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Template
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <div className="h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Social Media Post</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">Social Media Post Template</h3>
                      <p className="text-sm text-muted-foreground">Multiple sizes for different platforms</p>
                      <div className="mt-4 flex items-center justify-between">
                        <Badge variant="outline">Photoshop</Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Email Newsletter</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">Email Newsletter Template</h3>
                      <p className="text-sm text-muted-foreground">Responsive design for all devices</p>
                      <div className="mt-4 flex items-center justify-between">
                        <Badge variant="outline">HTML</Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="h-40 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">Presentation</span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold">Presentation Template</h3>
                      <p className="text-sm text-muted-foreground">Professional slides for pitches</p>
                      <div className="mt-4 flex items-center justify-between">
                        <Badge variant="outline">PowerPoint</Badge>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="icons" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Icons & Illustrations</CardTitle>
                    <CardDescription>Manage your brand's icons and illustrations</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Asset
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Icon Set</h3>
                    <div className="mt-4 grid grid-cols-8 gap-4">
                      {Array(16)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={i}
                            className="h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
                          >
                            <span className="text-xs text-muted-foreground">{i + 1}</span>
                          </div>
                        ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline">SVG</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Illustrations</h3>
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Illustration 1</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Illustration 2</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Illustration 3</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline">PNG</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="photos" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Photography</CardTitle>
                    <CardDescription>Manage your brand's photography assets</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Photo
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Product Photography</h3>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Product 1</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Product 2</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Product 3</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Product 4</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline">High-Res</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-semibold">Team Photography</h3>
                    <div className="mt-4 grid grid-cols-4 gap-4">
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Team 1</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Team 2</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Team 3</span>
                      </div>
                      <div className="h-32 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Team 4</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="outline">High-Res</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="audio" className="mt-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Audio & Video</CardTitle>
                    <CardDescription>Manage your brand's audio and video assets</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Media
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
                          <Music className="h-5 w-5 text-[#106D7C]" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Brand Jingle</h3>
                          <p className="text-sm text-muted-foreground">MP3 • 0:15 • 2.4 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
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
                            className="h-5 w-5 text-[#106D7C]"
                          >
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Brand Introduction Video</h3>
                          <p className="text-sm text-muted-foreground">MP4 • 1:30 • 24.8 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#F4F7F9]">
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
                            className="h-5 w-5 text-[#106D7C]"
                          >
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect width="15" height="14" x="1" y="5" rx="2" ry="2"></rect>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Product Demo Video</h3>
                          <p className="text-sm text-muted-foreground">MP4 • 3:45 • 68.2 MB</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
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
          <CardTitle>AI Brand Design Assistant</CardTitle>
          <CardDescription>Generate brand assets with AI assistance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Logo Variations Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate different variations of your logo for various use cases and platforms.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Generate Logo Variations</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Social Media Template Creator</h3>
                  <p className="text-sm text-muted-foreground">
                    Create on-brand social media templates for different platforms and content types.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Create Social Templates</Button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-start gap-4">
                <Sparkles className="h-6 w-6 text-[#FF7557] mt-1" />
                <div className="space-y-2">
                  <h3 className="font-semibold">Color Palette Expander</h3>
                  <p className="text-sm text-muted-foreground">
                    Expand your brand color palette with complementary and accent colors.
                  </p>
                  <Button className="bg-[#106D7C] hover:bg-[#0A5A68]">Expand Color Palette</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

