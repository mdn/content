---
title: "IDBDatabase: versionchange event"
short-title: versionchange
slug: Web/API/IDBDatabase/versionchange_event
page-type: web-api-event
browser-compat: api.IDBDatabase.versionchange_event
---

{{APIRef("IndexedDB")}}

The `versionchange` event is fired when a database structure change ([`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) event sent on an [`IDBOpenDBRequest`](/en-US/docs/Web/API/IDBOpenDBRequest)) or a deletion ([`IDBFactory.deleteDatabase`](/en-US/docs/Web/API/IDBFactory/deleteDatabase)) was requested from another connection — most probably another window or tab of the same page on the same computer.

An upgrade or deletion cannot proceed while other connections to the database are open: it waits until every other connection has been closed. Handling `versionchange` by calling {{domxref("IDBDatabase.close()")}} is the usual way to let it proceed; if the connection stays open, the request in the other tab stays pending until the connection is closed, for example when the user closes the tab.

If connections are still open after the `versionchange` events have been dispatched, the request that asked for the change receives a [`blocked`](/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event) event. Once the remaining connections are closed, an upgrade continues with that request's [`upgradeneeded`](/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event) event. Code that keeps running after closing its connection should also expect that reopening the database with its old version number now fails with a `VersionError`, because the requested version is lower than the database's current version.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("versionchange", (event) => { })

onversionchange = (event) => { }
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

// Another tab still has the database open (it did not close its connection
// in response to versionchange), so the upgrade has to wait.
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

See also [Version changes while a web app is open in another tab](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#version_changes_while_a_web_app_is_open_in_another_tab) in the Using IndexedDB guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
