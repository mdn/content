---
title: SVGTransformList
slug: Web/API/SVGTransformList
page-type: web-api-interface
browser-compat: api.SVGTransformList
---

{{APIRef("SVG")}}

The **`SVGTransformList`** interface defines a list of {{ domxref("SVGTransform") }} objects.

An `SVGTransformList` object can be designated as read only, which means that attempts to modify the object will result in an exception being thrown.

An `SVGTransformList` is indexable and can be accessed like an array.

## Instance properties

- {{domxref("SVGTransformList.numberOfItems", "numberOfItems")}}
  - : The number of items in the list.
- {{domxref("SVGTransformList.length", "length")}}
  - : The number of items in the list.

## Instance methods

- {{domxref("SVGTransformList.clear", "clear()")}}
  - : Clears all existing current items from the list, with the result being an empty list.
- {{domxref("SVGTransformList.initialize", "initialize()")}}
  - : Clears all existing current items from the list and re-initializes the list to hold the single item specified by the parameter. If the inserted item is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. The return value is the item inserted into the list.
- {{domxref("SVGTransformList.getItem", "getItem()")}}
  - : Returns the specified item from the list. The returned item is the item itself and not a copy. Any changes made to the item are immediately reflected in the list. The first item is number `0`.
- {{domxref("SVGTransformList.insertItemBefore", "insertItemBefore()")}}
  - : Inserts a new item into the list at the specified position. The first item is number `0`. If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. If the item is already in this list, note that the index of the item to insert before is before the removal of the item. If the `index` is equal to 0, then the new item is inserted at the front of the list. If the index is greater than or equal to `numberOfItems`, then the new item is appended to the end of the list.
- {{domxref("SVGTransformList.replaceItem", "replaceItem()")}}
  - : Replaces an existing item in the list with a new item. If `newItem` is already in a list, it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy. If the item is already in this list, note that the index of the item to replace is before the removal of the item.
- {{domxref("SVGTransformList.removeItem", "removeItem()")}}
  - : Removes an existing item from the list.
- {{domxref("SVGTransformList.appendItem", "appendItem()")}}
  - : Inserts a new item at the end of the list. If `newItem` is already in a list it is removed from its previous list before it is inserted into this list. The inserted item is the item itself and not a copy.
- {{domxref("SVGTransformList.createSVGTransformFromMatrix", "createSVGTransformFromMatrix()")}}
  - : Creates an `SVGTransform` object which is initialized to transform of type `SVG_TRANSFORM_MATRIX` and whose values are the given matrix. The values from the parameter matrix are copied, the matrix parameter is not adopted as `SVGTransform::matrix`.
- {{domxref("SVGTransformList.consolidate", "consolidate()")}}
  - : Consolidates the list of separate `SVGTransform` objects by multiplying the equivalent transformation matrices together to result in a list consisting of a single `SVGTransform` object of type `SVG_TRANSFORM_MATRIX`. The consolidation operation creates new `SVGTransform` object as the first and only item in the list. The returned item is the item itself and not a copy. Any changes made to the item are immediately reflected in the list.

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
  <script>
    <![CDATA[
      function transformMe(evt) {
        // svg root element to access the createSVGTransform() function
        const svgRoot = evt.target.parentNode;
        // SVGTransformList of the element that has been clicked on
        const tfmList = evt.target.transform.baseVal;

        // Create a separate transform object for each transform
        const translate = svgRoot.createSVGTransform();
        translate.setTranslate(50,5);
        const rotate = svgRoot.createSVGTransform();
        rotate.setRotate(10,0,0);
        const scale = svgRoot.createSVGTransform();
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
