import { CSSProperties, useEffect, useRef, useState } from 'react';
import FeatureElement from '../../../components/FeatureElement';

import '../styles/split_feature.scss';
import { Coords } from '../../../types';
import { motion, useMotionValue, useSpring, useVelocity } from 'framer-motion';

type Props = {
    title: string;
    img1: string;
    img2: string;
};

export default function SplitFeature({ title, img1, img2 }: Props) {
    const [wipe, setWipe] = useState<Coords>({ x: 0, y: 0 });
    const wipeX = useMotionValue(0);
    const wipeXSpeed = useVelocity(wipeX);
    const wipeXSpeedSpring = useSpring(wipeXSpeed, {
        damping: 50,
        stiffness: 400,
    });
    const splitImgRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        window?.addEventListener('mousemove', mouseMove);
        return () => {
            window?.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    function mouseMove(e: MouseEvent) {
        if (!splitImgRef.current) return;
        const rect = splitImgRef.current?.getBoundingClientRect();
        const x = (e.clientX - rect.left) / splitImgRef.current?.clientWidth;
        const y = (e.clientY - rect.top) / splitImgRef.current?.clientHeight;
        setWipe({
            x: x,
            y: y,
        });
        wipeX.set(x);
    }

    return (
        <FeatureElement title={title} className="split-feature">
            <motion.div
                className="split-image"
                ref={splitImgRef}
                style={
                    {
                        '--wipe-x': `${wipe.x * 100}%`,
                        '--wipe-y': `${wipe.y * 100}%`,
                        '--img-src-1': `url('${img1}')`,
                        '--img-src-2': `url('${img2}')`,
                        '--extra-tilt': wipeXSpeedSpring,
                    } as CSSProperties
                }
            >
                <div className="shadow">
                    <div className="img img-1"></div>
                    <div className="img img-2"></div>
                </div>
                <div className="img img-1"></div>
                <div className="img img-2"></div>
            </motion.div>
        </FeatureElement>
    );
}
