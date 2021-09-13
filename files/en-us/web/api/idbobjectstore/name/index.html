---
title: IDBObjectStore.name
slug: Web/API/IDBObjectStore/name
tags:
- API
- Database
- IDBObjectStore
- IndexedDB
- Property
- Reference
- Storage
- name
browser-compat: api.IDBObjectStore.name
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>name</code></strong> property of the {{domxref("IDBObjectStore")}}
    interface indicates the name of this object store.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>IDBObjectStore</em>.name = <em>myNewName</em>;
var <em>myObjectStoreName</em> = <em>IDBObjectStore</em>.name;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} containing the object
    store's name.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>There are a several exceptions which can occur when you attempt to change an object
  store's name.</p>

<dl>
  <dt><code>InvalidStateError</code></dt>
  <dd>Either the object store has been deleted or the current transaction is not an
    upgrade transaction; you can only rename indexes during upgrade transactions; that is,
    when the mode is <code>"versionchange"</code>.</dd>
  <dt><code>TransactionInactiveError</code></dt>
  <dd>The current transaction is not active.</dd>
  <dt><code>ConstraintError</code></dt>
  <dd>An object store is already using the specified <code>name</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>In the following code snippet, we open a read/write transaction on our database and add
  some data to an object store using <code>add()</code>. After the object store has been
  created, we log <code>objectStore.name</code> to
  the console. For a full working example, see
    our <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app
    (><a href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</p>

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
  // Create a new object ready to insert into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // open a read/write db transaction, ready for adding the data
  var transaction = db.transaction(["toDoList"], "readwrite");

  // report on the success of the transaction completing, when everything is done
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction completed.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Transaction not opened due to error. Duplicate items not allowed.&lt;/li&gt;';
  };

  // create an object store on the transaction
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.name);

  // Make a request to add our newItem object to the object store
  var objectStoreRequest = objectStore.add(newItem[0]);

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
