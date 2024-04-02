import { motion } from 'framer-motion';
import getVariants from '../variants';
import { useScroll, useSpring, useTransform } from 'framer-motion';

import '../styles/download.scss';
import windowsIcon from '../assets/windows.svg';
import linuxIcon from '../assets/linux.svg';
import { memo } from 'react';

function Download() {
    const { scrollY } = useScroll();
    const progress = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const position = useTransform(() => 100 + (progress.get() - 6500) * -0.9);
 
    return (
        <motion.div
            className="download"
            id="download"
            variants={getVariants('download')}
            initial={{ opacity: 0 }}
            style={{ y: position }}
        >
            <div className='panel'>
                <div className="title">Download and install</div>
                <div className="platforms">
                    <a className="platform" href="#">
                        <img src={windowsIcon} alt="" />
                        <div className="name">Windows</div>
                    </a>
                    <a className="platform" href="#">
                        <img src={linuxIcon} alt="" />
                        <div className="name">Linux</div>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default memo(Download);
