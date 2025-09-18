---
title: invert()
slug: Web/CSS/filter-function/invert
page-type: css-function
browser-compat: css.types.filter-function.invert
sidebar: cssref
---

The **`invert()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) inverts the color samples in the input image. Its result is a {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("CSS Demo: invert()")}}

```css interactive-example-choice
filter: invert(0);
```

```css interactive-example-choice
filter: invert(0.3);
```

```css interactive-example-choice
filter: invert(50%);
```

```css interactive-example-choice
filter: invert(70%);
```

```css interactive-example-choice
filter: invert(1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntax

```css
/* No inversion */
invert(0)

/* Complete inversion */
invert()
invert(1)
invert(100%)

/* 60% inversion */
invert(.6)
invert(60%)
```

### Parameters

- {{cssxref("&lt;number&gt;")}} or {{cssxref("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Specifies the amount of the conversion. A value of `100%` is completely inverted, while a value of `0%` leaves the input unchanged. Values between `0%` and `100%` are linear multipliers on the effect. The initial value for {{Glossary("interpolation")}} is `0`. The default value is `1`.

## Formal syntax

{{CSSSyntax}}

## SVG filter

The SVG {{SVGElement("feComponentTransfer")}} filter element can also be used to invert content by creating equivalent inversion on nested {{SVGElement("feFuncR")}}, {{SVGElement("feFuncG")}}, and {{SVGElement("feFuncB")}} table elements. We set the same `tableValue` for the red, green, and blue filter primitives to the same value, then we can reference the SVG effect by the ID of the {{SVGElement("filter")}}:

```html
<svg role="none">
  <filter id="invert90">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.1 0" />
      <feFuncG type="table" tableValues="0.1 0" />
      <feFuncB type="table" tableValues="0.1 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

The following declarations produce the same effect:

```css
filter: invert(0.9);
filter: invert(90%);
filter: url("#invert90"); /* with embedded SVG */
filter: url("fileName.svg#invert90"); /* external SVG */
```

## Examples

This example shows three images: the image with a `blur()` filter function applied, the image with the equivalent SVG blur function applied, and the original images for comparison:

### SVG

We create an SVG filter that inverts the content on which it is applied by 70%:

```html
<svg height="0">
  <filter id="invert">
    <feComponentTransfer>
      <feFuncR type="table" tableValues="0.3 0" />
      <feFuncG type="table" tableValues="0.3 0" />
      <feFuncB type="table" tableValues="0.3 0" />
    </feComponentTransfer>
  </filter>
</svg>
```

### CSS

We include CSS that will invert elements based on their `filter` or `svgFilter` class:

```css
.filter {
  filter: invert(70%);
}

.svgFilter {
  filter: url("#invert");
}
```

```html hidden
<table cellpadding="5">
  <thead>
    <tr>
      <th><code>invert()</code> filter</th>
      <th>SVG filter equivalent</th>
      <th>Original image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="svgFilter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <svg id="svg" height="220" width="220" overflow="visible">
          <filter id="svgInvert">
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.3 0"/>
              <feFuncG type="table" tableValues="0.3 0"/>
              <feFuncB type="table" tableValues="0.3 0"/>
            </feComponentTransfer>
          </filter>
          </filter>
          <image
            href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
            filter="url('#svgInvert')" />
        </svg>
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample('examples','100%','280')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

The other {{cssxref("&lt;filter-function&gt;")}} functions available to be used in values of the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties include:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/saturate", "saturate()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
