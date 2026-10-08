import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import { useState } from "react";
export function StudentInfo() {
  // const [open,setOpen] = useState(false);
  return (
    <Drawer
      swipeDirection="right"
    >
      <DrawerTrigger render={<Button variant="secondary">Supapit Chaitan</Button>}/>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student Information</DrawerDescription>
        </DrawerHeader>
        <Card>
          <img
            src="/Anya_forger.png"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover"/>
            <CardHeader>
              <CardTitle>Supapit Chaitan</CardTitle>
        <CardDescription>
          นักศึกษาชั้นปีที่ 2 สาขาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมคอมพิวเตอร์
        </CardDescription>
        <CardContent>
          <div>
            <Badge>Hobbies</Badge>ฟังเพลง ดูหนัง
          </div>
          <div>
            <Badge>Email</Badge>supapit_chai@cmu.ac.th
          </div>
          <div>
            <Badge>Social</Badge>https://www.facebook.com/supapit.chaitan.9
          </div>
        </CardContent>
            </CardHeader>
            <CardFooter>
        รหัสนักศึกษา: 680610722
      </CardFooter>    
          </Card>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>}></DrawerClose>
        </DrawerFooter>
      </DrawerContent>

    </Drawer>
    
  );
}
