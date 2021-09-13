---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
tags:
- API
- Database
- IDBCursor
- IndexedDB
- Method
- Reference
- Storage
- advance
browser-compat: api.IDBCursor.advance
---
<div>{{APIRef("IndexedDB")}}</div>

<p>The <strong><code>advance()</code></strong> method of the {{domxref("IDBCursor")}}
  interface sets the number of times a cursor should move
    its position forward.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>cursor</em>.advance(<em>count</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>count</code></dt>
  <dd>The number of times to move the cursor forward.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<p>This method may raise a {{domxref("DOMException")}} of
    one of the following types:</p>

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
      <td><code>TypeError</code></td>
      <td>The value passed into the <code>count</code> parameter was zero or a negative
        number.</td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>The cursor is currently being iterated or has iterated past its end.<br>
         </td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>In this simple fragment we create a transaction, retrieve an object store, then use a
  cursor to iterate through the records in the object store. Here we use
  <code>cursor.advance(2)</code> to jump 2 places forward each time, meaning that only
  every other result will be displayed. <code>advance()</code> works in a similar way to
  {{domxref("IDBCursor.continue")}}, except that it allows you to jump multiple records at
  a time, not just always go onto the next record.</p>

<p>Note that in each iteration of the loop, you can grab
    data from the current record under the cursor object using <code
    >cursor.value.foo</code>. For a complete working example, see our <a
      href="https://github.com/mdn/indexeddb-examples/tree/master/idbcursor">IDBCursor
      example</a> (<a href="https://mdn.github.io/indexeddb-examples/idbcursor/">view example live</a>.)></p>

<pre class="brush: js">function advanceResult() {
  list.textContent = '';
  const transaction = db.transaction(['rushAlbumList'], "readonly");
  const objectStore = transaction.objectStore('rushAlbumList');

  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if(cursor) {
      const listItem = document.createElement('li');
      listItem.innerHTML = '&lt;strong&gt;' + cursor.value.albumTitle + '&lt;/strong&gt;, ' + cursor.value.year;
      list.appendChild(listItem);
      cursor.advance(2);
    } else {
      console.log('Every other entry displayed.');
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
