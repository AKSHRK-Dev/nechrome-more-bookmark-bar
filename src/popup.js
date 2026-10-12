// More Bookmark Bar: chooses how many rows the NeChrome bookmark bar may use.
// Uses chrome.nechrome, which only exists in NeChrome.
const t = (key) => chrome.i18n.getMessage(key);
document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });

const rowsBox = document.getElementById('rows');
const status = document.getElementById('status');
const api = chrome.nechrome;

function render(current) {
  rowsBox.replaceChildren();
  for (let n = 1; n <= 5; n++) {
    const b = document.createElement('button');
    b.textContent = String(n);
    b.title = `${n} ${t('rowUnit')}`;
    b.className = n === current ? 'on' : '';
    b.disabled = !api;
    b.addEventListener('click', async () => {
      try {
        await api.setBookmarkBarMaxRows(n);
        render(n);
        status.textContent = t('saved');
      } catch (error) {
        status.textContent = String(error.message || error);
      }
    });
    rowsBox.append(b);
  }
}

if (!api) {
  document.getElementById('need').hidden = false;
  render(1);
} else {
  api.getBookmarkBarMaxRows().then(render, () => render(1));
}
