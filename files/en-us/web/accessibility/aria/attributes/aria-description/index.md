---
title: 'aria-description'
slug: Web/Accessibility/ARIA/Attributes/aria-description
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-description
  - Reference
---

The global `aria-description` attribute defines a string value that describes or annotates the current element.

## Description

The global `aria-description` attribute provides a mechanism for the developer to describe or annotate the current element providing greater context for assistive technology users.

```html
<div role="application" aria-label="calendar" 
     aria-description="Game schedule for the Boston Red Sox 2021 Season">
    <h1>Red Sox 2021</h1>
    <div role="grid">
        ...
    </div>
</div>
```

The `aria-description` attribute is similar to [`aria-label`](../aria-label) in that both provide a text string to associate with the element, but a label should be short and concise, while the description can be longer as it is intended to provide more context and information.

The `aria-description` and `aria-describedby` properties have the same purpose; both provide the user with additional descriptive text for the object on which it is set. If descriptive text is available in the DOM, use use [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) instead.

The `aria-description` property should only be used when providing a visible description is not the desired user experience. The `aria-describedby` attribute takes as its value a list of `id`s of the elements that contain descriptive text about the object. The `aria-description` is used when there is no appropriate descriptive text that can be associated with the object by `id` reference. If both attributes are present, `aria-describedby` takes precedence in defining the accessible description property.

The content of the description, whether set by `aria-description` or `aria-describedby`, should be flat text. If the content is very long, has semantic meaning requirements, or has a navigational structure, use [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) instead.

## Values

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be conveyed to the assistive technology user.

## ARIAMixin API

- {{domxref("Element.ariaDescription")}}
  - : The  [`ariaDescription`](/en-US/docs/Web/API/Element/ariaDescription) property, part of the {{domxref("Element")}} interface, reflects the value of the `aria-description` attribute, which defines a string value that describes or annotates the current element.

## Associated roles

Used in **ALL** roles.

## Specifications

| Specification | Status |
| ------------- | ------  |
| {{SpecName("ARIA","#aria-description","ARIA: aria-description Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [HTML `title` attribute](/en-US/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](../aria-describedby)
- [`aria-details`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)