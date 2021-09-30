---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - Editing
  - Global attributes
  - HTML
  - Reference
  - Text Editing
  - contenteditable
  - text entry
  - text input
browser-compat: html.global_attributes.contenteditable
---

{{HTMLSidebar("Global_attributes")}}

The **`contenteditable`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

The attribute must take one of the following values:

- `true` or an _empty string_, which indicates that the element is editable.
- `false`, which indicates that the element is not editable.

If the attribute is given without a value, like `<label contenteditable>Example Label</label>`, its value is treated as an empty string.

If this attribute is missing or its value is invalid, its value is _inherited_ from its parent element: so the element is editable if its parent is editable.

Note that although its allowed values include `true` and `false`, this attribute is an _enumerated_ one and not a _Boolean_ one.

You can set the color used to draw the text insertion {{Glossary("caret")}} with the CSS {{cssxref("caret-color")}} property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Making content editable](/en-US/docs/Web/Guide/HTML/Editable_content)
- All [global attributes](/en-US/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
- The CSS {{cssxref("caret-color")}} property
- [`HTMLElement` `input` event](/en-US/docs/Web/API/HTMLElement/input_event)
