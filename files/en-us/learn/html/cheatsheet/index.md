---
title: HTML Cheat Sheet
slug: Learn/HTML/Cheatsheet
page-type: guide
---

{{LearnSidebar}}

While using {{Glossary("HTML")}} it can be very handy to have an easy way to remember how to use HTML tags properly and how to apply them. MDN provides you with an extended [HTML documentation](/en-US/docs/Web/HTML/Element) as well as a deep instructional [HTML how-to](/en-US/docs/Learn/HTML/Howto). However, in many cases we just need some quick hints as we go. That's the whole purpose of the cheat sheet, to give you some quick accurate ready to use code snippets for common usages.

> **Note:** HTML tags must be used for their semantic, not their appearance. It's always possible to totally change the look and feel of a given tag using {{Glossary("CSS")}} so, when using HTML, take the time to focus on the meaning rather than the appearance.

## Inline elements

An "element" is a single part of a webpage. Some elements are large and hold smaller elements like containers. Some elements are small and are "nested" inside larger ones. By default, "inline elements" appear next to one another in a webpage. They take up only as much width as they need in a page and fit together horizontally like words in a sentence or books shelved side-by-side in a row. All inline elements can be placed within the `<body>` element.

<table class="standard-table">
  <caption>Inline elements: usage and examples</caption>
  <thead>
    <tr>
      <th scope="col">Usage</th>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A link</td>
      <td>{{HTMLElement("a")}}</td>
      <td id="a-example">
        <pre class="brush: html">
&#x3C;a href="https://example.org">
A link to example.org&#x3C;/a>.</pre
        >
        {{EmbedLiveSample("a-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>An image</td>
      <td>{{HTMLElement("img")}}</td>
      <td id="img-example">
        <pre class="brush: html">&#x3C;img src="beast.png" width="50" /></pre>
        {{EmbedLiveSample("img-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>An inline container</td>
      <td>{{HTMLElement("span")}}</td>
      <td id="span-example">
        <pre class="brush: html">
Used to group elements: for example,
to &#x3C;span style="color:blue">style
them&#x3C;/span>.</pre
        >
        {{EmbedLiveSample("span-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Emphasize text</td>
      <td>{{HTMLElement("em")}}</td>
      <td id="em-example">
        <pre class="brush: html">&#x3C;em>I'm posh&#x3C;/em>.</pre>
        {{EmbedLiveSample("em-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Italic text</td>
      <td>{{HTMLElement("i")}}</td>
      <td id="i-example">
        <pre class="brush: html">
Mark a phrase in &#x3C;i>italics&#x3C;/i>.</pre
        >
        {{EmbedLiveSample("i-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Bold text</td>
      <td>{{HTMLElement("b")}}</td>
      <td id="b-example">
        <pre class="brush: html">Bold &#x3C;b>a word or phrase&#x3C;/b>.</pre>
        {{EmbedLiveSample("b-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Important text</td>
      <td>{{HTMLElement("strong")}}</td>
      <td id="strong-example">
        <pre class="brush: html">&#x3C;strong>I'm important!&#x3C;/strong></pre>
        {{EmbedLiveSample("strong-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Highlight text</td>
      <td>{{HTMLElement("mark")}}</td>
      <td id="mark-example">
        <pre class="brush: html">&#x3C;mark>Notice me!&#x3C;/mark></pre>
        {{EmbedLiveSample("mark-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Strikethrough text</td>
      <td>{{HTMLElement("s")}}</td>
      <td id="s-example">
        <pre class="brush: html">&#x3C;s>I'm irrelevant.&#x3C;/s></pre>
        {{EmbedLiveSample("s-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Subscript</td>
      <td>{{HTMLElement("sub")}}</td>
      <td id="sub-example">
        <pre class="brush: html">H&#x3C;sub>2&#x3C;/sub>O</pre>
        {{EmbedLiveSample("sub-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Small text</td>
      <td>{{HTMLElement("small")}}</td>
      <td id="small-example">
        <pre class="brush: html">
Used to represent the &#x3C;small>small
print &#x3C;/small>of a document.</pre
        >
        {{EmbedLiveSample("small-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Address</td>
      <td>{{HTMLElement("address")}}</td>
      <td id="address-example">
        <pre class="brush: html">
&#x3C;address>Main street 67&#x3C;/address></pre
        >
        {{EmbedLiveSample("address-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Textual citation</td>
      <td>{{HTMLElement("cite")}}</td>
      <td id="cite-example">
        <pre class="brush: html">
For more monsters,
see &#x3C;cite>The Monster Book of Monsters&#x3C;/cite>.</pre
        >
        {{EmbedLiveSample("cite-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Superscript</td>
      <td>{{HTMLElement("sup")}}</td>
      <td id="sup-example">
        <pre class="brush: html">x&#x3C;sup>2&#x3C;/sup></pre>
        {{EmbedLiveSample("sup-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Inline quotation</td>
      <td>{{HTMLElement("q")}}</td>
      <td id="q-example">
        <pre class="brush: html">&#x3C;q>Me?&#x3C;/q>, she said.</pre>
        {{EmbedLiveSample("q-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>A line break</td>
      <td>{{HTMLElement("br")}}</td>
      <td id="br-example">
        <pre class="brush: html">Line 1&#x3C;br>Line 2</pre>
        {{EmbedLiveSample("br-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>A possible line break</td>
      <td>{{HTMLElement("wbr")}}</td>
      <td id="wbr-example">
        <pre class="brush: html">
&#x3C;div style="width: 200px">
  Llanfair&#x3C;wbr>pwllgwyngyllgogerychwyrngogogoch.
&#x3C;/div></pre
        >
        {{EmbedLiveSample("wbr-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Date</td>
      <td>{{HTMLElement("time")}}</td>
      <td id="time-example">
        <pre class="brush: html">
Used to format the date. For example:
&#x3C;time datetime="2020-05-24" pubdate>
published on 23-05-2020&#x3C;/time>.</pre
        >
        {{EmbedLiveSample("time-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Code format</td>
      <td>{{HTMLElement("code")}}</td>
      <td id="code-example">
        <pre class="brush: html">
This text is in normal format,
but &#x3C;code>this text is in code
format&#x3C;/code>.</pre
        >
        {{EmbedLiveSample("code-example", 100, 60)}}
      </td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>{{HTMLElement("audio")}}</td>
      <td id="audio-example">
        <pre class="brush: html">
&#x3C;audio controls>
  &#x3C;source src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3" type="audio/mpeg">
&#x3C;/audio>
        </pre>
        {{EmbedLiveSample("audio-example", 100, 80)}}
      </td>
    </tr>
    <tr>
      <td>Video</td>
      <td>{{HTMLElement("video")}}</td>
      <td id="video-example">
        <pre class="brush: html">
&#x3C;video controls width="250"
  src="https://archive.org/download/ElephantsDream/ed_hd.ogv" >
  &#x3C;a href="https://archive.org/download/ElephantsDream/ed_hd.ogv">Download OGV video&#x3C;/a>
&#x3C;/video></pre
        >
        {{EmbedLiveSample("video-example", 100, 200)}}
      </td>
    </tr>
  </tbody>
</table>

## Block elements

"Block elements," on the other hand, take up the entire width of a webpage. They also take up a full line of a webpage; they do not fit together side-by-side. Instead, they stack like paragraphs in an essay or toy blocks in a tower.

> **Note:** Because this cheat sheet is limited to a few elements representing specific structures or having special semantics, the [`div`](/en-US/docs/Web/HTML/Element/div) element is intentionally not included — because the `div` element doesn't represent anything and doesn't have any special semantics.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Usage</th>
      <th scope="col">Element</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A simple paragraph</td>
      <td>{{HTMLElement("p")}}</td>
      <td id="p-example">
        <pre class="brush: html">
&#x3C;p>I'm a paragraph&#x3C;/p>
&#x3C;p>I'm another paragraph&#x3C;/p></pre
        >
        {{EmbedLiveSample("p-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>An extended quotation</td>
      <td>{{HTMLElement("blockquote")}}</td>
      <td id="blockquote-example">
        <pre class="brush: html">
They said:
&#x3C;blockquote>The blockquote element indicates
an extended quotation.&#x3C;/blockquote></pre
        >
        {{EmbedLiveSample("blockquote-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Additional information</td>
      <td>{{HTMLElement("details")}}</td>
      <td id="details-example">
        <pre class="brush: html">
&#x3C;details>
  &#x3C;summary>Html Cheat Sheet&#x3C;/summary>
  &#x3C;p>Inline elements&#x3C;/p>
  &#x3C;p>Block elements&#x3C;/p>
&#x3C;/details></pre
        >
        {{EmbedLiveSample("details-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>An unordered list</td>
      <td>{{HTMLElement("ul")}}</td>
      <td id="ul-example">
        <pre class="brush: html">&#x3C;ul><br>
  &#x3C;li>I'm an item&#x3C;/li><br>
  &#x3C;li>I'm another item&#x3C;/li><br>
&#x3C;/ul></pre>
        {{EmbedLiveSample("ul-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>An ordered list</td>
      <td>{{HTMLElement("ol")}}</td>
      <td id="ol-example">
        <pre class="brush: html">&#x3C;ol><br>
  &#x3C;li>I'm the first item&#x3C;/li><br>
  &#x3C;li>I'm the second item&#x3C;/li><br>
&#x3C;/ol></pre>
        {{EmbedLiveSample("ol-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>A definition list</td>
      <td>{{HTMLElement("dl")}}</td>
      <td id="dl-example">
        <pre class="brush: html">&#x3C;dl>
  &#x3C;dt>A Term&#x3C;/dt><br>
  &#x3C;dd>Definition of a term&#x3C;/dd>
  &#x3C;dt>Another Term&#x3C;/dt>
  &#x3C;dd>Definition of another term&#x3C;/dd>
&#x3C;/dl></pre>
        {{EmbedLiveSample("dl-example", 100, 150)}}
      </td>
    </tr>
    <tr>
      <td>A horizontal rule</td>
      <td>{{HTMLElement("hr")}}</td>
      <td id="hr-example">
        <pre class="brush: html">before&#x3C;hr>after</pre>
        {{EmbedLiveSample("hr-example", 100, 100)}}
      </td>
    </tr>
    <tr>
      <td>Text Heading</td>
      <td>
        {{HTMLElement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}
      </td>
      <td id="h1-h6-example">
        <pre class="brush: html">
&#x3C;h1> This is Heading 1 &#x3C;/h1>
&#x3C;h2> This is Heading 2 &#x3C;/h2>
&#x3C;h3> This is Heading 3 &#x3C;/h3>
&#x3C;h4> This is Heading 4 &#x3C;/h4>
&#x3C;h5> This is Heading 5 &#x3C;/h5>
&#x3C;h6> This is Heading 6 &#x3C;/h6></pre
        >
        {{EmbedLiveSample("h1-h6-example", 100, 350)}}
      </td>
    </tr>
  </tbody>
</table>
