---
title: Accessible description
slug: Glossary/Accessible_description
page-type: glossary-definition
---

{{GlossarySidebar}}

An **accessible description** is the description of a user interface element that provides additional information to help users of assistive technology understand the UI element and its context. It is a text description associated with an HTML element that provides users of assistive technology with a description for the element beyond what is provided by the element's {{glossary("accessible name")}}, providing users with additional context about its purpose. This is particularly important for users who rely on assistive technologies like {{glossary("Screen_reader", "screen readers")}}. An element's accessible description is part of the {{glossary("accessibility tree")}}.

If an element doesn't have an accessible description, the description needs to be programmatically associated with the related element. In these cases, the accessible description is provided by the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute, [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute, or the [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute, if the `title` would not otherwise also be the {{glossary("accessible name")}} for that element, in that order of precedence.

The accessible description provides additional information beyond an accessible name. For example, the accessible name of a {{htmlelement("table")}} is provided by its first {{htmlelement("caption")}}. In the case of complex data tables, a sentence or two describing the table can provide a description. This can be a paragraph right before or after the table both visually and in source code order. If elsewhere in source order, or to make the associate explicit, the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute can be used to associate the table with it's description.

Similarly, when a user is asked to create a password, the `<label>` for the {{htmlelement("input")}} of type `password` provides its accessible name. A good accessible description includes the requirements for the password is a way that is visible to all users. It can be explicitly associated with the input via it's `aria-describedby` attribute, which adds it to the accessibility tree as the 'description' for that node.

Descriptions are reduced to text strings. In our password example, if the inputs's `aria-describedby` attribute value is the `id` of an HTML {{htmlelement("ul")}} with a list of requirements, the description is concatenated text and text equivalents of all the list items.

You can inspect the accessible description for any element on your page: look at your browser's developer tools' accessibility tab, which provides the accessibility information for the currently selected element.

## See also

- {{glossary("accessible name")}} glossary term
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Roles)
- [ARIA attribute](/en-US/docs/Web/Accessibility/ARIA/Attributes)
- [Accessibility](/en-US/docs/Web/Accessibility)
- [Learn accessibility](/en-US/docs/Learn/Accessibility)
