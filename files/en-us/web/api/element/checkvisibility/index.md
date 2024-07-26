---
title: "Element: checkVisibility() method"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
page-type: web-api-instance-method
browser-compat: api.Element.checkVisibility
---

{{APIRef("DOM")}}

The **`checkVisibility()`** method of the {{domxref("Element")}} interface checks whether the element is visible.

The method returns `false` in either of the following situations:

- The element doesn't have an associated box, for example because the CSS {{cssxref("display")}} property is set to [`none`](/en-US/docs/Web/CSS/display#none) or [`contents`](/en-US/docs/Web/CSS/display#contents).
- The element is not being rendered because the element or an ancestor element sets the {{cssxref("content-visibility")}} property to [`hidden`](/en-US/docs/Web/CSS/content-visibility#hidden).

The optional parameter enables additional checks to test for other interpretations of what "visible" means.
For example, you can further check whether an element has an opacity of `0`, if the value of the element [`visibility`](/en-US/docs/Web/CSS/visibility) property makes it invisible, or if the element {{cssxref("content-visibility")}} property has a value of [`auto`](/en-US/docs/Web/CSS/content-visibility#auto) and its rendering is currently being skipped.

## Syntax

```js-nolint
checkVisibility(options)
```

### Parameters

- `options` {{optional_inline}}

  - : An object indicating additional checks to run.
    The possible options are:

    - `contentVisibilityAuto`
      - : `true` to check if the element {{cssxref("content-visibility")}} property has (or inherits) the value [`auto`](/en-US/docs/Web/CSS/content-visibility#auto), and it is currently skipping its rendering.
        `false` by default.
    - `opacityProperty`
      - : `true` to check if the element {{cssxref("opacity")}} property has (or inherits) a value of `0`.
        `false` by default.
    - `visibilityProperty`

      - : `true` to check if the element is invisible due to the value of its {{cssxref("visibility")}} property.
        `false` by default.

        > [!NOTE]
        > Invisible elements include those that have [`visibility: hidden`](/en-US/docs/Web/CSS/visibility#hidden), and some element types that have [`visibility: collapse`](/en-US/docs/Web/CSS/visibility#collapse).

    - `checkOpacity`
      - : A historic alias for [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : A historic alias for [`visibilityProperty`](#visibilityproperty).

### Return value

`false` if any of the following conditions are met, otherwise `true`:

- The element doesn't have an associated box.
- The element {{cssxref("content-visibility")}} property has (or inherits) a value of [`hidden`](/en-US/docs/Web/CSS/visibility#hidden).
- `opacityProperty` (or `checkOpacity`) is `true` and the element {{cssxref("opacity")}} property has (or inherits) a value of `0`.
- `visibilityProperty` (or `checkVisibilityCSS`) is `true` and the element is invisible due to the value of its {{cssxref("visibility")}} property.
- `contentVisibilityAuto` is `true`, the {{cssxref("content-visibility")}} property has (or inherits) a value of [`auto`](/en-US/docs/Web/CSS/content-visibility#auto), and element rendering is being skipped.

## Examples

### Test checkVisibility() with varied CSS

The following example allows you to test how the result of `checkVisibility()` might change with different values for `display`, `content-visibility`, `visibility`, and `opacity` CSS properties.

#### HTML

The HTML defines a `<select>` element for the CSS properties that affect the results of `checkVisibility()`.
The first (default selected) values should result in `checkVisibility()` returning `true` when applied to an element, while the other values affect the visibility.

```html
<select id="css_display" name="css_display">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="content">display: content</option>
</select>

<select id="css_content_visibility" name="css_content_visibility">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacity" name="css_opacity">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibility" name="css_visibility">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

Next we have a `<pre>` that is used to output the result of the `checkVisibility()` check when no options are passed in the parameter, and for each separate option value.
At the end we have the element that will be tested (to which we will apply the selected CSS property values).

```html
<pre id="output_result"></pre>
<div id="test_element">The element to be checked for visibility.</div>
```

#### CSS

The CSS just highlights the element to be tested.

```css
#test_element {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

The code below gets each of the `<select>` elements.
The `updateCSS()` method is called on start and whenever the select elements change in order to apply the selected CSS to the target element,

```js
const displayCssSelect = document.getElementById("css_display");
const contentVisibilityCssSelect = document.getElementById(
  "css_content_visibility",
);
const displayCssOpacity = document.getElementById("css_opacity");
const displayCssVisibility = document.getElementById("css_visibility");

const outputResult = document.getElementById("output_result");
const elementToCheck = document.getElementById("test_element");

updateCSS();

const cssSelectors = document.querySelectorAll("select");
cssSelectors.forEach((select) => {
  select.addEventListener("change", (event) => {
    updateCSS();
  });
});

function updateCSS() {
  // Apply selected CSS properties to target element
  elementToCheck.style.display = displayCssSelect.value;
  elementToCheck.style.contentVisibility = contentVisibilityCssSelect.value;
  elementToCheck.style.opacity = displayCssOpacity.value;
  elementToCheck.style.visibility = displayCssVisibility.value;

  // Call checkVisibility() on element using default and each of options
  const defaultVisibilityCheck = elementToCheck.checkVisibility();
  const opacityVisibilityCheck = elementToCheck.checkVisibility({
    opacityProperty: true,
  });
  const cssVisibilityCheck = elementToCheck.checkVisibility({
    visibilityProperty: true,
  });
  const contentVisibilityAutoCheck = elementToCheck.checkVisibility({
    contentVisibilityAuto: true,
  });

  // Output the results of the tests
  outputResult.innerText = `Checks on element below (may be hidden):
- Result of checkVisibility(): ${defaultVisibilityCheck}
- Result of checkVisibility({opacityProperty: true}): ${opacityVisibilityCheck}
- Result of checkVisibility({visibilityProperty: true}): ${cssVisibilityCheck}
- Result of checkVisibility({contentVisibilityAuto: true}): ${contentVisibilityAutoCheck}`;
}
```

#### Result

The results are shown below.
If you change the selection the results will be applied to the test element (blue outline) and the results of the `checkVisibility()` for each setting should be displayed.
So for example, if you set the `opacity: 0` that test (only) should indicate `false`.
However if you set `display: none` then all tests should return `false.

{{ EmbedLiveSample('Test checkVisibility() with varied CSS', "100%", "200" ) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
