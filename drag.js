import * as Rx from 'rxjs';
import { takeUntil, skip, take, startWith } from 'rxjs/operators';

export const clickSource = Rx.interval(1000).pipe(take(5));

const click = Rx.fromEvent(document.body, 'click');

export const example = clickSource.pipe(takeUntil(click));

export const skipSource = clickSource.pipe(skip(3));

export const startSource = Rx.interval(1000).pipe(startWith(22)).pipe(take(5));