---
title: '-moz-user-input'
slug: Web/CSS/-moz-user-input
tags:
  - CSS
  - CSS Property
  - CSS:Mozilla Extensions
  - Deprecated
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-user-input
---
{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.

```css
/* Keyword values */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Global values */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

For elements that normally take user input, such as a {{HTMLElement("textarea")}}, the initial value of `-moz-user-input` is `enabled`.

> **Note:** `-moz-user-input` was one of the proposals leading to the proposed CSS 3 {{cssxref("user-input")}} property, which has not yet reached Candidate Recommendation (call for implementations). A similar property, `user-focus`, was proposed in [early drafts of a predecessor of the CSS3 UI specification](https://www.w3.org/TR/2000/WD-css3-userint-20000216), but was rejected by the working group.

## Syntax

### Values

- none
  - : The element does not respond to user input, and it does not become {{CSSxRef(":active")}}.
- enabled
  - : The element accepts user input. For textboxes, this is the default behavior. **Please note that this value is no longer supported in Firefox 60 onwards ({{bug(1405087)}}).**
- disabled
  - : The element does not accept user input. However, this is not the same as setting {{XULAttr("disabled")}} to true, in that the element is drawn normally. **Please note that this value is no longer supported in Firefox 60 onwards ({{bug(1405087)}}).**

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Disabling user input for an element

```css
input.example {
  /* The user will be able to select the text, but not change it. */
  -moz-user-input: disabled;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-modify")}}
- {{CSSxRef("-moz-user-select")}}
