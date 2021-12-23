---
title: PerformanceTiming.domInteractive
slug: Web/API/PerformanceTiming/domInteractive
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - domInteractive
  - legacy
browser-compat: api.PerformanceTiming.domInteractive
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domInteractive`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the parser finished its work on the main
document, that is when its {{domxref("Document.readyState")}} changes to
`'interactive'` and the corresponding {{event("readystatechange")}} event is
thrown.

This property can be used to measure the speed of loading Web sites that users
_feels_. Nevertheless there are a few caveats that happens if scripts are
blocking rendering and not loaded asynchronously or with custom Web fonts. [Check
if you are in one of these cases](http://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/) before using this property as a proxy for the
user experience of a Web site's speed of loading.

## Syntax

```js
time = performanceTiming.domInteractive;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
- The article "[domInteractive:
  is it? really?](http://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)" explaining when you can use this property as a proxy for the
  user experience of loading a Web site.
