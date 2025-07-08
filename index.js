import{i as m,S as A,N as M,P as j,K as W,a as I,A as K}from"./assets/vendor-BreCM410.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();window.addEventListener("DOMContentLoaded",()=>{document.body.classList.add("loaded")});function Y(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".events-list-item-btn").forEach(s=>{s.addEventListener("click",()=>{const u=s.closest(".events-list-item").querySelector(".events-list-item-title").textContent.trim(),g=s.getAttribute("data-id");t(u,g)})})});function t(s,l){const u=document.getElementById("contactModal"),g=document.getElementById("eventTitle"),L=document.getElementById("eventId");g.textContent=s,L.value=l,u.style.display="flex",document.body.style.overflow="hidden"}function e(){document.querySelectorAll(".input-wrapper").forEach(s=>{s.classList.remove("error"),s.querySelectorAll(".error-text-input, .error-text-textarea").forEach(l=>l.classList.remove("visible"))})}function o(s){e();const l=s.closest(".input-wrapper"),u=l.querySelector(".error-text-input, .error-text-textarea");u&&(l.classList.add("error"),u.classList.add("visible"))}function i(s){if(s.required&&!s.value.trim())return o(s),s.setCustomValidity("This field is required"),!1;if(s.type==="email"&&s.value&&!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(s.value))return o(s),s.setCustomValidity("Please enter a valid email address"),!1;s.setCustomValidity("");const l=s.closest(".input-wrapper");return l.classList.remove("error"),l.querySelectorAll(".error-text-input, .error-text-textarea").forEach(u=>u.classList.remove("visible")),!0}function r(s){const l=s.join("<br/>");m.error({title:"Error",message:l,position:"topRight",timeout:5e3})}function a(){m.success({title:"Success",message:"Registration successful!",position:"topRight",timeout:5e3})}function c(){const s=document.getElementById("contactModal");s.style.display="none",document.body.style.overflow="auto",document.getElementById("contactForm").reset(),e()}const p=document.getElementById("contactModal"),d=document.getElementById("closeBtn"),f=document.getElementById("contactForm"),b=document.querySelectorAll(".input-wrapper input, .input-wrapper textarea");f.setAttribute("novalidate",!0),p.addEventListener("click",s=>{s.target===p&&c()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&c()}),d.addEventListener("click",c),f.addEventListener("submit",s=>{s.preventDefault(),e();let l=!0,u=[],g=null;for(const E of b)if(!i(E)){g||(g=E),l=!1;const B=E.closest(".input-wrapper").querySelector(".error-text-input, .error-text-textarea");B&&B.textContent&&u.push(B.textContent);break}if(!l){r(u),g&&o(g);return}const L={eventId:document.getElementById("eventId").value,eventName:document.getElementById("eventTitle").textContent,name:document.getElementById("name").value,email:document.getElementById("email").value,message:document.getElementById("message").value};console.log("Form submitted:",L),a(),c()}),b.forEach(s=>{s.addEventListener("blur",()=>i(s)),s.addEventListener("input",()=>{s.closest(".input-wrapper").classList.contains("error")&&i(s)})}),window.openModal=t}Y();const h=document.querySelector(".swiper-button-prev"),y=document.querySelector(".swiper-button-next");new A(".swiper",{modules:[M],slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:R,slideChange:R}});function R(t){t.isBeginning?(h.disabled=!0,h.classList.add("disabled")):(h.disabled=!1,h.classList.remove("disabled")),t.isEnd?(y.disabled=!0,y.classList.add("disabled")):(y.disabled=!1,y.classList.remove("disabled"))}(()=>{const t=document.querySelector(".js-open-menu"),e=document.querySelector(".js-close-menu"),o=document.querySelector(".js-menu"),i=document.body,r=document.querySelectorAll(".js-header-list-link"),a=document.querySelector(".mobile-menu-container");t.addEventListener("click",()=>{o.classList.add("is-open"),i.classList.add("no-scroll"),a.classList.add("animate-in")}),e.addEventListener("click",()=>{o.classList.remove("is-open"),i.classList.remove("no-scroll"),a.classList.remove("animate-in")}),r.forEach(c=>{c.addEventListener("click",p=>{const d=c.getAttribute("href");if(!d.startsWith("#"))return;p.preventDefault();const f=d.slice(1),b=document.getElementById(f);b&&(b.scrollIntoView({behavior:"smooth"}),o.classList.remove("is-open"),i.classList.remove("no-scroll"),a.classList.remove("animate-in"))})})})();const x=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{const t=window.innerWidth;let e;t<768?e=200:t<1440?e=300:e=500,window.scrollY>e?x.classList.add("show"):x.classList.remove("show")});x.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-form"),e=document.querySelector(".footer-input");t.addEventListener("submit",o=>{if(o.preventDefault(),e.value.trim()===""){m.warning({title:"Увага",message:"Поле email не може бути порожнім!",position:"topRight",timeout:3e3,backgroundColor:"#ffa000"});return}t.reset()})});new A(".user-feedback-swiper",{modules:[M,j,W],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".user-swiper-button-next",prevEl:".user-swiper-button-prev"},pagination:{el:".user-feedback-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init:N,slideChange:N}});function N(t){const e=document.querySelector(".user-swiper-button-prev"),o=document.querySelector(".user-swiper-button-next");t.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),t.isEnd?(o.disabled=!0,o.classList.add("disabled")):(o.disabled=!1,o.classList.remove("disabled"))}const _="https://books-backend.p.goit.global/books";async function $(){try{return(await I.get(`${_}/category-list`,{})).data}catch(t){m.error({message:t.message,position:"topRight"})}}async function V(t){try{return(await I.get(`${_}/category`,{params:{category:t}})).data}catch(e){m.error({message:e.message,position:"topRight"})}}async function Z(t){try{return(await I.get(`${_}/${t}`)).data}catch(e){m.error({message:e.message,position:"topRight"})}}const n={bookList:document.querySelector(".books__list"),bookCategoryDropdown:document.querySelector(".dropdown-menu"),bookCategory:document.querySelector(".books__options"),booksСount:document.getElementById("books-count"),booksTotal:document.getElementById("books-total"),showMore:document.getElementById("books-more"),openBookModal:document.querySelector(".btn-books"),backdrop:document.querySelector(".backdrop"),loaderEl:document.getElementById("books-loader")},G=t=>t.map(({_id:e,book_image:o,title:i,author:r,price:a})=>`<li class="books__item">
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
          </li>`).join(""),J=t=>{n.bookList.insertAdjacentHTML("beforeend",G(t))},Q=t=>t.map(({list_name:e})=>`
         <li>
                  <a
                    class="dropdown-menu-link option-category"
                    href="#"
                    data-category="${e}"
                    value="${e}"
                    >${e}</a
                  >
                </li>`).join(""),X=async()=>{const e=(await $()).filter(o=>o.list_name.trim()!=="");e.unshift({list_name:"All categories"}),n.bookCategoryDropdown.insertAdjacentHTML("beforeend",Q(e))},ee=t=>t.map(({list_name:e})=>`<li class="books__option-item">
            <a id="childrens-middle-grade" href="#" class="books__option" data-category="${e}">${e}
            </a>
          </li>`).join(""),te=async()=>{const e=(await $()).filter(o=>o.list_name.trim()!=="");e.unshift({list_name:"All categories"}),n.bookCategory.insertAdjacentHTML("beforeend",ee(e))},oe=({book_image:t,title:e,author:o,price:i,description:r,publisher:a})=>{const c=r&&r.trim()!==""?r:a;return`
    <div class="book-modal">
      <div class="book-modal-images">
        <button class="close-btn btn-icon-close" type="button">
          <svg class="icon-close" width="14" height="14">
            <use href="/img/sprite.svg#icon-close-btn"></use>
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
                <use href="/img/sprite.svg#icon-minus"></use>
              </svg>
            </button>
            <input class="form-input-sum" maxlength="2" name="number" type="text" />
            <button class="btn-icon plus" type="button">
              <svg class="icon-price-plus" width="14" height="14">
                <use href="/img/sprite.svg#icon-plus"></use>
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
                <use href="/img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-up"></use>
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
                <use href="/img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-up"></use>
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
                <use href="/img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="/img/sprite.svg#icon-chevron-up"></use>
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
    `};function se(t){n.backdrop.innerHTML="",n.backdrop.insertAdjacentHTML("beforeend",oe(t))}function O(t){t.key==="Escape"&&q()}function ne(t){se(t),n.backdrop.classList.add("is-open-book-modal"),document.body.classList.add("no-scroll"),new K(".accordeon-container",{showMultiple:!0});const e=n.backdrop.querySelector(".form-input-sum"),o=n.backdrop.querySelector(".minus"),i=n.backdrop.querySelector(".plus"),r=n.backdrop.querySelector(".add-to-cart"),a=n.backdrop.querySelector(".form-book-modal"),c=n.backdrop.querySelector(".close-btn");e.value=1;let p=1,d;o.addEventListener("click",()=>{e.value>1&&(e.value=+e.value-1)}),i.addEventListener("click",()=>{e.value=+e.value+1}),r.addEventListener("click",f);function f(s){if(p=e.value.trim(),d=Number(p),!p||isNaN(d)||d<1){m.error({message:"Ведіть корректний формат",position:"topRight"}),e.value=1;return}else m.success({message:`Кількість обраних товарів: ${d}`,position:"topRight"})}a.addEventListener("submit",b);function b(s){if(s.preventDefault(),p=e.value.trim(),d=Number(p),!p||isNaN(d)||d<1){m.error({message:"Ведіть корректний формат",position:"topRight"}),e.value=1,alert("inputSum:"+e);return}else m.success({message:"Дякуємо за покупку",position:"topRight"})}c.addEventListener("click",q),n.backdrop.addEventListener("click",s=>{s.target===n.backdrop&&q()}),document.addEventListener("keydown",O)}function q(){n.backdrop.classList.remove("is-open-book-modal"),document.body.classList.remove("no-scroll"),n.backdrop.innerHTML="",document.removeEventListener("keydown",O)}function H(t,e){n.booksСount.textContent=t,n.booksTotal.textContent=e}function T(){n.loaderEl.classList.remove("is-hidden")}function P(){n.loaderEl.classList.add("is-hidden")}async function re(t){t.preventDefault();const e=t.target.closest(".books__option");if(!e)return;const o=e.dataset.category;await F(o)}async function ie(t){t.preventDefault();const e=t.target.closest(".dropdown-menu-link");if(!e)return;const o=e.dataset.category;n.bookCategoryDropdown.closest(".dropdown").querySelector(".dropdown-label").textContent=o,n.bookCategoryDropdown.closest(".dropdown").classList.remove("open"),await F(o)}async function F(t){n.bookList.innerHTML="",T(),await Promise.resolve();try{if(t==="All categories"){(await U()).length>24?n.showMore.classList.remove("is-hidden"):n.showMore.classList.add("is-hidden");return}const e=await V(t);Array.isArray(e)&&e.length>0?(z(e),D()):(H(0,0),n.showMore.classList.add("is-hidden"))}catch(e){m.error({message:e.message,position:"topRight"})}finally{P()}}async function ae(t){const e=t.target.closest(".btn-books");if(!e)return;const o=e.dataset.id;if(o)try{const i=await Z(o);ne(i)}catch{m.error({message:"Не вдалося завантажити дані книги",position:"topRight"})}}let S=[],w=[],v=0;function z(t){w=t,v=0}function ce(t){v+=t}async function U(){T();try{const e=(await $()).filter(i=>i.list_name.trim()!=="");return S=(await Promise.all(e.map(i=>V(i.list_name)))).flat(),z(S),D(),S}catch(t){console.error("Помилка під час завантаження всіх книг:",t)}finally{P()}}function D(){T();const t=w.slice(v,v+24);ce(t.length),v===t.length&&(n.bookList.innerHTML=""),J(t),H(v,w.length),v<w.length?n.showMore.classList.remove("is-hidden"):n.showMore.classList.add("is-hidden"),P()}U();X();te();n.bookCategory.addEventListener("click",re);n.bookCategoryDropdown.addEventListener("click",ie);n.showMore.addEventListener("click",D);document.body.addEventListener("click",ae);const le=document.querySelector(".dropdown-toggle"),k=document.querySelector(".dropdown"),de=document.querySelectorAll(".dropdown-menu-link"),ue=document.querySelector(".dropdown-label");le.addEventListener("click",t=>{t.stopPropagation(),k.classList.toggle("open")});document.addEventListener("click",t=>{k.contains(t.target)||k.classList.remove("open")});de.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const o=t.dataset.category||t.textContent;ue.textContent=o,k.classList.remove("open")})});new A(".events-swiper",{modules:[M,j],slidesPerView:1,loop:!1,roundLengths:!0,navigation:{nextEl:".events-swiper-button-next",prevEl:".events-swiper-button-prev"},pagination:{el:".events-swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:24},1440:{slidesPerView:3,spaceBetween:24,allowSlideNext:!1,noSwiping:!0}},on:{init:C,slideChange:C,resize:C}});function C(t){const e=document.querySelector(".events-swiper-button-prev"),o=document.querySelector(".events-swiper-button-next");!e||!o||(t.isBeginning?(e.classList.add("swiper-button-disabled"),e.setAttribute("aria-disabled","true")):(e.classList.remove("swiper-button-disabled"),e.setAttribute("aria-disabled","false")),t.isEnd?(o.classList.add("swiper-button-disabled"),o.setAttribute("aria-disabled","true")):(o.classList.remove("swiper-button-disabled"),o.setAttribute("aria-disabled","false")))}
//# sourceMappingURL=index.js.map
