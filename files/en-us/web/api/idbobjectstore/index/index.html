---
title: IDBObjectStore.index()
slug: Web/API/IDBObjectStore/index
tags:
- API
- Database
- IDBObjectStore
- Index
- IndexedDB
- Method
- NeedsExample
- Reference
- Storage
browser-compat: api.IDBObjectStore.index
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>index()</code></strong> method of the {{domxref("IDBObjectStore")}}
    interface opens a named index in the current object store, after which it can be used
    to, for example, return a series of records sorted by that index using a cursor. </p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>index</em> = <em>objectStore</em>.index(<em>name</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>name</dt>
  <dd>The name of the index to open.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>An {{domxref("IDBIndex")}} object for accessing the index.</p>

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
      <td>The source object store has been deleted, or the transaction for the object
        store has finished.</td>
    </tr>
    <tr>
      <td><code>NotFoundError</code></td>
      <td>There is no index with the given name (case-sensitive) in the database.<br>
         </td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In the following example we open a transaction and an object store, then get the index
  <code>lName</code> from a simple contacts database. We then open a basic cursor on the
  index using {{domxref("IDBIndex.openCursor")}} — this works the same as opening a cursor
  directly on an <code>ObjectStore</code> using {{domxref("IDBObjectStore.openCursor")}}
  except that the returned records are sorted based on the index, not the primary key.</p>

<p>Finally, we iterate through each record, and insert the data into an HTML table. For a
  complete working example, see our <a
    href="https://github.com/mdn/indexeddb-examples/tree/master/idbindex">IDBIndex example
    in IndexedDB-examples demo repo</a> (<a
    href="https://mdn.github.io/indexeddb-examples/idbindex">View the example live</a>.)
</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  myIndex.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '&lt;td&gt;' + cursor.value.id + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.lName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.fName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.jTitle + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.company + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.eMail + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.phone + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.age + '&lt;/td&gt;';
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
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
