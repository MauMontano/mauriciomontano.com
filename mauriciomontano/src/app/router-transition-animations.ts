import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeTransitionAnimations = trigger('transition', [
	transition('* <=> *', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('3s ease-in-out', style({ opacity: 0 }))]),
			query(':enter', [animate('3s ease-in-out', style({ opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);