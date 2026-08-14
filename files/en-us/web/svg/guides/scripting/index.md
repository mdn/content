---
title: Scripting
slug: Web/SVG/Guides/Scripting
page-type: guide
sidebar: svgref
---

SVG elements are part of the DOM, so the APIs you already use for HTML — {{domxref("Document.querySelector", "querySelector()")}}, {{domxref("EventTarget.addEventListener", "addEventListener()")}}, {{domxref("Element.setAttribute", "setAttribute()")}} — work on SVG too. This guide covers the parts that are specific to SVG:

- Where scripts in an SVG run, and where they don't run at all.
- Creating SVG elements from script, which needs the SVG namespace.
- The SVG-specific parts of event handling and styling.
- Scripting an SVG document that is embedded in an HTML page.
- SVG DOM interfaces that have no HTML equivalent.

## Where scripts run

How you script an SVG depends on how it got onto the page:

- **Inline SVG in an HTML document.** The SVG elements are nodes in the HTML document, so the page's own scripts can query and modify them directly. This is the simplest case and the one used throughout this guide.
- **A standalone SVG document.** An SVG file can carry its own scripts in the SVG {{SVGElement("script")}} element. Those scripts run when the file is loaded as a document — opened directly, or embedded with {{HTMLElement("object")}}, {{HTMLElement("iframe")}}, or {{HTMLElement("embed")}}.
- **SVG used as an image.** When an SVG is referenced by {{HTMLElement("img")}}, the SVG {{SVGElement("image")}} element, or a CSS property such as {{cssxref("background-image")}}, it is rendered in a secure, non-interactive mode: its scripts never run and its links can't be activated. See [SVG as an image](/en-US/docs/Web/SVG/Guides/SVG_as_an_image).

A script inside an SVG file uses the same DOM APIs as a script in an HTML page:

```xml
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle id="dot" cx="50" cy="50" r="40" fill="steelblue" />

  <script>
    document.getElementById("dot").addEventListener("click", (event) => {
      event.target.setAttribute("fill", "lightskyblue");
    });
  </script>
</svg>
```

> [!NOTE]
> A standalone SVG file is parsed as XML, so a `<` or `&` in script text ends up being parsed as markup. Escape those characters, or wrap the script in a `<![CDATA[ … ]]>` section. Inline SVG in an HTML document is handled by the HTML parser, where this doesn't apply.

## Creating SVG elements

SVG elements live in the SVG namespace, `http://www.w3.org/2000/svg`, so they must be created with {{domxref("Document.createElementNS()")}}:

```js
const svgNS = "http://www.w3.org/2000/svg";
const circle = document.createElementNS(svgNS, "circle");
circle.setAttribute("cx", 50);
circle.setAttribute("cy", 50);
circle.setAttribute("r", 40);
document.querySelector("svg").append(circle);
```

Using {{domxref("Document.createElement()")}} instead creates an unknown HTML element that happens to be named `circle`: it will be inserted into the tree but render nothing.

Attributes don't need the same treatment. Apart from a few legacy ones such as the deprecated `xlink:href`, SVG attributes are not namespaced, so plain {{domxref("Element.setAttribute()")}} is correct. {{domxref("Element.setAttributeNS()")}} with a `null` namespace does the same thing more verbosely.

## Handling events

SVG uses the same event model as HTML. Attach listeners with `addEventListener()`. Events bubble up through the SVG tree, so you can put a single listener on the root `<svg>` element and identify the shape that was clicked from {{domxref("Event.target", "event.target")}}.

Call {{domxref("Event.preventDefault()")}} to suppress a browser default that gets in the way: for example, the text selection that happens while dragging a shape, or the navigation that follows a click on a shape wrapped in an {{SVGElement("a")}} element you want to handle in script yourself.

### Keeping state with a `handleEvent` object

Instead of a function, you can pass [any object that implements a `handleEvent()` method](/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) to `addEventListener()`, which is a convenient way to store per-shape state next to the code that handles its events.

This example gives each circle its own `Highlighter` instance, which toggles the circle's {{SVGAttr("fill")}} between two colors on every click:

```html
<svg
  viewBox="0 0 220 100"
  width="220"
  height="100"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="steelblue" />
  <circle cx="160" cy="50" r="40" fill="steelblue" />
</svg>
```

The `fill` color is set as a presentation attribute rather than in CSS, because a CSS declaration would override the attribute the script sets. The style sheet only changes the pointer:

```css
circle {
  cursor: pointer;
}
```

Each instance holds its own `active` flag, and the same object is passed as the listener, so the browser calls its `handleEvent()` method when the click arrives:

```js
class Highlighter {
  constructor(element) {
    this.element = element;
    this.active = false;
    element.addEventListener("click", this);
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.active = !this.active;
      this.element.setAttribute(
        "fill",
        this.active ? "lightskyblue" : "steelblue",
      );
    }
  }
}

for (const circle of document.querySelectorAll("circle")) {
  new Highlighter(circle);
}
```

Click either circle to toggle its color. The two circles keep their states independently:

{{EmbedLiveSample("Keeping_state_with_a_handleEvent_object", "100%", 130)}}

## Converting pointer coordinates to user units

Pointer events report coordinates in CSS pixels relative to the viewport, but the shapes are positioned in the user coordinate system set up by {{SVGAttr("viewBox")}}. To go from one to the other, build a {{domxref("DOMPoint")}} from the event coordinates and transform it by the inverse of the element's screen coordinate matrix, returned by {{domxref("SVGGraphicsElement.getScreenCTM()")}}:

```js
function toUserSpace(svg, event) {
  const point = new DOMPoint(event.clientX, event.clientY);
  return point.matrixTransform(svg.getScreenCTM().inverse());
}
```

{{domxref("DOMMatrixReadOnly.inverse()")}} produces the matrix that undoes the element's screen transform, and {{domxref("DOMPointReadOnly.matrixTransform()")}} applies it, returning a point whose `x` and `y` are in user units.

## Adding and removing elements

This example puts the pieces together: one listener on the root `<svg>` element adds a circle where you click, or removes the circle you clicked on.

The markup is an empty canvas with a background rectangle, which gives the clicks something to land on:

```html
<svg
  id="canvas"
  viewBox="0 0 300 150"
  width="300"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="150" fill="whitesmoke" />
</svg>
```

```css
circle {
  cursor: pointer;
}
```

The click listener first checks what was clicked: a circle is removed, and a click anywhere else creates a new circle, in the SVG namespace, at the pointer position converted to user units:

```js
const svgNS = "http://www.w3.org/2000/svg";
const canvas = document.getElementById("canvas");

function toUserSpace(svg, event) {
  const point = new DOMPoint(event.clientX, event.clientY);
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

canvas.addEventListener("click", (event) => {
  if (event.target.localName === "circle") {
    event.target.remove();
    return;
  }

  const { x, y } = toUserSpace(canvas, event);
  const circle = document.createElementNS(svgNS, "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 12);
  circle.setAttribute("fill", "steelblue");
  canvas.append(circle);
});
```

Because the click listener is on the root `<svg>` element, it sees clicks on every shape inside it, and `event.target` says which one. The comparison uses {{domxref("Element.localName", "localName")}}, which is the element's name without any namespace prefix, so it also matches in a standalone SVG file that writes its elements as `<svg:circle>`.

Click the canvas to add a circle, or click a circle to remove it:

{{EmbedLiveSample("Adding_and_removing_elements", "100%", 200)}}

## Styling from script

Anything that can be set as a presentation attribute can also be set as a style, and the CSSOM works the same way as it does for HTML:

```js
circle.style.fillOpacity = 0.5;
circle.style.setProperty("fill-opacity", "0.5");
circle.classList.add("selected");
```

The first two lines are equivalent: {{domxref("CSSStyleDeclaration.setProperty()")}} takes the hyphenated property name and its value, plus an optional third parameter for the `!important` priority, which you can leave out. The third line adds a class with {{domxref("Element.classList", "classList")}}, which lets a rule in your style sheet do the styling instead.

> [!NOTE]
> Presentation attributes are treated as author-origin declarations with a specificity of zero, inserted at the start of the author style sheet. Any rule in a style sheet therefore overrides them, so a `fill` declaration in CSS beats a `fill` attribute in the markup, and setting `element.style` beats both.

## Scripting an embedded SVG document

An SVG embedded with `<object>`, `<iframe>`, or `<embed>` is a separate document with its own DOM:

```html
<iframe id="chart" src="chart.svg" width="300" height="150"></iframe>
```

To script that document from the containing page, get its {{domxref("Document")}} — either from `contentDocument` ({{domxref("HTMLIFrameElement.contentDocument")}} or {{domxref("HTMLObjectElement.contentDocument")}}) or by calling {{domxref("HTMLIFrameElement.getSVGDocument", "getSVGDocument()")}}, which all three elements provide and which returns `null` if the element isn't displaying an SVG document. Wait for the frame's `load` event, or the document won't be there yet:

```js
const frame = document.getElementById("chart");

frame.addEventListener("load", () => {
  const svgDocument = frame.contentDocument;
  const bar = svgDocument.getElementById("bar-1");
  bar.setAttribute("fill", "steelblue");
});
```

This only works if the SVG file is [same-origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy) with the containing page; otherwise `contentDocument` is `null`.

Going the other way, a script inside the embedded SVG can reach the containing page through {{domxref("Window.parent", "window.parent")}} (or {{domxref("Window.top", "window.top")}} for the outermost document), again subject to the same-origin restriction. {{domxref("Window.postMessage()")}} is the more robust choice, and the only option across origins.

> [!NOTE]
> You may find documentation referring to an `SVGDocument` interface. Prior to SVG 2, SVG documents were represented using that interface. However, SVG documents are now represented using the {{domxref("XMLDocument")}} interface instead.

## Geometry and animated values in the SVG DOM

Some SVG interfaces expose geometry and animation values that have no HTML equivalent:

- {{domxref("SVGGraphicsElement.getBBox()")}} returns the tight bounding box of an element in user units, ignoring strokes, filters, and any transforms applied to the element — unlike {{domxref("Element.getBoundingClientRect()")}}, which reports rendered CSS pixels and does account for transforms.
- {{domxref("SVGGeometryElement.getTotalLength()")}} and {{domxref("SVGGeometryElement.getPointAtLength()")}} measure a path and find a point at a given distance along it, which is how line-drawing animations are built.
- Geometric attributes are also reflected as animated values, so `circle.r.baseVal.value` reads the radius as a number from an {{domxref("SVGAnimatedLength")}} object, while `circle.getAttribute("r")` returns the attribute string.

## See also

- {{SVGElement("script")}}
- {{domxref("SVGElement")}}
- [SVG animation with SMIL](/en-US/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- [SVG as an image](/en-US/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG in HTML introduction](/en-US/docs/Web/SVG/Guides/SVG_in_HTML)
- [Introduction to events](/en-US/docs/Learn_web_development/Core/Scripting/Events)
