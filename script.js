let scrollTopBtn = document.getElementById("scrollTopBtn");
 window.onscroll = function() {
    scrollfunction();
 };
 function scrollfunction(){
    if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    }else{
        scrollTopBtn.style.display = "none";
    }
 }
 scrollTopBtn.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
 });
 };
//  Smotth scrolling with navigation link 
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click' , function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});   
    
function togglenavmenu() {
    const navmenu =
    document.getElementById('navmenu');
    navmenu.classList.toggle('active')
}
const roles =document.querySelector('.Change');
console.log('got the change button');
const changeButton1 = document.querySelector('.Btn1');
console.log('button 1 mil gya');
const changeButton2 = document.querySelector('Btn2');
console.log('button 2 mil gya');
const role=[
    'Web Developer',
    'Graphic Designer',
    'Editor',
    'Gamer'
 ]
 let currentIndex =0;
 function updaterole(){
    roles.style.opacity =0;
    setTimeout(() =>{roles.innerHTML=`${role[currentIndex]}`
    currentIndex = (currentIndex+1)%role.length;
    roles.style.opacity =1;
 },1000
)
 }
 setInterval(updaterole,2000);

//  CARAOUSAL EFFECT 
const imageBox = document.querySelector(".Image-Container");
console.log('image container mil gya');
const Photo =[
    "project.png",
    "project2.png",
    "project3.png",
]
let curentIndex2 =0;
function updateImage() {
    setTimeout(()=>{
        imageBox.innerHTML= `<img  style="height:250px,width:250px, border: 2px solid black,border-radius:15px, margin-left:15px, margin-right:15px"src="${Photo[curentIndex2]}" alt="loading">`;
        curentIndex2 =(curentIndex2+1)%Photo.length;
    },1000)
}
changeButton1.addEventListener('click',()=>{
    curentIndex2 =(curentIndex2+1)%Photo.length;
    console.log('button is working')
})
setInterval(updateImage,2000);
