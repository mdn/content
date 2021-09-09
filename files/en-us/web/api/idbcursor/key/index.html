---
title: IDBCursor.key
slug: Web/API/IDBCursor/key
tags:
- API
- Database
- IDBCursor
- IndexedDB
- Key
- Property
- Reference
- Storage
browser-compat: api.IDBCursor.key
---
<p>{{APIRef("IndexedDB")}}</p>

<div>
  <p>The <strong><code>key</code></strong> read-only property of the
    {{domxref("IDBCursor")}} interface returns the key for the record at the cursor's
    position. If the cursor is outside its range, this is set to undefined. The cursor's
    key can be any data type.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>key = cursor</em>.key;</pre>

<h3 id="Value">Value</h3>

<p>A value of any type.</p>

<h2 id="Example">Example</h2>

<p>In this simple fragment we create a transaction, retrieve an object store, then use a
  cursor to iterate through all the records in the object store. Within each iteration we
  log the key of the cursor to the console, something like this (its the album title in
  each case, which is our key).</p>

<p>The cursor does not require us to select the data based
    on a key; we can just grab all of it. Also note that in each iteration of the loop,
    you can grab data from the current record under the cursor object using <code
    >cursor.value.foo</code>. For a complete working example, see our <a
      href="https://github.com/mdn/indexeddb-examples/tree/master/idbcursor">IDBCursor
      example</a> (<a href="https://mdn.github.io/indexeddb-examples/idbcursor/">view example live</a>.)</p>

<pre class="brush:js">function displayData() {
  var transaction = db.transaction(['rushAlbumList'], "readonly");
  var objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var listItem = document.createElement('li');
      listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
      list.appendChild(listItem);

      console.log(cursor.key);
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
