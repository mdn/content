---
title: IDBCursor.source
slug: Web/API/IDBCursor/source
tags:
- API
- Database
- IDBCursor
- IndexedDB
- Property
- Reference
- Storage
- source
browser-compat: api.IDBCursor.source
---
<p>{{APIRef("IndexedDB")}}</p>

<div>
  <p>The <strong><code>source</code></strong> read-only property of the
    {{domxref("IDBCursor")}} interface returns the {{domxref("IDBObjectStore")}} or
    {{domxref("IDBIndex")}} that the cursor is iterating over. This function never returns
    null or throws an exception, even if the cursor is currently being iterated, has
    iterated past its end, or its transaction is not active.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>source = cursor</em>.source;</pre>

<h3 id="Value">Value</h3>

<p>The {{domxref("IDBObjectStore")}} or {{domxref("IDBIndex")}} that the cursor is
  iterating over.</p>

<h2 id="Example">Example</h2>

<p>In this simple fragment we create a transaction, retrieve an object store, then use a
  cursor to iterate through all the records in the object store. Within each iteration we
  log the source of the cursor, which will log our {{domxref("IDBobjectStore")}} object to
  the console, something like this:</p>

<pre
  class="brush: json">IDBObjectStore {autoIncrement: false, transaction: IDBTransaction, indexNames: DOMStringList, keyPath: "albumTitle", name: "rushAlbumList"…}</pre>

<p>The cursor does not require us to select the data based
    on a key; we can just grab all of it. Also note that in each iteration of the loop,
    you can grab data from the current record under the cursor object using <code>cursor.value.foo</code>. For a complete working example, see our <a
      href="https://github.com/mdn/indexeddb-examples/blob/master/idbcursor">IDBCursor
      example</a> (<a href="https://mdn.github.io/indexeddb-examples/idbcursor/">view example live</a>.)</p>

<pre class="brush: js">function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      console.log(cursor.source);
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
