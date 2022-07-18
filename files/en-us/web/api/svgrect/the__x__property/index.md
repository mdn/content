---
title: The 'X' property
slug: Web/API/SVGRect/The__X__property
page-type: web-api-instance-property
---
{{APIRef("SVG")}}
The [x](https://svgwg.org/svg2-draft/geometry.html#XProperty) property describes the horizontal coordinate of the position of the element.

## Usage context

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>x</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value</td>
      <td>
        <a href="https://www.w3.org/TR/css3-values/#lengths">&#x3C;length></a
        > | <a href="https://www.w3.org/TR/css3-values/#percentages"
          >&#x3C;percentage></a
        >
      </td>
    </tr>
    <tr>
      <td>Initial</td>
      <td>0</td>
    </tr>
    <tr>
      <td>Applies to</td>
      <td>
        {{ SVGElement("mask") }} , '<a
          href="https://svgwg.org/svg2-draft/struct.html#SVGElement"
          >svg</a
        >', '<a href="https://svgwg.org/svg2-draft/shapes.html#RectElement"
          >rect</a
        >', '<a href="https://svgwg.org/svg2-draft/embedded.html#ImageElement"
          >image</a
        >', '<a
          href="https://svgwg.org/svg2-draft/embedded.html#ForeignObjectElement"
          >foreignObject</a
        >'
      </td>
    </tr>
    <tr>
      <td>Inherited</td>
      <td>no</td>
    </tr>
    <tr>
      <td>Percentages</td>
      <td>
        refer to the size of the current viewport (see <a
          href="https://svgwg.org/svg2-draft/coords.html#Units"
          >Units</a
        >)
      </td>
    </tr>
    <tr>
      <td>Media</td>
      <td>visual</td>
    </tr>
    <tr>
      <td>Computed value</td>
      <td>absolute length or percentage</td>
    </tr>
    <tr>
      <td>Animatable</td>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Simple usage

A \<coordinate> is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the relevant axis (the x-axis for X coordinates, the y-axis for Y coordinates). Its syntax is the same as that for [\<length>](https://www.w3.org/TR/SVG11/types.html#DataTypeLength)

```go
// Rect draws a rectangle with upper left-hand corner at x,y, with width w, and height h, with optional style
// Standard Reference: http://www.w3.org/TR/SVG11/shapes.html#RectElement
func (svg *SVG) Rect(x float64, y float64, w float64, h float64, s ...string) {
  svg.printf(`<rect %s %s`, dim(x, y, w, h, svg.Decimals), endstyle(s, emptyclose))
}
```
