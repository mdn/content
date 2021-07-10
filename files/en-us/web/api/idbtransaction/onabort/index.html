---
title: IDBTransaction.onabort
slug: Web/API/IDBTransaction/onabort
tags:
- API
- Database
- IDBTransaction
- IndexedDB
- Property
- Reference
- Storage
- onabort
browser-compat: api.IDBTransaction.onabort
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>onabort</code></strong> event handler of the
    <code>IDBTransaction</code> interface handles the abort event, fired, when the current
    transaction is aborted via the {{domxref("IDBTransaction.abort")}} method.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>transaction</em>.onabort = <em>function</em>(event) { ... };</pre>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and add
  some data to an object store. Note also the functions attached to transaction event
  handlers to report on the outcome of the transaction opening in the event of success or
  failure. Note the <code>transaction.onabort = function(event) { };</code> block,
  reporting when the transaction has been aborted. For a full working example, see our <a
    href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a
    href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</p>

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
    note.innerHTML += '&lt;li&gt;Transaction not opened due to error: ' + transaction.error + '&lt;/li&gt;';
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

  transaction.onabort = function() {
    // Report when the transaction was successfully aborted
    console.log("Transaction aborted!");
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
  <li><code>IDBTransaction</code>
    <code><a href="/en-US/docs/Web/API/IDBTransaction/abort">abort</a></code> event</li>
</ul>
