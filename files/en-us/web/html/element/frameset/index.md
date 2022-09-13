---
title: <frameset>
slug: Web/HTML/Element/frameset
tags:
  - Deprecated
  - Element
  - HTML
  - Reference
  - Web
browser-compat: html.elements.frameset
---

{{HTMLRef}}{{Deprecated_header}}

The **`<frameset>`** [HTML](/en-US/docs/Web/HTML) element is used to contain {{HTMLElement("frame")}} elements.

> **Note:** Because the use of frames is now discouraged in favor of using {{HTMLElement("iframe")}}, this element is not typically used by modern web sites.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("cols")}} {{Deprecated_Inline}}
  - : This attribute specifies the number and size of horizontal spaces in a frameset.
- {{htmlattrdef("rows")}} {{Deprecated_Inline}}
  - : This attribute specifies the number and size of vertical spaces in a frameset.

## Example

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" />
</frameset>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
