---
title: Using URL values for the cursor property
slug: Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property
tags:
  - CSS
  - Gecko
  - Guide
  - NeedsUpdate
  - Reference
---
<div>{{CSSRef}}</div>

<p><a href="/en-US/docs/Mozilla/Gecko">Gecko</a> 1.8 supports URL values for the CSS {{CSSxRef("cursor")}} property on Windows and Linux. Mac support was added in Gecko 2 (<a href="/en-US/docs/Mozilla/Firefox/Releases/4">Firefox 4</a>). This allows specifying arbitrary images as mouse cursors — any image format supported by Gecko can be used.</p>

<h2 id="Syntax">Syntax</h2>

<p>The basic (CSS 2.1) syntax for this property is:</p>

<pre class="brush: css">{{CSSxRef("cursor")}}: <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">[</a> {{CSSxRef("&lt;url&gt;")}} , <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">]</a><a href="/en-US/docs/CSS/Value_definition_syntax#Asterisk" title="Asterisk: the entity may occur zero, one or several times">*</a> {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Values")}}</pre>

<p>This means that zero or more URLs may be specified (comma-separated), which <strong>must</strong> be followed by one of the keywords defined in the CSS specification, such as <code>auto</code> or <code>pointer</code>.</p>

<p>For example, the following value would be allowed:</p>

<pre class="brush: css">cursor: url(foo.cur), url(http://www.example.com/bar.gif), auto;</pre>

<p>This will first try loading <em>foo.cur</em>. If that file does not exist or is not valid for some other reason, <em>bar.gif</em> is tried, and if that can't be used either, <code>auto</code> will be used.</p>

<p>Support for the CSS 3 syntax for cursor values got added in Gecko 1.8 (Firefox 1.5):</p>

<pre class="brush: css">{{CSSxRef("cursor")}}: <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">[</a> {{CSSxRef("&lt;uri&gt;")}} <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">[</a> &lt;x&gt; &lt;y&gt; <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">]</a><a href="/en-US/docs/CSS/Value_definition_syntax#Question_mark" title="Question mark: the entity is optional">?</a> , <a href="/en-US/docs/CSS/Value_definition_syntax#Brackets" title="Brackets: enclose several entities, combinators, and multipliers to transform them as a single component">]</a><a href="/en-US/docs/CSS/Value_definition_syntax#Asterisk" title="Asterisk: the entity may occur zero, one or several times">*</a> {{CSSxRef("cursor", "<var>&lt;keyword&gt;</var>", "#Values")}}
</pre>

<p>It allows specifying the coordinates of the cursor's hotspot, which will be clamped to the boundaries of the cursor image. If none are specified, the coordinates of the hotspot are read from the file itself (for CUR and XBM files) or are set to the top left corner of the image. An example of the CSS3 syntax is:</p>

<pre class="brush: css;">.foo  {
  cursor: auto;
  cursor: url(cursor1.png) 4 12, auto;
}

.bar  {
  cursor: pointer;
  cursor: url(cursor2.png) 2 2, pointer;
}

/* Falls back onto 'auto' and 'pointer' in IE, but must be set separately */
</pre>

<p>The first number is the x-coordinate, and the second number is the y-coordinate. The example will set the hotspot to be the pixel at (4,12) from the top left (0,0).</p>

<h2 id="Limitations">Limitations</h2>

<p>All image formats supported by Gecko can be used. This means that you can use PNG, GIF, JPG, BMP, CUR, etc. images. ANI is not supported. An animated PNG or GIF will not create an animated cursor.</p>

<div class="notecard note">
<p><strong>Note:</strong> Starting with Gecko 2.0, Gecko also supports the SVG image format for cursors. However, the SVG image must contain a length-valued (not percentage-valued) height and width on its root SVG node. JavaScript, CSS animation, and declarative SMIL inside an SVG image are ignored; you can't use SVG to create an animated cursor, for example.</p>
</div>

<p>In Gecko (Firefox) the limit of the cursor size is 128×128px. Larger cursor images are ignored. However, you should limit yourself to the size 32×32 for maximum compatibility with operating systems and platforms.</p>

<p>(Due to a bug in Gecko 1.9.2-1.9.2.6, Firefox 3.6-3.6.6 on Windows limits to 32×32px. This is fixed in later versions.)</p>

<p>Translucent cursors are not supported on Windows releases earlier than XP. This is a limitation of the operating system. Transparency works on all platforms.</p>

<p>URL values as cursors are supported in Windows, OS/2, and Linux (when using GTK+ 2.4 or better) releases of Mozilla. Mac OS X support was added with Gecko 2 (Firefox 4).</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>Microsoft Internet Explorer 6.0 also supports URI values for the <code>cursor</code> property. However:</p>

<ul>
 <li>IE only supports CUR and ANI as formats.</li>
 <li>IE doesn't support the CSS 3 syntax with x- and y-coordinates. The cursor image, and the rest of the property, are ignored.</li>
</ul>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Browser</th>
   <th>Lowest version</th>
   <th>formats (e.g.)</th>
   <th>x-y-coordinates</th>
  </tr>
  <tr>
   <td>Internet Explorer</td>
   <td><strong>6.0</strong></td>
   <td><code>.cur | .ani</code></td>
   <td>---</td>
  </tr>
  <tr>
   <td>Firefox (Gecko), Windows and Linux</td>
   <td><strong>1.5</strong> (1.8)</td>
   <td><code>.cur | .png | .gif | .jpg</code></td>
   <td>1.5 (1.8)</td>
  </tr>
  <tr>
   <td>Firefox (Gecko)</td>
   <td><strong>4.0</strong> (2.0)</td>
   <td><code>.cur | .png | .gif | .jpg | .svg</code></td>
   <td>(Gecko 2.0)</td>
  </tr>
  <tr>
   <td>Opera</td>
   <td>---</td>
   <td>---</td>
   <td>---</td>
  </tr>
  <tr>
   <td rowspan="2">Safari (Webkit)</td>
   <td><strong>3.0</strong> (522-523)</td>
   <td><code>.cur | .png | .gif | .jpg</code></td>
   <td rowspan="2">3.0 (522-523)</td>
  </tr>
  <tr>
   <td colspan="2">Since OS X 10.5 supports Safari (Mac) <code>.cur</code> files</td>
  </tr>
 </tbody>
</table>
