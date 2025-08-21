
import {useState} from "react"

import WelcomeScreen from "./component/Welcome"
import SignInScreen from "./component/Signin"
import CreateAccountScreen from "./component/CreateAccount"
import AccountSettingsScreen from "./component/AccountSettings"

// Define the User type (customize fields as needed)
// Use the same UserData type as in Signin/CreateAccount
export type UserData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  isAgency?: boolean;
};

function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "signin" | "create" | "settings">("welcome")
  const [user, setUser] = useState<UserData | null>(null)

  const handleNavigation = (screen: "welcome" | "signin" | "create" | "settings") => {
    setCurrentScreen(screen)
  }

  const handleAccountCreated = (userData: UserData) => {
    setUser(userData)
    setCurrentScreen("settings")
  }

  const handleSignIn = (userData: UserData) => {
    setUser(userData)
    setCurrentScreen("settings")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === "welcome" && <WelcomeScreen onNavigate={handleNavigation} />}
      {currentScreen === "signin" && <SignInScreen onSignIn={handleSignIn} />}
      {currentScreen === "create" && (
        <CreateAccountScreen  onAccountCreated={handleAccountCreated} />
      )}
      {currentScreen === "settings" && <AccountSettingsScreen user={user}  />}
    </div>
  )
}

export default App
