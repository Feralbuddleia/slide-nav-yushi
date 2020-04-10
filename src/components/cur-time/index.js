import React from 'react';
import Clock from 'react-live-clock';
import './curtime.css';

// I didn't have time,
// so I used 'react-live-clock' to get the current time depends on timezone
// If need to write manually,
// I will use lifecycle, put setInterval inside componentDidMount to update every second,
// then clearInterval inside componentWillUnmount when user toggles city

const CurTime = (props) => {
    const { city, timezone, curCity } = props;
    const clicked = curCity === city ? 'clicked' : '';
    return (
        <div className={`timer ${clicked}`}>
            <h2>{city}</h2>
            <Clock
                format={'dddd, HH:mm:ss'}
                ticking={true}
                timezone={timezone}
            />
        </div>
    )
}

export default CurTime;