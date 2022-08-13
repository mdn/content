---
title: SVG In HTML Introduction
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
tags:
  - Beginner
  - SVG
---
## Overview

This article and its associated example shows how to use inline [SVG](/en-US/docs/Web/SVG).

## Basic example

To include an inline SVG in an HTML file, paste the entire SVG file into the HTML file.

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <title>SVG Demo</title>
  <meta name="viewport" content="width=device-width">
</head>
<body>
  <svg
    viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" role="img">
    <title>A gradient</title>
    <linearGradient id="gradient">
      <stop class="begin" offset="0%"/>
      <stop class="end" offset="100%"/>
    </linearGradient>
    <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
    <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
  </svg>
</body>
</html>
```

## Discussion

The page is regular HTML and CSS with a single SVG. The only interesting part is the `<svg>` element it contains. This element and its children are declared to be in the SVG namespace. The element contains a gradient and two shapes filled with the gradient. The gradient color stops have their colors set by CSS.

There are three attributes and one nested element worth noting:

1. The [`viewBox`](/en-US/docs/Web/SVG/Attribute/viewBox) attribute establishes a logical coordinate system which the SVG picture's coordinates are relative to. In this case our picture is laid out in a 100 by 100 viewport.

2. The [`preserveAspectRatio`](/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute specifies that the aspect ratio must be preserved by centering the picture in the available size, sizing to the maximum of the height or width and then cutting off any overflow.

3. Including [`role="img"`](/en-US/docs/Web/accessibility/aria/role/img) ensures assistive technologies handle the SVG as an image.

4. A [`<title>`](/en-US/docs/Web/SVG/Element/title) within an SVG provides the accessible, short-text description of the graphic. The title text is not rendered, but browsers may display it as a tooltip when the SVG is hovered. The `<title>` should be the first element after the `<svg>` opening tag.

## Best practices

When an SVG is included via with {{HTMLElement('img')}}, the `alt` attribute provides alternative text making the image accessible. Inline SVG does not support the `alt` attribute. But it does support several other ways of making it accessible. With inline SVGs, the source is available in the DOM, meaning all the markup within an inline SVG file is accessible to the Accessibility Object Model, or AOM. Including the `<title>` element provides that alternative text.

If the image conveys more than a short title, include a longer description with the [`<desc>`](/en-US/docs/Web/SVG/Element/desc) element. The `<desc>` element provides an accessible, long-text description. Similar to `<title>` text, the text within the `<desc>` is not rendered to the screen.

If the SVG can be labeled by visible text, reference that text with an [`aria-labelledby`](/en-US/docs/Web/accessibility/aria/attributes/aria-labelledby) attribute. Alternatively, include the `aria-labelledby` attribute with the [`id`](/en-US/docs/Web/SVG/Attribute/id) of the `<title>`.

```html
<svg viewBox="0 0 100 125" role="img" aria-labelledby="svgTitle svgDescription">
   <title id="svgTitle">Manual</title>
   <desc id="svgDescription">A non-descript twelve page booklet opened to the middle page</desc>
   <defs>
     <style>
     rect {
       fill:#cccccc; 
       stroke: #666; 
       transform-origin: top;
     }
     </style>
   </defs>

   <rect width="36" height="60" x="13" y="18" ry="2" style="transform: skewy(24deg)"/>
   <rect width="39" height="60" x="11" y="20" ry="2" style="transform: skewy(18deg)"/>
   <rect width="42" height="90" x="8"  y="22" ry="2" style="transform: skewy(12deg)"/>
   <rect width="36" height="60" x="50" y="18" ry="2" style="transform: skewy(-24deg)"/>
   <rect width="39" height="60" x="50" y="20" ry="2"  style="transform: skewy(-18deg)" />
   <rect width="42" height="90" x="50" y="22" ry="2" style="transform: skewy(-12deg)" />
</svg>
```

If the SVG can be described by visible text, that text can be referenced with the [`aria-describedby`](/en-US/docs/Web/accessibility/aria/attributes/aria-describedby) attribute. If aria-describedby is used, it will take precedence over `<desc>`.

In our example, we've included both the description and title in our `aria-labelledby` attribute, as it has better assistive technology support than `aria-describedby`.

## See also

- [Getting started with SVG](/en-US/docs/Web/SVG/Tutorial/Getting_Started)
