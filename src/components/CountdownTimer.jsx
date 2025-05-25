// CountdownTimer.jsx
import React, { useEffect } from 'react';
import '../styles/CountdownTimer.css';

const CountdownTimer = () => {
  useEffect(() => {
    const handleTickInit = (tick) => {
      const nextYear = new Date().getFullYear() + 1;
      const counter = window.Tick.count.down(
        `${nextYear}-01-01T00:00:00+01:00`
      );

      counter.onupdate = function (value) {
        tick.value = value;
      };

      counter.onended = function () {
        // tick.root.style.display = 'none';
        // document.querySelector('.tick-onended-message').style.display = '';
      };
    };

    window.handleTickInit = handleTickInit;
  }, []);

  return (
    <div className="countdown-wrapper">
      <div className="tick" data-did-init="handleTickInit">
        <div data-repeat="true" data-layout="horizontal fit" data-transform="preset(d, h, m, s) -> delay">
          <div className="tick-group">
            <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
              <span data-view="flip"></span>
            </div>
            <span data-key="label" data-view="text" className="tick-label"></span>
          </div>
        </div>
      </div>
      <div className="tick-onended-message" style={{ display: 'none' }}>
        <p>Time's up</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
