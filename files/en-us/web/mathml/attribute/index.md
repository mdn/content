---
title: Attributes
slug: Web/MathML/Attribute
page-type: landing-page
---

{{MathMLRef}}

This is an alphabetical list of MathML attributes. More details for each attribute are available on relevant [MathML element pages](/en-US/docs/Web/MathML/Element) and on the [global attributes page](/en-US/docs/Web/MathML/Global_attributes). The [values](/en-US/docs/Web/MathML/Values) page also describes some notes on common values used by MathML attributes.

> **Note:** As explained on the main [MathML](/en-US/docs/Web/MathML) page, MDN uses [MathML Core](https://w3c.github.io/mathml-core/) as a reference specification. However, legacy features that are still implemented by some browsers are also documented. You can find further details for these and other features in [MathML 4](https://w3c.github.io/mathml/).

<table class="standard-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Elements accepting attribute</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
         A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether the operator should be treated as an accent when used as an under- or over-script.
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether the under script should be treated as an accent.
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
         A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether the over script should be treated as an accent.
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>A string value specifying the action happening for this element.</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Specifies vertical alignment of the table with respect to its environment.
      </td>
    </tr>
    <tr>
      <td><code>background</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/background-color"><code>background-color</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>close</code>  {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>A string for the closing delimiter.</td>
    </tr>
    <tr>
      <td><code>color</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/color"><code>color</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>columnalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>Specifies the horizontal alignment of table cells.</td>
    </tr>
    <tr>
      <td><code>columnlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Specifies table column borders.</td>
    </tr>
    <tr>
      <td><code>columnspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Specifies the space between table columns.</td>
    </tr>
    <tr>
      <td><code>columnspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        A non-negative integer value that indicates over how many table columns
        the cell extends.
      </td>
    </tr>
    <tr>
      <td><code>denomalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>The alignment of the denominator under the fraction.</td>
    </tr>
    <tr>
      <td><code>depth</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>
       A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the desired depth (below the baseline).
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a>
      </td>
      <td>
        The text direction. Possible values are either <code>ltr</code> (left to right) or
        <code>rtl</code> (right to left).
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Specifies the rendering mode. The values <code>block</code> and
        <code>inline</code> are allowed.
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>
        <p>
        A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> specifying whether to set the
        <a href="/en-US/docs/Web/CSS/math-style">math-style</a>
        to <code>normal</code> (if true) or <code>compact</code> (otherwise).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> specifying whether the operator is a fence (such as
        parentheses). There is no visual effect for this attribute.
      </td>
    </tr>
    <tr>
      <td><code>fontfamily</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/font-family"><code>font-family</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>fontsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/font-size"><code>font-size</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>fontstyle</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/font-style"><code>font-style</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>fontweight</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Use CSS <a href="/en-US/docs/Web/CSS/font-weight"><code>font-weight</code></a> instead.
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Specifies borders of an entire {{ MathMLElement("mtable") }}.
        Possible values are: <code>none</code> (default), <code>solid</code> and
        <code>dashed</code>.
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        Specifies additional space added between the table and
        <code>frame</code>.
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the desired height (above the baseline).
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>Used to set a hyperlink to a specified URI.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>Sets up a unique identifier associated with the element.</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the thickness of the horizontal fraction line.</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating amount of space before the operator.
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the horizontal location of the positioning point of the child content with respect to the positioning point of the element.
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        The opening quote to enclose the content. The default value is <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>
        A <a href="/en-US/docs/Web/CSS/background-color">background-color</a> for the element.
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>
        A <a href="/en-US/docs/Web/CSS/color">color</a> for the element.
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> used as a <a href="/en-US/docs/Web/CSS/font-size"><code>font-size</code></a> for the element.
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>The logical class of token elements, which varies in typography.</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the maximum size of the operator when it is stretchy.</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the minimum size of the operator when it is stretchy.</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether attached under- and overscripts move to sub- and superscript positions when <a href="/en-US/docs/Web/CSS/math-style">math-style</a> is set to <code>compact</code>.
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        A list of notations, separated by white space, to apply to the child
        elements.
      </td>
    </tr>
    <tr>
      <td><code>numalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>The alignment of the numerator over the fraction.</td>
    </tr>
    <tr>
      <td><code>open</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>A string for the opening delimiter.</td>
    </tr>
    <tr>
      <td><code>rowalign</code></td>
      <td>
        {{ MathMLElement("mtable") }},
        {{ MathMLElement("mtd") }},
        {{ MathMLElement("mtr") }}
      </td>
      <td>Specifies the vertical alignment of table cells.</td>
    </tr>
    <tr>
      <td><code>rowlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Specifies table row borders.</td>
    </tr>
    <tr>
      <td><code>rowspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>Specifies the space between table rows.</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        A non-negative integer value that indicates on how many rows does the
        cell extend.
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the amount of space after the operator.</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        The closing quote to enclose the content. The default value is <code>&amp;quot;</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/en-US/docs/Web/MathML/Global_attributes">All MathML elements</a></td>
      <td>
        Specifies a <a href="/en-US/docs/Web/CSS/math-depth">math-depth</a> for the element. See the <a href="/en-US/docs/Web/MathML/Global_attributes/scriptlevel#values">scriptlevel page</a> for accepted values and mapping.
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Specifies a minimum font size allowed due to changes in
        <code>scriptlevel</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Specifies the multiplier to be used to adjust font size due to changes
        in <code>scriptlevel</code>.
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>The child element visible, only taken into account for some <code>actiontype</code> values.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> specifying whether
        the operator is a separator (such as commas).
         There is no visual effect for this attribute.
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        A sequence of zero or more characters to be used for different
        separators.
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether the operator stretches to the size of the adjacent element.
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msub") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the minimum amount to shift the baseline of the subscript down.
      </td>
    </tr>
    <tr>
      <td><code>superscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msup") }},
        {{ MathMLElement("msubsup") }},
        {{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the minimum amount to shift the baseline of the superscript up.
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        A <a href="/en-US/docs/Web/MathML/Attribute/Values#mathml-specific_types"><code>&lt;boolean&gt;</code></a> indicating whether a stretchy operator should be vertically symmetric around the imaginary math axis (centered fraction line).
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the vertical location of the positioning point of the child content with respect to the positioning point of the element.
</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }},
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        A <a href="/en-US/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> indicating the desired width.
      </td>
    </tr>
    <tr>
      <td><code>xmlns</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        Specifies the URI for the MathML namespace (<code
          ><a href="https://www.w3.org/1998/Math/MathML"
            >http://www.w3.org/1998/Math/MathML</a
          ></code
        >)
      </td>
    </tr>
  </tbody>
</table>
