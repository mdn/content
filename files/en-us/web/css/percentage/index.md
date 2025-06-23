---
title: <percentage>
slug: Web/CSS/percentage
page-type: css-type
browser-compat: css.types.percentage
---

{{CSSRef}}

The **`<percentage>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents a percentage value. It is often used to define a size as relative to an element's parent object. Numerous properties can use percentages, such as {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}}, and {{CSSxRef("font-size")}}.

> [!NOTE]
> Only calculated values can be inherited. Thus, even if a percentage value is used on the parent property, a real value (such as a width in pixels for a {{CSSxRef("&lt;length&gt;")}} value) will be accessible on the inherited property, not the percentage value.

## Syntax

The `<percentage>` data type consists of a {{CSSxRef("&lt;number&gt;")}} followed by the percentage sign (`%`). Optionally, it may be preceded by a single `+` or `-` sign, although negative values are not valid for all properties. As with all CSS dimensions, there is no space between the symbol and the number.

## Interpolation

When animated, values of the `<percentage>` data type are {{Glossary("interpolation", "interpolated")}} as real, floating-point numbers. The speed of the interpolation is determined by the [easing function](/en-US/docs/Web/CSS/easing-function) associated with the animation.

## Examples

### Width and margin-left

```html
<div class="container">
  <div class="box1">Width: 50%, Left margin: 20%</div>
  <div class="box2">Width: 30%, Left margin: 60%</div>
</div>
```

```css
.container {
  background-color: navy;
}

.box1 {
  width: 50%;
  margin-left: 20%;
  background-color: chartreuse;
}

.box2 {
  width: 30%;
  margin-left: 60%;
  background-color: pink;
}
```

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

### Font-size

```html
<div class="container">
  <p>Full-size text (18px)</p>
  <p><span class="half">50% (9px)</span></p>
  <p><span class="double">200% (36px)</span></p>
</div>
```

```css
.container {
  font-size: 18px;
}

.half {
  font-size: 50%;
}

.double {
  font-size: 200%;
}
```

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
