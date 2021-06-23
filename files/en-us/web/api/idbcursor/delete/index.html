---
title: IDBCursor.delete()
slug: Web/API/IDBCursor/delete
tags:
- API
- Database
- IDBCursor
- IndexedDB
- Method
- Reference
- Storage
- delete
browser-compat: api.IDBCursor.delete
---
<div>{{APIRef("IndexedDB")}}</div>

<p>The <strong><code>delete()</code></strong> method of the {{domxref("IDBCursor")}}
  interface returns an {{domxref("IDBRequest")}} object, and, in a separate thread,
  deletes the record at the cursor's position, without changing the cursor's position.
  Once the record is deleted, the cursor's value is set to null.</p>

<p>Be aware that you can't call <code>delete()</code> (or
  {{domxref("IDBCursor.update()")}}) on cursors obtained from
  {{domxref("IDBIndex.openKeyCursor()")}}. For such needs, you have to use
  {{domxref("IDBIndex.openCursor()")}} instead.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>myIDBCursor</em>.delete();</pre>

<h3 id="Returns">Returns</h3>

<p>An {{domxref("IDBRequest")}} object on which subsequent events related to this
  operation are fired. The result attribute is set to undefined.</p>

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
      <td><code>TransactionInactiveError</code></td>
      <td>This IDBCursor's transaction is inactive.</td>
    </tr>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>The transaction mode is read-only.</td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>The cursor was created using {{domxref("IDBindex.openKeyCursor")}}, is currently
        being iterated, or has iterated past its end.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In this simple fragment we create a transaction, retrieve an object store, then use a
  cursor to iterate through all the records in the object store. If the
  <code>albumTitle</code> of the current cursor is "Grace under pressure", we delete that
  entire record using <code>var request = cursor.delete();</code>.</p>

<p>The cursor does not require us to select the data based on a key; we can just grab all
  of it. Also note that in each iteration of the loop, you can grab data from the current
  record under the cursor object using <code>cursor.value.foo</code>. For a complete
  working example, see our <a href="https://github.com/mdn/IDBcursor-example/">IDBCursor
    example</a> (<a href="https://mdn.github.io/IDBcursor-example/">view example
    live</a>.)</p>

<pre class="brush: js">function deleteResult() {
  list.textContent = '';
  const transaction = db.transaction(['rushAlbumList'], 'readwrite');
  const objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if(cursor) {
      if(cursor.value.albumTitle === 'Grace under pressure') {
        const request = cursor.delete();
        request.onsuccess = function() {
          console.log('Deleted that mediocre album from 1984. Even Power windows is better.');
        };
      } else {
        const listItem = document.createElement('li');
        listItem.innerHTML = '&lt;strong&gt;' + cursor.value.albumTitle + '&lt;/strong&gt;, ' + cursor.value.year;
        list.appendChild(listItem);
      }
      cursor.continue();
    } else {
      console.log('Entries displayed.');
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
