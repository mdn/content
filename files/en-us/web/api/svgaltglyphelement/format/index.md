---
title: SVGAltGlyphElement.format
slug: Web/API/SVGAltGlyphElement/format
browser-compat: api.SVGAltGlyphElement.format
---
<p>{{APIRef("SVGAltGlyphElement")}}</p>

<p>{{Deprecated_header}}</p>

<p>The <strong><code>SVGAltGlyphElement.format</code></strong> property is a
    {{domxref("DOMString")}} that defines the format of the given font. It has the same
    meaning as the 'format' property of {{domxref("SVGGlyphRefElement")}} property. If the
    font is in one of the formats listed in <a
        href="https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#referencing">CSS2([CSS2],
        section15.3.5)</a>, then its value is the corresponding &lt;string&gt; parameter
    of the font.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">string = <em>myGlyph</em>.format;
 <em>myGlyph</em>.format = string;
</pre>

<h3 id="Value">Value</h3>

<p>The format values listed below are taken from <a
        href="https://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#referencing">CSS2([CSS2],
        section15.3.5)</a>.</p>

<table>
    <thead>
        <tr>
            <th scope="col">String</th>
            <th scope="col">Font Format</th>
            <th scope="col">Examples of common extensions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>truedoc-pfr</td>
            <td>TrueDoc™ Portable Font Resource</td>
            <td>.pfr</td>
        </tr>
        <tr>
            <td>embedded-opentype</td>
            <td>Embedded OpenType</td>
            <td>.eot</td>
        </tr>
        <tr>
            <td>type-1</td>
            <td>PostScript™ Type 1</td>
            <td>.pfb, .pfa</td>
        </tr>
        <tr>
            <td>truetype</td>
            <td>TrueType</td>
            <td>.ttf</td>
        </tr>
        <tr>
            <td>opentype</td>
            <td>OpenType, including TrueType Open</td>
            <td>.ttf</td>
        </tr>
        <tr>
            <td>truetype-gx</td>
            <td>TrueType with GX extensions</td>
            <td>-</td>
        </tr>
        <tr>
            <td>speedo</td>
            <td>Speedo</td>
            <td>-</td>
        </tr>
        <tr>
            <td>intellifont</td>
            <td>Intellifont</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

<h2 id="Example">Example</h2>

<pre class="brush: js">myGlyph.format = &quot;truedoc-pfr&quot;;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>{{domxref("SVGAltGlyphElement")}}</li>
    <li>{{domxref("SVGGlyphRefElement")}}</li>
</ul>
