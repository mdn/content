---
title: Event.msConvertURL()
slug: Web/API/Event/msConvertURL
tags:
  - API
  - API:Microsoft Extensions
  - Method
  - Non-standard
  - Reference
  - msConvertURL
---
<div>{{APIRef("DOM")}}{{Non-standard_Header}}</div>

<p>The <code><strong>msConvertURL</strong></code> method instructs the HTML paste operation on how to modify the src attribute that corresponds to each file in the clipboardData.files collection, allowing otherwise inaccessible files to be converted to blob or data URIs.</p>

<p>This proprietary method is specific to Internet Explorer and the Microsoft Edge browser.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var retVal = DragEvent.msConvertURL(file, targetType, targetURL);
</pre>

<h3 id="Parameters">Parameters</h3>

<p><strong>file</strong> [in]</p>

<p>Type: <em>File</em></p>

<p>The file object to be converted.</p>

<p><strong>targetType</strong> [in]</p>

<p>Type: <em>DOMString</em></p>

<p>One of the following values indicating the desired conversion type: "specified", "base64", or "unchanged".</p>

<p><strong>targetURL</strong> [in, optional]</p>

<p>Type: <em>URL</em></p>

<p>The target URL.</p>

<h3 id="Return_value">Return value</h3>

<p>This method does not return a value.</p>

<h3 id="Example">Example</h3>

<pre class="brush: js">  var blobList = [];

    document.getElementById("pasteZone").addEventListener('paste', handlePaste, false);

    function handlePaste(evt) {
      var fileList = window.clipboardData.files; // Note that window.DataTransfer.files is not applicable.

      if (!fileList) {
        console.log("fileList is null.");
        return;
      }

      for (var i = 0; i &lt; fileList.length; i++) {
        var file = fileList[i];
        var url = URL.createObjectURL(file);

        if (evt.convertURL) { // Use standard if available.
          evt.convertURL(file, "specified", url);
        } else {
          evt.msConvertURL(file, "specified", url);
        }

        console.log("Local file: " + file.name + " (" + file.size + ")");
        blobList.push(file);
      } // for
    } // handlePaste

</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Microsoft_Extensions">Microsoft API extensions </a></li>
</ul>
