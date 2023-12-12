const ShowMenuFeatures = (toogleId) => {
    const toggle = document.getElementById(toogleId),
        show_menu_features = document.querySelector(".dropdown-features")

    toggle.addEventListener('click', () => {
        show_menu_features.classList.toggle('show-menu')
    })
}

const ShowMenuCompany = (toogleId) => {
    const toggle = document.getElementById(toogleId),
        show_menu_company = document.querySelector(".dropdown-company")

    toggle.addEventListener('click', () => {
        show_menu_company.classList.toggle('show-menu')
    })
}

ShowMenuFeatures('ClickFeatures')
ShowMenuCompany('ClickCompany')