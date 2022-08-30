---
title: Making content editable
slug: Web/Guide/HTML/Editable_content
tags:
  - Advanced
  - Example
  - Guide
  - HTML
  - NeedsBrowserCompatibility
  - NeedsContent
  - Text
  - Web
  - contenteditable
  - text entry
  - text input
---
> **Warning:** As the [`execCommand()` spec](https://w3c.github.io/editing/docs/execCommand/) warns, its features "are not implemented consistently or fully by user agents", and in addition, it is marked as deprecated on the [`Document.execCommand()`](/en-US/docs/Web/API/Document/execCommand) reference page. Therefore, much of the content on this page cannot be trusted for use in production code.

In HTML, any element can be editable. By using some JavaScript event handlers, you can transform your web page into a full and fast rich text editor. This article provides some information about this functionality.

> **Note:** In Firefox 63 Beta/Dev edition, some of the rich-text editing features have been disabled by default, for better cross-browser compatibility. These are object resizing on {{htmlelement("img")}}, {{htmlelement("table")}}, and absolutely-positioned elements; inline table editing to add or remove rows and columns; and the grabber that allows moving of absolutely-positioned elements. See {{bug("1449564")}} for additional details.

## How does it work?

All you have to do is set the {{htmlattrxref("contenteditable")}} attribute on nearly any HTML element to make it editable.

Here's a simple example which creates a {{HTMLElement("div")}} element whose contents the user can edit.

```html
<div contenteditable="true">
  This text can be edited by the user.
</div>
```

Here's the above HTML in action:

{{ EmbedLiveSample('How_does_it_work') }}

## Executing commands

When an HTML element has `contenteditable` set to `true`, the {{ domxref("document.execCommand()") }} method is made available. This lets you run [commands](/en-US/docs/Web/API/Document/execCommand#commands) to manipulate the contents of the editable region. Most commands affect the document's selection by, for example, applying a style to the text (bold, italics, etc.), while others insert new elements (like adding a link) or affect an entire line (indenting). When using `contentEditable`, calling `execCommand()` will affect the currently active editable element.

## Differences in markup generation

Use of `contenteditable` across different browsers has been painful for a long time because of the differences in generated markup between browsers. For example, even something as simple as what happens when you press Enter/Return to create a new line of text inside an editable element was handled differently across the major browsers (Firefox inserted {{htmlelement("br")}} elements, IE/Opera used {{htmlelement("p")}}, Chrome/Safari used {{htmlelement("div")}}).

Fortunately, in modern browsers things are somewhat more consistent. As of [Firefox 60](/en-US/docs/Mozilla/Firefox/Releases/60), Firefox will be updated to wrap the separate lines in {{htmlelement("div")}} elements, matching the behavior of Chrome, modern Opera, Edge, and Safari.

Try it out in the above example.

> **Note:** Internet Explorer, which is no longer being developed, uses {{htmlelement("p")}} elements instead of `<div>`.

If you want to use a different paragraph separator, the above browsers all support {{domxref("document.execCommand")}}, which provides a `defaultParagraphSeparator` command to allow you to change it. For example, to use {{htmlelement("p")}} elements:

```js
document.execCommand("defaultParagraphSeparator", false, "p");
```

Additionally, Firefox supports the *non-standard* argument, `br`, for `defaultParagraphSeparator` since Firefox 55. This is useful if your web application expects the older Firefox behavior, and you don't want to or don't have the time to update it to use the new behavior. You can use the older Firefox behavior with this line:

```js
document.execCommand("defaultParagraphSeparator", false, "br");
```

## Security

For security reasons, Firefox doesn't let JavaScript code use clipboard related features (copy, paste, etc.) by default. You can enable them by setting the preferences shown below using `about:config`:

```js
user_pref("capability.policy.policynames", "allowclipboard");
user_pref("capability.policy.allowclipboard.sites", "https://www.mozilla.org");
user_pref("capability.policy.allowclipboard.Clipboard.cutcopy", "allAccess");
user_pref("capability.policy.allowclipboard.Clipboard.paste", "allAccess");
```

## Example: A simple but complete rich text editor

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width">
    <title>Rich Text Editor</title>
    <script>
      let doc, defTxt;

      function initDoc() {
        doc = document.getElementById("textBox");
        defTxt = doc.innerHTML;
        if (document.compForm.switchMode.checked) { 
          setDocMode(true);
        }
      }

      function formatDoc(cmd, value) {
        if (validateMode()) { 
          document.execCommand(cmd, false, value);
          doc.focus();
        }
      }

      function validateMode() {
        if (!document.compForm.switchMode.checked) { return true ; }
        alert("Uncheck \"Show HTML\".");
        doc.focus();
        return false;
      }

      function setDocMode(toSource) {
        let content;
        if (toSource) {
          content = document.createTextNode(doc.innerHTML);
          doc.innerHTML = "";
          const pre = document.createElement("pre");
          doc.contentEditable = false;
          pre.id = "sourceText";
          pre.contentEditable = true;
          pre.appendChild(content);
          doc.appendChild(pre);
          document.execCommand("defaultParagraphSeparator", false, "div");
        } else {
          if (document.all) {
            doc.innerHTML = doc.innerText;
          } else {
            content = document.createRange();
            content.selectNodeContents(doc.firstChild);
            doc.innerHTML = content.toString();
          }
          doc.contentEditable = true;
        }
        doc.focus();
      }

      function printDoc() {
        if (!validateMode()) { return; }
        const printWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
        printWin.document.open();
        printWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + doc.innerHTML + "<\/body><\/html>");
        printWin.document.close();
      }
    </script>
    <style>
      .intLink { cursor: pointer; }
      img.intLink { border: 0; }
      #toolBar1 select { font-size:10px; }
      #textBox {
        width: 540px;
        height: 200px;
        border: 1px #000000 solid;
        padding: 12px;
        overflow: scroll;
      }
      #textBox #sourceText {
        padding: 0;
        margin: 0;
        min-width: 498px;
        min-height: 200px;
      }
      #editMode label { cursor: pointer; }
    </style>
  </head>
  <body onload="initDoc();">
    <form name="compForm" method="post" action="sample.php" onsubmit="if (validateMode()) { this.myDoc.value = doc.innerHTML; return true; } return false;">
      <input type="hidden" name="myDoc">
      <div id="toolBar1">
        <select onchange="formatDoc('formatblock',this[this.selectedIndex].value); this.selectedIndex = 0;">
          <option selected>- formatting -</option>
          <option value="h1">Title 1 &lt;h1&gt;</option>
          <option value="h2">Title 2 &lt;h2&gt;</option>
          <option value="h3">Title 3 &lt;h3&gt;</option>
          <option value="h4">Title 4 &lt;h4&gt;</option>
          <option value="h5">Title 5 &lt;h5&gt;</option>
          <option value="h6">Subtitle &lt;h6&gt;</option>
          <option value="p">Paragraph &lt;p&gt;</option>
          <option value="pre">Preformatted &lt;pre&gt;</option>
        </select>
        <select onchange="formatDoc('fontname',this[this.selectedIndex].value); this.selectedIndex = 0;">
          <option class="heading" selected>- font -</option>
          <option>Arial</option>
          <option>Arial Black</option>
          <option>Courier New</option>
          <option>Times New Roman</option>
        </select>
        <select onchange="formatDoc('fontsize',this[this.selectedIndex].value); this.selectedIndex = 0;">
          <option class="heading" selected>- size -</option>
          <option value="1">Very small</option>
          <option value="2">A bit small</option>
          <option value="3">Normal</option>
          <option value="4">Medium-large</option>
          <option value="5">Big</option>
          <option value="6">Very big</option>
          <option value="7">Maximum</option>
        </select>
        <select onchange="formatDoc('forecolor',this[this.selectedIndex].value); this.selectedIndex=0;">
          <option class="heading" selected>- color -</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
        <select onchange="formatDoc('backcolor',this[this.selectedIndex].value); this.selectedIndex = 0;">
          <option class="heading" selected>- background -</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div id="toolBar2">
        <img class="intLink" title="Clean" onclick="if (validateMode() && confirm('Are you sure?')) { doc.innerHTML = defTxt };" src="data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7" />
        <img class="intLink" title="Print" onclick="printDoc();" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oEBxcZFmGboiwAAAAIdEVYdENvbW1lbnQA9syWvwAAAuFJREFUOMvtlUtsjFEUx//n3nn0YdpBh1abRpt4LFqtqkc3jRKkNEIsiIRIBBEhJJpKlIVo4m1RRMKKjQiRMJRUqUdKPT71qpIpiRKPaqdF55tv5vvusZjQTjOlseUkd3Xu/3dPzusC/22wtu2wRn+jG5So/OCDh8ycMJDflehMlkJkVK7KUYN+ufzA/RttH76zaVocDptRxzQtNi3mRWuPc+6cKtlXZ/sddP2uu9uXlmYXZ6Qm8v4Tz8lhF1H+zDQXt7S8oLMXtbF4e8QaFHjj3kbP2MzkktHpiTjp9VH6iHiA+whtAsX5brpwueMGdONdf/2A4M7ukDs1JW662+XkqTkeUoqjKtOjm2h53YFL15pSJ04Zc94wdtibr26fXlC2mzRvBccEbz2kiRFD414tKMlEZbVGT33+qCoHgha81SWYsew0r1uzfNylmtpx80pngQQ91LwVk2JGvGnfvZG6YcYRAT16GFtW5kKKfo1EQLtfh5Q2etT0BIWF+aitq4fDbk+ImYo1OxvGF03waFJQvBCkvDffRyEtxQiFFYgAZTHS0zwAGD7fG5TNnYNTp8/FzvGwJOfmgG7GOx0SAKKgQgDMgKBI0NJGMEImpGDk5+WACEwEd0ywblhGUZ4Hw5OdUekRBLT7DTgdEgxACsIznx8zpmWh7k4rkpJcuHDxCul6MDsmmBXDlWCH2+XozSgBnzsNCEE4euYV4pwCpsWYPW0UHDYBKSWu1NYjENDReqtKjwn2+zvtTc1vMSTB/mvev/WEYSlASsLimcOhOBJxw+N3aP/SjefNL5GePZmpu4kG7OPr1+tOfPyUu3BecWYKcwQcDFmwFKAUo90fhKDInBCAmvqnyMgqUEagQwCoHBDc1rjv9pIlD8IbVkz6qYViIBQGTJPx4k0XpIgEZoRN1Da0cij4VfR0ta3WvBXH/rjdCufv6R2zPgPH/e4pxSBCpeatqPrjNiso203/5s/zA171Mv8+w1LOAAAAAElFTkSuQmCC">
        <img class="intLink" title="Undo" onclick="formatDoc('undo');" src="data:image/gif;base64,R0lGODlhFgAWAOMKADljwliE33mOrpGjuYKl8aezxqPD+7/I19DV3NHa7P///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARR8MlJq7046807TkaYeJJBnES4EeUJvIGapWYAC0CsocQ7SDlWJkAkCA6ToMYWIARGQF3mRQVIEjkkSVLIbSfEwhdRIH4fh/DZMICe3/C4nBQBADs=" />
        <img class="intLink" title="Redo" onclick="formatDoc('redo');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAB1ChDljwl9vj1iE34Kl8aPD+7/I1////yH5BAEKAAcALAAAAAAWABYAAANKeLrc/jDKSesyphi7SiEgsVXZEATDICqBVJjpqWZt9NaEDNbQK1wCQsxlYnxMAImhyDoFAElJasRRvAZVRqqQXUy7Cgx4TC6bswkAOw==" />
        <img class="intLink" title="Remove formatting" onclick="formatDoc('removeFormat')" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9oECQMCKPI8CIIAAAAIdEVYdENvbW1lbnQA9syWvwAAAuhJREFUOMtjYBgFxAB501ZWBvVaL2nHnlmk6mXCJbF69zU+Hz/9fB5O1lx+bg45qhl8/fYr5it3XrP/YWTUvvvk3VeqGXz70TvbJy8+Wv39+2/Hz19/mGwjZzuTYjALuoBv9jImaXHeyD3H7kU8fPj2ICML8z92dlbtMzdeiG3fco7J08foH1kurkm3E9iw54YvKwuTuom+LPt/BgbWf3//sf37/1/c02cCG1lB8f//f95DZx74MTMzshhoSm6szrQ/a6Ir/Z2RkfEjBxuLYFpDiDi6Af///2ckaHBp7+7wmavP5n76+P2ClrLIYl8H9W36auJCbCxM4szMTJac7Kza////R3H1w2cfWAgafPbqs5g7D95++/P1B4+ECK8tAwMDw/1H7159+/7r7ZcvPz4fOHbzEwMDwx8GBgaGnNatfHZx8zqrJ+4VJBh5CQEGOySEua/v3n7hXmqI8WUGBgYGL3vVG7fuPK3i5GD9/fja7ZsMDAzMG/Ze52mZeSj4yu1XEq/ff7W5dvfVAS1lsXc4Db7z8C3r8p7Qjf///2dnZGxlqJuyr3rPqQd/Hhyu7oSpYWScylDQsd3kzvnH738wMDzj5GBN1VIWW4c3KDon7VOvm7S3paB9u5qsU5/x5KUnlY+eexQbkLNsErK61+++VnAJcfkyMTIwffj0QwZbJDKjcETs1Y8evyd48toz8y/ffzv//vPP4veffxpX77z6l5JewHPu8MqTDAwMDLzyrjb/mZm0JcT5Lj+89+Ybm6zz95oMh7s4XbygN3Sluq4Mj5K8iKMgP4f0////fv77//8nLy+7MCcXmyYDAwODS9jM9tcvPypd35pne3ljdjvj26+H2dhYpuENikgfvQeXNmSl3tqepxXsqhXPyc666s+fv1fMdKR3TK72zpix8nTc7bdfhfkEeVbC9KhbK/9iYWHiErbu6MWbY/7//8/4//9/pgOnH6jGVazvFDRtq2VgiBIZrUTIBgCk+ivHvuEKwAAAAABJRU5ErkJggg==">
        <img class="intLink" title="Bold" onclick="formatDoc('bold');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs=" />
        <img class="intLink" title="Italic" onclick="formatDoc('italic');" src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw==" />
        <img class="intLink" title="Underline" onclick="formatDoc('underline');" src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7" />
        <img class="intLink" title="Left align" onclick="formatDoc('justifyleft');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw==" />
        <img class="intLink" title="Center align" onclick="formatDoc('justifycenter');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7" />
        <img class="intLink" title="Right align" onclick="formatDoc('justifyright');" src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw==" />
        <img class="intLink" title="Numbered list" onclick="formatDoc('insertorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs=" />
        <img class="intLink" title="Dotted list" onclick="formatDoc('insertunorderedlist');" src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw==" />
        <img class="intLink" title="Quote" onclick="formatDoc('formatblock','blockquote');" src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7" />
        <img class="intLink" title="Delete indentation" onclick="formatDoc('outdent');" src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs=" />
        <img class="intLink" title="Add indentation" onclick="formatDoc('indent');" src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw==" />
        <img class="intLink" title="Hyperlink" onclick="const lnk = prompt('Write the URL here','http:\/\/');if (lnk && lnk != '' && lnk != 'http://') { formatDoc('createlink', sLnk) }" src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7" />
        <img class="intLink" title="Cut" onclick="formatDoc('cut');" src="data:image/gif;base64,R0lGODlhFgAWAIQSAB1ChBFNsRJTySJYwjljwkxwl19vj1dusYODhl6MnHmOrpqbmpGjuaezxrCztcDCxL/I18rL1P///////////////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAVu4CeOZGmeaKqubDs6TNnEbGNApNG0kbGMi5trwcA9GArXh+FAfBAw5UexUDAQESkRsfhJPwaH4YsEGAAJGisRGAQY7UCC9ZAXBB+74LGCRxIEHwAHdWooDgGJcwpxDisQBQRjIgkDCVlfmZqbmiEAOw==" />
        <img class="intLink" title="Copy" onclick="formatDoc('copy');" src="data:image/gif;base64,R0lGODlhFgAWAIQcAB1ChBFNsTRLYyJYwjljwl9vj1iE31iGzF6MnHWX9HOdz5GjuYCl2YKl8ZOt4qezxqK63aK/9KPD+7DI3b/I17LM/MrL1MLY9NHa7OPs++bx/Pv8/f///////////////yH5BAEAAB8ALAAAAAAWABYAAAWG4CeOZGmeaKqubOum1SQ/kPVOW749BeVSus2CgrCxHptLBbOQxCSNCCaF1GUqwQbBd0JGJAyGJJiobE+LnCaDcXAaEoxhQACgNw0FQx9kP+wmaRgYFBQNeAoGihCAJQsCkJAKOhgXEw8BLQYciooHf5o7EA+kC40qBKkAAAGrpy+wsbKzIiEAOw==" />
        <img class="intLink" title="Paste" onclick="formatDoc('paste');" src="data:image/gif;base64,R0lGODlhFgAWAIQUAD04KTRLY2tXQF9vj414WZWIbXmOrpqbmpGjudClFaezxsa0cb/I1+3YitHa7PrkIPHvbuPs+/fvrvv8/f///////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAWN4CeOZGmeaKqubGsusPvBSyFJjVDs6nJLB0khR4AkBCmfsCGBQAoCwjF5gwquVykSFbwZE+AwIBV0GhFog2EwIDchjwRiQo9E2Fx4XD5R+B0DDAEnBXBhBhN2DgwDAQFjJYVhCQYRfgoIDGiQJAWTCQMRiwwMfgicnVcAAAMOaK+bLAOrtLUyt7i5uiUhADs=" />
      </div>
      <div id="textBox" contenteditable="true">
        <p>Lorem ipsum</p>
      </div>
      <p id="editMode">
        <input type="checkbox" name="switchMode" id="switchBox" onchange="setDocMode(this.checked);" /> <label for="switchBox">Show HTML</label>
      </p>
      <p><input type="submit" value="Send" /></p>
    </form>
  </body>
</html>
```

## See also

- {{domxref("HTMLElement.contentEditable")}}
- The {{htmlattrxref("contenteditable")}} global attribute
- {{cssxref("caret-color")}}, which lets you set the color of the text insertion caret
