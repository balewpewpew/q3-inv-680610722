import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  const { inventory , deleteInventoryItem} = useItemStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product List</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead className="text-right">Qty</TableHead>
              <TableHead className="text-right">Unit Price</TableHead>
              <TableHead className="text-right">Total Value</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={7}
                  className="text-center text-muted-foreground py-6"
                >
                  No products in stock yet.
                </TableCell>
              </TableRow>
            )}
            <TableCell>
              {inventory.map((inv,i)=>(
              <TableRow key={i}>
                <TableCell>
                  <Badge variant="outline">{inv.category}</Badge>
                </TableCell>
                <TableCell className="font-medium">{inv.name}</TableCell>
                <TableCell className="text-right">{inv.quantity}</TableCell>
                <TableCell className="text-right">฿{inv.price}</TableCell>
                <TableCell className="text-right font-semibold">
                  ฿{(inv.quantity * inv.price).toFixed(2)}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {inv.date}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    className="text-white bg-red-500 hover:bg-red-600 text-white"
                    variant="ghost"
                    size="sm"
                    onClick={()=>deleteInventoryItem(inv.id)}
                  >
                    <Trash className="h-4 w-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              ))},
              </TableCell>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
