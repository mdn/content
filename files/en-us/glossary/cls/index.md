---
title: Cumulative Layout Shift (CLS)
slug: Glossary/CLS
page-type: glossary-definition
---

{{GlossarySidebar}}

**Cumulative Layout Shift (CLS)** is a usability metric for websites, designed by Google as one of the [Core Web Vital](https://web.dev/articles/vitals) metrics.

It measures the extent to which users encounter unexpected layout shifts, in which elements of the page are moved in an unexpected way: that is, that are not the result of a user action like pressing a button or part of an animation.

Layout shifts may be caused, for example, by {{htmlelement("img")}} or {{htmlelement("video")}} elements that are not given `width` and `height` attributes, so the browser doesn't know how much space they will occupy until they are loaded.

The {{domxref("LayoutShift")}} interface, part of the [Performance API](/en-US/docs/Web/API/Performance_API), can be used to measure individual layout shifts, which can then be used to calculate the CLS score for a web page.

## See also

- [CLS](https://web.dev/articles/cls) on web.dev
