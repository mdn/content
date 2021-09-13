---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
tags:
  - API
  - DOM
  - DOM Element Methods
  - EventTarget
  - Gecko
  - Method
  - Reference
  - browser compatibility
  - removeEventListener
browser-compat: api.EventTarget.removeEventListener
---
{{APIRef("DOM Events")}}

The
**`EventTarget.removeEventListener()`** method removes from
the {{domxref("EventTarget")}} an event listener previously registered with
{{domxref("EventTarget.addEventListener()")}}. The event listener to be removed is
identified using a combination of the event type, the event listener function itself,
and various optional options that may affect the matching process; see
{{anch("Matching event listeners for removal")}}

Note that event listeners can also be removed by passing an {{domxref("AbortSignal")}} to an {{domxref("EventTarget/addEventListener()", "addEventListener()")}} and then later calling {{domxref("AbortController/abort()", "abort()")}} on the controller owning the signal.

## Syntax

```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### Parameters

- `type`
  - : A string which specifies the type of event for which to remove an event listener.
- `listener`
  - : The {{domxref("EventListener")}} function of the event handler to remove from the
    event target.
- `options` {{optional_inline}}

  - : An options object that specifies characteristics about the event listener.

    The available options are:

    - `capture`: A boolean value which indicates that
      events of this type will be dispatched to the registered
      `listener` before being dispatched to any
      {{domxref("EventTarget")}} beneath it in the DOM tree.
    - {{non-standard_inline}} `mozSystemGroup`: A
      boolean value available only for code running in XBL or in Firefox's
      chrome which indicates if the listener will be added to the system group.

- `useCapture` {{optional_inline}}

  - : Specifies whether the {{domxref("EventListener")}} to be removed is registered as a
    capturing listener or not. If this parameter is absent, a default value of
    `false` is assumed.

    If a listener is registered twice, one with capture and one without, you must remove
    each one separately. Removal of a capturing listener does not affect a non-capturing
    version of the same listener, and vice versa.

### Return value

{{jsxref("undefined")}}

### Matching event listeners for removal

Given an event listener previously added by calling
{{domxref("EventTarget.addEventListener", "addEventListener()")}}, you may eventually
come to a point at which you need to remove it. Obviously, you need to specify the same
`type` and `listener` parameters to
`removeEventListener()`. But what about the `options`
or `useCapture` parameters?

While `addEventListener()` will let you add the same listener more than once
for the same type if the options are different, the only option
`removeEventListener()` checks is the
`capture`/`useCapture` flag. Its value must
match for `removeEventListener()` to match, but the other values don't.

For example, consider this call to `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Now consider each of these two calls to `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // Fails
element.removeEventListener("mousedown", handleMouseDown, true);      // Succeeds
```

The first call fails because the value of `useCapture` doesn't match. The
second succeeds, since `useCapture` matches up.

Now consider this:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Here, we specify an `options` object in which
`passive` is set to `true`, while the other options are left to
the default value of `false`.

Now look at each of these calls to `removeEventListener()` in turn. Any of
them in which `capture` or `useCapture` is
`true` fail; all others succeed.

Only the `capture` setting matters to `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                 // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);                  // Fails
```

It's worth noting that some browser releases have been inconsistent on this, and unless
you have specific reasons otherwise, it's probably wise to use the same values used for
the call to `addEventListener()` when calling
`removeEventListener()`.

## Notes

If an {{domxref("EventListener")}} is removed from an {{domxref("EventTarget")}} while
it is processing an event, it will not be triggered by the current actions. An
{{domxref("EventListener")}} will not be invoked for the event it was registered for
after being removed. However, it can be reattached.

Calling `removeEventListener()` with arguments that do not identify any
currently registered {{domxref("EventListener")}} on the `EventTarget` has no
effect.

## Example

This example shows how to add a `mouseover`-based event listener that
removes a `click`-based event listener.

```js
const body = document.querySelector('body')
const clickTarget = document.getElementById('click-target')
const mouseOverTarget = document.getElementById('mouse-over-target')

let toggle = false;
function makeBackgroundYellow() {
    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

mouseOverTarget.addEventListener('mouseover', function () {
    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
    );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Polyfill to support older browsers

`addEventListener()` and `removeEventListener()` are not present
in older browsers. You can work around this by inserting the following code at the
beginning of your scripts, allowing the use of `addEventListener()` and
`removeEventListener()` in implementations that do not natively support it.
However, this method will not work on Internet Explorer 7 or earlier, since extending
the `Element.prototype` was not supported until Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

## See also

- {{domxref("EventTarget.addEventListener()")}}
