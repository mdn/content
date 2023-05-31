---
title: aria-describedby
slug: Web/Accessibility/ARIA/Attributes/aria-describedby
page-type: aria-attribute
spec-urls:
  - https://w3c.github.io/aria/#aria-describedby
  - https://w3c.github.io/aria-practices/#describing_with_aria-describedby
---

The global `aria-describedby` attribute identifies the element (or elements) that describes the element on which the attribute is set.

## Description

The `aria-describedby` attribute lists the [`id`](/en-US/docs/Web/HTML/Global_attributes#id)s of the elements that describe the object. It is used to establish a relationship between widgets or groups and the text that describes them.

The `aria-describedby` attribute is not limited to form controls. It can also be used to associate static text with widgets, groups of elements, regions that have a heading, definitions, and more. The `aria-describedby` attribute can be used with semantic HTML elements and with elements that have an ARIA [`role`](/en-US/docs/Web/Accessibility/ARIA/Roles).

The `aria-describedby` attribute is very similar to [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute. While the `aria-labelledby` lists the `id`s of the labels or elements that describe the essence of an object, the `aria-describedby` lists the `id`s of the descriptions or elements providing more information that the user might need. Both `aria-labelledby` and `aria-describedby` reference other elements to calculate a text alternative, but a label should be concise, while a description is intended to provide more verbose information; a label describes the essence of an object, while a description provides more information that the user might need.

The elements linked via `aria-describedby` don't need to be visible. It is possible to reference an element even if that element is hidden. For example, a form control can have a description that is hidden by default that is revealed on request using a disclosure widget like a "more information" icon. The sighted user clicks on the icon; for assistive technology users the description is referenced from that form field directly with `aria-describedby`.

The `aria-describedby` property is appropriate when the associated content contains descriptions experienced as plain text. If the content contains a large amount of content, useful semantics, or has a complex structure requiring user navigation, use [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details). `aria-details` allows assistive technology users to visit the associated structured content and provides additional navigation commands, making it easier to understand the structure, or to experience the information in smaller pieces.

> **Note:** The `aria-describedby` content should only be a text string. If there are important underlying semantics in the content, consider using [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details).

## Example

```html
<button aria-describedby="trash-desc">Move to trash</button>
…
<p id="trash-desc">
  Items in the trash will be permanently removed after 30 days.
</p>
```

> **Note:** The `aria-describedby` attributed is not designed to reference descriptions on an external resource. As its value is one or a space-separated list of more than one `id`, it must reference elements in the same DOM document.

## Values

- ID reference list
  - : The `id` or space-separated list of element IDs that describe the current element.

## Associated roles

Used in **ALL** roles. Usable in all HTML elements as well.

## Specifications

{{Specifications}}

## See Also

- {{HTMLElement('label')}}
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)
- [Browser and AT support for `aria-describedby`](https://a11ysupport.io/tech/aria/aria-describedby_attribute)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
