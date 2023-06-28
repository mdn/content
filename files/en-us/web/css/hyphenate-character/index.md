---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
page-type: css-property
browser-compat: css.properties.hyphenate-character
---

{{CSSRef}}

The **`hyphenate-character`** [CSS](/en-US/docs/Web/CSS) property sets the character (or string) used at the end of a line before a hyphenation break.

Both automatic and soft hyphens are displayed according to the specified hyphenate-character value.

{{EmbedInteractiveExample("pages/css/hyphenate-character.html")}}

## Syntax

The value either sets the string to use instead of a hyphen, or indicates that the user agent should select an appropriate string based on the current typographic conventions (default).

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

### Values

- `<string>`
  - : The {{cssxref("&lt;string&gt;")}} to use at the end of the line before a hyphenation break.
    The user agent may truncate this value if too many characters are used.
- `auto`
  - : The user-agent selects an appropriate string based on the content language's typographic conventions.
    This is the default property value, and only needs to be explicitly set in order to override a different inherited value.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

This example shows two identical blocks of text that have {{cssxref("hyphens")}} set to ensure that they break wherever needed, and on soft hyphen breaks (created using `&shy;`).
The first block has the value of the hyphen changed to the equals symbol ("`=`").
The second block has no hyphenate-character set, which is equivalent to `hyphenate-character: auto` for user agents that support this property.

### HTML

```html
<dl>
  <dt><code>hyphenate-character: "="</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character is not set</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

### CSS

```css
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "=";
  hyphenate-character: "=";
}
```

### Result

{{EmbedLiveSample("Examples", "100%", 350)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}.
