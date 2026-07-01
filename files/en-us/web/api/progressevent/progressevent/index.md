---
title: "ProgressEvent: ProgressEvent() constructor"
short-title: ProgressEvent()
slug: Web/API/ProgressEvent/ProgressEvent
page-type: web-api-constructor
browser-compat: api.ProgressEvent.ProgressEvent
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers}}

The **`ProgressEvent()`** constructor returns a new {{domxref("ProgressEvent")}} object, representing the current completion of a long process.

## Syntax

```js-nolint
new ProgressEvent(type)
new ProgressEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `loadstart`, `progress`, `abort`, `error`, `load`, `timeout`, or `loadend`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `lengthComputable` {{optional_inline}}
      - : A boolean value indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable.
        In other words, it tells if the progress is measurable or not.
        It defaults to `false`.
    - `loaded` {{optional_inline}}
      - : A number representing the amount of work already performed by the underlying process.
        For a `ProgressEvent` dispatched by the browser in HTTP messages, the value refers to the size, in bytes, of the message body, excluding headers and other overhead.
        In a `ProgressEvent` you create yourself, you can assign any numeric value to `loaded` that represents the amount of work completed relative to the `total` value.
        It defaults to `0`.
    - `total` {{optional_inline}}
      - : A number indicating the total size of the data being transmitted or processed.
        For `ProgressEvent`s dispatched by the browser in HTTP messages, the value refers to the size, in bytes, of a resource and is derived from the `Content-Length` response header.
        In a `ProgressEvent` you create yourself, you may wish to normalize `total` to a value such as `100` or `1` if revealing the precise amount of bytes of a resource is a concern.
        If using `1` as a total, for example, then `loaded` should be a decimal value between `0` and `1`.
        It defaults to `0`.

### Return value

A new {{domxref("ProgressEvent")}} object.

## Example

### File upload

The example demonstrates how a `ProgressEvent` is built using a constructor. This is particularly useful for tracking the progress of processes like file uploads, downloads, or any long-running tasks.

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded,
    total,
  });

  document.dispatchEvent(progressEvent);
}

document.addEventListener("progress", (event) => {
  console.log(`Progress: ${event.loaded}/${event.total}`);
});

updateProgress(50, 100);
```

### Using fractions in a ProgressEvent

The total number of bytes of a resource may reveal too much information about a download, so a number between 0 and 1 may be used instead:

```js
function updateProgress(loaded, total) {
  const progressEvent = new ProgressEvent("progress", {
    lengthComputable: true,
    loaded,
    total,
  });

  document.dispatchEvent(progressEvent);
}

document.addEventListener("progress", (event) => {
  console.log(`Progress: ${event.loaded}/${event.total}`);
});

updateProgress(0.123456, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("ProgressEvent")}} interface it belongs to.
