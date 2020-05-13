import "react-image-carousel/lib/css/main.min.css"; // requires a loader
import './__app.css';

import Home from './index';

export default function MyApp({ Component, pageProps }) {
    return <Home {...pageProps} />
}