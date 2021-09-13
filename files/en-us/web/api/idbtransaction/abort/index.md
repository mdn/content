---
title: IDBTransaction.abort()
slug: Web/API/IDBTransaction/abort
tags:
- API
- Database
- IDBTransaction
- IndexedDB
- Method
- Reference
- Storage
- abort
browser-compat: api.IDBTransaction.abort
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>The <strong><code>abort()</code></strong> method of the {{domxref("IDBTransaction")}}
  interface rolls back all the changes to objects in the database associated with this
  transaction.</p>

<p>All pending {{domxref("IDBRequest")}} objects created during this transaction have
  their {{domxref("IDBRequest.error")}} attribute set to {{exception("AbortError")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>transaction</em>.abort();</pre>

<h3 id="Exceptions">Exceptions</h3>

<p>This method may raise a {{domxref("DOMException")}} of the following type:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><strong>Exception</strong></th>
      <th scope="col"><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{exception("InvalidStateError")}}</td>
      <td>The transaction has already been committed or aborted.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and add
  some data to an object store. Note also the functions attached to transaction event
  handlers to report on the outcome of the transaction opening in the event of success or
  failure. At the end, we abort any activity done under the current transaction using
  <code>abort()</code>. For a full working example, see our <a
    href="https://github.com/mdn/to-do-notifications/">To-do
    Notifications</a> app (<a href="https://mdn.github.io/to-do-notifications/">view
    example live</a>.)</p>

<pre class="brush: js">// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // store the result of opening the database in the db variable. This is used a lot below
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

 // Abort the transaction we just did
 transaction.abort();
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
