import React from 'react';
import { connect, useSelector } from 'react-redux';
const Home = () => {
    const colorClass=useSelector(state => state.misc.colorClass)
        return (<div><div className={'main-background main-'+colorClass}>
        <br></br>
        <h1 className="text-align-center">
            A Great Clock Suite for your Mac--Alarms, Timers, a Resizable 
            Clock and a Dock Clock for your Mac's Dock.  All in 
            brilliant color, that works in dark mode and light 
            mode with choices that you'll desire.  Choose from 
            songs you own or from built-in alerts for sounds when 
            your alarms and timers go off.
        </h1>
        <h1 className="text-align-center">
            Up to 24 Alarms.
        </h1>
        <h1 className="text-align-center">
            3 Countdown Timer that can be set for up to 
            23:59:59 hours each, or as short as you like.
        </h1>
        <h3 className="text-align-center">
            —Countdown Timer counting-down is visible as time passes.
        </h3>
        <h1 className="text-align-center">
            Alerts and Songs
        </h1>
        <h3 className="text-align-center">
            —Play songs or alerts when an alarm or timer goes off 
            (Please note—does not work with Apple Music.  You must
             own a copy of the song you wish to play).
        </h3>
        <h3 className="text-align-center">
            —Can have a playlist of songs from which to choose a song to 
            play when an alarm or timer goes off.
        </h3>
        <h3 className="text-align-center">
            —Alarms and Timers 
            will block your computer from sleeping unless you 
            tell it to sleep, so you don’t have to worry that 
            your alarm or timer will not go off.
        </h3>
        <h1 className="text-align-center">
            Colors
        </h1>
        <h3 className="text-align-center">
            —Comes with 12 built-in colors and a choice to 
            choose a custom color.  Colors are a system dark or light color, 
            black, gray, white, red, orange, yellow, green, 
            blue, purple, brown, or a custom color.
        </h3>
        <h3 className="text-align-center">
            —Works in system-wide dark mode and light-mode—
            the app’s colors will automatically change when 
            dark mode or light mode changes.
        </h3>
        <h3 className="text-align-center">
            —Unified colors for the entire app with a single click.
        </h3>
        <h3 className="text-align-center">
            —Color choice can be the background color or the foreground color.</h3>
        <h1 className="text-align-center">
            Clock
        </h1>
        <h3 className="text-align-center">
            —Completely resizable, just by dragging its edge, anywhere from very small to full screen.
        </h3>
        <h3 className="text-align-center">
            —Can show or hide seconds.
        </h3>
        <h3 className="text-align-center">
            —Can be digital or analog.
        </h3>
        <h3 className="text-align-center">
            —Can show or hide the date and the day of the week.
        </h3>
        <h1 className="text-align-center">
            Dock Clock
        </h1>
        <h3 className="text-align-center">
            —Runs when your app is in use or just open.
        </h3>
        <h3 className="text-align-center">
            —Can show or hide seconds.
        </h3>
        <h3 className="text-align-center">
            —Can be digital or analog.
        </h3>
        <br></br>
        </div>
        <br></br><br></br>
        </div>);
}
export default Home;