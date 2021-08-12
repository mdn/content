---
title: Media queries
slug: Web/CSS/Media_Queries
tags:
  - CSS
  - Guide
  - Media Queries
  - Overview
  - Reference
  - Responsive Design
---
<div>{{CSSRef}}</div>

<p><strong>Media queries</strong> let you adapt your site or app depending on the presence or value of various device characteristics and parameters.</p>

<p>They are a key component of <a href="/en-US/docs/Web/Progressive_web_apps">responsive design</a>. For example, a media query can shrink the font size on small devices, increase the padding between paragraphs when a page is viewed in portrait mode, or bump up the size of buttons on touchscreens.</p>

<p>In <a href="/en-US/docs/Web/CSS">CSS</a>, use the {{cssxref("@media")}} <a href="/en-US/docs/Web/CSS/At-rule">at-rule</a> to conditionally apply part of a style sheet based on the result of a media query. Use {{cssxref("@import")}} to conditionally apply an entire style sheet.</p>

<h3 id="Media_queries_in_HTML">Media queries in HTML</h3>

<p>In <a href="/en-US/docs/Web/HTML">HTML</a>, media queries can be applied to various elements:</p>

<ul>
 <li>In the {{HTMLElement("link")}} element's {{htmlattrxref("media", "link")}} attribute, they define the media to which a linked resource (typically CSS) should be applied.</li>
 <li>In the {{HTMLElement("source")}} element's {{htmlattrxref("media", "source")}} attribute, they define the media to which that source should be applied. (This is only valid inside {{HTMLElement("picture")}} elements.)</li>
 <li>In the {{HTMLElement("style")}} element's {{htmlattrxref("media", "style")}} attribute, they define the media to which the style should be applied.</li>
</ul>

<h3 id="Media_queries_in_JavaScript">Media queries in JavaScript</h3>

<p>In <a href="/en-US/docs/Web/JavaScript">JavaScript</a>, you can use the {{domxref("Window.matchMedia()")}} method to test the window against a media query. You can also use {{domxref("MediaQueryList.addListener()")}} to be notified whenever the state of a query changes. With this functionality, your site or app can respond to changes in the device configuration, orientation, or state.</p>

<p>You can learn more about programmatically using media queries in <a href="/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries">Testing media queries</a>.</p>

<h2 id="Reference">Reference</h2>

<h3 id="At-rules">At-rules</h3>

<ul>
 <li>{{cssxref("@import")}}</li>
 <li>{{cssxref("@media")}}</li>
</ul>

<h2 id="Guides">Guides</h2>

<dl>
 <dt><a href="/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using media queries</a></dt>
 <dd>Introduces media queries, their syntax, and the operators and media features which are used to construct media query expressions.</dd>
 <dt><a href="/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries">Testing media queries programmatically</a></dt>
 <dd>Describes how to use media queries in your JavaScript code to determine the state of a device, and to set up listeners that notify your code when the results of media queries change (such as when the user rotates the screen or resizes the browser).</dd>
 <dt><a href="/en-US/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility">Using Media Queries for Accessibility</a></dt>
 <dd>Learn how Media Queries can help users understand your website better.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS5 Media Queries')}}</td>
   <td>{{Spec2('CSS5 Media Queries')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Conditional')}}</td>
   <td>{{Spec2('CSS3 Conditional')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS4 Media Queries')}}</td>
   <td>{{Spec2('CSS4 Media Queries')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Media Queries')}}</td>
   <td>{{Spec2('CSS3 Media Queries')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'media.html')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>Use {{cssxref("@supports")}} to apply styles that depend on browser support for various CSS technologies.</li>
</ul>
