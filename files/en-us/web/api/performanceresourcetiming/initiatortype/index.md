---
title: "PerformanceResourceTiming: initiatorType property"
short-title: initiatorType
slug: Web/API/PerformanceResourceTiming/initiatorType
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.initiatorType
---

{{APIRef("Performance API")}}

The **`initiatorType`** read-only property is a string representing web platform feature that initiated the resource load.

> **Note:** This property does not represent the type of content fetched. A `.css` file can be fetched using a {{HTMLElement("link")}} element leading to an `initiatorType` of `link`. When loading images using `background: url()` in a CSS file, the `initiatorType` will be `css` and not `img`.

## Value

The `initiatorType` property can have the following values, or `other` if none of the conditions match.

- `audio`
  - : If the request was initiated by an {{HTMLElement("audio")}} element's `src` attribute.
- `beacon`
  - : If the request was initiated by a {{domxref("navigator.sendBeacon()")}} method.
- `body`
  - : If the request was initiated by a {{HTMLElement("body")}} element's `background` attribute.
- `css`
  - : If the request was initiated by a CSS `url()` function.
- `early-hint`
  - : If the request was initiated by an {{HTTPStatus("103")}} `Early Hint` response.
- `embed`
  - : If the request was initiated by an {{HTMLElement("embed")}} element's `src` attribute.
- `fetch`
  - : If the request was initiated by a {{domxref("fetch()")}} method.
- `frame`
  - : If the request was initiated by loading a {{HTMLElement("frame")}} element.
- `iframe`
  - : If the request was initiated by an {{HTMLElement("iframe")}} element's `src` attribute.
- `icon` {{non-standard_inline}}
  - : If the request was initiated by a favicon. Non-standard and only reported by Safari.
- `image`
  - : If the request was initiated by an {{SVGElement("image")}} element.
- `img`
  - : If the request was initiated by an {{HTMLElement("img")}} element's `src` or `srcset` attribute.
- `input`
  - : If the request was initiated by an {{HTMLElement("input")}} element of type `image`.
- `link`
  - : If the request was initiated by a {{HTMLElement("link")}} element.
- `navigation`
  - : If the request was initiated by a navigation request.
- `object`
  - : If the request was initiated by an {{HTMLElement("object")}} element.
- `ping`
  - : If the request was initiated by an {{HTMLElement("a")}} element's `ping`.
- `script`
  - : If the request was initiated by a {{HTMLElement("script")}} element.
- `track`
  - : If the request was initiated by a {{HTMLElement("track")}} element's `src`.
- `video`
  - : If the request was initiated by a {{HTMLElement("video")}} element's `poster` or `src`.
- `xmlhttprequest`
  - : If the request was initiated by an {{domxref("XMLHttpRequest")}}.

## Examples

### Filtering resources

The `initiatorType` property can be used to get specific resource timing entries only. For example, only those that were initiated by {{HTMLElement("script")}} elements.

Example using a {{domxref("PerformanceObserver")}}, which notifies of new `resource` performance entries as they are recorded in the browser's performance timeline. Use the `buffered` option to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  const scripts = list.getEntries().filter((entry) => {
    return entry.initiatorType === "script";
  });
  console.log(scripts);
});

observer.observe({ type: "resource", buffered: true });
```

Example using {{domxref("Performance.getEntriesByType()")}}, which only shows `resource` performance entries present in the browser's performance timeline at the time you call this method:

```js
const scripts = performance.getEntriesByType("resource").filter((entry) => {
  return entry.initiatorType === "script";
});
console.log(scripts);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
