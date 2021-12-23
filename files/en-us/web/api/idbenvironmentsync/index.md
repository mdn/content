---
title: IDBEnvironmentSync
slug: Web/API/IDBEnvironmentSync
tags:
  - API
  - Experimental
  - IndexedDB
  - Interface
  - Deprecated
  - Reference
---
{{APIRef("IndexedDB")}} {{ draft() }}

> **Warning:** The synchronous version of the IndexedDB API was originally intended for use only with [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers), and was eventually removed from the spec because its need was questionable. It may however be reintroduced in the future if there is enough demand from web developers.

The {{ unimplemented_inline() }} `IDBEnvironmentSync` interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) will be implemented by [worker](/en-US/docs/Web/API/Worker) objects.

## Attributes

| Attribute       | Type                      | Description                                                                      |
| --------------- | ------------------------- | -------------------------------------------------------------------------------- |
| `indexedDBSync` | `readonly IDBFactorySync` | Provides a synchronous means of accessing the capabilities of indexed databases. |
