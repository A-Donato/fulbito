"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import type { Match } from "../../../types"
import { formatDate, formatTime } from "../../../utils"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function InvitePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [match, setMatch] = useState<Match | null>(null)

  useEffect(() => {
    // In a real app, you would fetch the match details from an API
    // For this example, we'll use mock data
    const mockMatch: Match = {
      id: params.id,
      date: "2023-06-15",
      time: "18:30",
      location: "Central Park",
      confirmedPlayers: 8,
      totalSpots: 12,
      players: [],
    }
    setMatch(mockMatch)
  }, [params.id])

  const handleAccept = () => {
    // In a real app, you would call an API to accept the invitation
    console.log("Accepted invitation")
    router.push(`/match/${params.id}`)
  }

  const handleDecline = () => {
    // In a real app, you would call an API to decline the invitation
    console.log("Declined invitation")
    router.push("/")
  }

  if (!match) {
    return <div className="text-center">Loading...</div>
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-6">Match Invitation</h1>
          <div className="space-y-4">
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
        </CardContent>
        <CardFooter className="p-6 flex justify-between">
          <Button onClick={handleDecline} variant="outline" className="w-[48%]">
            Decline
          </Button>
          <Button onClick={handleAccept} className="w-[48%]">
            Accept
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

