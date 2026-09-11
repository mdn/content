---
title: MathMLAnchorElement
slug: Web/API/MathMLAnchorElement
page-type: web-api-interface
browser-compat: api.MathMLAnchorElement
---

{{APIRef("MathML")}}

The **`MathMLAnchorElement`** interface represents MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) (hyperlink) elements and provides properties for getting and setting various features of such elements.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{domxref("MathMLElement")}}._

- {{domxref("MathMLAnchorElement.hash")}}
  - : A string representing the fragment identifier, including the leading hash mark (`#`), if any, in the referenced URL.
- {{domxref("MathMLAnchorElement.host")}}
  - : A string representing the hostname and port (if it's not the default port) in the referenced URL.
- {{domxref("MathMLAnchorElement.hostname")}}
  - : A string representing the hostname in the referenced URL.
- {{domxref("MathMLAnchorElement.href")}}
  - : A string that is the result of parsing the element's [`href`](/en-US/docs/Web/MathML/Reference/Element/a#href) attribute relative to the document, containing a valid URL of a linked resource.
- {{domxref("MathMLAnchorElement.hreflang")}}
  - : A string that reflects the element's [`hreflang`](/en-US/docs/Web/MathML/Reference/Element/a#hreflang) attribute, indicating the language of the linked resource.
- {{domxref("MathMLAnchorElement.origin")}} {{ReadOnlyInline}}
  - : Returns a string containing the origin of the URL, that is its scheme, its domain and its port.
- {{domxref("MathMLAnchorElement.password")}}
  - : A string containing the password specified before the domain name.
- {{domxref("MathMLAnchorElement.pathname")}}
  - : A string containing an initial `/` followed by the path of the URL, not including the query string or fragment.
- {{domxref("MathMLAnchorElement.port")}}
  - : A string representing the port component, if any, of the referenced URL.
- {{domxref("MathMLAnchorElement.protocol")}}
  - : A string representing the protocol component, including trailing colon (`:`), of the referenced URL.
- {{domxref("MathMLAnchorElement.search")}}
  - : A string representing the search element, including leading question mark (`?`), if any, of the referenced URL.
- {{domxref("MathMLAnchorElement.target")}}
  - : A string that reflects the element's [`target`](/en-US/docs/Web/MathML/Reference/Element/a#target) attribute, indicating where to display the linked resource.
- {{domxref("MathMLAnchorElement.type")}}
  - : A string that reflects the element's [`type`](/en-US/docs/Web/MathML/Reference/Element/a#type) attribute, indicating the MIME type of the linked resource.
- {{domxref("MathMLAnchorElement.username")}}
  - : A string containing the username specified before the domain name.

## Examples

### Basic usage

This example marks up the [Gamma function](https://en.wikipedia.org/wiki/Gamma_function) in MathML. It demonstrates how to access MathML `<a>` properties in JavaScript via the `MathMLAnchorElement` interface.

#### MathML

The example includes several `<a>` elements. The first one is an `example.com` link that includes several link and URL features that we can target with JavaScript. We also include a {{htmlelement("ul")}} element to output property values to.

```html live-sample___mathmlanchorelement
<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"
  ><semantics
    ><mrow
      ><a
        href="https://uname:pwd@example.com:8000/subsection?q=123#fragment"
        target="_blank"
        hreflang="en"
        type="text/html"
        ><mrow
          ><mi mathvariant="normal">Γ</mi><mo stretchy="false">(</mo><mi>t</mi
          ><mo stretchy="false">)</mo></mrow
        ></a
      ><mo>=</mo
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Main_definition"
        ><mrow
          ><msubsup
            ><mo>∫</mo><mn>0</mn><mrow><mo>+</mo><mn>∞</mn></mrow></msubsup
          ><msup
            ><mi>x</mi><mrow><mi>t</mi><mo>−</mo><mn>1</mn></mrow></msup
          ><msup
            ><mi>e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup
          ><mi>d</mi><mi>x</mi></mrow
        ></a
      ><mo>=</mo
      ><a
        href="https://en.wikipedia.org/wiki/Gamma_function#Euler's_definition_as_an_infinite_product"
        ><mrow
          ><mfrac><mn>1</mn><mi>t</mi></mfrac
          ><munderover
            ><mo>∏</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow
            ><mn>∞</mn></munderover
          ><mfrac
            ><msup
              ><mrow
                ><mo>(</mo
                ><mrow
                  ><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow
                ><mo>)</mo></mrow
              ><mi>t</mi></msup
            ><mrow
              ><mn>1</mn><mo>+</mo><mfrac><mi>t</mi><mi>n</mi></mfrac></mrow
            ></mfrac
          ></mrow
        ></a
      ><a href="https://en.wikipedia.org/wiki/Asymptotic_analysis#Definition"
        ><mo>∼</mo></a
      ><a href="https://en.wikipedia.org/wiki/Gamma_function#Stirling's_formula"
        ><mrow
          ><msqrt
            ><mfrac
              ><mrow><mn>2</mn><mi>π</mi></mrow
              ><mi>t</mi></mfrac
            ></msqrt
          ><msup
            ><mrow
              ><mo>(</mo><mfrac><mi>t</mi><mi>e</mi></mfrac
              ><mo>)</mo></mrow
            ><mi>t</mi></msup
          ></mrow
        ></a
      ></mrow
    ></semantics
  ></math
>

<ul></ul>
```

```css hidden live-sample___mathmlanchorelement
math {
  font-size: 4vw;
}
```

#### JavaScript

We get references to the first MathML `<a>` element in the document and the `<ul>` element.

```js live-sample___mathmlanchorelement
const mathAnchor = document.querySelector("math a");
const list = document.querySelector("ul");
```

Next, we define a function that takes a string value representing a property of the `MathMLAnchorElement` object and appends an {{htmlelement("li")}} to the `list` containing the property name and property value:

```js live-sample___mathmlanchorelement
function outputValue(value) {
  const listItem = document.createElement("li");
  listItem.textContent = `${value}: ${mathAnchor[value]}`;
  list.appendChild(listItem);
}
```

Finally, we call the function several times to output names and values of properties defined directly on the interface to the list:

```js live-sample___mathmlanchorelement
outputValue("href");
outputValue("target");
outputValue("origin");
outputValue("protocol");
outputValue("username");
outputValue("password");
outputValue("host");
outputValue("hostname");
outputValue("port");
outputValue("pathname");
outputValue("search");
outputValue("hash");
outputValue("hreflang");
outputValue("type");
```

#### Result

{{EmbedLiveSample("mathmlanchorelement", "100%", "460")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The MathML [`<a>`](/en-US/docs/Web/MathML/Reference/Element/a) element
