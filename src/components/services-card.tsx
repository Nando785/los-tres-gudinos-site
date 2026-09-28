import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const ServicesCard = () => {
    const services = [
        {
            name: "Construction or Installation",
            list: ["Service 1", "Service 2", "Service 3", "Service 4"]
        },
        {
            name: "Masonry/Concrete Repair",
            list: ["Service 5", "Service 6", "Service 7", "Service 8"]
        },
        {
            name: "Masonry/Concrete Sealing",
            list: ["Service 9", "Service 10", "Service 11", "Service 12"]
        },
        {
            name: "Masonry/Concrete Staining",
            list: ["Service 13", "Service 14", "Service 15", "Service 16"]
        },
        {
            name: "Construction Design Services",
            list: ["Service 17", "Service 18", "Service 19", "Service 20"]
        },
        {
            name: "Patio, Porch or Terrace Construction",
            list: ["Service 21", "Service 22", "Service 23", "Service 24"]
        },
        {
            name: "Structual Repair",
            list: ["Service 25", "Service 26", "Service 27", "Service 28"]
        },
        {
            name: "Remodeling",
            list: ["Service 29", "Service 30", "Service 31", "Service 32"]
        }
    ];

    return (
        <Card className="bg-taupe-300">
            <CardHeader>
                <CardTitle className="font-khand font-bold">OUR SERVICES</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 items-start sm:grid-cols-2">
                {services.map((item) => {
                   return (
                    <Collapsible key={item.name} className="group">
                        <CollapsibleTrigger asChild>
                            <Button variant="outline" className="w-full justify-between">
                                <span>{item.name}</span>
                            <ChevronDown className="transition-transform group-data-[state=open]:rotate-180" />
                            </Button>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <ul className="mt-2 space-y-1 px-4">
                                {item.list.map((service) => (
                                    <li key={service}>{service}</li>
                                ))}
                            </ul>
                        </CollapsibleContent>
                    </Collapsible>
                   ) 
                })}
            </CardContent>
        </Card>
    );

}