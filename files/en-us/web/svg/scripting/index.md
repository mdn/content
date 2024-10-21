---
title: Scripting
slug: Web/SVG/Scripting
page-type: guide
---

{{SVGRef}}

One can override default browser behaviors with the `evt.preventDefault()` method, add event listeners to objects with the syntax `element.addEventListener(event, function, useCapture)`, and set element properties with syntax like `svgElement.style.setProperty("fill-opacity", "0.0", "")`. Note the existence of all three arguments setting properties.

### Preventing default behavior in event code

When writing drag and drop code, sometimes you'll find that text on the page gets accidentally selected while dragging. Or if you want to use the backspace key in your code, you want to override the browser's default behavior when the backspace key is pressed, which is to go back to the previous page. The `evt.preventDefault()` method lets you do this.

### Using `eventListeners` with objects

The methods `addEventListener()` and `removeEventListener()` are very useful when writing interactive SVG. You can pass an object that implements the `handleEvent` interface as the second parameter to these methods.

```js
function myRect(x, y, w, h, message) {
  this.message = message;

  this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.rect.setAttributeNS(null, "x", x);
  this.rect.setAttributeNS(null, "y", y);
  this.rect.setAttributeNS(null, "width", w);
  this.rect.setAttributeNS(null, "height", h);
  document.documentElement.appendChild(this.rect);

  this.rect.addEventListener("click", this, false);

  this.handleEvent = (evt) => {
    switch (evt.type) {
      case "click":
        alert(this.message);
        break;
    }
  };
}
```

### Inter-document scripting: referencing embedded SVG

When using SVG within HTML, Adobe's SVG Viewer 3.0 automatically includes a window property called `svgDocument` that points to the SVG document. This is not the case for Mozilla's native SVG implementation; therefore, using `window.svgDocument` does not work in Mozilla. Instead, you can use

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

to get a reference to an embedded SVG document instead.

The best way to get access to the {{domxref("Document")}} representing an SVG document is to look at {{domxref("HTMLIFrameElement.contentDocument")}} (if the document is presented in an {{HTMLElement("iframe")}}) or {{domxref("HTMLObjectElement.contentDocument")}} (if the document is presented in an {{HTMLElement("object")}} element), like this:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

In addition, the {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, and {{HTMLElement("object")}} elements offer a method, `getSVGDocument()`, which returns the {{domxref("XMLDocument")}} representing the element's embedded SVG or `null` if the element doesn't represent an SVG document.

You can also use `document.getElementById("svg_elem_name").getSVGDocument()`, which gives the same result.

> [!NOTE]
> You may find documentation referring to an `SVGDocument` interface. Prior to SVG 2, SVG documents were represented using that interface. However, SVG documents are now represented using the {{domxref("XMLDocument")}} interface instead.

### Inter-document scripting: calling JavaScript functions

When calling a JavaScript function that resides in the HTML file from an SVG file that is embedded in an HTML document, you should use `parent.functionName()` to reference the function. Although the Adobe SVG viewer plugin allows the use of `functionName()`, it's not the preferred way to do things.

> [!NOTE]
> According to the [SVG wiki](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication) the `"parent"` JS variable is broken in Adobe's SVG version 6 preview plugin. The suggested workaround is to use `"top"` instead of `"parent"`. Since it is a beta version of their plugin, we can probably safely ignore this.

More information and some examples can be found on the [SVG wiki inter-document scripting page](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

### `setProperty` has three parameters

The function `svgElement.style.setProperty("fill-opacity", "0.0")` throws a DOMException - `SYNTAX ERR` in Mozilla. This behavior is specified by the W3C in the DOM Level 2 Style Specification. The function `setProperty` is defined as a function with three parameters. The above can be replaced with `'svgElement.style.setProperty("fill-opacity", "0.0", "")'`, which is standards compliant.

### Links

[SVG wiki on Scripting and Programming](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
