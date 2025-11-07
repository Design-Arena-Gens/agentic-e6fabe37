'use client'

import { useState, useEffect } from 'react'
import { ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react'

interface Trade {
  id: string
  pair: string
  type: 'buy' | 'sell'
  price: number
  amount: number
  profit: number
  time: string
  status: 'completed' | 'pending'
}

export function RecentTrades() {
  const [trades, setTrades] = useState<Trade[]>([
    {
      id: '1',
      pair: 'BTC/USDT',
      type: 'buy',
      price: 43250.50,
      amount: 0.5,
      profit: 325.50,
      time: '2 min ago',
      status: 'completed'
    },
    {
      id: '2',
      pair: 'ETH/USDT',
      type: 'sell',
      price: 2280.75,
      amount: 2.3,
      profit: -45.20,
      time: '5 min ago',
      status: 'completed'
    },
    {
      id: '3',
      pair: 'SOL/USDT',
      type: 'buy',
      price: 98.45,
      amount: 10,
      profit: 156.80,
      time: '8 min ago',
      status: 'completed'
    },
    {
      id: '4',
      pair: 'ADA/USDT',
      type: 'sell',
      price: 0.52,
      amount: 5000,
      profit: 89.30,
      time: '12 min ago',
      status: 'completed'
    },
  ])

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Recent Trades</h2>
          <p className="text-gray-400 text-sm mt-1">Latest trading activity</p>
        </div>
        <button className="px-4 py-2 text-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Pair</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Type</th>
              <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Price</th>
              <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
              <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">P&L</th>
              <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Time</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                <td className="py-4 px-4">
                  <span className="text-white font-medium">{trade.pair}</span>
                </td>
                <td className="py-4 px-4">
                  <div className={`flex items-center gap-1 w-fit px-2 py-1 rounded ${
                    trade.type === 'buy'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {trade.type === 'buy' ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium uppercase">{trade.type}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-right text-white">${trade.price.toFixed(2)}</td>
                <td className="py-4 px-4 text-right text-gray-300">{trade.amount}</td>
                <td className="py-4 px-4 text-right">
                  <span className={`font-semibold ${
                    trade.profit >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {trade.profit >= 0 ? '+' : ''}{trade.profit.toFixed(2)}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-1 text-gray-400 text-sm">
                    <Clock className="w-3 h-3" />
                    {trade.time}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
