---
title: src
slug: Web/CSS/@font-face/src
tags:
  - '@font-face'
  - At-rule descriptor
  - CSS
  - CSS Descriptor
  - CSS Fonts
  - CSS Property
  - Reference
browser-compat: css.at-rules.font-face.src
---
<div>{{CSSRef}}</div>

<p>The <strong><code>src</code></strong> CSS descriptor of the {{cssxref("@font-face")}} rule specifies the resource containing font data. It is required for the <code>@font-face</code> rule to be valid.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: css">/* &lt;url&gt; values */
src: url(https://somewebsite.com/path/to/font.woff); /* Absolute URL */
src: url(path/to/font.woff);                         /* Relative URL */
src: url(path/to/font.woff) format("woff");          /* Explicit format */
src: url('path/to/font.woff');                       /* Quoted URL */
src: url(path/to/svgfont.svg#example);               /* Fragment identifying font */

/* &lt;font-face-name&gt; values */
src: local(font);      /* Unquoted name */
src: local(some font); /* Name containing space */
src: local("font");    /* Quoted name */

/* Multiple items */
src: local(font), url(path/to/font.svg) format("svg"),
     url(path/to/font.woff) format("woff"),
     url(path/to/font.otf) format("opentype");
</pre>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;url&gt; [ format( &lt;string&gt;# ) ]?</code></dt>
 <dd>Specifies an external reference consisting of a {{cssxref("&lt;url&gt;")}}, followed by an optional hint using the <code>format()</code> function to describe the format of the font resource referenced by that URL. The format hint contains a comma-separated list of format strings that denote well-known font formats. If a user agent doesn't support the specified formats, it skips downloading the font resource. If no format hints are supplied, the font resource is always downloaded.</dd>
 <dt><code>&lt;font-face-name&gt;</code></dt>
 <dd>Specifies the name of a locally-installed font face using the <code>local()</code> function, which uniquely identifies a single font face within a larger family. The name can optionally be enclosed in quotes.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>The value of this descriptor is a prioritized, comma-separated list of external references or locally-installed font face names. When a font is needed the {{glossary("user agent")}} iterates over the set of references listed using the first one it can successfully activate. Fonts containing invalid data or local font faces that are not found are ignored and the user agent loads the next font in the list.</p>

<p>As with other URLs in CSS, the URL may be relative, in which case it is resolved relative to the location of the style sheet containing the <code>@font-face</code> rule. In the case of SVG fonts, the URL points to an element within a document containing SVG font definitions. If the element reference is omitted, a reference to the first defined font is implied. Similarly, font container formats that can contain more than one font load only one of the fonts for a given <code>@font-face</code> rule. Fragment identifiers are used to indicate which font to load. If a container format lacks a defined fragment identifier scheme, a simple 1-based indexing scheme (e.g., "font-collection#1" for the first font, "font-collection#2" for the second font, etc.) is used.</p>

<h2 id="Formal_definition">Formal definition</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax">Formal syntax</h2>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<h3 id="Specifying_font_resources_using_url_and_local">Specifying font resources using url() and local()</h3>

<pre class="brush: css">@font-face {
  font-family: examplefont;
  src: local(Example Font),
       url('examplefont.woff') format("woff"),
       url('examplefont.otf') format("opentype");
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{cssxref("@font-face/font-display", "font-display")}}</li>
 <li>{{cssxref("@font-face/font-family", "font-family")}}</li>
 <li>{{cssxref("@font-face/font-stretch", "font-stretch")}}</li>
 <li>{{cssxref("@font-face/font-style", "font-style")}}</li>
 <li>{{cssxref("@font-face/font-weight", "font-weight")}}</li>
 <li>{{cssxref("@font-face/font-variant", "font-variant")}}</li>
 <li>{{cssxref("font-feature-settings", "font-feature-settings")}}</li>
 <li>{{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}</li>
 <li>{{cssxref("@font-face/unicode-range", "unicode-range")}}</li>
</ul>
