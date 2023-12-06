---
title: "HTMLMediaElement: fastSeek() method"
short-title: fastSeek()
slug: Web/API/HTMLMediaElement/fastSeek
page-type: web-api-instance-method
browser-compat: api.HTMLMediaElement.fastSeek
---

{{APIRef("HTML DOM")}}

The **`HTMLMediaElement.fastSeek()`** method quickly seeks the
media to the new time with precision tradeoff.

> **Note:** If you need to seek with precision, you should set [`HTMLMediaElement.currentTime`](/en-US/docs/Web/API/HTMLMediaElement/currentTime)
> instead.

## Syntax

```js-nolint
fastSeek(time)
```

### Parameters

- `time`
  - : A double.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example quickly seeks to 20-second position of the video element.

```js
let myVideo = document.getElementById("myVideoElement");

myVideo.fastSeek(20);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTMLMediaElement.currentTime](/en-US/docs/Web/API/HTMLMediaElement/currentTime)
  for seeking without precision tradeoff
