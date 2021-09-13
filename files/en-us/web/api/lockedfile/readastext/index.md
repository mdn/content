---
title: LockedFile.readAsText()
slug: Web/API/LockedFile/readAsText
tags:
- API
- Files
- Method
- Non Standard
- Reference
- WebAPI
---
<p>{{APIRef("File System API")}}{{non-standard_header}}</p>

<h2 id="Summary">Summary</h2>

<p>The <code>readAsText</code> method is used to read the content of the
  {{domxref("LockedFile")}} object and provide the result of that reading as a string. In
  many ways, it performs like the {{domxref("FileReader.readAsText()")}} method.</p>

<p>The reading operation starts at the position given by the
  {{domxref("LockedFile.location")}} property.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var request = <em>instanceOfLockedFile</em>.readAsText(size[, encoding]);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>size</code></dt>
  <dd>A number representing the number of bytes to read in the file.</dd>
  <dt><code>encoding</code> {{optional_inline}}</dt>
  <dd>A string indicating the encoding to use for the returned data. By default, UTF-8 is
    assumed if this parameter is not specified.</dd>
</dl>

<h3 id="Return">Return</h3>

<p>A {{domxref("FileRequest")}} object to handle the success or failure of the operation.
  In case of success, the request's <code>result</code> is a string representing the data
  that have been read.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
    <tr>
      <td>{{SpecName('FileSystem')}}</td>
      <td>{{Spec2('FileSystem')}}</td>
      <td>Draft proposal</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("LockedFile")}}</li>
</ul>
