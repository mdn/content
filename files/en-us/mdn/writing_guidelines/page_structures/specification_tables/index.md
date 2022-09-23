---
title: Specification tables
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---

{{MDNSidebar}}

Every reference page on MDN should provide information about the specification or specifications in which that API or technology was defined. This article demonstrates what these tables look like and explains how to add them.

These tables are similar to the [compatibility tables](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) and usually both are part of a reference page.

## Standard specification tables

The standard specification section looks like this:

```html
<h2 id="Specifications">Specifications</h2>

\{{Specifications}}
```

The `\{{Specifications}}` macro does all the work and generates a table containing the relevant and most current specifications.
It checks the page's front matter for the `browser-compat` property to determine for which feature to load specifications.

If the page has a front-matter, like `browser-compat: css.property.text-align`,
then the macro gets the specifications for {{cssxref("text-align")}} and renders them in a table:

### Specifications

{{Specifications("css.properties.text-align")}}

## Specification tables without front-matter

In case you want to display a specification section on a page that doesn't provide a front-matter,
you can pass the browser-compat query directly to the macro: `\{{Specifications("css.properties.text-align")}}`

## Non-standard features

When documenting a feature that doesn't have a specification (anymore),
don't call the `\{{Specifications}}` macro.

Instead, try to provide information about the standardization status and possible alternatives. Examples:

- This method is no longer on a standardization track. It is kept for compatibility purposes. Use the _this other method_ instead.
- This method was originally a part of [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), but is absent in the current DOM specification. This feature is no longer on track to become a standard.
- This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.
