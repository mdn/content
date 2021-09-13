---
title: IDBTransaction.commit()
slug: Web/API/IDBTransaction/commit
tags:
  - API
  - IDBTransaction
  - Method
  - Reference
  - Web
  - commit
browser-compat: api.IDBTransaction.commit
---
<p>{{ APIRef("IndexedDB") }}</p>

<p>The <strong><code>commit()</code></strong> method of the {{domxref("IDBTransaction")}} interface commits the transaction if it is called on an active transaction.</p>

<p>Note that <code>commit()</code> doesn't normally <em>have</em> to be called — a transaction will automatically commit when all outstanding requests have been satisfied and no new requests have been made. <code>commit()</code> can be used to start the commit process without waiting for events from outstanding requests to be dispatched.</p>

<p>If it is called on a transaction that is not active, it throws an {{exception("InvalidStateError")}} <code>DOMException</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre><em>transaction</em>.commit();</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h3 id="Exceptions">Exceptions</h3>

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
   <td>The transaction state is not active.</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<pre>// open a read/write db transaction, ready for adding the data
var transaction = db.transaction(["myDB"], "readwrite");

// report on the success of opening the transaction
transaction.oncomplete = function(event) {
  note.innerHTML += '&lt;li&gt;Transaction completed: database modification finished.&lt;/li&gt;';
};

transaction.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Transaction not opened due to error. Duplicate items not allowed.&lt;/li&gt;';
};

// create an object store on the transaction
var objectStore = transaction.objectStore("myObjStore");

// add our newItem object to the object store
var objectStoreRequest = objectStore.add(newItem[0]);

objectStoreRequest.onsuccess = function(event) {
  // report the success of the request (this does not mean the item
  // has been stored successfully in the DB - for that you need transaction.onsuccess)
  note.innerHTML += '&lt;li&gt;Request successful.&lt;/li&gt;';
};

// Force the changes to be committed to the database asap
transaction.commit();
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
 <li>Reference example: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
