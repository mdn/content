---
title: font-optical-sizing
slug: Web/CSS/font-optical-sizing
page-type: css-property
browser-compat: css.properties.font-optical-sizing
---

{{CSSRef}}

The **`font-optical-sizing`** [CSS](/en-US/docs/Web/CSS) property sets whether text rendering is optimized for viewing at different sizes.

{{EmbedInteractiveExample("pages/css/font-optical-sizing.html")}}

## Syntax

```css
/* keyword values */
font-optical-sizing: none;
font-optical-sizing: auto; /* default */

/* Global values */
font-optical-sizing: inherit;
font-optical-sizing: initial;
font-optical-sizing: revert;
font-optical-sizing: revert-layer;
font-optical-sizing: unset;
```

### Values

- none
  - : The browser will not modify the shape of glyphs for optimal viewing.
- auto
  - : The browser will modify the shape of glyphs for optimal viewing.

## Description

Optical sizing is enabled by default for fonts that have an optical size variation axis. The optical size variation axis is represented by `opsz` in {{cssxref("font-variation-settings")}}.

When optical sizing is used, small text sizes are often rendered with thicker strokes and larger serifs, whereas larger text is often rendered more delicately with more contrast between thicker and thinner strokes.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Disabling optical sizing

```html
<p class="optical-sizing">
  This paragraph is optically sized. This is the default across browsers.
</p>

<p class="no-optical-sizing">
  This paragraph is not optically sized. You should see a difference in
  supporting browsers.
</p>
```

```css
@font-face {
  src: url("AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

p {
  font-size: 36px;
  font-family: Amstelvar;
}

.no-optical-sizing {
  font-optical-sizing: none;
}
```

> [!NOTE]
> The font referenced above — which includes optical sizing and is freely-licensed — is good for testing. You can [download it on GitHub](https://github.com/googlefonts/amstelvar/releases).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-size")}}
- {{cssxref("font-size-adjust")}}
- [Learn: Fundamental text and font styling](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)
