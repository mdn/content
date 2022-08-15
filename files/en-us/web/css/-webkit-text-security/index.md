---
title: '-webkit-text-security'
slug: Web/CSS/-webkit-text-security
tags:
  - CSS
  - CSS Property
  - NeedsCompatTable
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-webkit-text-security
---
{{ CSSRef() }} {{ Non-standard_header() }}

**`-webkit-text-security`** is a non-standard CSS property that obfuscates characters in a {{HtmlElement("form")}} field (such as {{HtmlElement("input")}} or {{HtmlElement("textarea")}}) by replacing them with a shape. It only affects fields that are _not_ of `type=password`.

## Syntax

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;
```

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Obscuring a text input

Try typing in the field below. If your browser supports this property, the characters should be visually replaced with squares.

#### HTML

```html
<label for="name">Name:</label>
<input type="text" name="name" id="name" />
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
