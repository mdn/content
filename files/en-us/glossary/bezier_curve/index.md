---
title: Bézier curve
slug: Glossary/Bezier_curve
page-type: glossary-definition
---

{{GlossarySidebar}}

A **Bézier curve** (pronounced \[bezje]) is a mathematically described curve used in computer graphics and animation. In vector images, they are used to model smooth curves that can be scaled indefinitely.

The curve is defined by a set of control points with a minimum of two. Web related graphics and animations often use cubic Béziers, which are curves with four control points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.

To draw a quadratic Bézier curve, two imaginary lines are drawn, one from P<sub>0</sub> to P<sub>1</sub> and the other from P<sub>1</sub> to P<sub>2</sub>. A third imaginary line is drawn with its starting point moving steadily on the first helper line and the end point on the second helper line. On this imaginary line a point is drawn from its starting point moving steadily to its end point. The curve this point describes is the Bézier curve. Here's an animated illustration demonstrating the creation of the curve:

![Drawing a Bézier curve](bezier_2_big.gif)

## See also

- [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) on Wikipedia
- [Cubic Bézier easing functions in CSS](/en-US/docs/Web/CSS/easing-function/cubic-bezier)
- {{SVGAttr("keySplines")}} SVG attribute
