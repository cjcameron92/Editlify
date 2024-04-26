"use client";

import Image from "next/image";
import { Menu } from "@/components/ui/menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

import { useToast } from "@/components/ui/use-toast";

const images = [
  "sample_video.png",
  "sample_video_1.png",
  "sample_video_2.png",
  "sample_video_3.png",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const iconContainerStyle = "flex space-x-4 overflow-auto";
  const { toast } = useToast();

  return (
    <>
      <div className="flex">
        <div className="w-1/2 p-4">
          <div className="flex justify-between">
          <Menu />
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="mt-2 mb-2">Export</Button>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4">
                <div className="flex flex-col gap-6">
                  <h4 className="font-medium text-lg">Export Settings</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="format">Format</Label>
                      <Select id="format" className="mt-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Format" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="mp4">MP4</SelectItem>
                          <SelectItem value="mov">MOV</SelectItem>
                          <SelectItem value="avi">AVI</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="resolution">Resolution</Label>
                      <Select id="resolution" className="mt-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Resolution" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="1080p">1080p</SelectItem>
                          <SelectItem value="720p">720p</SelectItem>
                          <SelectItem value="4k">4K</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="platform">Social Media Platform</Label>
                      <Select id="platform" className="mt-1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select Platform" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="twitter">Twitter</SelectItem>
                          <SelectItem value="tiktok">TikTok</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="airplane-mode" />
                      <Label htmlFor="airplane-mode">Publish Directly</Label>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button       onClick={() => {
        toast({
          title: "Publishing",
          description: "Video is being processed!",
        })
      }}>Export</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          </div>
                  <div className="flex flex-col space-y-4">
            <div className="flex space-x-2">
              <button className="px-4 py-2 text-sm font-semibold hover:bg-gray-200" onClick={() => setIndex(0)}>Media</button>
              <button className="px-4 py-2 text-sm font-semibold hover:bg-gray-200" onClick={() => setIndex(1)}>Transitions</button>
              <button className="px-4 py-2 text-sm font-semibold hover:bg-gray-200" onClick={() => setIndex(2)}>Text and Headings</button>
              <button className="px-4 py-2 text-sm font-semibold hover:bg-gray-200" onClick={() => setIndex(3)}>Animations</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <button key={i} className="hover:transition hover:duration-300 hover:ease-in-out hover:transform hover:scale-110" onClick={() => {
                  toast({
                    title: "Imported Media",
                    description: "Drag n Drop onto the track",
                  });
                }}>
                  <Image
                    src={`/assets/images/${images[index]}`}
                    alt="Sample Video"
                    width={128}
                    height={64}
                    layout="responsive"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2 p-4 mt-28">
          
          <Image
            src="/assets/images/sample_video.png"
            alt="Sample Video"
            width={512}
            height={350}
            layout="responsive"
          />
        </div>
      </div>
      <div className="h-32 bg-gray-200 flex justify-between items-center px-4">
        <div className={iconContainerStyle}>
          <button className="p-2 hover:rounded-sm hover:bg-gray-500" onClick={() => {
            toast({
              title: "Cut Tool",
              description: "Select a part of a video to split",
            })
          }}>
            <Image
              src="/assets/icons/scissors.png"
              alt="Cut"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
          <button className="p-2 hover:rounded-sm hover:bg-gray-500"       onClick={() => {
        toast({
          title: "Trim Tool",
          description: "Trim your media files down",
        })
      }}>
            <Image
              src="/assets/icons/trim.png"
              alt="Trim"
              width={32}
              height={32}
              layout="fixed"
            />
          </button            >

          <button className="p-2 hover:rounded-sm hover:bg-gray-500"       onClick={() => {
        toast({
          title: "Select Tool",
          description: "Select a position in the track",
        })
      }}>

            <Image
              src="/assets/icons/click.png"
              alt="Select"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
          <button className="p-2 hover:rounded-sm hover:bg-gray-500"       onClick={() => {
        toast({
          title: "Zoom Tool",
          description: "Zoom in or out in the media tracks",
        })
      }}>
            <Image
              src="/assets/icons/zoom-in.png"
              alt="Zoom"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
        </div>
        <div className={iconContainerStyle}>
          <button className="hover:bg-gray-300 hover:rounded-sm"       onClick={() => {
        toast({
          title: "Rewind Tool",
          description: "Rewind to your target destination",
        })
      }}>
            <Image
              src="/assets/icons/rewind-symbol.png"
              alt="Rewind"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
          <button className="hover:bg-gray-300 hover:rounded-sm" onClick={() => setPaused(!paused)}>
            <Image
              src={paused ? '/assets/icons/pause.png' : '/assets/icons/play.png'}
              alt="Play/Pause"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
          <button className="hover:bg-gray-300 hover:rounded-sm"       onClick={() => {
        toast({
          title: "Fast Forward",
          description: "Skip along to target destination",
        })
      }}>
            <Image
              src="/assets/icons/fast-forward.png"
              alt="Fast Forward"
              width={32}
              height={32}
              layout="fixed"
            />
          </button>
          <p className="text-lg">0:00</p>
        </div>
      </div>
      <div className="relative h-96 bg-gray-800">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600"></div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{ left: `calc(${(i / 7) * 100}% - 1px)` }}
          >
            <div className="h-full w-0.5 bg-gray-600 opacity-50"></div>
            <p className="text-xs text-gray-400" style={{ marginTop: `calc(100% - 20px)` }}>
              {new Date(i * 15 * 1000).toISOString().substr(14, 5)}
            </p>
          </div>
        ))}
        <Image
          src="/assets/images/sample_video.png"
          alt="Sample Video"
          width={250}
          height={64}
          layout="fixed"
          className="absolute bottom-1"
        />
        <div className="absolute top-0 ml-16 transform -translate-x-1/2 w-1 bg-red-500 h-full"></div>

      </div>
      <div className="h-32 bg-gray-600"></div>
    </>
  );
}

