document.addEventListener('DOMContentLoaded', () => {

    const aside = document.querySelector('.aside');


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

                if(i.classList.contains(droppedClass) && targetList) {
                    targetList.style.height = `${targetList.scrollHeight}px`;
                    
                    if(dropItems[0].classList.contains('asideNavItem')) {
                        aside.classList.remove('asideActive');
                    }

                }
                if(!i.classList.contains(droppedClass) && targetList) {
                    targetList.style.height = '0px';
                }
            });
        });
    }

    function asideToggler(asideBtnQuery) {
        let asideBtn = document.querySelector(asideBtnQuery)
        asideBtn.addEventListener('click', () => {
            aside.classList.toggle('asideActive');
        });
    }


    /* Функционал для показа/скрытия сайдбара */
    asideToggler('.asideBtn');


    /* Функционал для аккордеона главного меню(сайдбара) */
    accordeonFunc('.asideNavItem', 'asideNavItemDropped', '.asideNavItemList', 'asideNavItemHead');
    accordeonFunc('.popupBlockDateDrop', 'popupBlockDateDropActive', '.popupBlockDateList', 'popupBlockDateHead');
    accordeonFunc('.dropdownDefault', 'dropdownDefaultActive', '.dropdownDefaultList', 'dropdownDefaultHead');
    accordeonFunc('.questionsSearchBodyItem', 'questionsSearchBodyItemActive', '.questionsSearchBodyItemList', 'questionsSearchBodyItemHead');
    
    
});





