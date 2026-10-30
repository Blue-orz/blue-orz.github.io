(() => {
  'use strict';
  const email = 'chenyw226@mail2.sysu.edu.cn';
  const translations = {
    skip: '跳转到正文', navAbout: '关于', navInterests: '研究兴趣', navContact: '联系',
    heroLabel: '个人主页', role: '本科生', university: '中山大学',
    heroDescription: '探索视觉、语言与交互之间的联系。',
    getInTouch: '与我联系', heroFooter: '在不同模态的交汇处，保持好奇。', scroll: '进一步了解我',
    aboutTitle: '关于我', aboutLead: '关注机器如何<em>感知</em>、<br><em>理解</em>与<em>交互</em>。',
    aboutBody: '我目前是中山大学的本科生，兴趣主要集中在计算机视觉与多模态学习，尤其是视觉语言模型和可供性定位（Affordance Grounding）。',
    aboutBody2: '我希望理解视觉和语言表示如何帮助模型认识物体、感知上下文，并理解物体所支持的交互方式。',
    affiliationLabel: '所属机构', interestsTitle: '研究兴趣',
    vlmTitle: '视觉语言模型', vlmBody: '建立视觉信息与自然语言之间的联系。',
    affordanceTitle: '可供性定位', affordanceBody: '理解物体的哪些部位可以交互，以及如何交互。',
    multimodalTitle: '多模态学习', multimodalBody: '探索不同类型信息之间的共同表示。',
    visionTitle: '计算机视觉', visionBody: '感知和理解视觉世界。',
    contactLabel: '03 / 联系', contactTitle: '欢迎交流<span>。</span>',
    contactBody: '交流研究、学习，以及共同感兴趣的话题。', emailLabel: '邮箱',
    copyEmail: '复制邮箱', backTop: '回到顶部 ↑'
  };
  const elements = Array.from(document.querySelectorAll('[data-i18n]'));
  const english = new Map(elements.map(el => [el, el.innerHTML]));
  const languageButton = document.getElementById('language-toggle');
  const copyButton = document.getElementById('copy-email');
  const status = document.getElementById('copy-status');
  let language = 'en';
  let statusTimer;
  languageButton.hidden = false;
  copyButton.hidden = false;
  document.getElementById('year').textContent = String(new Date().getFullYear());
  languageButton.addEventListener('click', () => {
    language = language === 'en' ? 'zh-CN' : 'en';
    document.documentElement.lang = language;
    elements.forEach(el => { el.innerHTML = language === 'en' ? english.get(el) : translations[el.dataset.i18n]; });
    languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
    languageButton.innerHTML = language === 'en'
      ? '<span aria-hidden="true">中</span><span class="language-divider" aria-hidden="true">/</span><span class="language-current" aria-hidden="true">EN</span>'
      : '<span class="language-current" aria-hidden="true">中</span><span class="language-divider" aria-hidden="true">/</span><span aria-hidden="true">EN</span>';
    status.textContent = '';
  });
  copyButton.addEventListener('click', async () => {
    clearTimeout(statusTimer);
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = language === 'en' ? 'Copied!' : '已复制！';
    } catch {
      status.textContent = language === 'en' ? 'Please select and copy the address above.' : '请选中上方邮箱地址进行复制。';
    }
    statusTimer = setTimeout(() => { status.textContent = ''; }, 5000);
  });
})();
