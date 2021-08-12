---
title: ':-moz-focusring'
slug: Web/CSS/:-moz-focusring
tags:
  - CSS
  - CSS:Mozilla Extensions
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.-moz-focusring
---
{{Non-standard_header}}{{CSSRef}}

The **`:-moz-focusring`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that is similar to the {{cssxref(":focus")}} pseudo-class, but it only matches an element if it's currently focused _and_ a focus ring or other indicator should be drawn around it.

> **Note:** This selector has been renamed to {{cssxref(":focus-visible")}} for the CSS Selectors 4 specification.

If `:-moz-focusring` matches, then `:focus` also matches, but the converse is not always true: it depends on whether the [user agent](/en-US/docs/Glossary/User_agent) has focus ring drawing enabled and how the element was focused. Whether the user agent has focus ring drawing enabled can depend on operating system settings and other factors, so the precise behavior of this pseudo-class will vary from platform to platform.

The working group previously [intended to add this feature to CSS Selectors 4 or 5](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html) as `:focus-ring`, and has since [decided to rename it](https://lists.w3.org/Archives/Public/www-style/2017Dec/0018.html) to {{cssxref(":focus-visible")}} and added it to CSS Selectors 4.

> **Note:** Developers tend to use `:-moz-focusring` to differentiate between the `focus` state when the user focuses an element via a **mouse click** versus **keyboard tabbing**. It is also potentially useful if you are creating a [custom element](/en-US/docs/Web/Web_Components/Using_custom_elements) and you want to change its style based on its behavior.

## Syntax

```css
:-moz-focusring
```

## Example

### HTML

```html
<input />
```

### CSS

```css
input {
  margin: 5px;
}

:-moz-focusring {
  color: red;
  outline: 2px dotted green;
}
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":focus-visible")}}
- {{bug("418521")}}
