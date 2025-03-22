---
title: Long task
slug: Glossary/Long_task
page-type: glossary-definition
---

{{GlossarySidebar}}

A **long task** is a task that takes more than 50ms to complete.

It is an uninterrupted period where the {{Glossary("main thread", "main UI thread")}} is busy for 50 ms or longer. Common examples include long running event handlers, expensive {{Glossary("reflow", "reflows")}} and other re-renders, and work the browser does between different turns of the event loop that exceeds 50 ms.

## See also

- [Long Tasks API](/en-US/docs/Web/API/PerformanceLongTaskTiming)
- [Long Animation Frames API](/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing)
