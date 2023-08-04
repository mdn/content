---
title: First input delay
slug: Glossary/First_input_delay
page-type: glossary-definition
---

{{GlossarySidebar}}

**First input delay** (FID) measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.

It is the length of time, in milliseconds, between the first user interaction on a web page and the browser's response to that interaction. Scrolling and zooming are not included in this metric.

The time between when content is painted to the page and when all the functionality becomes responsive to human interaction often varies based on the size and complexity of the JavaScript needing to be downloaded, parsed, and executed on the main thread, and on the device speed or lack thereof (think low end mobile devices). The longer the delay, the worse the user experience. Reducing site initialization time and eliminating [long tasks](/en-US/docs/Web/API/PerformanceLongTaskTiming) can help eliminate first input delays.

## See also

- [requestIdleCallback](/en-US/docs/Web/API/Window/requestIdleCallback)
- [lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
