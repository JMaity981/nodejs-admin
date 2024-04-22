const addBtn=document.querySelector("#addBtn");addBtn.addEventListener("click",(e=>{new_link()}));const customSoftSwitch=document.querySelector("#customSoftSwitch");function inputSpinComponents(){function e(e){var t=e.closest(".item"),o=(e.closest(".item-list"),parseFloat(t.querySelector(".item-price")?.value||0)*parseFloat(e.value));Array.from(t.getElementsByClassName("item-line-price")).forEach((function(e){e.value=o.toFixed(2),r()}))}function t(e){var t=e.closest(".item"),o=t.querySelector(".remove-button");o&&o.addEventListener("click",(function(){t.remove(),r()}))}function r(){var e=document.querySelectorAll(".item-list"),t=0;Array.from(e).forEach((function(e){Array.from(e.getElementsByClassName("item")).forEach((function(e){Array.from(e.getElementsByClassName("item-line-price")).forEach((function(e){var r=parseFloat(e.value);isNaN(r)?console.log("Invalid price value:",e.value):t+=r}))}))}));var r=document.querySelector(".item-list"),o="$",d=document.querySelector(".item-text")?.value||0,n=document.querySelector(".item-discount").value,a=d>0?t*d/100:t,l=n>0?t*n/100:t,i=t>0?85:0,s=t+a+i-l;const c=r.parentElement.querySelector("#totalAmount .cart-subtotal");c&&(c.value=o+t.toFixed(2));const u=r.parentElement.querySelector("#totalAmount .cart-tax");u&&(u.value=o+a.toFixed(2));const b=r.parentElement.querySelector("#totalAmount .cart-shipping");b&&(b.value=o+i.toFixed(2));const m=r.parentElement.querySelector("#totalAmount .cart-total");m&&(m.value=o+s.toFixed(2));const k=r.parentElement.querySelector(".item-list .cart-discount");k&&(k.value="-$"+l.toFixed(2));const p=r.parentElement.querySelector("#totalAmount .cart-discount");p&&(p.value="-$"+l.toFixed(2));const g=document.querySelector("#totalPayment");g&&(g.value=o+s.toFixed(2))}!function(){const r=document.querySelectorAll("button.btn-plus"),o=document.querySelectorAll("button.btn-minus");r.length&&r.forEach((r=>{r.addEventListener("click",(r=>{const o=getDivFromTheElement(r.target);let d=Number(o.value);d<Number(o.getAttribute("max"))&&(o.value=d+1,e(o),t(o))}))})),o.length&&o.forEach((r=>{r.addEventListener("click",(r=>{const o=getDivFromTheElement(r.target);let d=Number(o.value);d>Number(o.getAttribute("min"))&&(o.value=d-1,e(o),t(o))}))}))}()}function getDivFromTheElement(e){let t=e.parentNode.querySelector("input.item-quantity");return t||getDivFromTheElement(e.parentNode)}customSoftSwitch.addEventListener("change",(e=>{billingFunction()})),inputSpinComponents();var count=2;function new_link(){var e=' <tbody class="before:block before:h-3 item-list">\n            <tr class="item">\n                <td class="border border-slate-200 dark:border-zink-500">\n                    <input type="text" id="itemName'+count+'" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Item Name" required>\n                </td>\n                <td class="w-40 border border-slate-200 dark:border-zink-500">\n                    <div class="flex justify-center text-center input-step">\n                        <button type="button" class="border w-9 h-9 leading-[15px] btn-minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="minus" class="inline-block w-4 h-4"></i></button>\n                        <input type="number" class="w-12 text-center ltr:pl-2 rtl:pr-2 h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500 item-quantity" value="0" min="0" max="100" readonly="">\n                        <button type="button" class="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 btn-plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><i data-lucide="plus" class="inline-block w-4 h-4"></i></button>\n                    </div>\n                </td>\n                <td class="w-40 border border-slate-200 dark:border-zink-500">\n                    <input type="number" id="itemName'+count+'" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-price" placeholder="$00.00" required>\n                </td>\n                <td class="w-40 border border-slate-200 dark:border-zink-500">\n                    <input type="text" id="itemName'+count+'" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="0%" required>\n                </td>\n                <td class="w-40 border border-slate-200 dark:border-zink-500">\n                    <input type="text" id="itemName'+count+'" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="0%" required>\n                </td>\n                <td class="border border-slate-200 dark:border-zink-500" rowspan="2">\n                    <div class="mb-1">\n                        <input type="text" id="ItemTotal" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-line-price" placeholder="$00.00" readonly>\n                    </div>\n                    <input type="text" id="itemDiscountsInput" class="px-3.5 pb-2.5 pt-0 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount" placeholder="-$00.00" readonly>\n                </td>\n            </tr>\n            <tr>\n                <td class="border border-slate-200 dark:border-zink-500">\n                    <input type="text" id="itemdescription'+count+'" class="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Description (Optional)" required>\n                </td>\n                <td class="border border-slate-200 dark:border-zink-500 px-3.5 py-1.5 text-center">\n                    <button type="button" class="px-2 py-1.5 text-xs text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 product-removal"><i data-lucide="trash-2" class="inline-block w-3 h-3 mr-1 align-middle"></i> <span class="align-middle">Delete</span></button>\n                </td>\n                <td colspan="3" class="border border-slate-200 dark:border-zink-500"></td>\n            </tr>\n        </tbody>';document.getElementById("invoiceTable").insertAdjacentHTML("beforeBegin",e),count++;var t=document.querySelectorAll("[data-trigger]");Array.from(t).forEach((function(e){new Choices(e,{placeholderValue:"This is a placeholder set in the config",searchPlaceholderValue:"This is a search placeholder"})})),lucide.createIcons(),inputSpinComponents(),remove()}function remove(){var e=document.querySelectorAll(".item-list .product-removal");Array.from(e).forEach((function(e){e.addEventListener("click",(function(e){removeItem(e)}))}))}function removeItem(e){e.target.closest("tbody").remove()}function billingFunction(){document.getElementById("customSoftSwitch").checked?(document.getElementById("fullNameBillingInput").value=document.getElementById("fullNameShippingInput").value,document.getElementById("phoneNoBillingInput").value=document.getElementById("phoneNoShippingInput").value,document.getElementById("alternativeNoBillingInput").value=document.getElementById("alternativeNoShippingInput").value,document.getElementById("taxBillingInput").value=document.getElementById("taxShippingInput").value,document.getElementById("addressBillingInput").value=document.getElementById("addressShippingInput").value):(document.getElementById("fullNameBillingInput").value="",document.getElementById("phoneNoBillingInput").value="",document.getElementById("alternativeNoBillingInput").value="",document.getElementById("taxBillingInput").value="")}remove(),document.querySelector(".changeAddress").addEventListener("change",(e=>{billingFunction()}));