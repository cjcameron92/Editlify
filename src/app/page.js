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
import { Menu2 } from "@/components/ui/menu2";

const projects = [
  {
    title: "3p94 Demo",
    date: "02/10/2024",
  },
  {
    title: "Orion Launch",
    date: "03/15/2024",
  },
  {
    title: "Halo Initiative",
    date: "04/22/2024",
  },
  {
    title: "Project Phoenix",
    date: "05/30/2024",
  },
  {
    title: "Neptune's Trident",
    date: "06/12/2024",
  },
  {
    title: "Athena Revival",
    date: "07/19/2024",
  },

];

export default function NewProject() {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu2 />
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
          <div className="divide-y divide-border rounded-md border">
            {projects.map((project, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-gray-100">
                <div className="grid gap-1">
                  <Link
                    href={`/project`}
                    className="font-semibold hover:underline"
                  >
                    {project.title}
                  </Link>
                  <div>
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
             
            </form>
          </CardContent>
          <CardFooter className="flex justify-between p-4 bg-gray-50">
            <Button variant="outline">Cancel</Button>
            <Button>
              <Link href="/project" passHref>
                Create
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
