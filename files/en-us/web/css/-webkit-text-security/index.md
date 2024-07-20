---
title: "-webkit-text-security"
slug: Web/CSS/-webkit-text-security
page-type: css-property
status:
  - non-standard
browser-compat: css.properties.-webkit-text-security
---

{{CSSRef}}{{Non-standard_Header}}

**`-webkit-text-security`** is a non-standard CSS property that obfuscates characters in a {{HtmlElement("form")}} field (such as {{HtmlElement("input")}} or {{HtmlElement("textarea")}}) by replacing them with a shape. It only affects fields that are _not_ of `type=password`.

## Syntax

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;

/* Global values */
-webkit-text-security: inherit;
-webkit-text-security: initial;
-webkit-text-security: revert;
-webkit-text-security: revert-layer;
-webkit-text-security: unset;
```

## Formal syntax

```plain
-webkit-text-security = circle | disc | square | none
```

## Examples

### Obscuring a text input

Try typing in the field below. If your browser supports this property, the characters should be visually replaced with squares.

#### HTML

```html
<label for="name">Name:</label> <input type="text" name="name" id="name" />
```

#### CSS

```css
input {
  -webkit-text-security: square;
}
```

#### Result

{{EmbedLiveSample("Obscuring_a_text_input")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [WebKit CSS extensions](/en-US/docs/Web/CSS/WebKit_Extensions)
