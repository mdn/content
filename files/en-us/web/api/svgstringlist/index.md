---
title: SVGStringList
slug: Web/API/SVGStringList
page-type: web-api-interface
tags:
  - API
  - Reference
  - SVG
  - SVG DOM
browser-compat: api.SVGStringList
---
{{APIRef("SVG")}}

## SVG string list interface

The `SVGStringList` defines a list of strings.

An `SVGStringList` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

### Interface overview

<table class="no-markdown">
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
            string
            <code>initialize(string <em>newItem</em>)</code>
          </li>
          <li>
            string
            <code>getItem(number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>insertItemBefore(string <em>newItem</em>, number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>replaceItem(string <em>newItem</em>,
              number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>removeItem(number <em>index</em>)</code>
          </li>
          <li>
            string
            <code>appendItem(string <em>newItem</em>)</code>
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
            <code>length</code> {{non-standard_inline}}
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normative document</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGStringList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
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
      <td><code>numberOfItems</code></td>
      <td><code>unsigned long</code></td>
      <td>The number of items in the list.</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td><code>unsigned long</code></td>
      <td>
        A mirror of the value in <code>numberOfItems</code>, for consistency
        with other interfaces. {{non-standard_inline}}
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
        <code><strong>clear</strong>()</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Clears all existing current items from the list, with the result being
          an empty list.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>initialize</strong>(string <em>newItem</em>)</code>
      </td>
      <td>string</td>
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
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(number <em>index</em>)</code>
      </td>
      <td>string</td>
      <td>
        <p>
          Returns the specified item from the list. The returned item is the
          item itself and not a copy. Any changes made to the item are
          immediately reflected in the list. The first item is number 0.
        </p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
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
          ><strong>insertItemBefore</strong>(string <em>newItem</em>, number <em>index</em>)</code>
      </td>
      <td>string</td>
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
            a {{domxref("DOMException")}} with code
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
          ><strong>replaceItem</strong>(string <em>newItem</em>, number <em>index</em>)</code
        >
      </td>
      <td>string</td>
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
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{domxref("DOMException")}} with code
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
      <td>string</td>
      <td>
        <p>Removes an existing item from the list.</p>
        <p><strong>Exceptions:</strong></p>
        <ul>
          <li>
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
          <li>
            a {{domxref("DOMException")}} with code
            <code>INDEX_SIZE_ERR</code> is raised if the index number is greater
            than or equal to <code>numberOfItems</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(string <em>newItem</em>)</code
        >
      </td>
      <td>string</td>
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
            a {{domxref("DOMException")}} with code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> is raised when the list
            corresponds to a read only attribute or when the object itself is
            read only.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
