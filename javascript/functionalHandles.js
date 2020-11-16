import { 
    filterByAllType,
    filterByUserType, 
    openUserDetailsModal, 
    search, 
    sortByFollowers, 
    sortByRegisterDate, 
    sortByRepositories,
    infinityScroll } 
    from './functionalities.js';

export function searchHandle() {
    let searchButton = document.querySelector('#searchButton');

    searchButton.addEventListener("click", search);
};

export function filterByUserTypeHandle() {
    let userFilter = document.querySelector('#user');
    userFilter.addEventListener('click', filterByUserType)
};

export function filterByOrganizationTypeHandle() {
    let organizationFilter = document.querySelector('#organization');
    organizationFilter.addEventListener('click', filterByUserType)
};

export function filterByAllTypeHandle() {
    let allFilter = document.querySelector('#all');
    allFilter.addEventListener('click', filterByAllType)
};

export function sortByRegisterDateHandle() {
    let dateOption = document.querySelector('#registerDate');
    dateOption.addEventListener('click', sortByRegisterDate);
}

export function sortByFollowersHandle() {
    let followersOption = document.querySelector('#followersNumber');
    followersOption.addEventListener('click', sortByFollowers);
}

export function sortByRepositoriesHandle() {
    let reposOption = document.querySelector('#repositoriesNumber');
    reposOption.addEventListener('click', sortByRepositories);
}

export function infinityScrollHandle() {
    window.addEventListener('scroll', infinityScroll);
}

export function openUserDetailsModalHandle() {
    let userDetails = document.querySelectorAll('.userCard');

    userDetails.forEach(user => {
        user.addEventListener('click', openUserDetailsModal); 
    });
}