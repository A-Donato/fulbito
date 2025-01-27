import type { User } from "../../types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Trophy } from "lucide-react"

const mockUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  profilePicture: "/placeholder.svg",
  totalMatchesPlayed: 15,
  paymentHistory: [
    { id: "1", date: "2023-06-01", amount: 10, status: "Paid" },
    { id: "2", date: "2023-05-15", amount: 10, status: "Paid" },
    { id: "3", date: "2023-05-01", amount: 10, status: "Paid" },
  ],
  outstandingBalance: 0,
}

export default function Profile() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src={mockUser.profilePicture} alt={mockUser.name} />
            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">{mockUser.name}</CardTitle>
            <div className="flex items-center text-muted-foreground mt-1">
              <Mail className="mr-2" size={16} />
              <span>{mockUser.email}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center text-muted-foreground">
            <Trophy className="mr-2" size={18} />
            <span>{mockUser.totalMatchesPlayed} matches played</span>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment History</h2>
            <div className="space-y-2">
              {mockUser.paymentHistory.map((payment) => (
                <div key={payment.id} className="flex justify-between items-center p-2 rounded bg-muted/50">
                  <span>{payment.date}</span>
                  <span className="font-semibold">${payment.amount.toFixed(2)}</span>
                  <span className={payment.status === "Paid" ? "text-green-600" : "text-yellow-600"}>
                    {payment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {mockUser.outstandingBalance > 0 && (
            <div className="p-4 rounded bg-yellow-100 dark:bg-yellow-900">
              <h2 className="text-lg font-semibold text-yellow-800 dark:text-yellow-100 mb-2">Outstanding Balance</h2>
              <p className="text-yellow-700 dark:text-yellow-200">${mockUser.outstandingBalance.toFixed(2)}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

