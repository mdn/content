---
title: IDBRequest.onerror
slug: Web/API/IDBRequest/onerror
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Property
  - Reference
  - Storage
  - onerror
browser-compat: api.IDBRequest.onerror
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>onerror</code></strong> event handler of the
    {{domxref("IDBRequest")}} interface handles the <code>error</code> event, fired when a
    request returns an error.</p>

  <p>The event handler takes one parameter, an error <a
      href="/en-US/docs/Web/API/Element/error_event">Event</a> with type="error".</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">request.onerror = function(event) { ... };</pre>

<h2 id="Example">Example</h2>

<p>The following example requests a given record title, <code>onsuccess</code> gets the
  associated record from the {{domxref("IDBObjectStore")}} (made available as 
  <code>objectStoreTitleRequest.result</code>), updates one property of the record, and then puts the
  updated record back into the object store. Also included at the bottom is
  an <code>onerror</code> function that reports what the error was if the request fails.
  For a full working example, see our <a href="https://github.com/mdn/to-do-notifications/">To-do
    Notifications</a> app (<a href="https://mdn.github.io/to-do-notifications/">view
    example live</a>.)</p>

<pre class="brush: js">var title = "Walk dog";

// Open up a transaction as usual
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Get the to-do list object that has this title as it's title
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // Grab the data object returned as the result
  var data = objectStoreTitleRequest.result;

  // Update the notified value in the object to "yes"
  data.notified = "yes";

  // Create another request that inserts the item back
  // into the database
  var updateTitleRequest = objectStore.put(data);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function() {
  // If an error occurs with the request, log what it is
  console.log("There has been an error with retrieving your data: " + objectStoreTitleRequest.error);
  // TODO what about event parameter into onerror()? What will be inside of this event?
};</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
  <li><a href="/en-US/docs/Web/API/Element/error_event">Error Event</a></li>
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
