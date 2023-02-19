//window.onscroll = function() {scrollFunction()};

window.addEventListener("scroll", function() {
    scrollFunction();
}, false);

function scrollFunction() {
    //console.log("scrollfunction entered");
    //console.log(document.documentElement.scrollTop);
    header = document.querySelector('header');
    navtitle = document.querySelector('.navtitle');
    let products = document.querySelector('#products');

    if(document.documentElement.scrollTop > 150) {
        header.classList.add('scrolled');
        header.classList.remove('unscrolled');
        header.style.height = '50px';
        navtitle.classList.add('visible');
        navtitle.classList.remove('hidden');
    } else {
        header.classList.add('unscrolled');
        header.classList.remove('scrolled');
        header.style.height = '70px';
        navtitle.classList.add('hidden');
        navtitle.classList.remove('visible');
    }

    

    if(isInViewPort(products)) {
        //console.log('products in view');
        let product = document.querySelectorAll('.product');
        product.forEach((prod, index) => {
            //prod.style.opacity +=1;
            setTimeout(() => {
                prod.classList.add('fade');
            }, 150 * index)
            
        });
    } else {
        //console.log('products not in view')
    }
}

scrollToSection = (section) => {
    let anchor = document.getElementById(section);
    var standardOffset = 70;
    var servicesOffset = 50;
    if(section == "about") {
        document.documentElement.scrollTop = anchor.offsetTop - standardOffset;
        document.body.scrollTop = anchor.offsetTop - standardOffset;
    } else {
        document.documentElement.scrollTop = anchor.offsetTop - servicesOffset;
        document.body.scrollTop = anchor.offsetTop - servicesOffset;
    }
    
}

let isInViewPort = (elem) => {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}