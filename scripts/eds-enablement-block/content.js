(() => {
  const block = document.querySelector('.eds-enablement-block');
  if (!block) return;

  const rows = [
    [
      '<h2>Old Soul, New Strings</h2>'
      + "<p>Two old friends, two well-worn guitars, and a juke house stage they've played a thousand times. "
      + "The blues doesn't need much else.</p>",
    ],
    ['<picture><img src="/custom-images/juke-house-blues-1.png" alt="Two old men playing guitar on a juke house stage"></picture>'],
    ['<picture><img src="/custom-images/juke-house-blues-2.png" alt="Close-up of the two blues musicians performing"></picture>'],
    ['<video src="/custom-images/juke-house-blues.mp4" controls playsinline preload="metadata" poster="/custom-images/juke-house-blues-1.png"></video>'],
  ];

  rows.forEach((cells) => {
    const row = document.createElement('div');
    cells.forEach((html) => {
      const cell = document.createElement('div');
      cell.innerHTML = html;
      row.appendChild(cell);
    });
    block.appendChild(row);
  });
})();
