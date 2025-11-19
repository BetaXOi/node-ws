document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动到锚点
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 可以在这里添加其他交互式JavaScript，例如：
    // - 滚动时的动画效果
    // - 轮播图 (如果添加了)
    // - 表单验证 (例如联系表单)

    // 示例：联系表单提交事件
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止表单默认提交行为
            alert('感谢您的留言！我们将在近期与您联系。');
            // 实际应用中，这里会将表单数据发送到服务器
            this.reset(); // 清空表单
        });
    }

    // 示例：当点击“了解更多”按钮时，平滑滚动到“关于智驾”部分
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
