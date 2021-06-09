---
title: 'IDBDatabase: close event'
slug: Web/API/IDBDatabase/close_event
browser-compat: api.IDBDatabase.close_event
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>The <code>close</code> event is fired on <code>IDBDatabase</code> when the database connection is unexpectedly closed. This could happen, for example, if the underlying storage is removed or if the user clears the database in the browser's history preferences.</p>

<p>Note that it is not fired if the database connection is closed normally using <code><a href="/en-US/docs/Web/API/IDBDatabase/close">IDBDatabase.close()</a></code>.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
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
   <td><code><a href="/en-US/docs/Web/API/IDBDatabase/onclose">onerror</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database and listens for the <code>close</code> event:</p>

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
  db.addEventListener('close', () =&gt; {
    console.log('Database connection closed');
  });

};
</pre>

<p>The same example, using the <code>onclose</code> property instead of <code>addEventListener()</code>:</p>

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
  db.onclose = () =&gt; {
    console.log('Database connection closed');
  };

};
</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li><code><a href="/en-US/docs/Web/API/IDBDatabase/onclose">onclose</a></code> event handler property</li>
</ul>
