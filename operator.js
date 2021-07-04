import * as Rx from 'rxjs';

export const runObserver = {
  next(value) {
    console.log('value', value);
  },
  error(err) {
    console.log(`Error: ${ err }`);
  },
  complete() {
    console.log('Complete!');
  }
};

const data = [
  {
    id: 1,
    name: 'John',
    position: 'CEO'
  },
  {
    id: 2,
    name: 'Cowy',
    position: 'CTO'
  },
  {
    id: 3,
    name: 'Tim',
    position: 'COO'
  }
]


export const runSource = Rx.of(data);

export const runSourceFrom = Rx.from(data);

function map(source, callback) {
  return Rx.Oberservable.create((observer) => {
    return source.subscribe(
      (val) => {
        try {
          observer.next(callback(val));
        } catch (err) {
          observer.error(e);
        }
      },
      (err) => {
        observer.error(e);
      },
      () => {
        observer.complete();
      }
    )
  });
}
