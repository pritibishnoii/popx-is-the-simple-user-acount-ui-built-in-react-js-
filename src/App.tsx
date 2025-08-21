
import { useState } from "react"
import WelcomeScreen from "./component/Welcome"
import SignInScreen from "./component/Signin"
import CreateAccountScreen from "./component/CreateAccount"
import AccountSettingsScreen from "./component/AccountSettings"

function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "signin" | "create" | "settings">("welcome")
  const [user, setUser] = useState<any>(null)

  const handleNavigation = (screen: "welcome" | "signin" | "create" | "settings") => {
    setCurrentScreen(screen)
  }

  const handleAccountCreated = (userData: any) => {
    setUser(userData)
    setCurrentScreen("settings")
  }

  const handleSignIn = (userData: any) => {
    setUser(userData)
    setCurrentScreen("settings")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "welcome" && <WelcomeScreen onNavigate={handleNavigation} />}
      {currentScreen === "signin" && <SignInScreen onNavigate={handleNavigation} onSignIn={handleSignIn} />}
      {currentScreen === "create" && (
        <CreateAccountScreen onNavigate={handleNavigation} onAccountCreated={handleAccountCreated} />
      )}
      {currentScreen === "settings" && <AccountSettingsScreen user={user} onNavigate={handleNavigation} />}
    </div>
  )
}

export default App
