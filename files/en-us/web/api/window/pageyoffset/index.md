---
title: Window.pageYOffset
slug: Web/API/Window/pageYOffset
page-type: web-api-instance-property
tags:
  - API
  - Alias
  - CSSOM View
  - CSSOM View API
  - Property
  - Scrolling Documents
  - Scrolling Windows
  - Vertical
  - Window
  - scrolling
browser-compat: api.Window.pageYOffset
---
{{ APIRef("CSSOM View") }}

The read-only {{domxref("Window")}} property **`pageYOffset`**
is an alias for {{domxref("Window.scrollY", "scrollY")}}; as such, it returns the number
of pixels the document is currently scrolled along the vertical axis (that is, up or
down) with a value of 0.0, indicating that the top edge of the {{domxref("Document")}}
is currently aligned with the top edge of the window's content area.

There is slightly better support for `pageYOffset` than for
`scrollY` in older browsers, but if you're not concerned about browsers more
than a handful of years old, you can use either one.

The corresponding {{domxref("Window.pageXOffset", "pageXOffset")}} property, which
returns the number of pixels scrolled along the horizontal axis (left and right), is an
alias for {{domxref("Window.scrollX", "scrollX")}}.

## Value

A double-precision floating-point number specifying the number of pixels the {{domxref("Document")}}
is scrolled vertically within its containing {{domxref("Window")}}. This number is subpixel precise
with a range of E(min)=-1022 to E(max)=1023, so it may not be an integer. A value of 0.0 indicates
that the window is not scrolled vertically, and that the top of the document is located at the top
edge of the window's content area.

Since this property is an alias for {{domxref("Window.scrollY")}}, see that article for
additional details on this value and its use.

## Examples

```js hidden
const contentHTML = `
    <h2 id="introduction">Introduction</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aenean volutpat vitae felis non dictum. Ut auctor
eros tortor, vel elementum arcu rhoncus nec. Donec non
laoreet massa. Donec pretium nisi et condimentum convallis.
Nullam dictum molestie finibus. Nullam vitae lorem non
augue mattis cursus.</p>
  <p>Maecenas nec tortor tincidunt, sollicitudin mi eget,
fermentum turpis. Vestibulum ac ante et libero efficitur
faucibus id eget ex. Pellentesque tempor pharetra
tincidunt. Suspendisse potenti. Nulla vulputate nunc sit
amet hendrerit faucibus. Nullam metus dui, venenatis
lacinia nunc nec, vestibulum viverra nunc. Quisque interdum
quam tortor, sit amet varius neque consectetur at. Quisque
vel turpis justo.</p>
  <h2 id="overview">Overview</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Etiam dui dolor, pulvinar sed diam id, eleifend
dapibus odio. Duis vitae ante nibh. Integer bibendum
imperdiet suscipit. Fusce ligula leo, consectetur ac ante
eget, gravida laoreet purus. Cras sodales efficitur risus,
sed feugiat sem. Pellentesque justo augue, placerat non leo
sit amet, laoreet fringilla arcu.</p>
  <p>Class aptent taciti sociosqu ad litora torquent per
conubia nostra, per inceptos himenaeos. Proin in gravida
libero. Vivamus placerat, lacus eget condimentum sagittis,
enim nunc bibendum nisi, quis varius erat felis sit amet
risus.</p>
<p>Sed non finibus ligula. Fusce a magna auctor, molestie
nibh eget, sodales felis. Donec imperdiet facilisis mi ut
aliquam. Etiam sodales suscipit urna, eget hendrerit neque
elementum a. Vivamus fringilla sodales est ut ultricies.
Nulla convallis congue maximus. Nullam consectetur felis
vitae ultricies accumsan. Mauris at aliquam felis. Mauris
efficitur tellus massa, id ullamcorper ipsum fermentum eu.
Aenean mollis dignissim ultrices. Nunc gravida, sem sit
amet lobortis iaculis, dolor ligula convallis nibh, id
condimentum metus libero nec odio. Quisque nec ante
pretium, viverra neque nec, facilisis risus. Duis
condimentum sapien non felis cursus blandit. Integer
euismod lectus a ipsum pellentesque lacinia.</p>
`;

document.getElementById("frame").contentDocument
        .body.innerHTML = contentHTML;
```

In this example, an {{HTMLElement("iframe")}} is created and filled with content, then
a specific element within the document is scrolled into view in the frame. Once that's
done, the vertical scroll position is checked by looking at the value of
`pageYOffset` in the frame's {{domxref("HTMLIFrameElement.contentWindow",
  "contentWindow")}}.

### HTML

The HTML is extremely simple and has just two elements: an {{HTMLElement("iframe")}}
that contains the document we're going to scroll, and a {{HTMLElement("div")}} into
which we'll output the value of `pageYOffset` when we've finished the scroll.

```html
<iframe id="frame">
</iframe>

<div id="info">
</div>
```

### JavaScript

```js
const frame = document.getElementById("frame");
const frameDoc = frame.contentDocument;
const info = document.getElementById("info");

const target = frameDoc.getElementById("overview");
frameDoc.scrollingElement.scrollTop = target.offsetTop;

info.innerText = `Y offset after scrolling: ${frame.contentWindow.pageYOffset} pixels`;
```

The JavaScript code begins by getting into `frame` and `info` the
`<iframe>` element that contains our content as well as the
`<div>` element into which we'll output the result of our scroll
position check. It then gets a reference to the element we want to scroll into view
calling {{domxref("Document.getElementById", "getElementById()")}} on the frame's
{{domxref("HTMLIFrameElement.contentDocument")}}.

With the target element in hand, we set the {{domxref("Element.scrollTop",
  "scrollTop")}} of the frame's {{domxref("Document.scrollingElement",
  "scrollingElement")}} to the {{domxref("Element.offsetTop", "offsetTop")}} of the target
element. By doing so, we set the vertical scrolling position of the frame's document so
that it's the same as the top edge of the target element.

This will automatically set the scrolling position to the maximum possible value if the
attempted scroll would exceed the maximum. This prevents us from falling off the edge of
the document. Nobody wants to know what's out there. There might be dragons.

```css hidden
iframe {
  width: 620px;
  height: 450px;
  border: 1px solid black;
}

#info {
  margin-top: 20px;
  font: 16px "Open Sans", "Helvetica", "Arial";
}
```

### Result

The result follows. Note that the frame's contents have been scrolled to show the
section named "Overview", and that the value of the `pageYOffset` property is
shown with the corresponding value.

{{EmbedLiveSample("Examples", 650, 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.pageXOffset", "pageXOffset")}}
- {{domxref("Window.scrollY", "scrollY")}} and {{domxref("Window.scrollX",
    "scrollX")}}
- {{domxref("Window.scroll", "scroll()")}}, {{domxref("Window.scrollBy",
    "scrollBy()")}}, and {{domxref("window.scrollTo", "scrollTo()")}}
