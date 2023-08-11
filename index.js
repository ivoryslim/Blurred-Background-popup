const containerEl = document.querySelector(".container")

const btnEl = document.querySelector(".btn")

const popoupcontainerEl = document.querySelector(".popup-container")

const closeIconEl = document.querySelector(".close-icon")

btnEl.addEventListener("click", ()=>{
    containerEl.classList.add("active");
    popoupcontainerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", ()=>{
    containerEl.classList.remove("active");
    popoupcontainerEl.classList.add("active");  
})