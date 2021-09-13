---
title: HTMLMediaElement.networkState
slug: Web/API/HTMLMediaElement/networkState
tags:
  - API
  - HTML DOM
  - Property
  - Read-only
  - Web
browser-compat: api.HTMLMediaElement.networkState
---
{{APIRef("HTML DOM")}}

The
**`HTMLMediaElement.networkState`** property indicates the
current state of the fetching of media over the network.

## Syntax

```js
var networkState = audioOrVideo.networkState;
```

### Value

An `unsigned short`. Possible values are:

| Constant            | Value | Description                                                                           |
| ------------------- | ----- | ------------------------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0     | There is no data yet. Also, `readyState` is `HAVE_NOTHING`.                           |
| `NETWORK_IDLE`      | 1     | HTMLMediaElement is active and has selected a resource, but is not using the network. |
| `NETWORK_LOADING`   | 2     | The browser is downloading HTMLMediaElement data.                                     |
| `NETWORK_NO_SOURCE` | 3     | No HTMLMediaElement src found.                                                        |

## Examples

This example will listen for the audio element to begin playing and then check if it is
still loading data.

```html
<audio id="example" preload="auto">
 <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
var obj = document.getElementById('example');

obj.addEventListener('playing', function() {

  if (obj.networkState === 2) {
    // Still loading...
  }

});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLMediaElement")}}.
