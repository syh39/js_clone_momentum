const title = document.querySelector('#title'); // 이렇게 하면 조건에 해당되는 첫번째만 가져온다
// const title = document.querySelectorAll('.hello'); // 이렇게 하면 조건에 해당되는 모든 걸 가져온다
 
// console.log(title)
// console.dir(title)


let handleTitleClick = () => {
    const activeClass = 'active';
    title.classList.toggle(activeClass);
};


// const handleTitleClick = () => {
//     const activeClass = 'active';
//     if(title.classList.contains(activeClass)) {
//         // title.removeAttribute('class');
//         // title.className = '';
//         title.classList.remove(activeClass);
//     } else {
//         title.classList.add(activeClass);
//     }
// }

// const handleTitleClick = () => {
//     const currentColor = title.style.color;
//     if(currentColor === 'blue') {
//         newColor = 'tomato';
//     } else {
//         newColor = 'blue';
//     }
//     title.style.color = newColor;
// }

// const handleMouseEnter = () => {
//     console.log('Mouse Entered!');
//     title.style.color = 'blue';
// }

// const handleMouseLeave = () => {
//     console.log('Mouse Leaved!');
//     title.style.color = 'red';
// }

// const handleWindowResize = () => {
//     document.body.style.backgroundColor = 'tomato';
// }

// const handleWindowCopy = () => {
//     alert('copied!');
// }

title.addEventListener('click', handleTitleClick);
// title.addEventListener('mouseenter', handleMouseEnter);
// title.addEventListener('mouseleave', handleMouseLeave);

// window.addEventListener('resize', handleWindowResize);
// window.addEventListener('copy', handleWindowCopy);

// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

// console.log(title);
// title.innerHTML = 'asdgsadgs111adg';
// title.style.color = 'blue';
// const titles = document.getElementsByClassName('title');

// title = document.getElementById('title');
// title.innerText='Got you!';
// console.dir(title)

// const player ={
//     name: 'nico',
//     sayHello: function(pName) {
//         console.log('helo! ' + pName + ', nice to meet you');
//     }
// };

// const potato = (p) => {
//     console.log(p - 5);
// }

// potato(1,2,3,4,5,6,7,8);

// console.log(player.name);
// player.sayHello('yohan');


