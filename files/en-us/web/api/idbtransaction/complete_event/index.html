---
title: 'IDBTransaction: complete event'
slug: Web/API/IDBTransaction/complete_event
tags:
  - Event
  - IDBTransaction
  - Reference
  - complete
browser-compat: api.IDBTransaction.complete_event
---
<div>{{APIRef("IndexedDB")}}</div>

<p>The <code>complete</code> handler is executed when a transaction successfully completed.</p>

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
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Using {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}:</p>

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

  // add a listener for `complete`
  transaction.addEventListener('complete', event =&gt; {
    console.log('Transaction was competed');
  });

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2019 };
  const objectStoreRequest = objectStore.add(newItem);
};

</pre>

<p>Using the {{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} property:</p>

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

  // add a listener for `complete`
  transaction.oncomplete = event =&gt; {
    console.log('Transaction was competed');
  };

  const objectStore = transaction.objectStore('toDoList');
  const newItem = { taskTitle: 'my task', hours: 10, minutes: 10, day: 10, month: 'January', year: 2019 };
  const objectStoreRequest = objectStore.add(newItem);
};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>{{DOMxRef("IDBTransaction.oncomplete", "oncomplete")}} event handler property</li>
</ul>
