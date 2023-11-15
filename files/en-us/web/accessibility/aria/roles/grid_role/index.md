---
title: "ARIA: grid role"
slug: Web/Accessibility/ARIA/Roles/grid_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#grid
---

The grid role is for a widget that contains one or more rows of cells. The position of each cell is significant and can be focused using keyboard input.

## Description

The `grid` role is a composite widget containing a collection of one or more rows with one or more cells where some or all cells in the grid are focusable by using methods of two-dimensional navigation, such as directional arrow keys.

```html
<table role="grid" aria-labelledby="id-select-your-seat">
  <caption id="id-select-your-seat">
    Select your seat
  </caption>
  <tbody role="presentation">
    <tr role="presentation">
      <td></td>
      <th>Row A</th>
      <th>Row B</th>
    </tr>
    <tr>
      <th scope="row">Aisle 1</th>
      <td tabindex="0">
        <button id="1a" tabindex="-1">1A</button>
      </td>
      <td tabindex="-1">
        <button id="1b" tabindex="-1">1B</button>
      </td>
      <!-- More Columns -->
    </tr>
    <tr>
      <th scope="row">Aisle 2</th>
      <td tabindex="-1">
        <button id="2a" tabindex="-1">2A</button>
      </td>
      <td tabindex="-1">
        <button id="2b" tabindex="-1">2B</button>
      </td>
      <!-- More Columns -->
    </tr>
  </tbody>
</table>
```

A grid widget contains one or more rows with one or more cells of thematically related interactive content. While it does not imply a specific visual presentation, it implies a relationship among elements. Uses fall into two categories: presenting tabular information (data grids) and grouping other widgets (layout grids). Even though both data grids and layout grids employ the same ARIA roles, states, and properties, differences in their content and purpose surface factors that are important to consider in keyboard interaction design. See [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) for more details.

Cell elements have the role [`gridcell`](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role), unless they are a row or column header. Then the elements are [`rowheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role) and [`columnheader`](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role), respectively. Cell elements need to be owned by elements with a [`row`](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role) role. Rows can be grouped using `rowgroups`.

If the grid is used as an interactive widget, [keyboard interactions](#keyboard_interactions) need to be implemented.

### Associated ARIA roles, states, and properties

#### Roles

- [treegrid](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role) (subclass)
  - : If a grid has columns that can expanded or collapsed, a treegrid can be used.
- [row](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
  - : A row inside the grid.
- [rowgroup](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
  - : A group containing one or multiple [row](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)s.

#### States and properties

- [aria-level](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
  - : Indicates the hierarchical level of the grid within other structures.
- [aria-multiselectable](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
  - : If `aria-multiselectable` is set to `true`, multiple items in the grid can be selected. The default value is `false`.
- [aria-readonly](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)
  - : If the user can navigate the grid but not change the value or values of the grid, the [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) should be set to `true`. The default value is `false`.

> **Note:** For many use cases, an HTML {{HTMLElement('table')}} element is sufficient as it and the various table elements already include many ARIA roles.

### Keyboard interactions

When a keyboard user encounters a grid, they navigate the rows and columns using the <kbd>left</kbd>, <kbd>right</kbd>, <kbd>top</kbd> and <kbd>down</kbd> keys. To activate the interactive component, they will use the <kbd>return</kbd> and <kbd>space</kbd> keys.

| Key                               | Action                                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>→</kbd>                      | Moves focus one cell to the right. Optionally (layout grids), if focus is on the right-most cell in the row, focus may move to the first cell in the following row. If focus is on the last cell in the grid, focus does not move.    |
| <kbd>←</kbd>                      | Moves focus one cell to the left. Optionally (layout grids), if focus is on the left-most cell in the row, focus may move to the last cell in the previous row. If focus is on the first cell in the grid, focus does not move.       |
| <kbd>↓</kbd>                      | Moves focus one cell down. Optionally (layout grids), if focus is on the bottom cell in the column, focus may move to the top cell in the following column. If focus is on the last cell in the grid, focus does not move.            |
| <kbd>↑</kbd>                      | Moves focus one cell up. Optionally (layout grids), if focus is on the top cell in the column, focus may move to the bottom cell in the previous column. If focus is on the first cell in the grid, focus does not move.              |
| <kbd>Page Down</kbd>              | Moves focus down an author-determined number of rows, typically scrolling so the bottom row in the currently visible set of rows becomes one of the first visible rows. If focus is in the last row of the grid, focus does not move. |
| <kbd>Page Up</kbd>                | Moves focus up an author-determined number of rows, typically scrolling so the top row in the currently visible set of rows becomes one of the last visible rows. If focus is in the first row of the grid, focus does not move.      |
| <kbd>Home</kbd>                   | Moves focus to the first cell in the row that contains focus.                                                                                                                                                                         |
| <kbd>End</kbd>                    | Moves focus to the last cell in the row that contains focus.                                                                                                                                                                          |
| <kbd>ctrl</kbd> + <kbd>Home</kbd> | Moves focus to the first cell in the first row.                                                                                                                                                                                       |
| <kbd>ctrl</kbd> + <kbd>End</kbd>  | Moves focus to the last cell in the last row.                                                                                                                                                                                         |

If cells, rows, or columns can be selected, the following key combination are commonly used:

| Key combination                     | Action                                                                                                                                                                                              |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>ctrl</kbd> + <kbd>Space</kbd>  | Select the column that contains the focus.                                                                                                                                                          |
| <kbd>shift</kbd> + <kbd>Space</kbd> | Selects the row that contains the focus. If the grid includes a column with checkboxes to select rows, this key combination can be used to check that box even if the focus is not on the checkbox. |
| <kbd>ctrl</kbd> + <kbd>A</kbd>      | Selects all cells.                                                                                                                                                                                  |
| <kbd>shift</kbd> + <kbd>→</kbd>     | Extends selection one cell to the right.                                                                                                                                                            |
| <kbd>shift</kbd> + <kbd>←</kbd>     | Extends selection one cell to the left.                                                                                                                                                             |
| <kbd>shift</kbd> + <kbd>↓</kbd>     | Extends selection one cell down.                                                                                                                                                                    |
| <kbd>shift</kbd> + <kbd>↑</kbd>     | Extends selection one cell up.                                                                                                                                                                      |

## Examples

### Calendar example

{{EmbedLiveSample("Calendar_example", "100%", "300")}}

#### HTML

```html
<table role="grid" aria-labelledby="calendarheader">
  <caption id="calendarheader">
    September 2018
  </caption>
  <thead role="rowgroup">
    <tr role="row">
      <td></td>
      <th role="columnheader" aria-label="Sunday">S</th>
      <th role="columnheader" aria-label="Monday">M</th>
      <th role="columnheader" aria-label="Tuesday">T</th>
      <th role="columnheader" aria-label="Wednesday">W</th>
      <th role="columnheader" aria-label="Thursday">T</th>
      <th role="columnheader" aria-label="Friday">F</th>
      <th role="columnheader" aria-label="Saturday">S</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <th scope="row" role="rowheader">Week 1</th>
      <td>26</td>
      <td>27</td>
      <td>28</td>
      <td>29</td>
      <td>30</td>
      <td>31</td>
      <td role="gridcell" tabindex="-1">1</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 2</th>
      <td role="gridcell" tabindex="-1">2</td>
      <td role="gridcell" tabindex="-1">3</td>
      <td role="gridcell" tabindex="-1">4</td>
      <td role="gridcell" tabindex="-1">5</td>
      <td role="gridcell" tabindex="-1">6</td>
      <td role="gridcell" tabindex="-1">7</td>
      <td role="gridcell" tabindex="-1">8</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 3</th>
      <td role="gridcell" tabindex="-1">9</td>
      <td role="gridcell" tabindex="-1">10</td>
      <td role="gridcell" tabindex="-1">11</td>
      <td role="gridcell" tabindex="-1">12</td>
      <td role="gridcell" tabindex="-1">13</td>
      <td role="gridcell" tabindex="-1">14</td>
      <td role="gridcell" tabindex="-1">15</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 4</th>
      <td role="gridcell" tabindex="-1">16</td>
      <td role="gridcell" tabindex="-1">17</td>
      <td role="gridcell" tabindex="-1">18</td>
      <td role="gridcell" tabindex="-1">19</td>
      <td role="gridcell" tabindex="-1">20</td>
      <td role="gridcell" tabindex="-1">21</td>
      <td role="gridcell" tabindex="-1">22</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 5</th>
      <td role="gridcell" tabindex="-1">23</td>
      <td role="gridcell" tabindex="-1">24</td>
      <td role="gridcell" tabindex="-1">25</td>
      <td role="gridcell" tabindex="-1">26</td>
      <td role="gridcell" tabindex="-1">27</td>
      <td role="gridcell" tabindex="-1">28</td>
      <td role="gridcell" tabindex="-1">29</td>
    </tr>
    <tr role="row">
      <th scope="row" role="rowheader">Week 6</th>
      <td role="gridcell" tabindex="-1">30</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
table {
  margin: 0;
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
}

tbody th,
tbody td {
  padding: 5px;
}

tbody td {
  border: 1px solid #000;
  text-align: right;
  color: #767676;
}

tbody td[role="gridcell"] {
  color: #000;
}

tbody td[role="gridcell"]:hover,
tbody td[role="gridcell"]:focus {
  background-color: #f6f6f6;
  outline: 3px solid blue;
}
```

#### JavaScript

```js
const selectables = document.querySelectorAll('table td[role="gridcell"]');

selectables[0].setAttribute("tabindex", 0);

const trs = document.querySelectorAll("table tbody tr");
let row = 0;
let col = 0;
let maxrow = trs.length - 1;
let maxcol = 0;

trs.forEach((gridrow) => {
  gridrow.querySelectorAll("td").forEach((el) => {
    el.dataset.row = row;
    el.dataset.col = col;
    col++;
  });
  if (col > maxcol) {
    maxcol = col - 1;
  }
  col = 0;
  row++;
});

function moveto(newrow, newcol) {
  const tgt = document.querySelector(
    `[data-row="${newrow}"][data-col="${newcol}"]`,
  );
  if (tgt?.getAttribute("role") === "gridcell") {
    document.querySelectorAll("[role=gridcell]").forEach((el) => {
      el.setAttribute("tabindex", "-1");
    });
    tgt.setAttribute("tabindex", "0");
    tgt.focus();
    return true;
  } else {
    return false;
  }
}

document.querySelector("table").addEventListener("keydown", (event) => {
  const col = parseInt(event.target.dataset.col, 10);
  const row = parseInt(event.target.dataset.row, 10);
  switch (event.key) {
    case "ArrowRight": {
      const newrow = col === 6 ? row + 1 : row;
      const newcol = col === 6 ? 0 : col + 1;
      moveto(newrow, newcol);
      break;
    }
    case "ArrowLeft": {
      const newrow = col === 0 ? row - 1 : row;
      const newcol = col === 0 ? 6 : col - 1;
      moveto(newrow, newcol);
      break;
    }
    case "ArrowDown":
      moveto(row + 1, col);
      break;
    case "ArrowUp":
      moveto(row - 1, col);
      break;
    case "Home": {
      if (event.ctrlKey) {
        let i = 0;
        let result;
        do {
          let j = 0;
          do {
            result = moveto(i, j);
            j++;
          } while (!result);
          i++;
        } while (!result);
      } else {
        moveto(row, 0);
      }
      break;
    }
    case "End": {
      if (event.ctrlKey) {
        let i = maxrow;
        let result;
        do {
          let j = maxcol;
          do {
            result = moveto(i, j);
            j--;
          } while (!result);
          i--;
        } while (!result);
      } else {
        moveto(
          row,
          document.querySelector(
            `[data-row="${event.target.dataset.row}"]:last-of-type`,
          ).dataset.col,
        );
      }
      break;
    }
    case "PageUp": {
      let i = 0;
      let result;
      do {
        result = moveto(i, col);
        i++;
      } while (!result);
      break;
    }
    case "PageDown": {
      let i = maxrow;
      let result;
      do {
        result = moveto(i, col);
        i--;
      } while (!result);
      break;
    }
    case "Enter": {
      console.log(event.target.textContent);
      break;
    }
  }
  event.preventDefault();
});
```

### More examples

- [Data Grid Examples](https://www.w3.org/WAI/ARIA/apg/example-index/grid/dataGrids.html)
- [Layout Grids Examples](https://www.w3.org/WAI/ARIA/apg/example-index/grid/LayoutGrids.html)
- [W3C/WAI Tutorial: Tables](https://www.w3.org/WAI/tutorials/tables/)

## Accessibility concerns

Even if the keyboard use is properly implemented, some users might not be aware that they have to use the arrow keys. Make sure that the functionality and interaction needed can be best achieved using the grid role.

## Specifications

{{Specifications}}

## See also

- [ARIA `composite` role](/en-US/docs/Web/Accessibility/ARIA/Roles/composite_role)
- [ARIA `table` role](/en-US/docs/Web/Accessibility/ARIA/Roles/table_role)
- [ARIA `treegrid` role](/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role)
- [ARIA `row` role](/en-US/docs/Web/Accessibility/ARIA/Roles/row_role)
- [ARIA `rowgroup` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role)
- [ARIA: `gridcell` role](/en-US/docs/Web/Accessibility/ARIA/Roles/gridcell_role)
- [ARIA: `rowheader` role](/en-US/docs/Web/Accessibility/ARIA/Roles/rowheader_role)
- [ARIA: columnheader role](/en-US/docs/Web/Accessibility/ARIA/Roles/columnheader_role)
- {{HTMLElement('table','HTML <code>&lt;table&gt;</code> element')}}
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-level)
- [`aria-multiselectable`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable)
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
