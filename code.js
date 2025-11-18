
  const content = {
    text0: "Our Journey",
    text1: "A Story of Innovation, Passion, and Growth",
    text2: "1995",
    text3: "The Beginning",
    text4: "It all started with a simple idea and a passionate vision. A small team came together with dreams of creating something extraordinary that would change the industry forever.",
    text5: "2000",
    text6: "First Milestone",
    text7: "After years of dedication and hard work, we achieved our first major breakthrough. Our innovative approach caught the attention of industry leaders and early adopters who believed in our mission.",
    text8: "2005",
    text9: "Expanding Horizons",
    text10: "Growth brought new opportunities and challenges. We expanded our reach across borders, building partnerships and connections that would shape our future. Our community grew, and with it, our impact.",
    text11: "2010",
    text12: "Innovation Era",
    text13: "The digital revolution transformed everything. We embraced new technologies and reinvented our approach, staying ahead of the curve while maintaining our core values and commitment to excellence.",
    text14: "2015",
    text15: "Global Recognition",
    text16: "Our efforts were recognized on the world stage. Awards, accolades, and most importantly, the trust of millions of people who chose to be part of our journey. We had become more than just a company.",
    text17: "2020",
    text18: "Adapting to Change",
    text19: "When the world faced unprecedented challenges, we adapted and evolved. Our resilience and flexibility allowed us to not just survive, but thrive, finding new ways to serve and connect with our community.",
    text20: "2025",
    text21: "Looking Forward",
    text22: "Today, we stand at the threshold of a new era. With decades of experience and a vision for the future, we continue to innovate, inspire, and make a difference. Our story is still being written, and the best chapters are yet to come."
};


for (let key in content) {
    document.getElementById(key).innerHTML = content[key];
}


window.onscroll = function() {
    let scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById('scrollProgress').style.height = scrollPercent + '%';
    
    let hero = document.getElementsByClassName('hero')[0];
    if (hero) {
        hero.style.transform = 'translateY(' + (window.scrollY * 0.5) + 'px)';
        hero.style.opacity = 1 - (window.scrollY / 800);
    }
};

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
  
