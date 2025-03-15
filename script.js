document.addEventListener("DOMContentLoaded", function() {
    const profileImg = document.querySelector(".profile-img");
    const nameText = document.querySelector(".name");
    const specializationText = document.querySelector(".specialization");

    profileImg.style.opacity = "0";
    nameText.style.opacity = "0";
    specializationText.style.opacity = "0";

    setTimeout(() => {
        profileImg.style.transition = "opacity 1s ease-in-out";
        profileImg.style.opacity = "1";

        nameText.style.transition = "opacity 1.5s ease-in-out";
        nameText.style.opacity = "1";

        specializationText.style.transition = "opacity 2s ease-in-out";
        specializationText.style.opacity = "1";
    }, 300);
});
