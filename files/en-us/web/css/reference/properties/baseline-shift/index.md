---
title: baseline-shift
slug: Web/CSS/Reference/Properties/baseline-shift
page-type: css-property
browser-compat: css.properties.baseline-shift
sidebar: cssref
---

The **`baseline-shift`** [CSS](/en-US/docs/Web/CSS) property repositions the dominant-baseline of a text element relative to the dominant-baseline of its parent text content element. The shifted element might be a sub- or superscript. If the property is present, the value overrides the element's {{SVGAttr("baseline-shift")}} attribute.

> [!NOTE]
> The `baseline-shift` property only applies to {{SVGElement("textPath")}} and {{SVGElement("tspan")}} elements nested in an {{SVGElement("svg")}}. It doesn't apply to other SVG, HTML, or pseudo-elements.

## Syntax

```css
/* <length-percentage> values */
baseline-shift: -0.5px;
baseline-shift: 4%;

/* keyword values */
baseline-shift: sub;
baseline-shift: super;

/* Global values */
baseline-shift: inherit;
baseline-shift: initial;
baseline-shift: revert;
baseline-shift: revert-layer;
baseline-shift: unset;
```

### Values

- `sub`
  - : The dominant-baseline is shifted to the default position for subscripts.
- `super`
  - : The dominant-baseline is shifted to the default position for superscripts.
- `<length-percentage>`
  - : Raises (if positive) or lowers (if negative) the dominant-baseline of the text content element by the specified length or percentage, with the percentage being relative to the dominant-baseline of the parent text content element's {{cssxref("line-height")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Using keyword values

This example demonstrates the basic usage of the `sub` and `super` keyword values of the `baseline-shift` property, as well as how the `baseline-shift` CSS property takes precedence over the `baseline-shift` SVG attribute.

#### HTML

We define an SVG with two SVG {{SVGElement("text")}} elements, each containing a {{SVGElement("tspan")}} element with the SVG {{SVGAttr("baseline-shift")}} attribute set on it.

```html hidden
<p>Original SVG</p>
```

```html
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

```html hidden
<p><code>baseline-shift: sub;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
<p><code>baseline-shift: super;</code></p>
<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="50">
    Ceci
    <tspan baseline-shift="super">n'est pas</tspan>
    une pipe super!
  </text>
  <text x="10" y="90">
    Ceci
    <tspan baseline-shift="sub">n'est pas</tspan>
    une pipe sub!
  </text>
</svg>
```

The SVG is repeated three times; we've only shown one copy for the sake of brevity.

#### CSS

We make the text in all three SVG images large and cursive, adding some color to differentiate the content within the `<tspan>` elements.

We set the `baseline-shift` property value to `sub` on the second SVG's `<tspan>` element and  `super` on the third SVG's `<tspan>` element. The first SVG has no additional CSS applied to it.

```css
text {
  font-family: cursive;
  font-size: 2rem;
}
[baseline-shift="sub"] {
  fill: deeppink;
}
[baseline-shift="super"] {
  fill: rebeccapurple;
}

svg:nth-of-type(2) tspan {
  baseline-shift: sub;
}
svg:nth-of-type(3) tspan {
  baseline-shift: super;
}
```

```css hidden
svg {
  border: 1px solid;
  width: 15em;
  margin-bottom: 10px;
}
@supports not (baseline-shift: sub) {
  body::before {
    content: "Your browser doesn't support the `baseline-shift` property.";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.5em;
  }
}
```

#### Results

{{EmbedLiveSample("Using keyword values", "300", "370")}}

The SVG `baseline-shift` attribute values are used in the first SVG. In the second and third SVGs, the CSS `baseline-shift` values override the attribute values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGAttr("baseline-shift")}} attribute
- Presentation properties: `baseline-shift`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}},{{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, and {{cssxref("vector-effect")}}
