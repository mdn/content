---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
tags:
  - API
  - Database
  - IDBDatabase
  - IndexedDB
  - Method
  - Reference
  - Storage
browser-compat: api.IDBDatabase.deleteObjectStore
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>deleteObjectStore()</code></strong> method of the
    {{domxref("IDBDatabase")}} interface destroys the object store with the given name in
    the connected database, along with any indexes that reference it.</p>
</div>

<p>As with {{ domxref("IDBDatabase.createObjectStore") }}, this method can be called
  <em>only</em> within a <a
    href="/en-US/docs/Web/API/IDBTransaction#version_change"><code>versionchange</code></a>
  transaction.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>dbInstance</em>.deleteObjectStore(<em>name</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>name</code></dt>
  <dd>The name of the object store you want to delete.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<p>This method may raise a {{domxref("DOMException")}}  of one of the following types:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>Occurs if the method was not called from
        a <code>versionchange</code> transaction callback. For older WebKit browsers, you
        must call {{ APIRef("IDBVersionChangeRequest.setVersion")}} first.</td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>Occurs if a request is made on a source database that doesn't exist (e.g. has
        been deleted or removed.) In Firefox previous to version 41, an
        <code>InvalidStateError</code> was raised in this case as well, which was
        misleading; this has now been fixed (see {{Bug("1176165")}}.)</td>
    </tr>
    <tr>
      <td><code>NotFoundError</code></td>
      <td>You are trying to delete an object store that does not exist. Names are case
        sensitive.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<pre class="brush: js">var dbName = "sampleDB";
var dbVersion = 2;
var request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(e) {
  var db = request.result;
  if (e.oldVersion &lt; 1) {
    db.createObjectStore("store1");
  }

  if (e.oldVersion &lt; 2) {
    db.deleteObjectStore("store1");
    db.createObjectStore("store2");
  }

  // etc. for version &lt; 3, 4...
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
  <li>Starting transactions: {{domxref("IDBDatabase")}}</li>
  <li>Using transactions: {{domxref("IDBTransaction")}}</li>
  <li>Setting a range of keys: {{domxref("IDBKeyRange")}}</li>
  <li>Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}</li>
  <li>Using cursors: {{domxref("IDBCursor")}}</li>
  <li>Reference example: <a class="external"
      href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do
      Notifications</a> (<a class="external"
      href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
