let prevtButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let userImage = document.querySelector('.profile_img');
let userDescription = document.querySelector('.profile_info_description');
let userName = document.querySelector('.profile_name_main');
let userTitle =  document.querySelector('.profile_name_title');
let slideContainer = document.querySelector('.profile-img-container');
let userProfileInfo = document.querySelector('.profile_info');
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
function changeUserInfo(sliderInfo, setSlider){
    //Only execute animation if the data attribute is different
    if(slideContainer.dataset.slide !== sliderInfo){
        slideContainer.dataset.slide = setSlider;
        userImage.classList.add('hide');
        userProfileInfo.classList.add('hide');
        setTimeout(() => {
        userImage.src = data[setSlider].image;
        userName.innerHTML = data[setSlider].name;
        userTitle.innerHTML = data[setSlider].title;
        userDescription.innerHTML = data[setSlider].description;
        userImage.classList.remove('hide');
        userProfileInfo.classList.remove('hide');
    }, 500)
    }
}
prevtButton.addEventListener('click', () => {
    changeUserInfo("0", "0")
})
nextButton.addEventListener('click', () => {
    changeUserInfo("1", "1")
})