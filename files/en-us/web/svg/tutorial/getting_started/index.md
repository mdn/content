---
title: Getting started
slug: Web/SVG/Tutorial/Getting_Started
tags:
  - Beginner
  - NeedsBeginnerUpdate
  - SVG
  - SVG:Tutorial
---
{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}

### A simple example

Let us dive straight in with a simple example. Take a look at the following code.

```xml
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>
```

Copy the code and paste it in a file demo1.svg. Then open the file in Firefox. It will render as shown in the following screenshot. (Firefox users: click [here](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml))

![](svgdemo1.png)

The rendering process involves the following:

1.  We start with the {{SVGElement("svg")}} root element:

    *   a doctype declaration as known from (X)HTML should be left off because DTD based SVG validation leads to more problems than it solves
    *   before SVG 2, to identify the version of the SVG for other types of validation the `version` and `baseProfile` attributes should always be used instead. Both `version` and `baseProfile` attributes are deprecated in SVG 2.
    *   as an XML dialect, SVG must always bind the namespaces correctly (in the xmlns attribute). See the [Namespaces Crash Course](/en-US/docs/Web/SVG/Namespaces_Crash_Course) page for more info.
2.  The background is set to red by drawing a rectangle {{SVGElement("rect")}} that covers the complete image area.
3.  A green circle {{SVGElement("circle")}} with a radius of 80px is drawn atop the center of the red rectangle (center of circle offset 150px to the right, and 100px downward from the top left corner).
4.  The text "SVG" is drawn. The interior of each letter is filled in with white. The text is positioned by setting an anchor where we want the midpoint to be: in this case, the midpoint should correspond to the center of the green circle. Fine adjustments can be made to the font size and vertical position to ensure the final result is aesthetically pleasing.

### Basic properties of SVG files

*   The first important thing to notice is the order of rendering elements. The globally valid rule for SVG files is, that *later* elements are rendered *atop previous* elements. The further down an element is the more it will be visible.
*   SVG files on the web can be displayed directly in the browser or embedded in HTML files via several methods:

    *   If the HTML is XHTML and is delivered as type `application/xhtml+xml`, the SVG can be directly embedded in the XML source.
    *   If the HTML is HTML5, and the browser is a conforming HTML5 browser, the SVG can also be directly embedded. However, there may be syntax changes necessary to conform to the HTML5 specification.
    *   The SVG file can be referenced with an `object` element:

                    <object data="image.svg" type="image/svg+xml" />
    *   Likewise an `iframe` element can be used:

                    <iframe src="image.svg"></iframe>
    *   An `img` element can theoretically be used too. However, this technique doesn't work in Firefox before 4.0.
    *   Finally, SVG can be created dynamically with JavaScript and injected into the HTML DOM. With this method, replacement technologies can be implemented for browsers which normally can't process SVG.

    See [this dedicated article](/en-US/docs/Web/SVG/Tutorial/SVG_In_HTML_Introduction) which deals with the topic in-depth.
*   How SVG handles sizes and units will be explained [on the next page](/en-US/docs/Web/SVG/Tutorial/Positions).

### SVG file types

SVG files come in two flavors. Normal SVG files are simple text files containing SVG markup. The recommended filename extension for these files is ".svg" (all lowercase).

Due to the potentially massive size SVG files can reach when used for some applications (e.g., geographical applications), the SVG specification also allows for gzip-compressed SVG files. The recommended filename extension for these files is ".svgz" (all lowercase). Unfortunately, it is very problematic to get gzip-compressed SVG files to work reliably across all SVG capable user agents when served from a Microsoft IIS server, and Firefox cannot load gzip-compressed SVG from the local computer. Avoid gzip-compressed SVG except when you are publishing to a webserver that you know will serve it correctly (see below).

### A word on Webservers

Now that you have an idea of how to create basic SVG files, the next stage is to upload them to a Webserver. There are some gotchas at this stage though. For normal SVG files, servers should send the HTTP headers:

    Content-Type: image/svg+xml
    Vary: Accept-Encoding

For gzip-compressed SVG files, servers should send the HTTP headers:

    Content-Type: image/svg+xml
    Content-Encoding: gzip
    Vary: Accept-Encoding

You can check that your server is sending the correct HTTP headers with your SVG files by using the [Network Monitor panel](/en-US/docs/Tools/Network_Monitor#headers) or a site such as [websniffer.cc](https://websniffer.cc/). Submit the URL of one of your SVG files and look at the HTTP response headers. If you find that your server is not sending the headers with the values given above, then you should contact your Web host. If you have problems convincing them to correctly configure their servers for SVG, there may be ways to do it yourself. See the [server configuration page](https://www.w3.org/services/svg-server/) on the w3.org for a range of simple solutions.

Server misconfiguration is a very common reason for SVG failing to load, so make sure you check yours. If your server is not configured to send the correct headers with the SVG files it serves, then Firefox will most likely show the markup of the files as text or encoded garbage, or even ask the viewer to choose an application to open them.

{{ PreviousNext("Web/SVG/Tutorial/Introduction", "Web/SVG/Tutorial/Positions") }}
