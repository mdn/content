---
title: 'SVGAnimationElement: endEvent event'
slug: Web/API/SVGAnimationElement/endEvent_event
tags:
  - API
  - Reference
  - SMIL
  - SVG animations
  - SVGAnimationElement
  - events
browser-compat: api.SVGAnimationElement.endEvent_event
---
{{APIRef("SVG")}}

The `endEvent` event of the {{domxref("SVGAnimationElement")}} interface is fired when at the active end of the animation is reached.

> **Note:** This event is not raised at the simple end of each animation repeat. This event may be raised both in the course of normal (i.e. scheduled or interactive) timeline play, as well as in the case that the element was ended with a DOM method.

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
          ><a href="/en-US/docs/Web/API/SVGAnimationElement/onend"
            >onend</a
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

<button>Stop animation</button>

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
let btn = document.querySelector('button');

animateElem.addEventListener('beginEvent', () => {
  let listItem = document.createElement('li');
  listItem.textContent = 'beginEvent fired';
  list.appendChild(listItem);
})

animateElem.addEventListener('endEvent', () => {
  let listItem = document.createElement('li');
  listItem.textContent = 'endEvent fired';
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

btn.addEventListener('click', () => {
  btn.disabled = true;
  animateElem.setAttribute('repeatCount', '1');
})
```

{{EmbedLiveSample('Animated_circle', '100%', '300')}}

### Event handler property equivalent

Note that you can also create an event listener for the `end` event using the [`onend`](/en-US/docs/Web/API/SVGAnimationElement/onend) event handler property:

```js
animateElem.onend = () => {
  console.log('endEvent fired');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SVG animation with SMIL](/en-US/docs/SVG/SVG_animation_with_SMIL)
- {{event("beginEvent")}}
- {{event("repeatEvent")}}
