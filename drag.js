import * as Rx from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const clickSource = Rx.interval(1000);

const click = Rx.fromEvent(document.body, 'click');

export const example = clickSource.pipe(takeUntil(click));
