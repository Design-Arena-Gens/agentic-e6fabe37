'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import { useState, useEffect } from 'react'

export function TradingChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    // Generate initial data
    const initialData = []
    const now = Date.now()
    const baseValue = 100000

    for (let i = 0; i < 50; i++) {
      const time = new Date(now - (49 - i) * 5 * 60 * 1000)
      const hours = time.getHours().toString().padStart(2, '0')
      const minutes = time.getMinutes().toString().padStart(2, '0')

      initialData.push({
        time: `${hours}:${minutes}`,
        value: baseValue + Math.random() * 5000 + i * 100,
      })
    }
    setData(initialData)

    // Update data every 3 seconds
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData.slice(1)]
        const lastValue = newData[newData.length - 1].value
        const now = new Date()
        const hours = now.getHours().toString().padStart(2, '0')
        const minutes = now.getMinutes().toString().padStart(2, '0')

        newData.push({
          time: `${hours}:${minutes}`,
          value: lastValue + (Math.random() - 0.5) * 500,
        })
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Portfolio Performance</h2>
          <p className="text-gray-400 text-sm mt-1">Real-time value tracking</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/50 hover:bg-blue-500/30 transition-colors">
            Live
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="time"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#374151' }}
          />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            tickLine={{ stroke: '#374151' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={(value: any) => [`$${value.toFixed(2)}`, 'Value']}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="url(#colorValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
