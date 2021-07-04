import * as Rx from 'rxjs';

export const basicObservable = Rx.Observable
  .create((observer) => {
    observer.next('Heeeeellllllo');
    observer.next('Wooooooooõld');
    throw 'Error';
    observer.complete();
    observer.next('yoyo');
    /* setTimeout(() => {
      observer.next('RxJS 30 ~~~~~')
    }, 1500); */
  });

export const basicObserver = {
  next(value) {
    console.log(value);
  },
  error(err) {
    console.log(err);
  },
  complete() {
    console.log('Complete');
  }
};



// console.log('-----Start-----');
/* observable.subscribe((value) => {
  console.log(value);
}); */
// console.log('-----End-----');

// observable.subscribe(observer);
