"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Share2, Copy, Check } from "lucide-react"

interface ShareableLinkProps {
  matchId: string
}

export function ShareableLink({ matchId }: ShareableLinkProps) {
  const [copied, setCopied] = useState(false)

  const shareLink = `${process.env.NEXT_PUBLIC_APP_URL}/invite/${matchId}`
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(`Join our football match! ${shareLink}`)}`

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex space-x-2">
      <Input value={shareLink} readOnly className="flex-grow" />
      <Button onClick={copyToClipboard} variant="outline" size="icon">
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <Button onClick={() => window.open(whatsappLink, "_blank")} variant="outline" size="icon">
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

