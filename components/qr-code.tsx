"use client"

import { useEffect, useState } from "react"
import QRCode from "qrcode.react"

export default function QRCodeGenerator({ url = "https://elixir-bar.vercel.app" }: { url?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="bg-white p-4 rounded-lg">
      <QRCode
        value={url}
        size={200}
        level="H"
        includeMargin={true}
        renderAs="svg"
        imageSettings={{
          src: "/logo-small.png",
          x: undefined,
          y: undefined,
          height: 40,
          width: 40,
          excavate: true,
        }}
      />
    </div>
  )
}
