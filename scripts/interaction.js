const iconLike = document.querySelectorAll(".icon-like");

iconLike.forEach((icon) => {
    icon.onclick = () => {
        icon.classList.toggle("filled");

        if(icon.className === "filled"){
        return icon.classList.remove("filled")
    }
    }
})

const mode = document.getElementById("icon-dark-light");

mode.addEventListener('click', () => {
    const backgroundLight = document.getElementsByTagName("body")[0];
    const siteTitleLight = document.getElementsByClassName("site-Title")[0];
    const titleRedLight = document.getElementsByClassName("text-red")[0];
    const searchBoxLight = document.getElementsByClassName("search-Box")[0];
    const iconSearch = document.getElementById("icon-Search")
    const dateLikeLight = document.querySelectorAll(".date-like");
    const articleTitle = document.querySelectorAll(".article-title");
    const articleContent = document.querySelectorAll(".article-content");
    const articleTag = document.querySelectorAll("article");

    if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        mode.classList.add('light')

        backgroundLight.classList.add('light');
        siteTitleLight.classList.add('light');
        titleRedLight.classList.add('light');
        searchBoxLight.classList.add('light');
        iconSearch.classList.add('light')

        dateLikeLight.forEach((dateLike) => {
            dateLike.classList.add('light');
        })

        iconLike.forEach((LikedLight) => {
            LikedLight.classList.add('light');
        })

        articleTitle.forEach((articleTitleClass) => {
            articleTitleClass.classList.add('light');
        })

        articleContent.forEach((articleContentClass) => {
            articleContentClass.classList.add('light');
        })

        articleTag.forEach((articleTagName) => {
            articleTagName.classList.add('light');
        })

        return;
    }

    mode.classList.add('fa-sun')
    mode.classList.remove('fa-moon');
    mode.classList.remove('light')

    backgroundLight.classList.remove('light')
    siteTitleLight.classList.remove('light')
    titleRedLight.classList.remove('light')
    searchBoxLight.classList.remove('light');
    iconSearch.classList.remove('light')

    dateLikeLight.forEach((dateLike) => {
        dateLike.classList.remove('light');
    })

    iconLike.forEach((LikedLight) => {
        LikedLight.classList.remove('light');
    })

    articleTitle.forEach((articleTitleClass) => {
        articleTitleClass.classList.remove('light');
    })

    articleContent.forEach((articleContentClass) => {
        articleContentClass.classList.remove('light');
    })

    articleTag.forEach((articleTagName) => {
        articleTagName.classList.remove('light');
    })

});
