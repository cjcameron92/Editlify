import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu } from "@/components/ui/menu";

export default function NewProject() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <div className="flex flex-1 justify-center items-start p-8 gap-16">
        <div className="flex flex-col space-y-6 max-w-xs">
          <h1 className="text-2xl font-bold self-center">Recent Projects</h1>

          <div className="text-center">
            <label
              htmlFor="upload"
              className="cursor-pointer py-2 px-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              Open Project From File
            </label>
            <input id="upload" type="file" className="hidden" accept=".json" />{" "}
            {/* Change the accept attribute based osn your project file format */}
          </div>
          {[...Array(7)].map((_, index) => (
            <Link key={index} href="/" passHref>  
              <Card
                key={index}
                className="w-full bg-white hover:bg-gray-50 shadow-lg rounded-lg overflow-hidden transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                <CardHeader className="px-4 py-3 flex justify-between items-center bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 10v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2h10a2 2 0 012 2zM9 18v.01M15 18v.01M9 6h.01M15 6h.01M12 6h.01M12 6H12m0 0a3 3 0 11-3 3 3 3 0 013-3m0 0a3 3 0 103 3 3 3 0 00-3-3z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        Untitled project #{index + 1}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        09/10/2022
                      </CardDescription>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                  >
                    <span className="sr-only">Edit</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      ></path>
                    </svg>
                  </button>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <Card className="w-[350px] shadow-lg rounded-lg text-center mt-12">
          <CardHeader>
            <CardTitle>New Project</CardTitle>
            <CardDescription>Start editing your video</CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <form className="space-y-4">
              <div className="flex flex-col">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Name of your project"
                  className="mt-1"
                />
              </div>
              <div className="flex flex-col">
                <Label htmlFor="videoFormat">Video Format</Label>
                <Select className="mt-1" id="videoFormat">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="vertical">Vertical</SelectItem>
                    <SelectItem value="horizontal">Horizontal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col">
                <Label htmlFor="resolution">Resolution</Label>
                <Select className="mt-1" id="resolution">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col">
                <Label htmlFor="aspectRatio">Aspect Ratio</Label>
                <Select className="mt-1" id="aspectRatio">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="16:9">16:9</SelectItem>
                    <SelectItem value="4:3">4:3</SelectItem>
                    <SelectItem value="1:1">1:1 (Square)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col">
                <Label htmlFor="frameRate">Frame Rate</Label>
                <Select className="mt-1" id="frameRate">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="24fps">24 fps (Cinema)</SelectItem>
                    <SelectItem value="30fps">30 fps (Standard)</SelectItem>
                    <SelectItem value="60fps">
                      60 fps (High Frame Rate)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col">
                <Label htmlFor="intendedPlatform">Intended Platform</Label>
                <Select className="mt-1" id="intendedPlatform">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="facebook">Facebook</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between p-4 bg-gray-50">
            <Button variant="outline">Cancel</Button>
            <Button>
                <Link href="/" passHref>
                Create
                </Link>
                </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
