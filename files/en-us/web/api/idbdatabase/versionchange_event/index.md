---
title: 'IDBDatabase: versionchange event'
slug: Web/API/IDBDatabase/versionchange_event
tags:
  - Event
  - IDBDatabase
  - Reference
  - versionchange
browser-compat: api.IDBDatabase.versionchange_event
---
<p>{{APIRef("IndexedDB")}}</p>

<p>The <code>versionchange</code> event is fired when a database structure change (<a href="/en-US/docs/Web/API/IDBOpenDBRequest/onupgradeneeded" title="In the following example you can see the onupgradeneeded handler being used to update the database structure if a database with a higher version number is loaded. For a full working example, see our To-do Notifications app (view example live.)"><code>IDBOpenDBRequest.onupgradeneeded</code></a> event or <a href="/en-US/docs/Web/API/IDBFactory/deleteDatabase" title="The deleteDatabase() method of the IDBFactory interface requests the deletion of a database. The method returns an IDBOpenDBRequest object immediately, and performs the deletion operation asynchronously."><code>IDBFactory.deleteDatabase</code></a>) was requested.</p>

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
   <td>{{DOMxRef("IDBDatabase.onversionchange", "onversionchange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example opens a database and, on success, adds a listener to <code>versionchange</code>:</p>

<pre class="brush: js;">// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = event =&gt; {
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

dBOpenRequest.addEventListener('success', event =&gt; {
  const db = event.target.result;
  db.addEventListener('versionchange', event =&gt; {
    console.log('The version of this database has changed');
  });

});</pre>

<p>The same example, using the <code>onversionchange</code> event handler property:</p>

<pre class="brush: js;">// Open the database
const dBOpenRequest = window.indexedDB.open('Nonexistent', 4);

dBOpenRequest.onupgradeneeded = event =&gt; {
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

dBOpenRequest.onsuccess = event =&gt; {
  const db = event.target.result;
  db.onversionchange = event =&gt; {
    console.log('The version of this database has changed');
  };

};</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>{{DOMxRef("IDBDatabase.onversionchange", "onversionchange")}} event handler property</li>
</ul>
