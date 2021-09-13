---
title: IDBCursor.continuePrimaryKey()
slug: Web/API/IDBCursor/continuePrimaryKey
tags:
- API
- IDBCursor
- IndexedDB
- Method
- Reference
- Storage
- Web
browser-compat: api.IDBCursor.continuePrimaryKey
---
<div>{{APIRef("IndexedDB")}}</div>

<p>The <strong><code>continuePrimaryKey()</code></strong> method of the
  {{domxref("IDBCursor")}} interface advances the cursor to the to the item whose key
  matches the key parameter as well as whose primary key matches the primary key
  parameter.</p>

<p>A typical use case, is to resume the iteration where a previous cursor has been closed,
  without having to compare the keys one by one.</p>

<p>Calling this method more than once before new cursor data has been loaded - for
  example, calling <code>continuePrimaryKey()</code> twice from the same onsuccess handler
  - results in an <code>InvalidStateError</code> being thrown on the second call because
  the cursor’s got value flag has been unset.</p>

<p>This method is only valid for cursors coming from an index. Using it for cursors coming
  from an object store will throw an error.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>cursor</em>.continuePrimaryKey(<em>key</em>, <em>primaryKey</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>key</code></dt>
  <dd>The key to position the cursor at.</dd>
  <dt><code>primaryKey</code></dt>
  <dd>The primary key to position the cursor at.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<p>This method may raise a {{domxref("DOMException")}} of one of the following types:</p>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>This IDBCursor's transaction is inactive.</td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>The key parameter may have any of the following conditions:</p>

        <ul>
          <li>The key is not a valid key.</li>
          <li>The key is less than or equal to this cursor's position and the cursor's
            direction is <code>next</code> or <code>nextunique</code>.</li>
          <li>The key is greater than or equal to this cursor's position and this cursor's
            direction is <code>prev</code> or <code>prevunique</code>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>The cursor is currently being iterated or has iterated past its end.</td>
    </tr>
    <tr>
      <td><code>InvalidAccessError</code></td>
      <td>The cursor's direction is not <code>prev</code> or <code>next</code>.</td>
    </tr>
  </tbody>
</table>

<h2 id="Example">Example</h2>

<p>here’s how you can resume an iteration of all articles tagged with
  <code>"javascript"</code> since your last visit:</p>

<pre class="brush: js">let request = articleStore.index("tag").openCursor();
let count = 0;
let unreadList = [];
request.onsuccess = (event) =&gt; {
    let cursor = event.target.result;
    if (!cursor) { return; }
    let lastPrimaryKey = getLastIteratedArticleId();
    if (lastPrimaryKey &gt; cursor.primaryKey) {
      cursor.continuePrimaryKey("javascript", lastPrimaryKey);
      return;
    }
    // update lastIteratedArticleId
    setLastIteratedArticleId(cursor.primaryKey);
    // preload 5 articles into the unread list;
    unreadList.push(cursor.value);
    if (++count &lt; 5) {
      cursor.continue();
    }
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
