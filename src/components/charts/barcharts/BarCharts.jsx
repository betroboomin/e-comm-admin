import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'



const BarCharts = (props) => {
  return (
    <>
    <span className='box81-heading'>{props.title}</span>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={props.chartArray}>
            <Tooltip 
            labelStyle={{ display:"none" }}
            />
          <Bar dataKey={props.datakey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </>
    
  )
}

export default BarCharts