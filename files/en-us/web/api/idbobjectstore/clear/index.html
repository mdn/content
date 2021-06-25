---
title: IDBObjectStore.clear()
slug: Web/API/IDBObjectStore/clear
tags:
  - API
  - Database
  - IDBObjectStore
  - IndexedDB
  - Method
  - Reference
  - Storage
  - clear
browser-compat: api.IDBObjectStore.clear
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>clear()</code></strong> method of the {{domxref("IDBObjectStore")}}
    interface creates and immediately returns an {{domxref("IDBRequest")}} object, and
    clears this object store in a separate thread. This is for deleting all the current
    data out of an object store.</p>
</div>

<p>Clearing an object store consists of removing all records from the object store and
  removing all records in indexes that reference the object store. To remove only some of
  the records in a store, use {{domxref("IDBObjectStore.delete")}} passing a key
  or {{domxref("IDBKeyRange")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>request</em> = <em>objectStore</em>.clear();</pre>

<h3 id="Returns">Returns</h3>

<p>An {{domxref("IDBRequest")}} object on which subsequent events related to this
  operation are fired.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>This method may raise a {{domxref("DOMException")}} of one of the following types:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>The transaction associated with this operation is in read-only <a
          href="/en-US/docs/Web/API/IDBTransaction#mode_constants">mode</a>.</td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>This {{domxref("IDBObjectStore")}}'s transaction is inactive.<br>
         </td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and
  clear all the current data out of the object store using <code>clear()</code>. For a
  full working example, see our <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app
    (<a href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</p>

<pre class="brush: js">// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Clear all the data form the object store
  clearData();
};

function clearData() {
  // open a read/write db transaction, ready for clearing the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction completed.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction not opened due to error: ' + transaction.error + '&lt;/li&gt;';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // Make a request to clear all the data out of the object store
  var objectStoreRequest = objectStore.clear();

  objectStoreRequest.onsuccess = function(event) {
    // report the success of our request
    note.innerHTML += '&lt;li&gt;Request successful.&lt;/li&gt;';
  };
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
