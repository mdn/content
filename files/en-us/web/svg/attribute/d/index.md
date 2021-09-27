---
title: d
slug: Web/SVG/Attribute/d
tags:
  - SVG
  - SVG Attribute
---
{{SVGRef}}

The **`d`** attribute defines a path to be drawn.

A path definition is a list of [path commands](#path_commands) where each command is composed of a command letter and numbers that represent the command parameters. The commands are detailed below.

You can use this attribute with the following SVG elements:

*   {{SVGElement("path")}}
*   {{SVGElement("glyph")}}
*   {{SVGElement("missing-glyph")}}

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red"
    d="M 10,30
       A 20,20 0,0,1 50,30
       A 20,20 0,0,1 90,30
       Q 90,60 50,90
       Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', '100%', 200)}}

## path

For {{SVGElement('path')}}, `d` is a string containing a series of path commands that define the path to be drawn.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## glyph

> **Warning:** As of SVG2 {{SVGElement('glyph')}} is deprecated and shouldn't be used.

For {{SVGElement('glyph')}}, `d` is a string containing a series of path commands that define the outline shape of the glyph.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** The point of origin (the coordinate `0`,`0`) is usually the *upper left corner* of the context. However the {{SVGElement("glyph")}} element has its origin in the *bottom left corner* of its letterbox.

## missing-glyph

> **Warning:** As of SVG2 {{SVGElement('missing-glyph')}} is deprecated and shouldn't be used.

For {{SVGElement('missing-glyph')}}, `d` is a string containing a series of path commands that define the outline shape of the glyph.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/docs/Web/SVG/Content_type#String">&#x3C;string></a></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Path commands

Path commands are instructions that define a path to be drawn. Each command is composed of a command letter and numbers that represent the command parameters.

SVG defines 6 types of path commands, for a total of 20 commands:

*   MoveTo: `M`, `m`
*   LineTo: `L`, `l`, `H`, `h`, `V`, `v`
*   Cubic Bézier Curve: `C`, `c`, `S`, `s`
*   Quadratic Bézier Curve: `Q`, `q`, `T`, `t`
*   Elliptical Arc Curve: `A`, `a`
*   ClosePath: `Z`, `z`

> **Note:** Commands are *case-sensitive*. An upper-case command specifies absolute coordinates, while a lower-case command specifies coordinates relative to the current position.

It is always possible to specify a negative value as an argument to a command:

*   negative angles will be anti-clockwise;
*   *absolute* negative *x* and *y* values are interpreted as negative coordinates;
*   *relative* negative *x* values move to the left, and relative negative *y* values move upwards.

### MoveTo path commands

*MoveTo* instructions can be thought of as picking up the drawing instrument, and setting it down somewhere else—in other words, moving the *current point* (*P<sub>o</sub>*; {*x<sub>o</sub>*, *y<sub>o</sub>*}). There is no line drawn between *P<sub>o</sub>* and the new *current point* (*P<sub>n</sub>*; {*x<sub>n</sub>*, *y<sub>n</sub>*}).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">M</th>
      <td>
        (<code><var>x</var></code
        >, <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Move the <em>current point</em> to the coordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. Any subsequent coordinate pair(s) are interpreted as parameter(s)
          for implicit absolute LineTo (<code>L</code>) command(s) (<em
            >see below</em
          >).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>n</sub></var> = {<code
            ><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">m</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Move the <em>current point</em> by shifting the last known position of
          the path by <code><var>dx</var></code> along the x-axis and by
          <code><var>dy</var></code> along the y-axis. Any subsequent coordinate
          pair(s) are interpreted as parameter(s) for implicit relative LineTo
          (<code>l</code>) command(s) (<em>see below</em>).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>n</sub></var> = {<var
            >x<sub>o</sub></var
          >
          + <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="red"
    d="M 10,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 40,20 h 10
       m  0,10 h 10
       m  0,10 h 10
       m  0,10 h 10
       M 50,50 h 10
       m-20,10 h 10
       m-20,10 h 10
       m-20,10 h 10" />
</svg>
```

{{EmbedLiveSample('MoveTo_path_commands', '100%', 200)}}

### LineTo path commands

*LineTo* instructions draw a straight line from the *current point* (*P<sub>o</sub>*; {*x<sub>o</sub>*, *y<sub>o</sub>*}) to the *end point* (*P<sub>n</sub>*; {*x<sub>n</sub>*, *y<sub>n</sub>*}), based on the parameters specified. The *end point* (*P<sub>n</sub>*) then becomes the *current point* for the next command (*P<sub>o</sub>′*).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">L</th>
      <td>(<code>x</code>, <code>y</code>)+</td>
      <td>
        <p>
          Draw a line from the <em>current point</em> to the
          <em>end point</em> specified by <code><var>x</var></code
          >,<code><var>y</var></code
          >. Any subsequent coordinate pair(s) are interpreted as parameter(s)
          for implicit absolute LineTo (<code>L</code>) command(s).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">l</th>
      <td>
        (<code><var>dx</var></code
        >, <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a line from the <em>current point</em> to the
          <em>end point,</em> which is the <em>current point</em> shifted by
          <code><var>dx</var></code> along the x-axis and
          <code><var>dy</var></code> along the y-axis. Any subsequent coordinate
          pair(s) are interpreted as parameter(s) for implicit relative LineTo
          (<code>l</code>) command(s) (<em>see below</em>).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">H</th>
      <td>
        <code><var>x</var></code
        >+
      </td>
      <td>
        <p>
          Draw a horizontal line from the <em>current point</em> to the
          <em>end point</em>, which is specified by the
          <code><var>x</var></code> parameter and the <em>current point's</em>
          <code>y</code> coordinate. Any subsequent value(s) are interpreted as
          parameter(s) for implicit absolute horizontal LineTo (<code>H</code>)
          command(s).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<code><var>x</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">h</th>
      <td>
        <code><var>dx</var></code
        >+
      </td>
      <td>
        <p>
          Draw a horizontal line from the <em>current point</em> to the
          <em>end point,</em> which is specified by the
          <em>current point</em> shifted by <code><var>dx</var></code> along the
          x-axis and the <em>current point's</em> <code>y</code> coordinate. Any
          subsequent value(s) are interpreted as parameter(s) for implicit
          relative horizontal LineTo (<code>h</code>) command(s).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var> +
          <code><var>dx</var></code
          >, <var>y<sub>o</sub></var
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">V</th>
      <td>
        <code><var>y</var></code
        >+
      </td>
      <td>
        <p>
          Draw a vertical line from the <em>current point</em> to the
          <em>end point</em>, which is specified by the
          <code><var>y</var></code> parameter and the <em>current point's</em>
          <code>x</code> coordinate. Any subsequent values are interpreted as
          parameters for implicit absolute vertical LineTo (<code>V</code>)
          command(s).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <code><var>y</var></code
          >}
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">v</th>
      <td>
        <code><var>dy</var></code
        >+
      </td>
      <td>
        <p>
          Draw a vertical line from the <em>current point</em> to the
          <em>end point,</em> which is specified by the
          <em>current point</em> shifted by <code><var>dy</var></code> along the
          y-axis and the <em>current point's</em> <code>x</code> coordinate. Any
          subsequent value(s) are interpreted as parameter(s) for implicit
          relative vertical LineTo (<code>v</code>) command(s).
        </p>
        <p>
          <strong>Formula:</strong> <var>P<sub>o</sub>′</var> =
          <var>P<sub>n</sub></var> = {<var>x<sub>o</sub></var
          >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
          >}
        </p>
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- LineTo commands with absolute coordinates -->
  <path fill="none" stroke="red"
        d="M 10,10
           L 90,90
           V 10
           H 50" />

  <!-- LineTo commands with relative coordinates -->
  <path fill="none" stroke="red"
        d="M 110,10
           l 80,80
           v -80
           h -40" />
</svg>
```

{{EmbedLiveSample('LineTo_path_commands', '100%', 200)}}

### Cubic Bézier Curve

*Cubic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)* are smooth curve definitions using four points:

*   starting point (current point)
    *   : (*P<sub>o</sub>* = {*x<sub>o</sub>*, *y<sub>o</sub>*})
*   end point
    *   : (*P<sub>n</sub>* = {*x<sub>n</sub>*, *y<sub>n</sub>*})
*   start control point
    *   : (*P<sub>cs</sub>* = {*x<sub>cs</sub>*, *y<sub>cs</sub>*})
        (controls curvature near the start of the curve)
*   end control point
    *   : (*P<sub>ce</sub>* = {*x<sub>ce</sub>*, *y<sub>ce</sub>*})
        (controls curvature near the end of the curve)

After drawing, the *end point* (*P<sub>n</sub>*) becomes the *current point* for the next command (*P<sub>o</sub>′*).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a cubic Bézier curve from the <em>current point</em> to the
          <em>end point</em> specified by <code><var>x</var></code
          >,<code><var>y</var></code
          >. The <em>start control point</em> is specified by
          <code><var>x1</var></code
          >,<code><var>y1</var></code> and the <em>end control point</em> is
          specified by <code><var>x2</var></code
          >,<code><var>y2</var></code
          >. Any subsequent triplet(s) of coordinate pairs are interpreted as
          parameter(s) for implicit absolute cubic Bézier curve (<code>C</code>)
          command(s).
        </p>
        <dl>
          <dt>Formulae:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<code><var>x2</var></code
            >, <code><var>y2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">c</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a cubic Bézier curve from the <em>current point</em> to the
          <em>end point,</em> which is the <em>current point</em> shifted by
          <code><var>dx</var></code> along the x-axis and
          <code><var>dy</var></code> along the y-axis. The
          <em>start control point</em> is the <em>current point</em> (starting
          point of the curve) shifted by <code><var>dx1</var></code> along the
          x-axis and <code><var>dy1</var></code> along the y-axis. The
          <em>end control point</em> is the <em>current point</em> (starting
          point of the curve) shifted by <code><var>dx2</var></code> along the
          x-axis and <code><var>dy2</var></code> along the y-axis. Any
          subsequent triplet(s) of coordinate pairs are interpreted as
          parameter(s) for implicit relative cubic Bézier curve (<code>c</code>)
          command(s).
        </p>
        <dl>
          <dt>Formulae:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>cs</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >} ;<br /><var>P<sub>ce</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx2</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy2</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">S</th>
      <td>
        (<code><var>x2</var></code
        >,<code><var>y2</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        Draw a smooth cubic Bézier curve from the <em>current point</em> to the
        <em>end point</em> specified by <code><var>x</var></code
        >,<code><var>y</var></code
        >. The <em>end control point</em> is specified by
        <code><var>x2</var></code
        >,<code><var>y2</var></code
        >. The <em>start control point</em> is a reflection of the
        <em>end control point</em> of the previous curve command. If the
        previous command wasn't a cubic Bézier curve, the
        <em>start control point</em> is the same as the curve starting point
        (<em>current point</em>). Any subsequent pair(s) of coordinate pairs are
        interpreted as parameter(s) for implicit absolute smooth cubic Bézier
        curve (<code>S</code>) commands.
      </td>
    </tr>
    <tr>
      <th scope="row">s</th>
      <td>
        (<code><var>dx2</var></code
        >,<code><var>dy2</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        Draw a smooth cubic Bézier curve from the <em>current point</em> to the
        <em>end point</em>, which is the <em>current point</em> shifted by
        <code><var>dx</var></code> along the x-axis and
        <code><var>dy</var></code> along the y-axis. The
        <em>end control point</em> is the <em>current point</em> (starting point
        of the curve) shifted by <code><var>dx2</var></code> along the x-axis
        and <code><var>dy2</var></code> along the y-axis. The
        <em>start control point</em> is a reflection of the
        <em>end control point</em> of the previous curve command. If the
        previous command wasn't a cubic Bézier curve, the
        <em>start control point</em> is the same as the curve starting point
        (<em>current point</em>). Any subsequent pair(s) of coordinate pairs are
        interpreted as parameter(s) for implicit relative smooth cubic Bézier
        curve (<code>s</code>) commands.
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <!-- Cubic Bézier curve with absolute coordinates -->
  <path fill="none" stroke="red"
        d="M 10,90
           C 30,90 25,10 50,10
           S 70,90 90,90" />

  <!-- Cubic Bézier curve with relative coordinates -->
  <path fill="none" stroke="red"
        d="M 110,90
           c 20,0 15,-80 40,-80
           s 20,80 40,80" />

  <!-- Highlight the curve vertex and control points -->
  <g id="ControlPoints">

    <!-- First cubic command control points -->
    <line x1="10" y1="90" x2="30" y2="90" stroke="lightgrey" />
    <circle cx="30" cy="90" r="1.5"/>

    <line x1="50" y1="10" x2="25" y2="10" stroke="lightgrey" />
    <circle cx="25" cy="10" r="1.5"/>

    <!-- Second smooth command control points (the first one is implicit) -->
    <line x1="50" y1="10" x2="75" y2="10" stroke="lightgrey" stroke-dasharray="2" />
    <circle cx="75" cy="10" r="1.5" fill="lightgrey"/>

    <line x1="90" y1="90" x2="70" y2="90" stroke="lightgrey" />
    <circle cx="70" cy="90" r="1.5" />

    <!-- curve vertex points -->
    <circle cx="10" cy="90" r="1.5"/>
    <circle cx="50" cy="10" r="1.5"/>
    <circle cx="90" cy="90" r="1.5"/>
  </g>
  <use xlink:href="#ControlPoints" x="100" />
</svg>
```

{{EmbedLiveSample('Cubic_Bézier_Curve', '100%', 200)}}

### Quadratic Bézier Curve

*Quadratic [Bézier curves](https://en.wikipedia.org/wiki/Bézier_curve)* are smooth curve definitions using three points:

*   starting point (current point)
    *   : *P<sub>o</sub>* = {*x<sub>o</sub>*, *y<sub>o</sub>*}
*   end point
    *   : *P<sub>n</sub>* = {*x<sub>n</sub>*, *y<sub>n</sub>*}
*   control point
    *   : *P<sub>c</sub>* = {*x<sub>c</sub>*, *y<sub>c</sub>*}
        (controls curvature)

After drawing, the *end point* (*P<sub>n</sub>*) becomes the *current point* for the next command (*P<sub>o</sub>′*).

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">Q</th>
      <td>
        (<code><var>x1</var></code
        >,<code><var>y1</var></code
        >, <code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a quadratic Bézier curve from the <em>current point</em> to the
          <em>end point</em> specified by <code><var>x</var></code
          >,<code><var>y</var></code
          >. The <em>control point</em> is specified by
          <code><var>x1</var></code
          >,<code><var>y1</var></code
          >. Any subsequent pair(s) of coordinate pairs are interpreted as
          parameter(s) for implicit absolute quadratic Bézier curve
          (<code>Q</code>) command(s).
        </p>
        <dl>
          <dt><strong>Formulae:</strong></dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<code><var>x1</var></code
            >, <code><var>y1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">q</th>
      <td>
        (<code><var>dx1</var></code
        >,<code><var>dy1</var></code
        >, <code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a quadratic Bézier curve from the <em>current point</em> to the
          <em>end point</em>, which is the <em>current point</em> shifted by
          <code><var>dx</var></code> along the x-axis and
          <code><var>dy</var></code> along the y-axis. The
          <em>control point</em> is the <em>current point</em> (starting point
          of the curve) shifted by <code><var>dx1</var></code> along the x-axis
          and <code><var>dy1</var></code> along the y-axis. Any subsequent
          pair(s) of coordinate pairs are interpreted as parameter(s) for
          implicit relative quadratic Bézier curve (<code>q</code>) command(s).
        </p>
        <dl>
          <dt>Formulae:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >} ;<br /><var>P<sub>c</sub></var> = {<var>x<sub>o</sub></var> +
            <code><var>dx1</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy1</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">T</th>
      <td>
        (<code><var>x</var></code
        >,<code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a smooth quadratic Bézier curve from the
          <em>current point</em> to the <em>end point</em> specified by
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. The <em>control point</em> is a reflection of the
          <em>control point</em> of the previous curve command. If the previous
          command wasn't a quadratic Bézier curve, the <em>control point</em> is
          the same as the curve starting point (<em>current point</em>). Any
          subsequent coordinate pair(s) are interpreted as parameter(s) for
          implicit absolute smooth quadratic Bézier curve (<code>T</code>)
          command(s).
        </p>
        <dl>
          <dt>Formula:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<code
              ><var>x</var></code
            >, <code><var>y</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <th scope="row">t</th>
      <td>
        (<code><var>dx</var></code
        >,<code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Draw a smooth quadratic Bézier curve from the
          <em>current point</em> to the <em>end point</em>, which is the
          <em>current point</em> shifted by <code><var>dx</var></code> along the
          x-axis and <code><var>dy</var></code> along the y-axis. The
          <em>control point</em> is a reflection of the
          <em>control point</em> of the previous curve command. If the previous
          command wasn't a quadratic Bézier curve, the <em>control point</em> is
          the same as the curve starting point (<em>current point</em>). Any
          subsequent coordinate pair(s) are interpreted as parameter(s) for
          implicit relative smooth quadratic Bézier curve (<code>t</code>)
          command(s).
        </p>
        <dl>
          <dt>Formulae:</dt>
          <dd>
            <var>P<sub>o</sub>′</var> = <var>P<sub>n</sub></var> = {<var
              >x<sub>o</sub></var
            >
            + <code><var>dx</var></code
            >, <var>y<sub>o</sub></var> + <code><var>dy</var></code
            >}
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

  <!-- Quadratic Bézier curve with implicit repetition -->
  <path fill="none" stroke="red"
        d="M 10,50
           Q 25,25 40,50
           t 30,0 30,0 30,0 30,0 30,0" />

  <!-- Highlight the curve vertex and control points -->
  <g>
    <polyline points="10,50 25,25 40,50" stroke="rgba(0,0,0,.2)" fill="none" />
    <circle cx="25" cy="25" r="1.5" />

    <!-- Curve vertex points -->
    <circle cx="10" cy="50" r="1.5"/>
    <circle cx="40" cy="50" r="1.5"/>

    <g id="SmoothQuadraticDown">
      <polyline points="40,50 55,75 70,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" />
      <circle cx="55" cy="75" r="1.5" fill="lightgrey" />
      <circle cx="70" cy="50" r="1.5" />
    </g>

    <g id="SmoothQuadraticUp">
      <polyline points="70,50 85,25 100,50" stroke="rgba(0,0,0,.2)" stroke-dasharray="2" fill="none" />
      <circle cx="85" cy="25" r="1.5" fill="lightgrey" />
      <circle cx="100" cy="50" r="1.5" />
    </g>

    <use xlink:href="#SmoothQuadraticDown" x="60" />
    <use xlink:href="#SmoothQuadraticUp"   x="60" />
    <use xlink:href="#SmoothQuadraticDown" x="120" />
  </g>
</svg>
```

{{EmbedLiveSample('Quadratic_Bézier_Curve', '100%', 200)}}

### Elliptical Arc Curve

*Elliptical arc curves* are curves defined as a portion of an ellipse. It is sometimes easier to draw highly regular curves with an elliptical arc than with a Bézier curve.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>x</var></code>
        <code><var>y</var></code
        >)+
      </td>
      <td>
        <p>
          Draw an Arc curve from the current point to the coordinate
          <code><var>x</var></code
          >,<code><var>y</var></code
          >. The center of the ellipse used to draw the arc is determined
          automatically based on the other parameters of the command:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> and <code><var>ry</var></code> are the
            two radii of the ellipse;
          </li>
          <li>
            <code><var>angle</var></code> represents a rotation (in degrees) of
            the ellipse relative to the x-axis;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> and
            <code><var>sweep-flag</var></code> allows to chose which arc must be
            drawn as 4 possible arcs can be drawn out of the other parameters.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> allows to chose one of
                the large arc (<code>1</code>) or small arc (<code>0</code>),
              </li>
              <li>
                <code><var>sweep-flag</var></code> allows to chose one of the
                clockwise turning arc (<code>1</code>) or counterclockwise
                turning arc (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        The coordinate <code><var>x</var></code
        >,<code><var>y</var></code> becomes the new current point for the next
        command. All subsequent sets of parameters are considered implicit
        absolute arc curve (<code>A</code>) commands.
      </td>
    </tr>
    <tr>
      <th scope="row">a</th>
      <td>
        (<code><var>rx</var></code> <code><var>ry</var></code>
        <code><var>angle</var></code> <code><var>large-arc-flag</var></code>
        <code><var>sweep-flag</var></code> <code><var>dx</var></code>
        <code><var>dy</var></code
        >)+
      </td>
      <td>
        <p>
          Draw an Arc curve from the current point to a point for which
          coordinates are those of the current point shifted by
          <code><var>dx</var></code> along the x-axis and
          <code><var>dy</var></code> along the y-axis. The center of the ellipse
          used to draw the arc is determined automatically based on the other
          parameters of the command:
        </p>
        <ul>
          <li>
            <code><var>rx</var></code> and <code><var>ry</var></code> are the
            two radii of the ellipse;
          </li>
          <li>
            <code><var>angle</var></code> represents a rotation (in degrees) of
            the ellipse relative to the x-axis;
          </li>
          <li>
            <code><var>large-arc-flag</var></code> and
            <code><var>sweep-flag</var></code> allows to chose which arc must be
            drawn as 4 possible arcs can be drawn out of the other parameters.
            <ul>
              <li>
                <code><var>large-arc-flag</var></code> allows a choice of large
                arc (<code>1</code>) or small arc (<code>0</code>),
              </li>
              <li>
                <code><var>sweep-flag</var></code> allows a choice of a
                clockwise arc (<code>1</code>) or counterclockwise arc
                (<code>0</code>)
              </li>
            </ul>
          </li>
        </ul>
        The current point gets its X and Y coordinates shifted by
        <code><var>dx</var></code> and <code><var>dy</var></code> for the next
        command. All subsequent sets of parameters are considered implicit
        relative arc curve (<code>a</code>) commands.
      </td>
    </tr>
  </tbody>
</table>

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

  <!-- The influence of the arc flags with which the arc is drawn -->
  <path fill="none" stroke="red"
        d="M 6,10
           A 6 4 10 1 0 14,10" />

  <path fill="none" stroke="lime"
        d="M 6,10
           A 6 4 10 1 1 14,10" />

  <path fill="none" stroke="purple"
        d="M 6,10
           A 6 4 10 0 1 14,10" />

  <path fill="none" stroke="pink"
        d="M 6,10
           A 6 4 10 0 0 14,10" />
</svg>
```

{{EmbedLiveSample('Elliptical_Arc_Curve', '100%', 200)}}

### ClosePath

*ClosePath* instructions draw a straight line from the *current position* to the first point in the path.

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="col">Command</th>
      <th scope="col">Parameters</th>
      <th scope="col">Notes</th>
    </tr>
    <tr>
      <th scope="row">Z, z</th>
      <td></td>
      <td>
        Close the current subpath by connecting the last point of the path with
        its initial point. If the two points are at different coordinates, a
        straight line is drawn between those two points.
      </td>
    </tr>
  </tbody>
</table>

> **Note:** The appearance of a shape closed with *ClosePath* may be different to that of one closed by drawing a line to the origin, using one of the other commands, because the line ends are joined together (according to the {{SVGAttr('stroke-linejoin')}} setting), rather than just being placed at the same coordinates.

#### Examples

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 -1 30 11" xmlns="http://www.w3.org/2000/svg">

  <!--
  An open shape with the last point of
  the path different to the first one
  -->
  <path stroke="red"
        d="M 5,1
           l -4,8 8,0" />

  <!--
  An open shape with the last point of
  the path matching the first one
  -->
  <path stroke="red"
        d="M 15,1
           l -4,8 8,0 -4,-8" />

  <!--
  A closed shape with the last point of
  the path different to the first one
  -->
  <path stroke="red"
        d="M 25,1
           l -4,8 8,0
           z" />
</svg>
```

{{EmbedLiveSample('ClosePath', '100%', 200)}}

> **Note:** As a [presentation attribute](/en-US/docs/Web/SVG/Attribute/Presentation) `d` can be used as a CSS property

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("SVG2", "paths.html#DProperty", "d")}}</td>
      <td>{{Spec2("SVG2")}}</td>
      <td>Definition for <code>&#x3C;path></code></td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "fonts.html#GlyphElementDAttribute", "d")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>
        Initial definition for <code>&#x3C;glyph></code> and
        <code>&#x3C;missing-glyph></code>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "paths.html#DAttribute", "d")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition for <code>&#x3C;path></code></td>
    </tr>
  </tbody>
</table>
