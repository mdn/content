---
title: 'IDBDatabase: abort event'
slug: Web/API/IDBDatabase/abort_event
browser-compat: api.IDBDatabase.abort_event
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>The <code>abort</code> event is fired on <code>IDBDatabase</code> when a transaction is aborted and bubbles up to the connection object.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/IDBDatabase/onabort">onabort</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database (creating the database if it does not exist), then opens a transaction, adds a listener to the <code>abort</code> event, then aborts the transaction to trigger the event.</p>

<pre class="brush: js">// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = (event) =&gt; {
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) =&gt; {
  const db = dBOpenRequest.result;

  db.addEventListener('abort', () =&gt; {
    console.log('Transaction aborted');
  });

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // abort the transaction
  transaction.abort();
};
</pre>

<p>The same example, but assigning the event handler to the <code><a href="/en-US/docs/Web/API/IDBDatabase/onabort">onabort</a></code> property:</p>

<pre class="brush: js">// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = (event) =&gt; {
  const db = event.target.result;

  // Create an objectStore for this database
  const objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

dBOpenRequest.onsuccess = (event) =&gt; {
  const db = dBOpenRequest.result;

  db.onabort = () =&gt; {
    console.log('Transaction aborted');
  };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  // abort the transaction
  transaction.abort();
};

</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li><code><a href="/en-US/docs/Web/API/IDBDatabase/onabort">onabort</a></code> event handler property</li>
</ul>
