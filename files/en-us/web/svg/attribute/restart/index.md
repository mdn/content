---
title: restart
slug: Web/SVG/Attribute/restart
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.animate.restart
---
{{SVGRef}}

The **`restart`** attribute specifies whether or not an animation can restart.

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

a {
  fill: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

```html
<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <rect y="30" width="100" height="100">
    <animate attributeType="XML" attributeName="y" from="30" to="100"
        dur="5s" repeatCount="1" restart="always" />
  </rect>
  <rect x="120" y="30" width="100" height="100">
    <animate attributeType="XML" attributeName="y" from="30" to="100"
        dur="5s" repeatCount="1" restart="whenNotActive"/>
  </rect>
  <a id="restart"><text y="20">Restart animation</text></a>
</svg>
```

```js
document.getElementById("restart").addEventListener("click", evt => {
  document.querySelectorAll("animate").forEach(element => {
    element.beginElement();
  });
});
```

{{EmbedLiveSample("Example", "220", "150")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>always</code> | <code>whenNotActive</code> | <code>never</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>always</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `always`
    *   : This value indicates that the animation can be restarted at any time.
*   `whenNotActive`
    *   : This value indicates that the animation can only be restarted when it is not active (i.e. after the active end). Attempts to restart the animation during its active duration are ignored.
*   `never`
    *   : This value indicates that the animation cannot be restarted for the time the document is loaded.

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
        {{SpecName("SVG Animations 2", "#RestartAttribute", "restart")}}
      </td>
      <td>{{Spec2("SVG Animations 2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "animate.html#RestartAttribute", "restart")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
