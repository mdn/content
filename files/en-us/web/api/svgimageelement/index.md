---
title: SVGImageElement
slug: Web/API/SVGImageElement
tags:
  - API
  - Image
  - Interface
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
  - SVGImageElement
browser-compat: api.SVGImageElement
---
<div>{{APIRef("SVG")}}</div>

<p>The <strong><code>SVGImageElement</code></strong> interface corresponds to the {{SVGElement("image")}} element.</p>

<p>{{InheritanceDiagram(600, 140)}}</p>

<h2 id="Properties">Properties</h2>

<p><em>This interface also inherits properties from its parent, {{domxref("SVGGraphicsElement")}}.</em></p>

<dl>
	<dt>{{domxref("SVGImageElement.href")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedString")}} corresponding to the {{SVGAttr("href")}} or {{SVGAttr("xlink:href")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.crossOrigin")}}</dt>
	<dd>A {{domxref("DOMString")}} corresponding to the {{SVGAttr("crossorigin")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.decoding")}}</dt>
	<dd>A {{domxref("DOMString")}} representing a hint given to the browser on how it should decode the image.</dd>
	<dt>{{domxref("SVGImageElement.height")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("height")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.preserveAspectRatio")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedPreserveAspectRatio")}} corresponding to the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.width")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("width")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.x")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("x")}} attribute of the given {{SVGElement("image")}} element.</dd>
	<dt>{{domxref("SVGImageElement.y")}} {{ReadOnlyInline}}</dt>
	<dd>An {{domxref("SVGAnimatedLength")}} corresponding to the {{SVGAttr("y")}} attribute of the given {{SVGElement("image")}} element.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>This interface also inherits methods from its parent interface, {{domxref("SVGGraphicsElement")}}.</em></p>

<dl>
	<dt>{{domxref("SVGImageElement.decode()")}}</dt>
	<dd>Initiates asynchronous decoding of the image data. Returns a {{jsxref("Promise")}} which resolves once the image data is ready to be used.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>


<p>{{Compat}}</p>
