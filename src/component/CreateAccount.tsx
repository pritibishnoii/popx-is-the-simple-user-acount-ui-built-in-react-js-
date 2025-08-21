
import type React from "react"

import { useState } from "react"
import { Button } from "./Button"
import { Input } from "./Input"

interface CreateAccountScreenProps {
  onNavigate: (screen: "welcome" | "signin" | "create" | "settings") => void
  onAccountCreated: (userData: any) => void
}

export default function CreateAccountScreen({ onNavigate, onAccountCreated }: CreateAccountScreenProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAccountCreated({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phoneNumber,
      company: formData.companyName,
      isAgency: formData.isAgency === "yes",
    })
  }

  return (
    <div className="flex flex-col min-h-screen px-6 py-8 max-w-sm mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Create your PopX account</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex-1">
        <Input
          label="Full Name*"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          required
        />

        <Input
          label="Phone number*"
          placeholder="Marry Doe"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          required
        />

        <Input
          label="Email address*"
          type="email"
          placeholder="Marry Doe"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />

        <Input
          label="Password*"
          type="password"
          placeholder="Marry Doe"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          required
        />

        <Input
          label="Company name"
          placeholder="Marry Doe"
          value={formData.companyName}
          onChange={(e) => handleInputChange("companyName", e.target.value)}
        />

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Are you an Agency?*</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={(e) => handleInputChange("isAgency", e.target.value)}
                className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700">No</span>
            </label>
          </div>
        </div>

        <div className="pt-8">
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  )
}
