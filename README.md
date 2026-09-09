# DevConnectProject1

## Plan comparison page

This project now includes a plan comparison page in `/home/runner/work/DevConnectProject1/DevConnectProject1/index.html` with three plans and fifteen features.

### Narrow-screen handling (reasoning)

A wide side-by-side table works well on desktop but can force horizontal scrolling on narrow screens. Instead of introducing horizontal scroll, the same semantic table is reflowed on small viewports into stacked feature cards:

- each row becomes a block
- the feature name stays as the row header
- each plan value is shown with its plan label (`Starter`, `Growth`, `Scale`)

This preserves readability at 320px while keeping true table markup (`table`, `caption`, `thead`, `tbody`, `th`, `td`) for assistive technology.

### Accessibility notes

- The “Highlight differences only” control is a native checkbox, so it is fully keyboard operable (Tab + Space).
- Focus is visibly styled for the checkbox.
- Keyboard navigation order follows visual order.
- With highlighting on, rows with equal values are dimmed and differing rows are highlighted, so the comparison remains understandable instead of hiding context.
