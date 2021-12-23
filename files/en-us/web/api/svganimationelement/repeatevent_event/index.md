---
title: 'SVGAnimationElement: repeatEvent event'
slug: Web/API/SVGAnimationElement/repeatEvent_event
tags:
  - API
  - Reference
  - SMIL
  - SVG animations
  - SVGAnimationElement
  - events
browser-compat: api.SVGAnimationElement.repeatEvent_event
---
{{APIRef("SVG")}}

The `repeatEvent` event of the {{domxref("SVGAnimationElement")}} interface is fired when the element's local timeline repeats. It will be fired each time the element repeats, after the first iteration.

> **Note:** Associated with the `repeatEvent` event is an integer that indicates which repeat iteration is beginning; this can be found in the `detail` property of the event object. The value is a 0-based integer, but the repeat event is not raised for the first iteration and so the observed values will be >= 1. This is supported in Firefox, but not in Chrome.

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
      <td>{{domxref("TimeEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/SVGAnimationElement/onrepeat"
            >onrepeat</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Animated circle

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <title>SVG SMIL Animate with Path</title>
  <circle cx="0" cy="50" r="50" fill="blue" stroke="black" stroke-width="1">
    <animateMotion
       path="M 0 0 H 300 Z"
       dur="5s" repeatCount="indefinite" />
  </circle>
</svg>

<hr>

<ul>

</ul>
```

```css
ul {
  height: 100px;
  border: 1px solid #ddd;
  overflow-y: scroll;
  padding: 10px 30px;
}
```

```js
let svgElem = document.querySelector('svg');
let animateElem = document.querySelector('animateMotion');
let list = document.querySelector('ul');

animateElem.addEventListener('beginEvent', () => {
  let listItem = document.createElement('li');
  listItem.textContent = 'beginEvent fired';
  list.appendChild(listItem);
})

animateElem.addEventListener('repeatEvent', (e) => {
  let listItem = document.createElement('li');
  let msg = 'repeatEvent fired';
  if(e.detail) {
    msg += '; repeat number: ' + e.detail;
  }
  listItem.textContent = msg;
  list.appendChild(listItem);
})
```

{{EmbedLiveSample('Animated_circle', '100%', '270')}}

### Event handler property equivalent

Note that you can also create an event listener for the `repeat` event using the [`onrepeat`](/en-US/docs/Web/API/SVGAnimationElement/onrepeat) event handler property:

```js
animateElem.onrepeat = () => {
  console.log('repeatEvent fired');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG animation with SMIL](/en-US/docs/SVG/SVG_animation_with_SMIL)
- {{event("beginEvent")}}
- {{event("endEvent")}}
