---
title: box-flex
slug: Web/CSS/box-flex
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - box-flex
  - recipe:css-property
  - Deprecated
browser-compat: css.properties.box-flex
---
{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

> **Warning:** This is a property for controlling parts of the XUL box model. It does not match either the old CSS Flexible Box Layout Module drafts for '`box-flex`' (which were based on this property) or the behavior of '`-webkit-box-flex`' (which is based on those drafts). See [flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) for information about the current standard.

The **`-moz-box-flex`** and **`-webkit-box-flex`** [CSS](/en-US/docs/Web/CSS) properties specify how a `-moz-box` or `-webkit-box` grows to fill the box that contains it, in the direction of the containing box's layout.

```css
/* <number> values */
-moz-box-flex: 0;
-moz-box-flex: 2;
-moz-box-flex: 3.5;
-webkit-box-flex: 0;
-webkit-box-flex: 2;
-webkit-box-flex: 3.5;

/* Global values */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: revert;
-moz-box-flex: revert-layer;
-moz-box-flex: unset;
-webkit-box-flex: inherit;
-webkit-box-flex: initial;
-webkit-box-flex: revert;
-webkit-box-flex: revert-layer;
-webkit-box-flex: unset;
```

## Syntax

The `box-flex` property is specified as a {{CSSxRef("&lt;number&gt;")}}. If the value is 0, the box does not grow. If it is greater than 0, the box grows to fill a proportion of the available space.

## Notes

The containing box allocates the available extra space in proportion to the flex value of each of the content elements.

Content elements that have zero flex do not grow.

If only one content element has nonzero flex, then it grows to fill the available space.

Content elements that have the same flex grow by the same absolute amounts.

If the flex value is set using the element's `flex` attribute, then the style is ignored.

To make XUL elements in a containing box the same size, set the containing box's `equalsize` attribute to the value `always`. This attribute does not have a corresponding CSS property.

A trick to make all content elements in a containing box the same size, is to give them all a fixed size (e.g. `height: 0`), and the same `box-flex` value greater than zero (e.g. `-moz-box-flex: 1`).

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
box-flex =
  <number>
```

## Examples

### Setting box-flex

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8">
    <title>-moz-box-flex example</title>
    <style>
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example > p:nth-child(1) {
        -moz-box-flex: 1;       /* Mozilla */
        -webkit-box-flex: 1;    /* WebKit */
        border: 1px solid black;
      }
      div.example > p:nth-child(2) {
        -moz-box-flex: 0;       /* Mozilla */
        -webkit-box-flex: 0;    /* WebKit */
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>I will expand to fill extra space</p>
      <p>I will not expand</p>
    </div>
  </body>
</html>
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("flex")}}
