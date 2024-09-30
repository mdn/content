---
title: AudioParamMap
slug: Web/API/AudioParamMap
page-type: web-api-interface
browser-compat: api.AudioParamMap
---

{{APIRef("Web Audio API")}}

The **`AudioParamMap`** interface of the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) represents an iterable and read-only set of multiple audio parameters.

An `AudioParamMap` instance is a read-only [`Map`-like object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in which each key is the name string for a parameter, and the corresponding value is an {{domxref("AudioParam")}} containing the value of that parameter.

## Instance properties

The following methods are available to all read-only [`Map`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) (the below links are to the {{jsxref("Map")}} global object reference page).

- {{jsxref("Map/size", "size")}}
  - : Returns the number of entries in the map.

## Instance methods

The following methods are available to all read-only [`Map`-like objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis) (the below links are to the {{jsxref("Map")}} global object reference page).

- {{jsxref("Map/entries", "entries()")}}
  - : Returns a new [iterator object](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator) that yields entries in `[key, value]` pairs in the map in insertion order.
- {{jsxref("Map/forEach", "forEach()")}}
  - : Calls a provided {{glossary("callback function")}} once for each value and key present in the map, in insertion order.
- {{jsxref("Map/get", "get()")}}
  - : Returns the {{domxref("AudioParam")}} value associated with the string key, or `undefined` if there is none.
- {{jsxref("Map/has", "has()")}}
  - : Returns a [boolean](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) indicating whether a key is present in the map or not.
- {{jsxref("Map/keys", "keys()")}}
  - : Returns a new iterator object that yields the string keys in the map in insertion order.
- {{jsxref("Map/values", "values()")}}
  - : Returns a new iterator object that yields the {{domxref("AudioParam")}} values in the map in insertion order.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
