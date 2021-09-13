---
title: LockedFile.onerror
slug: Web/API/LockedFile/onerror
tags:
  - API
  - Files
  - Non Standard
  - Property
  - Reference
  - WebAPI
---
<p>{{APIRef("File System API")}}{{ non-standard_header }}</p>

<h2 id="Summary">Summary</h2>

<p>Specifies an event listener to receive {{event("error")}} events. These events occur when something goes wrong.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>instanceOfLockedFile</em>.onerror = <em>funcRef</em>;
</pre>

<p>Where <code><em>funcRef</em></code> is a function to be called when the {{event("error")}} event occurs.</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('FileSystem')}}</td>
   <td>{{Spec2('FileSystem')}}</td>
   <td>Draft proposal.</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("LockedFile")}}</li>
</ul>
