---
title: Accessible description
slug: Glossary/Accessible_description
page-type: glossary-definition
---

{{GlossarySidebar}}

An **accessible description** is the description of a user interface element that provides additional information to help users of assistive technology understand the UI element and its context. It's associated with an HTML or SVG element and gives users additional context about its purpose beyond what is provided by the element's {{glossary("accessible name")}}. This is particularly important for users who rely on assistive technologies like {{glossary("Screen_reader", "screen readers")}}. An element's accessible description is part of the {{glossary("accessibility tree")}}.

For example, the accessible name of a {{htmlelement("table")}} is provided by its first {{htmlelement("caption")}}. In the case of complex data tables, a sentence or two describing the table can provide a description. This can be a paragraph right before or after the table, both visually and in source code order. If elsewhere in source order, or to make the associate explicit, the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute can be used to associate the table with its description.

Similarly, when a user is asked to create a password, the `<label>` for the {{htmlelement("input")}} of type `password` provides its accessible name. A good accessible description includes the requirements for the password is a way that is visible to all users. It can be explicitly associated with the input via it's `aria-describedby` attribute, which adds it to the accessibility tree as the 'description' for that node.

Descriptions are reduced to text strings. In our password example, if the inputs's `aria-describedby` attribute value is the `id` of an HTML {{htmlelement("ul")}} with a list of requirements, the description is concatenated text and text equivalents of all the list items.

You can inspect the accessible description for any element on your page: look at your browser's developer tools' accessibility tab, which provides the accessibility information for the currently selected element.

## Accessible description computation

For HTML elements, if an element doesn't have an accessible description, the description needs to be programmatically associated with the related element. The accessibility object model (AOM) computes the accessible description by checking this features, in order, until it is defined:

1. [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute.

2. [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) attribute.

3. Language-specific features that participate in the description computation if the feature is not already being used to define the {{glossary("accessible name")}}. For example:

   - A {{htmlelement("summary")}} is described by the content of {{htmlelement("details")}} it is nested in.
   - {{htmlelement("input")}} buttons (with type attribute `button`, `submit` or `reset`) are described by their `value` attribute's value.
   - In SVG, the content of the [`<desc>`](/en-US/docs/Web/SVG/Element/desc) element, if present, otherwise, the text contained in descendant text container elements (i.e. [`<text>`](/en-US/docs/Web/SVG/Element/text)), if they are not already used for the {{glossary("accessible name")}}

4. If none of the above provide a description, the [`title`](/en-US/docs/Web/HTML/Global_attributes#title) attribute is used, if the `title` is not the {{glossary("accessible name")}} for that element.

5. If none of the above defines an accessible description, the accessible description is empty.

The steps for defining accessible description in HTML are defined in the [HTML-AAM Accessible Description](https://www.w3.org/TR/html-aam-1.0/#accdesc-computation)). Accessible description for SVG elements follow the same steps with small differences that are enumerated at [SVG-AAM Accessible Description](https://www.w3.org/TR/svg-aam-1.0/#mapping_additional_nd)).

## See also

- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accessibility](/en-US/docs/Web/Accessibility)
- [Learn accessibility](/en-US/docs/Learn/Accessibility)
- [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility) on Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/en-US/docs/Web/Accessibility/ARIA)
- [The W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Related glossary terms:
  - {{Glossary("Accessibility")}}
  - {{Glossary("Accessibility tree")}}
  - {{Glossary("Accessible name")}}
  - {{Glossary("ARIA")}}
