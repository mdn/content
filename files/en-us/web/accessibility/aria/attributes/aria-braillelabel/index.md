---
title: 'aria-braillelabel'
slug: Web/Accessibility/ARIA/Attributes/aria-braillelabel
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-braillelabel
spec-urls: https://w3c.github.io/aria/#aria-braillelabel
---

The global `aria-braillelabel` property defines a string value that labels the current element, which is intended to be converted into Braille.

## Description

The global `aria-braillelabel` attribute is similar to the global [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) in that it defines a string value that labels the current element. While `aria-label` is read by the screen reader, the contents of the `aria-braillelabel` attribute are converted into Braille; providing the user with a recognizable name of the object in Braille.

The purpose of the `aria-braillelabel` property is to override how assistive technologies localize and express the accessible name of an element in Braille and should only be used when accessible name, without this attribute, when converted to Braille, would not be the desired user experience.

When using `aria-braillelabel`, ensure that:

- The element to which `aria-braillelabel` is applied has a valid accessible name.
- The value of aria-braillelabel has actual content and is not empty or only whitespace in unicode or unicode Braille.
- The value is NOT the same as the accessible name.
- The `aria-braillelabel` values are localized to align with the document language.
- Communicate to the user that this attribute is available, especially if the content contains Unicode Braille Patterns, so the user knows to set the settings to apply user specific braille translations

> **Note:** Assistive Technologies with braille support can convert the accessible names to Braille.
> Therefore, only use `aria-braillelabel` when the accessible name is not the user experience you want.

Using only the accessible name, e.g., from content or via `aria-label` is almost always the better user experience, so don't use aria-braillelabel to replicate aria-label. Only use `aria-braillelabel` if the accessible name cannot provide an adequate braille representation.

```html
<button aria-braillelabel="***">
  <img alt="3 out of 5 stars" src="three_stars.png">
</button>
```

A braille display may display "btn \**\*" in Braille rather than the more verbose "btn gra 3 out of 5 stars".

## Values

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be converted into Braille.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-brailleroledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription)

<section id="Quick_links">

1. [**WAI-ARIA states and properties**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
