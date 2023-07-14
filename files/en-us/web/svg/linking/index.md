---
title: Linking
slug: Web/SVG/Linking
page-type: guide
---

{{SVGRef}}

The {{SVGAttr("target")}} attribute on the SVG {{SVGElement("a")}} element doesn't work in Mozilla Firefox 1.5. When SVG documents are embedded within a parent HTML document using the tag:

page1.html:

```html
<html lang="en">
  <body>
    <p>This is a SVG button:</p>
    <object width="100" height="50" type="image/svg+xml" data="button.svg" />
  </body>
</html>
```

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <a xlink:href="page2.html" target="_top">
    <g>
      <!-- button graphical elements here -->
    </g>
  </a>
</svg>
```

The specification says that the browser should navigate to the HTML document page2.html when the button graphics are clicked. However, `target` does not work with Mozilla's implementation of the SVG `<a>` element in Firefox 1.5. (The problem will be fixed in Firefox 2.0.)

Anyway, the resultant behavior in Moz SVG is that page2.html will be loaded into the frame where the SVG button was (i.e. you would now have page2.html embedded inside a 100x50 pixel frame inside page1.html).

To get around this, requires a little ugly JavaScript hacking:

button.svg:

```xml
<?xml version="1.1" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg">
  <g onclick="top.document.href='page2.html'" cursor="pointer">
    <!-- button graphical elements here -->
  </g>
</svg>
```

## Example

For an example of this solution at work see [www.codedread.com](https://www.codedread.com/).
