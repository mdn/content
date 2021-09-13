---
title: IDBIndex.name
slug: Web/API/IDBIndex/name
tags:
- API
- Database
- IDBIndex
- IndexedDB
- Property
- Reference
- Storage
- name
browser-compat: api.IDBIndex.name
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>name</code></strong> property of the {{domxref("IDBIndex")}}
    interface contains a string which names the index.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>indexName</em> = <em>IDBIndex</em>.name;
<em>IDBIndex</em>.name = <em>indexName</em>;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} specifying a name for the index.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>There are a several exceptions which can occur when you attempt to change an index's
  name.</p>

<dl>
  <dt><code>InvalidStateError</code></dt>
  <dd>The index, or its object store, has been deleted; or the current transaction is not
    an upgrade transaction. You can only rename indexes during upgrade transactions; that
    is, when the mode is <code>"versionchange"</code>.</dd>
  <dt><code>TransactionInactiveError</code></dt>
  <dd>The current transaction is not active.</dd>
  <dt><code>ConstraintError</code></dt>
  <dd>An index is already using the specified <code>name</code>.</dd>
</dl>

<h2 id="Example">Example</h2>

<p>In the following example we open a transaction and an object store, then get the
  index <code>lName</code> from a simple contacts database. We then open a basic cursor on
  the index using {{domxref("IDBIndex.openCursor()")}} — this works the same as opening a
  cursor directly on an {{domxref("IDBObjectStore")}} using
  {{domxref("IDBObjectStore.openCursor", "openCursor()")}} except that the returned
  records are sorted based on the index, not the primary key.</p>

<p>The name of the index is logged to the console: it should be returned as
  <code>lName</code>.</p>

<p>Finally, we iterate through each record, inserting the data into an HTML table. For a
  complete working example, see our <a
    href="https://github.com/mdn/indexeddb-examples/tree/master/idbindex">IndexedDB-examples
    demo repo</a> (<a href="https://mdn.github.io/indexeddb-examples/idbindex">View the
    example live</a>).</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.name);

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
