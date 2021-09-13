---
title: HTMLCanvasElement.mozFetchAsStream()
slug: Web/API/HTMLCanvasElement/mozFetchAsStream
tags:
- API
- Canvas
- HTMLCanvasElement
- Method
- Reference
- Deprecated
browser-compat: api.HTMLCanvasElement.mozFetchAsStream
---
<div>{{APIRef("Canvas API")}} {{deprecated_header}}</div>

<p>The <strong><code>HTMLCanvasElement.mozFetchAsStream()</code></strong> internal method
    used to create a new input stream that, when ready, would provide the contents of the
    canvas as image data. However, this non-standard and internal method has been removed.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>void <em>canvas</em>.mozFetchAsStream(<em>callback</em>, <em>type</em>);</var>
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
    <dt><code>callback</code></dt>
    <dd>An {{interface("nsIInputStreamCallback")}}.</dd>
    <dt><code>type</code> {{optional_inline}}</dt>
    <dd>A {{domxref("DOMString")}} indicating the image format. The default type is
        <code>image/png</code>.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<div>
    <h3 id="Save_to_disk_with_mozFetchAsStream_(Chrome_context_only)">Save to disk with
        <code>mozFetchAsStream</code> (Chrome context only)</h3>

    <p>This technique also converts it to ico, however it will not work in Windows XP as
        WinXP cannot convert from PNG to ICO. It saves to the desktop it uses
        FileUtils.jsm. Also uses NetUtil.jsm</p>

    <pre class="brush: js">var canvas = document.getElementById('canvas');
var d = canvas.width;
ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(d / 2, 0);
ctx.lineTo(d, d);
ctx.lineTo(0, d);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

var netutilCallback = function() {
    return function(result) {
       if (!Components.isSuccessCode(result)) {
          alert('FAILED to create icon');
       } else {
           alert('successfully made');
       }
    };
}

var mfasCallback = function(iconName) {
    return function(inStream) {
       var file = FileUtils.getFile('Desk', [iconName + '.ico']);
       var outStream = FileUtils.openFileOutputStream(file);
       Cu.import('resource://gre/modules/NetUtil.jsm');
       NetUtil.asyncCopy(inStream, outStream, netutilCallback());
    }
}

canvas.mozFetchAsStream(mfasCallback('myIcon'), 'image/vnd.microsoft.icon');</pre>
</div>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>The interface defining it, {{domxref("HTMLCanvasElement")}}.</li>
</ul>
