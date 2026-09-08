---
title: "Subscriber: error() method"
short-title: error()
slug: Web/API/Subscriber/error
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Subscriber.error
---

{{APIRef("Observable API")}}{{SeeCompatTable}}

The **`error()`** method of the {{domxref("Subscriber")}} interface closes the subscription and notifies observers of an error.

Calling this method sets {{domxref("Subscriber.active", "active")}} to `false`, aborts {{domxref("Subscriber.signal", "signal")}}, and runs the registered [teardown callbacks](/en-US/docs/Web/API/Subscriber/addTeardown). It then synchronously invokes each observer's `error` callback supplied to {{domxref("Observable.subscribe()")}}, passing the error value. The observers' `complete` callbacks are not invoked.

If an observer has no `error` callback, the error is reported to the global object. Calling `error()` on an already inactive subscriber also reports the error to the global object. Calling this method does not throw the error back to the caller or stop execution of the producer's code.

## Syntax

```js-nolint
error(error)
```

### Parameters

- `error`
  - : A value representing the error. This can be any JavaScript value, but is typically an {{jsxref("Error")}} object.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### An observable value checker

This example uses a custom observable to check that each string in an array contains only ASCII digits (`0`–`9`).

We first define a custom observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. This defines a [regular expression](/en-US/docs/Web/JavaScript/Reference/Regular_expressions) that matches a string containing only ASCII digits, then uses a {{jsxref("Statements/for...of", "for...of")}} loop to process each value in a `values` array. Each value is tested against the regex:

- If the value contains only ASCII digits, it is passed into a {{domxref("Subscriber.next()")}} call.
- If the value contains non-digit characters, it is inserted into an error message and passed into an `error()` call. We then return from the producer callback to stop processing further values.

Finally, after all the values are processed, {{domxref("Subscriber.complete()")}} is called to complete the stream of values.

```js
const observable = new Observable((subscriber) => {
  const regex = /^\d+$/;
  for (const value of values) {
    if (!subscriber.active) {
      return;
    }
    if (regex.test(value)) {
      subscriber.next(value);
    } else {
      subscriber.error(`Error: ${value} contains non-digit characters`);
      return;
    }
  }

  subscriber.complete();
});
```

Next, we define a `values` array that the producer callback reads when the observable is subscribed to. In this case, we define an array containing only strings of ASCII digits, which will all pass the regex test:

```js
const values = ["1234", "354567", "87654", "007", "98765", "999"];
```

Finally, we subscribe to the observable using an {{domxref("Observable.subscribe()")}} call. Inside, we define `next()`, `error()`, and `complete()` callbacks, which log a value to the console as appropriate:

```js
observable.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("Checking complete. No errors found.");
  },
});
```

When the above code is run, all the values pass the regex test, so they are all logged to the console as per the `next()` callback. When all values have been tested, the observer's `complete()` callback runs, which logs `"Checking complete. No errors found."` to the console.

#### Success case result

The final console output will look something like this:

```plain
1234
354567
87654
007
98765
999
Checking complete. No errors found.
```

#### An error case

So what happens when one of the strings passed into the array contains non-digit characters? In such a case, `subscriber.error()` closes the subscription and invokes the observer's `error()` callback. The subsequent `return` stops the loop, so the other values are never processed and `subscriber.complete()` is never called. The `active` check also stops processing if the observer unsubscribes while handling a value.

For example, if the `values` array is defined as follows:

```js
const values = ["1234", "354567", "87654", "gg567", "007", "98765"];
```

The final console output will look something like this:

```plain
1234
354567
87654
Error: gg567 contains non-digit characters
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating custom observables](/en-US/docs/Web/API/Observable_API/Creating_observables)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
