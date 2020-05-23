import "react-image-carousel/lib/css/main.min.css"; // requires a loader
import './__app.css';

import Home from './index';
import Multimedia from "./multimedia";
import Manifest from "./manifest";
import { useEffect, useState } from "react";
import News from "./news";
export default function MyApp({ Component, pageProps }) {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        setLocation(window.location)
    }, []);
    return (location && location.href.indexOf('manifest') > -1
        ? <Manifest />
        : location && location.href.indexOf('multimedia') > -1
            ? <Multimedia />
            : location && location.href.indexOf('noticies') > -1 ? <News {...pageProps} />
                : <Home {...pageProps} />);
}