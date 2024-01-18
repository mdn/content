---
title: Accessible description
slug: Glossary/Accessible_description
page-type: glossary-definition
---

{{GlossarySidebar}}

An **accessible description** is the description for a user interface element that provides additional information to help users of assistive technology understand the UI element and its context. It is a text description associated with an HTML element that provides users of assistive technology with a description for the element beyond what is provided by the element's {{glossary("accessible name")}}.

An element's accessible description is part of the {{glossary("accessibility tree")}} that makes web content available to {{glossary("Screen_reader", "screen readers")}} and other assistive technologies, which, in turn, make that content available to the users of those technologies.

A {{htmlelement("table")}}'s accessible description comes from it's first {{htmlelement("caption")}}, the {{htmlelement("figure")}} from it's {{htmlelement("figcaption")}}, the {{htmlelement("summary")}} from the rest of the {{htmlelement("details")}} content, and the button {{htmlelement("input")}} elements from the `value`, unless the element has a value for the `aria-describedby` or `aria-description`, which takes precedence. For other elements, the description needs to be programmatically associated with the related element.

The accessible description for all other elements is provided by the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description), or the [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute if it would not otherwise also be the {{glossary("accessible name")}}, in that order of precedence.

Descriptions are reduced to text strings. For example, if an element's `aria-describedby` attribute value is the `id` of an HTML {{htmlelement("img")}}, the description is the description of the image (usually the image's `alt` attribute).

You can inspect the accessible description for any element on your page: look at your browser's developer tools' accessibility tab, which provides the accessibility information for the currently selected element.

## See also

- {{glossary("accessible name")}} glossary term
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
- [ARIA attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [Accessibility](/en-US/docs/Web/Accessibility)
- [Learn accessibility](/en-US/docs/Learn/Accessibility)
