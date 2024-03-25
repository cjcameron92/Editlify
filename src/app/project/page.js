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

const images = [
  "sample_video.png",
  "sample_video_1.png",
  "sample_video_2.png",
  "sample_video_3.png",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  return (
    <>
      <div>
        <div className="flex justify-between">
          <Menu />

          <div></div>
          <div className="mr-16 mt-2">
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
                    <Button>Export</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="justify-between items-center flex">
          <div className="flex justify-between">
            <div className="flex flex-col space-y-8 ml-8">
              <button
                className="p-2 hover:rounded-sm hover:bg-gray-200"
                onClick={() => setIndex(0)}
              >
                Media
              </button>
              <button
                className="p-2 hover:rounded-sm hover:bg-gray-200"
                onClick={() => setIndex(1)}
              >
                Transitions
              </button>
              <button
                className="p-2 hover:rounded-sm hover:bg-gray-200"
                onClick={() => setIndex(2)}
              >
                Text and Headings
              </button>
              <button
                className="p-2 hover:rounded-sm hover:bg-gray-200"
                onClick={() => setIndex(3)}
              >
                Animations
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:ml-8 md:grid-cols-3 md:ml-16 lg:grid-cols-4 lg:ml-8 gap-4 mb-4 ml-32">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  className="hover:transition hover:duration-300 hover:ease-in-out hover:transform group-hover:scale-110"
                >
                  <Image
                    key={i}
                    src={`/assets/images/${images[index]}`}
                    alt="Sample Video"
                    width={256}
                    height={64}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <Image
              src="/assets/images/sample_video.png"
              alt="Sample Video"
              width={1080}
              height={350}
            />
          </div>
        </div>
        <div className="h-16 bg-gray-200 flex justify-between items-center">
          <div className="flex space-x-8 mx-96">
            <button className="p-2 hover:rounded-sm hover:bg-gray-500">
              <Image
                src="/assets/icons/scissors.png"
                alt="Cut"
                height={32}
                width={32}
              />
            </button>
            <button className="p-2 hover:rounded-sm hover:bg-gray-500">
              <Image
                src="/assets/icons/trim.png"
                alt="Trim"
                height={32}
                width={32}
              />
            </button>
            <button className="p-2 hover:rounded-sm hover:bg-gray-500">
              <Image
                src="/assets/icons/click.png"
                alt="Select"
                height={32}
                width={32}
              />
            </button>
            <button className="p-2 hover:rounded-sm hover:bg-gray-500">
              {" "}
              <Image
                src="/assets/icons/zoom-in.png"
                alt="Zoom"
                height={32}
                width={32}
              />
            </button>
          </div>
          <div className="flex mx-96 space-x-8">
            <button className="hover:bg-gray-300 hover:rounded-sm">
              <Image
                src="/assets/icons/rewind-symbol.png"
                alt="Play"
                height={32}
                width={32}
              />
            </button>
            <button className="hover:bg-gray-300 hover:rounded-sm" onClick={() => setPaused(!paused)}>
              <Image
                src={paused === false ? '/assets/icons/play.png' : '/assets/icons/pause.png'}
                alt="Play"
                height={32}
                width={32}
              />
            </button>
            <button className="hover:bg-gray-300 hover:rounded-sm">
              <Image
                src="/assets/icons/fast-forward.png"
                alt="Play"
                height={32}
                width={32}
              />
            </button>
            <p className="text-lg">0:00</p>
          </div>
        </div>
        <div className="relative h-96 bg-gray-800">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600"></div>
          {[...Array(9)].map((_, i) => (
            <div
            key={i}
            className="absolute top-0"
              style={{ left: `calc(${(i / 8) * 110}% - 1px)` }}
            >
              <div className="h-4 w-0.5 bg-gray-600"></div>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(i * 15 * 1000).toISOString().substr(14, 5)}
              </p>
            </div>
          ))}
          <Image
            src="/assets/images/sample_video.png"
            alt="Sample Video"
            width={250}
            height={64}
            className="absolute bottom-1"
          />
        </div>{" "}
        <div className="h-32 bg-gray-600"></div>
      </div>
    </>
  );
}
