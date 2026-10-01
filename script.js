const modal=document.getElementById("ticketModal");
const modalTitle=document.getElementById("modalTitle");
const closeModal=()=>modal.classList.remove("open");

document.querySelectorAll(".buy-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    modalTitle.textContent=btn.dataset.ticket.toUpperCase();
    modal.classList.add("open");
  });
});
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.getElementById("confirmBtn").addEventListener("click",()=>{
  const name=document.querySelector('.modal-box input[type="text"]').value.trim();
  const email=document.querySelector('.modal-box input[type="email"]').value.trim();
  if(!name||!email){alert("Please enter your name and email.");return;}
  alert(`Demo booking confirmed for ${name}! No real payment was processed.`);
  closeModal();
});

const menuBtn=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");
menuBtn.addEventListener("click",()=>{
  const visible=nav.style.display==="flex";
  nav.style.display=visible?"":"flex";
  if(!visible){
    nav.style.position="absolute";nav.style.top="68px";nav.style.left="0";nav.style.right="0";
    nav.style.flexDirection="column";nav.style.padding="20px 6%";
    nav.style.background="rgba(2,7,20,.96)";
    nav.style.borderBottom="1px solid rgba(92,216,255,.15)";
  }
});
