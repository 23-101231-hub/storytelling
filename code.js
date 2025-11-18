// 1. شريط التقدم والباراليكس
window.onscroll = function() {
    // شريط التقدم
    let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scrollProgress').style.height = scrollPercent + '%';
    
    // تأثير الباراليكس
    let hero = document.getElementsByClassName('hero')[0];
    if (hero) {
        hero.style.transform = 'translateY(' + (window.scrollY * 0.5) + 'px)';
        hero.style.opacity = 1 - (window.scrollY / 800);
    }
};

// 2. ظهور عناصر التايم لاين
let items = document.getElementsByClassName('timeline-item');

window.addEventListener('scroll', function() {
    for (let i = 0; i < items.length; i++) {
        let position = items[i].getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        
        if (position < screenHeight - 100) {
            items[i].classList.add('active');
        }
    }
});

// 3. التمرير السلس للروابط
let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') && links[i].getAttribute('href')[0] === '#') {
        links[i].onclick = function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href').substring(1);
            let target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }
}
  
