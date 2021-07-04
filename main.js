import './style.css';
import {
  basicObservable,
  basicObserver
} from './basic.js';

import {
  runObserver,
  runSource,
  runSourceFrom
} from './operator.js';

import {
  clickSource,
  example
} from './drag.js';

import { Producer } from './producer.js';

basicObservable.subscribe(basicObserver);

runSource.subscribe(runObserver);

runSourceFrom.subscribe(runObserver);

example.subscribe(basicObserver);


document.querySelector('#app').innerHTML = `
  <h1>Hello RxJS Studying!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
