---
title: <spacer>
slug: Web/HTML/Element/spacer
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.spacer
---

{{deprecated_header}}

The **`<spacer>`** [HTML](/en-US/docs/Web/HTML) element is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, `<spacer>` no longer supported by any major browser and the same effects can now be achieved using simple CSS.

Firefox, which is the descendant of Netscape's browsers, removed support for `<spacer>` in version 4.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{ htmlattrdef("type") }}
  - : This attribute determines type of spacer. Possible values are `horizontal`, `vertical` and `block`.
- {{ htmlattrdef("size") }}
  - : This attribute can be used for defining size of spacer in pixels when type is `horizontal` or `vertical`.
- {{ htmlattrdef("width") }}
  - : This attribute can be used for defining width of spacer in pixels when type is `block`.
- {{ htmlattrdef("height") }}
  - : This attribute can be used for defining height of spacer in pixels when type is `block`.
- {{ htmlattrdef("align") }}
  - : This attribute determines alignment of spacer. Possible values are `left`, `right` and `center`.

## Example

```html
<span>Just a text node</span>
<spacer type="horizontal" size="10"></spacer>
<span>Just another text node</span>
<spacer type="block" width="10" height="10"></spacer>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

{{ HTMLRef }}
