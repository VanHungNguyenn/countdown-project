import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Grid2X2, List } from 'lucide-react'

const EventsToolbar = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Search + Tabs */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
          <Input
            placeholder="Search for holidays, festivals, or personal events..."
            className="pl-9"
          />
        </div>

        <Tabs defaultValue="all" className="w-full lg:w-auto">
          <TabsList className="flex w-full overflow-x-auto">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="public">Public Holidays</TabsTrigger>
            <TabsTrigger value="personal">My Events</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="h-px bg-border" />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-wrap gap-3">
          <Select defaultValue="upcoming">
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="upcoming">All Upcoming</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="3months">Next 3 Months</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="national">National</SelectItem>
              <SelectItem value="international">International</SelectItem>
              <SelectItem value="traditional">Traditional</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="soonest">
            <SelectTrigger className="w-[160px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="soonest">Soonest first</SelectItem>
              <SelectItem value="latest">Latest first</SelectItem>
              <SelectItem value="urgent">Most urgent</SelectItem>
              <SelectItem value="alphabet">Alphabetical</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex rounded-lg bg-muted p-1">
            <Button size="icon" variant="ghost">
              <Grid2X2 size={18} />
            </Button>
            <Button size="icon" variant="ghost">
              <List size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsToolbar
