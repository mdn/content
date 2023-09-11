---
title: Basic shapes
slug: Web/SVG/Tutorial/Basic_Shapes
page-type: guide
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}

There are several basic shapes used for most SVG drawing. The purpose of these shapes is fairly obvious from their names. Some of the parameters that determine their position and size are given, but an element reference would probably contain more accurate and complete descriptions along with other properties that won't be covered in here. However, since they're used in most SVG documents, it's necessary to give them some sort of introduction.

To insert a shape, you create an element in the document. Different elements correspond to different shapes and take different parameters to describe the size and position of those shapes. Some are slightly redundant in that they can be created by other shapes, but they're all there for your convenience and to keep your SVG documents as short and as readable as possible. All the basic shapes are shown in the following image.

![Succession of eight different shapes and drawings. At the top left, a black outline square follow by a black rounded outline square. Below at the left, a red outline circle follow by a red outline ellipse. Below at the left a yellow line, follow by a yellow zigzag. Below the yellow lines, a green outline star and at the end of the image a blue wavy line.](shapes.png)

The code to generate that image looks something like this:

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> **Note:** The `stroke`, `stroke-width`, and `fill` attributes are explained later in the tutorial.

## Rectangle

The {{SVGElement("rect")}} element draws a rectangle on the screen. There are six basic attributes that control the position and shape of the rectangles on screen. The one on the right has its `rx` and `ry` parameters set, giving it rounded corners. If they're not set, they default to `0`.

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : The x position of the top left corner of the rectangle.
- `y`
  - : The y position of the top left corner of the rectangle.
- `width`
  - : The width of the rectangle.
- `height`
  - : The height of the rectangle.
- `rx`
  - : The x radius of the corners of the rectangle.
- `ry`
  - : The y radius of the corners of the rectangle.

## Circle

The {{SVGElement("circle")}} element draws a circle on the screen. It takes three basic parameters to determine the shape and size of the element.

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : The radius of the circle.
- `cx`
  - : The x position of the center of the circle.
- `cy`
  - : The y position of the center of the circle.

## Ellipse

An {{SVGElement("ellipse")}} is a more general form of the {{SVGElement("circle")}} element, where you can scale the x and y radius (commonly referred to as the _semimajor_ and _semiminor_ axes in maths) of the circle separately.

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx`
  - : The x radius of the ellipse.
- `ry`
  - : The y radius of the ellipse.
- `cx`
  - : The x position of the center of the ellipse.
- `cy`
  - : The y position of the center of the ellipse.

## Line

The {{SVGElement("line")}} element takes the positions of two points as parameters and draws a straight line between them.

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- `x1`
  - : The x position of point 1.
- `y1`
  - : The y position of point 1.
- `x2`
  - : The x position of point 2.
- `y2`
  - : The y position of point 2.

## Polyline

A {{SVGElement("polyline")}} is a group of connected straight lines. Since the list of points can get quite long, all the points are included in one attribute:

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : A list of points. Each number must be separated by a space, comma, EOL, or a line feed character with additional whitespace permitted. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list `(0,0)`, `(1,1)`, and `(2,2)` could be written as `0, 0 1, 1 2, 2`.

## Polygon

A {{SVGElement("polygon")}} is similar to a {{SVGElement("polyline")}}, in that it is composed of straight line segments connecting a list of points. For polygons though, the path automatically connects the last point with the first, creating a closed shape.

> **Note:** A rectangle is a type of polygon, so a polygon can be used to create a `<rect/>` element that does not have rounded corners.

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points`
  - : A list of points, each number separated by a space, comma, EOL, or a line feed character with additional whitespace permitted. Each point must contain two numbers: an x coordinate and a y coordinate. So, the list `(0,0)`, `(1,1)`, and `(2,2)` could be written as `0, 0 1, 1 2, 2`. The drawing then closes the path, so a final straight line would be drawn from `(2,2)` to `(0,0)`.

## Path

A {{SVGElement("path")}} is the most general shape that can be used in SVG. Using a `path` element, you can draw rectangles (with or without rounded corners), circles, ellipses, polylines, and polygons. Basically any of the other types of shapes, bezier curves, quadratic curves, and many more.

For this reason, [the next section](/en-US/docs/Web/SVG/Tutorial/Paths) in this tutorial will be focused on paths. But for now, note that there is a single parameter used to control its shape.

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : A list of points and other information about how to draw the path. See the [Paths](/en-US/docs/Web/SVG/Tutorial/Paths) section for more information.

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}
