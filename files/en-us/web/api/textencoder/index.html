---
title: TextEncoder
slug: Web/API/TextEncoder
tags:
  - API
  - Encoding
  - Experimental
  - Interface
  - Reference
  - TextEncoder
browser-compat: api.TextEncoder
---
<p>{{APIRef("Encoding API")}}</p>

<p><code><strong>TextEncoder</strong></code> takes a stream of code points as input and emits a stream of UTF-8 bytes.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">const encoder = new TextEncoder()
const view = encoder.encode('€')
console.log(view); // Uint8Array(3) [226, 130, 172]
</pre>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}</dt>
 <dd>Returns a newly constructed <code>TextEncoder</code> that will generate a byte stream with UTF-8 encoding.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>The <code>TextEncoder</code> interface doesn't inherit any property.</em></p>

<dl>
 <dt>{{DOMxRef("TextEncoder.prototype.encoding")}}{{ReadOnlyInline}}</dt>
 <dd>Always returns "<code>utf-8</code>".</dd>
</dl>

<h2 id="Methods">Methods</h2>

<p><em>The <code>TextEncoder</code> interface doesn't inherit any method</em>.</p>

<dl>
 <dt>{{DOMxRef("TextEncoder.prototype.encode()")}}</dt>
 <dd>Takes a {{domxref("USVString")}} as input, and returns a {{jsxref("Uint8Array")}} containing UTF-8 encoded text.</dd>
 <dt>{{DOMxRef("TextEncoder.prototype.encodeInto()")}}</dt>
 <dd>Takes a {{domxref("USVString")}} to encode and a destination {{jsxref("Uint8Array")}} to put resulting UTF-8 encoded text into, and returns a dictionary object indicating the progress of the encoding. This is potentially more performant than the older <code>encode()</code> method.</dd>
</dl>

<h2 id="Polyfill">Polyfill</h2>

<p>The below polyfill is compliant with the standard and therefore only supports UTF-8. It is designed to work in IE5 "out of the box". However, in IE5-IE9, it will return a regular Array instead of a TypedArray. In those cases a polyfill might be impractical for large strings. Finally, note that you should run the below code through a minifier (especially closure compiler) to turn sequences like <code>0x1e &lt;&lt; 3</code> into <code>0xf0</code>. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.</p>

<pre class="brush: js">if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
        var Len = str.length, resPos = -1;
        // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point &gt;= 0xD800 &amp;&amp; point &lt;= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode &gt;= 0xDC00 &amp;&amp; nextcode &lt;= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point &gt; 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/&lt;&lt;3) | (point&gt;&gt;&gt;18);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | ((point&gt;&gt;&gt;12)&amp;0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | ((point&gt;&gt;&gt;6)&amp;0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6) | (point&amp;0x3f/*0b00111111*/);
                        continue;
                    }
                } else {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point &lt;= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/&lt;&lt;7) | point;
            } else if (point &lt;= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/&lt;&lt;5) | (point&gt;&gt;&gt;6);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)  | (point&amp;0x3f/*0b00111111*/);
            } else {
                resArr[resPos += 1] = (0xe/*0b1110*/&lt;&lt;4) | (point&gt;&gt;&gt;12);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | ((point&gt;&gt;&gt;6)&amp;0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/&lt;&lt;6)    | (point&amp;0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
</pre>

<p><small>Source: <a href="https://github.com/anonyco/FastestSmallestTextEncoderDecoder" rel="noopener">https://github.com/anonyco/FastestSmallestTextEncoderDecoder</a></small></p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.</li>
 <li><a href="https://nodejs.org/api/util.html#util_class_util_textencoder">Node.js supports global export from v11.0.0</a></li>
</ul>
