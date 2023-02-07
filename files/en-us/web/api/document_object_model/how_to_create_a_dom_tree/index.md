---
title: How to create a DOM tree
slug: Web/API/Document_object_model/How_to_create_a_DOM_tree
page-type: guide
---

{{DefaultAPISidebar("DOM")}}

This page describes how to use the DOM API in JavaScript to create XML documents.

Consider the following XML document:

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

You can use the DOM API to create an in-memory representation of this document:

```js
const doc = document.implementation.createDocument("", "", null);
const peopleElem = doc.createElement("people");

const personElem1 = doc.createElement("person");
personElem1.setAttribute("first-name", "eric");
personElem1.setAttribute("middle-initial", "h");
personElem1.setAttribute("last-name", "jung");

const addressElem1 = doc.createElement("address");
addressElem1.setAttribute("street", "321 south st");
addressElem1.setAttribute("city", "denver");
addressElem1.setAttribute("state", "co");
addressElem1.setAttribute("country", "usa");
personElem1.appendChild(addressElem1);

const addressElem2 = doc.createElement("address");
addressElem2.setAttribute("street", "123 main st");
addressElem2.setAttribute("city", "arlington");
addressElem2.setAttribute("state", "ma");
addressElem2.setAttribute("country", "usa");
personElem1.appendChild(addressElem2);

const personElem2 = doc.createElement("person");
personElem2.setAttribute("first-name", "jed");
personElem2.setAttribute("last-name", "brown");

const addressElem3 = doc.createElement("address");
addressElem3.setAttribute("street", "321 north st");
addressElem3.setAttribute("city", "atlanta");
addressElem3.setAttribute("state", "ga");
addressElem3.setAttribute("country", "usa");
personElem2.appendChild(addressElem3);

const addressElem4 = doc.createElement("address");
addressElem4.setAttribute("street", "123 west st");
addressElem4.setAttribute("city", "seattle");
addressElem4.setAttribute("state", "wa");
addressElem4.setAttribute("country", "usa");
personElem2.appendChild(addressElem4);

const addressElem5 = doc.createElement("address");
addressElem5.setAttribute("street", "321 south avenue");
addressElem5.setAttribute("city", "denver");
addressElem5.setAttribute("state", "co");
addressElem5.setAttribute("country", "usa");
personElem2.appendChild(addressElem5);

peopleElem.appendChild(personElem1);
peopleElem.appendChild(personElem2);
doc.appendChild(peopleElem);
```

DOM trees can be:

- [queried using XPath expressions](/en-US/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript)
- converted to strings using [XMLSerializer](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- [posted to a web server](/en-US/docs/Web/API/XMLHttpRequest) using `XMLHttpRequest`
- transformed using [XSLT](/en-US/docs/Web/XSLT) or [XLink](/en-US/docs/Glossary/XLink).

## See also

- [XML](/en-US/docs/Web/XML)
- [XPath](/en-US/docs/Web/XPath)
- [Parsing and serializing XML](/en-US/docs/Web/Guide/Parsing_and_serializing_XML)
- [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest)
