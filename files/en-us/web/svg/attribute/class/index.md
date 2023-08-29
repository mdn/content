---
title: class
slug: Web/SVG/Attribute/class
page-type: svg-attribute
browser-compat: svg.attributes.style.class
---

{{SVGRef}}

« [SVG Attribute reference home](/en-US/docs/Web/SVG/Attribute)

Assigns a class name or set of class names to an element. You may assign the same class name or names to any number of elements, however, multiple class names must be separated by whitespace characters.

An element's class name serves two key roles:

- As a style sheet selector, for when an author assigns style information to a set of elements.
- For general use by the browser.

You can use this class to style SVG content using CSS.

## Usage context

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Categories</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Content_type#list-of-ts"
          >&#x3C;list-of-class-names></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG/styling.html#ClassAttribute"
          >SVG 1.1 (2nd Edition): The class attribute</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Example

```html
<html lang="en">
  <body>
    <svg
      width="120"
      height="220"
      viewPort="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <style>
        <![CDATA[
            rect.rectClass {
                stroke: #000066;
                fill:   #00cc00;
            }
            circle.circleClass {
                stroke: #006600;
                fill:   #cc0000;
            }
        ]]>
      </style>

      <rect class="rectClass" x="10" y="10" width="100" height="100" />
      <circle class="circleClass" cx="40" cy="50" r="26" />
    </svg>
  </body>
</html>
```

## Elements

The following elements can use the `class` attribute:

- {{ SVGElement("a") }}
- {{ SVGElement("circle") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("desc") }}
- {{ SVGElement("ellipse") }}
- {{ SVGElement("feBlend") }}
- {{ SVGElement("feColorMatrix") }}
- {{ SVGElement("feComponentTransfer") }}
- {{ SVGElement("feComposite") }}
- {{ SVGElement("feConvolveMatrix") }}
- {{ SVGElement("feDiffuseLighting") }}
- {{ SVGElement("feDisplacementMap") }}
- {{ SVGElement("feFlood") }}
- {{ SVGElement("feGaussianBlur") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("feMerge") }}
- {{ SVGElement("feMorphology") }}
- {{ SVGElement("feOffset") }}
- {{ SVGElement("feSpecularLighting") }}
- {{ SVGElement("feTile") }}
- {{ SVGElement("feTurbulence") }}
- {{ SVGElement("filter") }}
- {{ SVGElement("font") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("glyph") }}
- {{ SVGElement("glyphRef") }}
- {{ SVGElement("image") }}
- {{ SVGElement("line") }}
- {{ SVGElement("linearGradient") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("mask") }}
- {{ SVGElement("missing-glyph") }}
- {{ SVGElement("path") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("polygon") }}
- {{ SVGElement("polyline") }}
- {{ SVGElement("radialGradient") }}
- {{ SVGElement("rect") }}
- {{ SVGElement("stop") }}
- {{ SVGElement("svg") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("text") }}
- {{ SVGElement("textPath") }}
- {{ SVGElement("title") }}
- {{ SVGElement("tref") }}
- {{ SVGElement("tspan") }}
- {{ SVGElement("use") }}

## Browser compatibility

{{Compat}}
