---
title: <acronym>
slug: Web/HTML/Element/acronym
tags:
  - Element
  - HTML
  - HTML:Flow content
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.acronym
---

{{deprecated_header}}

## Summary

The **`<acronym>`** [HTML](/en-US/docs/Web/HTML) element allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.

> **Warning:** Don't use this element. Use the {{HTMLElement("abbr")}} element instead.

## Attributes

This element only has [global attributes](/en-US/docs/Web/HTML/Global_attributes), which are common to all elements.

## DOM Interface

This element implements the {{domxref('HTMLElement')}} interface.

## Example

```html
<p>The <acronym title="World Wide Web">WWW</acronym> is only a component of the Internet.</p>
```

## Default styling

Though the purpose of this tag is purely for the convenience of the author, its default styling varies from one browser to another:

- Some browsers, like Internet Explorer, do not style it differently than a {{HTMLElement("span")}} element.
- Opera, Firefox, Chrome, and some others add a dotted underline to the content of the element.
- A few browsers not only add a dotted underline, but also put it in small caps; to avoid this styling, adding something like {{cssxref('font-variant')}}`: none` in the CSS takes care of this case.

It is therefore recommended that web authors either explicitly style this element, or accept some cross-browser variation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("abbr")}} HTML element

{{HTMLRef}}
