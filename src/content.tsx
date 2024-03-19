export interface Stage {
    startsAt: number;
    variant: string;
}

export const stages: Stage[] = [
    {
        startsAt: 0,
        variant: 'initial',
    },
    {
        startsAt: 50,
        variant: 'transitionFromInitial',
    },
    {
        startsAt: 2000,
        variant: 'info1',
    },
];

export const scrollParallaxLayers: number[] = [0.1, 0.08, 0.06, 0.04, 0.01];
