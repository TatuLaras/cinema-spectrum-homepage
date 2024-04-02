import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import getVariants from '../variants';
import { parallax } from '../../../utils';
import SplitFeature from './SplitFeature';
import UnknownFeature from './UnknownFeature';

import '../styles/info.scss';
import screenshot1 from '../../../assets/screenshots/screenshot1.png';
import screenshot2 from '../../../assets/screenshots/screenshot2.png';
import { memo } from 'react';


function Info() {
    const { scrollY } = useScroll();
    const progress = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const h2Offset = useMotionValue(200);
    const base = useMotionValue(2000);
    const layer1 = useMotionValue(-0.9);
    const layer2 = useMotionValue(-0.08);
    const layer3 = useMotionValue(-0.01);
    const h2Position = useTransform(() => h2Offset.get() + (progress.get() - base.get()) * layer1.get());
    const blobPosition = useTransform(() => (progress.get() - base.get()) * layer2.get());
    const bgPosition = useTransform(() =>  (progress.get() - base.get()) * layer3.get());
    console.log("Info rerender");

    return (
        <motion.div
            className='info1'
            variants={getVariants('info1')}
            initial={{ opacity: 0 }}
        >
            <div className='wrapper'>
                <div className='blob-container'>
                    <motion.div
                        className='bottom-layer'
                        style={{ y: bgPosition }}
                    ></motion.div>
                    <motion.div
                        className='blob blob-4'
                        initial={{ rotate: -45 }}
                        style={{ y: blobPosition }}
                        variants={getVariants('blob4')}
                    ></motion.div>
                </div>
            </div>

            <motion.div className='content' style={{ y: h2Position }}>
                <motion.h2 className='panel' variants={getVariants('h2')}>
                    The <span className='hl'>Media Center</span> You've Been
                    Looking For
                </motion.h2>
                <SplitFeature
                    title='Your local streaming service'
                    img1={screenshot2}
                    img2={screenshot1}
                />
                <SplitFeature
                    title='Works well on both the TV and as a desktop app'
                    img1={screenshot1}
                    img2={screenshot2}
                />
                <UnknownFeature />
            </motion.div>
        </motion.div>
    );
}

export default memo(Info);
