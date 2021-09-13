---
title: LockedFile.abort()
slug: Web/API/LockedFile/abort
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

<p>The <code>abort</code> method is used to release the lock on the
  {{domxref("LockedFile")}} object, making it inactive: its {{domxref("LockedFile.active",
  "active")}} property is set to false and all ongoing operations are canceled.</p>

<div class="note">
  <p><strong>Note:</strong> When an ongoing operation is canceled, there is no rollback
    (it is not a database transaction), therefore the file can be corrupted if the
    canceled operation was performing some writing.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var request = <em>instanceOfLockedFile</em>.abort();</pre>

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
