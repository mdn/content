---
title: MathML attribute reference
slug: Web/MathML/Attribute
tags:
  - MathML
  - MathML Reference
---
{{MathMLRef}}

This is an alphabetical list of MathML attributes. More details for each attribute are available on particular [element pages](/en-US/docs/Web/MathML/Element).

Notes:

- The MathML {{ MathMLElement("mstyle") }} and {{ MathMLElement("math") }} elements accept all attributes of all MathML presentation elements.
- See [values](/en-US/docs/Web/MathML/Attribute/Values) for notes on values and units in MathML.
- The attributes `background`, `color`, `fontfamily`, `fontsize`, `fontstyle`, `fontweight` and `xlink:href` are deprecated.
- The [XLink](/en-US/docs/Glossary/XLink) attributes on MathML elements: `xlink:actuate`, `xlink:href`, `xlink:show` and `xlink:type` are deprecated as well.

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
        {{ MathMLElement("mtable") }}<br />{{ MathMLElement("munder") }},
        {{ MathMLElement("mover") }},
        {{ MathMLElement("munderover") }}<br />{{ MathMLElement("mstack") }}
      </td>
      <td>
        Specifies different alignments of several elements (see element pages
        for details).
      </td>
    </tr>
    <tr>
      <td>
        {{ unimplemented_inline() }}<br /><code>altimg</code><br /><code
          >altimg-width</code
        ><br /><code>altimg-height</code><br /><code>altimg-valign</code
        ><br /><code>alttext</code>
      </td>
      <td>{{ MathMLElement("math") }}</td>
      <td>Visual and textual fall-back options.</td>
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
      <td>{{ unimplemented_inline() }} <code>charalign</code></td>
      <td>{{ MathMLElement("mstack") }}</td>
      <td>Specifies the horizontal alignment of digits.</td>
    </tr>
    <tr>
      <td><code>close</code></td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>A string for the closing delimiter.</td>
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
      <td>{{ unimplemented_inline() }} <code>crossout</code></td>
      <td>{{ MathMLElement("mscarry") }}</td>
      <td>Specifies what kind of line is drawn to cross out carries.</td>
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
            on {{ MathMLElement("mstyle") }},
            {{ MathMLElement("mtable") }}, and 
            {{ MathMLElement("math") }}.</em
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>edge</code></td>
      <td>{{ MathMLElement("malignmark") }}</td>
      <td></td>
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
      <td>{{ unimplemented_inline() }} <code>groupalign</code></td>
      <td>{{ MathMLElement("maligngroup") }}</td>
      <td></td>
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
      <td>{{ unimplemented_inline() }} <code>indentalign</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{ unimplemented_inline() }} <code>indentalignfirst</code>
      </td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>indentalignlast</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>indentshift</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{ unimplemented_inline() }} <code>indentshiftfirst</code>
      </td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>indentshiftlast</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>indenttarget</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{ unimplemented_inline() }} <code>infixlinebreakstyle</code>
      </td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Specifies the default <code>linebreakstyle</code> to use for infix
        operators.
      </td>
    </tr>
    <tr>
      <td><code>length</code></td>
      <td>{{ MathMLElement("msline") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>linebreak</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{ unimplemented_inline() }} <code>linebreakmultchar</code>
      </td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>linebreakstyle</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>lineleading</code></td>
      <td>
        {{ MathMLElement("mo") }},
        {{ MathMLElement("mspace") }}
      </td>
      <td></td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>The thickness of the horizontal fraction line.</td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>location</code></td>
      <td>{{ MathMLElement("mscarries") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>longdivstyle</code></td>
      <td>{{ MathMLElement("mlongdiv") }}</td>
      <td>Controls the style of the long division layout.</td>
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
      <td>{{ unimplemented_inline() }} <code>position</code></td>
      <td>
        {{ MathMLElement("msgroup") }},
        {{ MathMLElement("msrow") }},
        {{ MathMLElement("mscarries") }},
        {{ MathMLElement("msline") }}
      </td>
      <td></td>
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
      <td><code>scriptminsize</code></td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        Specifies a minimum font size allowed due to changes in
        <code>scriptlevel</code>.
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code></td>
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
      <td>{{ unimplemented_inline() }} <code>shift</code></td>
      <td>{{ MathMLElement("msgroup") }}</td>
      <td></td>
    </tr>
    <tr>
      <td>{{ unimplemented_inline() }} <code>stackalign</code></td>
      <td>{{ MathMLElement("mstack") }}</td>
      <td></td>
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
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mmultiscripts") }},
        {{ MathMLElement("msub") }},
        {{ MathMLElement("msubsup") }}
      </td>
      <td>
        The minimum space by which to shift the subscript below the baseline of
        the expression.
      </td>
    </tr>
    <tr>
      <td><code>supscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("mmultiscripts") }},
        {{ MathMLElement("msup") }},
        {{ MathMLElement("msubsup") }}
      </td>
      <td>
        The minimum space by which to shift the superscript above the baseline
        of the expression.
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
      <td><code>xlink:href</code> {{deprecated_inline}}</td>
      <td><em>All</em></td>
      <td>
        Can be used to set a hyperlink to a specfied URI. However, authors are
        encouraged to use the <code>href</code> attribute instead.
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
