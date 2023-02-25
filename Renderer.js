class Renderer {
    constructor() {}

    renderUserInfo = function (newRandomPerson) {
        const source = $("#user-info-template").html()
        const template = Handlebars.compile(source)
        const addPersonInfo = template({ name: newRandomPerson.info.personalInfo.name, userPhoto: newRandomPerson.info.personalInfo.picture })
        $(".user-container").append(addPersonInfo)
    }
    renderUserQuote(newRandomPerson) {
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const quoteInfo = template({quote: newRandomPerson.info.quote})
        $(".quote-container").append(quoteInfo)
    }
    renderUserPokemon(newRandomPerson) {
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const pokemonInfo = template({name: newRandomPerson.info.pokemon.name, pokemonPhoto: newRandomPerson.info.pokemon.picture})
        $(".pokemon-container").append(pokemonInfo) 
    }
    renderAboutMe(newRandomPerson) {
        const source = $("#about-template").html()
        const template = Handlebars.compile(source)
        const aboutMe = template({about: newRandomPerson.info.about})
        $(".meat-container").append(aboutMe) 
    }
    renderUserFriends(newRandomPerson) {
        const allFriends = newRandomPerson.info.friends
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const friends = template({allFriends})
        $(".friends-container").append(friends)
    }
    renderAll(newRandomPerson) {
        this.renderUserInfo(newRandomPerson)
        this.renderUserQuote(newRandomPerson)
        this.renderUserPokemon(newRandomPerson)
        this.renderAboutMe(newRandomPerson)
        this.renderUserFriends(newRandomPerson)
    }
    renderSavedUsers() {
        const source = $("#pepole-select-template").html()
        const template = Handlebars.compile(source)
        const users = template({userSavedData})
        $("#pepole-select").append(users)
    }
}

class ClearPage {
    constructor() {}
    emptyPageInformation = function () {
        $(".user-container").empty()
        $(".quote-container").empty()
        $(".pokemon-container").empty()
        $(".meat-container").empty()
        $(".friends-container").empty()
        
    }
    emptySelectPepole() {
        $("#pepole-select").empty()
    }
}