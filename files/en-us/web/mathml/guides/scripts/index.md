---
title: MathML scripted elements
slug: Web/MathML/Guides/Scripts
page-type: guide
---

{{MathMLRef}}

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}

We continue the review of basic math notations and focus on building MathML elements with scripts.

## Subscripts and superscripts

Similarly to what we saw in the [previous article](/en-US/docs/Web/MathML/Guides/Fractions_and_roots), the `<msub>`, `<msup>` and `<msubsup>` have a special structure expecting exactly two elements (for `<msub>`, `<msup>`) or three elements (for `<msubsup>`):

```html
<p>
  msub:
  <math>
    <msub>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msub>
  </math>
</p>

<p>
  msup:
  <math>
    <msup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </msup>
  </math>
</p>
<p>
  msubsup:
  <math>
    <msubsup>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </msubsup>
  </math>
</p>
```

Below is the rendering of the above example in your browser.

{{ EmbedLiveSample('Subtrees_of_msub_msup_msubsup', 700, 200, "", "") }}

You should notice that:

- The second child of the `<msub>` element is attached as a subscript of its first child.
- The second child of the `<msup>` element is attached as a superscript of its first child.
- The second and third children of the `<msubsup>` element are respectively attached as a subscript and superscript of its first child.
- The text inside scripts is scaled down.

> [!NOTE]
> The MathML elements `<msub>` and `<msup>` are different from the HTML elements [`<sub>`](/en-US/docs/Web/HTML/Element/sub) and [`<sup>`](/en-US/docs/Web/HTML/Element/sup). They allow authors to provide arbitrary MathML subtrees as scripts, not just text.

## Underscripts and overscripts

The `<munder>`, `<mover>` and `<munderover>` elements are very similar except that they are used to attach underscripts and overscripts. Instead of giving details, we will let you figure out their definitions yourself with the following exercise.

### Active learning: Recognize under/over scripts

In the following example, try to guess the names of the mystery elements (written as question marks) and click the button to reveal the solution:

```html hidden
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly two children
  (child1, child2):
  <math>
    <mover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </mover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly three children
  (child1, child2 and child3):
  <math>
    <munderover>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
      <mtext>child3</mtext>
    </munderover>
  </math>
</p>
<p>
  <code>&lt;<span>????????</span>&gt;</code> element with exactly two children
  (child1, child2):
  <math>
    <munder>
      <mtext>child1</mtext>
      <mtext>child2</mtext>
    </munder>
  </math>
</p>

<p><input type="button" id="showSolution" value="Show solution" /></p>
```

```css hidden
p {
  padding: 0.5em;
}
```

```js hidden
document.getElementById("showSolution").addEventListener("click", () => {
  const maths = Array.from(document.getElementsByTagName("math"));
  Array.from(document.getElementsByTagName("span")).forEach((span, index) => {
    span.textContent = maths[index].firstElementChild.tagName;
  });
});
```

{{ EmbedLiveSample('Subtrees_of_munder_mover_munderover', 700, 400, "", "") }}

### Active learning: Recognize scripted elements

The following MathML formula contains a more complex expression, nesting fractions, roots and scripts. Try to guess the elements laid out with scripted elements `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>`. Each time you click such an element, it is highlighted and a confirmation message is displayed. Finally, read the MathML source to verify whether that corresponds to your expectation.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with scripted elements</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mi>β</mi>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mi>α</mi>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
    <input type="button" id="clearOutput" value="Reset" />
    <div id="output"></div>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

```js hidden
const scriptedElements = Array.from(
  document.querySelectorAll("msub, msup, msubsup, munder, mover, munderover"),
);
const outputDiv = document.getElementById("output");
function clearHighlight() {
  scriptedElements.forEach((scripted) => {
    scripted.classList.remove("highlight");
  });
}
scriptedElements.forEach((scripted) => {
  scripted.addEventListener("click", () => {
    clearHighlight();
    scripted.classList.add("highlight");
    outputDiv.insertAdjacentHTML(
      "beforeend",
      `<p><strong>You clicked an <code>&lt;${scripted.tagName}&gt;</code> element.</strong></p>`,
    );
  });
});
document.getElementById("clearOutput").addEventListener("click", () => {
  clearHighlight();
  outputDiv.textContent = "";
});
```

{{ EmbedLiveSample('Active_learning_recognize_scripted_elements', 700, 400, "", "") }}

## More operator properties

We have previously seen some [properties of the `<mo>` element](/en-US/docs/Web/MathML/Guides/Text_containers#operator_properties_of_mo) namely stretching in the vertical direction and spacing. Now that scripted elements are available, we can extend that list. We will do that by tweaking our [previous example](#active_learning_recognize_scripted_elements).

### Stretching in horizontal direction

Let's first perform the substitutions <math><mi>β</mi><mo>≔</mo><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\beta := z*{1} + z*{2}</annotation></math> and <math><mi>α</mi><mo>≔</mo><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow><annotation encoding="TeX">\alpha := v*{1} + v*{2}</annotation></math>:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with horizontal stretchy operators</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Stretching_in_horizontal_direction', 700, 200, "", "") }}

We now realize that the bottom bracket "⎵" and the rightward arrow "→" stretch horizontally to cover the width of the substituted values. Recall that [some vertical operators can stretch](/en-US/docs/Web/MathML/Guides/Text_containers#active_learning_stretchy_operators) to cover the height of non-stretchy siblings inside an `<mrow>`. Similarly some horizontal operators can stretch to cover the width of non-stretchy siblings in an `<munder>`, `<mover>` or `<munderover>` element.

> [!NOTE]
> Stretching can happen for any child of the `<munder>`, `<mover>` or `<munderover>` element, not just the underscript or overscript.

### Large operator and limits

So far our example has actually been rendered with the [`display="block"`](/en-US/docs/Web/MathML/Guides/Getting_started#the_display_attribute) attribute. Let's look at the same example, as rendered without that attribute:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My page with moved limits and small largeop</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math>
      <mroot>
        <mrow>
          <munder>
            <mrow>
              <msub>
                <mi>z</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>z</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>⎵</mo>
          </munder>
        </mrow>
        <mn>3</mn>
      </mroot>
      <mo>+</mo>
      <mfrac>
        <mrow>
          <mo>|</mo>
          <mover>
            <mrow>
              <msub>
                <mi>v</mi>
                <mn>1</mn>
              </msub>
              <mo>+</mo>
              <msub>
                <mi>v</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>→</mo>
          </mover>
          <mo>|</mo>
        </mrow>
        <msup>
          <mi>s</mi>
          <mn>3</mn>
        </msup>
      </mfrac>
      <mo>−</mo>
      <mrow>
        <munderover>
          <mo>∑</mo>
          <mrow>
            <mi>i</mi>
            <mo>=</mo>
            <mn>1</mn>
          </mrow>
          <mi>n</mi>
        </munderover>
        <msqrt>
          <mrow>
            <msub>
              <mi>a</mi>
              <mi>i</mi>
            </msub>
            <mo>−</mo>
            <msubsup>
              <mi>K</mi>
              <mn>0</mn>
              <mi>i</mi>
            </msubsup>
          </mrow>
        </msqrt>
      </mrow>
    </math>
  </body>
</html>
```

```css hidden
.highlight {
  color: red;
}
math {
  font-size: 200%;
}
```

{{ EmbedLiveSample('Large_operator_and_limits', 700, 200, "", "") }}

As expected, the formula is no longer centered and the rendering is modified to minimized the height. Focusing on the summation symbol, one can notice that the sigma is drawn smaller and that the scripts of the `<munderover>` element are now attached as a subscript and a superscript! This is due to two properties of the "∑" operator:

- _largeop_: The operator is drawn with a bigger glyph if the `<math>` tag has a `display="block"` attribute.
- _movablelimits_: The underscripts and overscripts attached to the operator are respectively rendered as subscripts and superscripts if the `<math>` tag does not have the `display="block"` attribute.

> [!NOTE]
> The _largeop_ property is actually unrelated to scripts, even though operators having this property are typically scripted. The _movablelimits_ property is taken into account for `<munder>` and `<mover>` elements too.

## Summary

In this article, we've finished reviewing basic layout introducing elements `<msub>`, `<msup>`, `<msubsup>`, `<munder>`, `<mover>`, `<munderover>` for subscripts, superscripts, underscripts and overscripts. Using these elements, we were able to briefly introduce new properties of the `<mo>` element. In the next article, we will continue focus on [tabular layout](/en-US/docs/Web/MathML/Guides/Tables).

## See also

- [The `<msub>` element](/en-US/docs/Web/MathML/Element/msub)
- [The `<msup>` element](/en-US/docs/Web/MathML/Element/msup)
- [The `<msubsup>` element](/en-US/docs/Web/MathML/Element/msubsup)
- [The `<munder>` element](/en-US/docs/Web/MathML/Element/munder)
- [The `<mover>` element](/en-US/docs/Web/MathML/Element/mover)
- [The `<munderover>` element](/en-US/docs/Web/MathML/Element/munderover)

{{PreviousMenuNext("Web/MathML/Guides/Fractions_and_roots", "Web/MathML/Guides/Tables", "Web/MathML/Guides")}}
