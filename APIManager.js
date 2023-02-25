class randomUserData {
    constructor() {
        this.info = { friends: [] }

    }
    getInfo() {
        return $.get(`https://randomuser.me/api/`)
            .then(userInfo => {
                const fullName = (`${userInfo.results[0].name.title} ${userInfo.results[0].name.first} ${userInfo.results[0].name.last}`)
                const randomPersonPicture = userInfo.results[0].picture.large
                this.info.personalInfo = { name: fullName, picture: randomPersonPicture }
            })
    }
    getfriends() {
        for (let friend = 0; friend < 6; friend++) {
            $.get(`https://randomuser.me/api/`)
                .then(userInfo => {
                    let fullFriendName = (`${userInfo.results[0].name.title} ${userInfo.results[0].name.first} ${userInfo.results[0].name.last}`)
                    this.info.friends.push(fullFriendName)
                })
        }
        return
    }
    getQuote() {
        return $.get(`https://api.kanye.rest/`)
                .then(quote => {
                this.info.quote = quote.quote
            })
    }
    getPokemon() {
        const randomNumber = Math.floor(Math.random() * 949)
        return $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
                .then(pokemonInfo => {
                    const pokemonName = pokemonInfo.name
                    const pokemonPicture = pokemonInfo.sprites.front_shiny
                    this.info.pokemon = { name: pokemonName, picture: pokemonPicture }
            })
    }
    getAboutMe() {
        return $.get(`https://baconipsum.com/api/?type=meat-and-filler`)
                .then(aboutMe => {
                    this.info.about = aboutMe[0]
            })
    }
    getAllUserData() {
        const getInfoPromise = this.getInfo()
        const getfriendsPromise = this.getfriends()
        const getquotePromise = this.getQuote()
        const getpokemonPromise = this.getPokemon()
        const getaboutmePromise = this.getAboutMe()

        return Promise.all([getInfoPromise, getpokemonPromise, getaboutmePromise, getfriendsPromise, getquotePromise])
    }
}
