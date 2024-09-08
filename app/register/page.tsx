"use client"
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
import React from "react"

export default function Register(){

    const [username, setUsername] = React.useState(new Set<string>())
    const [user, setUser] = React.useState("")
    
    function checkIfUserExists(user: string): boolean{
      if(username.has(user))
        return true
      return false
    }
    
    function getUserName(user: string){
      setUser(user)
      let isUserNameExist = checkIfUserExists(user)
      if (isUserNameExist){
        console.log(`user name ${user} already exists`)
      }
    }

    function persistUserName(){
      let isUserNameExist = checkIfUserExists(user)
      if(!isUserNameExist)
        setUsername((prevSet) => new Set([...prevSet,user]))
    }


    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
        <Card className="w-[500px]">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input id="name" placeholder="unique user name" onChange={(event) => getUserName(event.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button onClick={() => persistUserName()}>Deploy</Button>
        </CardFooter>
      </Card>
        </div>
    );
}

