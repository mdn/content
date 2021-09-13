---
title: 'Window: storage event'
slug: Web/API/Window/storage_event
tags:
  - API
  - Event
  - Reference
  - Storage
  - Web Storage
  - Window
browser-compat: api.Window.storage_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>storage</code></strong> event of the {{domxref("Window")}} interface fires when a storage area (<code>localStorage</code>) has been modified in the context of another document.</p>

<div class="notecard note">
  <p><strong>Note:</strong> This won't work on the same page that is making the changes — it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <th>Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{domxref("StorageEvent")}}</td>
  </tr>
  <tr>
   <th>Event handler property</th>
   <td>{{domxref("WindowEventHandlers.onstorage", "onstorage")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Log the <code>sampleList</code> item to the console when the <code>storage</code> event fires:</p>

<pre class="brush: js">window.addEventListener('storage', () =&gt; {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
});</pre>

<p>The same action can be achieved using the <code><a href="/en-US/docs/Web/API/WindowEventHandlers/onstorage">onstorage</a></code> event handler property:</p>

<pre class="brush: js">window.onstorage = () =&gt; {
  // When local storage changes, dump the list to
  // the console.
  console.log(JSON.parse(window.localStorage.getItem('sampleList')));
};
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API">Web Storage API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Using the Web Storage API</a></li>
 <li><a href="/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#responding_to_storage_changes_with_the_storageevent">Responding to storage changes with the StorageEvent</a></li>
</ul>
