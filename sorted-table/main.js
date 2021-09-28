window.addEventListener('DOMContentLoaded', () => {
  let dir = 'dsc';
  th = document.getElementsByTagName('th');
  for (let c = 0; c < th.length; c++) {
    th[c].addEventListener('click', item(c));
  }
  function item(c) {
    return function () {
      if (dir == 'asc') {
        dir = 'dsc';
      } else {
        dir = 'asc';
      }
      sortTable(c, dir);
    };
  }
  function sortTable(c, sort_dir) {
    let table_rows, switching, i, x, y, shouldSwitch;
    let table = document.getElementsByClassName('results_table');
    switching = true;
    table_rows = table[0].rows;
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      for (i = 0; i < table_rows.length - 1; i++) {
        shouldSwitch = false;
        let present_row = table_rows[i];
        let next_row = table_rows[i + 1];

        let present_percentage = present_row.cells[1].getElementsByClassName('row_values')[0].cells[1].innerText;
        let next_percentage = next_row.cells[1].getElementsByClassName('row_values')[0].cells[1].innerText;
        let present_percentage_length = present_percentage.length;
        present_percentage = present_percentage.substring(0, present_percentage.length - 1);
        let next_percentage_length = next_percentage.length;
        next_percentage = next_percentage.substring(0, next_percentage.length - 1);
        if (sort_dir == 'asc') {
          if (parseInt(present_percentage, 10) > parseInt(next_percentage, 10)) {
            shouldSwitch = true;
            break;
          }
        }
        if (sort_dir == 'dsc') {
          if (parseInt(present_percentage, 10) < parseInt(next_percentage, 10)) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        table_rows[i].parentNode.insertBefore(table_rows[i + 1], table_rows[i]);
        switching = true;
      }
    }
  }
});
