---
title: 'Element: click event'
slug: Web/API/Element/click_event
tags:
  - API
  - DOM
  - Element
  - Event
  - Interface
  - MouseEvent
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Reference
  - UI
  - click
  - mouse
browser-compat: api.Element.click_event
---
{{APIRef}}

An element receives a **`click`** event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("GlobalEventHandlers.onclick", "onclick")}}
      </td>
    </tr>
  </tbody>
</table>

If the button is pressed on one element and the pointer is moved outside the element before the button is released, the event is fired on the most specific ancestor element that contained both elements.

`click` fires after both the {{domxref("Element/mousedown_event", "mousedown")}} and {{domxref("Element/mouseup_event", "mouseup")}} events have fired, in that order.

## Usage notes

The {{domxref("MouseEvent")}} object passed into the event handler for `click` has its {{domxref("UIEvent/detail", "detail")}} property set to the number of times the {{domxref("Event.target", "target")}} was clicked. In other words, `detail` will be 2 for a double-click, 3 for triple-click, and so forth. This counter resets after a short interval without any clicks occurring; the specifics of how long that interval is may vary from browser to browser and across platforms. The interval is also likely to be affected by user preferences; for example, accessibility options may extend this interval to make it easier to perform multiple clicks with adaptive interfaces.

### Internet Explorer

Internet Explorer 8 & 9 suffer from a bug where elements with a computed {{cssxref("background-color")}} of [`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword) that are overlaid on top of other element(s) won't receive `click` events. Any `click` events will be fired at the underlying element(s) instead. See [this live example](https://jsfiddle.net/YUKma/show/) for a demonstration.

Known workarounds for this bug:

- For IE9 only:

  - Set {{cssxref("background-color")}}`: rgba(0,0,0,0)`
  - Set {{cssxref("opacity")}}`: 0` and an explicit {{cssxref("background-color")}} other than [`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword)

- For IE8 and IE9: Set `filter: alpha(opacity=0);` and an explicit {{cssxref("background-color")}} other than [`transparent`](/en-US/docs/Web/CSS/color_value#transparent_keyword)

### Safari Mobile

Safari Mobile 7.0+ (and likely earlier versions too) [suffers from a bug](https://bugs.webkit.org/show_bug.cgi?id=153887) where `click` events aren't fired on elements that aren't typically interactive (e.g. {{HTMLElement("div")}}) and which also don't have event listeners directly attached to the elements themselves (i.e. [event delegation](https://davidwalsh.name/event-delegate) is being used). See [this live example](https://jsfiddle.net/cvrhulu/k9t0sdnf/show/) for a demonstration. See also [Safari's docs on making elements clickable](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW6) and the [definition of "clickable element"](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safariwebcontent/HandlingEvents/HandlingEvents.html#//apple_ref/doc/uid/TP40006511-SW7).

Known workarounds for this bug:

- Set {{cssxref("cursor")}}`: pointer;` on the element or any of its ancestors.
- Add a dummy `onclick="void(0)"` attribute to the element or any of its ancestors up to but not including {{HTMLElement("body")}}.
- Use a typically interactive element (e.g., {{HTMLElement("a")}}) instead of one that isn't typically interactive (e.g., {{HTMLElement("div")}}).
- Stop using `click` [event delegation](https://davidwalsh.name/event-delegate).

Safari Mobile considers the following elements to be typically interactive (and thus they aren't affected by this bug):

- {{HTMLElement("a")}} (but it must have an `href`)
- {{HTMLElement("area")}} (but it must have an `href`)
- {{HTMLElement("button")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}} (but it must be associated with a form control)
- {{HTMLElement("textarea")}}
- _This list is incomplete; you can help MDN by doing further testing/research and expanding it._

## Examples

This example displays the number of consecutive clicks on a {{HtmlElement("button")}}.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### Result

Try making rapid, repeated clicks on the button to increase the click count. If you take a break between clicks, the count will reset.

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Introduction to events](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
