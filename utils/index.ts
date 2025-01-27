import type { Match } from "../types"

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
}

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(":")
  const date = new Date()
  date.setHours(Number.parseInt(hours, 10))
  date.setMinutes(Number.parseInt(minutes, 10))
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
}

export const getRemainingSpots = (match: Match): number => {
  return match.totalSpots - match.confirmedPlayers
}

