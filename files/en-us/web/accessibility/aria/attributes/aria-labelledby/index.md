---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Attributes/aria-labelledby
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-labelledby
---

The `aria-labelledby` attribute identifies the element (or elements) that labels the element it is applied to.

## Description

The `aria-labelledby` property enables authors to reference other elements on the page to define an accessible name. This is useful when using elements that don't have native support for associating elements to provide an accessible name.

Some elements get their [accessible name](https://w3c.github.io/accname/#dfn-accessible-name) from their inner content. For example, the accessible name for a {{HTMLElement('button')}}, {{HTMLElement('a')}}, or {{HTMLElement('td')}} comes from the text between the opening and closing tags. Other elements, such as form {{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}}, and {{HTMLElement('table')}} get their accessible name from the content of associated elements; for these elements, the accessible name comes from the {{HTMLElement('label')}} with a `for` attribute, {{HTMLElement('legend')}}, and {{HTMLElement('caption')}} respectively.

All interactive elements must have an accessible name. `aria-labelledby` can be used to reference another element to define its accessible name, when an element's accessible name needs to use content from elsewhere in the DOM.

If there is no content that can be referenced to create an accessible name, the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute should be used instead.

The purpose of `aria-labelledby` is the same as that of `aria-label`. It provides the user with a recognizable, accessible name for an interactive element. If an element has both attributes set, `aria-labelledby` will be used. `aria-labelledby` takes precedence over all other methods of providing an accessible name, including `aria-label`, {{HTMLElement('label')}}, and the element's inner text.

The `aria-labelledby` and [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attributes both reference other elements to calculate text alternatives. `aria-labelledby` should reference brief text that provides the element with an accessible name. `aria-describedby` is used to reference longer content that provides a description. If there is no element in the DOM that provides a brief label appropriate for an accessible name for an interactive element, use `aria-label` to define the accessible name for an interactive element.

> **Note:** While in U.S. English the attribute would be assumed to be spelled "labeledby", the "labelledby" spelling has been established and is the spelling used in accessibility APIs.

The following example uses `aria-labelledby` to provide an accessible name for a checkbox input by using the text content of a sibling element:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Note that while using `aria-labelledby` is similar in this situation to using an HTML {{HTMLElement('label')}} element with the `for` attribute, there are some very important differences. The `aria-labelledby` attribute only defines the accessible name. It doesn't provide any of `<label>`'s other functionality, such as making clicking on the labeling element activate the input it is associated with. That has to be added back in with JavaScript.

Fortunately, the HTML {{HTMLElement('input')}} with `type="checkbox"` works with native `<label>`. When feasible, use the following:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Benefits (and drawbacks)

1. The `aria-labelledby` property has the highest precedence when browsers calculate accessible names. Be aware that it overrides other methods of naming the element, including `aria-label`, other naming attributes, and even the element's contents.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In this example, that accessible name is "Yellow".

2. The `aria-labelledby` property takes as value a space-separated id reference list, which means you can combine more than one element into a single accessible name. You can include the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of the element itself to reference its own content.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In this example, the accessible name is "read more 13 ARIA attributes you need to know".

3. The `aria-labelledby` property value order matters. When more than one element is referenced by `aria-labelledby`, the content from each referenced element is combined in the order that they are referenced in the `aria-labelledby` value. Had we written `aria-labelledby="attr rm13">`, the accessible name would have been "13 ARIA attributes you need to know read more".

4. The `aria-labelledby` property ignores repeated `id`s in its value. If an element is referenced more than one time, only the first reference is processed. `aria-labelledby="attr attr rm13 rm13">` is treated as `aria-labelledby="attr rm13">`

5. The `aria-labelledby` property value can include content from elements that aren't even visible. While you should provide assistive technology users with the same content as all other users, you can include content from elements with the HTML [`hidden`](/en-US/docs/Web/HTML/Global_attributes#hidden) attribute, CSS [`display: none`](/en-US/docs/Web/CSS/display), and CSS [`visibility: hidden`](/en-US/docs/Web/CSS/visibility) in the calculated name string.

6. The `aria-labelledby` property incorporates the value of input elements. If the value references an `<input>`, the current value of the form control is included in the calculated name string, changing if the value is updated.

7. The `aria-labelledby` property cannot be chained. If an element with `aria-labelledby` references another element that also has `aria-labelledby`, the `aria-labelledby` attribute on the referenced element is ignored.

> **Warning:** Because calculating the name of an element with `aria-labelledby` can be complex and reference hidden content, testing with assistive technologies to ensure the expected name is presented to users is very important.

## Values

- ID reference list
  - : Space separated list of one or more ID values referencing the elements that label the current element.

## Associated roles

Used in almost all roles **except** roles that can not be provided an accessible name by the author.

The `aria-labelledby` attribute is **NOT** supported in:

- [`code`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`caption`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`deletion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`emphasis`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`generic`](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role)
- [`insertion`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`mark`](/en-US/docs/Web/Accessibility/ARIA/Roles/mark_role)
- [`paragraph`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) / [`none`](/en-US/docs/Web/Accessibility/ARIA/Roles/none_role)
- [`strong`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`subscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`superscript`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)
- [`suggestion`](/en-US/docs/Web/Accessibility/ARIA/Roles/suggestion_role)
- [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role)
- [`time`](/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles)

## Specifications

{{Specifications}}

## See Also

- HTML {{HTMLElement('label')}} element
- HTML {{HTMLElement('legend')}} element
- HTML {{HTMLElement('caption')}} element
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
