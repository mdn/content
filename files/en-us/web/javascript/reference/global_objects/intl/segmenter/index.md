---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
---
<p>{{JSRef}}</p>

<p><span class="seoSummary">The <strong><code>Intl.Segmenter</code></strong> object is a constructor for segmenters, objects that enable language sensitive string splitting.</span></p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter">Intl.Segmenter()</a></code></dt>
 <dd>Creates a new <code>Segmenter</code> object.</dd>
</dl>

<h2 id="Static_methods">Static methods</h2>

<dl>
 <dt>{{jsxref("Intl.Segmenter.supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}</dt>
 <dd>Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.</dd>
</dl>

<h2 id="Instance_methods">Instance methods</h2>

<dl>
 <dt>{{jsxref("Intl.Segmenter.segment", "Intl.Segmenter.prototype.segment()")}}</dt>
 <dd>Getter function that segments a string according to the locale and granularity of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} object.</dd>
 <dt>{{jsxref("Intl.Segmenter.resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}</dt>
 <dd>Returns a new object with properties reflecting the locale and granularity options computed during initialization of this {{jsxref("Global_Objects/Intl/Segmenter", "Intl.Segmenter")}} object.</dd>
</dl>
