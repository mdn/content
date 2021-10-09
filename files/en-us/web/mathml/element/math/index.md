---
title: <math>
slug: Web/MathML/Element/math
tags:
  - MathML
  - MathML Reference
  - MathML:Element
browser-compat: mathml.elements.math
---
{{MathMLRef}}

The top-level element in MathML is `<math>`. Every valid MathML instance must be wrapped in `<math>` tags. In addition you must not nest a second `<math>` element in another, but you can have an arbitrary number of other child elements in it.

## Attributes

In addition to the following attributes, the `<math>` element accepts any attributes of the {{ MathMLElement("mstyle") }} element.

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- dir
  - : Overall directionality of formulas. Possible values are either `ltr` (left to right) or `rtl` (right to left).
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- display

  - : This enumerated attribute specifies how the enclosed MathML markup should be rendered. It can have one of the following values:

    - `block`, which means that this element will be displayed outside the current span of text, as a block that can be positioned anywhere without changing the meaning of the text;
    - `inline`, which means that this element will be displayed inside the current span of text, and cannot be moved out of it without changing the meaning of that text.

    If not present, its default value is `inline`.

- mode {{deprecated_inline}}
  - : Deprecated in favor of the [display attribute](#attr-display).
    Possible values are: `display` (which has the same effect as `display="block"`) and `inline`.

## Examples

![Theorem of Pythagoras](math.jpg)

### HTML5 notation

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML in HTML5</title>
  </head>
  <body>

  <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

  </body>
</html>
```

### XHTML notation

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML in XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**Notes**: XHTML documents with MathML must be served as `application/xhtml+xml`. You can achieve that easily by adding the `.xhtml` extension to your local files. For Apache servers you can [configure your `.htaccess` file](https://httpd.apache.org/docs/2.4/mod/mod_mime.html#addtype) to map extensions to the correct Mime type. Since you notate your MathML in an XML document, also be sure you write a well-formed XML document.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Firefox-specific notes

Firefox 7 introduced support for accepting all MathML attributes on the top-level math element (i.e. the same behavior as a {{ MathMLElement("mstyle") }} element). However, the `displaystyle` attribute was not taken into account and [has been added](https://bugzilla.mozilla.org/show_bug.cgi?id=669719) in Firefox 8.

A textual fall-back (`alttext`) or referring to an alternative image using the attributes `altimg`, `altimg-width`, `altimg-height` or `altimg-valign` is currently not implemented in Firefox.

## See also

- HTML top-level element: {{ HTMLElement("html") }}
- SVG top-level element: {{ SVGElement("svg") }}
- [MathML browser test](http://eyeasme.com/Joe/MathML/MathML_browser_test.html)
