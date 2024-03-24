export const searchClassLiActive = (): number | undefined => {
    const headerMenu = document.querySelector('.navbar__menu') as HTMLDivElement | null;
    let number: number | undefined;
    
    if (headerMenu) {
        const listItems = headerMenu.querySelectorAll('li');
        listItems.forEach((item, index) => {
            if (item.classList.contains('navbar__menu-active')) {
                number = index;
            }
        });
    }

    return number;
};