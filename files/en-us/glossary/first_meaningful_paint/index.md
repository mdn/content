---
title: First Meaningful Paint
slug: Glossary/first_meaningful_paint
tags:
  - Glossary
  - Reference
  - Web Performance
---

**First Meaningful Paint** (FMP) is the paint after which the biggest above-the-fold layout change has happened and web fonts have loaded. It is when the answer to "Is it useful?" becomes "yes", upon first meaningful paint completion.

FMP is very sensitive to small differences in the page load. This can lead to inconsistent (bimodal) results. The metric's definition relies on browser-specific implementation details, which means it can't be standardized and has not been implemented in all web browsers.

> **Warning:** First Meaningful Paint (FMP) is deprecated in Lighthouse 6.0. Moving forward, consider using the [LargestContentfulPaint API](https://wicg.github.io/largest-contentful-paint/) instead.

## See also

- [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)
- [Largest Contentful Paint](https://wicg.github.io/largest-contentful-paint/)
