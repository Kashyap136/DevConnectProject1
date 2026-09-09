(() => {
      const table = document.getElementById('plan-comparison');
      const toggle = document.getElementById('differences-only');
      const rows = Array.from(table.tBodies[0].rows);

      rows.forEach((row) => {
        const values = Array.from(row.cells).map((cell) => cell.textContent.trim());
        const allEqual = values.every((value) => value === values[0]);
        row.classList.toggle('has-difference', !allEqual);
      });

      toggle.addEventListener('change', () => {
        table.classList.toggle('show-differences', toggle.checked);
      });
    })();
