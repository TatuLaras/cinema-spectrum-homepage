import { scrollParallaxLayers } from './content';

export function clamp(val: number, min: number, max: number) {
    return Math.max(Math.min(val, max), min);
}

export function parallax(scrollY: number, layer: number) {
    return scrollY * (scrollParallaxLayers[layer] ?? 1) * -1;
}
