import type { Match } from "../types"
import { formatDate, formatTime } from "../utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { ShareableLink } from "@/components/ShareableLink"

const mockMatches: Match[] = [
  {
    id: "1",
    date: "2023-06-15",
    time: "18:30",
    location: "Central Park",
    confirmedPlayers: 8,
    totalSpots: 12,
    players: [],
  },
  {
    id: "2",
    date: "2023-06-17",
    time: "19:00",
    location: "Riverside Field",
    confirmedPlayers: 10,
    totalSpots: 14,
    players: [],
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Upcoming Matches</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockMatches.map((match) => (
          <Card key={match.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2" size={18} />
                  <span>{formatDate(match.date)}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-2" size={18} />
                  <span>{formatTime(match.time)}</span>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="mr-2" size={18} />
                <span>{match.location}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-2" size={18} />
                <span>
                  {match.confirmedPlayers} / {match.totalSpots} players
                </span>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-6 flex flex-col space-y-4">
              <ShareableLink matchId={match.id} />
              <div className="flex justify-between w-full">
                <Button variant="outline" className="w-[48%]">
                  Decline
                </Button>
                <Button className="w-[48%]">
                  <Link href={`/match/${match.id}`}>Join Match</Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

