---
title: '<picture>: The Picture element'
slug: Web/HTML/Element/picture
tags:
  - Element
  - Graphics
  - HTML
  - HTML embedded content
  - Images
  - Reference
  - Web
  - WebP
  - picture
browser-compat: html.elements.picture
---
<div>{{HTMLRef}}</div>

<p>The <strong><code>&lt;picture&gt;</code></strong> <a href="/en-US/docs/Web/HTML">HTML</a> element contains zero or more {{HTMLElement("source")}} elements and one {{HTMLElement("img")}} element to offer alternative versions of an image for different display/device scenarios.</p>

<p>The browser will consider each child <code>&lt;source&gt;</code> element and choose the best match among them. If no matches are found—or the browser doesn't support the <code>&lt;picture&gt;</code> element—the URL of the <code>&lt;img&gt;</code> element's {{htmlattrxref("src", "img")}} attribute is selected. The selected image is then presented in the space occupied by the <code>&lt;img&gt;</code> element.</p>

<div>{{EmbedInteractiveExample("pages/tabbed/picture.html", "tabbed-standard")}}</div>

<p>To decide which URL to load, the {{Glossary("user agent")}} examines each <code>&lt;source&gt;</code>'s {{htmlattrxref("srcset", "source")}}, {{htmlattrxref("media", "source")}}, and {{htmlattrxref("type", "source")}} attributes to select a compatible image that best matches the current layout and capabilities of the display device.</p>

<p>The <code>&lt;img&gt;</code> element serves two purposes:</p>

<ol>
 <li>It describes the size and other attributes of the image and its presentation.</li>
 <li>It provides a fallback in case none of the offered <code>&lt;source&gt;</code> elements are able to provide a usable image.</li>
</ol>

<p>Common use cases for <code>&lt;picture&gt;</code>:</p>

<ul>
 <li><strong>Art direction.</strong> Cropping or modifying images for different <code>media</code> conditions (for example, loading a simpler version of an image which has too many details, on smaller displays).</li>
 <li><strong>Offering alternative image formats</strong>, for cases where certain formats are not supported.
  <div class="note">
  <p><strong>Note:</strong> For example, newer formats like <a href="/en-US/docs/Web/Media/Formats/Image_types#avif">AVIF</a> or <a href="/en-US/docs/Web/Media/Formats/Image_types#webp">WEBP</a> have many advantages, but  might not be supported by the browser. A list of supported image formats can be found in: <a href="/en-US/docs/Web/Media/Formats/Image_types">Image file type and format guide</a>.</p>
  </div>
 </li>
 <li><strong>Saving bandwidth and speeding page load times</strong> by loading the most appropriate image for the viewer's display.</li>
</ul>

<p>If providing higher-density versions of an image for high-DPI (Retina) display, use {{htmlattrxref("srcset", "img")}} on the <code>&lt;img&gt;</code> element instead. This lets browsers opt for lower-density versions in data-saving modes, and you don't have to write explicit <code>media</code> conditions.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/en-US/docs/Web/Guide/HTML/Content_categories">Content categories</a></th>
   <td><a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content">Flow content</a>, phrasing content, embedded content</td>
  </tr>
  <tr>
   <th scope="row">Permitted content</th>
   <td>Zero or more {{HTMLElement("source")}} elements, followed by one {{HTMLElement("img")}} element, optionally intermixed with script-supporting elements.</td>
  </tr>
  <tr>
   <th scope="row">Tag omission</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">Permitted parents</th>
   <td>Any element that allows embedded content.</td>
  </tr>
  <tr>
   <th scope="row">Implicit ARIA role</th>
   <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">No corresponding role</a></td>
  </tr>
  <tr>
   <th scope="row">Permitted ARIA roles</th>
   <td>No <code>role</code> permitted</td>
  </tr>
  <tr>
   <th scope="row">DOM interface</th>
   <td>{{domxref("HTMLPictureElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes">Attributes</h2>

<p>This element includes only <a href="/en-US/docs/Web/HTML/Global_attributes">global attributes</a>.</p>

<h2 id="Usage_notes">Usage notes</h2>

<p>You can use the {{cssxref("object-position")}} property to adjust the positioning of the image within the element's frame, and the {{cssxref("object-fit")}} property to control how the image is resized to fit within the frame.</p>

<div class="note">
<p><strong>Note:</strong> Use these properties on the child <code>&lt;img&gt;</code> element, <strong>not</strong> the <code>&lt;picture&gt;</code> element.</p>
</div>

<h2 id="Examples">Examples</h2>

<p>These examples demonstrate how different attributes of the {{HTMLElement("source")}} element change the selection of the image inside <code>&lt;picture&gt;</code>.</p>

<h3 id="The_media_attribute">The media attribute</h3>

<p>The <code>media</code> attribute specifies a media condition (similar to a media query) that the user agent will evaluate for each {{HTMLElement("source")}} element.</p>

<p>If the {{HTMLElement("source")}}'s media condition evaluates to <code>false</code>, the browser skips it and evaluates the next element inside <code>&lt;picture&gt;</code>.</p>

<pre class="brush: html">&lt;picture&gt;
  &lt;source srcset="mdn-logo-wide.png" media="(min-width: 600px)"&gt;
  &lt;img src="mdn-logo-narrow.png" alt="MDN"&gt;
&lt;/picture&gt;
</pre>

<h3 id="The_srcset_attribute">The srcset attribute</h3>

<p>The <a href="/en-US/docs/Web/HTML/Element/source#attr-srcset">{{htmlattrdef("srcset")}}</a> attribute is used to offer list of possible images <em>based on size</em>.</p>

<p>It is composed of a comma-separated list of image descriptors. Each image descriptor is composed of a URL of the image, and <em>either...</em></p>

<ul>
 <li>a <em>width descriptor</em>, followed by a <code>w</code> (such as <code>300w</code>);<br>
  <em>OR</em></li>
 <li>a <em>pixel density descriptor</em>, followed by an <code>x</code> (such as <code>2x</code>) to serve a high-res image for high-DPI screens.</li>
</ul>

<pre class="brush: html">&lt;picture&gt;
  &lt;source srcset="logo-768.png 768w, logo-768-1.5x.png 1.5x"&gt;
  &lt;source srcset="logo-480.png, logo-480-2x.png 2x"&gt;
  &lt;img src="logo-320.png" alt="logo"&gt;
&lt;/picture&gt;</pre>

<h3 id="The_type_attribute">The type attribute</h3>

<p>The <code>type</code> attribute specifies a <a href="/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MIME type</a> for the resource URL(s) in the {{HTMLElement("source")}} element's <code>srcset</code> attribute. If the user agent does not support the given type, the {{HTMLElement("source")}} element is skipped.</p>

<pre class="brush: html">&lt;picture&gt;
  &lt;source srcset="logo.webp" type="image/webp"&gt;
  &lt;img src="logo.png" alt="logo"&gt;
&lt;/picture&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTMLElement("img")}} element</li>
 <li>{{HTMLElement("source")}} element</li>
 <li>Positioning and sizing the picture within its frame: {{cssxref("object-position")}} and {{cssxref("object-fit")}}</li>
 <li><a href="/en-US/docs/Web/Media/Formats/Image_types">Image file type and format guide</a></li>
</ul>
