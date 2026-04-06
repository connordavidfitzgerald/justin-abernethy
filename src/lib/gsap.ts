import { gsap } from 'gsap';

export interface FadeInOptions {
	target: string | Element | Element[];
	duration?: number;
	delay?: number;
	ease?: string;
	y?: number;
	x?: number;
}

export function fadeIn({
	target,
	duration = 0.8,
	delay = 0,
	ease = 'power2.out',
	y = 30,
	x = 0,
}: FadeInOptions) {
	return gsap.from(target, {
		duration,
		delay,
		opacity: 0,
		y,
		x,
		ease,
	});
}

export interface StaggerOptions {
	target: string | Element | Element[];
	duration?: number;
	ease?: string;
	y?: number;
	stagger?: number;
}

export function staggerFadeIn({
	target,
	duration = 0.6,
	ease = 'power2.out',
	y = 20,
	stagger = 0.1,
}: StaggerOptions) {
	return gsap.from(target, {
		duration,
		opacity: 0,
		y,
		stagger,
		ease,
	});
}
