---
title: font-palette
slug: Web/CSS/font-palette
page-type: css-property
browser-compat: css.properties.font-palette
---

{{CSSRef}}

The **`font-palette`** [CSS](/en-US/docs/Web/CSS) property allows specifying one of the many palettes contained in a [color font](https://www.colorfonts.wtf/) that a user agent may use for the font. Users can also override the values in a palette or create a new palette by using the [`@font-palette-values`](/en-US/docs/Web/CSS/@font-palette-values) at-rule.

> **Note:** A `font-palette` palette takes precedence when coloring a font. The {{cssxref("color")}} property will not override a font palette, even if specified with {{cssxref("important", "!important")}}.

## Syntax

```css
/* Using a font-defined palette */
font-palette: normal;

/* Using a user-defined palette */
font-palette: --one;

/* Creating a new palette by blending two others */
font-palette: palette-mix(in lch, --blue, --yellow);
```

### Values

- `normal`
  - : Specifies the default color palette or the default glyph colorization (set by the font maker) to be used for the font. With this setting, the palette in the font at index 0 is rendered.
- `light`
  - : Specifies the first palette in the font that matches 'light' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a light (close to white) background. If a font does not have this metadata, the `light` value behaves as `normal`.
- `dark`
  - : Specifies the first palette in the font that matches 'dark' to be used for the font. Some fonts contain metadata that identify a palette as applicable for a dark (close to black) background. If a font does not have this metadata, the value behaves as `normal`.
- `<palette-identifier>`
  - : Allows you to specify your own values for the font palette by using the [@font-palette-values](/en-US/docs/Web/CSS/@font-palette-values) at-rule. This value is specified using the [&lt;dashed-ident&gt;](/en-US/docs/Web/CSS/dashed-ident) format.
- {{cssxref("font-palette/palette-mix", "palette-mix()")}}
  - : Creates a new `font-palette` value by blending together two `font-palette` values by specified percentages and color interpolation methods.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Specifying a dark palette

This example allows you to use the first palette marked as _dark_ (works best on a near black background) by the font-maker.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animating between two palettes

This example illustrates how to animate `font-palette` value changes to create a smooth font animation.

#### HTML

The HTML contains a single paragraph of text to animate:

```html
<p>color-palette<br />animation</p>
```

#### CSS

In the CSS, we import a [color font](https://www.colorfonts.wtf/) called [Nabla](https://nabla.typearture.com/) from [Google Fonts](https://fonts.google.com/?coloronly=true), and define two custom `font-palette` values using the {{cssxref("@font-palette-values")}} at-rule. We then create {{cssxref("@keyframes")}} that animate between these two palettes, and apply this animation to our paragraph.

```css
@import url("https://fonts.googleapis.com/css2?family=Nabla&display=swap");

@font-palette-values --blueNabla {
  font-family: Nabla;
  base-palette: 2; /* this is Nabla's blue palette */
}

@font-palette-values --greyNabla {
  font-family: Nabla;
  base-palette: 3; /* this is Nabla's grey palette */
}

@keyframes animate-palette {
  from {
    font-palette: --greyNabla;
  }

  to {
    font-palette: --blueNabla;
  }
}

p {
  font-family: "Nabla";
  font-size: 5rem;
  margin: 0;
  text-align: center;
  animation: animate-palette 4s infinite alternate linear;
}
```

#### Result

The output looks like this:

{{EmbedLiveSample("Animating between two palettes", "100%", 300)}}

> **Note:** Browsers that still implement `discrete` `font-palette` animation will flip between the two palettes rather than smoothly animating.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("font-palette/palette-mix","palette-mix()")}}
- {{cssxref("@font-palette-values", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} descriptor
- {{cssxref("@font-palette-values/font-family", "font-family")}} descriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} descriptor
