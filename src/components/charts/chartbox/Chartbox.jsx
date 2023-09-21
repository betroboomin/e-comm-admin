import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import PropTypes from "prop-types"


const Chartbox = (props) => {
  return (
    <div className="box ">
            <div className="boxleft">
              <div className="boxleft-top">
              <img src="" alt="" />
              <span className="boxleft-top-text ">{props.title}</span>
              </div>
              <span className="boxleft-top-Total">{props.number}</span>
              <span style={{ color: props.color }}>View all</span>
              
            </div>
            <div className="boxright">
              <div className="charts-sec">
              <ResponsiveContainer className="charts" width="99%" height={100}>
                <LineChart  data={props.chartArray}>
                  <Tooltip
                  labelStyle={{ display:"none" }}
                  contentStyle={{ backgroundColor:"transparent", border:0 }}
                  position={{x:60, y:80}}
                  />
                  <Line type="monotone" dataKey={props.datakey} stroke={props.color} strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              </div>
              
              <span className="boxright-percentage" style={{ color: props.color }}>{props.percentage}%</span>
              <span className="boxright-duration">This month</span>
            </div>
          </div>
  )
}

Chartbox.propTypes = {
  datakey: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired, 
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chartArray: PropTypes.array.isRequired,

  percentage: PropTypes.number.isRequired,
};

export default Chartbox;