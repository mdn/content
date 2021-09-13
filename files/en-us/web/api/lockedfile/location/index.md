---
title: LockedFile.location
slug: Web/API/LockedFile/location
tags:
- API
- Files
- Non Standard
- Property
- Reference
- WebAPI
---
<p>{{APIRef("File System API")}}{{non-standard_header}}</p>

<h2 id="Summary">Summary</h2>

<p>The <code>location</code> property is a zero-based index representing the position of
  the read/write pointer within the file. Its value indicates at which bytes within the
  file any write or read operation will start.</p>

<p>This value is changed automatically after every read and write operation. The special
  value <code>null</code> means end-of-file.</p>

<p>This property can be changed at will.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var location = <em>instanceOfLockedFile</em>.location
</pre>

<h2 id="Value">Value</h2>

<p>A number.</p>

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
      <td>Draft Proposal.</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("LockedFile")}}</li>
</ul>
