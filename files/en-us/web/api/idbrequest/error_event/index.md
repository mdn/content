---
title: 'IDBRequest: error event'
slug: Web/API/IDBRequest/error_event
tags:
  - Error
  - Event
  - IDBRequest
  - Reference
browser-compat: api.IDBRequest.error_event
---
<p>{{APIRef("IndexedDB")}}</p>

<p>The <code>error</code> handler is executed when an error caused a request to fail.</p>

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
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{DOMxRef("IDBRequest.onerror", "onerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database and tries to add a record, listening for the <code>error</code> event for the <code>add()</code> operation (this will occur if, for example, a record with the given <code>taskTitle</code> already exists):</p>

<pre class="brush: js;">// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.addEventListener('upgradeneeded', event =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
});

DBOpenRequest.addEventListener('success', event =&gt; {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.addEventListener('error', () =&gt; {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  });
});
</pre>

<p>The same example, using the <code>onerror</code> property instead of <code>addEventListener()</code>:</p>

<pre class="brush: js;">// Open the database
const DBOpenRequest = window.indexedDB.open('toDoList', 4);

DBOpenRequest.onupgradeneeded = event =&gt; {
  const db = event.target.result;

  db.onerror = () =&gt; {
    console.log('Error creating database');
  };

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};

DBOpenRequest.onsuccess = event =&gt; {
  const db = DBOpenRequest.result;

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(['toDoList'], 'readwrite');
  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2020 };

  const objectStoreRequest = objectStore.add(newItem);
  objectStoreRequest.onerror = () =&gt; {
    console.log(`Error adding new item: ${newItem.taskTitle}`);
  };
};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>{{DOMxRef("IDBRequest.onerror", "onerror")}} event handler property</li>
</ul>
