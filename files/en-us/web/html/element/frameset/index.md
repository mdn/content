---
title: <frameset>
slug: Web/HTML/Element/frameset
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.frameset
---

{{HTMLSidebar}}{{Deprecated_header}}

The **`<frameset>`** [HTML](/en-US/docs/Web/HTML) element is used to contain {{HTMLElement("frame")}} elements.

> **Note:** Because the use of frames is now discouraged in favor of using {{HTMLElement("iframe")}}, this element is not typically used by modern websites.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `cols` {{Deprecated_Inline}}
  - : This attribute specifies the number and size of horizontal spaces in a frameset.
- `rows` {{Deprecated_Inline}}
  - : This attribute specifies the number and size of vertical spaces in a frameset.

## Example

```html
<frameset cols="50%,50%">
  <frame
    src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset" />
  <frame
    src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame" />
</frameset>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
