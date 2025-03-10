---
title: "Element: scrollHeight property"
short-title: scrollHeight
slug: Web/API/Element/scrollHeight
page-type: web-api-instance-property
browser-compat: api.Element.scrollHeight
---

{{APIRef("DOM")}}

The **`Element.scrollHeight`** read-only property is a
measurement of the height of an element's content, including content not visible on the
screen due to overflow.

![The user's viewport is an element with four regions labeled padding-top, border-top, border-bottom, padding-bottom. The scroll height goes from the container's padding top to the end of the padding bottom, well beyond the top and bottom of the viewport.](scrollheight.png)

The `scrollHeight` value is equal to the minimum height the element would
require in order to fit all the content in the viewport without using a vertical
scrollbar. The height is measured in the same way as {{domxref("Element.clientHeight", "clientHeight")}}:
it includes the element's padding, but not its border, margin or
horizontal scrollbar (if present). It can also include the height of pseudo-elements
such as {{cssxref("::before")}} or {{cssxref("::after")}}. If the element's content can
fit without a need for vertical scrollbar, its `scrollHeight` is equal to
{{domxref("Element.clientHeight", "clientHeight")}}

> [!NOTE]
> This property will round the value to an integer. If you need a fractional value, use
> {{domxref("Element.getBoundingClientRect()")}}.

## Value

An integer corresponding to the scrollHeight pixel value of the element.

## Problems and solutions

### Determine if an element has been totally scrolled

`scrollTop` is a non-rounded number, while `scrollHeight` and `clientHeight` are rounded — so the only way to determine if the scroll area is scrolled to the bottom is by seeing if the scroll amount is close enough to some threshold (in this example `1`):

```js
Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= 1;
```

The following will _not_ work all the time because `scrollTop` can contain decimals:

```js
element.scrollHeight - Math.abs(element.scrollTop) === element.clientHeight;
```

### Determine if the content of an element is overflowing

This function returns a boolean value indicating if the content of an element is overflowing its bounds:

```js
function isOverflowing(element) {
  return element.scrollHeight > element.clientHeight;
}
```

Then, you may want to check if it's scrollable in this case:

```js
function isScrollable(element) {
  return (
    isOverflowing(element) &&
    ["scroll", "auto"].includes(window.getComputedStyle(element).overflowY)
  );
}
```

## Examples

### Checking that the user has read a text

Associated with the {{domxref("Element.scroll_event", "scroll")}} event, this
equivalence can be useful to determine whether a user has read a text or not (see also
the {{domxref("element.scrollTop")}} and {{domxref("element.clientHeight")}}
properties).

The checkbox in the demo below is disabled, and so cannot be checked to show agreement
until the content of the paragraph has been scrolled through. Once checked, the "Next" button can be clicked to continue.

#### HTML

```html
<form id="form" name="registration">
  <p id="info">Read all text to agree</p>
  <div id="very-important-read">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Feugiat sed lectus
      vestibulum mattis. Id consectetur purus ut faucibus pulvinar elementum
      integer enim neque. Metus vulputate eu scelerisque felis imperdiet. Massa
      massa ultricies mi quis hendrerit dolor magna eget est. Rhoncus aenean vel
      elit scelerisque mauris pellentesque. Volutpat est velit egestas dui id
      ornare arcu. Id cursus metus aliquam eleifend mi in. Condimentum lacinia
      quis vel eros donec ac. Feugiat pretium nibh ipsum consequat nisl vel
      pretium lectus.
    </p>
    <p>
      Sit amet volutpat consequat mauris nunc congue nisi vitae. Viverra
      accumsan in nisl nisi scelerisque. Enim ut tellus elementum sagittis
      vitae. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Nisi
      scelerisque eu ultrices vitae. Sem fringilla ut morbi tincidunt augue
      interdum velit. Senectus et netus et malesuada fames ac turpis egestas.
      Nunc non blandit massa enim nec. At augue eget arcu dictum varius duis at.
      Dictumst quisque sagittis purus sit amet. Ut eu sem integer vitae justo.
      Mollis aliquam ut porttitor leo a diam sollicitudin. Mollis nunc sed id
      semper risus in. Eu volutpat odio facilisis mauris sit. Augue interdum
      velit euismod in pellentesque massa placerat duis. Aliquam faucibus purus
      in massa tempor nec feugiat. Nisl rhoncus mattis rhoncus urna neque
      viverra justo. Leo duis ut diam quam nulla. Ultrices dui sapien eget mi
      proin sed libero enim.
    </p>
    <p>
      Cras adipiscing enim eu turpis egestas. Est ultricies integer quis auctor
      elit. Tempor id eu nisl nunc mi ipsum. Non nisi est sit amet facilisis.
      Nisl suscipit adipiscing bibendum est ultricies integer quis. Habitant
      morbi tristique senectus et netus et malesuada. Etiam erat velit
      scelerisque in dictum non consectetur a erat. Diam sollicitudin tempor id
      eu nisl. Aenean vel elit scelerisque mauris pellentesque pulvinar
      pellentesque habitant. A pellentesque sit amet porttitor. Viverra aliquet
      eget sit amet tellus cras. Eu ultrices vitae auctor eu.
    </p>
    <p>
      Fames ac turpis egestas sed tempus. Id donec ultrices tincidunt arcu non
      sodales. Congue mauris rhoncus aenean vel elit scelerisque mauris
      pellentesque. Velit scelerisque in dictum non consectetur a erat nam.
      Auctor elit sed vulputate mi sit amet mauris commodo. Mauris ultrices eros
      in cursus turpis massa tincidunt. Dui sapien eget mi proin sed libero enim
      sed faucibus. Ipsum dolor sit amet consectetur adipiscing elit
      pellentesque habitant. Amet massa vitae tortor condimentum. Feugiat nisl
      pretium fusce id velit. Malesuada proin libero nunc consequat interdum
      varius sit. Quam nulla porttitor massa id neque aliquam vestibulum morbi
      blandit. Gravida arcu ac tortor dignissim convallis aenean et tortor at.
      Dapibus ultrices in iaculis nunc sed. Fermentum et sollicitudin ac orci
      phasellus egestas tellus. Proin libero nunc consequat interdum varius sit
      amet mattis. Sed viverra ipsum nunc aliquet bibendum.
    </p>
  </div>
  <p>
    <input type="checkbox" id="agree" name="accept" disabled />
    <label for="agree">I agree</label>
    <input type="submit" id="next-step" value="Next" disabled />
  </p>
</form>
```

#### CSS

```css
#info {
  margin: 5px;
  display: inline-block;
  font-style: italic;
}

#very-important-read {
  height: 130px;
  padding: 5px;
  border: 2px solid #00b4c5;
  border-radius: 5px;
  overflow: scroll;
}
```

#### JavaScript

```js
const info = document.getElementById("info");
const toAgree = document.getElementById("agree");
const toNextStep = document.getElementById("next-step");
const veryImportantRead = document.getElementById("very-important-read");

// Check if user has scrolled the element to the bottom
function isRead(element) {
  return (
    Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <=
    1
  );
}

function checkScrollToBottom(element) {
  if (isRead(element)) {
    info.innerText = "You have read all text. Agree to continue.";
    toAgree.disabled = false;
  }
}

toAgree.addEventListener("change", (e) => {
  toNextStep.disabled = !e.target.checked;
});

veryImportantRead.addEventListener("scroll", () => {
  checkScrollToBottom(veryImportantRead);
});

toNextStep.addEventListener("click", () => {
  if (toAgree.checked) {
    toNextStep.value = "Done!";
  }
});
```

#### Result

{{EmbedLiveSample('Checking_that_the_user_has_read_a_text', 640, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
