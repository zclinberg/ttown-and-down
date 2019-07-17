import React, { Component } from 'react';
import moment from 'moment';
import Countdown from 'react-countdown-now';
function DraftCountdown() {
  return <Countdown date={moment('2019-08-24 00:00:00').toDate()} />
}
export default DraftCountdown;