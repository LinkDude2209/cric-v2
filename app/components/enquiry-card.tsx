import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export function QueryCard() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>For Enquiries</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Phone</Label>
                            <Input id="name" placeholder="Phone number" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" placeholder="abcd@gmail.com" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Message</Label>
                            <Input id="name" placeholder="Your query" />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">

                <Button>Submit</Button>
            </CardFooter>
        </Card>
    )
}
