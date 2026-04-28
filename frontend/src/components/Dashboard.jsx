import { useNavigate } from 'react-router-dom'

const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Welcome, {user?.username}! 👋
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">{user?.email}</p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Member Since</h3>
                <p className="text-gray-600">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ You're Logged In</h3>
              <p className="text-gray-600">
                You have successfully authenticated to the application. Your session is secure and active.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <p className="text-gray-600">✓ Account Status: <span className="font-semibold text-green-600">Active</span></p>
                <p className="text-gray-600">✓ Email Verified: <span className="font-semibold text-green-600">Yes</span></p>
                <p className="text-gray-600">✓ Security: <span className="font-semibold text-green-600">Protected</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
