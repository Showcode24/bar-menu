"use client"

import { useState } from "react"
import QRCodeGenerator from "@/components/qr-code"

export default function QRPage() {
  const [url, setUrl] = useState("https://elixir-bar.vercel.app")

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8 text-amber-500">ELIXIR QR Code</h1>

      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <QRCodeGenerator url={url} />
        </div>

        <div className="mb-4">
          <label htmlFor="url" className="block text-sm font-medium text-zinc-400 mb-2">
            Menu URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white"
          />
        </div>

        <p className="text-zinc-400 text-sm mt-4">
          Print this QR code and place it on your tables for customers to access the digital menu.
        </p>
      </div>

      <a href="/" className="mt-8 text-amber-500 hover:underline">
        Back to Menu
      </a>
    </div>
  )
}
