"use client"

import { useState } from "react"
import type { Match, Player } from "../../../types"
import { formatDate, formatTime } from "../../../utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

const mockMatch: Match = {
  id: "1",
  date: "2023-06-15",
  time: "18:30",
  location: "Central Park",
  confirmedPlayers: 8,
  totalSpots: 12,
  players: [
    { id: "1", name: "John Doe", profilePicture: "/placeholder.svg", paymentStatus: "Paid" },
    { id: "2", name: "Jane Smith", profilePicture: "/placeholder.svg", paymentStatus: "Pending" },
    { id: "3", name: "Mike Johnson", profilePicture: "/placeholder.svg", paymentStatus: "Paid" },
  ],
}

export default function MatchDetails() {
  const [match] = useState<Match>(mockMatch)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Match Details</h1>
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2" size={18} />
              <span>{formatDate(match.date)}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2" size={18} />
              <span>{formatTime(match.time)}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2" size={18} />
              <span>{match.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="mr-2" size={18} />
              <span>
                {match.confirmedPlayers} / {match.totalSpots} players
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Confirmed Players</h2>
            <div className="space-y-2">
              {match.players.map((player: Player) => (
                <div key={player.id} className="flex items-center justify-between p-2 rounded bg-muted/50">
                  <div className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src={player.profilePicture} alt={player.name} />
                      <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{player.name}</span>
                  </div>
                  <span className={player.paymentStatus === "Paid" ? "text-green-600" : "text-yellow-600"}>
                    {player.paymentStatus}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6">
          <Link href="/payment" className="w-full">
            <Button className="w-full">Pay Now</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

