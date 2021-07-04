import './style.css';
import {
  basicObservable,
  basicObserver
} from './basic.js';

import { Producer } from './producer.js';

basicObservable.subscribe(basicObserver);


document.querySelector('#app').innerHTML = `
  <h1>Hello RxJS Studying!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
