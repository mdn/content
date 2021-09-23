---
title: SVG In HTML Introduction
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
tags:
  - Intermediate
  - NeedsUpdate
  - SVG
---
## Overview

This article and its associated example shows how to use inline [SVG](/en-US/docs/Web/SVG) to provide a background picture for a form. It shows how [JavaScript](/en-US/docs/Web/JavaScript) and [CSS](/en-US/docs/Web/CSS) can be used to manipulate the picture in the same way you would script regular HTML.

## Source

Here is the source to [the example](/presentations/xtech2005/svg-canvas/SVGDemo.xml):

```html
<html>
<head>
<title>XTech SVG Demo</title>
<style>
  stop.begin { stop-color:yellow; }
  stop.end { stop-color:green; }
  body.invalid stop.end { stop-color:red; }
  #err { display:none; }
  body.invalid #err { display:inline; }
</style>
<script>
  function signalError() {
    document.getElementById('body').setAttribute("class", "invalid");
  }
</script>
</head>
<body id="body"
  style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
<form>
  <fieldset>
    <legend>HTML Form</legend>
    <p><label>Enter something:</label>
    <input type="text">
    <span id="err">Incorrect value!</span></p>
    <p><input type="button" value="Activate!" onclick="signalError();"></p>
  </fieldset>
</form>

<svg
  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
  style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
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

The page is mainly regular HTML, CSS and JavaScript. The only interesting part is the \<svg> element it contains. This element and its children are declared to be in the SVG namespace. The element contains a gradient and two shapes filled with the gradient. The gradient color stops have their colors set by CSS. When the user enters something incorrect into the form, the script sets the `invalid` attribute on the \<body>, and a style rule changes the gradient `end-stop` color to red. (Another style rule makes an error message appear.)

This approach has the following points in its favor:

*   We have taken a regular HTML form that could have been part of an existing Web site, and added an attractive, interactive background
*   The approach is backwards compatible to browsers that do not support SVG;, no background appears in them
*   It's very simple and performs very well
*   The picture dynamically sizes itself to the required size in an intelligent way
*   We can have declarative style rules applying to both HTML and SVG
*   The same script manipulates both HTML and SVG
*   The document is entirely standards-based

> **Note:** To add a linked image with DOM methods to an embedded SVG element, one has to use `setAttributeNS` to set `href`. Like in the following example:
>
> ```js
>  var img = document.createElementNS("http://www.w3.org/2000/svg", "image");
> img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "move.png");
> ```

## Details

The `viewBox` attribute establishes a logical coordinate system which the SVG picture's coordinates are relative to. In this case our picture is laid out in a 100 by 100 viewport.

The `preserveAspectRatio` attribute specifies that the aspect ratio must be preserved by centering the picture in the available size, sizing to the maximum of the height or width and then cutting off any overflow.

The `style` attribute pins the SVG element to the background of the form.

## Related Links

*   Another SVG in HTML example: [A swarm of motes](/en-US/docs/Web/SVG/Namespaces_Crash_Course/Example)
*   [Working example](http://jwatt.org/svg/demos/xhtml-with-inline-svg.xhtml) that works in both Mozilla and in Internet Explorer with Adobe's SVG Viewer installed. (For inline SVG to work in both Firefox and Internet Explorer it is necessary to serve documents with a different Content-Type to each browser. For this reason, if you're behind a proxy server that caches the page, the example wont work in the second browser you load it in because it will receive the wrong Content-Type.)
