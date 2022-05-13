//============== Accrodion =============

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
        item.classList.toggle("accordion-open");

        let description = item.querySelector(".accordion-description");
        if(item.classList.contains("accordion-open")){
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-angle-down", "fa-angle-up");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
        }
        // console.log(description);
        removeAccordionOpen(index);
    })
})

function removeAccordionOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("accordion-open");

            let des = item2.querySelector(".accordion-description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-angle-up", "fa-angle-down");
        }
    });
}


//=======xx===== Accrodion ======xx=====
