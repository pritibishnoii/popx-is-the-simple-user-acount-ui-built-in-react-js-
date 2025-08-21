import profile from "../assets/profile.jpg"

interface User {
  name?: string;
  email?: string;
}

interface AccountSettingsScreenProps {
  user: User;
}

export default function AccountSettings({ user }: AccountSettingsScreenProps) {
  return (
    <div className="flex flex-col min-h-screen px-6 py-8 max-w-sm mx-auto">
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-gray-700">Account Settings</h1>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <img src={profile} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{user?.name || "Marry Doe"}</h2>
            <p className="text-gray-600 text-sm">{user?.email || "Marry@Gmail.Com"}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
