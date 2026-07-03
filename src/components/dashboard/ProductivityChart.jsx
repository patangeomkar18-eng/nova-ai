import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../ui/Card";

const data = [
  { day: "Mon", value: 30 },
  { day: "Tue", value: 55 },
  { day: "Wed", value: 40 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 50 },
  { day: "Sat", value: 65 },
  { day: "Sun", value: 45 },
];

export default function ProductivityChart() {
  return (
    <Card className="col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium">Productivity</h3>
        <span className="text-xs text-text-muted">This Week</span>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#5C616D", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              background: "#1C1C24",
              border: "1px solid #26262F",
              borderRadius: 8,
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}