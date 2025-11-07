import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: number
  icon: React.ReactNode
  trend: 'up' | 'down'
}

export function StatsCard({ title, value, change, icon, trend }: StatsCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-400 text-sm font-medium">{title}</div>
        <div className="text-blue-400">{icon}</div>
      </div>
      <div className="space-y-2">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="flex items-center gap-1">
          {trend === 'up' ? (
            <TrendingUp className="w-4 h-4 text-green-400" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-400" />
          )}
          <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {change > 0 ? '+' : ''}{change.toFixed(1)}%
          </span>
          <span className="text-gray-500 text-sm ml-1">vs yesterday</span>
        </div>
      </div>
    </div>
  )
}
