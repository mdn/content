---
title: LockedFile.flush()
slug: Web/API/LockedFile/flush
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

<p>The <code>flush</code> method is used to ensure any change made to a file is properly
  written on disk.</p>

<p>For performance reasons, a {{domxref("LockedFile")}} object buffers all its operation
  in memory. This allows fast writing and reading operations. Periodically, the data are
  written onto disk. However, if something goes wrong before that, some operations can be
  lost. To avoid that, it's possible to force a write onto the disk by calling the
  <code>flush</code> method.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var request = <em>instanceOfLockedFile</em>.flush();</pre>

<h3 id="Return">Return</h3>

<p>A {{domxref("FileRequest")}} object to handle the success or failure of the operation.
</p>

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
