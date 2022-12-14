---
title: Cumulative Layout Shift (CLS)
slug: Glossary/Cumulative_Layout_Shift
---

**Cumulative Layout Shift** (CLS) is a score that is the sum of every layout shift value is recorded. Layout shifts happen when any element that is visible in the viewport changes its position between two frames.

It is measured using the {{domxref("LayoutShift")}} API and a {{domxref("PerformanceObserver")}} by summing the values as they reported to the observer. The final score is taken at the time of the [`visibilitychange` event](/en-US/docs/Web/API/Document/visibilitychange_event).

## See also

- {{domxref("LayoutShift")}}
