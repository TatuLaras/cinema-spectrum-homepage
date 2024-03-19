import { Variants } from 'framer-motion';

type OnScreenObject = 'info1' | 'blob4' | 'h2';

const variants: Map<OnScreenObject, Variants> = new Map([
    [
        'info1',
        {
            info1: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    type: 'tween',
                },
            },
        },
    ],
    [
        'blob4',
        {
            info1: {
                y: 0,
                rotate: 0,
                transition: {
                    duration: 1,
                    type: 'tween',
                },
            },
        },
    ],
    [
        'h2',
        {
            info1: {
                filter: 'none',
                transition: {
                    duration: 0.7,
                    type: 'tween',
                },
            },
        },
    ],
]);

export default function getVariants(obj: OnScreenObject) {
    return variants.get(obj);
}
