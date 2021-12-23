---
title: Microdata DOM API
slug: Web/API/Microdata_DOM_API
---
> **Warning:** Microdata were implemented in some browsers for a long time. Nowadays, they have been abandoned and removed from all browsers and are therefore **deprecated**. You can't use them anymore and this document is kept as information only.

Microdata becomes even more useful when scripts can use it to expose information to the user, for example offering it in a form that can be used by other applications. The `document.getItems(typeNames)` method provides access to the top-level microdata items. It returns a NodeList containing the items with the specified types, or all types if no argument is specified. Each item is represented in the DOM by the element on which the relevant itemscope attribute is found. These elements have their element.itemScope IDL attribute set to true. The type(s) of items can be obtained using the element.itemType IDL attribute on the element with the itemscope attribute.

## Methods

`document . getItems( [ types ] )`

Returns a NodeList of the elements in the Document that create items, that are not part of other items, and that are of the types given in the argument, if any are listed.

The types argument is interpreted as a space-separated list of types.

The `document.getItems(typeNames)` method takes a string that contains an unordered set of unique space-separated tokens that are case-sensitive, representing types. When called, the method must return a live NodeList object containing all the elements in the document, in tree order, that are each top-level microdata items whose types include all the types specified in the method's argument, having obtained the types by splitting the string on spaces. If there are no tokens specified in the argument, then the method must return a NodeList containing all the top-level microdata items in the document. When the method is invoked on a Document object again with the same argument, the user agent may return the same object as the object returned by the earlier call. In other cases, a new NodeList object must be returned.

## Properties

`element . itemValue [ = value ]`

Returns the element's value.

Can be set, to change the element's value. Setting the value when the element has no itemprop attribute or when the element's value is an item throws an InvalidAccessError exception.

`element . properties`

If the element has an itemscope attribute, returns an HTMLPropertiesCollection object with all the element's properties. Otherwise, an empty HTMLPropertiesCollection object.

## Code example

This sample shows how the [getItems()](https://www.w3.org/TR/microdata/#dom-document-getitems) method can be used to obtain a list of all the top-level microdata items of a particular type given in the document:

```js
var cats = document.getItems("http://example.com/feline");
```

Once an element representing an [item](https://www.w3.org/TR/microdata/#concept-item "concept-item") has been obtained, its properties can be extracted using the [properties](https://www.w3.org/TR/microdata/#dom-properties) IDL attribute. This attribute returns an [HTMLPropertiesCollection](https://www.w3.org/TR/microdata/#htmlpropertiescollection-0), which can be enumerated to go through each element that adds one or more properties to the item. It can also be indexed by name, which will return an object with a list of the elements that add properties with that name.

Each element that adds a property also has an [itemValue](https://www.w3.org/TR/microdata/#dom-itemvalue) IDL attribute that returns its value.

## Code example

This sample gets the first item of type "`http://example.net/user`" and then pops up an alert using the "name" property from that item.

```js
var user = document.getItems('http://example.net/user')[0];
alert('Hello ' + user.properties['name'][0].itemValue + '!');
```

The [HTMLPropertiesCollection](https://www.w3.org/TR/microdata/#htmlpropertiescollection-0) object, when indexed by name in this way, actually returns a [PropertyNodeList](https://www.w3.org/TR/microdata/#propertynodelist) object with all the matching properties. The [PropertyNodeList](https://www.w3.org/TR/microdata/#propertynodelist) object can be used to obtain all the values at once using*its* [getValues](https://www.w3.org/TR/microdata/#dom-propertynodelist-getvalues) method, which returns an array of all the values.

## Code example

In an earlier example, a "http\://example.org/animals#cat" item had two "http\://example.com/color" values. This script looks up the first such item and then lists all its values.

```js
var cat = document.getItems('http://example.org/animals#cat')[0];
var colors = cat.properties['http://example.com/color'].getValues();
var result;
if (colors.length == 0) {
  result = 'Color unknown.';
} else if (colors.length == 1) {
  result = 'Color: ' + colors[0];
} else {
  result = 'Colors:';
  for (var i = 0; i < colors.length; i += 1)
    result += ' ' + colors[i];
}
```

It's also possible to get a list of all the [property names](https://www.w3.org/TR/microdata/#property-names) using the object's [names](https://www.w3.org/TR/microdata/#dom-htmlpropertiescollection-names) IDL attribute.

## Code example

This example creates a big list with a nested list for each item on the page, each with all of the property names used in that item.

```js
var outer = document.createElement('ul');
var items = document.getItems();
for (var item = 0; item < items.length; item += 1) {
  var itemLi = document.createElement('li');
  var inner = document.createElement('ul');
  for (var name = 0; name < items[item].properties.names.length; name += 1) {
    var propLi = document.createElement('li');
    propLi.appendChild(document.createTextNode(items[item].properties.names[name]));
    inner.appendChild(propLi);
  }
  itemLi.appendChild(inner);
  outer.appendChild(itemLi);
}
document.body.appendChild(outer);
```

If faced with the following from an earlier example:

```html
<section itemscope itemtype="http://example.org/animals#cat">
<h1 itemprop="name http://example.com/fn">Hedral</h1>
<p itemprop="desc">Hedral is a male american domestic
shorthair, with a fluffy <span
itemprop="http://example.com/color">black</span> fur with <span
itemprop="http://example.com/color">white</span> paws and belly.</p>
<img itemprop="img" src="hedral.jpeg" alt="" title="Hedral, age 18 months">
</section>
```

...it would result in the following output:

    name
    http://example.com/fn
    desc
    http://example.com/color
    img

(The duplicate occurrence of "http\://example.com/color" is not included in the list.)

## HTMLPropertiesCollection

The HTMLPropertiesCollection interface is used for collections of elements that add name-value pairs to a particular item in the microdata model.

### Interface description language

    interface HTMLPropertiesCollection : HTMLCollection {
      // inherits length and item()
      getter PropertyNodeList? namedItem(DOMString name); // shadows inherited namedItem()
      readonly attribute DOMString[] names;
    };

    typedef sequence<any> PropertyValueArray;

    interface PropertyNodeList : NodeList {
      PropertyValueArray getValues();
    };

- `collection . length`
  - : Returns the number of elements in the collection.
- `element = collection . item(index)`
  - : Returns the element with index from the collection. The items are sorted in tree order.
- `collection[index]`
  - : Returns the element with index from the collection. The items are sorted in tree order.
- `propertyNodeList = collection . namedItem(name)`
  - : Returns a PropertyNodeList object containing any elements that add a property named name.
- `collection[name]`
  - : Returns a PropertyNodeList object containing any elements that add a property named name. The name index has to be one of the values listed in the names list.
- `collection . names`
  - : Returns an array with the property names of the elements in the collection.
- `propertyNodeList . getValues()`
  - : Returns an array of the various values that the relevant elements have.

<!---->

- The object's supported property indices are as defined for HTMLCollection objects.
- The supported property names consist of the property names of all the elements represented by the collection, in tree order, ignoring later duplicates.
- The names attribute must return a live read only array object giving the property names of all the elements represented by the collection, listed in tree order, but with duplicates removed, leaving only the first occurrence of each name. The same object must be returned each time.
- The namedItem(name) method must return a PropertyNodeList object representing a live view of the HTMLPropertiesCollection object, further filtered so that the only nodes in the PropertyNodeList object are those that have a property name equal to name. The nodes in the PropertyNodeList object must be sorted in tree order, and the same object must be returned each time a particular name is queried.
- Members of the PropertyNodeList interface inherited from the NodeList interface must behave as they would on a NodeList object.
- The getValues method the PropertyNodeList object must return a newly constructed array whose values are the values obtained from the itemValue IDL attribute of each of the elements represented by the object, in tree order.
