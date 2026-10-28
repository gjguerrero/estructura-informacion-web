(function () {
  'use strict';
  var status;
  var timer;

  function announce(message) {
    if (!status) {
      status = document.createElement('div');
      status.className = 'guide-status';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      document.body.appendChild(status);
    }
    status.textContent = message;
    status.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(function () { status.hidden = true; }, 4000);
  }

  async function copy(text) {
    var area;
    var previous = document.activeElement;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        area = document.createElement('textarea');
        area.value = text;
        area.style.position = 'fixed';
        area.style.left = '-9999px';
        document.body.appendChild(area);
        area.select();
        if (!document.execCommand('copy')) throw new Error('copy');
      }
      announce('Copiado. Ya puedes pegarlo en el campo correspondiente.');
    } catch (error) {
      announce('Selecciona el texto y usa Ctrl+C en Windows o ⌘+C en Mac.');
    } finally {
      if (area) area.remove();
      if (previous && previous.focus) previous.focus();
    }
  }

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    button.addEventListener('click', function () { copy(button.dataset.copy); });
  });

  document.querySelectorAll('[data-check]').forEach(function (checkbox) {
    var key = 'uca-prestashop-guia-' + checkbox.dataset.check;
    try { checkbox.checked = localStorage.getItem(key) === '1'; } catch (error) {}
    checkbox.addEventListener('change', function () {
      try { localStorage.setItem(key, checkbox.checked ? '1' : '0'); } catch (error) {}
    });
  });
})();
