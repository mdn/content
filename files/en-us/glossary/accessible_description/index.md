---
title: Accessible description
slug: Glossary/Accessible_description
page-type: glossary-definition
---

{{GlossarySidebar}}

An **accessible description** is the description of a user interface element that provides additional information to help users of assistive technology understand the UI element and its context. It is a text description associated with an HTML element that provides users of assistive technology with a description for the element beyond what is provided by the element's {{glossary("accessible name")}}.

An element's accessible description is part of the {{glossary("accessibility tree")}} that makes web content available to {{glossary("Screen_reader", "screen readers")}} and other assistive technologies, which, in turn, make that content available to the users of those technologies.

The accessible description for a {{htmlelement("table")}} is its first {{htmlelement("caption")}}, for the {{htmlelement("figure")}}, is the {{htmlelement("figcaption")}}, for the {{htmlelement("summary")}}, is the content of the {{htmlelement("details")}} it is nested in, and for the button {{htmlelement("input")}} elements, it is the `value` attribute's value, unless the element also has a `aria-describedby` or `aria-description` attribute, which takes precedence.

For other elements, the description needs to be programmatically associated with the related element. In these cases, the accessible description is provided by the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute, [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, or the [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute, if the `title` would not otherwise also be the {{glossary("accessible name")}} for that element, in that order of precedence.

Descriptions are reduced to text strings. For example, if an element's `aria-describedby` attribute value is the `id` of an HTML {{htmlelement("img")}}, the description is the description of the image (usually the image's `alt` attribute).

You can inspect the accessible description for any element on your page: look at your browser's developer tools' accessibility tab, which provides the accessibility information for the currently selected element.

## See also

- {{glossary("accessible name")}} glossary term
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
- [ARIA attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [Accessibility](/en-US/docs/Web/Accessibility)
- [Learn accessibility](/en-US/docs/Learn/Accessibility)
