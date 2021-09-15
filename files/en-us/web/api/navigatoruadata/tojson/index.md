---
title: NavigatorUAData.toJSON()
slug: Web/API/NavigatorUAData/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - NavigatorUAData
browser-compat: api.NavigatorUAData.toJSON
---
{{DefaultAPISidebar("")}}

The **`toJSON()`** method of the {{domxref("NavigatorUAData")}} interface is a _serializer_ that returns a JSON representation of the _low entropy_ properties of the `NavigatorUAData` object.

> **Note:** The terms _high entropy_ and _low entropy_ refer to the amount of information these values reveal about the browser. The low entropy values returned by this method are those which do not reveal information able to identify a user. High entropy values can only be returned by the {{domxref("NavigatorUAData.getHighEntropyValues()")}} method.

## Syntax

```js
NavigatorUAData.toJSON();
```

### Parameters

None.

### Return value

A JSON object.

## Examples

The following example prints the JSON object to the console.

```js
console.log(navigator.userAgentData.toJSON());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
