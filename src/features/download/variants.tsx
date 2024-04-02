import { Variants } from 'framer-motion';

type OnScreenObject = 'download';

const variants: Map<OnScreenObject, Variants> = new Map([
    [
        'download',
        {
            download: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    type: 'tween',
                },
            },
        },
    ],
]);

export default function getVariants(obj: OnScreenObject) {
    return variants.get(obj);
}
