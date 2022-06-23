---
title: Tools for SVG
slug: Web/SVG/Tutorial/Tools_for_SVG
tags:
  - Intermediate
  - NeedsUpdate
  - SVG
  - Tools
---
{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}

Now that we covered the basics of the SVG internals, we will take a look at some tools to work with SVG files.

### Browser support

As of Internet Explorer 9, all major browsers support SVG: IE 9, Mozilla Firefox, Safari, Google Chrome and Opera. Mobile devices with Webkit-based browsers also support SVG. On older or smaller devices, chances are that SVG Tiny is supported.

## Inkscape

URL: [www.inkscape.org](https://inkscape.org/)

One of the most important tools for a graphics format is a decent drawing program. Inkscape offers state-of-the-art vector drawing, and it's open source.

Moreover, it uses SVG as its native file format. To store Inkscape specific data, it extends the SVG file with elements and attributes in a custom namespace, but you can also choose to export as plain SVG.

## Adobe Illustrator

URL: [www.adobe.com/products/illustrator/](https://www.adobe.com/products/illustrator.html)

Before Adobe acquired Macromedia, it was the most prominent promoter of SVG. From this time stems the good support of SVG in Illustrator. However, the resulting SVG often shows some quirks, that make it necessary to post-process it for general applicability.

## Apache Batik

URL: [xmlgraphics.apache.org/batik/](https://xmlgraphics.apache.org/batik/)

Batik is a set of open source tools under the roof of the Apache Software Foundation. The toolkit is written in Java and offers almost complete SVG 1.1 support, as well as some features that were originally planned for SVG 1.2.

Batik offers a viewer (Squiggle), a rasterizer for PNG output, an SVG pretty printer to format SVG files, and a TrueType-to-SVG-Font converter.

Together with [Apache FOP](https://xmlgraphics.apache.org/fop/) Batik can transform SVG to PDF.

### Other renderers

Several projects exist that can create a raster image from an SVG source. [ImageMagick](https://imagemagick.org/) is one of the most famous command-line image processing tools. The Gnome library [rsvg](https://wiki.gnome.org/Projects/LibRsvg) is used by the Wikipedia to raster their SVG graphics. Usage of headless browsers such as SlimerJS and PhantomJS are also popular for this purpose, as the image produced is closer to what the SVG will look like in the browser.

## Raphael JS

URL: [raphaeljs.com](https://raphaeljs.com/)

This is a JavaScript library, that acts as an abstraction layer between browser implementations. Notably older versions of Internet Explorer are supported by generating VML, a vector markup language, that is one of two ancestors of SVG and exists since IE 5.5.

## Snap.svg

URL: [snapsvg.io](http://snapsvg.io/)

A newer JavaScript abstraction layer from the same author of Raphael JS. Snap.svg is designed for modern browsers and therefore supports the newest SVG features like masking, clipping, patterns, full gradients, groups. It does not support the older browsers that Raphael does.

## Google Docs

URL: [www.google.com/google-d-s/drawings/](https://docs.google.com/drawings)

Drawings from Google Docs can be exported as SVG.

## Science

The well-known plotting tools xfig and gnuplot both support exporting as SVG. To render graphs on the web [JSXGraph](https://jsxgraph.uni-bayreuth.de/wp/) supports VML, SVG and canvas, automatically deciding which technology to use based on browser capabilities.

In GIS (Geographic Information System) applications SVG is often used as both storage and rendering format. See [carto.net](https://carto.net/) for details.

## More tools!

The W3C offers a [list of programs](https://www.w3.org/Graphics/SVG/WG/wiki/Implementations) that support SVG.

{{ PreviousNext("Web/SVG/Tutorial/SVG_Image_Tag", "Web/SVG/Tutorial/SVG_and_CSS") }}
