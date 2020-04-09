import React from 'react';
import { Row } from 'antd';

import DayCol from './DayCol';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const Board = () => (
  <div>
    <Row gutter='[60, 60]' align='center'>
      {/* <DayCol day='Mon'/> */}
      {days.map((day, idx) => {
        return <DayCol day={day} key={idx} arr={Array.from({ length: 5 })} />
      })}
    </Row>
  </div>
)

export default Board;