---
title: Speculative loading
slug: Web/Performance/Speculative_loading
page-type: guide
---

{{QuickLinksWithSubPages("Web/Performance")}}

Speculative loading refers to the practice of performing navigation actions (such as DNS fetching, fetching resources, or rendering documents) before the associated pages are actually visited, based on predictions as to what pages the user is most likely to visit next. These predictions can be supplied by developers (for example, lists of the most popular destinations on their site) or determined by browser heuristics (for example based on popular sites in the user's history). When used successfully, such technologies can significantly improve performance by making pages available more quickly, or in some cases, instantly.

This page looks at the speculation rules API and how it can be used to perform effective prefetching and prerendering, and also reviews other available speculative loading technologies and when they can should be used to improve performance.
