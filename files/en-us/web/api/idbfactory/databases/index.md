---
title: "IDBFactory: databases() method"
short-title: databases()
slug: Web/API/IDBFactory/databases
page-type: web-api-instance-method
browser-compat: api.IDBFactory.databases
---

{{ APIRef("IndexedDB") }} {{AvailableInWorkers}}

The **`databases`** method of the {{domxref("IDBFactory")}} interface returns a {{jsxref("Promise")}} that fulfills with an array of objects containing the name and version of all the available databases.

This is a snapshot of the databases, intended primarily to allow web applications to check what databases have been created — in order to, for example, clean up databases created by earlier versions of application code.

## Syntax

```js-nolint
databases()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with an array of objects representing a snapshot of the available databases (or rejects with the error/exceptions below).

Each array object has the following properties:

- `name`
  - : A database name.
- `version`
  - : The database version.

Note that the sequence on the returned objects is undefined.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}

  - : Thrown if the method is called from an [opaque origin](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802#42242802) or the user has disabled storage.

- `UnknownError` {{domxref("DOMException")}}
  - : Thrown if the set of available databases cannot be determined for any reason.

## Examples

### Create and list databases

This example creates/opens a number of databases.
On successful initialization of each database it lists all the available databases.

```html hidden
<pre id="log"></pre>
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```css hidden
#log {
  height: 240px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

First we define the function that is used to get and log the available databases.
This awaits on the promise returned by `indexedDB.databases()` and then iterates the array and lists the values of each element:

```js
async function getDb() {
  const databases = await indexedDB.databases();
  log("List databases:");
  databases.forEach((element) => {
    log(`name: ${element.name}, version: ${element.version}`);
  });
}
```

To demonstrate how the above function is used, below we create two databases.
For each database, we log just before the database is opened.
We also log on successful initialization (or error) and then also log the available databases.

```js
// Create a database named toDoList with default version (1)
const dbName1 = "toDoList";
log(`Opening: ${dbName1}`);
let DBOpenRequest = window.indexedDB.open(dbName1);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName1}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName1}`);
  getDb();
});

// Create database "AnotherDb"
const dbName2 = "AnotherDb";
log(`Opening ${dbName2}`);
DBOpenRequest = window.indexedDB.open(dbName2, 2);

DBOpenRequest.addEventListener("error", (event) => {
  log(`Error opening: ${dbName2}`);
  getDb();
});

DBOpenRequest.addEventListener("success", (event) => {
  log(`Initialized: ${dbName2}`);
  getDb();
});
```

#### Result

The result is shown below. Note that the time taken to get the databases and their order is undefined.

{{EmbedLiveSample('Create and list databases', '100%', '280px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([View the example live](https://mdn.github.io/dom-examples/to-do-notifications/)).
