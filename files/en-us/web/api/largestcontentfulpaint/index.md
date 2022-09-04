---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
page-type: web-api-interface
tags:
  - API
  - Interface
  - Largest Contentful Paint API
  - LargestContentfulPaint
  - Performance
  - Reference
  - Web Performance
  - Experimental
browser-compat: api.LargestContentfulPaint
---
{{APIRef("Largest Contentful Paint API")}}{{SeeCompatTable}}

The `LargestContentfulPaint` interface of the {{domxref("Largest Contentful Paint API")}} provides details about the largest image or text paint before user input on a web page. The timing of this paint is a good heuristic for when the main page content is available during load.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The element that is the current largest contentful paint.
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The time the element was rendered to the screen. May not be available if the element is a cross-origin image loaded without the `Timing-Allow-Origin` header.
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The time the element was loaded.
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The intrinsic size of the element returned as the area (width \* height).
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : The id of the element. This property returns an empty string when there is no id.
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : If the element is an image, the request url of the image.

## Methods

_This interface also inherits methods from {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.toJSON()")}} {{Experimental_Inline}}
  - : Returns the above properties as JSON.

## Examples

The following example shows how to create a {{domxref('PerformanceObserver')}} that listens for `largest-contentful-paint` entries and logs the LCP value to the console.

This example also demonstrates how to include buffered entries (those that ocurred before `observer()` was called), which is done by setting the `buffered` option to `true`.

Note that in this example data is only sent to the server when the user leaves the tab.

```js
// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  let lcp;

  const po = new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];

    // Update `lcp` to the latest value, using `renderTime` if it's available,
    // otherwise using `loadTime`. (Note: `renderTime` may not be available on
    // image elements loaded cross-origin without the `Timing-Allow-Origin` header.)
    lcp = lastEntry.renderTime || lastEntry.loadTime;
  });

  po.observe({type: 'largest-contentful-paint', buffered: true});

  // Send data to the server.
  addEventListener('visibilitychange', function fn() {
    if (lcp && document.visibilityState === 'hidden') {
      console.log('LCP:', lcp);
      removeEventListener('visibilitychange', fn, true);
    }
  }, true);
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
- [LCP in Lighthouse](https://web.dev/lighthouse-largest-contentful-paint/)
