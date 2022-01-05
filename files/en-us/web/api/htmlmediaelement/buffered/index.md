---
title: HTMLMediaElement.buffered
slug: Web/API/HTMLMediaElement/buffered
tags:
  - API
  - HTML DOM
  - HTMLMediaElement
  - Property
  - Read-only
  - Web
browser-compat: api.HTMLMediaElement.buffered
---
{{APIRef("HTML DOM")}}

The **`buffered`** read-only property of {{domxref("HTMLMediaElement")}} objects returns a new static [normalized `TimeRanges` object](/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects) that represents the ranges of the media resource, if any, that the user agent has buffered at the moment the `buffered` property is accessed.

> **Note:** This feature is not available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API).

## Syntax

```js
var timeRange = audioObject.buffered
```

### Value

A new static [normalized TimeRanges object](/en-US/docs/Web/API/TimeRanges#normalized_timeranges_objects) that represents the ranges of the media resource, if any, that the user agent has buffered at the moment the `buffered` property is accessed.

## Example

```js
var obj = document.createElement('video');
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
