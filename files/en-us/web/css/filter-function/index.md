---
title: <filter-function>
slug: Web/CSS/filter-function
page-type: css-type
browser-compat: css.types.filter-function
---

{{CSSRef}}

The **`<filter-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.

## Syntax

The `<filter-function>` data type is specified using one of the filter functions listed below. Each function requires an argument which, if invalid, results in no filter being applied.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Blurs the image.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Makes the image brighter or darker.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Increases or decreases the image's contrast.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applies a drop shadow behind the image.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Converts the image to grayscale.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Changes the overall hue of the image.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Inverts the colors of the image.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Makes the image transparent.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Super-saturates or desaturates the input image.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Converts the image to sepia.

## Formal syntax

{{csssyntax}}

## Examples

### Filter function comparison

This example provides a simple graphic, along with a select menu to allow you to choose between the different types of filter function, and a slider to allow you to vary the values used inside the filter function. Updating the controls updates the filter effect in real time, allowing you to investigate the effects of different filters.

```css
div {
  width: 300px;
  height: 300px;
  background: url(firefox.png) no-repeat center;
  filter: <filter-function>(<value>);
}
```

Where the `<filter-function>` is the filter you select from the drop down and the `<value>` is the values you set with the slider:
'
{{EmbedGHLiveSample("css-examples/types/filterfunctions.html", '100%', '500')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}
