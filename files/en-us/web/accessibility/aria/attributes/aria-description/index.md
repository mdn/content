---
title: 'ARIA: aria-description attribute'
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

The global `aria-description` attribute provides a mechanism for th developer to describe or annotate the current element for assistive technology users. The string value defines the accessible description property. 

The `aria-description` attribute is similar to [`aria-label`](../aria-label) in that both provide a text string to associate with the element, but a label should be concise, whereas a description is intended to provide more verbose information. 

The `aria-description` property should really only be used when providing a visible description is not the desired user experience. If the description text is available in the DOM, use use [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) instead. The `aria-description` has the same purpose as the [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby); both provide the user with additional descriptive text for the object on which it is set. The `aria-describedby` attribute takes as it's value a list of id's of the elements that contain descriptive text about the object. The `aria-description` is used when there is no appropriated descriptive text that can be associated with the object via the `aria-describedby`. If both attributes are present, the `aria-describedby` takes precendence in defining the accessible description property.

The content of the description, whether set by `aria-description` or `aria-describedby` should be flat content. If the content is very long, has semantic meaning requirements, or has a navigational structure, use [`aria-details`]((/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details) instead. 

## Values

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be conveyed to the assistive technology user.

## ARIAMixin API 

- {{domxref("Element.ariaDescription")}}
  - : The  [`ariaDescription`](/en-US/docs/Web/API/Element/ariadescription) property, part of the {{domxref("ARIAMixin")}} interface, reflects the value of the `aria-description` attribute, which defines a string value that describes or annotates the current element.

## Associated roles

Used in **ALL** roles. 

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-description","ARIA: aria-description Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [HTML `title` attribute](/en-US/docs/Web/HTML/Global_attributes/title)
- [`aria-describedby`](../aria-describedby)
- [`aria-details`]((/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-details)