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
  example,
  skipSource,
  startSource
} from './drag.js';

import { Producer } from './producer.js';

basicObservable.subscribe(basicObserver);

runSource.subscribe(runObserver);

runSourceFrom.subscribe(runObserver);

let number = 0;

const testObserver = {
  next(value) {
    console.log(number);
    if (value >= 11) {
      this.complete();
    } else {
      number += value;
    }
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log('Complete');
  }
};

startSource.subscribe(basicObserver);

const subscription = skipSource.subscribe((val) => {
  // console.log(subscription);
  console.log(val);
  if (val >= 11) {
    subscription.unsubscribe();
  }
});


document.querySelector('#app').innerHTML = `
  <h1>Hello RxJS Studying!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
