# Сайт психолога Дарьи Веселовой

Статический сайт без сборки: `index.html`, `css/style.css`, `js/main.js`, фото в `img/`.

## Как выложить на GitHub Pages
1. Создайте репозиторий на github.com (Public).
2. Нажмите **Add file → Upload files** и перетащите всё содержимое папки (включая папки `css`, `js`, `img`), затем **Commit changes**.
3. Откройте **Settings → Pages**, в разделе *Build and deployment* выберите **Deploy from a branch**, ветка **main**, папка **/(root)**, нажмите **Save**.
4. Через 1–2 минуты сайт откроется по адресу `https://ВАШ-ЛОГИН.github.io/НАЗВАНИЕ-РЕПОЗИТОРИЯ/` (если репозиторий называется `ВАШ-ЛОГИН.github.io`, то по адресу без названия).

## После публикации (для поисковиков и соцсетей)
В `<head>` файла `index.html` добавьте свой адрес:
```html
<link rel="canonical" href="https://ВАШ-АДРЕС/">
<meta property="og:url" content="https://ВАШ-АДРЕС/">
<meta property="og:image" content="https://ВАШ-АДРЕС/img/photo.jpg">
```

## Что где менять
- Тексты, цены, ссылки на Telegram и MAX: `index.html`
- Цвета, шрифты, размеры: `css/style.css` (переменные в начале файла)
- Фото и отзывы: файлы в `img/` (замените, сохранив имена)
