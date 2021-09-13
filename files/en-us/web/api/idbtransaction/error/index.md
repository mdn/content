---
title: IDBTransaction.error
slug: Web/API/IDBTransaction/error
tags:
- API
- Database
- Error
- IDBTransaction
- IndexedDB
- Property
- Reference
- Storage
browser-compat: api.IDBTransaction.error
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>IDBTransaction.error</code></strong> property of the
    {{domxref("IDBTransaction")}} interface returns one of several types of error when
    there is an unsuccessful transaction.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>myError</em> = <em>transaction</em>.error;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMError")}} containing the relevant error. In Chrome 48+/Firefox 58+ this
  property returns a {{domxref("DOMException")}} because <code>DOMError</code> has been
  removed from the DOM standard. The exact error is one of several possibilities. It can
  be a reference to the same error as the request object that raised it, or a transaction
  failure (for example {{exception("QuotaExceededError")}} or
  {{exception("UnknownError")}}).</p>

<p>This property is <code>null</code> if the transaction is not finished, is finished and
  successfully committed, or was aborted with the {{domxref("IDBTransaction.abort")}}
  method.</p>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and add
  some data to an object store. Note also the functions attached to transaction event
  handlers to report on the outcome of the transaction opening in the event of success or
  failure. Note the <code>transaction.onerror = function(event) { };</code> block, making
  use of <code>transaction.error</code> to help in reporting what went wrong when the
  transaction was unsuccessful. For a full working example, see our <a
    href="https://github.com/mdn/to-do-notifications/">To-do
    Notifications</a> app (<a href="https://mdn.github.io/to-do-notifications/">view
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
