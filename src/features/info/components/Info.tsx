import '../styles/info.scss';
import screenshot1 from '../../../assets/screenshots/screenshot1.png';
import screenshot2 from '../../../assets/screenshots/screenshot2.png';

import { memo, useEffect, useRef, useState } from 'react';
import { inView } from '../../../utils/inView';
import FeatureElement from '../../../components/FeatureElement';

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
                <FeatureElement title="All of your movies in one place ...">
                    <img src={screenshot1} alt="" />
                </FeatureElement>
                <FeatureElement
                    title="... with all of your TV shows"
                    className="split-feature"
                >
                    <img src={screenshot2} alt="" />
                </FeatureElement>
            </div>
        </div>
    );
}

export default memo(Info);
