---
title: "Observable: Observable() constructor"
short-title: Observable()
slug: Web/API/Observable/Observable
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.Observable.Observable
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`Observable()`** constructor creates a new {{domxref("Observable")}} object instance.

## Syntax

```js-nolint
new Observable(callback)
```

### Parameters

- `callback`

  - : A callback function that defines the [lifecycle of the observable stream](/en-US/docs/Web/API/Observable_API/Using#the_observable_lifecycle), including what values are passed through it and when, when the stream is completed, etc. The callback function has a {{domxref("Subscriber")}} object as an argument on which the lifecycle functionality is defined.

    For developer-created custom observables created using the `Observable()` constructor, you pass this callback in manually, whereas for platform-returned ones (created using {{domxref("EventTarget.when()")}}), the platform constructs the observable with an internal callback that runs when you subscribe the observable to the event stream using {{domxref("Observable.subscribe()")}}.

### Return value

A new {{domxref("Observable")}} object.

## Examples

### Creating an observable using `new Observable()`

In the below snippet, we first use the `Observable()` constructor to create a new observable. Inside its callback function, we declare a variable `i` with a value of `1`. We then use a {{domxref("Window.setInterval()")}} call to check the value of `i` every 500 milliseconds. If the value has reached `11`, we call the {{domxref("Subscriber.complete()")}} method to complete observation. If not, we call {{domxref("Subscriber.next()")}} to move to the next iteration of the pipeline. At the end of the interval, `i` is incremented by 1.

We then subscribe to the observable by calling {{domxref("Observable.subscribe()")}}. Inside the `subscribe()` method's argument, we define the {{domxref("Subscriber")}} object's methods referenced inside the constructor in the previous block — the `next()` method prints the value passed to it to the console (`i`, in the code above that calls it), and the `complete()` method prints "Count complete" to the console.

```js
const observable = new Observable((subscriber) => {
  let i = 1;
  setInterval(() => {
    if (i === 11) {
      subscriber.complete();
    } else {
      subscriber.next(i);
    }
    i++;
  }, 500);
});

observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  complete: () => {
    console.log("Count complete");
  },
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
