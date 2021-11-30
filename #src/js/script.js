document.addEventListener('DOMContentLoaded', () => {


    const asideBtn = document.querySelector('.asideBtn');
    const aside = document.querySelector('.aside');
    const asideNavList = document.querySelectorAll('.asideNavItemList');


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
                    
                    if(dropItems[0].classList.contains('asideNavItem')) {
                        aside.classList.remove('asideActive');
                    }

                }
                if(!i.classList.contains(droppedClass)) {
                    targetList.style.height = '0px';
                }
            });
        });
    }

    


    // function asideShow() {
    //     // aside.style.backgroundColor = '#fff';
    // }

    // function asideHide() {
    //     // aside.style.backgroundColor = 'green';
    // }

    asideBtn.addEventListener('click', () => {
        aside.classList.toggle('asideActive');
        // if (aside.classList.contains('asideActive')) {
        //     asideShow();
        //     // asideNavList.forEach(i => {
        //     //     i.style.height = '0px';
        //     // });
        // }

        // if(!aside.classList.contains('asideActive')) {
        //     asideHide();
            
            
        // }
    });

    /* Функционал для аккордеона главного меню(сайдбара) */
    accordeonFunc('.asideNavItem', 'asideNavItemDropped', '.asideNavItemList', 'asideNavItemHead');
    accordeonFunc('.popupBlockDateDrop', 'popupBlockDateDropActive', '.popupBlockDateList', 'popupBlockDateHead');
    accordeonFunc('.dropdownDefault', 'dropdownDefaultActive', '.dropdownDefaultList', 'dropdownDefaultHead');
    // accordeonFunc('.playersBlacklistTopInput', 'playersBlacklistTopInputActive', '.playersBlacklistTopInputList', 'playersBlacklistTopInputHead');
});





