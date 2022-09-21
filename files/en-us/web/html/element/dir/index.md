---
title: '<dir>: The Directory element'
slug: Web/HTML/Element/dir
tags:
  - Directory
  - Element
  - HTML
  - HTML Lists
  - Deprecated
  - Reference
  - Web
  - dir
  - lists
browser-compat: html.elements.dir
---

{{HTMLRef}}{{Deprecated_Header}}

The **`<dir>`** [HTML](/en-US/docs/Web/HTML) element is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the {{Glossary("user agent")}}. Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files.

> **Warning:** Do not use this element. Though present in early HTML specifications, it has been deprecated in HTML 4, and has since been removed entirely. **No major browsers support this element.**

## DOM interface

This element implements the {{domxref("HTMLDirectoryElement")}} interface.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("compact")}} {{Deprecated_Inline}}
  - : This Boolean attribute hints that the list should be rendered in a compact style. The interpretation of this attribute depends on the user agent and it doesn't work in all browsers.

## Specifications

Not part of any current specifications.

## Browser compatibility

{{Compat}}

## See also

- Other list-related HTML Elements: {{HTMLElement("ol")}}, {{HTMLElement("ul")}}, {{HTMLElement("li")}}, and {{HTMLElement("menu")}};
- CSS properties that may be specially useful to style the `<dir>` element:

  - The {{cssxref('list-style')}} property, useful to choose the way the ordinal is displayed.
  - [CSS counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), useful to handle complex nested lists.
  - The {{Cssxref('line-height')}} property, useful to simulate the deprecated {{htmlattrxref("compact", "dir")}} attribute.
  - The {{cssxref('margin')}} property, useful to control the indent of the list.
