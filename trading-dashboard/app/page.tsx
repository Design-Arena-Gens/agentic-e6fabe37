'use client'

import { useState, useEffect } from 'react'
import { TradingChart } from '@/components/TradingChart'
import { StatsCard } from '@/components/StatsCard'
import { BotStatus } from '@/components/BotStatus'
import { RecentTrades } from '@/components/RecentTrades'
import { PortfolioAllocation } from '@/components/PortfolioAllocation'
import { TrendingUp, TrendingDown, Activity, DollarSign, BarChart3, Bot } from 'lucide-react'

export default function Dashboard() {
  const [data, setData] = useState({
    totalValue: 0,
    dailyPnL: 0,
    winRate: 0,
    activeTrades: 0,
    botStatus: 'active' as 'active' | 'paused' | 'error',
  })

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setData({
        totalValue: 125847.32 + (Math.random() - 0.5) * 1000,
        dailyPnL: 2847.12 + (Math.random() - 0.5) * 500,
        winRate: 68.5 + (Math.random() - 0.5) * 2,
        activeTrades: Math.floor(Math.random() * 5) + 12,
        botStatus: Math.random() > 0.95 ? 'error' : 'active',
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Bot className="w-8 h-8 text-blue-400" />
              Trading Bot Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Real-time monitoring and analytics</p>
          </div>
          <BotStatus status={data.botStatus} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Portfolio Value"
            value={`$${data.totalValue.toFixed(2)}`}
            change={+5.2}
            icon={<DollarSign className="w-5 h-5" />}
            trend="up"
          />
          <StatsCard
            title="Daily P&L"
            value={`$${data.dailyPnL.toFixed(2)}`}
            change={+12.8}
            icon={<TrendingUp className="w-5 h-5" />}
            trend="up"
          />
          <StatsCard
            title="Win Rate"
            value={`${data.winRate.toFixed(1)}%`}
            change={+2.3}
            icon={<BarChart3 className="w-5 h-5" />}
            trend="up"
          />
          <StatsCard
            title="Active Trades"
            value={data.activeTrades.toString()}
            change={-1.5}
            icon={<Activity className="w-5 h-5" />}
            trend="down"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trading Chart - 2/3 width */}
          <div className="lg:col-span-2">
            <TradingChart />
          </div>

          {/* Portfolio Allocation - 1/3 width */}
          <div className="lg:col-span-1">
            <PortfolioAllocation />
          </div>
        </div>

        {/* Recent Trades */}
        <RecentTrades />
      </div>
    </div>
  )
}
