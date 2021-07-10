---
title: IDBRequest.readyState
slug: Web/API/IDBRequest/readyState
tags:
- API
- Database
- IDBRequest
- IndexedDB
- Property
- Reference
- Storage
- readyState
browser-compat: api.IDBRequest.readyState
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
  <p>The <strong><code>readyState</code></strong> read-only property of the
    {{domxref("IDBRequest")}} interface returns the state of the request.</p>

  <p>>Every request starts in the <code>pending</code> state. The state changes to
    <code>done</code> when the request completes successfully or when an error
      occurs.</p>

  <p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>currentReadyState</em> = <em>request</em>.readyState;</pre>

<h3 id="Value">Value</h3>

<p>The {{domxref("IDBRequestReadyState")}} of the request, which takes one of the
  following two values:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Value</th>
      <th scope="col">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>pending</code></td>
      <td>The request is pending.</td>
    </tr>
    <tr>
      <td><code>done</code></td>
      <td>The request is done.<br>
         </td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>The following example requests a given record title, <code>onsuccess</code> gets the
  associated record from the {{domxref("IDBObjectStore")}} (made available
  as <code>objectStoreTitleRequest.result</code>), updates
    one property of the record, and then puts the updated record back into the object
    store in another request. The <code>readyState</code> of the 2nd request is logged to
    the developer console. For a full working example, see our 
    <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app
    (<a href="https://mdn.github.io/to-do-notifications/">view example live</a>.)</p>

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

  // Create another request that inserts the item
  // back into the database
  var updateTitleRequest = objectStore.put(data);

  // Log the source of this request
  console.log("The readyState of this request is " + updateTitlerequest.readyState);

  // When this new request succeeds, run the displayData()
  // function again to update the display
  updateTitleRequest.onsuccess = function() {
    displayData();
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
