---
title: 'ARIA: aria-brailleroledescription attribute'
slug: web/Accessibility/ARIA/Attributes/aria-brailleroledescription
tags: 

  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-brailleroledescription
---

The global `aria-brailleroledescription` attribute defines a human-readable, author-localized abbreviated description for the role of an element, which is intended to be converted into Braille. 

## Description

Braille is not a one-to-one transliteration of letters and numbers, but rather it includes various abbreviations, contractions and characters that represent a word (known as lolograms). Instead of converting long role descriptions to Braille, the `aria-brailleroledescription` allows for providing an abbreviated version of the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) value, which is a human-readable, author-localized description for the role of an element. Basically, the value of `aria-brailleroledescription` is an abbreviated version of the `aria-roledescription` to be converted into Braille.  

```html
<article aria-roledescription="slide" aria-brailleroledescription="sld"  aria-labelledby="slide1heading">
  <h1 id="slide1heading">Welcome to my talk</h1>
  <img alt="Me" src="images/me.jpg">
  ...
</article>
```

The screen reader will read the above as "slide, welcome to by talk. Image, Me." The same will be transcribed as "sld welcome to my talk gra me" in Braille. The semantic {{HTMLElement('article')}} is given the role of "slide", a role not defined in the specification, but is a common role for slides in a presentation. In Braille, it will be transcribed as "sld". The "gra" is short for "graphic", which is how the "image" role is shortened in Braille. 

As the `aria-brailleroledescription` property overrides how assistive technologies localize and express the name of a role in Braille, inappropriate values will prevent users from understanding and interacting with an element on braille interfaces. Only use of `aria-brailleroledescription` to clarify the purpose of non-interactive container roles like group or region, or to providing a more specific description of a widget in a braille context.

Only use `aria-brailleroledescription` if the [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) is present; but if the `aria-roledescription` value works in Braille, the attribute is not needed. In general, `aria-brailleroledescription` should only be used in the rare case when a `aria-roledescription` is too verbose for Braille.

A few rules to remember: 

- Only apply `aria-brailleroledescription` to elements with a valid WAI-ARIA role or has an implicit WAI-ARIA role semantic.
- The `aria-brailleroledescription` has a non-empty, none null value.
- The `aria-brailleroledescription` is different from the `aria-roledescription` value, which is different from  the ARIA explicit or role or implicit semantic role.
- Avoid using Unicode Braille Patterns. If they must be used, ensure the `aria-brailleroledescription` value doesn't contain only characters in Unicode Braille Patterns and contains content other than white space and Braille Pattern dots-0. If the content is only in Unicode Braille Patterns, the value will not be translated according to the user's preferred translation table.
- Ensure the value is always localized to the document's language

> **Note:** Do NOT use `aria-brailleroledescription` to replicate aria-roledescription. Only include this attribute only when `aria-roledescription` cannot provide an adequate braille representation.

The `aria-brailleroledescription` value will not be exposed to the braille user if:
- The value is empty or contains only whitespace characters or the empty Braille pattern: dots-0 (U+2800).
- The element to which the attribute is applied has an explicit or implicit WAI-ARIA role where `aria-brailleroledescription` is prohibited.
- The element to which the attribute is applied does not have a valid  `aria-roledescription`.


## Values

- `<string>`
  - : The value is a string, an unconstrained value type, that is intended to be converted into Braille

## Associated roles

Used in **ALL** roles, except those that prohibit its use. 

## Specifications

| Specification         | Status      |
| ---------------- | ---------------- |
| {{SpecName("ARIA","#aria-brailleroledescription","ARIA: aria-brailleroledescription Attribute")}}   | {{Spec2('ARIA')}}   |


## See Also

- [`aria-roledescription`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription).

<section id="Quick_links">

1. [**WAI-ARIA states and properties**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
