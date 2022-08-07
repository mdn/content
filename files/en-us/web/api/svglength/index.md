---
title: SVGLength
slug: Web/API/SVGLength
page-type: web-api-interface
tags:
  - API
  - NeedsExample
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGLength
---
{{APIRef("SVG")}}

## SVG length interface

The `SVGLength` interface correspond to the [\<length>](/en-US/docs/Web/SVG/Content_type#length) basic data type.

An `SVGLength` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

### Interface overview

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><var>None</var></td>
    </tr>
    <tr>
      <th scope="row">Methods</th>
      <td>
        <ul>
          <li>
            <code
              >void <strong>newValueSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>, in float
              <var>valueInSpecifiedUnits</var>)</code
            >
          </li>
          <li>
            <code
              >void <strong>convertToSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>)</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Properties</th>
      <td>
        <ul>
          <li>readonly unsigned short <code>unitType</code></li>
          <li>float <code>value</code></li>
          <li>float <code>valueInSpecifiedUnits</code></li>
          <li>
            string <code>valueAsString</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Constants</th>
      <td>
        <ul>
          <li><code>SVG_LENGTHTYPE_UNKNOWN</code> = <code>0</code></li>
          <li><code>SVG_LENGTHTYPE_NUMBER</code> = <code>1</code></li>
          <li><code>SVG_LENGTHTYPE_PERCENTAGE</code> = <code>2</code></li>
          <li><code>SVG_LENGTHTYPE_EMS</code> = <code>3</code></li>
          <li><code>SVG_LENGTHTYPE_EXS</code> = <code>4</code></li>
          <li><code>SVG_LENGTHTYPE_PX</code> = <code>5</code></li>
          <li><code>SVG_LENGTHTYPE_CM</code> = <code>6</code></li>
          <li><code>SVG_LENGTHTYPE_MM</code> = <code>7</code></li>
          <li><code>SVG_LENGTHTYPE_IN</code> = <code>8</code></li>
          <li><code>SVG_LENGTHTYPE_PT</code> = <code>9</code></li>
          <li><code>SVG_LENGTHTYPE_PC</code> = <code>10</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGLength"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Example

```xml
<svg height="200" onload="start();" version="1.1" width="200" xmlns="http://www.w3.org/2000/svg">
  <script><![CDATA[
function start() {
  const rect = document.getElementById("myRect");
  const val  = rect.x.baseVal;

  // read x in pixel and cm units
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits: " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // set x = 20pt and read it out in pixel and pt units
  val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // convert x = 20pt to inches and read out in pixel and inch units
  val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_IN);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);
}
]]></script>
  <rect id="myRect"
        x="1cm" y="1cm"
        fill="green" stroke="black" stroke-width="1"
        width="1cm" height="1cm"
  />
</svg>
```

Results on a desktop monitor (pixel units will be dpi-dependent):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## Constants

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SVG_LENGTHTYPE_UNKNOWN</code></td>
      <td><code>0</code></td>
      <td>
        The unit type is not one of predefined unit types. It is invalid to
        attempt to define a new value of this type or to attempt to switch an
        existing value to this type.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_NUMBER</code></td>
      <td><code>1</code></td>
      <td>
        No unit type was provided (i.e., a unitless value was specified), which
        indicates a value in user units.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PERCENTAGE</code></td>
      <td><code>2</code></td>
      <td>A percentage value was specified.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EMS</code></td>
      <td><code>3</code></td>
      <td>A value was specified using the em units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EXS</code></td>
      <td><code>4</code></td>
      <td>A value was specified using the ex units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PX</code></td>
      <td><code>5</code></td>
      <td>A value was specified using the px units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_CM</code></td>
      <td><code>6</code></td>
      <td>A value was specified using the cm units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_MM</code></td>
      <td><code>7</code></td>
      <td>A value was specified using the mm units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_IN</code></td>
      <td><code>8</code></td>
      <td>A value was specified using the in units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PT</code></td>
      <td><code>9</code></td>
      <td>A value was specified using the pt units defined in CSS2.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PC</code></td>
      <td><code>10</code></td>
      <td>A value was specified using the pc units defined in CSS2.</td>
    </tr>
  </tbody>
</table>

## Properties

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>unitType</code></td>
      <td>unsigned short</td>
      <td>
        The type of the value as specified by one of the
        <code>SVG_LENGTHTYPE_*</code> constants defined on this interface.
      </td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>float</td>
      <td>
        <p>
          The value as a floating point value, in user units. Setting this
          attribute will cause <code>valueInSpecifiedUnits</code> and
          <code>valueAsString</code> to be updated automatically to reflect this
          setting.
        </p>
        <p>
          <strong>Exceptions on setting:</strong> a
          {{ domxref("DOMException") }} with code
          <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the length
          corresponds to a read only attribute or when the object itself is read
          only.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueInSpecifiedUnits</code></td>
      <td>float</td>
      <td>
        <p>
          The value as a floating point value, in the units expressed by
          <code>unitType</code>. Setting this attribute will cause
          <code>value</code> and <code>valueAsString</code> to be updated
          automatically to reflect this setting.
        </p>
        <p>
          <strong>Exceptions on setting:</strong> a
          {{ domxref("DOMException") }} with code
          <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the length
          corresponds to a read only attribute or when the object itself is read
          only.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueAsString</code></td>
      <td>string</td>
      <td>
        <p>
          The value as a string value, in the units expressed by
          <code>unitType</code>. Setting this attribute will cause
          <code>value</code>, <code>valueInSpecifiedUnits</code>, and
          <code>unitType</code> to be updated automatically to reflect this
          setting.
        </p>
        <p><strong>Exceptions on setting:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>SYNTAX_ERR</code> is raised if the assigned string cannot be
            parsed as a valid
            <a href="/en-US/docs/Web/SVG/Content_type#Length">&#x3C;length></a>.
          </li>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the length
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Methods

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name &#x26; Arguments</th>
      <th>Return</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>newValueSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>, in float <var>valueInSpecifiedUnits</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        <p>
          Reset the value as a number with an associated unitType, thereby
          replacing the values for all of the attributes on the object.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NOT_SUPPORTED_ERR</code> is raised if <code>unitType</code> is
            <code>SVG_LENGTHTYPE_UNKNOWN</code> or not a valid unit type
            constant (one of the other <code>SVG_LENGTHTYPE_*</code> constants
            defined on this interface).
          </li>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the length
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>convertToSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        Preserve the same underlying stored value, but reset the stored unit
        identifier to the given <code><var>unitType</var></code
        >. Object attributes <code>unitType</code>,
        <code>valueInSpecifiedUnits</code>, and <code>valueAsString</code> might
        be modified as a result of this method. For example, if the original
        value were <code>"0.5cm"</code> and the method was invoked to convert to
        millimeters, then the <code>unitType</code> would be changed to
        <code>SVG_LENGTHTYPE_MM</code>, <code>valueInSpecifiedUnits</code> would
        be changed to the numeric value <code>5</code> and
        <code>valueAsString</code> would be changed to <code>"5mm"</code>.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
