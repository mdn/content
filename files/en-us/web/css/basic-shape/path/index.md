---
title: path()
slug: Web/CSS/basic-shape/path
page-type: css-function
browser-compat: css.types.basic-shape.path
---

{{CSSRef}}

The **`path()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) accepts an [SVG path](/en-US/docs/Web/SVG/Element/path) string, and is used in the [CSS shapes](/en-US/docs/Web/CSS/CSS_shapes) and [CSS motion path](/en-US/docs/Web/CSS/CSS_motion_path) modules to enable a shape to be drawn. The `path()` function is a {{cssxref("&lt;basic-shape&gt;")}} data type value. It can be used in the CSS [`offset-path`](/en-US/docs/Web/CSS/offset-path) and [`clip-path`](/en-US/docs/Web/CSS/clip-path) properties and in the SVG [`d`](/en-US/docs/Web/SVG/Attribute/d) attribute.

{{EmbedInteractiveExample("pages/css/function-path.html")}}

## Syntax

When used in {{cssxref("offset-path")}} or {{SVGAttr("d")}}:

```css
path(<string>)
```

When used in {{cssxref("clip-path")}}:

```css
path( [<fill-rule>,]? <string> )
```

### Parameters

- [`<fill-rule>`](/en-US/docs/Web/SVG/Attribute/fill-rule) {{optional_inline}}

  - : Defines how the inside of the shape created by the path is to be filled. The possible values include:

    - `nonzero`: A point is considered inside the shape if a ray drawn from the point crosses more left-to-right than right-to-left path segments, resulting in a non-zero count. This is the default value when `<fill-rule>` is omitted.

    - `evenodd`: A point is considered to be inside the shape if a ray drawn from the point crosses an odd number of path segments. This means that for each time the ray enters the shape, it has not exited an equal number of times, indicating an odd count of entries without corresponding exits.

    > **Warning:** `<fill-rule>` is not supported in {{cssxref("offset-path")}} and using it invalidates the property.

- {{cssxref("string")}}
  - : A [data string](/en-US/docs/Web/SVG/Attribute/d) for defining an [SVG path](/en-US/docs/Web/SVG/Element/path). The syntax for the contents of this `<string>` is identical to SVG.

### Return value

Returns a {{cssxref("basic-shape")}} value.

## Formal syntax

{{csssyntax}}

## Examples

### Examples of correct values for path()

```css
path("M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
path(evenodd,"M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80");
```

### Use as the value of offset-path

The `path()` function is used to create a path for the item to travel round. Changing any of the values will cause the path to not neatly run round the circle.

{{EmbedGHLiveSample("css-examples/path/offset-path.html", '100%', 960)}}

### Modify the value of the SVG path d attribute

The `path()` can be used to modify the value of the SVG [`d` attribute](/en-US/docs/Web/SVG/Attribute/d), which can also be set to `none` in your CSS.

The "V" symbol will flip vertically when you hover over it, if `d` is supported as a CSS property.

#### CSS

```css
html,
body,
svg {
  height: 100%;
}

/* This path is displayed on hover*/
#svg_css_ex1:hover path {
  d: path("M20,80 L50,20 L80,80");
}
```

#### HTML

```html
<svg id="svg_css_ex1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red" d="M20,20 L50,80 L80,20" />
</svg>
```

#### Result

{{EmbedLiveSample('Modify the value of the SVG path d attribute', '100%', 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;shape-outside&gt;")}}
- [CSS Shapes](/en-US/docs/Web/CSS/CSS_shapes)
- [Overview of CSS Shapes](/en-US/docs/Web/CSS/CSS_shapes/Overview_of_shapes)
- [SVG Path Syntax Illustrated Guide](https://css-tricks.com/svg-path-syntax-illustrated-guide/)
