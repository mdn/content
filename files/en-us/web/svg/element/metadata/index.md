---
title: <metadata>
slug: Web/SVG/Element/metadata
tags:
  - Element
  - SVG
  - SVG Descriptive
browser-compat: svg.elements.metadata
---
{{SVGRef}}

The **`<metadata>`** [SVG](/en-US/docs/Web/SVG) element adds metadata to SVG content. Metadata is structured information about data. The contents of `<metadata>` should be elements from other {{Glossary("XML")}} {{Glossary("namespace", "namespaces")}} such as {{Glossary("RDF")}}, [FOAF](https://en.wikipedia.org/wiki/FOAF_\(ontology\)), etc.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Core attributes](/en-US/docs/Web/SVG/Attribute#core_attributes)
- [Global event attributes](/en-US/docs/Web/HTML/Global_attributes)

### Specific attributes

_None._

## DOM Interface

This element implements the {{domxref("SVGMetadataElement")}} interface.

## Example

```html
<svg width="400" viewBox="0 0 400 300"
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <metadata>
    <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
             xmlns:connect="http://www.w3.org/1999/08/29-svg-connections-in-RDF#">
      <rdf:Description about="#CableA">
        <connect:ends rdf:resource="#socket1"/>
        <connect:ends rdf:resource="#ComputerA"/>
      </rdf:Description>
      <rdf:Description about="#CableB">
        <connect:ends rdf:resource="#socket2"/>
        <connect:ends rdf:resource="#ComputerB"/>
      </rdf:Description>
      <rdf:Description about="#CableN">
        <connect:ends rdf:resource="#socket5"/>
        <connect:ends>Everything</connect:ends>
      </rdf:Description>
      <rdf:Description about="#Hub">
        <connect:ends rdf:resource="#socket1"/>
        <connect:ends rdf:resource="#socket2"/>
        <connect:ends rdf:resource="#socket3"/>
        <connect:ends rdf:resource="#socket4"/>
        <connect:ends rdf:resource="#socket5"/>
      </rdf:Description>
    </rdf:RDF>
  </metadata>
  <title>Network</title>
  <desc>An example of a computer network based on a hub.</desc>

  <style>
    svg {
      /* Default styles to be inherited */
      fill: white;
      stroke: black;
    }
    text { fill: black; stroke: none; }
    path { fill: none; }
  </style>

  <!-- Define symbols used in the SVG -->
  <defs>

    <!-- hubPlug symbol. Used by hub symbol -->
    <symbol id="hubPlug">
      <desc>A 10BaseT/100baseTX socket</desc>
      <path d="M0,10 h5 v-9 h12 v9 h5 v16 h-22 z"/>
    </symbol>

    <!-- hub symbol -->
    <symbol id="hub">
      <desc>A typical 10BaseT/100BaseTX network hub</desc>
      <text x="0" y="15">Hub</text>
      <g transform="translate(0 20)">
        <rect width="253" height="84"/>
        <rect width="229" height="44" x="12" y="10"/>
        <circle fill="red" cx="227" cy="71" r="7" />
        <!-- five groups each using the defined socket -->
        <g id="sock1et" transform="translate(25 20)">
          <title>Socket 1</title>
          <use xlink:href="#hubPlug"/>
        </g>
        <g id="socket2" transform="translate(70 20)">
          <title>Socket 2</title>
          <use xlink:href="#hubPlug"/>
        </g>
        <g id="socket3" transform="translate(115 20)">
          <title>Socket 3</title>
          <use xlink:href="#hubPlug"/>
        </g>
        <g id="socket4" transform="translate(160 20)">
          <title>Socket 4</title>
          <use xlink:href="#hubPlug"/>
        </g>
        <g id="socket5" transform="translate(205 20)">
          <title>Socket 5</title>
          <use xlink:href="#hubPlug"/>
        </g>
      </g>
    </symbol>

    <!-- computer symbol -->
    <symbol id="computer">
      <desc>A common desktop PC</desc>
      <g id="monitorStand" transform="translate(40 121)">
        <title>Monitor stand</title>
        <desc>One of those cool swivelling monitor stands that sit under the monitor</desc>
        <path d="m0,0 S 10 10 40 12"/>
        <path d="m80,0 S 70 10 40 12"/>
        <path d="m0,20 L 10 10 S 40 12 70 10 L 80 20z"/>
      </g>
      <g id="monitor">
        <title>Monitor</title>
        <desc>A very fancy monitor</desc>
        <rect width="160" height="120"/>
        <rect fill="lightgrey" width="138" height="95" x="11" y="12"/>
      </g>
      <g id="processor" transform="translate(0 142)">
        <title>The computer</title>
        <desc>A desktop computer - broad flat box style</desc>
        <rect width="160" height="60"/>
        <g id="discDrive" transform="translate(70 8)">
          <title>disc drive</title>
          <desc>A built-in disc drive</desc>
          <rect width="58" height="3" x="12" y="8"/>
          <rect width="8" height="2" x="12" y="15"/>
        </g>
        <circle cx="135" cy="40" r="5"/>
      </g>
     </symbol>
  </defs>

  <text x="0" y="15">Network</text>

  <!-- Use the hub symbol. -->
  <g id="Hub" transform="translate(80 45)">
    <title>Hub</title>
    <use xlink:href="#hub" transform="scale(0.75)"/>
  </g>

  <!-- Use the computer symbol. -->
  <g id="ComputerA" transform="translate(20 170)">
    <title>Computer A</title>
    <use xlink:href="#computer" transform="scale(0.5)"/>
  </g>

  <!-- Use the same computer symbol. -->
  <g id="ComputerB" transform="translate(300 170)">
    <title>Computer B</title>
    <use xlink:href="#computer" transform="scale(0.5)"/>
  </g>

  <!-- Draw Cable A. -->
  <g id="CableA" transform="translate(107 88)">
    <title>Cable A</title>
    <desc>10BaseT twisted pair cable</desc>
    <path d="M0,0c100,140 50,140 -8,160"/>
  </g>

  <!-- Draw Cable B. -->
  <g id="CableB" transform="translate(142 88)">
    <title>Cable B</title>
    <desc>10BaseT twisted pair cable</desc>
    <path d="M0,0c100,180 110,160 159,160"/>
  </g>

  <!-- Draw Cable N. -->
  <g id="CableN" transform="translate(242 88)">
     <title>Cable N</title>
     <desc>10BaseT twisted pair cable</desc>
     <path d="M0,0c0,-70 20,-50 60,-50"/>
  </g>
</svg>
```

{{ EmbedLiveSample('Example', '100%', 300) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
