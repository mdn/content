---
title: IDBObjectStore.deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
tags:
- API
- Database
- IDBObjectStore
- IndexedDB
- Method
- Reference
- Storage
- deleteIndex
browser-compat: api.IDBObjectStore.deleteIndex
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>deleteIndex()</code></strong> method of the
    {{domxref("IDBObjectStore")}} interface destroys the index with the specified name in
    the connected database, used during a version upgrade.</p>
</div>

<p>Note that this method must be called only from a <code>VersionChange</code> transaction
  mode callback. Note that this method synchronously modifies the
  {{domxref("IDBObjectStore.indexNames")}} property.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>objectStore</em>.deleteIndex(<em>indexName</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>indexName</dt>
  <dd>The name of the existing index to remove.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref('undefined')}}</p>

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
      <td><code>InvalidStateError</code></td>
      <td>Occurs if the method was not called from
        a <code>versionchange</code> transaction mode callback.</td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>Occurs if the transaction this {{domxref("IDBObjectStore")}} belongs to is not
        active (e.g. has been deleted or removed.) In Firefox previous to version 41, an
        <code>InvalidStateError</code> was raised in this case as well, which was
        misleading; this has now been fixed (see {{Bug("1176165")}}.)</td>
    </tr>
    <tr>
      <td><code>NotFoundError</code></td>
      <td>Occurs if there is no index with the given name (case-sensitive) in the
        database.<br>
         </td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In the following example you can see
  the {{domxref("IDBOpenDBRequest.onupgradeneeded")}} handler being used to update the
  database structure if a database with a higher version number is loaded.
  {{domxref("IDBObjectStore.createIndex")}} is used to create new indexes on the object
  store, after which we delete the unneeded old indexes with <code>deleteIndex()</code>.
   For a full working example, see our <a class="external"
    href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do
    Notifications</a> app (<a class="external"
    href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</p>

<pre class="brush: js">var db;

// Let us open our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Error loading database.&lt;/li&gt;';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // store the result of opening the database in the db variable. This is used a lot below
  db = this.result;

  // Run the displayData() function to populate the task list with all the to-do list data already in the IDB
  displayData();
};

// This event handles the event whereby a new version of the database needs to be created
// Either one has not been created before, or a new version number has been submitted via the
// window.indexedDB.open line above
//it is only implemented in recent browsers
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Error loading database.&lt;/li&gt;';
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // define what data items the objectStore will contain

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });

  objectStore.deleteIndex("seconds");
  objectStore.deleteIndex("contact");

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
