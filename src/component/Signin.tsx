"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"

interface SignInScreenProps {
  onNavigate: (screen: "welcome" | "signin" | "create" | "settings") => void
  onSignIn: (userData: any) => void
}

export default function Signin({ onNavigate, onSignIn }: SignInScreenProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock sign in
    onSignIn({ email, name: "Marry Doe" })
  }

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 max-w-sm mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Signin to your PopX account</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg font-medium mt-8"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}
