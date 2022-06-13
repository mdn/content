---
title: path()
slug: Web/CSS/path()
tags:
  - CSS
  - CSS Function
  - Function
  - Reference
---
{{CSSRef}}

The **`path()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) accepts an SVG path string, and is used in CSS Shapes and CSS Motion Path to enable a shape to be drawn.

## Syntax

```css
path( [[<'fill-rule'>,]?<string>)
```

### Parameters

- `<'fill-rule'>`
  - : The filling rule for the interior of the path. Possible values are nonzero or evenodd. The default value is nonzero. See [fill-rule](/en-US/docs/Web/SVG/Attribute/fill-rule) for more details.
- \<string>
  - : The string is an [SVG path data string](/en-US/docs/Web/SVG/Element/path).

## Examples

### Examples of correct values for path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Use as the value of offset-path

The `path()` function is used to create a path for the item to travel round. Changing any of the values will cause the path to not neatly run round the circle.

{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}

## Specifications

| Specification                                                            | Status                           |
| ------------------------------------------------------------------------ | -------------------------------- |
| {{SpecName('CSS Shapes', '#funcdef-path', 'path()')}} | {{Spec2('CSS Shapes')}} |

## See also

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes)
- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_Shapes/Overview_of_CSS_Shapes)
- [SVG Path Syntax Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
