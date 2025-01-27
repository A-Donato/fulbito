import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentConfirmation() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md bg-white shadow-md">
        <CardContent className="p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-green-800 mb-2">Payment Confirmed</h1>
          <p className="text-gray-600 mb-4">Your payment has been successfully processed.</p>
          <div className="bg-gray-50 p-4 rounded mb-4">
            <h2 className="font-semibold text-green-700 mb-2">Transaction Details</h2>
            <p className="text-gray-700">Amount: $10.00</p>
            <p className="text-gray-700">Date: {new Date().toLocaleDateString()}</p>
            <p className="text-gray-700">Transaction ID: 123456789</p>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4 flex justify-center">
          <Link href="/">
            <Button className="bg-green-600 text-white hover:bg-green-700">Back to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

