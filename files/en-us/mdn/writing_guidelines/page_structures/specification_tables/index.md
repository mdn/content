---
title: Specification tables
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
page-type: mdn-writing-guide
browser-compat: css.properties.text-align
---

{{MDNSidebar}}

Every reference page on MDN should provide information about the specification or specifications in which that API or technology was defined. This article demonstrates what these tables look like and explains how to add them.

The specifications section definition is similar to the [compatibility table](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) definition, is commonly generated from the same data source, and typically appears immediately before it in a page.

## Standard specification tables

The standard specification section should look like this:

```md
## Specifications

\{{Specifications}}
```

The `\{{Specifications}}` macro generates the specification table based on the value(s) in the page front-matter.

By default the value(s) in the `browser-compat` key are used.
Each value references a particular feature and its associated compatibility and specification information in the [browser-compat-data](https://github.com/mdn/browser-compat-data) repository.
For example, the {{cssxref("text-align")}} page has the following key, which it uses to fetch the associated specification information.

```yaml
browser-compat: css.property.text-align
```

Some features are not maintained in the above repository.
In these cases, specification information can be added to the page front matter using the `spec-urls` key.
For example, the [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) attribute has the front matter key:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

The specifications table for the `css.property.text-align` key above is rendered in a table as shown:

### Specifications

{{Specifications}}

## Non-standard features

When documenting a non-standard feature, in particular one that has been removed from a standardization track, don't call the `\{{Specifications}}` macro.

Instead, try to provide information about the standardization status and possible alternatives. Examples:

- This method is no longer on a standardization track. It is kept for compatibility purposes. Use the _this other method_ instead.
- This method was originally a part of [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), but is absent in the current DOM specification. This feature is no longer on track to become a standard.
- This event handler was part of the old [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) that has been superseded by the [WebXR Device API](https://immersive-web.github.io/webxr/). It is no longer on track to becoming a standard.
