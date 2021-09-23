---
title: repeatDur
slug: Web/SVG/Attribute/repeatDur
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.animate.repeatDur
---
{{SVGRef}}

The **`repeatDur`** attribute specifies the total duration for repeating an animation.

You can use this attribute with the following SVG elements:

*   {{SVGElement("animate")}}
*   {{SVGElement("animateColor")}}
*   {{SVGElement("animateMotion")}}
*   {{SVGElement("animateTransform")}}
*   {{SVGElement("set")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="100">
    <animate attributeType="XML" attributeName="y" from="0" to="50"
        dur="1s" repeatDur="5s"/>
  </rect>
  <rect x="120" y="0" width="100" height="100">
    <animate attributeType="XML" attributeName="y" from="0" to="50"
        dur="1s" repeatDur="indefinite"/>
  </rect>
</svg>
```

{{EmbedLiveSample("Example", "220", "150")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/SVG/Content_type#clock-value"
            >&#x3C;clock-value></a
          ></code
        >
        | <code>indefinite</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default values</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `<clock-value>`
    *   : This value specifies the duration in presentation time to repeat the animation.
*   `indefinite`
    *   : This value indicates that the animation will be repeated indefinitely (i.e. until the document ends).

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG Animations 2", "#RepeatDurAttribute", "repeatDur")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#RepeatDurAttribute", "repeatDur")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
