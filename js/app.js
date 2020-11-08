let prevtButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let userImage = document.querySelector('.profile_img');
let userDescription = document.querySelector('.profile_info_description');
let userName = document.querySelector('.profile_name_main');
let userTitle =  document.querySelector('.profile_name_title');
let slideContainer = document.querySelector('.profile-img-container');
let slide = parseInt(slideContainer.dataset.slide);
let data = [
    {
        name: "Tanya Sinclair",
        title: "UX Engineer",
        description: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        image: "./images/image-tanya.jpg"
    },
    {
        name: "John Tarkpor",
        title: "Junior Front-end Developer",
        description: "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I noew feel so confident about starting up as a professional developer. ”",
        image: "./images/image-john.jpg"
    }
]
document.addEventListener('DOMContentLoaded', () => {
    userImage.src = data[slide].image;
    userName.innerHTML = data[slide].name;
    userTitle.innerHTML = data[slide].title;
    userDescription.innerHTML = data[slide].description
})

prevtButton.addEventListener('click', () => {
    slideContainer.dataset.slide = "0";
    userImage.src = data[0].image;
    userName.innerHTML = data[0].name;
    userTitle.innerHTML = data[0].title;
    userDescription.innerHTML = data[0].description
})
nextButton.addEventListener('click', () => {
    slideContainer.dataset.slide = "1";
    userImage.src = data[1].image;
    userTitle.innerHTML = data[1].title;
    userName.innerHTML = data[1].name;
    userDescription.innerHTML = data[1].description
  
})