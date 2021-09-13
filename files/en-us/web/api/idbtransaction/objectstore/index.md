---
title: IDBTransaction.objectStore()
slug: Web/API/IDBTransaction/objectStore
tags:
- API
- Database
- IDBTransaction
- IndexedDB
- Method
- Reference
- Storage
- objectStore
browser-compat: api.IDBTransaction.objectStore
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>The <strong><code>objectStore()</code></strong> method of the
  {{domxref("IDBTransaction")}} interface returns an object store that has already been
  added to the scope of this transaction.</p>

<p>Every call to this method on the same transaction object, with the same name, returns
  the same {{domxref("IDBObjectStore")}} instance. If this method is called on a different
  transaction object, a different {{domxref("IDBObjectStore")}} instance is returned.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>IDBTransaction</em>.objectStore(<em>name</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>name</code></dt>
  <dd>The name of the requested object store.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{domxref("IDBObjectStore")}} object for accessing an object store.</p>

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
      <td><code>NotFoundError</code></td>
      <td>The requested object store is not in this transaction's scope.</td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>The request was made on a source object that has been deleted or removed, or if
        the transaction has finished.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and add
  some data to an object store. Note also the functions attached to transaction event
  handlers to report on the outcome of the transaction opening in the event of success or
  failure. For a full working example, see our <a
    href="https://github.com/mdn/to-do-notifications/">To-do
    Notifications</a> app (<a href="https://mdn.github.io/to-do-notifications/">view
    example live</a>.)</p>

<pre class="brush: js">// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // store the result of opening the database in the db variable.
  // This is used a lot below
  db = DBOpenRequest.result;

  // Run the addData() function to add the data to the database
  addData();
};

function addData() {
  // Create a new object ready for being inserted into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready for adding the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of opening the transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction completed: database modification finished.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction not opened due to error. Duplicate items not allowed.&lt;/li&gt;';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");

  // add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // report the success of the request (this does not mean the item
    // has been stored successfully in the DB - for that you need transaction.onsuccess)
    note.innerHTML += '&lt;li&gt;Request successful.&lt;/li&gt;';
  };
</pre>

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
  <li>Reference example: <a
      href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do
      Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">view example
      live</a>.)</li>
</ul>
