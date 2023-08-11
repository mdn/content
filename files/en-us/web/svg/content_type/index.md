---
title: Content type
slug: Web/SVG/Content_type
page-type: guide
---

{{SVGRef}}

SVG makes use of a number of data types. This article lists these types along with their syntax and descriptions of what they're used for.

## Angle

- \<angle>

  - : Angles are specified in one of two ways. When used in the value of a property in a stylesheet, an \<angle> is defined as follows:

    ```plain
    angle ::= number (~"deg" | ~"grad" | ~"rad")?
    ```

    where `deg` indicates degrees, `grad` indicates grads and `rad` indicates radians.

    For properties defined in CSS2, an angle unit identifier must be provided. For angle values in SVG-specific properties and their corresponding presentation attributes, the angle unit identifier is optional. If not provided, the angle value is assumed to be in degrees. In presentation attributes for all properties, whether defined in SVG1.1 or in CSS2, the angle identifier, if specified, must be in lower case.

    When angles are used in an SVG attribute, \<angle> is instead defined as follows:

    ```plain
    angle ::= number ("deg" | "grad" | "rad")?
    ```

    The unit identifiers in such \<angle> values must be in lower case.

    In the SVG DOM, \<angle> values are represented using {{domxref("SVGAngle")}} or {{domxref("SVGAnimatedAngle")}} objects.

## Anything

- \<anything>

  - : The basic type \<anything> is a sequence of zero or more characters. Specifically:

    ```plain
    anything ::= Char*
    ```

    where [Char](https://www.w3.org/TR/2008/REC-xml-20081126/#NT-Char) is the production for a character, as defined in XML 1.0, section 2.2.

## Clock-value

- \<clock-value>

  - : Clock values have the same syntax as in [SMIL Animation](https://www.w3.org/TR/2001/REC-smil-animation-20010904/) specification. The grammar for clock values is repeated here:

    ```plain
    Clock-val         ::= Full-clock-val | Partial-clock-val
                          | Timecount-val
    Full-clock-val    ::= Hours ":" Minutes ":" Seconds ("." Fraction)?
    Partial-clock-val ::= Minutes ":" Seconds ("." Fraction)?
    Timecount-val     ::= Timecount ("." Fraction)? (Metric)?
    Metric            ::= "h" | "min" | "s" | "ms"
    Hours             ::= DIGIT+; any positive number
    Minutes           ::= 2DIGIT; range from 00 to 59
    Seconds           ::= 2DIGIT; range from 00 to 59
    Fraction          ::= DIGIT+
    Timecount         ::= DIGIT+
    2DIGIT            ::= DIGIT DIGIT
    DIGIT             ::= [0-9]
    ```

    For `Timecount` values, the default metric suffix is "`s`" (for seconds). No embedded white space is allowed in clock values, although leading and trailing white space characters will be ignored.

    The following are examples of legal clock values:

    - Full clock values:
      - `02:30:03` = 2 hours, 30 minutes and 3 seconds
      - `50:00:10.25` = 50 hours, 10 seconds and 250 milliseconds
    - Partial clock value:
      - `02:33` = 2 minutes and 33 seconds
      - `00:10.5` = 10.5 seconds = 10 seconds and 500 milliseconds
    - Timecount values:
      - `3.2h` = 3.2 hours = 3 hours and 12 minutes
      - `45min` = 45 minutes
      - `30s` = 30 seconds
      - `5ms` = 5 milliseconds
      - `12.467` = 12 seconds and 467 milliseconds
    - Fractional values are just (base 10) floating point definitions of seconds. Thus:
      - `00.5s` = 500 milliseconds
      - `00:00.005` = 5 milliseconds

## Color

- \<color>

  - : The basic type \<color> is a CSS2 compatible specification for a color in the sRGB color space. \<color> applies to SVG's use of the {{SVGAttr("color")}} attribute and is a component of the definitions of attributes {{SVGAttr("fill")}}, {{SVGAttr("stroke")}}, {{SVGAttr("stop-color")}}, {{SVGAttr("flood-color")}}, and {{SVGAttr("lighting-color")}}, which also offer optional ICC-based color specifications.

    SVG supports all of the syntax alternatives for \<color> defined in [CSS2 syntax and basic data types](https://www.w3.org/TR/2008/REC-CSS2-20080411/syndata.html#value-def-color), and (depend on the implementation) in the future [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/).

    A \<color> is either a keyword or a numerical RGB specification.

    In addition to these color keywords, users may specify keywords that correspond to the colors used by objects in the user's environment. The normative definition of these keywords is found in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2).

    The format of an RGB value in hexadecimal notation is a "`#`" immediately followed by either three or six hexadecimal characters. The three-digit RGB notation (`#rgb`) is converted into six-digit form (`#rrggbb`) by replicating digits, not by adding zeros. For example, `#fb0` expands to `#ffbb00`. This ensures that white (`#ffffff`) can be specified with the short notation (`#fff`) and removes any dependencies on the color depth of the display. The format of an RGB value in the functional notation is an RGB start-function, followed by a comma-separated list of three numerical values (either three integer values or three percentage values) followed by "`)`". An RGB start-function is the case-insensitive string "`rgb(`", for example "`RGB(`" or "`rGb(`". For compatibility, the all-lowercase form "`rgb(`" is preferred. The integer value `255` corresponds to `100%`, and to `F` or `FF` in the hexadecimal notation: `rgb(255,255,255)` = `rgb(100%,100%,100%)` = `#FFF`. White space characters are allowed around the numerical values. All RGB colors are specified in the sRGB color space. Using sRGB provides an unambiguous and objectively measurable definition of the color, which can be related to international standards.

    ```plain
    color    ::= "#" hexdigit hexdigit hexdigit (hexdigit hexdigit hexdigit)?
                  | "rgb("integer, integer, integer")"
                  | "rgb("integer "%", integer "%", integer "%)"
                  | color-keyword
    hexdigit ::= [0-9A-Fa-f]
    ```

    where `color-keyword` matches (case insensitively) one of the color keywords listed in [CSS Color Module Level 3](https://www.w3.org/TR/css-color-3/), or one of the system color keywords listed in [User preferences for colors](https://www.w3.org/TR/2008/REC-CSS2-20080411/ui.html#system-colors) (CSS2, section 18.2).

    The corresponding SVG DOM interface definitions for \<color> are defined the one defined by CSS. SVG's extension to color, including the ability to specify ICC-based colors, are represented using DOM interface {{domxref("SVGColor")}}.

## Coordinate

- \<coordinate>

  - : A \<coordinate> is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the relevant axis (the x-axis for X coordinates, the y-axis for Y coordinates). Its syntax is the same as that for [\<length>](#length).

    Within the SVG DOM, a \<coordinate> is represented as an {{domxref("SVGLength")}} or an {{domxref("SVGAnimatedLength")}}.

## Frequency

- \<frequency>

  - : Frequency values are used with aural properties. As defined in CSS2, a frequency value is a [\<number>](#number) immediately followed by a frequency unit identifier. The frequency unit identifiers are:

    - `Hz`: Hertz
    - `kHz`: kilo Hertz

    Frequency values may not be negative.

## FuncIRI

- \<FuncIRI>
  - : Functional notation for a reference. The syntax for this reference is the same as the {{cssxref("url", "CSS URI")}}.

## Integer

- \<integer>

  - : An \<integer> is specified as an optional sign character (`+` or `-`) followed by one or more digits `0` to `9`:

    ```plain
    integer ::= [+-]? [0-9]+
    ```

    If the sign character is not present, the number is non-negative.

    Unless stated otherwise for a particular attribute or property, the range for an \<integer> encompasses (at a minimum) `-2147483648` to `2147483647`.

    Within the SVG DOM, an \<integer> is represented as a `number` or an {{domxref("SVGAnimatedInteger")}}.

## IRI

- \<IRI>

  - : An **I**nternationalized **R**esource **I**dentifier.

    On the Internet, resources are identified using _IRIs_ (Internationalized Resource Identifiers). For example, an SVG file called `someDrawing.svg` located at `http://example.com` might have the following _IRI_:

    ```plain
    http://example.com/someDrawing.svg
    ```

    An _IRI_ can also address a particular element within an XML document by including an _IRI_ fragment identifier as part of the _IRI_. An _IRI_ which includes an _IRI_ fragment identifier consists of an optional base _IRI_, followed by a "`#`" character, followed by the _IRI_ fragment identifier. For example, the following _IRI_ can be used to specify the element whose ID is "`Lamppost`" within file `someDrawing.svg`:

    ```plain
    http://example.com/someDrawing.svg#Lamppost
    ```

    _IRIs_ are used in the {{SVGAttr("xlink:href")}} attribute. Some attributes allow both _IRIs_ and text strings as content. To disambiguate a text string from a relative IRI, the functional notation \<FuncIRI> is used. This is an _IRI_ delimited with a functional notation. Note: For historical reasons, the delimiters are "`url(`" and "`)`", for compatibility with the CSS specifications. The _FuncIRI_ form is used in presentation attributes .

    SVG makes extensive use of _IRI_ references, both absolute and relative, to other objects. For example, to fill a rectangle with a linear gradient, you first define a {{SVGElement("linearGradient")}} element and give it an ID, as in:

    ```html
    <linearGradient xml:id="MyGradient">...</linearGradient>
    ```

    You then reference the linear gradient as the value of the {{SVGAttr("fill")}} attribute for the rectangle, as in the following example:

    ```html
    <rect fill="url(#MyGradient)" />
    ```

    SVG supports two types of _IRI_ references:

    - **local _IRI_ references**, where the IRI reference does not contain an \<absoluteIRI> or \<relativeIRI> and thus only contains a fragment identifier (i.e., `#<elementID>` or `#xpointer(id<elementID>)`).
    - **non-local _IRI_ references**, where the _IRI_ reference does contain an \<absoluteIRI> or \<relativeIRI>.

      For the full specification of IRI references in SVG, see [SVG 1.1 (2nd Edition): IRI references](https://www.w3.org/TR/SVG/linking.html#IRIReference).

## Length

- \<length>

  - : A length is a distance measurement, given as a number along with a unit.
    The SVG2 specification aligns with CSS [`<length>`](/en-US/docs/Web/CSS/length) data types and units for the attribute syntax and values.
    A length unit identifier must be provided and the values of the length unit identifiers are case-insensitive.
    The syntax follows the CSS `<length>` syntax:

    ```plain
    length ::= <number> (<absolute-length> | <relative-length>)?
    ```

    For SVG-specific properties defined in SVG1.1 and their corresponding presentation attributes, the unit identifiers in values are optional. If not provided, the length value represents a distance in the current user coordinate system. Length identifiers must be in lower case when used in presentation attributes for all properties whether they are defined in SVG or in CSS. This case sensitivity is relaxed in SVG2 to align with CSS.

    Note that the non-property \<length> definition also allows a percentage (`%`) unit identifier.
    The meaning of a percentage length value depends on the attribute for which the percentage length value has been specified. Two common cases are:

    - when a percentage length value represents a percentage of the viewport width or height
    - when a percentage length value represents a percentage of the bounding box width or height on a given object.

    In the SVG DOM, \<length> values are represented using {{domxref("SVGLength")}} or {{domxref("SVGAnimatedLength")}} objects.

## List-of-Ts

- \<list-of-Ts>

  - : (Where _T_ is some type.) A list consists of a separated sequence of values. Unless explicitly described differently, lists within SVG's XML attributes can be either comma-separated (with optional white space before or after the comma), or white space-separated.

    White space in lists is defined as one or more of the following consecutive characters: "space" (`U+0020`), "tab" (`U+0009`), "line feed" (`U+000A`), "carriage return" (`U+000D`), and "form-feed" (`U+000C`).

    The following is a template for an EBNF grammar describing the \<list-of-Ts> syntax:

    ```plain
    list-of-Ts ::= T
                    | T, list-of-Ts
    ```

    Within the SVG DOM, values of a \<list-of-Ts> type are represented by an interface specific for the particular type _T_. For example, a \<list-of-lengths> is represented in the SVG DOM using an {{domxref("SVGLengthList")}} or {{domxref("SVGAnimatedLengthList")}} object.

## Name

- \<name>

  - : A name, which is a string where a few characters of syntactic significance are disallowed.

    ```plain
    name  ::= [^,()#x20#x9#xD#xA] /* any char except ",", "(", ")" or wsp */
    ```

## Number

- \<number>

  - : Real numbers are specified in one of two ways. When used in a stylesheet, a \<number> is defined as follows:

    ```plain
    number ::= integer
                | [+-]? [0-9]* "." [0-9]+
    ```

    This syntax is the same as the definition in CSS (CSS2, section 4.3.1).

    When used in an SVG attribute, a \<number> is defined differently, to allow numbers with large magnitudes to be specified more concisely:

    ```plain
    number ::= integer ([Ee] integer)?
                | [+-]? [0-9]* "." [0-9]+ ([Ee] integer)?
    ```

    Within the SVG DOM, a \<number> is represented as a float, {{domxref("SVGNumber")}} or a {{domxref("SVGAnimatedNumber")}}.

## Number-optional-number

- \<number-optional-number>

  - : A pair of \<number>s, where the second \<number> is optional.

    ```plain
    number-optional-number ::= number
                                | number, number
    ```

    In the SVG DOM, a \<number-optional-number> is represented using a pair of {{domxref("SVGAnimatedInteger")}} or {{domxref("SVGAnimatedNumber")}} objects.

## Opacity value

- \<opacity-value>
  - : The opacity of the color or the content the current object is filled with, as a [\<number>](#number). Any values outside the range `0.0` (fully transparent) to `1.0` (fully opaque) will be clamped to this range.

## Paint

- \<paint>

  - : The values for properties {{SVGAttr("fill")}} and {{SVGAttr("stroke")}} define the type of paint to use when filling or stroking a given graphics element.
    The available options and syntax for \<paint> are:

    ```plain
    paint ::= none | <color> | <url> [none | <color>]? | context-fill | context-stroke
    ```

    The `context-fill` and `context-stroke` values allow for inheriting values in [marker](/en-US/docs/Web/SVG/Element/marker) and [use](/en-US/docs/Web/SVG/Element/use) elements.

    Within the SVG DOM, \<paint> values are represented using {{domxref("SVGPaint")}} objects.

## Percentage

- \<percentage>

  - : Percentages are specified as a number followed by a "`%`" character:

    ```plain
    percentage ::= number "%"
    ```

    Note that the definition of \<number> depends on whether the percentage is specified in a stylesheet or in an attribute that is not also a presentation attribute.

    Percentage values are always relative to another value (for example, a length). Each attribute or property that allows percentages also defines the reference distance measurement to which the percentage refers.

    Within the SVG DOM, a \<percentage> is represented using an {{domxref("SVGNumber")}} or {{domxref("SVGAnimatedNumber")}} object.

## Time

- \<time>

  - : A time value is a \<number> immediately followed by a time unit identifier. The time unit identifiers are:

    - `ms`: milliseconds
    - `s`: seconds

## Transform-list

- \<transform-list>

  - : A \<transform-list> is used to specify a list of coordinate system transformations. A detailed description of the possible values for a \<transform-list> is given in the {{SVGAttr("transform")}} attribute definition.

    Within the SVG DOM, a \<transform-list> value is represented using an {{domxref("SVGTransformList")}} or {{domxref("SVGAnimatedTransformList")}} object.

## URL

- URL

  - : A **U**niform **R**esource **L**ocator.

    A URL is a sequence of {{Glossary("Unicode")}} characters, building an address to an internal or external resource.

    Before SVG 2, the more limited [IRI](#iri) content type was used instead, because the URL specification was not standardized before.
