//Copyright  © 2020  Matt Roberts
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClockAnalogSecondsVideo from "../resources/ClockAnalogSeconds.mp4";
import AnalogClockImage from "../resources/AnalogClock.png";
import ClockShowHideDateVideo from "../resources/ClockShowHideDate.mp4";
import ClockShowHideDateImage from "../resources/ClockShowHideDate.png";

import CustomColorClockImage from "../resources/LightModeClockSmall/CustomColorClockLight.png";
import RedClockImage from "../resources/LightModeClockSmall/RedClockLight.png";
import OrangeClockImage from "../resources/LightModeClockSmall/OrangeClockLight.png";
import YellowClockImage from "../resources/LightModeClockSmall/YellowClockLight.png";
import GreenClockImage from "../resources/LightModeClockSmall/GreenClockLight.png";
import BlueClockImage from "../resources/LightModeClockSmall/BlueClockLight.png";
import PurpleClockImage from "../resources/LightModeClockSmall/PurpleClockLight.png";
import PinkClockImage from "../resources/LightModeClockSmall/PinkClockLight.png";
import BrownClockImage from "../resources/LightModeClockSmall/BrownClockLight.png";
import GrayClockImage from "../resources/LightModeClockSmall/GrayClockLight.png";
import WhiteClockImage from "../resources/LightModeClockSmall/WhiteClockLight.png";

import CustomColorClockDarkImage from "../resources/DarkModeClockSmall/CustomColorClockDark.png";
import RedClockDarkImage from "../resources/DarkModeClockSmall/RedClockDark.png";
import OrangeClockDarkImage from "../resources/DarkModeClockSmall/OrangeClockDark.png";
import YellowClockDarkImage from "../resources/DarkModeClockSmall/YellowClockDark.png";
import GreenClockDarkImage from "../resources/DarkModeClockSmall/GreenClockDark.png";
import BlueClockDarkImage from "../resources/DarkModeClockSmall/BlueClockDark.png";
import PurpleClockDarkImage from "../resources/DarkModeClockSmall/PurpleClockDark.png";
import PinkClockDarkImage from "../resources/DarkModeClockSmall/PinkClockDark.png";
import BrownClockDarkImage from "../resources/DarkModeClockSmall/BrownClockDark.png";
import BlackClockDarkImage from "../resources/DarkModeClockSmall/BlackClockDark.png";
import SystemDarkClockDarkImage from "../resources/DarkModeClockSmall/SystemDarkClockDark.png";
import GrayClockDarkImage from "../resources/DarkModeClockSmall/GrayClockDark.png";
import WhiteClockDarkImage from "../resources/DarkModeClockSmall/WhiteClockDark.png";

import AlarmSetUpImage from "../resources/AlarmSetUp.png";
import TimerSetUpImage from "../resources/TimerSetUp.png";

import UseTimerImage from "../resources/UseTimer.png";
import UseTimerVideo from "../resources/UseTimer.mp4";

import TimerImage from "../resources/LightTimer.png";

import DockClockImage from "../resources/DockClock.png";
import DockClockVideo from "../resources/DockClock.mp4";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    const dispatch=useDispatch()
    useEffect(()=>{dispatch({type: 'CHANGE_COLOR'});document.title = "Clock Suite"})
    const colorClass = useSelector(state => state.misc.colorClass)
    return (<div><div className={'main-background main-' + colorClass}><div className="main-margin">
        <br></br>
        <h1 className="text-align-center title">
            Clock Suite
        </h1>
        <img src={GreenClockImage} alt="Green Clock Suite"></img>
        <h2 className="text-align-center">
            A Great Clock Suite for your Mac--Alarms, Timers, a Resizable
            Clock, and a Dock Clock for your Mac's Dock.  All in
            brilliant color, that works in dark mode and light
            mode with many color choices that you'll desire.  Choose from
            songs you own or from built-in alerts for sounds when
            your alarms and timers go off.  Clock and Dock Clock can be
            digital or analog.
        </h2>
        <h1 className="text-align-center">
            Clock
        </h1>
        <h3 className="text-align-center">
            —Completely resizable, just by dragging its edges, anywhere from very small to full screen.
        </h3>
        <h3 className="text-align-center">
            —Can show or hide seconds.
        </h3>
        <h3 className="text-align-center">
            —Can be digital or analog.
        </h3>
        <video controls poster={AnalogClockImage}>
            <source src={ClockAnalogSecondsVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="text-align-center">
            —Can show or hide the date and the day of the week.
        </h3>
        <video controls poster={ClockShowHideDateImage}>
            <source src={ClockShowHideDateVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <br></br>
        <br></br>
        <br></br>
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
            —Works in system-wide dark mode and light mode.
            The app’s colors will automatically change when
            dark mode or light mode changes.
        </h3>
        <h2 className="text-align-center">
            Light Mode
        </h2>
        <div className="carousel">
            <Carousel showArrows={true} className="carousel-style">
                <div>
                    <img src={RedClockImage} alt="Clock Suite Red Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={OrangeClockImage} alt="Clock Suite Orange Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={YellowClockImage} alt="Clock Suite Yellow Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={GreenClockImage} alt="Clock Suite Green Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={BlueClockImage} alt="Clock Suite Blue Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={PurpleClockImage} alt="Clock Suite Purple Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={PinkClockImage} alt="Clock Suite Pink Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={BrownClockImage} alt="Clock Suite Brown Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={GrayClockImage} alt="Clock Suite Gray Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={WhiteClockImage} alt="Clock Suite White Color Scheme in Light Mode" />
                </div>
                <div>
                    <img src={CustomColorClockImage} alt="Clock Suite Custom Color Scheme in Light Mode" />
                </div>
            </Carousel>
        </div>
        <h2 className="text-align-center">
            Dark Mode
        </h2>
        <div className="carousel">
            <Carousel showArrows={true} className="carousel-style">
                <div>
                    <img src={RedClockDarkImage} alt="Clock Suite Red Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={OrangeClockDarkImage} alt="Clock Suite Orange Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={YellowClockDarkImage} alt="Clock Suite Yellow Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={GreenClockDarkImage} alt="Clock Suite Green Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={BlueClockDarkImage} alt="Clock Suite Blue Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={PurpleClockDarkImage} alt="Clock Suite Purple Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={PinkClockDarkImage} alt="Clock Suite Pink Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={BrownClockDarkImage} alt="Clock Suite Brown Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={BlackClockDarkImage} alt="Clock Suite Black Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={SystemDarkClockDarkImage} alt="Clock Suite System Dark Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={GrayClockDarkImage} alt="Clock Suite Gray Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={WhiteClockDarkImage} alt="Clock Suite White Color Scheme in Dark Mode" />
                </div>
                <div>
                    <img src={CustomColorClockDarkImage} alt="Clock Suite Custom Color Scheme in Dark Mode" />
                </div>
            </Carousel>
        </div>
        <h3 className="text-align-center">
            —Unified colors for the entire app with a single click.
        </h3>
        <h3 className="text-align-center">
            —Color choice can be the background color or the foreground color.
        </h3>
        <h1 className="text-align-center">
            Alarms and Timers
        </h1>
        <h2 className="text-align-center">
            Up to 24 Alarms.
        </h2>
        <img src={AlarmSetUpImage} alt="Alarm Set-Up" />
        <h2 className="text-align-center">
            3 Countdown Timers that can be set for up to
            23:59:59 hours each, or as short as you like.
        </h2>
        <img src={TimerSetUpImage} alt="Timer Set-Up" />
        <h3 className="text-align-center">
            —Countdown Timer counting-down is visible as time passes.
        </h3>
        <video controls poster={UseTimerImage}>
            <source src={UseTimerVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <h1 className="text-align-center">
            Alerts and Songs
        </h1>
        <h3 className="text-align-center">
            —Play songs or alerts when an alarm or timer goes off.
            (Please note—does not work with Apple Music.  You must
            own a copy of the song you wish to play.)
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
        <img src={TimerImage} alt="Countdown Timer"></img>
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
        <video controls poster={DockClockImage}>
            <source src={DockClockVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    </div>
        <br></br>
    </div>
    </div>);
}
export default Home;