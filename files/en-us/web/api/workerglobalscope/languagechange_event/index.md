---
title: 'WorkerGlobalScope: languagechange event'
slug: Web/API/WorkerGlobalScope/languagechange_event
tags:
  - API
  - Event
  - Reference
  - WorkerGlobalScope
browser-compat: api.WorkerGlobalScope.languagechange_event
---
{{APIRef}}

The **`languagechange`** event is fired at the global scope object when the user's preferred language changes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("WorkerGlobalScope/onlanguagechange", "onlanguagechange")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

You can use the `languagechange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
worker.addEventListener('languagechange', function() {
  console.log('languagechange event detected!');
});
```

Or use the {{domxref("WorkerGlobalScope/onlanguagechange", "onlanguagechange")}} event handler property:

```js
worker.onlanguagechange = function(event) {
  console.log('languagechange event detected!');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerNavigator.language", "navigator.language")}}
- {{domxref("WorkerNavigator.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
- {{domxref("WorkerGlobalScope.onlanguagechange")}}
