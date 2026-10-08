import { useState } from "react";
import {Summary , LayoutGrid} from "lucide-react";
import { 
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger, 
} from "@/components/ui/tabs";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";

export function DashboardTabs() {
  const [mode,setMode] = useState<"overview"|"itemlist">("overview");
  return (
    <div className="w-full">
      <Tabs
        value = {mode}
        onValueChange={(v)=>setMode(v as "overview"|"itemlist")}
      >
        <TabsList>
          <TabsTrigger value="overview">
            <Summary/>overview
          </TabsTrigger>
          <TabsTrigger value="overview">
            <LayoutGrid/>By Category
          </TabsTrigger>
          <TabsContent value="overview" className="pt-2">
            <OverviewCards/>
          </TabsContent>
          <TabsContent value="itemlist" className="pt-2">
            <CategoryCards/>
          </TabsContent>
        </TabsList>
      </Tabs>
    </div>
  );
}
