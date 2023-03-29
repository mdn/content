---
title: Texts
slug: Web/SVG/Tutorial/Texts
page-type: guide
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

When talking about text in SVG, we have to differentiate between two almost completely separate topics. One is the inclusion and display of text in an image, and the other is SVG fonts. The latter is described in a later section of the tutorial, while this page will focus on the first part: bringing text into an SVG image.

## Basics

We have seen in the [introducing example](/en-US/docs/Web/SVG/Tutorial/Getting_Started) that the `text` element can be used to put arbitrary text in SVG documents:

```xml
<text x="10" y="10">Hello World!</text>
```

The `x` and `y` attributes determine where in the viewport the text will appear. The attribute {{SVGAttr("text-anchor")}}, which can have the values `"start"`, `"middle"`, `"end"` or `"inherit"`, decides in which direction the text flows from this point. The attribute {{SVGAttr("dominant-baseline")}} decides the vertical alignment.

Like with the shape elements, text can be colorized with the `fill` attribute and given a stroke with the `stroke` attribute. Both may also refer to gradients or patterns, which makes simple coloring text in SVG very powerful compared to CSS 2.1.

## Setting font properties

An essential part of a text is the font in which it is displayed. SVG offers a set of attributes, many similar to their CSS counterparts, to enable font selection. Each of the following properties can be set as an attribute or via a CSS declaration: {{SVGAttr("font-family")}}, {{SVGAttr("font-style")}}, {{SVGAttr("font-weight")}}, {{SVGAttr("font-variant")}}, {{SVGAttr("font-stretch")}}, {{SVGAttr("font-size")}}, {{SVGAttr("font-size-adjust")}}, {{SVGAttr("kerning")}}, {{SVGAttr("letter-spacing")}}, {{SVGAttr("word-spacing")}} and {{SVGAttr("text-decoration")}}.

## Other text-related elements

### tspan

This element is used to mark up sub-portions of a larger text. It must be a child of a `text` element or another `tspan` element. A typical use case is to paint one word of a sentence bold red.

```html
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
  <text>
    This is
    <tspan font-weight="bold" fill="red">bold and red</tspan>
  </text>

  <style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('tspan', '100%', 100) }}

The `tspan` element has the following custom attributes:

- `x`
  - : Sets a new absolute `x` coordinate for the containing text. This overwrites the default current text position. The attribute may also contain a list of numbers that are one by one applied to the single characters of the `tspan` element.
- `dx`

  - : Starts drawing the text with a horizontal offset `dx` from the default current position. Here, too, you may provide a list of values that are applied to consecutive characters, hence piling up the offset over time.

    Likewise, there are **`y`** and **`dy`** for vertical displacement.

- `rotate`
  - : Rotates all characters by this degree. A list of numbers makes each character rotate to its respective value, with remaining characters rotating according to the last value.
- `textLength`
  - : Gives the calculated length of the string. This is a more obscure attribute, and it is meant to allow the rendering engine to fine-tune the positions of the glyphs when its own measured text length doesn't meet the one provided here.

### textPath

This element fetches via its `xlink:href` attribute an arbitrary path and aligns the characters, which it encircles, along this path:

```html
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
  <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
  <text>
    <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
      A curve.
    </textPath>
  </text>

  <style>
    <![CDATA[
      text{
        dominant-baseline: hanging;
        font: 28px Verdana, Helvetica, Arial, sans-serif;
      }
    ]]>
  </style>
</svg>
```

{{ EmbedLiveSample('textPath', '100%', 100) }}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}
