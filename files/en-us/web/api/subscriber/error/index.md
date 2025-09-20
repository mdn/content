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

The **`error()`** method of the {{domxref("Subscriber")}} interface runs when an exception is thrown somewhere in the observable pipeline.

Specifically, the functionality of the called `error()` method is defined in the {{domxref("Observable.subscribe()")}} method that was called to subscribe to the observable stream.

## Syntax

```js-nolint
error(msg)
```

### Parameters

- `msg` {{optional_inline}}
  - : A string representing the exception that was thrown.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### An observable value checker

This example uses a custom observable to validate an array of strings containing numbers.

We first define a custom observable using the {{domxref("Observable.Observable", "Observable()")}} constructor. This defines a [regular expression](/en-US/docs/Web/JavaScript/Reference/Regular_expressions) that matches a string containing only numbers, then includes a {{jsxref("Array.forEach()")}} block that processes each value in a `values` array. Each value is tested again the regex:

- If the value contains only numbers, it is passed into a {{domxref("Subscriber.next()")}} call.
- If the value contains a non-numeric characters, it is inserted into an error message and passed into an `error()` call.

Finally, after all the values are processed, {{domxref("Subscriber.complete()")}} is called to complete the stream of values.

```js
const observable = new Observable((subscriber) => {
  let regex = /^\d+$/;
  values.forEach((value) => {
    if (regex.test(value)) {
      subscriber.next(value);
    } else {
      subscriber.error(`Error: ${value} contains non-numbers`);
    }
  });

  subscriber.complete();
});
```

Next, we define a `values` array that will be passed into the subscriber callback when the observable is subscribed. In this case, we define an array containing just numeric strings, which will all pass the regex test:

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

When the above code is run, all the values pass the regex test, so they are all logged to the console as per the `next()` callback. When all values have been tested, the `complete()` runs, which logs `"Checking complete. No errors found."` to the console.

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

So what happens when one of the strings passed into the array contains non-numeric characters? In such a case, the `error()` callback runs to report the error, which also completes the subscription. The difference here is that processing stops as soon as `error()` is called: the other values are never processed, and `complete()` is never called.

For example, if the `values` array is defined as follows:

```js
const values = ["1234", "354567", "87654", "gg567", "007", "98765"];
```

The final console output will look something like this:

```plain
1234
354567
87654
Error: gg567 contains non-numbers
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Observable API](/en-US/docs/Web/API/Observable_API/Using)
- [Observable explainer](https://github.com/WICG/observable/blob/master/README.md)
