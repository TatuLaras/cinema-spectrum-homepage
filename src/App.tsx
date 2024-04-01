import { useEffect, useState } from 'react';
import './styles/screen.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import getVariants from './variants';
import Info from './features/info/components/Info';
import Download from './features/download/components/Download';
import { stages } from './content';
import { parallax } from './utils';

type Props = {};

export default function App({}: Props) {
    const [scroll, setScroll] = useState<number>(0);
    const { scrollY } = useScroll();
    const progress = useSpring(scrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const blob2Scale = useTransform(() => progress.get() * 0.001 + 1);
    const titlePosition = useTransform(() => parallax(progress.get(), 0));
    const blob2Position = useTransform(() => parallax(progress.get(), 1));
    const blob3Position = useTransform(() => 320 + parallax(progress.get(), 2));
    const blob1Position = useTransform(() => 150 + parallax(progress.get(), 3));
    const bgPosition = useTransform(() => parallax(progress.get(), 4));
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    function onScroll(this: Window) {
        setScroll(this.scrollY);
    }

    function getCurrentVariant() {
        let variant = 'initial';
        let variantScroll = 0;

        for (const stage of stages) {
            if (scroll < stage.startsAt) continue;
            if (stage.startsAt <= variantScroll) continue;

            variant = stage.variant;
            variantScroll = stage.startsAt;
        }

        return variant;
    }

    return (
        <motion.div
            className="screen"
            role="banner"
            animate={getCurrentVariant()}
        >
            <div className="noise-layer"></div>
            <motion.div className="bg">
                <motion.div
                    className="bottom-layer"
                    style={{ y: bgPosition }}
                ></motion.div>
                <motion.div
                    className="blob blob-1"
                    style={{
                        x: 155,
                        y: blob1Position,
                    }}
                    variants={getVariants('blob1')}
                ></motion.div>
                <motion.div
                    className="blob blob-2"
                    variants={getVariants('blob2')}
                    style={{ scale: blob2Scale, top: blob2Position }}
                ></motion.div>
                <motion.div
                    className="blob small blob-3"
                    variants={getVariants('blob3')}
                    style={{ top: blob3Position, left: 80 }}
                ></motion.div>
            </motion.div>
            <motion.h1
                className="main-title"
                variants={getVariants('mainTitle')}
                style={{ y: titlePosition }}
            >
                CINEMA
                <br />
                SPECTRUM
            </motion.h1>
            <Info />
            <Download />
        </motion.div>
    );
}
