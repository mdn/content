---
title: First Contentful Paint (FCP)
slug: Glossary/First_contentful_paint
page-type: glossary-definition
sidebar: glossarysidebar
---

**First Contentful Paint** (FCP) is a measure of when the browser renders its first DOM content, providing user feedback that the page is loading. Completing the first {{Glossary("Contentful paint")}} answers the question "Is anything happening?"

_The First Contentful Paint_ timestamp indicates when the browser first rendered any text, image (including background images), video, canvas that had been drawn into, or non-empty SVG. This excludes any iframe content, but includes text with pending webfonts. This is the first time users could start consuming page content.

## See also

- [`PerformancePaintTiming`](/en-US/docs/Web/API/PerformancePaintTiming)
- Related glossary terms:
  - {{Glossary("Contentful paint")}}
  - {{Glossary("First Paint")}}
  - {{Glossary("Largest Contentful Paint")}}
  - {{Glossary("First Meaningful Paint")}}
- [First Contentful Paint](https://web.dev/articles/fcp) on web.dev (2023)
