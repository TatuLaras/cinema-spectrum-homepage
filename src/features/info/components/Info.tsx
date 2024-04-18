import SplitFeature from './SplitFeature';
import UnknownFeature from './UnknownFeature';

import '../styles/info.scss';
import screenshot1 from '../../../assets/screenshots/screenshot1.png';
import screenshot2 from '../../../assets/screenshots/screenshot2.png';
import screenshotTvShowDesktop from '../../../assets/screenshots/screenshot-tvshow-desktop.png';
import screenshotTvShowTv from '../../../assets/screenshots/screenshot-tvshow-tv.png';

import { memo, useEffect, useRef, useState } from 'react';
import { inView } from '../../../utils/inView';

function Info() {
    const [titleInView, setTitleInView] = useState(false);
    const titleRef = useRef<HTMLHeadingElement | null>(null);


    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    function onScroll() {
        setTitleInView(inView(titleRef.current!, 50, 'visible'));
    }

    return (
        <div className="info1">
            <div className="wrapper">
                <div className="blob-container">
                    <div className="bottom-layer"></div>
                    <div className="blob blob-4"></div>
                </div>
            </div>

            <div className="content">
                <h2
                    className={`panel ${titleInView ? 'in-view' : ''}`}
                    ref={titleRef}
                >
                    The <span className="hl">Media Center</span> You've Been
                    Looking For
                </h2>
                <SplitFeature
                    title="Your local streaming service"
                    img1={screenshot2}
                    img2={screenshot1}
                />
                <SplitFeature
                    title="Works well on both the TV and as a desktop app"
                    img1={screenshotTvShowDesktop}
                    img2={screenshotTvShowTv}
                />
                <UnknownFeature />
            </div>
        </div>
    );
}

export default memo(Info);
