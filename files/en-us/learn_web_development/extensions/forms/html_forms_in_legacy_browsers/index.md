---
title: HTML forms in legacy browsers
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
page-type: guide
---

{{LearnSidebar}}

All web developers learn very quickly (and sometimes painfully) that the Web is a very rough place for them. Our worst curse is legacy browsers. This used to mean "Internet Explorer", but there are millions of people using old devices, especially mobile phones, where neither the browser nor the OS can be updated.

Dealing with this wilderness is part of the job. Fortunately, there are a few tricks to know that can help you to solve most of the problems caused by legacy browsers. If a browser doesn't support an HTML {{htmlelement('input')}} type, it doesn't fail: it just uses the default value of `type=text`.

## Learn about the issues

To understand common patterns, it helps to read documentation. If you are reading this on [MDN](/), you are at the right place to start. Just check the support of the elements (or DOM interfaces) you want to use. MDN has compatibility tables available for most elements, properties and APIs that can be used in a web page.

Because [HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms) involves complex interaction, there is one important rule: keep it simple, also known as the "[KISS principal](https://en.wikipedia.org/wiki/KISS_principle)". There are so many cases where we want forms that are "nicer" or "with advanced functionality", but building efficient HTML Forms is not a question of design or technology. Rather, it's about simplicity, intuitiveness, and ease of user interaction. The tutorial, [forms usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) explains it well.

### Graceful degradation is web developer's best friend

[Graceful degradation and progressive enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) are development patterns that allow you to build great stuff by supporting a wide range of browsers at the same time. When you build something for a modern browser, and you want to be sure it will work, one way or another, on legacy browsers, you are performing graceful degradation.

Let's see some examples related to HTML forms.

#### HTML input types

All HTML input types are useable in all browsers, even ancient ones, because the way they degrade is highly predictable. If a browser does not know the value of the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute of an {{HTMLElement("input")}} element, it will fall back as if the value were `text`.

```html
<label for="myColor">
  Pick a color
  <input type="color" id="myColor" name="color" />
</label>
```

<table class="no-markdown">
  <thead>
    <tr>
      <th>Supported</th>
      <th>Not supported</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          alt="Screen shot of the color input on Chrome for Mac OSX"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screen shot of the color input on Firefox for Mac OSX"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Form buttons

There are two ways to define buttons within HTML forms:

- The {{HTMLElement("input")}} element with its attribute [`type`](/en-US/docs/Web/HTML/Element/input#type) set to the values `button`, `submit`, `reset` or `image`
- The {{HTMLElement("button")}} element

##### {{HTMLElement("input")}}

The {{HTMLElement("input")}} element can make things a little difficult if you want to apply some CSS by using the element selector:

```html
<input type="button" value="click me" />
```

If we remove the border on all inputs, can we restore the default appearance on input buttons only?

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #ccc;
}
input[type="button"] {
  /* This does NOT restore the default rendering */
  border: none;
}
input[type="button"] {
  /* These don't either! Actually there is no standard way to do it in any browser */
  border: auto;
  border: initial;
}
input[type="button"] {
  /* This will come the closest to restoring default rendering. */
  border: revert;
}
```

See the global CSS {{cssxref('revert')}} value for more information.

### Let go of CSS

One of the big issues with HTML Forms is styling form widgets with CSS. Form controls appearance is browser and operating system specific. For example, the input of color type looks different in Safari, Chrome and Firefox browser, but the color picker widget is the same in all browsers on a device as it opens up the operating system's native color picker.

It's generally a good idea to not alter the default appearance of form control because altering one CSS property value may alter some input types but not others. For example, if you declare `input { font-size: 2rem; }`, it will impact `number`, `date`, and `text`, but not `color` or `range`. If you alter a property, that may impact the appearance of the widget in unexpected ways. For example, `[value] { background-color: #ccc; }` may have been used to target every {{HTMLElement("input")}} with a `value` attribute, but changing the background-color or border radius on a {{HTMLElement("meter")}} will lead to likely unexpected results that differ across browsers. You can declare {{cssxref('appearance', 'appearance: none;')}} to remove the browser styles, but that generally defeats the purpose: as you lose all styling, removing the default look and feel your visitors are used to.

To summarize, when it comes to styling form control widgets, the side effects of styling them with CSS can be unpredictable. So don't. Even if it's still possible to do a few adjustments on text elements (such as sizing or font color), there are always side effects. The best approach remains to not style HTML Form widgets at all. But you can still apply styles to all the surrounding items. And, if you must alter the default styles of your form widgets, define a style guide to ensure consistency among all your form controls so user experience is not destroyed. You can also investigate some hard techniques such as [rebuilding widgets with JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls). But in that case, do not hesitate to [charge your client for such foolishness](https://www.smashingmagazine.com/2011/11/but-the-client-wants-ie-6-support/).

## Feature detection and polyfills

CSS and JavaScript are awesome technologies, but it's important to ensure you don't break legacy browsers. Before using features that aren't fully supported in the browsers your targeting, you should feature detect:

### CSS feature detection

Before styling a replaced form control widget, you can check to see if the browser supports the features you plan on using {{cssxref('@supports')}}:

```css
@supports (appearance: none) {
  input[type="search"] {
    appearance: none;
    /* restyle the search input */
  }
}
```

The {{cssxref('appearance')}} property can be used to display an element using platform-native styling, or, as is done with the value of `none`, remove default platform-native based styling.

### Unobtrusive JavaScript

One of the biggest problems is the availability of APIs. For that reason, it's considered best practice to work with "unobtrusive" JavaScript. It's a development pattern that defines two requirements:

- A strict separation between structure and behaviors.
- If the code breaks, the content and the basic functionalities must remain accessible and usable.

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (originally written by Peter-Paul Koch for Dev.Opera.com) describes these ideas very well.

### Pay attention to performance

Even though some polyfills are very aware of performance, loading additional scripts can affect the performance of your application. This is especially critical with legacy browsers; many of them have a very slow JavaScript engine that can make the execution of all your polyfills painful for the user. Performance is a subject on its own, but legacy browsers are very sensitive to it: basically, they are slow and the more polyfills they need, the more JavaScript they have to process. So they are doubly burdened compared to modern browsers. Test your code with legacy browsers to see how they actually perform. Sometimes, dropping some functionality leads to a better user experience than having exactly the same functionality in all browsers. As a last reminder, just always think about the end users.

## Conclusion

As you can see, considering browser and operating system default form control appearance is important. There are many techniques to handle these issue; however mastering all of them is beyond the scope of this article. The basic premise is to consider whether altering the default implementation is worth the work before embarking on the challenge.

If you read all the articles of this [HTML Forms guide](/en-US/docs/Learn_web_development/Extensions/Forms), you should now be at ease with using forms. If you discover new techniques or hints, please help improve the guide.

## See also

### Learning path

- [Your first HTML form](/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [HTML5 input types](/en-US/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
- [Additional form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
- [UI pseudo-classes](/en-US/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
- [Styling HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Form data validation](/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- [Sending forms through JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
- **HTML forms in legacy browsers**
- [Advanced styling for HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
