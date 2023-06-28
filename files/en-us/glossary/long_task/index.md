---
title: Long task
slug: Glossary/Long_task
page-type: glossary-definition
---

{{GlossarySidebar}}

A **long task** is a task that takes more than 50ms to complete.

It is an uninterrupted period where the [main UI thread](/en-US/docs/Glossary/Main_thread) is busy for 50 ms or longer. Common examples include long running event handlers, expensive [reflows](/en-US/docs/Glossary/Reflow) and other re-renders, and work the browser does between different turns of the event loop that exceeds 50 ms.

## See also

- [Long task API](/en-US/docs/Web/API/PerformanceLongTaskTiming)
