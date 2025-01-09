import * as React from "react";

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

export function QueryCard() {
    return (
        <Card className="w-[300px]">
            <CardHeader className="pb-2"> {/* Reduced bottom padding */}
                <CardTitle>For Enquiries</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-2">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Phone number" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="abcd@gmail.com" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="message">Message</Label>
                            <Input id="message" placeholder="Your query" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Submit</Button>
            </CardFooter>
        </Card>
    );
}
