(() => {
    // Инициализация темы при загрузке страницы
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.className = `theme-${savedTheme}`;
        
        // Обновляем состояние переключателя, если он существует на странице
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.checked = (savedTheme === 'dark');
        }
    }

    // Переключение темы
    function toggleTheme() {
        const currentTheme = document.body.classList.contains('theme-dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.className = `theme-${newTheme}`;
        localStorage.setItem('theme', newTheme);
        
        // Обновляем состояние переключателя
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.checked = (newTheme === 'dark');
        }
    }

    // Инициализация при загрузке
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // Устанавливаем обработчик на переключатель (если он есть)
    document.addEventListener('change', (e) => {
        if (e.target && e.target.id === 'themeToggle') {
            toggleTheme();
        }
    });

    // Экспортируем функцию для ручного вызова (например, в editor.html)
    window.toggleTheme = toggleTheme;
})();