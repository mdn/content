---
title: Paint Timing API
slug: Web/API/Paint_Timing_API
page-type: web-api-overview
tags:
  - API
  - Paint Timing API
  - Performance
  - PerformancePaintTiming
  - Landing
  - Overview
  - Reference
browser-compat: api.PerformancePaintTiming
---

{{DefaultAPISidebar("Performance API")}}

The **Paint Timing API** provides [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance) data that allows you to know exactly how long a user waits, after navigating to your page, before seeing any of the page content at all (which may not yet be the main content) first starting to appear. More specifically, it allows you to know exactly when, during page load, {{Glossary("first paint")}} and {{Glossary("first contentful paint")}} occur.

The [Largest Contentful Paint API](/en-US/docs/Web/API/Largest_Contentful_Paint_API) is a closely-related API that allows you to know exactly how long a user waits before they can see the **main content** of your page in the browser viewport — in contrast to just knowing when the user can see what may be a loading indicator or background image or other such initial/early-loading content (which is what the Paint Timing API provides).

## Concepts and usage

The key principle underlying the Paint Timing API is that by having data to help you minimize the time that users have to wait before they can see the site's content start to appear, you can make the site feel more engaging and responsive (better performing) for your users.

See the [perceived performance](/en-US/docs/Learn/Performance/Perceived_performance) article for an introduction to the core concepts underlying both the Paint Timing API and the [Largest Contentful Paint API](/en-US/docs/Web/API/Largest_Contentful_Paint_API).

## Interfaces

- {{domxref('PerformancePaintTiming')}}
  - : Extends the {{domxref('PerformanceEntry')}} interface with the additional {{domxref('PerformanceEntry.entryType', 'entryType')}} value `"paint"` and the two additional {{domxref('PerformanceEntry.name', 'name')}} values `"first-paint"` and `"first-contentful-paint"`.

## Examples

See the {{domxref('PerformancePaintTiming')}} article for an example of using the Paint Timing API.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [First paint](/en-US/docs/Glossary/First_paint)
- [First contentful paint](/en-US/docs/Glossary/First_contentful_paint)
- [Largest Contentful API](/en-US/docs/Web/API/Largest_Contentful_Paint_API)
- [Perceived performance](/en-US/docs/Learn/Performance/Perceived_performance)
- [User-centric performance metrics](https://web.dev/user-centric-performance-metrics/#types-of-metrics) at web.dev
