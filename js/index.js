const gitForm = document.getElementById("github-form")
const gitSearch= document.getElementsByClassName("search")
const gitSubmit = document.getElementsByName("submit")
const gitContainer = document.getElementById("github-container")
const gitUserList = document.getElementById("user-list")
const gitReposList = document.getElementById("repos-list")
const gitAPI = "https://api.github.com/search/users?q="

//search GitHub via the submit form, that takes the value of the input 


gitForm.addEventListener("submit", (e) => {
    e.preventDefault()

    fetch(`https://api.github.com/search/users?q=${search.value}`)
    .then(response => response.json())
    .then(response => {
         console.log(response.items)
       for (i = 0; i <response.items.length; i++) {
        
        let user = ''
        let avatar = ''
        let link = ''

        user = response.items[i].login
        avatar = response.items[i].avatar_url
        link = response.items[i].url
        
        const gitCard = document.createElement('div')
        gitCard.className = "user"

        const gitUser = document.createElement('h2')
        gitUser.innerText = user

        const gitAvatar = document.createElement('img')
        gitAvatar.src = avatar
        gitAvatar.alt = 'user image'

        const gitLink = document.createElement('button')
        gitLink.innerText = link

        gitCard.append(gitUser, gitAvatar, gitLink)
        gitUserList.appendChild(gitCard)
        gitForm.reset()

    }
})
})