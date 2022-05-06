---
title: Serializable object
slug: Glossary/Serializable_object
tags:
  - Serializable
  - Transferable
  - Structured clone
  - Workers
---

**Serializable objects** are objects that can be serialized and later deserialized in any JavaScript environment ("realm").
This allows them to, for example, be stored on disk and later restored, or cloned with {{domxref("structuredClone()")}}, or shared between workers using {{domxref("DedicatedWorkerGlobalScope.postMessage()")}}.

The serialization may not include all the properties and other aspects of the the original object.
For example, a serialization of a {{domxref("DOMException")}} must include the `name` and `message` properties, but whether it includes other properties is implementation dependent.
As a result, a deserialized object may not be an identical clone/copy of the original object.
The new object will however be a {{glossary("deep copy")}}, so any properties that were serialized will reference their own independent copies of any sub-objects.

In some cases when serializing and deserializing an object it makes sense to transfer some resources rather than creating a copy.
Objects that can be transfered are called {{Glossary("Transferable objects")}}.


## Supported objects

Not all objects are serializable objects.
The object that can be serialized are listed in: [The structured clone algorithm > Supported types](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types)

> **Note:** Serializable objects are marked up in [Web IDL files](https://github.com/w3c/webref/tree/main/ed/idl) with the attribute `[Serializable]`.
