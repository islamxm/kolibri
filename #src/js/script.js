import noUiSlider from 'nouislider';
import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {

    MicroModal.init();

    const aside = document.querySelector('.aside');
    const tourRange = document.querySelector('#tourRange');


    function accordeonFunc(dropItemsQuery, droppedClass, dropListQuery, targetItem) {
        const dropItems = document.querySelectorAll(dropItemsQuery);
        dropItems.forEach(i => {
            i.addEventListener('click', (e)=> {
                let target = e.currentTarget;
                let targetList = target.querySelector(dropListQuery);
                let targetHead = target.querySelector(`.${targetItem}`);


                if(e.target && e.target.hasAttribute('data-head')) {
                    i.classList.toggle(droppedClass);
                }

                if(i.classList.contains(droppedClass) && targetList) {
                    targetList.style.height = `${targetList.scrollHeight}px`;
                    
                    if(dropItems[0].classList.contains('asideNavItem')) {
                        aside.classList.remove('asideActive');
                    }

                    i.classList.remove('nonact');

                }
                if(!i.classList.contains(droppedClass) && targetList) {
                    targetList.style.height = '0px';
                    i.classList.add('nonact');
                }
            });
        });
    }

    function asideToggler(asideBtnQuery) {
        let asideBtn = document.querySelector(asideBtnQuery)
        if(asideBtn) {
            asideBtn.addEventListener('click', () => {
                aside.classList.toggle('asideActive');
            });
        }
    }

    if(tourRange) {
        noUiSlider.create(tourRange, {
            start: [4500, 50000],
            connect: true,
            range: {
                'min': 0,
                'max': 50000
            },
            step: 100,
            tooltips: true,
            format: {
                from: function(value) {
                        return parseInt(value);
                    },
                to: function(value) {
                        return parseInt(value);
                    }
                }
        });
    }
    const passForm = document.querySelector('.editPasswordForm');

    if(passForm) {
        const passFields = document.querySelectorAll('.password');
        const passInputs = passForm.querySelectorAll('.input');

        passFields.forEach(i => {

            i.addEventListener('click', (e) => {
                
                let current = e.currentTarget;
                let input = current.querySelector('.input');
                let btn = e.currentTarget.querySelector('.pass');
                let btnImg = btn.querySelector('.passImg');

                if(e.target.classList.contains('pass') || e.target.classList.contains('passImg')) {
                    i.classList.toggle('showPass');

                    if(i.classList.contains('showPass')) {
                        btnImg.setAttribute('src', './img/show.svg');
                        input.setAttribute('type', 'password');
                        
                    }
                    if(!i.classList.contains('showPass')) {
                        btnImg.setAttribute('src', './img/hide.svg');
                        input.setAttribute('type', 'text');
                    }
                }
            });
        });
    }



    const tagsList = document.querySelector('#tagsList');
    const tagInput = document.querySelector('#addTag');
    // const tags = document.querySelectorAll('.tag');
    if(tagInput) {
        const inputParent = tagInput.parentElement;
        const tagDel = `
            <button type="button" class="tag_close">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41425 6.00001L11.7072 1.70701C12.0982 1.31601 12.0982 0.684006 11.7072 0.293006C11.3162 -0.0979941 10.6843 -0.0979941 10.2933 0.293006L6.00025 4.58601L1.70725 0.293006C1.31625 -0.0979941 0.68425 -0.0979941 0.29325 0.293006C-0.09775 0.684006 -0.09775 1.31601 0.29325 1.70701L4.58625 6.00001L0.29325 10.293C-0.09775 10.684 -0.09775 11.316 0.29325 11.707C0.48825 11.902 0.74425 12 1.00025 12C1.25625 12 1.51225 11.902 1.70725 11.707L6.00025 7.41401L10.2933 11.707C10.4883 11.902 10.7442 12 11.0002 12C11.2562 12 11.5122 11.902 11.7072 11.707C12.0982 11.316 12.0982 10.684 11.7072 10.293L7.41425 6.00001Z" fill="#627698"/>
                    </svg>                                                
            </button>
        `;
        

        function createTag() {
            const newTag = document.createElement('div');
            

            newTag.classList.add('tag');
            const newTagText = tagInput.value;
            newTag.innerHTML = `${newTagText}${tagDel}`;

            if(!tagInput.value == '') {
                inputParent.before(newTag);
            }

            
        }

        if(tagInput) {
            tagInput.addEventListener('keypress', (e) => {
            
                if(e.key == 'Enter') {
                    e.preventDefault();
                }
                const keyEnter = 'Enter';
        
                if(e.key == keyEnter) {
                    
                    createTag();
                    let tags = document.querySelectorAll('.tag');
                    tags.forEach(tag => {
                        tag.addEventListener('click', (e) => {
                            let btn = e.currentTarget.querySelector('tag_close');
        
                            if(e.target && e.target.classList.contains('tag_close') || e.target.tagName == 'svg' || e.target.tagName == 'path') {
                                tag.remove();
                            }
                        });
                    });
                    
                    e.currentTarget.value = '';
                }
                
            });
        }

    }
    
    const tabsParent = document.querySelector('.tabs');

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.ratingSideTabContent');

    if(tabsParent) {
        function hideTabContent() {
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            tabs.forEach(i => {
                i.classList.remove('active');
            });
        }
    
        function showTabContent(i = 0) {
            tabContents[i].style.display = 'block';
            tabs[i].classList.add('active');
        }
    
        hideTabContent();
        showTabContent();
    
    
        tabsParent.addEventListener('click', (e) => {
            let tar = e.target;
    
            if(tar && tar.classList.contains('tab')) {
                tabs.forEach((i,index) => {
                    if(tar == i) {
                        hideTabContent();
                        showTabContent(index);
                    }
                });
            }
        });
    }



    


    /* Функционал для показа/скрытия сайдбара */
    asideToggler('.asideBtn');


    /* Функционал для аккордеона главного меню(сайдбара) */
    accordeonFunc('.asideNavItem', 'asideNavItemDropped', '.asideNavItemList', 'asideNavItemHead');
    accordeonFunc('.popupBlockDateDrop', 'popupBlockDateDropActive', '.popupBlockDateList', 'popupBlockDateHead');
    accordeonFunc('.dropdownDefault', 'dropdownDefaultActive', '.dropdownDefaultList', 'dropdownDefaultHead');
    accordeonFunc('.questionsSearchBodyItem', 'questionsSearchBodyItemActive', '.questionsSearchBodyItemList', 'questionsSearchBodyItemHead');
    accordeonFunc('.tourAddItem', 'tourAddItemActive', '.tourItemList', 'tourItemHead');
    accordeonFunc('.setAuditListItem', 'setAuditListItemActive', '.setAuditListItemUl', 'setAuditListItemHead');
    accordeonFunc('.gameShowBodyDropItem', 'gameShowBodyDropItemActive', '.itemList', 'itemHead');
    accordeonFunc('.ratingBodyItem', 'active', '.body', 'bodyBtn');
    
    
});





