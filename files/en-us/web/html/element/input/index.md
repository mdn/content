---
title: "<input>: The Input (Form Input) element"
slug: Web/HTML/Element/input
page-type: html-element
browser-compat: html.elements.input
---

{{HTMLSidebar}}

The **`<input>`** [HTML](/en-US/docs/Web/HTML) element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and {{Glossary("user agent")}}. The `<input>` element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.

{{EmbedInteractiveExample("pages/tabbed/input-text.html", "tabbed-shorter")}}

## \<input> types

How an `<input>` works varies considerably depending on the value of its [`type`](#type) attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`.

The available types are as follows:

<table class="no-markdown">
  <colgroup>
    <col />
    <col style="width: 50%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
      <th>Basic Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{HTMLElement("input/button", "button")}}</td>
      <td>
        A push button with no default behavior displaying the value of the <a href="#value"><code>value</code></a> attribute, empty by default.
      </td>
      <td id="examplebutton">
        <pre class="brush: html hidden">
&#x3C;input type="button" name="button" value="Button" /></pre>
        {{EmbedLiveSample("examplebutton",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/checkbox", "checkbox")}}</td>
      <td>A check box allowing single values to be selected/deselected.</td>
      <td id="examplecheckbox">
        <pre class="brush: html hidden">
&#x3C;input type="checkbox" name="checkbox"/></pre>
        {{EmbedLiveSample("examplecheckbox",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/color", "color")}}</td>
      <td>
        A control for specifying a color; opening a color picker when active in supporting browsers.
      </td>
      <td id="examplecolor">
        <pre class="brush: html hidden">
&#x3C;input type="color" name="color"/></pre>
        {{EmbedLiveSample("examplecolor",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/date", "date")}}</td>
      <td>
        A control for entering a date (year, month, and day, with no time).
        Opens a date picker or numeric wheels for year, month, day when active
        in supporting browsers.
      </td>
      <td id="exampledate">
        <pre class="brush: html hidden">
&#x3C;input type="date" name="date"/></pre>
        {{EmbedLiveSample("exampledate",200,55)}}
      </td>
    </tr>
    <tr>
      <td>
        {{HTMLElement("input/datetime-local", "datetime-local")}}
      </td>
      <td>
        A control for entering a date and time, with no time zone. Opens a date
        picker or numeric wheels for date- and time-components when active in supporting browsers.
      </td>
      <td id="exampledtl">
        <pre class="brush: html hidden">
&#x3C;input type="datetime-local" name="datetime-local"/></pre>
        {{EmbedLiveSample("exampledtl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/email", "email")}}</td>
      <td>
        A field for editing an email address. Looks like a
        <code>text</code> input, but has validation parameters and relevant
        keyboard in supporting browsers and devices with dynamic keyboards.
      </td>
      <td id="exampleemail">
        <pre class="brush: html hidden">
&#x3C;input type="email" name="email"/></pre>
        {{EmbedLiveSample("exampleemail",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/file", "file")}}</td>
      <td>
        A control that lets the user select a file.
        Use the <a href="#accept"><code>accept</code></a> attribute to define the types of files that the control can select.
      </td>
      <td id="examplefile">
        <pre class="brush: html hidden">
&#x3C;input type="file" accept="image/*, text/*" name="file"/></pre>
        {{EmbedLiveSample("examplefile",'100%',55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/hidden", "hidden")}}</td>
      <td>
        A control that is not displayed but whose value is submitted to the
        server. There is an example in the next column, but it's hidden!
      </td>
      <td id="examplehidden">
        <pre class="brush: html hidden">
&#x3C;input id="userId" name="userId" type="hidden" value="abc123"></pre
        >
        {{EmbedLiveSample("examplehidden",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/image", "image")}}</td>
      <td>
        A graphical <code>submit</code> button. Displays an image defined by the <code>src</code> attribute.
        The <a href="#alt"><code>alt</code></a> attribute displays if the image <a href="#src"><code>src</code></a> is missing.
      </td>
      <td id="exampleimage">
        <pre class="brush: html hidden">
&#x3C;input type="image" name="image" src="" alt="image input"/></pre>
        {{EmbedLiveSample("exampleimage",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/month", "month")}}</td>
      <td>A control for entering a month and year, with no time zone.</td>
      <td id="examplemonth">
        <pre class="brush: html hidden">
&#x3C;input type="month" name="month"/></pre>
        {{EmbedLiveSample("examplemonth",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/number", "number")}}</td>
      <td>
        A control for entering a number. Displays a spinner and adds default
        validation. Displays a numeric keypad in some devices
        with dynamic keypads.
      </td>
      <td id="examplenumber">
        <pre class="brush: html hidden">
&#x3C;input type="number" name="number"/></pre>
        {{EmbedLiveSample("examplenumber",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/password", "password")}}</td>
      <td>
        A single-line text field whose value is obscured.
        Will alert user if site is not secure.
      </td>
      <td id="examplepassword">
        <pre class="brush: html hidden">
&#x3C;input type="password" name="password"/></pre>
        {{EmbedLiveSample("examplepassword",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/radio", "radio")}}</td>
      <td>
        A radio button, allowing a single value to be selected out of multiple choices with the same <a href="#name"><code>name</code></a> value.
      </td>
      <td id="exampleradio">
        <pre class="brush: html hidden">
&#x3C;input type="radio" name="radio"/></pre
        >
        {{EmbedLiveSample("exampleradio",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/range", "range")}}</td>
      <td>
        A control for entering a number whose exact value is not important.
        Displays as a range widget defaulting to the middle value.
        Used in conjunction <a href="#min"><code>min</code></a> and <a href="#max"><code>max</code></a> to define the range of acceptable values.
      </td>
      <td id="examplerange">
        <pre class="brush: html hidden">
&#x3C;input type="range" name="range" min="0" max="25"/></pre>
        {{EmbedLiveSample("examplerange",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/reset", "reset")}}</td>
      <td>
        A button that resets the contents of the form to default values. Not recommended.
      </td>
      <td id="examplereset">
        <pre class="brush: html hidden">
&#x3C;input type="reset" name="reset"/></pre
        >
        {{EmbedLiveSample("examplereset",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/search", "search")}}</td>
      <td>
        A single-line text field for entering search strings. Line-breaks are
        automatically removed from the input value. May include a delete icon in
        supporting browsers that can be used to clear the field. Displays a
        search icon instead of enter key on some devices with dynamic keypads.
      </td>
      <td id="examplesearch">
        <pre class="brush: html hidden">
&#x3C;input type="search" name="search"/></pre>
        {{EmbedLiveSample("examplesearch",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/submit", "submit")}}</td>
      <td>A button that submits the form.</td>
      <td id="examplesubmit">
        <pre class="brush: html hidden">
&#x3C;input type="submit" name="submit"/></pre>
        {{EmbedLiveSample("examplesubmit",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/tel", "tel")}}</td>
      <td>
        A control for entering a telephone number. Displays a telephone keypad
        in some devices with dynamic keypads.
      </td>
      <td id="exampletel">
        <pre class="brush: html hidden">
&#x3C;input type="tel" name="tel"/></pre>
        {{EmbedLiveSample("exampletel",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/text", "text")}}</td>
      <td>
        The default value. A single-line text field. Line-breaks are
        automatically removed from the input value.
      </td>
      <td id="exampletext">
        <pre class="brush: html hidden">
&#x3C;input type="text" name="text"/></pre
        >
        {{EmbedLiveSample("exampletext",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/time", "time")}}</td>
      <td>A control for entering a time value with no time zone.</td>
      <td id="exampletime">
        <pre class="brush: html hidden">
&#x3C;input type="time" name="time"/></pre>
        {{EmbedLiveSample("exampletime",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/url", "url")}}</td>
      <td>
        A field for entering a URL. Looks like a <code>text</code> input, but
        has validation parameters and relevant keyboard in supporting browsers
        and devices with dynamic keyboards.
      </td>
      <td id="exampleurl">
        <pre class="brush: html hidden">
&#x3C;input type="url" name="url"/></pre
        >
        {{EmbedLiveSample("exampleurl",200,55)}}
      </td>
    </tr>
    <tr>
      <td>{{HTMLElement("input/week", "week")}}</td>
      <td>
        A control for entering a date consisting of a week-year number and a week number with no time zone.
      </td>
      <td id="exampleweek">
        <pre class="brush: html hidden">
&#x3C;input type="week" name="week"/></pre>
        {{EmbedLiveSample("exampleweek",200,55)}}
      </td>
    </tr>
    <tr>
      <th colspan="3">Obsolete values</th>
    </tr>
    <tr>
      <td><code>datetime</code> {{deprecated_inline}}</td>
      <td>
        A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone.
      </td>
      <td id="exampledatetime">
        <pre class="brush: html hidden">
&#x3C;input type="datetime" name="datetime"/></pre>
        {{EmbedLiveSample("exampledatetime",200,75)}}
      </td>
    </tr>
  </tbody>
</table>

## Attributes

The `<input>` element is so powerful because of its attributes; the [`type`](#type) attribute, described with examples above, being the most important. Since every `<input>` element, regardless of type, is based on the {{domxref("HTMLInputElement")}} interface, they technically share the exact same set of attributes. However, in reality, most attributes have an effect on only a specific subset of input types. In addition, the way some attributes impact an input depends on the input type, impacting different input types in different ways.

This section provides a table listing all the attributes with a brief description. This table is followed by a list describing each attribute in greater detail, along with which input types they are associated with. Those that are common to most or all input types are defined in greater detail below. Attributes that are unique to particular input types—or attributes which are common to all input types but have special behaviors when used on a given input type—are instead documented on those types' pages.

Attributes for the `<input>` element include the [global HTML attributes](/en-US/docs/Web/HTML/Global_attributes) and additionally:

| Attribute                                     | Type or Types                                                           | Description                                                                           |
| --------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [`accept`](#accept)                           | `file`                                                                  | Hint for expected file type in file upload controls                                   |
| [`alt`](#alt)                                 | `image`                                                                 | alt attribute for the image type. Required for accessibility                          |
| [`autocomplete`](#autocomplete)               | all except `checkbox`, `radio`, and buttons                             | Hint for form autofill feature                                                        |
| [`capture`](#capture)                         | `file`                                                                  | Media capture input method in file upload controls                                    |
| [`checked`](#checked)                         | `checkbox`, `radio`                                                     | Whether the command or control is checked                                             |
| [`dirname`](#dirname)                         | `search`, `text`                                                        | Name of form field to use for sending the element's directionality in form submission |
| [`disabled`](#disabled)                       | all                                                                     | Whether the form control is disabled                                                  |
| [`form`](#form)                               | all                                                                     | Associates the control with a form element                                            |
| [`formaction`](#formaction)                   | `image`, `submit`                                                       | URL to use for form submission                                                        |
| [`formenctype`](#formenctype)                 | `image`, `submit`                                                       | Form data set encoding type to use for form submission                                |
| [`formmethod`](#formmethod)                   | `image`, `submit`                                                       | HTTP method to use for form submission                                                |
| [`formnovalidate`](#formnovalidate)           | `image`, `submit`                                                       | Bypass form control validation for form submission                                    |
| [`formtarget`](#formtarget)                   | `image`, `submit`                                                       | Browsing context for form submission                                                  |
| [`height`](#height)                           | `image`                                                                 | Same as height attribute for {{htmlelement('img')}}; vertical dimension               |
| [`list`](#list)                               | all except `hidden`, `password`, `checkbox`, `radio`, and buttons       | Value of the id attribute of the {{htmlelement('datalist')}} of autocomplete options  |
| [`max`](#max)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Maximum value                                                                         |
| [`maxlength`](#maxlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Maximum length (number of characters) of `value`                                      |
| [`min`](#min)                                 | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Minimum value                                                                         |
| [`minlength`](#minlength)                     | `text`, `search`, `url`, `tel`, `email`, `password`                     | Minimum length (number of characters) of `value`                                      |
| [`multiple`](#multiple)                       | `email`, `file`                                                         | Boolean. Whether to allow multiple values                                             |
| [`name`](#name)                               | all                                                                     | Name of the form control. Submitted with the form as part of a name/value pair        |
| [`pattern`](#pattern)                         | `text`, `search`, `url`, `tel`, `email`, `password`                     | Pattern the `value` must match to be valid                                            |
| [`placeholder`](#placeholder)                 | `text`, `search`, `url`, `tel`, `email`, `password`, `number`           | Text that appears in the form control when it has no value set                        |
| [`popovertarget`](#popovertarget)             | `button`                                                                | Designates an `<input type="button">` as a control for a popover element              |
| [`popovertargetaction`](#popovertargetaction) | `button`                                                                | Specifies the action that a popover control should perform                            |
| [`readonly`](#readonly)                       | all except `hidden`, `range`, `color`, `checkbox`, `radio`, and buttons | Boolean. The value is not editable                                                    |
| [`required`](#required)                       | all except `hidden`, `range`, `color`, and buttons                      | Boolean. A value is required or must be checked for the form to be submittable        |
| [`size`](#size)                               | `text`, `search`, `url`, `tel`, `email`, `password`                     | Size of the control                                                                   |
| [`src`](#src)                                 | `image`                                                                 | Same as `src` attribute for {{htmlelement('img')}}; address of image resource         |
| [`step`](#step)                               | `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`    | Incremental values that are valid                                                     |
| [`type`](#type)                               | all                                                                     | Type of form control                                                                  |
| [`value`](#value)                             | all except `image`                                                      | The initial value of the control                                                      |
| [`width`](#width)                             | `image`                                                                 | Same as `width` attribute for {{htmlelement('img')}}                                  |

A few additional non-standard attributes are listed following the descriptions of the standard attributes.

### Individual attributes

- `accept`

  - : Valid for the `file` input type only, the `accept` attribute defines which file types are selectable in a `file` upload control. See the {{HTMLElement("input/file", "file")}} input type.

- `alt`

  - : Valid for the `image` button only, the `alt` attribute provides alternative text for the image, displaying the value of the attribute if the image [`src`](#src) is missing or otherwise fails to load. See the {{HTMLElement("input/image", "image")}} input type.

- [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete)

  - : (**Not** a Boolean attribute!) The [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete) attribute takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. A typical implementation of autocomplete recalls previous values entered in the same input field, but more complex forms of autocomplete can exist. For instance, a browser could integrate with a device's contacts list to autocomplete `email` addresses in an email input field. See [`autocomplete`](/en-US/docs/Web/HTML/Attributes/autocomplete#values) for permitted values.

    The `autocomplete` attribute is valid on `hidden`, `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, `color`, and `password`. This attribute has no effect on input types that do not return numeric or text data, being valid for all input types except `checkbox`, `radio`, `file`, or any of the button types.

    See the [`autocomplete` attribute](/en-US/docs/Web/HTML/Attributes/autocomplete) for additional information, including information on password security and how `autocomplete` is slightly different for `hidden` than for other input types.

- `autofocus`

  - : A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading (or when the {{HTMLElement("dialog")}} containing the element has been displayed).

    > **Note:** An element with the `autofocus` attribute may gain focus before the {{domxref("Window/DOMContentLoaded_event", "DOMContentLoaded")}} event is fired.

    No more than one element in the document may have the `autofocus` attribute. If put on more than one element, the first one with the attribute receives focus.

    The `autofocus` attribute cannot be used on inputs of type `hidden`, since hidden inputs cannot be focused.

    > **Warning:** Automatically focusing a form control can confuse visually-impaired people using screen-reading technology and people with cognitive impairments. When `autofocus` is assigned, screen-readers "teleport" their user to the form control without warning them beforehand.

    Use careful consideration for accessibility when applying the `autofocus` attribute. Automatically focusing on a control can cause the page to scroll on load. The focus can also cause dynamic keyboards to display on some touch devices. While a screen reader will announce the label of the form control receiving focus, the screen reader will not announce anything before the label, and the sighted user on a small device will equally miss the context created by the preceding content.

- `capture`
  - : Introduced in the HTML Media Capture specification and valid for the `file` input type only, the `capture` attribute defines which media—microphone, video, or camera—should be used to capture a new file for upload with `file` upload control in supporting scenarios. See the {{HTMLElement("input/file", "file")}} input type.
- `checked`

  - : Valid for both `radio` and `checkbox` types, `checked` is a Boolean attribute. If present on a `radio` type, it indicates that the radio button is the currently selected one in the group of same-named radio buttons. If present on a `checkbox` type, it indicates that the checkbox is checked by default (when the page loads). It does _not_ indicate whether this checkbox is currently checked: if the checkbox's state is changed, this content attribute does not reflect the change. (Only the [`HTMLInputElement`'s `checked` IDL attribute](/en-US/docs/Web/API/HTMLInputElement) is updated.)

    > **Note:** Unlike other input controls, a checkboxes and radio buttons value are only included in the submitted data if they are currently `checked`. If they are, the name and the value(s) of the checked controls are submitted.
    >
    > For example, if a checkbox whose `name` is `fruit` has a `value` of `cherry`, and the checkbox is checked, the form data submitted will include `fruit=cherry`. If the checkbox isn't active, it isn't listed in the form data at all. The default `value` for checkboxes and radio buttons is `on`.

- `dirname`

  - : Valid for `text` and `search` input types only, the `dirname` attribute enables the submission of the directionality of the element. When included, the form control will submit with two name/value pairs: the first being the [`name`](#name) and [`value`](#value), the second being the value of the `dirname` as the name with the value of `ltr` or `rtl` being set by the browser.

    ```html
    <form action="page.html" method="post">
      <label>
        Fruit:
        <input type="text" name="fruit" dirname="fruit-dir" value="cherry" />
      </label>
      <input type="submit" />
    </form>
    <!-- page.html?fruit=cherry&fruit-dir=ltr -->
    ```

    When the form above is submitted, the input cause both the `name` / `value` pair of `fruit=cherry` and the `dirname` / direction pair of `fruit-dir=ltr` to be sent.
    For more information, see the [`dirname` attribute](/en-US/docs/Web/HTML/Attributes/dirname).

- `disabled`

  - : A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use.

    Specifically, disabled inputs do not receive the {{domxref("Element/click_event", "click")}} event, and disabled inputs are not submitted with the form.

    > **Note:** Although not required by the specification, Firefox will by default [persist the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of an `<input>` across page loads. Use the [`autocomplete`](#autocomplete) attribute to control this feature.

- `form`

  - : A string specifying the {{HTMLElement("form")}} element with which the input is associated (that is, its **form owner**). This string's value, if present, must match the [`id`](#id) of a `<form>` element in the same document. If this attribute isn't specified, the `<input>` element is associated with the nearest containing form, if any.

    The `form` attribute lets you place an input anywhere in the document but have it included with a form elsewhere in the document.

    > **Note:** An input can only be associated with one form.

- `formaction`
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- `formenctype`
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- `formmethod`
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- `formnovalidate`
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- `formtarget`
  - : Valid for the `image` and `submit` input types only. See the {{HTMLElement("input/submit", "submit")}} input type for more information.
- `height`
  - : Valid for the `image` input button only, the `height` is the height of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.
- `id`
  - : Global attribute valid for all elements, including all the input types, it defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking. The value is used as the value of the {{htmlelement('label')}}'s `for` attribute to link the label with the form control. See {{htmlelement('label')}}.
- `inputmode`
  - : Global value valid for all elements, it provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Values include `none`, `text`, `tel`, `url`, `email`, `numeric`, `decimal`, and `search`.
- `list`

  - : The value given to the `list` attribute should be the {{domxref("Element.id", "id")}} of a {{HTMLElement("datalist")}} element located in the same document. The `<datalist>` provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the [`type`](#type) are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.

    It is valid on `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `range`, and `color`.

    Per the specifications, the `list` attribute is not supported by the `hidden`, `password`, `checkbox`, `radio`, `file`, or any of the button types.

    Depending on the browser, the user may see a custom color palette suggested, tic marks along a range, or even an input that opens like a {{HTMLElement("select")}} but allows for non-listed values. Check out the [browser compatibility table](/en-US/docs/Web/HTML/Element/datalist#browser_compatibility) for the other input types.

    See the {{htmlelement('datalist')}} element.

- `max`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the greatest value in the range of permitted values. If the [`value`](#value) entered into the element exceeds this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If the value of the `max` attribute isn't a number, then the element has no maximum value.

    There is a special case: if the data type is periodic (such as for dates or times), the value of `max` may be lower than the value of `min`, which indicates that the range may wrap around; for example, this allows you to specify a time range from 10 PM to 4 AM.

- `maxlength`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the maximum string length (measured in UTF-16 code units) that the user can enter into the field. This must be an integer value of 0 or higher. If no `maxlength` is specified, or an invalid value is specified, the field has no maximum length. This value must also be greater than or equal to the value of `minlength`.

    The input will fail [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) if the length of the text entered into the field is greater than `maxlength` UTF-16 code units long. By default, browsers prevent users from entering more characters than allowed by the `maxlength` attribute. See [Client-side validation](#client-side_validation) for more information.

- `min`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, it defines the most negative value in the range of permitted values. If the [`value`](#value) entered into the element is less than this, the element fails [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). If the value of the `min` attribute isn't a number, then the element has no minimum value.

    This value must be less than or equal to the value of the `max` attribute. If the `min` attribute is present but is not specified or is invalid, no `min` value is applied. If the `min` attribute is valid and a non-empty value is less than the minimum allowed by the `min` attribute, constraint validation will prevent form submission. See [Client-side validation](#client-side_validation) for more information.

    There is a special case: if the data type is periodic (such as for dates or times), the value of `max` may be lower than the value of `min`, which indicates that the range may wrap around; for example, this allows you to specify a time range from 10 PM to 4 AM.

- `minlength`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, it defines the minimum string length (measured in UTF-16 code units) that the user can enter into the entry field. This must be a non-negative integer value smaller than or equal to the value specified by `maxlength`. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length.

    The input will fail [constraint validation](/en-US/docs/Web/HTML/Constraint_validation) if the length of the text entered into the field is fewer than `minlength` UTF-16 code units long, preventing form submission. See [Client-side validation](#client-side_validation) for more information.

- `multiple`

  - : The Boolean `multiple` attribute, if set, means the user can enter comma separated email addresses in the email widget or can choose more than one file with the `file` input. See the {{HTMLElement("input/email", "email")}} and {{HTMLElement("input/file", "file")}} input type.

- `name`

  - : A string specifying a name for the input control. This name is submitted along with the control's value when the form data is submitted.

    Consider the `name` a required attribute (even though it's not). If an input has no `name` specified, or `name` is empty, the input's value is not submitted with the form! (Disabled controls, unchecked radio buttons, unchecked checkboxes, and reset buttons are also not sent.)

    There are two special cases:

    1. `_charset_` : If used as the name of an `<input>` element of type {{HTMLElement("input/hidden", "hidden")}}, the input's `value` is automatically set by the {{Glossary("user agent")}} to the character encoding being used to submit the form.
    2. `isindex`: For historical reasons, the name [`isindex`](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-name) is not allowed.

    The [`name`](#name) attribute creates a unique behavior for radio buttons.

    Only one radio button in a same-named group of radio buttons can be checked at a time. Selecting any radio button in that group automatically deselects any currently-selected radio button in the same group. The value of that one checked radio button is sent along with the name if the form is submitted,

    When tabbing into a series of same-named group of radio buttons, if one is checked, that one will receive focus. If they aren't grouped together in source order, if one of the group is checked, tabbing into the group starts when the first one in the group is encountered, skipping all those that aren't checked. In other words, if one is checked, tabbing skips the unchecked radio buttons in the group. If none are checked, the radio button group receives focus when the first button in the same name group is reached.

    Once one of the radio buttons in a group has focus, using the arrow keys will navigate through all the radio buttons of the same name, even if the radio buttons are not grouped together in the source order.

    When an input element is given a `name`, that name becomes a property of the owning form element's {{domxref("HTMLFormElement.elements")}} property. If you have an input whose `name` is set to `guest` and another whose `name` is `hat-size`, the following code can be used:

    ```js
    let form = document.querySelector("form");

    let guestName = form.elements.guest;
    let hatSize = form.elements["hat-size"];
    ```

    When this code has run, `guestName` will be the {{domxref("HTMLInputElement")}} for the `guest` field, and `hatSize` the object for the `hat-size` field.

    > **Warning:** Avoid giving form elements a `name` that corresponds to a built-in property of the form, since you would then override the predefined property or method with this reference to the corresponding input.

- `pattern`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, and `password`, the `pattern` attribute defines a regular expression that the input's [`value`](#value) must match in order for the value to pass [constraint validation](/en-US/docs/Web/HTML/Constraint_validation). It must be a valid JavaScript regular expression, as used by the {{jsxref("RegExp")}} type, and as documented in our [guide on regular expressions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions); the `'u'` flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.

    If the `pattern` attribute is present but is not specified or is invalid, no regular expression is applied and this attribute is ignored completely. If the pattern attribute is valid and a non-empty value does not match the pattern, constraint validation will prevent form submission.

    > **Note:** If using the `pattern` attribute, inform the user about the expected format by including explanatory text nearby. You can also include a [`title`](#title) attribute to explain what the requirements are to match the pattern; most browsers will display this title as a tooltip. The visible explanation is required for accessibility. The tooltip is an enhancement.

    See [Client-side validation](#client-side_validation) for more information.

- `placeholder`

  - : Valid for `text`, `search`, `url`, `tel`, `email`, `password`, and `number`, the `placeholder` attribute provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that provides a hint as to the expected type of data, rather than an explanation or prompt. The text _must not_ include carriage returns or line feeds. So for example if a field is expected to capture a user's first name, and its label is "First Name", a suitable placeholder might be "e.g. Mustafa".

    > **Note:** The `placeholder` attribute is not as semantically useful as other ways to explain your form, and can cause unexpected technical issues with your content. See [Labels](#labels) for more information.

- `popovertarget`

  - : Turns an `<input type="button">` element into a popover control button; takes the ID of the popover element to control as its value. See the {{domxref("Popover API", "Popover API", "", "nocode")}} landing page for more details.

- `popovertargetaction`

  - : Specifies the action to be performed on a popover element being controlled by a control `<input type="button">`. Possible values are:

    - `"hide"`
      - : The button will hide a shown popover. If you try to hide an already hidden popover, no action will be taken.
    - `"show"`
      - : The button will show a hidden popover. If you try to show an already showing popover, no action will be taken.
    - `"toggle"`
      - : The button will toggle a popover between showing and hidden. If the popover is hidden, it will be shown; if the popover is showing, it will be hidden. If `popovertargetaction` is omitted, `"toggle"` is the default action that will be performed by the control button.

- `readonly`

  - : A Boolean attribute which, if present, indicates that the user should not be able to edit the value of the input. The `readonly` attribute is supported by the `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `password` input types.

    See the [HTML attribute: `readonly`](/en-US/docs/Web/HTML/Attributes/readonly) for more information.

- `required`

  - : `required` is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted. The `required` attribute is supported by `text`, `search`, `url`, `tel`, `email`, `date`, `month`, `week`, `time`, `datetime-local`, `number`, `password`, `checkbox`, `radio`, and `file` inputs.

    See [Client-side validation](#client-side_validation) and the [HTML attribute: `required`](/en-US/docs/Web/HTML/Attributes/required) for more information.

- `size`

  - : Valid for `email`, `password`, `tel`, `url`, and `text`, the `size` attribute specifies how much of the input is shown. Basically creates same result as setting CSS [`width`](/en-US/docs/Web/CSS/width) property with a few specialities. The actual unit of the value depends on the input type. For `password` and `text`, it is a number of characters (or `em` units) with a default value of `20`, and for others, it is pixels (or `px` units). CSS `width` takes precedence over the `size` attribute.

- `src`

  - : Valid for the `image` input button only, the `src` is string specifying the URL of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.

- `step`

  - : Valid for `date`, `month`, `week`, `time`, `datetime-local`, `number`, and `range`, the [`step`](/en-US/docs/Web/HTML/Attributes/step) attribute is a number that specifies the granularity that the value must adhere to.

    If not explicitly included:

    - `step` defaults to 1 for `number` and `range`.
    - Each date/time input type has a default `step` value appropriate for the type; see the individual input pages: [`date`](/en-US/docs/Web/HTML/Element/input/date#step), [`datetime-local`](/en-US/docs/Web/HTML/Element/input/datetime-local#step), [`month`](/en-US/docs/Web/HTML/Element/input/month#step), [`time`](/en-US/docs/Web/HTML/Element/input/time#step), and [`week`](/en-US/docs/Web/HTML/Element/input/week#step).

    The value must be a positive number—integer or float—or the special value `any`, which means no stepping is implied, and any value is allowed (barring other constraints, such as [`min`](#min) and [`max`](#max)).

    If `any` is not explicitly set, valid values for the `number`, date/time input types, and `range` input types are equal to the basis for stepping — the [`min`](#min) value and increments of the step value, up to the [`max`](#max) value, if specified.

    For example, if you have `<input type="number" min="10" step="2">`, then any even integer, `10` or greater, is valid. If omitted, `<input type="number">`, any integer is valid, but floats (like `4.2`) are not valid, because `step` defaults to `1`. For `4.2` to be valid, `step` would have had to be set to `any`, 0.1, 0.2, or any the `min` value would have had to be a number ending in `.2`, such as `<input type="number" min="-5.2">`

    > **Note:** When the data entered by the user doesn't adhere to the stepping configuration, the value is considered invalid in constraint validation and will match the `:invalid` pseudoclass.

    See [Client-side validation](#client-side_validation) for more information.

- `tabindex`

  - : Global attribute valid for all elements, including all the input types, an integer attribute indicating if the element can take input focus (is focusable), if it should participate to sequential keyboard navigation. As all input types except for input of type hidden are focusable, this attribute should not be used on form controls, because doing so would require the management of the focus order for all elements within the document with the risk of harming usability and accessibility if done incorrectly.

- `title`

  - : Global attribute valid for all elements, including all input types, containing a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip. The title should NOT be used as the primary explanation of the purpose of the form control. Instead, use the {{htmlelement('label')}} element with a `for` attribute set to the form control's [`id`](#id) attribute. See [Labels](#labels) below.

- `type`

  - : A string specifying the type of control to render. For example, to create a checkbox, a value of `checkbox` is used. If omitted (or an unknown value is specified), the input type `text` is used, creating a plaintext input field.

    Permitted values are listed in [Input types](#input_types) above.

- `value`

  - : The input control's value. When specified in the HTML, this is the initial value, and from then on it can be altered or retrieved at any time using JavaScript to access the respective {{domxref("HTMLInputElement")}} object's `value` property. The `value` attribute is always optional, though should be considered mandatory for `checkbox`, `radio`, and `hidden`.

- `width`

  - : Valid for the `image` input button only, the `width` is the width of the image file to display to represent the graphical submit button. See the {{HTMLElement("input/image", "image")}} input type.

### Non-standard attributes

The following non-standard attributes are also available on some browsers. As a general rule, you should avoid using them unless it can't be helped.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#autocapitalize"><code>autocapitalize</code></a></td>
      <td>
        A string indicating how auto-capitalization should be applied to the content of text elements. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#autocorrect"><code>autocorrect</code></a></td>
      <td>
        A string indicating whether autocorrect is <code>on</code> or <code>off</code>. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td><a href="#incremental"><code>incremental</code></a></td>
      <td>
        Whether or not to send repeated {{domxref("HTMLInputElement/search_event", "search")}}
        events to allow updating live search results while the user is still editing the value of the field.
        <strong>WebKit and Blink only (Safari, Chrome, Opera, etc.).</strong>
      </td>
    </tr>
    <tr>
      <td><code>mozactionhint</code></td>
      <td>
        <p>A string indicating the type of action that will be taken when the user
        presses the <kbd>Enter</kbd> or <kbd>Return</kbd> key while editing the
        field; this is used to determine an appropriate label for that key on a
        virtual keyboard.</p>
        <p><strong>Deprecated: use <a href="/en-US/docs/Web/HTML/Global_attributes/enterkeyhint"><code>enterkeyhint</code></a> instead.</strong></p>
      </td>
    </tr>
    <tr>
      <td><a href="#orient"><code>orient</code></a></td>
      <td>
        Sets the orientation of the range slider. <strong>Firefox only</strong>.
      </td>
    </tr>
    <tr>
      <td><a href="#results"><code>results</code></a></td>
      <td>
        The maximum number of items that should be displayed in the drop-down list of previous search queries. <strong>Safari only.</strong>
      </td>
    </tr>
    <tr>
      <td>
        <a href="#webkitdirectory"><code>webkitdirectory</code></a>
      </td>
      <td>
        A Boolean indicating whether to only allow the user to choose a directory (or directories, if <a href="#multiple"><code>multiple</code></a> is also present)
      </td>
    </tr>
  </tbody>
</table>

- `autocapitalize` {{non-standard_inline}}

  - : (Safari only). A string which indicates how auto-capitalization should be applied while the user is editing this field. Permitted values are:

    - `none`
      - : Do not automatically capitalize any text
    - `sentences`
      - : Automatically capitalize the first character of each sentence.
    - `words`
      - : Automatically capitalize the first character of each word.
    - `characters`
      - : Automatically capitalize every character.

- `autocorrect` {{non-standard_inline}}

  - : (Safari only). A string which indicates whether to activate automatic correction while the user is editing this field. Permitted values are:

    - `on`
      - : Enable automatic correction of typos, as well as processing of text substitutions if any are configured.
    - `off`
      - : Disable automatic correction and text substitutions.

- `incremental` {{non-standard_inline}}

  - : The Boolean attribute `incremental` is a WebKit and Blink extension (so supported by Safari, Opera, Chrome, etc.) which, if present, tells the {{Glossary("user agent")}} to process the input as a live search. As the user edits the value of the field, the user agent sends {{domxref("HTMLInputElement/search_event", "search")}} events to the {{domxref("HTMLInputElement")}} object representing the search box. This allows your code to update the search results in real time as the user edits the search.

    If `incremental` is not specified, the {{domxref("HTMLInputElement/search_event", "search")}} event is only sent when the user explicitly initiates a search (such as by pressing the <kbd>Enter</kbd> or <kbd>Return</kbd> key while editing the field).

    The `search` event is rate-limited so that it is not sent more frequently than an implementation-defined interval.

- `orient` {{non-standard_inline}}

  - : Similar to the -moz-orient non-standard CSS property impacting the {{htmlelement('progress')}} and {{htmlelement('meter')}} elements, the `orient` attribute defines the orientation of the range slider. Values include `horizontal`, meaning the range is rendered horizontally, and `vertical`, where the range is rendered vertically.

- `results` {{non-standard_inline}}

  - : The `results` attribute—supported only by Safari—is a numeric value that lets you override the maximum number of entries to be displayed in the {{HTMLElement("input")}} element's natively-provided drop-down menu of previous search queries.

    The value must be a non-negative decimal number. If not provided, or an invalid value is given, the browser's default maximum number of entries is used.

- `webkitdirectory` {{non-standard_inline}}

  - : The Boolean `webkitdirectory` attribute, if present, indicates that only directories should be available to be selected by the user in the file picker interface. See {{domxref("HTMLInputElement.webkitdirectory")}} for additional details and examples.

    Though originally implemented only for WebKit-based browsers, `webkitdirectory` is also usable in Microsoft Edge as well as Firefox 50 and later. However, even though it has relatively broad support, it is still not standard and should not be used unless you have no alternative.

## Methods

The following methods are provided by the {{domxref("HTMLInputElement")}} interface which represents `<input>` elements in the DOM. Also available are those methods specified by the parent interfaces, {{domxref("HTMLElement")}}, {{domxref("Element")}}, {{domxref("Node")}}, and {{domxref("EventTarget")}}.

- {{domxref("HTMLInputElement.checkValidity", "checkValidity()")}}
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false` and fires an {{domxref("HTMLInputElement.invalid_event", "invalid")}} event at the element.
- {{domxref("HTMLInputElement.reportValidity", "reportValidity()")}}
  - : Returns `true` if the element's value passes validity checks; otherwise, returns `false`, fires an {{domxref("HTMLInputElement.invalid_event", "invalid")}} event at the element, and (if the event isn't canceled) reports the problem to the user.
- {{domxref("HTMLInputElement.select", "select()")}}
  - : Selects the entire content of the `<input>` element, if the element's content is selectable. For elements with no selectable text content (such as a visual color picker or calendar date input), this method does nothing.
- {{domxref("HTMLInputElement.setCustomValidity", "setCustomValidity()")}}
  - : Sets a custom message to display if the input element's value isn't valid.
- {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}}
  - : Sets the contents of the specified range of characters in the input element to a given string. A `selectMode` parameter is available to allow controlling how the existing content is affected.
- {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
  - : Selects the specified range of characters within a textual input element. Does nothing for inputs which aren't presented as text input fields.
- {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
  - : Decrements the value of a numeric input by one, by default, or by the specified number of units.
- {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
  - : Increments the value of a numeric input by one or by the specified number of units.

## CSS

Inputs, being replaced elements, have a few features not applicable to non form elements. There are CSS selectors that can specifically target form controls based on their UI features, also known as UI pseudo-classes. The input element can also be targeted by type with attribute selectors. There are some properties that are especially useful as well.

### UI pseudo-classes

<table class="no-markdown">
  <caption>
    Captions super relevant to the
    <code>&#x3C;input></code>
    element:
  </caption>
  <thead>
    <tr>
      <th>Pseudo-class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{Cssxref(":enabled")}}</td>
      <td>
        Any currently enabled element that can be activated (selected, clicked
        on, typed into, etc.) or accept focus and also has a disabled state, in
        which it can't be activated or accept focus.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":disabled")}}</td>
      <td>
        Any currently disabled element that has an enabled state, meaning it
        otherwise could be activated (selected, clicked on, typed into, etc.) or
        accept focus were it not disabled.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-only")}}</td>
      <td>Element not editable by the user</td>
    </tr>
    <tr>
      <td>{{Cssxref(":read-write")}}</td>
      <td>Element that is editable by the user.</td>
    </tr>
    <tr>
      <td>{{Cssxref(":placeholder-shown")}}</td>
      <td>
        Element that is currently displaying <a href="#placeholder"><code>placeholder</code> text</a>,
        including <code>&#x3C;input></code> and {{HTMLElement("textarea")}} elements with the <a href="#placeholder"><code>placeholder</code></a> attribute present that has, as yet, no value.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":default")}}</td>
      <td>
        Form elements that are the default in a group of related elements.
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        were checked on page load or render.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":checked")}}</td>
      <td>
        Matches {{HTMLElement("input/checkbox", "checkbox")}} and
        {{HTMLElement("input/radio", "radio")}} input types that
        are currently checked (and the ({{HTMLElement("option")}} in a
        {{HTMLElement("select")}} that is currently selected).
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":indeterminate")}}</td>
      <td>
        {{HTMLElement("input/checkbox", "checkbox")}} elements
        whose indeterminate property is set to true by JavaScript,
        {{HTMLElement("input/radio", "radio")}} elements, when all
        radio buttons with the same name value in the form are unchecked, and
        {{HTMLElement("progress")}} elements in an indeterminate state
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":valid")}}</td>
      <td>
        Form controls that can have constraint validation applied and are
        currently valid.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":invalid")}}</td>
      <td>
        Form controls that have constraint validation applied and are currently
        not valid. Matches a form control whose value doesn't match the
        constraints set on it by its attributes, such as
        <a href="#required"><code>required</code></a>,
        <a href="#pattern"><code>pattern</code></a>,
        <a href="#step"><code>step</code></a> and <a href="#max"><code>max</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":in-range")}}</td>
      <td>
        A non-empty input whose current value is within the range limits
        specified by the <a href="#min"><code>min</code></a> and <a href="#max"><code>max</code></a> attributes and the <a href="#step"><code>step</code></a>.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":out-of-range")}}</td>
      <td>
        A non-empty input whose current value is NOT within the range limits
        specified by the <a href="#min"><code>min</code></a>
        and <a href="#max"><code>max</code></a> attributes or
        does not adhere to the <a href="#step"><code>step</code></a> constraint.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":required")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element that has the <a href="#required"><code>required</code></a> attribute set on it.
        Only matches elements that can be required.
        The attribute included on a non-requirable element will not make for a match.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":optional")}}</td>
      <td>
        <code>&#x3C;input></code>, {{HTMLElement("select")}}, or
        {{HTMLElement("textarea")}} element that does NOT have the <a href="#required"><code>required</code></a> attribute set on it.
        Does not match elements that can't be required.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":blank")}}</td>
      <td>
        <code>&#x3C;input></code> and {{HTMLElement("textarea")}} elements that currently have no value.
      </td>
    </tr>
    <tr>
      <td>{{Cssxref(":user-invalid")}}</td>
      <td>
        Similar to <code>:invalid</code>, but is activated on blur. Matches
        invalid input but only after the user interaction, such as by focusing
        on the control, leaving the control, or attempting to submit the form
        containing the invalid control.
      </td>
    </tr>
  </tbody>
</table>

#### Pseudo-classes example

We can style a checkbox label based on whether the checkbox is checked or not. In this example, we are styling the {{cssxref('color')}} and {{cssxref('font-weight')}} of the {{htmlelement('label')}} that comes immediately after a checked input. We haven't applied any styles if the `input` is not checked.

```html hidden
<input id="checkboxInput" type="checkbox" />
<label for="checkboxInput">Toggle the checkbox on and off</label>
```

```css
input:checked + label {
  color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample('Pseudo-classes_example', 500, 80)}}

### Attribute selectors

It is possible to target different types of form controls based on their [`type`](#type) using [attribute selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors). CSS attribute selectors match elements based on either just the presence of an attribute or the value of a given attribute.

```css
/* matches a password input */
input[type="password"] {
}

/* matches a form control whose valid values are limited to a range of values*/
input[min][max] {
}

/* matches a form control with a pattern attribute */
input[pattern] {
}
```

### ::placeholder

By default, the appearance of placeholder text is a translucent or light gray. The {{cssxref('::placeholder')}} pseudo-element is the input's [`placeholder` text](#placeholder). It can be styled with a limited subset of CSS properties.

```css
::placeholder {
  color: blue;
}
```

Only the subset of CSS properties that apply to the {{cssxref("::first-line")}} pseudo-element can be used in a rule using `::placeholder` in its selector.

### appearance

The {{cssxref("appearance")}} property enables the displaying of (almost) any element as a platform-native style based on the operating system's theme as well as the removal of any platform-native styling with the `none` value.

You could make a `<div>` look like a radio button with `div {appearance: radio;}` or a radio look like a checkbox with `[type="radio"] {appearance: checkbox;}`, but don't.

Setting `appearance: none` removes platform native borders, but not functionality.

### caret-color

A property specific to text entry-related elements is the CSS {{cssxref("caret-color")}} property, which lets you set the color used to draw the text input caret:

#### HTML

```html
<label for="textInput">Note the red caret:</label>
<input id="textInput" class="custom" size="32" />
```

#### CSS

```css
input.custom {
  caret-color: red;
  font:
    16px "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### Result

{{EmbedLiveSample('caret-color', 500, 80)}}

### object-position and object-fit

In certain cases (typically involving non-textual inputs and specialized interfaces), the `<input>` element is a [replaced element](/en-US/docs/Web/CSS/Replaced_element). When it is, the position and size of the element's size and positioning within its frame can be adjusted using the CSS {{cssxref("object-position")}} and {{cssxref("object-fit")}} properties

### Styling

For more information about adding color to elements in HTML, see:

- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color).

Also see:

- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling) and
- the [compatibility table of CSS properties](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls).

## Additional features

### Labels

Labels are needed to associate assistive text with an `<input>`. The {{HTMLElement("label")}} element provides explanatory information about a form field that is _always_ appropriate (aside from any layout concerns you have). It's never a bad idea to use a `<label>` to explain what should be entered into an `<input>` or {{HTMLElement("textarea")}}.

#### Associated labels

The semantic pairing of `<input>` and `<label>` elements is useful for assistive technologies such as screen readers. By pairing them using the `<label>`'s [`for`](/en-US/docs/Web/HTML/Element/label#for) attribute, you bond the label to the input in a way that lets screen readers describe inputs to users more precisely.

It does not suffice to have plain text adjacent to the `<input>` element. Rather, usability and accessibility requires the inclusion of either implicit or explicit {{HTMLElement("label")}}:

```html
<!-- inaccessible -->
<p>Enter your name: <input id="name" type="text" size="30" /></p>

<!-- implicit label -->
<p>
  <label>Enter your name: <input id="name" type="text" size="30" /></label>
</p>

<!-- explicit label -->
<p>
  <label for="name">Enter your name: </label>
  <input id="name" type="text" size="30" />
</p>
```

The first example is inaccessible: no relationship exists between the prompt and the `<input>` element.

In addition to an accessible name, the label provides a larger 'hit' area for mouse and touch screen users to click on or touch. By pairing a `<label>` with an `<input>`, clicking on either one will focus the `<input>`. If you use plain text to "label" your input, this won't happen. Having the prompt part of the activation area for the input is helpful for people with motor control conditions.

As web developers, it's important that we never assume that people will know all the things that we know. The diversity of people using the web—and by extension your website—practically guarantees that some of your site's visitors will have some variation in thought processes and/or circumstances that leads them to interpret your forms very differently from you without clear and properly-presented labels.

#### Placeholders are not accessible

The [`placeholder`](#placeholder) attribute lets you specify text that appears within the `<input>` element's content area itself when it is empty. The placeholder should never be required to understand your forms. It is not a label, and should not be used as a substitute, because it isn't. The placeholder is used to provide a hint as to what an inputted value should look like, not an explanation or prompt.

Not only is the placeholder not accessible to screen readers, but once the user enters any text into the form control, or if the form control already has a value, the placeholder disappears. Browsers with automatic page translation features may skip over attributes when translating, meaning the `placeholder` may not get translated.

> **Note:** Don't use the [`placeholder`](#placeholder) attribute if you can avoid it. If you need to label an `<input>` element, use the {{HTMLElement("label")}} element.

### Client-side validation

> **Warning:** Client-side validation is useful, but it does _not_ guarantee that the server will receive valid data. If the data must be in a specific format, _always_ verify it also on the server-side, and return a [`400` HTTP response](/en-US/docs/Web/HTTP/Status/400) if the format is invalid.

In addition to using CSS to style inputs based on the {{cssxref(":valid")}} or {{cssxref(":invalid")}} UI states based on the current state of each input, as noted in the [UI pseudo-classes](#ui_pseudo-classes) section above, the browser provides for client-side validation on (attempted) form submission. On form submission, if there is a form control that fails constraint validation, supporting browsers will display an error message on the first invalid form control; displaying a default message based on the error type, or a message set by you.

Some input types and other attributes place limits on what values are valid for a given input. For example, `<input type="number" min="2" max="10" step="2">` means only the number 2, 4, 6, 8, or 10 are valid. Several errors could occur, including a `rangeUnderflow` error if the value is less than 2, `rangeOverflow` if greater than 10, `stepMismatch` if the value is a number between 2 and 10, but not an even integer (does not match the requirements of the `step` attribute), or `typeMismatch` if the value is not a number.

For the input types whose domain of possible values is periodic (that is, at the highest possible value, the values wrap back around to the beginning rather than ending), it's possible for the values of the [`max`](#max) and [`min`](#min) properties to be reversed, which indicates that the range of permitted values starts at `min`, wraps around to the lowest possible value, then continues on until `max` is reached. This is particularly useful for dates and times, such as when you want to allow the range to be from 8 PM to 8 AM:

```html
<input type="time" min="20:00" max="08:00" name="overnight" />
```

Specific attributes and their values can lead to a specific error {{domxref('ValidityState')}}:

<table class="no-markdown">
  <caption>
    Validity object errors depend on the {{htmlelement('input')}}
    attributes and their values:
  </caption>
  <thead>
    <tr>
      <th scope="col">Attribute</th>
      <th scope="col">Relevant property</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#max"><code>max</code></a></td>
      <td>{{domxref('validityState.rangeOverflow')}}</td>
      <td>
        Occurs when the value is greater than the maximum value as defined by
        the <code>max</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#maxlength"><code>maxlength</code></a></td>
      <td>{{domxref('validityState.tooLong')}}</td>
      <td>
        Occurs when the number of characters is greater than the number allowed by the <code>maxlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#min"><code>min</code></a></td>
      <td>{{domxref('validityState.rangeUnderflow')}}</td>
      <td>
        Occurs when the value is less than the minimum value as defined by the <code>min</code> attribute
      </td>
    </tr>
    <tr>
      <td><a href="#minlength"><code>minlength</code></a></td>
      <td>{{domxref('validityState.tooShort')}}</td>
      <td>
        Occurs when the number of characters is less than the number required by the <code>minlength</code> property
      </td>
    </tr>
    <tr>
      <td><a href="#pattern"><code>pattern</code></a></td>
      <td>{{domxref('validityState.patternMismatch')}}</td>
      <td>
        Occurs when a pattern attribute is included with a valid regular expression and the <code>value</code> does not match it.
      </td>
    </tr>
    <tr>
      <td><a href="#required"><code>required</code></a></td>
      <td>{{domxref('validityState.valueMissing')}}</td>
      <td>
        Occurs when the <code>required</code> attribute is present but the value is <code>null</code> or radio or checkbox is not checked.
      </td>
    </tr>
    <tr>
      <td><a href="#step"><code>step</code></a></td>
      <td>{{domxref('validityState.stepMismatch')}}</td>
      <td>
        The value doesn't match the step increment. Increment default is <code>1</code>, so only integers are valid on<code> type="number"</code>
        is step is not included. <code>step="any"</code> will never throw this error.
      </td>
    </tr>
    <tr>
      <td><a href="#type"><code>type</code></a></td>
      <td>{{domxref('validityState.typeMismatch')}}</td>
      <td>
        Occurs when the value is not of the correct type, for example an email does not contain an <code>@</code> or a url doesn't contain a protocol.
      </td>
    </tr>
  </tbody>
</table>

If a form control doesn't have the `required` attribute, no value, or an empty string, is not invalid. Even if the above attributes are present, with the exception of `required`, an empty string will not lead to an error.

We can set limits on what values we accept, and supporting browsers will natively validate these form values and alert the user if there is a mistake when the form is submitted.

In addition to the errors described in the table above, the `validityState` interface contains the `badInput`, `valid`, and `customError` boolean readonly properties. The validity object includes:

- {{domxref('validityState.valueMissing')}}
- {{domxref('validityState.typeMismatch')}}
- {{domxref('validityState.patternMismatch')}}
- {{domxref('validityState.tooLong')}}
- {{domxref('validityState.tooShort')}}
- {{domxref('validityState.rangeUnderflow')}}
- {{domxref('validityState.rangeOverflow')}}
- {{domxref('validityState.stepMismatch')}}
- {{domxref('validityState.badInput')}}
- {{domxref('validityState', 'validityState.valid')}}
- {{domxref('validityState', 'validityState.customError')}}

For each of these Boolean properties, a value of `true` indicates that the specified reason validation may have failed is true, with the exception of the `valid` property, which is `true` if the element's value obeys all constraints.

If there is an error, supporting browsers will both alert the user and prevent the form from being submitted. A word of caution: if a custom error is set to a truthy value (anything other than the empty string or `null`), the form will be prevented from being submitted. If there is no custom error message, and none of the other properties return true, `valid` will be true, and the form can be submitted.

```js
function validate(input) {
  let validityState_object = input.validity;
  if (validityState_object.valueMissing) {
    input.setCustomValidity("A value is required");
  } else if (validityState_object.rangeUnderflow) {
    input.setCustomValidity("Your value is too low");
  } else if (validityState_object.rangeOverflow) {
    input.setCustomValidity("Your value is too high");
  } else {
    input.setCustomValidity("");
  }
}
```

The last line, setting the custom validity message to the empty string is vital. If the user makes an error, and the validity is set, it will fail to submit, even if all the values are valid, until the message is `null`.

#### Custom validation error example

If you want to present a custom error message when a field fails to validate, you need to use the [Constraint Validation API](/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript) available on `<input>` (and related) elements. Take the following form:

```html
<form>
  <label for="name">Enter username (upper and lowercase letters): </label>
  <input type="text" name="name" id="name" required pattern="[A-Za-z]+" />
  <button>Submit</button>
</form>
```

The basic HTML form validation features will cause this to produce a default error message if you try to submit the form with either no valid filled in, or a value that does not match the `pattern`.

If you wanted to instead display custom error messages, you could use JavaScript like the following:

```js
const nameInput = document.querySelector("input");

nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("Enter your username!");
  } else {
    nameInput.setCustomValidity(
      "Usernames can only contain upper and lowercase letters. Try again!",
    );
  }
});
```

The example renders like so:

{{EmbedLiveSample('Custom_validation_error_example')}}

In brief:

- We check the valid state of the input element every time its value is changed by running the `checkValidity()` method via the `input` event handler.
- If the value is invalid, an `invalid` event is raised, and the `invalid` event handler function is run. Inside this function we work out whether the value is invalid because it is empty, or because it doesn't match the pattern, using an `if ()` block, and set a custom validity error message.
- As a result, if the input value is invalid when the submit button is pressed, one of the custom error messages will be shown.
- If it is valid, it will submit as you'd expect. For this to happen, the custom validity has to be cancelled, by invoking `setCustomValidity()` with an empty string value. We therefore do this every time the `input` event is raised. If you don't do this, and a custom validity was previously set, the input will register as invalid, even if it currently contains a valid value on submission.

> **Note:** Always validate input constraints both client side and server side. Constraint validation doesn't remove the need for validation on the _server side_. Invalid values can still be sent by older browsers or by bad actors.

> **Note:** Firefox supported a proprietary error attribute — `x-moz-errormessage` — for many versions, which allowed you set custom error messages in a similar way. This has been removed as of version 66 (see [Firefox bug 1513890](https://bugzil.la/1513890)).

### Localization

The allowed inputs for certain `<input>` types depend on the locale. In some locales, 1,000.00 is a valid number, while in other locales the valid way to enter this number is 1.000,00.

Firefox uses the following heuristics to determine the locale to validate the user's input (at least for `type="number"`):

- Try the language specified by a `lang`/`xml:lang` attribute on the element or any of its parents.
- Try the language specified by any `Content-Language` HTTP header. Or,
- If none specified, use the browser's locale.

### Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, listed, submittable, resettable, form-associated element,
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>. If the <a href="#type"><code>type</code></a> is not
        <code>hidden</code>, then labelable element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>None; it is a {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=checkbox</code>:
            <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code>
          </li>
          <li>
            <code>type=email</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code
                  ><a
                    href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=image</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=number</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li><code>type=radio</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><code>type=range</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
          <li>
            <code>type=reset</code>:
            <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=search</code>
            <ul>
              <li>
                with no <code>list</code> attribute: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>
              </li>
              <li>
                with <code>list</code> attribute:<a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=submit</code>:
            <code
              ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code>
          </li>
          <li>
            <code>type=tel</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=text</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=url</code>
            <ul>
              <li>
                with no <code>list</code> attribute:
                <code
                  ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role">textbox</a ></code>
              </li>
              <li>
                with <code>list</code> attribute: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>
              </li>
            </ul>
          </li>
          <li>
            <code>type=color|date|datetime-local|file|hidden|month|password|time|week</code>:
            <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">no corresponding role</a>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <ul>
          <li>
            <code>type=button</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a>
          </li>
          <li>
            <code>type=checkbox</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a> when used
            with <code>aria-pressed</code>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=image</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a>
          </li>
          <li>
            <code>type=radio</code>: <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a>
          </li>
          <li>
            <code>type=text</code> with no <code>list</code> attribute:
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role"><code>combobox</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/searchbox_role"><code>searchbox</code></a>,
            <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role"><code>spinbutton</code></a>
          </li>
          <li>
            <code>type=color|date|datetime-local|email|file|hidden|</code>
              <code>month|number|password|range|reset|search|submit|tel|url|week</code>
            or <code>text</code> with <code>list</code> attribute: no
            <code>role</code> permitted
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLInputElement")}}</td>
    </tr>
  </tbody>
</table>

## Accessibility concerns

### Labels

When including inputs, it is an accessibility requirement to add labels alongside. This is needed so those who use assistive technologies can tell what the input is for. Also, clicking or touching a label gives focus to the label's associated form control. This improves the accessibility and usability for sighted users, increases the area a user can click or touch to activate the form control. This is especially useful (and even needed) for radio buttons and checkboxes, which are tiny. For more information about labels in general see [Labels](#labels) .

The following is an example of how to associate the `<label>` with an `<input>` element in the above style. You need to give the `<input>` an `id` attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.

```html
<label for="peas">Do you like peas?</label>
<input type="checkbox" name="peas" id="peas" />
```

### Size

Interactive elements such as form input should provide an area large enough that it is easy to activate them. This helps a variety of people, including people with motor control issues and people using non-precise forms of input such as a stylus or fingers. A minimum interactive size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Form constraint validation](/en-US/docs/Web/HTML/Constraint_validation)
- [Your first HTML form](/en-US/docs/Learn/Forms/Your_first_form)
- [How to structure an HTML form](/en-US/docs/Learn/Forms/How_to_structure_a_web_form)
- [The native form widgets](/en-US/docs/Learn/Forms/Basic_native_form_controls)
- [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
- [Form data validation](/en-US/docs/Learn/Forms/Form_validation)
- [How to build custom form widgets](/en-US/docs/Learn/Forms/How_to_build_custom_form_controls)
- [HTML forms in legacy browsers](/en-US/docs/Learn/Forms/HTML_forms_in_legacy_browsers)
- [Styling HTML forms](/en-US/docs/Learn/Forms/Styling_web_forms)
- [Advanced styling for HTML forms](/en-US/docs/Learn/Forms/Advanced_form_styling)
- [CSS property compatibility table](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
