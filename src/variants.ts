import { Variants } from 'framer-motion';

type OnScreenObject = 'blob1' | 'blob2' | 'blob3' | 'mainTitle';

const variants: Map<OnScreenObject, Variants> = new Map([
    [
        'blob1',
        {
            initial: {},
            transitionFromInitial: {},
            info1: {
                opacity: 0,
            },
        },
    ],
    [
        'blob2',
        {
            initial: {
                y: [400, 100],
                x: [480, 440],
                rotate: [0, 90],
                transition: {
                    duration: 16,
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                    repeat: Infinity,
                },
            },
            transitionFromInitial: {
                y: 400,
                x: 480,
                rotate: 0,
                transition: {
                    duration: 1,
                },
            },
            info1: {
                opacity: 0,
                transition: {
                    duration: 1,
                },
            },
        },
    ],
    [
        'blob3',
        {
            initial: {
                rotateZ: 360,
                transition: {
                    duration: 16,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                },
            },
            transitionFromInitial: {
                rotateZ: 360,

                transition: {
                    duration: 16,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                },
            },
            info1: {
                opacity: 0,
            },
        },
    ],
    ['mainTitle', {
        initial: {
        },
        transitionFromInitial: {
        },
        info1: {
            opacity: 0,
        },
    }],
]);

export default function getVariants(obj: OnScreenObject) {
    return variants.get(obj);
}
