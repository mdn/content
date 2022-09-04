---
title: MathML attribute reference
slug: Web/MathML/Attribute
tags:
  - MathML
  - MathML Reference
---
{{MathMLRef}}

This is an alphabetical list of MathML attributes. More details for each attribute are available on relevant [MathML element pages](/en-US/docs/Web/MathML/Element) and on the [global attributes page](/en-US/docs/Web/MathML/Global_attributes). See the [Values](/en-US/docs/Web/MathML/Attribute/Values) page for notes on values and units in MathML.

> **Note:** As explained on the main [MathML](/en-US/docs/Web/MathML) page, documentation is focused on a subset of the language that is relevant for browsers. See the [MathML Full](https://w3c.github.io/mathml/) specification if you want details about other MathML attributes.

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
        {{ MathMLElement("mo") }}, {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        A Boolean value specifying whether the operator should be treated as an
        accent.
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }},
        {{ MathMLElement("munderover") }}
      </td>
      <td>
        A Boolean value specifying whether the operator should be treated as an
        accent.
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code></td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>A string value specifying the action happening for this element.</td>
    </tr>
    <tr>
      <td><code>align</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Specifies different alignments of several elements (see element pages
        for details).
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
      <td><code>bevelled</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>
        Specifies the style how the fraction should be displayed. Deprecated.
        Use U+2044 (fraction slash) instead.
      </td>
    </tr>
    <tr>
      <td><code>close</code></td>
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
        Sets or increments the depth. See
        <a href="/en-US/docs/Web/MathML/Attribute/Values">length</a>.
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        {{ MathMLElement("math") }}, {{ MathMLElement("mi") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("mrow") }},
        {{ MathMLElement("ms") }}, {{ MathMLElement("mtext") }}
      </td>
      <td>
        The text direction. Possible values are either ltr (left to right) or
        rtl (right to left).
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
      <td><em>All</em></td>
      <td>
        <p>
          A Boolean value specifying whether more vertical space is used for
          displayed equations or, if set to <code>false</code>, a more compact
          layout is used to display formulas.
        </p>
        <p>
          <em
            >In MathML 3 this attribute was only valid
            on {{ MathMLElement("mstyle") }},
            {{ MathMLElement("mtable") }}, and
            {{ MathMLElement("math") }}.</em
          >
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        A Boolean value specifying whether the operator is a fence (such as
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
        Specifies the desired height. See
        <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">lengths</a>
        for possible values.
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><em>All</em></td>
      <td>Used to set a hyperlink to a specified URI.</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><em>All</em></td>
      <td>Sets up a unique identifier associated with the element.</td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td>{{ MathMLElement("msline") }}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>The thickness of the horizontal fraction line.</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        The amount of space before the operator (see
        <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">length</a> for
        values and units).
      </td>
    </tr>
    <tr>
      <td><code>lquote</code></td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        The opening quote character (depends on <code>dir</code>) to enclose the
        content. The default value is "<code>&#x26;quot;</code>".
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><em>All</em></td>
      <td>
        The background color. You can use <code>#rgb</code>,
        <code>#rrggbb</code> and
        <a
          href="/en-US/docs/Web/CSS/color_value#html.2fsvg.2fx11.c2.a0_color_keywords"
          >HTML color names</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><em>All</em></td>
      <td>
        The text color. You can use <code>#rgb</code>, <code>#rrggbb</code> and
        <a
          href="/en-US/docs/Web/CSS/color_value#html.2fsvg.2fx11.c2.a0_color_keywords"
          >HTML color names</a
        >.
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td>
        {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }},
        {{ MathMLElement("mtext") }}
      </td>
      <td>The size of the content.</td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td>
        {{ MathMLElement("mi") }}, {{ MathMLElement("mn") }},
        {{ MathMLElement("mo") }}, {{ MathMLElement("ms") }},
        {{ MathMLElement("mtext") }}
      </td>
      <td>The logical class of the identifier, which varies in typography.</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>The maximum size of the operator.</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>The minimum size of the operator.</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        Specifies whether attached under- and overscripts move to sub- and
        superscript positions.
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
      <td><code>open</code></td>
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
      <td>The amount of space after the operator.</td>
    </tr>
    <tr>
      <td><code>rquote</code></td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        The closing quote mark (depends on <code>dir</code>) to enclose the
        content. The default value is "<code>&#x26;quot;</code>".
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Controls mostly the font-size. The higher the <code>scriptlevel</code>,
        the smaller the font size.
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
      <td><code>selection</code></td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>The child element which is addressed by the action.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        There is no visual effect for this attribute, but it specifies whether
        the operator is a separator (such as commas).
      </td>
    </tr>
    <tr>
      <td><code>separators</code></td>
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
        Specifies whether the operator stretches to the size of the adjacent
        element.
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        If <code>stretchy</code> is <code>true</code>, this attribute specifies
        whether the operator should be vertically symmetric around the imaginary
        math axis (centered fraction line).
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>Sets the vertical position of the child content.</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }},
        {{ MathMLElement("mspace") }},
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        Specifies the desired width. See
        <a href="/en-US/docs/Web/MathML/Attribute/Values#lengths">lengths</a>
        for possible values.
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
