---
title: HTML forms in legacy browsers
short-title: Forms in legacy browsers
slug: Learn_web_development/Extensions/Forms/HTML_forms_in_legacy_browsers
page-type: guide
sidebar: learnsidebar
---

All web developers learn very quickly (and sometimes painfully) that the Web is a very rough place for them. Our worst curse is legacy browsers. This used to mean "Internet Explorer", but there are millions of people using old devices, especially mobile phones, where neither the browser nor the OS can be updated.

Dealing with this wilderness is part of the job. Fortunately, there are a few tricks to know that can help you to solve most of the problems caused by legacy browsers. If a browser doesn't support an HTML {{htmlelement('input')}} type, it doesn't fail: it just uses the default value of `type=text`.

## Learn about the issues

To understand common patterns, it helps to read documentation. If you are reading this on [MDN](/), you are at the right place to start. Just check the support of the elements (or DOM interfaces) you want to use. MDN has compatibility tables available for most elements, properties and APIs that can be used in a web page.

Because [HTML forms](/en-US/docs/Learn_web_development/Extensions/Forms) involves complex interaction, there is one important rule: keep it simple, also known as the "[KISS principal](https://en.wikipedia.org/wiki/KISS_principle)". There are so many cases where we want forms that are "nicer" or "with advanced functionality", but building efficient HTML Forms is not a question of design or technology. Rather, it's about simplicity, intuitiveness, and ease of user interaction. The tutorial, [forms usability on UX For The Masses,](https://www.uxforthemasses.com/forms-usability/) explains it well.

### Graceful degradation is web developer's best friend

[Graceful degradation and progressive enhancement](https://www.sitepoint.com/progressive-enhancement-graceful-degradation-choice/) are development patterns that allow you to build great stuff by supporting a wide range of browsers at the same time. When you build something for a modern browser, and you want to be sure it will work, one way or another, on legacy browsers, you are performing graceful degradation.

Let's see some examples related to HTML forms.

#### HTML input types

All HTML input types are useable in all browsers, even ancient ones, because the way they degrade is highly predictable. If a browser does not know the value of the [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#type) attribute of an {{HTMLElement("input")}} element, it will fall back as if the value were `text`.

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
          alt="Screen shot of the color input on Chrome for macOS"
          src="color-fallback-chrome.png"
        />
      </td>
      <td>
        <img
          alt="Screen shot of the color input on Firefox for macOS"
          src="color-fallback-firefox.png"
        />
      </td>
    </tr>
  </tbody>
</table>

#### Form buttons

There are two ways to define buttons within HTML forms:

- The {{HTMLElement("input")}} element with its attribute [`type`](/en-US/docs/Web/HTML/Reference/Elements/input#type) set to the values `button`, `submit`, `reset` or `image`
- The {{HTMLElement("button")}} element

##### {{HTMLElement("input")}}

The {{HTMLElement("input")}} element can make things a little difficult if you want to apply some CSS by using the element selector:

```html
<input type="button" value="click me" />
```

If we remove the border on all inputs, we can restore the default appearance for input buttons only with the global CSS {{cssxref('revert')}} value.

```css
input {
  /* This rule turns off the default rendering for the input types that have a border,
     including buttons defined with an input element */
  border: 1px solid #cccccc;
}
input[type="button"] {
  /* Revert the last border declaration */
  border: revert;
}
```

### Limit styling in legacy browsers

One of the big issues with HTML forms in legacy browsers is styling them with CSS. As covered elsewhere, you can declare {{cssxref('appearance', 'appearance: none;')}} to remove the default styles and build your own on top. However, legacy browsers are less likely than modern browsers to support the styling techniques covered earlier in the module. It might be better to just leave form controls unstyled in legacy browsers, if you need to support them. See the next section for advice on detecting support for specific input types.

If you must alter the default styles of your form widgets in legacy browsers, define a style guide to ensure consistency among all your form controls so user experience is not destroyed. You could also investigate some hard techniques such as [rebuilding widgets with JavaScript](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), but it might be more trouble than it's worth.

## Feature detection and polyfills

CSS and JavaScript are awesome technologies, but it's important to ensure you don't break legacy browsers. Before using features that aren't fully supported in the browsers your targeting, you should feature detect.

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

### JavaScript form input detection

You can use JavaScript to detect whether a particular input type is supported. This is based on the fact we mentioned before — that every input type falls back to `<input type="text">` in non-supporting browsers.

Define a test function. The first line of the function body should create a test `<input>` element. Next, set its `type` attribute to the type you want to test. Finally, test the `type` attribute value. In browsers that don't support that input type, the last line will have no effect and the `type` will be returned as `text`. In the below line we are inverting the return value using the negation operator (`!`) because if the `type` isn't `text`, then the type is supported, so we want to return `true`. The complete function looks like this:

```js
function testDatetimeLocalSupport() {
  const testInput = document.createElement("input");
  testInput.setAttribute("type", "datetime-local");
  return testInput.type !== "text";
}
```

The above example shows the basic idea behind such tests. Instead of reinventing the wheel, however, you should use a feature detection library to handle such tests.

Based on the results of that test, you could then for example choose to use JavaScript to build a custom replacement for the non-supported type, or not apply a stylesheet that styles the non-supported type because you want to provide simple default styles to legacy browsers.

### Unobtrusive JavaScript

One of the biggest problems is the availability of APIs. For that reason, it's considered best practice to work with "unobtrusive" JavaScript. It's a development pattern that defines two requirements:

- A strict separation between structure and behaviors.
- If the code breaks, the content and the basic functionalities must remain accessible and usable.

[The principles of unobtrusive JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) (originally written by Peter-Paul Koch for dev.opera.com) describes these ideas very well.

### Pay attention to performance

Even though some polyfills are very aware of performance, loading additional scripts can affect the performance of your application. This is especially critical with legacy browsers; many of them have a very slow JavaScript engine that can make the execution of all your polyfills painful for the user. Performance is a subject on its own, but legacy browsers are very sensitive to it: basically, they are slow and the more polyfills they need, the more JavaScript they have to process. So they are doubly burdened compared to modern browsers. Test your code with legacy browsers to see how they actually perform. Sometimes, dropping some functionality leads to a better user experience than having exactly the same functionality in all browsers. As a last reminder, just always think about the end users.

## Conclusion

As you can see, considering browser and operating system default form control appearance is important. There are many techniques to handle these issue; however mastering all of them is beyond the scope of this article. The basic premise is to consider whether altering the default implementation is worth the work before embarking on the challenge.

If you read all the articles of this [HTML Forms guide](/en-US/docs/Learn_web_development/Extensions/Forms), you should now be at ease with using forms. If you discover new techniques or hints, please help improve the guide.
