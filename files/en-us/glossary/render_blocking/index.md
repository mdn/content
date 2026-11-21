---
title: Render-blocking
slug: Glossary/Render_blocking
page-type: glossary-definition
sidebar: glossarysidebar
---

**Render-blocking** refers to the browser blocking the rendering of the user interface while it fetches and processes resources that the page needs in order to render correctly.
Render-blocking that isn't needed is bad for web performance, because it increases the time until users can use the site — for example, to view content or use controls.

By default, the following resources in the document's `<head>` block rendering:

- Stylesheets, whether loaded with `<link rel="stylesheet">` or included in a `<style>` element.
- Classic scripts with a `src` attribute and no `async` or `defer` attribute.

It can sometimes be useful to specify that particular resources or elements are render-blocking (so that visible page content never appears in an incomplete state).
You can do this by adding the `blocking="render"` attribute to a [`<script>`](/en-US/docs/Web/HTML/Reference/Elements/script#blocking), [`<style>`](/en-US/docs/Web/HTML/Reference/Elements/style#blocking), or [`<link>`](/en-US/docs/Web/HTML/Reference/Elements/link#blocking) element.
For a [`<link rel="expect">`](/en-US/docs/Web/HTML/Reference/Attributes/rel#expect) element, rendering is blocked until the element identified by the `href` fragment has been parsed.

## See also

- [CSS performance optimization](/en-US/docs/Learn_web_development/Extensions/Performance/CSS)
- [JavaScript performance optimization](/en-US/docs/Learn_web_development/Extensions/Performance/JavaScript)
