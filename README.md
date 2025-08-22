# Luke Chen 个人网站（静态版）

特性：
- 中英双语切换（原生 JS）
- 响应式 + 暗色模式
- 博客与项目页面示例

## 本地开发
直接双击 `index.html` 或用任意静态服务器：

```bash
# Python
python3 -m http.server 5173
# 然后访问 http://localhost:5173
```

## 部署建议
- Vercel：导入 Git 仓库一键部署
- GitHub Pages：推送到 `<user>.github.io` 仓库或开启 Pages
- Cloudflare Pages / Netlify 也可

## 自定义
- 修改 `assets/css/style.css` 样式
- 替换 `assets/images/avatar.svg` 头像
- 在 `blog/` 添加更多文章
