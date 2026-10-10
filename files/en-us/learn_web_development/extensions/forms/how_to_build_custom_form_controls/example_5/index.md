---
title: Example 5
slug: Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls/Example_5
page-type: learn-module-chapter
sidebar: learnsidebar
---

This is the last example that explains [how to build custom form widgets](/en-US/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls).

## Change states

### HTML

```html
<form class="no-widget">
  <select name="myFruit" aria-label="Fruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div
    class="select"
    role="combobox"
    aria-label="Fruit"
    aria-haspopup="listbox"
    aria-expanded="false">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="listbox" aria-label="Fruit">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option" aria-selected="false">Lemon</li>
      <li class="option" role="option" aria-selected="false">Banana</li>
      <li class="option" role="option" aria-selected="false">Strawberry</li>
      <li class="option" role="option" aria-selected="false">Apple</li>
    </ul>
  </div>
</form>
```

### CSS

```css
.widget select,
.no-widget .select {
  display: none;
}

/* --------------- */
/* Required Styles */
/* --------------- */

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline-color: transparent;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

/* ------------ */
/* Fancy Styles */
/* ------------ */

.select {
  font-size: 0.625em; /* 10px */
  font-family: "Verdana", "Arial", sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid black; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgb(0 0 0 / 45%); /* 0 1px 2px */

  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select::after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid black;
  border-radius: 0 0.1em 0.1em 0;

  background-color: black;
  color: white;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid black;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgb(0 0 0 / 40%);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: black;
  color: white;
}

.select .option:not(.highlight):hover {
  background-color: rgb(0 0 0 / 10%);
}
```

### JavaScript

```js
// -------------------- //
// Function definitions //
// -------------------- //

function openOptList(select, activeIndex) {
  const optionList = select.querySelectorAll(".option");

  // Validate the requested active option BEFORE any popup state mutation.
  // If the requested index is invalid, leave the popup closed so the
  // POPUP_OPEN ⇒ valid active option invariant cannot be violated.
  if (
    !Number.isInteger(activeIndex) ||
    activeIndex < 0 ||
    activeIndex >= optionList.length
  ) {
    return;
  }

  const optList = select.querySelector(".optList");

  optList.classList.remove("hidden");
  select.classList.add("active");
  select.setAttribute("aria-expanded", "true");

  highlightOption(select, optionList[activeIndex]);
}

function commitActiveOption(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const optionList = select.querySelectorAll(".option");
  const activeId = select.getAttribute("aria-activedescendant");
  const activeIndex = [...optionList].findIndex(
    (option) => option.id === activeId,
  );

  if (activeIndex === -1) {
    return;
  }

  updateValue(select, activeIndex);
}

function closeOptList(select) {
  // aria-expanded is the single canonical source of truth for popup state.
  // The .active and .hidden classes are presentation mirrors maintained by
  // openOptList()/closeOptList() and are not consulted to authorize a state
  // transition.
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  const optionList = select.querySelectorAll(".option");
  const committedOption = optionList[getIndex(select)];
  if (committedOption) {
    highlightOption(select, committedOption);
  }

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
  select.setAttribute("aria-expanded", "false");
  select.removeAttribute("aria-activedescendant");
}

function cancelSelection(select) {
  if (select.getAttribute("aria-expanded") !== "true") {
    return;
  }

  closeOptList(select);
}

function deactivateOtherSelects(select, selectList) {
  selectList.forEach((other) => {
    if (other !== select) {
      closeOptList(other);
    }
  });
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");

  if (select.getAttribute("aria-expanded") === "true") {
    select.setAttribute("aria-activedescendant", option.id);
  }
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.textContent = optionList[index].textContent;

  optionList.forEach((option, optionIndex) => {
    const isSelected = optionIndex === index;
    option.classList.toggle("highlight", isSelected);
    option.setAttribute("aria-selected", String(isSelected));

    if (isSelected) {
      if (select.getAttribute("aria-expanded") === "true") {
        select.setAttribute("aria-activedescendant", option.id);
      } else {
        select.removeAttribute("aria-activedescendant");
      }
    }
  });
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

// This function returns the index of the currently active option in the listbox
// when the custom select is expanded. While expanded, keyboard navigation can
// move `aria-activedescendant` away from the committed selection, and
// subsequent keyboard navigation continues from that logical active option
// rather than from the committed selection. If the custom select is collapsed,
// or if the active descendant is missing or no longer matches an option, we
// fall back to the committed selection returned by `getIndex()`.
// It takes two parameters:
// select     : the DOM node with the class `select` related to the native control
// optionList : the list of options for the given custom control
function getActiveIndex(select, optionList) {
  if (select.getAttribute("aria-expanded") === "true") {
    const activeId = select.getAttribute("aria-activedescendant");
    const index = [...optionList].findIndex((option) => option.id === activeId);

    if (index !== -1) {
      return index;
    }
  }

  return getIndex(select);
}

// ------------- //
// Event binding //
// ------------- //

const form = document.querySelector("form");

const selectList = form.querySelectorAll(".select");

selectList.forEach((select, selectIndex) => {
  const optionList = select.querySelectorAll(".option");
  const selectedIndex = getIndex(select);

  select.tabIndex = 0;

  const optList = select.querySelector(".optList");
  const listboxId = `custom-select-${selectIndex}-listbox`;
  optList.id = listboxId;
  select.setAttribute("aria-controls", listboxId);

  optionList.forEach((option, optionIndex) => {
    option.id = `custom-select-${selectIndex}-option-${optionIndex}`;
  });

  updateValue(select, selectedIndex);

  optionList.forEach((option, index) => {
    option.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    option.addEventListener("click", (event) => {
      event.stopPropagation();
      highlightOption(select, optionList[index]);
      commitActiveOption(select);
      closeOptList(select);
      select.focus();
    });
  });

  select.addEventListener("click", () => {
    if (select.getAttribute("aria-expanded") === "true") {
      closeOptList(select);
      return;
    }
    openOptList(select, getIndex(select));
  });

  select.addEventListener("focus", () => {
    deactivateOtherSelects(select, selectList);
  });

  select.addEventListener("blur", () => {
    if (select.getAttribute("aria-expanded") === "true") {
      commitActiveOption(select);
      closeOptList(select);
    }
  });

  select.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      if (select.getAttribute("aria-expanded") === "true") {
        commitActiveOption(select);
        closeOptList(select);
      }
      return;
    }

    let index = getActiveIndex(select, optionList);
    const expanded = select.getAttribute("aria-expanded") === "true";

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, getIndex(select));
          break;
        }

        if (index < optionList.length - 1) {
          index++;
          highlightOption(select, optionList[index]);
        }
        break;

      case "ArrowUp":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, 0);
          break;
        }

        if (index > 0) {
          index--;
          highlightOption(select, optionList[index]);
        }
        break;

      case "Home":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, 0);
          break;
        }

        highlightOption(select, optionList[0]);
        break;

      case "End":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, optionList.length - 1);
          break;
        }

        highlightOption(select, optionList[optionList.length - 1]);
        break;

      case "Enter":
      case " ":
        event.preventDefault();

        if (!expanded) {
          openOptList(select, getIndex(select));
          break;
        }

        commitActiveOption(select);
        closeOptList(select);
        break;

      case "Escape":
        event.preventDefault();
        cancelSelection(select);
        break;
      default:
        // Ignore all other keys
        return;
    }
  });
});

if (selectList.length > 0) {
  form.classList.remove("no-widget");
  form.classList.add("widget");
}
```

### Result

{{ EmbedLiveSample('Change_states') }}
