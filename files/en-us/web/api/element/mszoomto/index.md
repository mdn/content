---
title: Element.msZoomTo()
slug: Web/API/Element/msZoomTo
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Microsoft
  - Non-standard
  - Reference
  - msZoomTo
---
<div>{{APIRef("Microsoft Extensions")}}{{Non-standard_header}}</div>

<p>The <code><strong>msZoomTo</strong></code> method scrolls and/or zooms an element to its specified coordinate with animation.</p>

<p>Zoomed elements can expose their zoom level through {{Event("msContentZoom")}} (ie. scrollTop/Left). The zoom level can be reset with <code>msZoomTo</code>.</p>

<p>This proprietary method is specific to Internet Explorer and Microsoft Edge.</p>

<h3 id="Syntax">Syntax</h3>

<pre class="brush: js">Element.msZoomTo(arguments);
</pre>

<h3 id="Parameters">Parameters</h3>

<p><strong>args</strong>[in]</p>

<p>Type: MSZoomToOptions</p>

<p><em>contentX</em>[in]: The x-coordinate of the content that is the target of the scroll/zoom. If no value is specified, defaults to the current centerpoint of visible content, horizontally.</p>

<p><em>contentY</em>[in]: The y-coordinate of the content that is the target of the scroll/zoom. If no value is specified, defaults to the current centerpoint of visible content, vertically.</p>

<p><em>viewportX</em>[in]: The alignment point of the viewport. The scroll/zoom operation attempts to align this point with the contentX point.</p>

<ul>
 <li>center: Default. Aligns the horizontal center of the viewport to the element's contentX value.</li>
 <li>left: Aligns the left-most point of the viewport to the element's contentX value.</li>
 <li>right: Aligns the right-most point of the viewport to the element's contentX value.</li>
 <li>integer: Aligns the specified x-coordinate of the viewport to the element's contentX value.</li>
</ul>


<p><em>viewportY</em>[in]: The alignment point of the viewport. The scroll/zoom operation attempts to align this point with the contentY point.</p>

<ul>
 <li>middle: Default. Aligns the vertical center of the viewport to the element's contentY value.</li>
 <li>top: Aligns the top-most point of the viewport to the element's contentY value.</li>
 <li>bottom: Aligns the bottom-most point of the viewport to the element's contentY value.</li>
 <li>integer: Aligns the specified y-coordinate of the viewport to the element's contentY value.</li>
</ul>


<p><em>scaleFactor</em>[in]: Floating-point. The scale factor (msContentZoomFactor) to zoom to. If no value is specified, defaults to the current zoom level (no additional zoom occurs).This argument is ignored if the element is not zoomable.</p>

<p><em>animate</em>[in]: The type of animation to use.</p>

<ul>
 <li>default: Uses the default animation.</li>
 <li>none: No animation is used.</li>
</ul>

<p>This method has no scrolling effect on non-scrollable elements and no zooming effect on non-zoomable elements (e.g., elements with "-ms-content-zooming: none").</p>

<p>This method has no effect if called from a parent document to scroll or zoom content hosted in an iframe.</p>

<h3 id="Return_value">Return value</h3>

<p>This method does not return a value.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">/* Zooming in on an element while still keeping it centered in the viewport */
var args = {
    contentX: target.offsetLeft + target.offsetWidth/2;
    contentY: target.offsetTop + target.offsetHeight/2;
    scaleFactor: 2.0;
}
zoomer.msZoomTo(args);
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Microsoft_Extensions">Microsoft API extensions </a></li>
</ul>
