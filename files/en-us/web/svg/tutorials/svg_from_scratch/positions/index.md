---
title: Positions
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
page-type: tutorial-chapter
sidebar: svgref
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}

In this article, we examine how Scalable Vector Graphics (SVG) represents the positions and sizes of objects within a drawing context, including coordinate system and what a "pixel" measurement means in a scalable context.

## The grid

For all elements, SVG uses a coordinate system or **grid** system similar to the one used by [canvas](/en-US/docs/Web/API/Canvas_API) (and by a whole lot of other computer drawing routines). That is, the top left corner of the document is considered to be the point (0,0), or point of origin. Positions are then measured in pixels from the top left corner, with the positive x direction being to the right, and the positive y direction being to the bottom.

![X, Y coordinate grid with a blue box in the middle.](canvas_default_grid.png)

Note that this is slightly different than the way you're taught to graph as a kid (y axis is flipped). However, this is the same way elements in HTML are positioned (By default, LTR documents are considered not the RTL documents which position X from right-to-left).

### Example

The element

```html
<rect x="0" y="0" width="100" height="100" />
```

defines a rectangle from the upper left corner that spans 100px to the right and 100px to the bottom.

### What are "pixels"?

In the most basic case, one CSS pixel in an SVG document maps to one CSS pixel on the output device. However, SVG graphics are defined using a **user coordinate system**, where positions and lengths are expressed in **user units**. User units are the unitless coordinate values you write in SVG attributes such as `x`, `y`, `width`, and `height`.

When an SVG viewport is first created, one user unit corresponds to one CSS pixel. This is only the initial mapping, however. Features such as the `viewBox` attribute can transform the user coordinate system, causing one user unit to correspond to more or fewer CSS pixels.

Like CSS, SVG also supports absolute units such as `cm`, `mm`, and `pt`. These are converted to user units before rendering. We start with the `svg` root element:

```html
<svg width="100" height="100">…</svg>
```

The above element defines an SVG canvas with 100x100px. One user unit equals one screen unit.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

The SVG viewport is 200 by 200 CSS pixels in size. The `viewBox` attribute defines a rectangle in the user coordinate system that spans from (0,0) to (100,100). The browser automatically maps that 100 × 100 user-unit rectangle to the 200 × 200 CSS pixel viewport, so each user unit is rendered using 2 × 2 CSS pixels.

The **user coordinate system** determines how user units are mapped to the viewport. Besides scaling, this coordinate system can also be translated, rotated, skewed, or flipped. Because the mapping can change, a user unit does not always correspond to a single CSS pixel. Features such as `viewBox`, transforms, and nested SVG viewports can all establish a different mapping between user units and the rendered image.

A quote from the SVG 1.1 specification illustrates this:

> \[...] suppose that the user agent can determine from its environment that "1px" corresponds to "0.2822222mm" (i.e., 90dpi). Then, for all processing of SVG content: \[...] "1cm" equals "35.43307px" (and therefore 35.43307 user units)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}
