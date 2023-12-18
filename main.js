const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts'
const ALBUM_API_URL = 'https://jsonplaceholder.typicode.com/albums'
const PHOTO_API_URL = 'https://jsonplaceholder.typicode.com/photos'

const getAPI = async(API_URL) => {
    try{
        let res = await fetch(API_URL)
        let data = await res.json()
        let ul = document.querySelector('ul')
        let innerHtml = ''
        for (let i =0; i < data.length; i++){
            innerHtml += `<li> ${data[i]['title']} </li>`
        }
        ul.innerHTML = innerHtml
        
    }catch(err){
        console.log(err)
    }
}

const buttonClick = (id) => {
    console.log(id)
    if (id === 0){
        api_url = POST_API_URL
        type = 'Posts'
    }else if (id === 1){
        api_url = PHOTO_API_URL
        type = 'Photos'
    }else{
        api_url = ALBUM_API_URL
        type = 'Albums'
    }

    let h1 = document.querySelector('h1')
    h1.innerHTML = `Type: ${type}`

    let buttons = document.querySelectorAll('button')
    for (let i = 0; i < buttons.length; i++ ){
        buttons[i].className = ''
    }
    buttons[id].className = 'active'
    getAPI(api_url)
}

let post_btn = document.querySelector('#post_btn')
let photo_btn = document.querySelector('#photo_btn')
let album_btn = document.querySelector('#album_btn')

post_btn.addEventListener("click", () => {
    buttonClick(0)
})

photo_btn.addEventListener("click", () => {
    buttonClick(1)
})

album_btn.addEventListener("click", () => {
    buttonClick(2)
})

getAPI(POST_API_URL)