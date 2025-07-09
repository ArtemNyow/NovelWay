import{i as d,S as q,N as A,K as U,P as V,a as I,A as K}from"./assets/vendor-BreCM410.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();window.addEventListener("DOMContentLoaded",()=>{document.body.classList.add("loaded")});const s={bookList:document.querySelector(".books__list"),bookCategoryDropdown:document.querySelector(".dropdown-menu"),bookCategory:document.querySelector(".books__options"),booksCount:document.getElementById("books-count"),booksTotal:document.getElementById("books-total"),showMore:document.getElementById("books-more"),openBookModal:document.querySelector(".btn-books"),backdrop:document.querySelector(".backdrop"),loaderEl:document.getElementById("books-loader"),footerForm:document.querySelector(".footer-form"),footerInput:document.querySelector(".footer-input"),mobileMenu:document.querySelector(".js-menu"),mobileMenuContainer:document.querySelector(".mobile-menu-container"),openMobileBtn:document.querySelector(".js-open-menu"),closeMobileBtn:document.querySelector(".js-close-menu"),navLinks:document.querySelectorAll(".js-header-list-link"),scrollUpBtn:document.querySelector(".scroll-up")};function Y(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".events-list-item-btn").forEach(n=>{n.addEventListener("click",()=>{const m=n.closest(".events-list-item").querySelector(".events-list-item-title").textContent.trim(),g=n.getAttribute("data-id");t(m,g)})})});function t(n,l){const m=document.getElementById("contactModal"),g=document.getElementById("eventTitle"),E=document.getElementById("eventId");g.textContent=n,E.value=l,m.style.display="flex",document.body.style.overflow="hidden",s.scrollUpBtn.classList.remove("show")}function e(){document.querySelectorAll(".input-wrapper").forEach(n=>{n.classList.remove("error"),n.querySelectorAll(".error-text-input, .error-text-textarea").forEach(l=>l.classList.remove("visible"))})}function o(n){e();const l=n.closest(".input-wrapper"),m=l.querySelector(".error-text-input, .error-text-textarea");m&&(l.classList.add("error"),m.classList.add("visible"))}function i(n){if(n.required&&!n.value.trim())return o(n),n.setCustomValidity("This field is required"),!1;if(n.type==="email"&&n.value&&!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(n.value))return o(n),n.setCustomValidity("Please enter a valid email address"),!1;n.setCustomValidity("");const l=n.closest(".input-wrapper");return l.classList.remove("error"),l.querySelectorAll(".error-text-input, .error-text-textarea").forEach(m=>m.classList.remove("visible")),!0}function r(n){const l=n.join("<br/>");d.error({title:"Error",message:l,position:"topRight",timeout:5e3})}function a(){d.success({title:"Success",message:"Registration successful!",position:"topRight",timeout:5e3})}function c(){const n=document.getElementById("contactModal");n.style.display="none",document.body.style.overflow="auto",document.getElementById("contactForm").reset(),e(),s.scrollUpBtn.classList.add("show")}const p=document.getElementById("contactModal"),u=document.getElementById("closeBtn"),h=document.getElementById("contactForm"),v=document.querySelectorAll(".input-wrapper input, .input-wrapper textarea");h.setAttribute("novalidate",!0),p.addEventListener("click",n=>{n.target===p&&c(),s.scrollUpBtn.classList.add("show")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&c(),s.scrollUpBtn.classList.add("show")}),u.addEventListener("click",c),h.addEventListener("submit",n=>{n.preventDefault(),e();let l=!0,m=[],g=null;for(const B of v)if(!i(B)){g||(g=B),l=!1;const S=B.closest(".input-wrapper").querySelector(".error-text-input, .error-text-textarea");S&&S.textContent&&m.push(S.textContent);break}if(!l){r(m),g&&o(g);return}const E={eventId:document.getElementById("eventId").value,eventName:document.getElementById("eventTitle").textContent,name:document.getElementById("name").value,email:document.getElementById("email").value,message:document.getElementById("message").value};console.log("Form submitted:",E),a(),c()}),v.forEach(n=>{n.addEventListener("blur",()=>i(n)),n.addEventListener("input",()=>{n.closest(".input-wrapper").classList.contains("error")&&i(n)})}),window.openModal=t}Y();const y=document.querySelector(".swiper-button-prev"),w=document.querySelector(".swiper-button-next");new q(".swiper",{modules:[A,U],slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},on:{init:D,slideChange:D}});function D(t){t.isBeginning?(y.disabled=!0,y.classList.add("disabled")):(y.disabled=!1,y.classList.remove("disabled")),t.isEnd?(w.disabled=!0,w.classList.add("disabled")):(w.disabled=!1,w.classList.remove("disabled"))}(()=>{const{openMobileBtn:t,closeMobileBtn:e,mobileMenu:o,navLinks:i,mobileMenuContainer:r}=s,a=document.body;t.addEventListener("click",()=>{o.classList.add("is-open"),a.classList.add("no-scroll"),r.classList.add("animate-in")}),e.addEventListener("click",()=>{o.classList.remove("is-open"),a.classList.remove("no-scroll"),r.classList.remove("animate-in")}),i.forEach(c=>{c.addEventListener("click",p=>{const u=c.getAttribute("href");if(!u.startsWith("#"))return;p.preventDefault();const h=u.slice(1),v=document.getElementById(h);v&&(v.scrollIntoView({behavior:"smooth"}),o.classList.remove("is-open"),a.classList.remove("no-scroll"),r.classList.remove("animate-in"))})})})();window.addEventListener("scroll",()=>{const t=window.innerWidth;let e;t<768?e=200:t<1440?e=300:e=500,window.scrollY>e?s.scrollUpBtn.classList.add("show"):s.scrollUpBtn.classList.remove("show")});s.scrollUpBtn.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const{footerForm:t,footerInput:e}=s;t.addEventListener("submit",o=>{if(o.preventDefault(),e.value.trim()===""){d.warning({title:"Attention",message:"The email field cannot be empty!",position:"topRight",timeout:3e3,backgroundColor:"#ffa000"});return}d.success({title:"Success",message:"Thank you for subscribing!",position:"topRight",timeout:3e3,backgroundColor:"#4caf50"}),t.reset()})});new q(".user-feedback-swiper",{modules:[A,V,U],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".user-swiper-button-next",prevEl:".user-swiper-button-prev"},pagination:{el:".user-feedback-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init:N,slideChange:N}});function N(t){const e=document.querySelector(".user-swiper-button-prev"),o=document.querySelector(".user-swiper-button-next");t.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),t.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}const $="https://books-backend.p.goit.global/books";async function _(){try{return(await I.get(`${$}/category-list`,{})).data}catch(t){d.error({message:t.message,position:"topRight"})}}async function j(t){try{return(await I.get(`${$}/category`,{params:{category:t}})).data}catch(e){d.error({message:e.message,position:"topRight"})}}async function Z(t){try{return(await I.get(`${$}/${t}`)).data}catch(e){d.error({message:e.message,position:"topRight"})}}const b="/NovelWay/assets/sprite-CW0ap_6O.svg",G=t=>t.map(({_id:e,book_image:o,title:i,author:r,price:a})=>`<li class="books__item">
            <article class="book-card">
              <div class="book-card__thumb">
                <img
                  class="book-card__image"
                  src="${o}"
                  alt="${i}"
                  width="343"
                  height="487"
                />
              </div>
              <div class="book-card__info">
                <div class="book-card__block">
                  <h3 class="book-card__title">${i}</h3>
                  <p class="book-card__author">${r}</p>
                </div>
                <p class="book-card__price">$${Math.round(a)}</p>
              </div>
              <button class="btn-gray btn-books" type="button" data-id="${e}">
                Learn More
              </button>
            </article>
          </li>`).join(""),J=t=>{s.bookList.insertAdjacentHTML("beforeend",G(t))},Q=t=>t.map(({list_name:e})=>`
         <li>
                  <a
                    class="dropdown-menu-link option-category"
                    href="#"
                    data-category="${e}"
                    value="${e}"
                    >${e}</a
                  >
                </li>`).join(""),X=async()=>{const e=(await _()).filter(o=>o.list_name.trim()!=="");e.unshift({list_name:"All categories"}),s.bookCategoryDropdown.insertAdjacentHTML("beforeend",Q(e))},ee=t=>t.map(({list_name:e})=>`<li class="books__option-item">
            <a id="childrens-middle-grade" href="#" class="books__option" data-category="${e}">${e}
            </a>
          </li>`).join(""),te=async()=>{const e=(await _()).filter(o=>o.list_name.trim()!=="");e.unshift({list_name:"All categories"}),s.bookCategory.insertAdjacentHTML("beforeend",ee(e))},oe=({book_image:t,title:e,author:o,price:i,description:r,publisher:a})=>{const c=r&&r.trim()!==""?r:a;return`
    <div class="book-modal">
      <div class="book-modal-images">
        <button class="close-btn btn-icon-close" type="button">
          <svg class="icon-close" width="14" height="14">
            <use href="${b}#icon-close-btn"></use>
          </svg>
        </button>
        <img
          class="image-book-modal"
          src="${t}"
          alt="${e}"
          width="309"
          height="467"
        />
      </div>
      <div class="book-modal-info">
        <h2 class="book-modal-title">${e}</h2>
        <p class="book-modal-text">${o}</p>
        <p class="book-modal-price">$${i}</p>
        <form class="form-book-modal">
          <div class="form-book-quantity">
            <button class="btn-icon minus" type="button">
              <svg class="icon-price-minus" width="14" height="14">
                <use href="${b}#icon-minus"></use>
              </svg>
            </button>
            <input class="form-input-sum" maxlength="2" name="number" type="text" />
            <button class="btn-icon plus" type="button">
              <svg class="icon-price-plus" width="14" height="14">
                <use href="${b}#icon-plus"></use>
              </svg>
            </button>
          </div>
          <div class="form-buttons">
            <button
              class="form-btn-book-modal add-to-cart btn-gap btn-orange"
              type="button"
            >
              Add To Cart
            </button>
            <button class="form-btn-book-modal buy-now btn-gray" type="submit">
              Buy Now
            </button>
          </div>
        </form>
        <ul class="accordeon-container">
          <li class="ac ac-item">
            <button class="ac-trigger">
              Details
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                ${c}
              </p>
            </div>
          </li>
          <li class="ac ac-item">
            <button class="ac-trigger">
              Shipping
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                We ship across the United States within 2–5 business days. All
                orders are processed through USPS or a reliable courier service.
                Enjoy free standard shipping on orders over $50.
              </p>
            </div>
          </li>
          <li class="ac ac-item">
            <button class="ac-trigger">
              Returns
              <svg class="icon-down icon-down-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="${b}#icon-chevron-up"></use>
              </svg>
            </button>
            <div class="ac-panel">
              <p class="book-modal-item-text">
                You can return an item within 14 days of receiving your order,
                provided it hasn’t been used and is in its original condition. To
                start a return, please contact our support team — we’ll guide you
                through the process quickly and hassle-free.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    `};function se(t){s.backdrop.innerHTML="",s.backdrop.insertAdjacentHTML("beforeend",oe(t))}function O(t){t.key==="Escape"&&M(),s.scrollUpBtn.classList.add("show")}function ne(t){se(t),s.backdrop.classList.add("is-open-book-modal"),document.body.classList.add("no-scroll"),s.scrollUpBtn.classList.remove("show"),new K(".accordeon-container",{showMultiple:!0});const e=s.backdrop.querySelector(".form-input-sum"),o=s.backdrop.querySelector(".minus"),i=s.backdrop.querySelector(".plus"),r=s.backdrop.querySelector(".add-to-cart"),a=s.backdrop.querySelector(".form-book-modal"),c=s.backdrop.querySelector(".close-btn");e.value=1;let p=1,u;o.addEventListener("click",()=>{if(+e.value>1)e.value=+e.value-1;else{d.error({message:"Enter the correct format",position:"topRight"}),e.value=1;return}}),i.addEventListener("click",()=>{if(+e.value>=1)e.value=+e.value+1;else{d.error({message:"Enter the correct format",position:"topRight"}),e.value=1;return}}),r.addEventListener("click",h);function h(n){if(p=e.value.trim(),u=Number(p),!p||isNaN(u)||u<1){d.error({message:"Enter the correct format",position:"topRight"}),e.value=1;return}else d.success({message:`Number of selected products: ${u}`,position:"topRight"})}a.addEventListener("submit",v);function v(n){if(n.preventDefault(),p=e.value.trim(),u=Number(p),!p||isNaN(u)||u<1){d.error({message:"Enter the correct format",position:"topRight"}),e.value=1,alert("inputSum:"+e);return}else d.success({message:"Thank you for your purchase.",position:"topRight"})}c.addEventListener("click",M),s.backdrop.addEventListener("click",n=>{n.target===s.backdrop&&M(),s.scrollUpBtn.classList.add("show")}),document.addEventListener("keydown",O)}function M(){s.backdrop.classList.remove("is-open-book-modal"),document.body.classList.remove("no-scroll"),s.backdrop.innerHTML="",s.scrollUpBtn.classList.add("show"),document.removeEventListener("keydown",O)}function F(t,e){s.booksCount.textContent=t,s.booksTotal.textContent=e}function T(){s.loaderEl.classList.remove("is-hidden")}function P(){s.loaderEl.classList.add("is-hidden")}async function re(t){t.preventDefault();const e=t.target.closest(".books__option");if(!e)return;const o=e.dataset.category;await H(o)}async function ie(t){t.preventDefault();const e=t.target.closest(".dropdown-menu-link");if(!e)return;const o=e.dataset.category;s.bookCategoryDropdown.closest(".dropdown").querySelector(".dropdown-label").textContent=o,s.bookCategoryDropdown.closest(".dropdown").classList.remove("open"),await H(o)}async function H(t){s.bookList.innerHTML="",T(),await Promise.resolve();try{if(t==="All categories"){(await z()).length>24?s.showMore.classList.remove("is-hidden"):s.showMore.classList.add("is-hidden");return}const e=await j(t);Array.isArray(e)&&e.length>0?(W(e),R()):(F(0,0),s.showMore.classList.add("is-hidden"))}catch(e){d.error({message:e.message,position:"topRight"})}finally{P()}}async function ae(t){const e=t.target.closest(".btn-books");if(!e)return;const o=e.dataset.id;if(o)try{const i=await Z(o);ne(i)}catch{d.error({message:"Не вдалося завантажити дані книги",position:"topRight"})}}let C=[],k=[],f=0;function W(t){k=t,f=0}function ce(t){f+=t}async function z(){T();try{const e=(await _()).filter(i=>i.list_name.trim()!=="");return C=(await Promise.all(e.map(i=>j(i.list_name)))).flat(),W(C),R(),C}catch(t){console.error("Error loading all books:",t)}finally{P()}}function R(){T();const t=f===0?24:4,e=k.slice(f,f+t);ce(e.length),f===e.length&&(s.bookList.innerHTML=""),J(e),F(f,k.length),f<k.length?s.showMore.classList.remove("is-hidden"):s.showMore.classList.add("is-hidden"),P()}z();X();te();s.bookCategory.addEventListener("click",re);s.bookCategoryDropdown.addEventListener("click",ie);s.showMore.addEventListener("click",R);document.body.addEventListener("click",ae);const le=document.querySelector(".dropdown-toggle"),L=document.querySelector(".dropdown"),de=document.querySelectorAll(".dropdown-menu-link"),ue=document.querySelector(".dropdown-label");le.addEventListener("click",t=>{t.stopPropagation(),L.classList.toggle("open")});document.addEventListener("click",t=>{L.contains(t.target)||L.classList.remove("open")});de.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const o=t.dataset.category||t.textContent;ue.textContent=o,L.classList.remove("open")})});new q(".events-swiper",{modules:[A,V],slidesPerView:1,loop:!1,roundLengths:!0,navigation:{nextEl:".events-swiper-button-next",prevEl:".events-swiper-button-prev"},pagination:{el:".events-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,slidesPerGroup:3,spaceBetween:24}},on:{init:x,slideChange:x,resize:function(){this.update(),x(this)}}});function x(t){const e=document.querySelector(".events-swiper-button-prev"),o=document.querySelector(".events-swiper-button-next");if(!e||!o)return;const i=t.slides.length,r=t.params.slidesPerView;t.isBeginning?(e.classList.add("swiper-button-disabled"),e.setAttribute("aria-disabled","true")):(e.classList.remove("swiper-button-disabled"),e.setAttribute("aria-disabled","false")),i<=r||t.isEnd?(o.classList.add("swiper-button-disabled"),o.setAttribute("aria-disabled","true")):(o.classList.remove("swiper-button-disabled"),o.setAttribute("aria-disabled","false"))}
//# sourceMappingURL=index.js.map
