---
title: "Performance: mark() method"
short-title: mark()
slug: Web/API/Performance/mark
page-type: web-api-instance-method
browser-compat: api.Performance.mark
---

{{APIRef("Performance API")}}

The **`mark()`** method creates a named {{domxref("PerformanceMark")}} object representing a high resolution timestamp marker in the browser's performance timeline.

## Syntax

```js-nolint
mark(name)
mark(name, markOptions)
```

### Parameters

- `name`
  - : A string representing the name of the mark. Must not be the same name as one of the properties of the deprecated {{domxref("PerformanceTiming")}} interface.
- `markOptions` {{optional_inline}}
  - : An object for specifying a timestamp and additional metadata for the mark.
    - `detail` {{optional_inline}}
      - : Arbitrary metadata to include in the mark. Defaults to `null`. Must be [structured-cloneable](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
    - `startTime` {{optional_inline}}
      - : {{domxref("DOMHighResTimeStamp")}} to use as the mark time. Defaults to {{domxref("performance.now()")}}.

### Return value

The {{domxref("PerformanceMark")}} entry that was created.

### Exceptions

- {{jsxref("SyntaxError")}}: Thrown if the `name` is one of the properties of the deprecated {{domxref("PerformanceTiming")}} interface. See the [example below](#reserved_names).
- {{jsxref("TypeError")}}: Thrown if `startTime` is negative.

## Examples

### Creating named markers

The following example uses `mark()` to create named {{domxref("PerformanceMark")}} entries. You can create several marks with the same name. You can also assign them, to have a reference to the {{domxref("PerformanceMark")}} object that has been created.

```js
performance.mark("login-started");
performance.mark("login-started");
performance.mark("login-finished");
performance.mark("form-sent");

const videoMarker = performance.mark("video-loaded");
```

### Creating markers with details

The performance mark is configurable using the `markOptions` object where you can put additional information in the `detail` property, which can be of any type.

```js
performance.mark("login-started", {
  detail: "Login started using the login button in the top menu.",
});

performance.mark("login-started", {
  detail: { htmlElement: myElement.id },
});
```

### Creating markers with a different start time

The default timestamp of the `mark()` method is {{domxref("performance.now()")}}. You can set it to a different time using the `startTime` option in `markOptions`.

```js
performance.mark("start-checkout", {
  startTime: 20.0,
});

performance.mark("login-button-pressed", {
  startTime: myEvent.timeStamp,
});
```

### Reserved names

Note in order to maintain backwards compatibility, names that are part of the deprecated {{domxref("PerformanceTiming")}} interface can't be used. The following example throws:

```js example-bad
performance.mark("navigationStart");
// SyntaxError: "navigationStart" is part of
// the PerformanceTiming interface,
// and cannot be used as a mark name
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
