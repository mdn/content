---
title: 'IDBOpenDBRequest: upgradeneeded event'
slug: Web/API/IDBOpenDBRequest/upgradeneeded_event
tags:
  - Event
  - IDBOpenDBRequest
  - Reference
  - upgradeneeded
browser-compat: api.IDBOpenDBRequest.upgradeneeded_event
---
<p>{{APIRef("IndexedDB")}}</p>

<p>The <code>upgradeneeded</code> event is fired when an attempt was made to open a database with a version number higher than its current version.</p>

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
   <td>{{DOMxRef("IDBVersionChangeEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler</th>
   <td>{{DOMxRef("IDBOpenDBRequest.onupgradeneeded", "onupgradeneeded")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database and handles the <code>upgradeneeded</code> event by making any necessary updates to the object store.</p>

<pre class="brush: js">// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.addEventListener('upgradeneeded', event =&gt; {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
});</pre>

<p>This is the same example, but uses the onupgradeneeded event handler property.</p>

<pre class="brush: js">// Open the database
const dBOpenRequest = window.indexedDB.open('toDoList', 4);

dBOpenRequest.onupgradeneeded = event =&gt; {
  const db = event.target.result;
  console.log(`Upgrading to version ${db.version}`);

  // Create an objectStore for this database
  var objectStore = db.createObjectStore('toDoList', { keyPath: 'taskTitle' });

  // define what data items the objectStore will contain
  objectStore.createIndex('hours', 'hours', { unique: false });
  objectStore.createIndex('minutes', 'minutes', { unique: false });
  objectStore.createIndex('day', 'day', { unique: false });
  objectStore.createIndex('month', 'month', { unique: false });
  objectStore.createIndex('year', 'year', { unique: false });
};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>{{DOMxRef("IDBOpenDBRequest.onupgradeneeded", "onupgradeneeded")}} event handler property</li>
</ul>
