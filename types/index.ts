declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_URL: string
    }
  }
}

export interface Match {
  id: string
  date: string
  time: string
  location: string
  confirmedPlayers: number
  totalSpots: number
  players: Player[]
}

export interface Player {
  id: string
  name: string
  profilePicture: string
  paymentStatus: "Paid" | "Pending"
}

export interface User {
  id: string
  name: string
  email: string
  profilePicture: string
  totalMatchesPlayed: number
  paymentHistory: PaymentRecord[]
  outstandingBalance: number
}

export interface PaymentRecord {
  id: string
  date: string
  amount: number
  status: "Paid" | "Pending"
}

