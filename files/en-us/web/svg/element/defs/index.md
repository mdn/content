---
title: <defs>
slug: Web/SVG/Element/defs
page-type: svg-element
browser-compat: svg.elements.defs
---

{{SVGRef}}

The **`<defs>`** [SVG](/en-US/docs/Web/SVG) element is used to store graphical objects that will be used at a later time. Objects created inside a `<defs>` element are not rendered directly. To display them you have to reference them (with a {{SVGElement("use")}} element for example).

Graphical objects can be referenced from anywhere, however, defining these objects inside of a `<defs>` element promotes understandability of the SVG content and is beneficial to the overall accessibility of the document.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Some graphical objects to use -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my graphical objects -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
