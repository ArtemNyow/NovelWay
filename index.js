import{i as m,S as P,N as R,P as U,K as W,a as q,A as z}from"./assets/vendor-BreCM410.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();window.addEventListener("DOMContentLoaded",()=>{document.body.classList.add("loaded")});function K(){document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".events-list-item-btn").forEach(o=>{o.addEventListener("click",()=>{const u=o.closest(".events-list-item").querySelector(".events-list-item-title").textContent.trim(),g=o.getAttribute("data-id");t(u,g)})})});function t(o,l){const u=document.getElementById("contactModal"),g=document.getElementById("eventTitle"),L=document.getElementById("eventId");g.textContent=o,L.value=l,u.style.display="flex",document.body.style.overflow="hidden"}function e(){document.querySelectorAll(".input-wrapper").forEach(o=>{o.classList.remove("error"),o.querySelectorAll(".error-text-input, .error-text-textarea").forEach(l=>l.classList.remove("visible"))})}function s(o){e();const l=o.closest(".input-wrapper"),u=l.querySelector(".error-text-input, .error-text-textarea");u&&(l.classList.add("error"),u.classList.add("visible"))}function i(o){if(o.required&&!o.value.trim())return s(o),o.setCustomValidity("This field is required"),!1;if(o.type==="email"&&o.value&&!/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(o.value))return s(o),o.setCustomValidity("Please enter a valid email address"),!1;o.setCustomValidity("");const l=o.closest(".input-wrapper");return l.classList.remove("error"),l.querySelectorAll(".error-text-input, .error-text-textarea").forEach(u=>u.classList.remove("visible")),!0}function r(o){const l=o.join("<br/>");m.error({title:"Error",message:l,position:"topRight",timeout:5e3})}function a(){m.success({title:"Success",message:"Registration successful!",position:"topRight",timeout:5e3})}function c(){const o=document.getElementById("contactModal");o.style.display="none",document.body.style.overflow="auto",document.getElementById("contactForm").reset(),e()}const p=document.getElementById("contactModal"),d=document.getElementById("closeBtn"),v=document.getElementById("contactForm"),b=document.querySelectorAll(".input-wrapper input, .input-wrapper textarea");v.setAttribute("novalidate",!0),p.addEventListener("click",o=>{o.target===p&&c()}),document.addEventListener("keydown",o=>{o.key==="Escape"&&c()}),d.addEventListener("click",c),v.addEventListener("submit",o=>{o.preventDefault(),e();let l=!0,u=[],g=null;for(const E of b)if(!i(E)){g||(g=E),l=!1;const B=E.closest(".input-wrapper").querySelector(".error-text-input, .error-text-textarea");B&&B.textContent&&u.push(B.textContent);break}if(!l){r(u),g&&s(g);return}const L={eventId:document.getElementById("eventId").value,eventName:document.getElementById("eventTitle").textContent,name:document.getElementById("name").value,email:document.getElementById("email").value,message:document.getElementById("message").value};console.log("Form submitted:",L),a(),c()}),b.forEach(o=>{o.addEventListener("blur",()=>i(o)),o.addEventListener("input",()=>{o.closest(".input-wrapper").classList.contains("error")&&i(o)})}),window.openModal=t}K();const h=document.querySelector(".swiper-button-prev"),y=document.querySelector(".swiper-button-next");new P(".swiper",{modules:[R],slidesPerView:1,loop:!1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{init:$,slideChange:$}});function $(t){t.isBeginning?(h.disabled=!0,h.classList.add("disabled")):(h.disabled=!1,h.classList.remove("disabled")),t.isEnd?(y.disabled=!0,y.classList.add("disabled")):(y.disabled=!1,y.classList.remove("disabled"))}const n={bookList:document.querySelector(".books__list"),bookCategoryDropdown:document.querySelector(".dropdown-menu"),bookCategory:document.querySelector(".books__options"),booksСount:document.getElementById("books-count"),booksTotal:document.getElementById("books-total"),showMore:document.getElementById("books-more"),openBookModal:document.querySelector(".btn-books"),backdrop:document.querySelector(".backdrop"),loaderEl:document.getElementById("books-loader")};(()=>{const t=document.querySelector(".js-open-menu"),e=document.querySelector(".js-close-menu"),s=document.querySelector(".js-menu"),i=document.body,r=document.querySelectorAll(".js-header-list-link"),a=document.querySelector(".mobile-menu-container");t.addEventListener("click",()=>{s.classList.add("is-open"),i.classList.add("no-scroll"),a.classList.add("animate-in")}),e.addEventListener("click",()=>{s.classList.remove("is-open"),i.classList.remove("no-scroll"),a.classList.remove("animate-in")}),r.forEach(c=>{c.addEventListener("click",p=>{const d=c.getAttribute("href");if(!d.startsWith("#"))return;p.preventDefault();const v=d.slice(1),b=document.getElementById(v);b&&(b.scrollIntoView({behavior:"smooth"}),s.classList.remove("is-open"),i.classList.remove("no-scroll"),a.classList.remove("animate-in"))})})})();const S=document.querySelector(".scroll-up");window.addEventListener("scroll",()=>{const t=window.innerWidth;let e;t<768?e=200:t<1440?e=300:e=500,window.scrollY>e?S.classList.add("show"):S.classList.remove("show")});S.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".footer-form"),e=document.querySelector(".footer-input");t.addEventListener("submit",s=>{if(s.preventDefault(),e.value.trim()===""){m.warning({title:"Увага",message:"Поле email не може бути порожнім!",position:"topRight",timeout:3e3,backgroundColor:"#ffa000"});return}t.reset()})});new P(".user-feedback-swiper",{modules:[R,U,W],slidesPerView:1,spaceBetween:24,loop:!1,navigation:{nextEl:".user-swiper-button-next",prevEl:".user-swiper-button-prev"},pagination:{el:".user-feedback-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:3}},on:{init:D,slideChange:D}});function D(t){const e=document.querySelector(".user-swiper-button-prev"),s=document.querySelector(".user-swiper-button-next");t.isBeginning?(e.disabled=!0,e.classList.add("disabled")):(e.disabled=!1,e.classList.remove("disabled")),t.isEnd?(s.disabled=!0,s.classList.add("disabled")):(s.disabled=!1,s.classList.remove("disabled"))}const M="https://books-backend.p.goit.global/books";async function I(){try{return(await q.get(`${M}/category-list`,{})).data}catch(t){m.error({message:t.message,position:"topRight"})}}async function N(t){try{return(await q.get(`${M}/category`,{params:{category:t}})).data}catch(e){m.error({message:e.message,position:"topRight"})}}async function Y(t){try{return(await q.get(`${M}/${t}`)).data}catch(e){m.error({message:e.message,position:"topRight"})}}const Z=t=>t.map(({_id:e,book_image:s,title:i,author:r,price:a})=>`<li class="books__item">
            <article class="book-card">
              <div class="book-card__thumb">
                <img
                  class="book-card__image"
                  src="${s}"
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
          </li>`).join(""),G=t=>{n.bookList.insertAdjacentHTML("beforeend",Z(t))},J=t=>t.map(({list_name:e})=>`
         <li>
                  <a
                    class="dropdown-menu-link option-category"
                    href="#"
                    data-category="${e}"
                    value="${e}"
                    >${e}</a
                  >
                </li>`).join(""),Q=async()=>{const e=(await I()).filter(s=>s.list_name.trim()!=="");e.unshift({list_name:"Categories"}),n.bookCategoryDropdown.insertAdjacentHTML("beforeend",J(e))},X=t=>t.map(({list_name:e})=>`<li class="books__option-item">
            <a id="childrens-middle-grade" href="#" class="books__option" data-category="${e}">${e}
            </a>
          </li>`).join(""),ee=async()=>{const e=(await I()).filter(s=>s.list_name.trim()!=="");e.unshift({list_name:"All categories"}),n.bookCategory.insertAdjacentHTML("beforeend",X(e))},te=({book_image:t,title:e,author:s,price:i,description:r,publisher:a})=>{const c=r&&r.trim()!==""?r:a;return`
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
        <p class="book-modal-text">${s}</p>
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
                <use href="./img/sprite.svg#icon-chevron-down"></use>
              </svg>
              <svg class="icon-down icon-up-hidden" width="24" height="24">
                <use href="./img/sprite.svg#icon-chevron-up"></use>
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
    `};function oe(t){n.backdrop.innerHTML="",n.backdrop.insertAdjacentHTML("beforeend",te(t))}function j(t){t.key==="Escape"&&x()}function se(t){oe(t),n.backdrop.classList.add("is-open-book-modal"),document.body.classList.add("no-scroll"),new z(".accordeon-container",{showMultiple:!0});const e=n.backdrop.querySelector(".form-input-sum"),s=n.backdrop.querySelector(".minus"),i=n.backdrop.querySelector(".plus"),r=n.backdrop.querySelector(".add-to-cart"),a=n.backdrop.querySelector(".form-book-modal"),c=n.backdrop.querySelector(".close-btn");e.value=1;let p=1,d;s.addEventListener("click",()=>{e.value>1&&(e.value=+e.value-1)}),i.addEventListener("click",()=>{e.value=+e.value+1}),r.addEventListener("click",v);function v(o){if(p=e.value.trim(),d=Number(p),!p||isNaN(d)||d<1){m.error({message:"Ведіть корректний формат",position:"topRight"}),e.value=1;return}else m.success({message:`Кількість обраних товарів: ${d}`,position:"topRight"})}a.addEventListener("submit",b);function b(o){if(o.preventDefault(),p=e.value.trim(),d=Number(p),!p||isNaN(d)||d<1){m.error({message:"Ведіть корректний формат",position:"topRight"}),e.value=1,alert("inputSum:"+e);return}else m.success({message:"Дякуємо за покупку",position:"topRight"})}c.addEventListener("click",x),n.backdrop.addEventListener("click",o=>{o.target===n.backdrop&&x()}),document.addEventListener("keydown",j)}function x(){n.backdrop.classList.remove("is-open-book-modal"),document.body.classList.remove("no-scroll"),n.backdrop.innerHTML="",document.removeEventListener("keydown",j)}function O(t,e){n.booksСount.textContent=t,n.booksTotal.textContent=e}function A(){n.loaderEl.classList.remove("is-hidden")}function _(){n.loaderEl.classList.add("is-hidden")}async function ne(t){t.preventDefault();const e=t.target.closest(".books__option");if(!e)return;const s=e.dataset.category;await V(s)}async function re(t){t.preventDefault();const e=t.target.closest(".dropdown-menu-link");if(!e)return;const s=e.dataset.category;n.bookCategoryDropdown.closest(".dropdown").querySelector(".dropdown-label").textContent=s,n.bookCategoryDropdown.closest(".dropdown").classList.remove("open"),await V(s)}async function V(t){n.bookList.innerHTML="",A(),await Promise.resolve();try{if(t==="Categories"||t==="All categories"){(await F()).length>24?n.showMore.classList.remove("is-hidden"):n.showMore.classList.add("is-hidden");return}const e=await N(t);Array.isArray(e)&&e.length>0?(H(e),T()):(O(0,0),n.showMore.classList.add("is-hidden"))}catch(e){m.error({message:e.message,position:"topRight"})}finally{_()}}async function ie(t){const e=t.target.closest(".btn-books");if(!e)return;const s=e.dataset.id;if(s)try{const i=await Y(s);se(i)}catch{m.error({message:"Не вдалося завантажити дані книги",position:"topRight"})}}let C=[],k=[],f=0;function H(t){k=t,f=0}function ae(t){f+=t}async function F(){A();try{const e=(await I()).filter(i=>i.list_name.trim()!=="");return C=(await Promise.all(e.map(i=>N(i.list_name)))).flat(),H(C),T(),C}catch(t){console.error("Помилка під час завантаження всіх книг:",t)}finally{_()}}function T(){A();const t=k.slice(f,f+24);ae(t.length),f===t.length&&(n.bookList.innerHTML=""),G(t),O(f,k.length),f<k.length?n.showMore.classList.remove("is-hidden"):n.showMore.classList.add("is-hidden"),_()}F();Q();ee();n.bookCategory.addEventListener("click",ne);n.bookCategoryDropdown.addEventListener("click",re);n.showMore.addEventListener("click",T);document.body.addEventListener("click",ie);const ce=document.querySelector(".dropdown-toggle"),w=document.querySelector(".dropdown"),le=document.querySelectorAll(".dropdown-menu-link"),de=document.querySelector(".dropdown-label");ce.addEventListener("click",t=>{t.stopPropagation(),w.classList.toggle("open")});document.addEventListener("click",t=>{w.contains(t.target)||w.classList.remove("open")});le.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const s=t.dataset.category||t.textContent;de.textContent=s,w.classList.remove("open")})});
//# sourceMappingURL=index.js.map
