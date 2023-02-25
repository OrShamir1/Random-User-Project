const currentDataDisplayed = [];
const userSavedData = []
const renderer = new Renderer()
const emptyer = new ClearPage()
$("#load_user").click(function() {
    currentDataDisplayed.shift()
    emptyer.emptyPageInformation()
    let newPerson = new randomUserData()
    currentDataDisplayed[0] = newPerson
    newPerson.getAllUserData()
    .then(() => {
        renderer.renderAll(newPerson)
    })
})
$("#save_data").click(function () {
    let name = currentDataDisplayed[0].info.personalInfo.name
    if(userSavedData.find(names => names.id == name)){
        return
    }
    emptyer.emptySelectPepole()
    userSavedData.push({id: name, data: currentDataDisplayed[0]})
    renderer.renderSavedUsers(userSavedData)
})

$("#display-user").click(function () {
    const personToDisplay = $("#pepole-select").val()
    for(let person of userSavedData) {
        if(personToDisplay == person.id) {
            emptyer.emptyPageInformation()
            renderer.renderAll(person.data)
        }
    }
})


