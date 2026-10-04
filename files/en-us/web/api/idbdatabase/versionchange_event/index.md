---
title: "IDBDatabase: versionchange event"
short-title: versionchange
slug: Web/API/IDBDatabase/versionchange_event
page-type: web-api-event
browser-compat: api.IDBDatabase.versionchange_event
---

{{APIRef("IndexedDB")}}

The `versionchange` event is fired when a database structure change ([`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) event sent on an [`IDBOpenDBRequest`](/en-US/docs/Web/API/IDBOpenDBRequest)) or a deletion ([`IDBFactory.deleteDatabase`](/en-US/docs/Web/API/IDBFactory/deleteDatabase)) was requested from another connection — most probably another window or tab of the same page on the same computer.

Because the browser cannot change the schema while other connections are open, the requested upgrade or deletion is **blocked** until every other open connection is closed. Your `versionchange` handler is therefore the only place where you can make that happen; if you do not close the connection from it, the page that requested the change is stuck until the user closes every tab that still has the database open.

An open connection whose code knows an older schema is also a correctness hazard: it can keep reading and writing using the structure it was written against, so a change made by another tab can silently be read back as corrupt or missing data. Handling `versionchange` by closing the connection promptly is what keeps the two tabs from stepping on each other.

The `open` request in the other tab receives [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event) for as long as your connection stays open. Once you have closed it, that tab's [`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) runs and the new version is in effect. Because the schema can move on while your tab is still running the old code, it is also worth handling [`VersionError`](/en-US/docs/Web/API/IDBRequest/error_event) — it is raised when an attempt is made to [open the database](/en-US/docs/Web/API/IDBFactory/open) with a version number that is now outdated.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("versionchange", (event) => { });

onversionchange = (event) => { };
```

## Event type

A generic {{domxref("Event")}}.

## Examples

The important thing a `versionchange` handler can do is close the database, so that the tab that asked for the change is unblocked. A common pattern is to close the connection and tell the user to reload:

```js
const dbOpenRequest = window.indexedDB.open("toDoList", 1);

dbOpenRequest.onsuccess = (event) => {
  const db = event.target.result;

  db.onversionchange = () => {
    // Another tab asked for a newer version. Close our connection so the
    // other tab's upgradeneeded can run, then ask the user to reload.
    db.close();
    document.querySelector("p").textContent =
      "A new version of this page is ready. Please reload or close this tab.";
  };
};
```

A tab that requests the change should show the state of the request to the user, so that a block on another tab is not mistaken for a failure:

```js
const dbOpenRequest = window.indexedDB.open("toDoList", 2);

// Another tab still holds the database open and has not yet run its
// versionchange handler, so the upgrade is deferred.
dbOpenRequest.onblocked = () => {
  document.querySelector("p").textContent =
    "Still waiting for other tabs to close the database.";
};

dbOpenRequest.onupgradeneeded = (event) => {
  const db = event.target.result;
  db.createObjectStore("toDoList", { keyPath: "taskTitle" });
};

dbOpenRequest.onsuccess = (event) => {
  const db = event.target.result;
  document.querySelector("p").textContent = "Version " + db.version;
};
```

For the full account of how this fits into an app's lifecycle, including what happens to stale connections, see the [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
