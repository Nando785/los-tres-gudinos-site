"use client";

import { MyMap } from "@/components/layout/map";
import { BrickSection } from "@/components/brick-section";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [open, setOpen] = useState(false)
    
  return (
    <div>
        <div className="w-full min-h-svh bg-white/0 flex flex-col justify-center items-center text-white" id="title">
            <div className="text-5xl font-bold font-khand">LOS TRES GUDINOS</div>
            <div className="text-2xl">CONSTRUCTING YOUR FUTURE</div>
        </div>

        <div className="w-full h-[125px] bg-slate-800 flex justify-center" id="overlay">
            <div className="relative z-10 -translate-y-1/2 shadow-xl shadow-black/40 w-[750px] h-[150px] bg-white flex items-center
  justify-around font-bold ">
                <div>Family Owned <br /> and Operated!</div>
                <div>Call (832)-988-6550 <br /> For a Quote Today!</div>
                <div>Affordable Pricing <br /> Saves Your Money!</div>
            </div>
        </div>

        <div className="w-full h-[250px] bg-slate-800"  id="projects">
            OUR PAST PROJECTS
        </div>
        
        <BrickSection id="services">
            <Card className="bg-taupe-300">
                <CardHeader>
                    <CardTitle className="font-khand font-bold">OUR SERVICES</CardTitle>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
            </Card>
        </BrickSection>
        
        <div className="w-full h-[250px] bg-white/0" id="about">
            ABOUT OUR BUSINESS
        </div>

        <div className="w-full h-[250px] bg-stone-700" id="contact">
            GET IN TOUCH
        </div>

        {/* Contact section */}
        
        <div className="w-full bg-white py-16 md:py-24" id="hours">
            <div className="flex justify-around w-full">
                <h1 className="text-3xl font-bold p-5">Location & Hours</h1>
            </div>

            <div className="flex flex-row items-center justify-around w-full">
                <MyMap />
                <div>
                    <div>Hours of Operation</div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Day</TableHead>
                                <TableHead>Hours</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Monday</TableCell>
                                <TableCell>7:00 AM - 5:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tuesday</TableCell>
                                <TableCell>7:00 AM - 5:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Wednesday</TableCell>
                                <TableCell>7:00 AM - 5:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Thursday</TableCell>
                                <TableCell>7:00 AM - 5:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Friday</TableCell>
                                <TableCell>7:00 AM - 5:00 PM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Saturday</TableCell>
                                <TableCell>Closed</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Sunday</TableCell>
                                <TableCell>Closed</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
  );
}
