---
title: LockedFile.getMetadata()
slug: Web/API/LockedFile/getMetaData
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

<p>The <code>getMetadata</code> method allows to retrieve some metadata about the locked
  file.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var request = <em>instanceOfLockedFile</em>.getMetadata(param);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>param</code> {{optional_inline}}</dt>
  <dd>An object used to request specific metadata. Each key is a boolean where
    <code>true</code> means the metadata is expected and where <code>false</code> means it
    is not expected. Note that if the key is <code>undefined</code>, it is considered as
    if it were <code>true</code>. The following metadata are supported:</dd>
</dl>

<ul>
  <li><code>size</code> : will provide the size of the file</li>
  <li><code>lastModified</code> : will provide the date when the file was last modified
  </li>
</ul>

<h3 id="Return">Return</h3>

<p>A {{domxref("FileRequest")}} object. In case of success, the request's
  <code>result</code> is an object with the metadata requested through the param object.
  They have the following format:</p>

<ul>
  <li><code>size</code> : a number</li>
  <li><code>lastModified</code> : a
    <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">Date</a></code>
    object</li>
</ul>

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
