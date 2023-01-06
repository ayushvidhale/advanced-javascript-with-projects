let myLeads = `["www.braveokays.com"]`
myLeads = JSON.parse(myLeads)

// localStorage.setItem("myLeads", "Smith");

const inputEl  = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")




inputBtn.addEventListener("click", function(){
    // console.log("button clicked from addEventListener")
    // let currentText = inputEl.innerText


    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
    renderLead()
})


function renderLead(){
    let listItems = ""
    for(let i = 0; i< myLeads.length; i++){
        listItems += "<li> <a target='_blank' href=" + myLeads[i] + "'>"+ myLeads[i] +"</a> </li>"
        // console.log(myLeads[i])
    
        // const li  = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}
