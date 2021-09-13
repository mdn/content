---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
tags:
  - API
  - Advanced
  - Interface
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - pip
browser-compat: api.PictureInPictureWindow
---
<div>{{APIRef("Picture-in-Picture API")}}</div>

<p>The <code><strong>PictureInPictureWindow</strong></code> interface represents an object able to programmatically obtain the <strong><code>width</code></strong> and <code><strong>height</strong></code> and <strong><code>resize event</code></strong> of the floating video window.</p>

<p>An object with this interface is obtained using the {{domxref("HTMLVideoElement.requestPictureInPicture()")}} promise return value.</p>

<h2 id="Properties">Properties</h2>

<p><em>The <code>PictureInPictureWindow</code> interface doesn't inherit any properties.</em></p>

<dl>
 <dt>{{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}</dt>
 <dd>Determines the width of the floating video window.</dd>
 <dt>{{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}</dt>
 <dd>Determines the height of the floating video window.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>The <code>PictureInPictureWindow</code> interface doesn't inherit any methods.</em></p>

<h2 id="Events">Events</h2>

<p><em>The <code>PictureInPictureWindow</code> interface doesn't inherit any events.</em></p>

<dl>
 <dt>{{domxref("PictureInPictureWindow.resize_event", "PictureInPictureWindow.resize")}}</dt>
 <dd>Sent to a {{DOMxRef("PictureInPictureWindow")}} when the floating video window is resized. The associated event handler is {{domxref("PictureInPictureWindow.onresize")}}.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Given a <code>&lt;button&gt;</code> and a <code>&lt;video&gt;</code>, clicking the button will make the video enter the picture-in-picture mode; we then attach an event to print the floating video window dimensions to the console.</p>

<pre class="brush: js">const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(`The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`);
  // will print:
  // The floating window dimensions are: 640x360px
}

button.onclick = function() {
  video.requestPictureInPicture().then(pictureInPictureWindow =&gt; {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{DOMxRef("Picture-in-Picture_API")}}</li>
</ul>
