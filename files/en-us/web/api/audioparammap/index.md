---
title: AudioParamMap
slug: Web/API/AudioParamMap
page-type: web-api-interface
tags:
  - Draft
browser-compat: api.AudioParamMap
---
{{APIRef("Web Audio API")}}

The Web Audio API interface **`AudioParamMap`** represents a set of multiple audio parameters, each described as a mapping of a string identifying the parameter to the {{domxref("AudioParam")}} object representing its value.

## Properties

The `AudioParamMap` object is accessed as a {{jsxref("Map")}} in which each parameter is identified by a name string which is mapped to an `AudioParam` containing the value of that parameter. In addition, there are the following properties available:

- {{domxref("AudioParamMap.size", "size")}}
  - : ?

## Methods

- {{domxref("AudioParamMap.entries", "entries()")}}
  - : ?
- {{domxref("AudioParamMap.forEach", "forEach()")}}
  - : ?
- {{domxref("AudioParamMap.has", "has()")}}
  - : ?
- {{domxref("AudioParamMap.keys", "keys()")}}
  - : ?
- {{domxref("AudioParamMap.values", "values()")}}
  - : ?

## Browser compatibility

{{Compat}}
