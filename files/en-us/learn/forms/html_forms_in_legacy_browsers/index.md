---
title: HTML forms in legacy browsers
slug: Learn/Forms/HTML_forms_in_legacy_browsers
tags:
  - Example
  - Forms
  - Guide
  - HTML
  - Intermediate
  - Web
---
{{LearnSidebar}}

All web developers learn very quickly (and sometimes painfully) that the Web is a very rough place for them. Our worst curse is legacy browsers. Okay, let's admit it, when we said "legacy browser" we all have in mind Safari or old versions of Internet Explorer, but they are far from the only ones. In the mobile world, when neither the browser nor the OS can be updated such as on older Android phones or iPhones, the stock browsers that don't update are also legacy browsers.

Dealing with this wilderness is part of the job. Fortunately, there are a few tricks to know that can help you to solve most of the problems caused by legacy browsers. And HTML5 {{htmlelement('input')}} types don't fail when not supported: they fall back to `type=text`.

## Learn about the issues

To understand common patterns, it helps to read browser documentation. If you are reading this on [MDN](/), you are at the right place to start. Just check the support of the elements (or DOM interface) you want to use. MDN has compatibility tables available for most elements, properties and APIs that can be used in a web page. There are other resources that can be amazingly helpful:

### Browser vendor documentation

- Mozilla: You're in the right place, just browse MDN
- Microsoft: [Internet Explorer Standards Support Documentation](https://msdn.microsoft.com/en-us/library/ff410218%28v=vs.85%29.aspx)
- WebKit: Because there are several different editions of this engine, things are a little trickier.

  - [The WebKit blog](https://www.webkit.org/blog/) and [Planet WebKit](https://planet.webkit.org/) aggregate the best articles by WebKit core developers.
  - [Chrome platform status site](https://www.chromestatus.com/features) is also important.
  - As well as [the Apple web site.](https://developer.apple.com/technologies/safari/)

## Make things simple

Because [HTML forms](/en-US/docs/Learn/Forms) involves complex interaction, there is one rule of thumb: keep it simple, also known as the "[KISS principal](https://en.wikipedia.org/wiki/KISS_principle)". There are so many cases where we want forms that are "nicer" or "with advanced functionality", but building efficient HTML Forms is not a question of design or technology. Rather, it's about simplicity, intuitiveness, and ease of user interaction. The tutorial, [forms usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) explains it well.

### Graceful degradation is web developer's best friend

[Graceful degradation and progressive enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) are development patterns that allow you to build great stuff by supporting a wide range of browsers at the same time. When you build something for a modern browser, and you want to be sure it will work, one way or another, on legacy browsers, you are performing graceful degradation.

Let's see some examples related to HTML forms.

#### HTML input types

The input types added in HTML5 are all useable, even in ancient browsers, because the way they degrade is highly predictable. If a browser does not know the value of the {{htmlattrxref("type","input")}} attribute of an {{HTMLElement("input")}} element, it will fall back as if the value were `text`.

```html
<label for="myColor">
  Pick a color
  <input type="color" id="myColor" name="color">
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

- The {{HTMLElement("input")}} element with its attribute {{htmlattrxref("type","input")}} set to the values `button`, `submit`, `reset` or `image`
- The {{HTMLElement("button")}} element

##### {{HTMLElement("input")}}

The {{HTMLElement("input")}} element can make things a little difficult if you want to apply some CSS by using the element selector:

```html
<input type="button" value="click me">
```

If we remove the border on all inputs, can we restore the default appearance on input buttons only?

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #CCC;
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
  /* This will come the closest to restoring default rendering, when supported. */
  border: revert;
}
```

See the global CSS {{cssxref('revert')}} value for more information.

##### {{HTMLElement("button")}}

The {{HTMLElement("button")}} element suffered from two issues that are now resolved:

- A bug in old versions of Internet Explorer sent the HTML content available between the starting and ending tag of the {{HTMLElement("button")}} element instead of the content of the {{htmlattrxref("value","button")}} attribute when clicked. This was only an issue if that value needed to be sent, such as when data processing depends on which button a user clicked.
- Some very old browsers did not use `submit` as the default value for the {{htmlattrxref("type","button")}} attribute. While resolved in all modern browsers, it is still recommended to always set the {{htmlattrxref("type","button")}} attribute on {{HTMLElement("button")}} elements.

```html
<!-- Clicking this button sent "<em>Do A</em>" instead of "A" in some cases -->
<button type="submit" name="IWantTo" value="A">
  <em>Do A</em>
</button>
```

Choosing one solution or the other is up to you based on your project's constraints.

### Let go of CSS

One of the big issues with HTML Forms is styling form widgets with CSS. Form controls appearance is browser and operating system specific. For example, the input of color type looks different in Safari, Chrome and Firefox browser, but the color picker widget is the same in all browsers on a device as it opens up the operating system's native color picker.

It's generally a good idea to not alter the default appearance of form control because altering one CSS property value may alter some input types but not others. For example, if you declare `input { font-size: 2rem; }`, it will impact `number`, `date`, and `text`, but not `color` or `range`. If you alter a property, that may impact the appearance of the widget in unexpected ways. For example, `[value] { background-color: #ccc; }` may have been used to target every {{HTMLElement("input")}} with a `value` attribute, but changing the background-color or border radius on a {{HTMLElement("meter")}} will lead to likely unexpected results that differ across browsers. You can declare {{cssxref('appearance', 'appearance: none;')}} to remove the browser styles, but that generally defeats the purpose: as you lose all styling, removing the default look and feel your visitors are used to.

To summarize, when it comes to styling form control widgets, the side effects of styling them with CSS can be unpredictable. So don't. As you can see from the complexity of the [Property compatibility table for form widgets](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls) article, it's very difficult. Even if it's still possible to do a few adjustments on text elements (such as sizing or font color), there are always side effects. The best approach remains to not style HTML Form widgets at all. But you can still apply styles to all the surrounding items. And, if you must alter the default styles of your form widgets, define a style guide to ensure consistency among all your form controls so user experience is not destroyed. You can also investigate some hard techniques such as [rebuilding widgets with JavaScript](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls). But in that case, do not hesitate to [charge your client for such foolishness](https://www.smashingmagazine.com/2011/11/03/but-the-client-wants-ie-6-support/).

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
```

The {{cssxref('appearance')}} property can be used to display an element using platform-native styling, or, as is done with the value of `none`, remove default platform-native based styling.

### Unobtrusive JavaScript

One of the biggest problems is the availability of APIs. For that reason, it's considered best practice to work with "unobtrusive" JavaScript. It's a development pattern that defines two requirements:

- A strict separation between structure and behaviors.
- If the code breaks, the content and the basic functionalities must remain accessible and usable.

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (originally written by Peter-Paul Koch for Dev.Opera.com) describes these ideas very well.

### The Modernizr library

There are many cases where a good "polyfill" can help a lot by providing a missing API. A [polyfill](https://remysharp.com/2010/10/08/what-is-a-polyfill/) is a bit of JavaScript that "fills in the holes" in the functionality of legacy browsers. While they can be used to improve support for any functionality, using them for JavaScript is less risky than for CSS or HTML; there many cases where JavaScript can break (network issues, script conflicts, etc.). But for JavaScript, if you work with unobstructive JavaScript in mind, if polyfills are missing, it's no big deal.

The best way to polyfill missing API is by using the [Modernizr](https://modernizr.com) library and its spin-off project: [YepNope](https://yepnopejs.com). Modernizr is a library that allows you to test the availability of functionality in order to act accordingly. YepNope is a conditional loading library.

Here is an example:

```js
Modernizr.load({
  // This tests if your browser supports the HTML5 form validation API
  test : Modernizr.formvalidation,

  // If the browser does not support it, the following polyfill is loaded
  nope : form-validation-API-polyfill.js,

  // In any case, your core App file that depends on that API is loaded
  both : app.js,

  // Once both files are loaded, this function is called in order to initialize the App.
  complete : function () {
    app.init();
  }
});
```

The Modernizr team conveniently maintains [a list of great polyfills](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills). Just pick what you need.

> **Note:** Modernizr has other awesome features to help you in dealing with unobstructive JavaScript and graceful degradation techniques. Please [read the Modernizr documentation](https://modernizr.com/docs/).

### Pay attention to performance

Even though scripts like Modernizr are very aware of performance, loading a 200 kilobyte polyfill can affect the performance of your application. This is especially critical with legacy browsers; many of them have a very slow JavaScript engine that can make the execution of all your polyfills painful for the user. Performance is a subject on its own, but legacy browsers are very sensitive to it: basically, they are slow and the more polyfills they need, the more JavaScript they have to process. So they are doubly burdened compared to modern browsers. Test your code with legacy browsers to see how they actually perform. Sometimes, dropping some functionality leads to a better user experience than having exactly the same functionality in all browsers. As a last reminder, just always think about the end users.

## Conclusion

As you can see, considering browser and operating system default form control appearance is important. There are many techniques to handle these issue; however mastering all of them is beyond the scope of this article. The basic premise is to consider whether altering the default implementation is worth the work before embarking on the challenge.

If you read all the articles of this [HTML Forms guide](/en-US/docs/Learn/Forms), you should now be at ease with using forms. If you discover new techniques or hints, please help improve the guide.

## See also

### Learning path

- [Your first HTML form](/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [HTML5 input types](/en-US/docs/Learn/Forms/HTML5_input_types)
- [Additional form controls](/en-US/docs/Learn/Forms/Other_form_controls)
- [UI pseudo-classes](/en-US/docs/Learn/Forms/UI_pseudo-classes)
- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)

### Advanced Topics

- [Sending forms through JavaScript](/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [How to build custom form widgets](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML forms in legacy browsers](/en-US/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling)
- [Property compatibility table for form widgets](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
