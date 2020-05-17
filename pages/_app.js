import "react-image-carousel/lib/css/main.min.css"; // requires a loader
import './__app.css';

import Home from './index';
import Multimedia from "./multimedia";
import { useEffect, useState } from "react";
export default function MyApp({ Component, pageProps }) {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        setLocation(window.location)
    }, []);
    return (location && location.href.indexOf('multimedia') > -1 ? <Multimedia /> : <Home {...pageProps} />);
}