---
title: <box>
slug: Web/CSS/box_value
page-type: css-type
---

{{CSSRef}}

The **`<box>`** value type describes different aspects of an element's box model and represents how elements are rendered and positioned on a web page. The value type can applied to properties such as {{cssxref("transform-box")}} and {{cssxref("background-clip")}}. The value type is a keyword that represents a [box edge](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model).

## Syntax

```css
<box> = <visual-box> = content-box | padding-box | border-box
<layout-box> = <box> | margin-box
<paint-box> = <box> | fill-box | stroke-box
<coord-box> = <box> | fill-box | stroke-box | view-box
```

### Values

A `<box>` can be of the type `<visual-box>`, `<layout-box>`, `<paint-box>`, or `<coord-box>`.

- `<visual-box>`

  - : Refers to the rectangular box generated for an element as seen by a user on a web page. It includes the element's padding and border. It excludes the margin area.

- `<layout-box>`

  - : Refers to the space occupied by an element, including its content, padding, border, and margin. This value type is used for layout and positioning purposes.

- `<paint-box>`

  - : Refers to the area within the layout box that is used to render the content visually. This includes the area where the element's background and borders are painted. It excludes the margin area.

- `<coord-box>`
  - : Refers to the coordinate box used for positioning and sizing an element within its parent container. It is used to control how content flows around the edges of the box. It excludes the margin area.

### Keywords

The different `<box>` value types can be specified as one of the keyword values listed below:

- `content-box`

  - : Refers to the edge of the content area of the box. In SVG, this value is treated as `fill-box`. It is the innermost box and contains the actual content, such as text, images, or other HTML elements.

- `padding-box`

  - : Refers to the edge of the padding of the box. If there is no padding on a side, then the value is the same as `content-box`. In SVG, `padding-box` is treated as `fill-box`. The padding area surrounds the content area.

- `border-box`

  - : Refers to the edge of the border of the box. If there is no border on a side, then the value is the same as `padding-box`. In SVG, `border-box` is treated as `stroke-box`. The border area surrounds the padding area.

- `margin-box`

  - : Refers to the edge of the margin of the box. If there is no margin on a side, then the value is the same as `border-box`. In SVG, `margin-box` is treated as `stroke-box`.

- `fill-box`

  - : Refers to the object bounding box in SVG. In CSS, `fill-box` is treated as `content-box`. It is used to wrap the content around the edges defined by the `coord-box` values.

- `stroke-box`

  - : Refers to the stroke bounding box in SVG. In CSS, `stroke-box` is treated as `border-box`. It is used to define the shape of the element when strokes are applied.

- `view-box`

  - : Refers to the nearest SVG viewport element's origin box. The origin box is a rectangle with the width and height of the initial SVG user coordinate system established by the {{svgattr("viewBox")}} attribute for that element. The origin box is positioned such that its top left corner is anchored at the coordinate system origin. In CSS, `view-box` treated as `border-box`.
    > **Note:** When the SVG viewport is not anchored at the origin, the origin box does not correspond to the SVG viewport.

## See also

- Properties that use `<visual-box>` data type: {{cssxref("background-clip")}}
- Properties that use `<layout-box>` data type: {{cssxref("clip-path")}}
- Properties that use `<paint-box>` data type: {{cssxref("mask-origin")}}
- Properties that use `<coord-box>` data type: {{cssxref("clip-path")}}, {{cssxref("mask-clip")}}, {{cssxref("offset-path")}}
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
