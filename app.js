document.getElementsByClassName('ba-breadcrumbs_item')[1].id = 'sssss';
sssss.style.border = 'solid red';
document.getElementsByClassName('ba-breadcrumbs')[0].id = 'sssss2';
sssss2.style.border = 'solid red';

document.getElementsByTagName('span')[6].id = 'zagolovok';
document.getElementsByTagName('span')[7].id = 'zagolovok';
document.getElementsByTagName('span')[8].id = 'zagolovok';
document.getElementById('zagolovok').style.color = 'red';


document.getElementsByClassName('ba-team-member_img')[0].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[1].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[2].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[3].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[4].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[5].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[6].id = 'imgs';
document.getElementsByClassName('ba-team-member_img')[7].id = 'imgs';

let el = document.getElementById('imgs');
el.src = 'https://www.shorturl.at/nsuFK';


// 1)В акад у всех заголовков h3 дописываем к ним номер по счету
// (WE ARE AWESOME 0, CRIATIVE & DIGITAL 1, FULLY RESPONSIVE 2, Заголовок бла бла N)

let schet = document.querySelectorAll('h3');
for(let i = 0; i< schet.length; i++){
    schet[i].innerText += " " + i;
}


// 2) найти параграф внутри секции бенефита. И для его родительского Элемента навесить класс.

// document.querySelector('.ba-benefit p').classList.add('new_class');

let newClass = document.querySelectorAll('.ba-benefit p');
for(let i = 0; i<newClass.length; i++){
    newClass[i].parentElement.classList.add('new_class');
}

// 3). Если в блоке team-member указано имя ‘Enriko’, ‘ENRIKO’, ‘EnRiko’ и т.д то у team-member добавить класс team-member__active и этот класс должен добавлять красную обводку.

let classMember = document.querySelectorAll('.ba-team-member h3');
for(let i =0; i<classMember.length; i++){
    classMember[i].innerText;
    let member = innerText;
    console.log(member);
    if (member = 'Enrico') {
        classMember.classList.add('team-member__active');
    }
    else{
        alert('Net takogo');
    }
}

