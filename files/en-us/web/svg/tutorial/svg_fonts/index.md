---
title: SVG fonts
slug: Web/SVG/Tutorial/SVG_fonts
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

When SVG was specified, support for web fonts was not widespread in browsers. Since accessing the correct font file is, however, crucial for rendering text correctly, a font description technology was added to SVG to provide this ability. It was not meant for compatibility with other formats like [PostScript](https://www.adobe.com/products/postscript.html) or [OTF](https://fonts.google.com/knowledge/glossary/open_type), but rather as a simple means of embedding glyph information into SVG when rendered.

> **Note:** SVG Fonts are currently supported only in Safari and Android Browser.
>
> The functionality was [removed from Chrome 38](https://chromestatus.com/feature/5930075908210688) (and Opera 25) and Firefox [postponed its implementation indefinitely](https://bugzil.la/119490) to concentrate on [WOFF](/en-US/docs/Web/Guide/WOFF). Other tools, however, like Batik and parts of Inkscape support SVG font embedding.

The base for defining an SVG font is the {{ SVGElement("font") }} element.

## Defining a font

There are some ingredients required for embedding a font in SVG. Let's show an example declaration (the one [from the specification](https://www.w3.org/TR/SVG/fonts.html#FontElement)), and explain the details.

```html
<font id="Font1" horiz-adv-x="1000">
  <font-face
    font-family="Super Sans"
    font-weight="bold"
    font-style="normal"
    units-per-em="1000"
    cap-height="600"
    x-height="400"
    ascent="700"
    descent="300"
    alphabetic="0"
    mathematical="350"
    ideographic="400"
    hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold" />
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z" /></missing-glyph>
  <!-- Outline of exclamation point glyph -->
  <glyph unicode="!" horiz-adv-x="300"></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

We start with the {{ SVGElement("font") }} element. This bears an `id` attribute, to enable it to be referenced via a URI (see below). The `horiz-adv-x` attribute determines how wide a character is on average compared to the path definitions of the single glyphs. The value `1000` sets a reasonable value to work with. There are several accompanying attributes that help further define the basic glyph-box layout.

The {{ SVGElement("font-face") }} element is the SVG equivalent of the CSS [`@font-face`](/en-US/docs/Web/CSS/@font-face) declaration. It defines basic properties of the final font such as weight, style, etc. In the example above, the first and most important to be defined is `font-family`, the value of which can then be referenced in CSS and SVG `font-family` properties. The `font-weight` and `font-style` attributes have the same purpose as the equivalent descriptors in CSS. All following attributes are rendering instructions for the font layout engine; for example, how much of the glyphs' overall heights are [ascenders](<https://en.wikipedia.org/wiki/Ascender_(typography)>).

Its child, the {{ SVGElement("font-face-src") }} element, corresponds to CSS' `src` descriptor in `@font-face` declarations. You can point to external sources for font declarations by means of its children {{ SVGElement("font-face-name") }} and {{ SVGElement("font-face-uri") }}. The above example states that if the renderer has a local font available named "Super Sans Bold", it should use this instead.

Following {{ SVGElement("font-face-src") }} is a {{ SVGElement("missing-glyph") }} element. This defines what should be displayed if a certain glyph is not found in the font and if there are no fallback mechanisms. It also shows how glyphs are created: By adding any graphical SVG content inside. You can use literally any other SVG elements in here, even {{ SVGElement("filter") }}, {{ SVGElement("a") }} or {{ SVGElement("script") }}. For simple glyphs, however, you can add a `d` attribute — this defines a shape for the glyph exactly like how standard SVG paths work.

The actual glyphs are then defined by {{ SVGElement("glyph") }} elements. The most important attribute is `unicode`. It defines the unicode code point represented by this glyph. If you also specify the [`lang`](/en-US/docs/Web/HTML/Global_attributes#lang) attribute on a glyph, you can further restrict it to certain languages (represented by `xml:lang` on the target) exclusively. Again, you can use arbitrary SVG to define the glyph, which allows for great effects in supporting user agents.

Two more elements can be defined inside `font`: {{ SVGElement("hkern") }} and {{ SVGElement("vkern") }}. Each carries references to at least two characters (attributes `u1` and `u2`) and an attribute `k` that determines how much the distance between those characters should be decreased. The below example instructs user agents to place the "A" and "V" characters closer together than the standard distance between characters.

```html
<hkern u1="A" u2="V" k="20" />
```

## Referencing a font

When you have put together your font declaration as described above, you can just use a simple `font-family` attribute to actually apply the font to some SVG text:

```html
<font>
  <font-face font-family="Super Sans" />
  <!-- and so on -->
</font>

<text font-family="Super Sans">My text uses Super Sans</text>
```

However, you are free to combine several methods for great freedom of how and where to define the font.

### Option: Use CSS @font-face

You can use `@font-face` to reference remote (and not so remote) fonts:

```html
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style>
  @font-face {
    font-family: "Super Sans";
    src: url(#Super_Sans);
  }
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

### Option: reference a remote font

The above mentioned `font-face-uri` element allows you to reference an external font; hence, allowing greater re-usability:

```html
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
