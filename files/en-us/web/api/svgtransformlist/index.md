---
title: SVGTransformList
slug: Web/API/SVGTransformList
page-type: web-api-interface
browser-compat: api.SVGTransformList
---

{{APIRef("SVG")}}

## SVG transform list interface

The `SVGTransformList` defines a list of {{ domxref("SVGTransform") }} objects.

An `SVGTransformList` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

An `SVGTransformList` is indexable and can be accessed like an array.

### Interface overview

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Also implement</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Methods</th>
      <td>
        <ul>
          <li><code>void clear()</code></li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >initialize(in {{ domxref("SVGTransform") }}
              <em>newItem</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code>getItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >insertItemBefore(in {{ domxref("SVGTransform") }}
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >replaceItem(in {{ domxref("SVGTransform") }}
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code>removeItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >appendItem(in {{ domxref("SVGTransform") }}
              <em>newItem</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >createSVGTransformFromMatrix(in
              {{ domxref("DOMMatrix") }})</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }} <code>consolidate()</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Properties</th>
      <td>
        <ul>
          <li>readonly unsigned long <code>numberOfItems</code></li>
          <li>
            readonly unsigned long
            <code>length</code> {{ non-standard_inline() }}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGTransformList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instance properties

| Name                                 | Type          | Description                      |
| ------------------------------------ | ------------- | -------------------------------- |
| `numberOfItems`                      | unsigned long | The number of items in the list. |
| `length` {{ non-standard_inline() }} | unsigned long | The number of items in the list. |

## Instance methods

<table class="standard-table">
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
        <code><strong>clear</strong>()</code>
      </td>
      <td><code>void</code></td>
      <td>
        <p>
          Clears all existing current items from the list, with the result being
          an empty list.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>initialize</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Clears all existing current items from the list and re-initializes the
          list to hold the single item specified by the parameter. If the
          inserted item is already in a list, it is removed from its previous
          list before it is inserted into this list. The inserted item is the
          item itself and not a copy. The return value is the item inserted into
          the list.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(in unsigned long <em>index</em>)</code>
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Returns the specified item from the list. The returned item is the
          item itself and not a copy. Any changes made to the item are
          immediately reflected in the list. The first item is number 0.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Inserts a new item into the list at the specified position. The first
          item is number 0. If <code>newItem</code> is already in a list, it is
          removed from its previous list before it is inserted into this list.
          The inserted item is the item itself and not a copy. If the item is
          already in this list, note that the index of the item to insert before
          is before the removal of the item. If the <code>index</code> is equal
          to 0, then the new item is inserted at the front of the list. If the
          index is greater than or equal to <code>numberOfItems</code>, then the
          new item is appended to the end of the list.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Replaces an existing item in the list with a new item. If
          <code>newItem</code> is already in a list, it is removed from its
          previous list before it is inserted into this list. The inserted item
          is the item itself and not a copy. If the item is already in this
          list, note that the index of the item to replace is before the removal
          of the item.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>INDEX_SIZE_ERR</code> is raised if the index number is greater
            than or equal to <code>numberOfItems</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>removeItem</strong>(in unsigned long <em>index</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>Removes an existing item from the list.</p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>INDEX_SIZE_ERR</code> is raised if the index number is greater
            than or equal to <code>numberOfItems</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Inserts a new item at the end of the list. If <code>newItem</code> is
          already in a list, it is removed from its previous list before it is
          inserted into this list. The inserted item is the item itself and not
          a copy.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>createSVGTransformFromMatrix</strong>(in
          {{ domxref("DOMMatrix") }})</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        Creates an <code>SVGTransform</code> object which is initialized to
        transform of type <code>SVG_TRANSFORM_MATRIX</code> and whose values are
        the given matrix. The values from the parameter matrix are copied, the
        matrix parameter is not adopted as <code>SVGTransform::matrix</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>consolidate</strong>()</code>
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Consolidates the list of separate <code>SVGTransform</code> objects by
          multiplying the equivalent transformation matrices together to result
          in a list consisting of a single <code>SVGTransform</code> object of
          type <code>SVG_TRANSFORM_MATRIX</code>. The consolidation operation
          creates new <code>SVGTransform</code> object as the first and only
          item in the list. The returned item is the item itself and not a copy.
          Any changes made to the item are immediately reflected in the list.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{ domxref("DOMException") }} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Examples

### Using multiple SVGTransform objects

In this example we create a function that will apply three different transformations to the SVG element that has been clicked on. In order to do this we create a separate {{domxref("SVGTransform")}} object for each transformation — such as `translate`, `rotate`, and `scale`. We apply multiple transformation by appending the transform object to the `SVGTransformList` associated with an SVG element.

```html-nolint
<svg
  id="my-svg"
  viewBox="0 0 300 280"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <desc>
    Example showing how to transform svg elements that using SVGTransform
    objects
  </desc>
  <script type="application/ecmascript">
    <![CDATA[
      function transformMe(evt) {
        // svg root element to access the createSVGTransform() function
        const svgroot = evt.target.parentNode;
        // SVGTransformList of the element that has been clicked on
        const tfmList = evt.target.transform.baseVal;

        // Create a separate transform object for each transform
        const translate = svgroot.createSVGTransform();
        translate.setTranslate(50,5);
        const rotate = svgroot.createSVGTransform();
        rotate.setRotate(10,0,0);
        const scale = svgroot.createSVGTransform();
        scale.setScale(0.8,0.8);

        // apply the transformations by appending the SVGTransform objects to the SVGTransformList associated with the element
        tfmList.appendItem(translate);
        tfmList.appendItem(rotate);
        tfmList.appendItem(scale);
      }
    ]]>
  </script>

  <polygon
    fill="orange"
    stroke="black"
    stroke-width="5"
    points="100,225 100,115 130,115 70,15 70,15 10,115 40,115 40,225"
    onclick="transformMe(evt)" />
  <rect
    x="200"
    y="100"
    width="100"
    height="100"
    fill="yellow"
    stroke="black"
    stroke-width="5"
    onclick="transformMe(evt)" />
  <text x="40" y="250" font-family="Verdana" font-size="16" fill="green">
    Click on a shape to transform it
  </text>
</svg>
```

Live preview:

{{EmbedLiveSample("Using_multiple_SVGTransform_objects",300,280)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
