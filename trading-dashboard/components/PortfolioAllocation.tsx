'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'BTC', value: 35, color: '#F7931A' },
  { name: 'ETH', value: 28, color: '#627EEA' },
  { name: 'SOL', value: 15, color: '#14F195' },
  { name: 'ADA', value: 12, color: '#0033AD' },
  { name: 'Others', value: 10, color: '#6B7280' },
]

export function PortfolioAllocation() {
  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-white">Portfolio Allocation</h2>
        <p className="text-gray-400 text-sm mt-1">Asset distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff'
            }}
            formatter={(value: any) => `${value}%`}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-700 last:border-0">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-gray-300 font-medium">{item.name}</span>
            </div>
            <span className="text-white font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
