let prevtButton = document.querySelector('.prev');
let nextButton = document.querySelector('.next');
let userImage = document.querySelector('.profile_img');
let userDescription = document.querySelector('.profile_info_description');
let userName = document.querySelector('.profile_name_main');
let userTitle =  document.querySelector('.profile_name_title');
let userProfileName = document.querySelector('.profile_name');
let index = 0;
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
    },
    {
        name: "Leah Chatman",
        title: "Mom & Backend Developer",
        description: "“ Changing my job from teacher to Backend developer has made a huge impact in my life. Now I work remotely for Microsoft and can have more time with them and can help them in anything. ”",
        image: "./images/image-teacher.jpeg"
    },
    {
        name: "Joshua Wilson",
        title: "Teacher & Developer",
        description: "“ If you really want to learn to code and create great things, you have to take this course and commit yourself to finish it and I you will see the results along the way as you finish each topic. ”",
        image: "./images/image-programmer.jpeg"
    }


]
document.addEventListener('DOMContentLoaded', () => {
    userImage.src = data[0].image;
    userName.innerHTML = data[0].name;
    userTitle.innerHTML = data[0].title;
    userDescription.innerHTML = data[0].description
})
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 37){
        changeUserInfo()
    }
    else if(e.keyCode === 39){
        changeUserInfo()
    }
})
function displayData(index){
    setTimeout(() => {
        userImage.src = data[index].image;
        userName.innerHTML = data[index].name;
        userTitle.innerHTML = data[index].title;
        userDescription.innerHTML = data[index].description;
        userImage.classList.remove('hide');
        userDescription.classList.remove('hide');
        userProfileName.classList.remove('hide')
    }, 500)
}
function changeUserInfo(type){
    userImage.classList.add('hide');
    userDescription.classList.add('hide');
    userProfileName.classList.add('hide');
    //Logic to change the slide depending on asc or desc mode.
    if(type == 'desc'){
        if(index === 0){
            index = data.length-1;
        }else{
            index -= 1;
        }
    }else{
        // ascend mode
        if(index < data.length -1){
            index++;
        }else{
         index = 0;
        }
    }
    displayData(index)
}
prevtButton.addEventListener('click', () => {
    changeUserInfo('desc')
    
})
nextButton.addEventListener('click', () => {
    changeUserInfo('asc')
})