---
title: Soft navigation
slug: Glossary/Soft_navigation
page-type: glossary-definition
sidebar: glossarysidebar
---

A soft navigation is a client-side routing navigation used by {{Glossary("SPA", "Single Page Applications (SPAs)")}} to load new content.

Typically, clicking a link on a webpage loads a completely new page (a "hard navigation"), which can result in considerable unnecessary work, and loss of state when navigating between similar pages on a site.

Modern JavaScript frameworks use client-side routing to intercept link clicks, update the content on the current page (perhaps after making [Fetch](/en-US/docs/Web/API/Fetch_API) calls), and then update the URL in the address bar while pushing a history state entry for the resulting navigation.

The net effect appears to be a navigation to the user (but hopefully faster than a hard navigation), which the browser will see as the same page.

The {{domxref("PerformanceSoftNavigation")}} and {{domxref("InteractionContentfulPaint")}} APIs allow measurement of soft navigations outside of a framework for performance metrics.

## See also

- [Single-page application](https://en.wikipedia.org/wiki/Single-page_application) (Wikipedia)
- [Understanding client-side JavaScript frameworks](/en-US/docs/Learn_web_development/Core/Frameworks_libraries)
- Related glossary terms:
  - {{Glossary("SPA")}}
- Popular SPA frameworks:
  - [React](https://react.dev/)
  - [Angular](https://angular.dev/)
  - [Vue.JS](https://vuejs.org/)
