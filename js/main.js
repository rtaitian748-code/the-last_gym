document.addEventListener('DOMContentLoaded', () => {
  /* ==============================
    header:ハンバーガーメニュー(SP)
  ============================== */
  const menuButton = document.querySelector('.header__menu');
  const headerNav = document.querySelector('.header__nav');

  if (menuButton && headerNav) {
    const closeMenu = () => {
      menuButton.classList.remove('is-open');
      headerNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      headerNav.setAttribute('aria-hidden', 'true');
    };

    const openMenu = () => {
      menuButton.classList.add('is-open');
      headerNav.classList.add('is-open');
      menuButton.setAttribute('aria-expanded', 'true');
      headerNav.setAttribute('aria-hidden', 'false');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // メニュー内のリンクをクリックしたら閉じる
    headerNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  /* ==============================
    faq:アコーディオン
  ============================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-item__header');
    if (!header) return;

    const toggle = () => {
      const isOpen = item.classList.toggle('is-open');
      header.setAttribute('aria-expanded', String(isOpen));
    };

    header.addEventListener('click', toggle);

    // role="button"要素のためキーボード操作(Enter/Space)にも対応
    header.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
});
