---
title: "<dir>: The Directory element"
slug: Web/HTML/Element/dir
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.dir
---

{{HTMLSidebar}}{{Deprecated_Header}}

The **`<dir>`** [HTML](/en-US/docs/Web/HTML) element is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the {{Glossary("user agent")}}. Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files.

> [!WARNING]
> Do not use this element. Though present in early HTML specifications, it has been deprecated in HTML 4, and has since been removed entirely.

## DOM interface

This element implements the {{domxref("HTMLDirectoryElement")}} interface.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.

<!-- ## Technical summary -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, and {{HTMLElement("menu")}};
- CSS properties that may be specially useful to style the `<dir>` element:

  - The {{cssxref('list-style')}} property, useful to choose the way the ordinal is displayed.
  - [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters), useful to handle complex nested lists.
  - The {{Cssxref('line-height')}} property, useful to simulate the deprecated [`compact`](#compact) attribute.
  - The {{cssxref('margin')}} property, useful to control the indent of the list.
