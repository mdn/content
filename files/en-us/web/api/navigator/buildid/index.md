---
title: Navigator.buildID
slug: Web/API/Navigator/buildID
page-type: web-api-instance-property
tags:
  - API
  - Gecko
  - HTML DOM
  - Navigator
  - Property
  - Non-standard
browser-compat: api.Navigator.buildID
---
{{ApiRef("HTML DOM")}}{{Non-standard_Header}}

Returns the build identifier of the browser. In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. `20181001000000` in Firefox 64 onwards.

## Value

A string representing the build identifier of the application. The build ID is in the form `YYYYMMDDHHMMSS`.

## Examples

```js
console.log(navigator.buildID);
```

## Specifications

Not part of any public standard.

## Browser compatibility

{{Compat}}
