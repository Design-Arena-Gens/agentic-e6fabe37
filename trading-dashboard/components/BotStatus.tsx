import { Activity, Pause, AlertCircle } from 'lucide-react'

interface BotStatusProps {
  status: 'active' | 'paused' | 'error'
}

export function BotStatus({ status }: BotStatusProps) {
  const statusConfig = {
    active: {
      icon: <Activity className="w-5 h-5" />,
      text: 'Active',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/50',
    },
    paused: {
      icon: <Pause className="w-5 h-5" />,
      text: 'Paused',
      bgColor: 'bg-yellow-500/20',
      textColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/50',
    },
    error: {
      icon: <AlertCircle className="w-5 h-5" />,
      text: 'Error',
      bgColor: 'bg-red-500/20',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/50',
    },
  }

  const config = statusConfig[status]

  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${config.bgColor} ${config.borderColor}`}>
      <div className={config.textColor}>{config.icon}</div>
      <span className={`font-medium ${config.textColor}`}>{config.text}</span>
      {status === 'active' && (
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      )}
    </div>
  )
}
