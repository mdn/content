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

> **Note:** This property will round the value to an integer. If you need a fractional value, use
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

### Determine if an element is scrollable

When the container does not scroll, but has overflowing children, these checks
determine if the container can scroll:

```js
window.getComputedStyle(element).overflowY === "visible";
window.getComputedStyle(element).overflowY !== "hidden";
```

## Examples

### Checking that the user has read a text

Associated with the {{domxref("Element.scroll_event", "scroll")}} event, this
equivalence can be useful to determine whether a user has read a text or not (see also
the {{domxref("element.scrollTop")}} and {{domxref("element.clientHeight")}}
properties).

The checkbox in the demo below is disabled, and so cannot be checked to show agreement
until the content of the textarea has been scrolled through.

#### HTML

```html
<form name="registration">
  <p>
    <textarea id="rules">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at laoreet magna.
Aliquam erat volutpat. Praesent molestie, dolor ut eleifend aliquam, mi ligula ultrices sapien, quis cursus
neque dui nec risus. Duis tincidunt lobortis purus eu aliquet. Quisque in dignissim magna. Aenean ac lorem at
velit ultrices consequat. Nulla luctus nisi ut libero cursus ultrices. Pellentesque nec dignissim enim. Phasellus
ut quam lacus, sed ultricies diam. Vestibulum convallis rutrum dolor, sit amet egestas velit scelerisque id.
Proin non dignissim nisl. Sed mi odio, ullamcorper eget mattis id, malesuada vitae libero. Integer dolor lorem,
mattis sed dapibus a, faucibus id metus. Duis iaculis dictum pulvinar. In nisi nibh, dapibus ac blandit at, porta
at arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent
dictum ipsum aliquet erat eleifend sit amet sollicitudin felis tempus. Aliquam congue cursus venenatis. Maecenas
luctus pellentesque placerat. Mauris nisl odio, condimentum sed fringilla a, consectetur id ligula. Praesent sem
sem, aliquet non faucibus vitae, iaculis nec elit. Nullam volutpat, lectus et blandit bibendum, nulla lorem congue
turpis, ac pretium tortor sem ut nibh. Donec vel mi in ligula hendrerit sagittis. Donec faucibus viverra fermentum.
Fusce in arcu. Nullam at dignissim massa. Cras nibh est, pretium sit amet faucibus eget, sollicitudin in
ligula. Vivamus vitae urna mauris, eget euismod nunc. Aenean semper gravida enim non feugiat. In hac habitasse
platea dictumst. Cras eleifend nisl volutpat ante condimentum convallis. Donec varius dolor malesuada erat
consequat congue. Donec eu lacus ut sapien venenatis tincidunt. Quisque sit amet tellus et enim bibendum varius et
a orci. Donec aliquet volutpat scelerisque. Proin et tortor dolor. Ut aliquet, dolor a mattis sodales, odio diam
pulvinar sem, egestas pretium magna eros vitae felis. Nam vitae magna lectus, et ornare elit. Morbi feugiat, ipsum
ac mattis congue, quam neque mollis tortor, nec mollis nisl dolor a tortor. Maecenas varius est sit amet elit
interdum quis placerat metus posuere. Duis malesuada justo a diam vestibulum vel aliquam nisi ornare. Integer
laoreet nisi a odio ornare non congue turpis eleifend. Cum sociis natoque penatibus et magnis dis parturient montes,
nascetur ridiculus mus. Cras vulputate libero sed arcu iaculis nec lobortis orci fermentum.
    </textarea>
  </p>
  <p>
    <input type="checkbox" id="agree" name="accept" />
    <label for="agree">I agree</label>
    <input type="submit" id="nextstep" value="Next" />
  </p>
</form>
```

#### CSS

```css
#notice {
  display: inline-block;
  margin-bottom: 12px;
  border-radius: 5px;
  width: 600px;
  padding: 5px;
  border: 2px #7fdf55 solid;
}

#rules {
  width: 600px;
  height: 130px;
  padding: 5px;
  border: #2a9f00 solid 2px;
  border-radius: 5px;
}
```

#### JavaScript

```js
function checkReading() {
  if (checkReading.read) {
    return;
  }
  checkReading.read =
    this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight;
  document.registration.accept.disabled = document.getElementById(
    "nextstep",
  ).disabled = !checkReading.read;
  checkReading.noticeBox.textContent = checkReading.read
    ? "Thank you."
    : "Please, scroll and read the following text.";
}

onload = () => {
  const oToBeRead = document.getElementById("rules");
  checkReading.noticeBox = document.createElement("span");
  document.registration.accept.checked = false;
  checkReading.noticeBox.id = "notice";
  oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
  oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead);
  oToBeRead.onscroll = checkReading;
  checkReading.call(oToBeRead);
};
```

{{EmbedLiveSample('Checking_that_the_user_has_read_a_text', '640', '400')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.clientHeight")}}
- {{domxref("HTMLElement.offsetHeight")}}
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
