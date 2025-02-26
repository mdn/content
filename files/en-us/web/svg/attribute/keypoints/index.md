---
title: keyPoints
slug: Web/SVG/Attribute/keyPoints
page-type: svg-attribute
browser-compat: svg.elements.animateMotion.keyPoints
---

{{SVGRef}}

The **`keyPoints`** attribute indicates the simple duration of an animation.

You can use this attribute with the following SVG elements:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 120 120"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="motionPath" />
  <circle cx="10" cy="110" r="3" fill="lightgrey" />
  <circle cx="110" cy="10" r="3" fill="lightgrey" />

  <circle r="5" fill="red">
    <animateMotion
      dur="3s"
      repeatCount="indefinite"
      keyPoints="0;0.5;1"
      keyTimes="0;0.15;1"
      calcMode="linear">
      <mpath href="#motionPath" />
    </animateMotion>
  </circle>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>{{cssxref("number")}} [; {{cssxref("number")}}]* ;?</td>
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

- `<number> [; <number>] ;?`

  - : This value defines a semicolon-separated list of floating point values between 0 and 1 and indicates how far along the motion path the object shall move at the moment in time specified by corresponding {{SVGAttr("keyTimes")}} value. The distance is calculated along the path specified by the {{SVGAttr("path")}} attribute. Each progress value in the list corresponds to a value in the `keyTimes` attribute list.

    If a list of key points is specified, there must be exactly as many values in the `keyPoints` list as in the `keyTimes` list.

    If there's a semicolon at the end of the value, optionally followed by white space, both the semicolon and the trailing white space are ignored.

    If there are any errors in the value specification (i.e. bad values, too many or too few values), then that's an error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
