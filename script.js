// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 返回顶部按钮
    const backToTopBtn = document.getElementById('back-to-top');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 返回顶部功能
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 订阅表单提交
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput.value) {
                alert('订阅成功！感谢你的关注 💖');
                emailInput.value = '';
            }
        });
    }
    
    // 分类标签点击效果
    document.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            // 这里可以添加分类筛选逻辑
            alert(`你点击了 ${this.textContent} 分类`);
        });
    });
    
    // 文章卡片悬停效果
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 项目项悬停效果
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});