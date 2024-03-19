import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import getVariants from '../variants';
import { stages } from '../../../content';
import { parallax } from '../../../utils';
import SplitFeature from './SplitFeature';
import UnknownFeature from './UnknownFeature';

import '../styles/info.scss';
import screenshot1 from '../../../assets/screenshots/screenshot1.png';
import screenshot2 from '../../../assets/screenshots/screenshot2.png';

type Props = {};

export default function Info({}: Props) {
    const { scrollY } = useScroll();
    const progress = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const base = stages.find((val) => val.variant == 'info1')?.startsAt ?? 2000;

    const h2Position = useTransform(() => 200 + (progress.get() - base) * -0.9);
    const blobPosition = useTransform(() => parallax(progress.get() - base, 1));
    const bgPosition = useTransform(() => parallax(progress.get() - base, 4));

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
                <motion.h2 variants={getVariants('h2')}>
                    The <span className='hl'>Media Center</span> You've Been
                    Looking For
                </motion.h2>
                <SplitFeature
                    title='Your local streaming service'
                    img1={screenshot1}
                    img2={screenshot2}
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
