// Language dictionary (zh-CN & en)
const i18n = {
  'home.title': { zh: '你好，我是 <span class="accent">Luke Chen</span> 👋', en: 'Hi, I'm <span class="accent">Luke Chen</span> 👋' },
  'home.subtitle': { zh: 'FAE（SiP），正在自学高速 PCB 与硬件设计，在这里记录学习路线、项目与笔记。', en: 'FAE (SiP), learning high-speed PCB & hardware. I share roadmap, projects and notes here.' },
  'home.cta_projects': { zh: '查看项目', en: 'View Projects' },
  'home.cta_about': { zh: '了解我', en: 'About Me' },
  'home.feature1_title': { zh: '学习路线', en: 'Learning Path' },
  'home.feature1_desc': { zh: '从零基础进阶高速 PCB：电路基础 → 信号完整性 → 高速布线 → 设计验证。', en: 'Roadmap to high-speed PCB: basics → SI → routing → validation.' },
  'home.feature2_title': { zh: '项目作品', en: 'Projects' },
  'home.feature2_desc': { zh: '开源小项目与实战记录：原理图、PCB、仿真与测试。', en: 'Open-source projects and hands-on records: schematic, PCB, simulation & test.' },
  'home.feature3_title': { zh: '技术博客', en: 'Tech Blog' },
  'home.feature3_desc': { zh: '中英双语笔记：概念解释 + 工具实践 + 常见坑位。', en: 'Bilingual notes: concepts, tools, and pitfalls.' },
  'home.latest': { zh: '最新内容', en: 'Latest' },
  'about.title': { zh: '关于我', en: 'About' },
  'about.p1': { zh: '你好，我是 Luke Chen，现任 FAE（SiP）。土木专业转行电子，目标成为一名合格的硬件工程师与高速 PCB 工程师。', en: 'I'm Luke Chen, FAE (SiP). Transitioned from civil engineering to electronics, aiming to become a hardware & high-speed PCB engineer.' },
  'about.skills': { zh: '技能&兴趣', en: 'Skills & Interests' },
  'about.skill1': { zh: '硬件入门：电路基础、原理图与 PCB 设计', en: 'Hardware basics: circuits, schematics & PCB design' },
  'about.skill2': { zh: '信号完整性（SI）与电源完整性（PI）基础', en: 'Basics of SI/PI' },
  'about.skill3': { zh: '文档与中英双语技术写作', en: 'Documentation & bilingual tech writing' },
  'about.contact': { zh: '联系', en: 'Contact' },
  'projects.title': { zh: '项目', en: 'Projects' },
  'projects.desc': { zh: '这里展示正在进行或已完成的小项目（占位示例）：', en: 'Showcase of ongoing or finished small projects (placeholder):' }
};

// Persisted settings
const savedLang = localStorage.getItem('lang') || 'zh';
const savedTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', savedTheme);

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Apply language
  applyLang(savedLang);

  // Theme toggle
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const now = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', now);
    localStorage.setItem('theme', now);
  });

  // Lang toggle
  document.getElementById('langToggle')?.addEventListener('click', () => {
    const now = (localStorage.getItem('lang') || 'zh') === 'zh' ? 'en' : 'zh';
    applyLang(now);
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuBtn?.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
});

function applyLang(lang){
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const dict = i18n[key];
    if(dict){
      const val = dict[lang === 'en' ? 'en' : 'zh'];
      if(val){ el.innerHTML = val; }
    }
  });
}
