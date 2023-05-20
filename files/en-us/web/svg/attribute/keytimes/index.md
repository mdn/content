---
title: keyTimes
slug: Web/SVG/Attribute/keyTimes
page-type: svg-attribute
spec-urls: https://svgwg.org/specs/animations/#KeyTimesAttribute
---

{{SVGRef}}

The **`keyTimes`** attribute represents a list of time values used to control the pacing of the animation.

Each time in the list corresponds to a value in the {{SVGAttr("values")}} attribute list, and defines when the value is used in the animation. Each time value in the `keyTimes` list is specified as a floating point value between 0 and 1 (inclusive), representing a proportional offset into the duration of the animation element.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="10" r="10">
    <animate
      attributeName="cx"
      dur="4s"
      repeatCount="indefinite"
      values="60; 110; 60; 10; 60"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
    <animate
      attributeName="cy"
      dur="4s"
      repeatCount="indefinite"
      values="10; 60; 110; 60; 10"
      keyTimes="0; 0.25; 0.5; 0.75; 1" />
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        {{cssxref("number")}} [
        <code>;</code> {{cssxref("number")}} ]* <code>;</code>?
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The value of the `keyTimes` attribute is a semicolon-separated list of values.

There must be exactly as many values in the `keyTimes` list as in the `values` list.

Each successive time value must be greater than or equal to the preceding time value.

The `keyTimes` list semantics depends upon the {{Glossary("interpolation")}} mode:

- For linear and spline animation, the first time value in the list must be 0, and the last time value in the list must be `1`. The key time associated with each value defines when the value is set; values are interpolated between the key times.
- For discrete animation, the first time value in the list must be `0`. The time associated with each value defines when the value is set; the animation function uses that value until the next time defined in the list.

If the {{SVGAttr("calcMode")}} attribute is set to `paced`, the `keyTimes` attribute is ignored.

If the duration of the animation is indefinite, any `keyTimes` specification will be ignored.

- Safari issue: `keyTimes` values should be separated with semicolon without space before, f.e: `keyTimes="0; 0.25; 0.5; 0.75; 1"`

## Specifications

{{Specifications}}
