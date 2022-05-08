// import API from './api.js'

// const api = new API()

// const $CharacterContainer = document.querySelector('#character-container');
// // const charaterTemplate = 
// // `
// // <article class="character">
// //         <div class="character-grid">
// //             <h2>Rick Sanchez</h2>
// //             <img src="" alt="">
// //         </div>
// //     </article>
// // `
// class Charater{
//     constructor({name, image}) {
//         this.name = name
//         this.image = image
//         this.reder();
//     }
//     build(){
//         return`
//         <article class="character">
//         <div class="character-grid">
//             <h2>${this.name }</h2>
//             <img src="${this.image}" alt="">
//         </div>
//     </article>
//     `
//     }
//     reder() {
//         $CharacterContainer.innerHTML = this.build();
//     }
// }
 
// // const rick = new Charater({
// //     name: 'Edmer',
// //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLiOr1cDRQBjdWI2Udjho69d6MiKzEinWMw&usqp=CAU'
// // })

// async function initAPP(initCharacterId) {
//     const characterData = await api.getCharacter(initCharacterId);
//     console.log(characterData);
    
// const rick = new Charater(characterData)
    
// }
// initAPP(1);
// // rick.reder();
// // console.log(api.getCharacter(1));