---
title: 'IDBTransaction: error event'
slug: Web/API/IDBTransaction/error_event
browser-compat: api.IDBTransaction.error_event
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>The <code>error</code> event is fired on <code>IDBTransaction</code> when a request returns an error and the event bubbles up to the transaction object.</p>

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
   <td><code><a href="/en-US/docs/Web/API/IDBTransaction/onerror">onerror</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database and tries to add a record, listening for the <code>error</code> event for the <code>add()</code> operation (this will occur if, for example, a record with the given <code>taskTitle</code> already exists):</p>

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

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  transaction.addEventListener('error', () =&gt; {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
};
</pre>

<p>The same example, using the <code>onerror</code> property instead of <code>addEventListener()</code>:</p>

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

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');

  transaction.onerror = () =&gt; {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li><code><a href="/en-US/docs/Web/API/IDBTransaction/onerror">onerror</a></code> event handler property</li>
</ul>
