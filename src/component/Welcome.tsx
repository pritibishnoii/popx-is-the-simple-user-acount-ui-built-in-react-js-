
import { Button } from "./Button"

interface WelcomeScreenProps {
  onNavigate: (screen: "welcome" | "signin" | "create" | "settings") => void
}

export default function Welcome({ onNavigate }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-8 max-w-sm mx-auto">
      {/* Step indicators */}
      <div className="flex flex-col items-center gap-4 mb-32">
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          1
        </div>
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
          2
        </div>
      </div>

      {/* Content */}
      <div className="text-center mb-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-4">
        <Button
          onClick={() => onNavigate("create")}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium"
        >
          Create Account
        </Button>
        <Button
          onClick={() => onNavigate("signin")}
          variant="secondary"
          className="w-full bg-purple-200 hover:bg-purple-300 text-purple-800 py-3 rounded-lg font-medium"
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  )
}
