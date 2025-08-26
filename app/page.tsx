import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, BookOpen, Search, Settings } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { caveat } from "@/lib/fonts";

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  mood?: string;
}

export default function JournalApp() {
  return (
    <div className="min-h-screen bg-background dot-grid">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">
                Life Tracker
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Entry
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search your entries..." className="pl-10" />
          </div>
        </header>

        <div className="grid grid-cols-1">
          <h2 className="text-2xl font-bold text-foreground">August 2025</h2>

          <Table className={`${caveat.className} text-2xl`}>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Day</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Task 1</TableHead>
                <TableHead>Task 2</TableHead>
                <TableHead>Task 3</TableHead>
                <TableHead className="text-right">Step Count</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>
                  Coding journal app today, worked out, played golf
                </TableCell>
                <TableCell>✅</TableCell>
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
                <TableCell className="text-right">12000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>
                  Coding journal app today, worked out, played golf
                </TableCell>
                <TableCell>✅</TableCell>
                <TableCell>❌</TableCell>
                <TableCell>✅</TableCell>
                <TableCell className="text-right">9000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
