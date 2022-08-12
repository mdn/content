---
title: font-synthesis
slug: Web/CSS/font-synthesis
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-synthesis
---
{{CSSRef}}

The **`font-synthesis`** [CSS](/en-US/docs/Web/CSS) property controls which missing typefaces, bold, italic, or small-caps, may be synthesized by the browser.

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

## Syntax

```css
font-synthesis: none;
font-synthesis: weight;
font-synthesis: style;
font-synthesis: small-caps;
font-synthesis: weight style small-caps;

/* Global values */
font-synthesis: inherit;
font-synthesis: initial;
font-synthesis: revert;
font-synthesis: revert-layer;
font-synthesis: unset;
```

### Values

- `none`
  - : Indicates that no bold, italic, nor small-caps typeface may be synthesized.
- `weight`
  - : Indicates that a bold typeface may be synthesized if needed.
- `style`
  - : Indicates that an italic typeface may be synthesized if needed.
- `small-caps`
  - : Indicates that a small-caps typeface may be synthesized if needed.

## Description

Most standard Western fonts include italic and bold variants, and some fonts include a small-caps variant. However, many fonts do not. Fonts used for Chinese, Japanese, Korean and other logographic scripts tend not to include these variants, and synthesizing them may impede the legibility of the text. In these cases, it may be desirable to switch off the browser's default font-synthesis.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling font synthesis

#### HTML

```html
<em class="syn">Synthesize me! 站直。</em>
<br/>
<em class="no-syn">Don't synthesize me! 站直。</em>
```

#### CSS

```css
em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight small-caps;
}
.no-syn {
  font-synthesis: none;
}
```

#### Result

{{ EmbedLiveSample('Disabling_font_synthesis', '', '75') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
