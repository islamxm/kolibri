document.addEventListener('DOMContentLoaded', () => {
    
    function accordeonFunc(dropItemsQuery, droppedClass, dropListQuery, targetItem) {
        const dropItems = document.querySelectorAll(dropItemsQuery);
        dropItems.forEach(i => {
            i.addEventListener('click', (e)=> {
                let target = e.currentTarget;
                let targetList = target.querySelector(dropListQuery);
                let targetHead = target.querySelector(`.${targetItem}`);


                if(targetHead) {
                    i.classList.toggle(droppedClass);
                }

                if(i.classList.contains(droppedClass)) {
                    targetList.style.height = `${targetList.scrollHeight}px`;
                }
                if(!i.classList.contains(droppedClass)) {
                    targetList.style.height = '0px';
                }
            });
        });
    }


    /* Функционал для аккордеона главного меню(сайдбара) */
    accordeonFunc('.asideNavItem', 'asideNavItemDropped', '.asideNavItemList', 'asideNavItemHead');
});





