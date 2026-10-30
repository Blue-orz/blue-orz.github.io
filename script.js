(() => {
  'use strict';
  const translations = {
    intro: '我目前是<a href="https://www.sysu.edu.cn/">中山大学</a>的本科生。',
    interests: '我的兴趣包括视觉语言模型、多模态学习、可供性定位（Affordance Grounding）和计算机视觉。'
  };
  const elements = Array.from(document.querySelectorAll('[data-i18n]'));
  const english = new Map(elements.map(element => [element, element.innerHTML]));
  const toggle = document.getElementById('language-toggle');
  let chinese = false;
  document.querySelector('.language-control').hidden = false;
  toggle.addEventListener('click', () => {
    chinese = !chinese;
    document.documentElement.lang = chinese ? 'zh-CN' : 'en';
    elements.forEach(element => {
      element.innerHTML = chinese ? translations[element.dataset.i18n] : english.get(element);
    });
    toggle.textContent = chinese ? 'English' : '中文';
    toggle.setAttribute('aria-label', chinese ? 'Switch to English' : 'Switch to Chinese');
  });
})();
