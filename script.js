const container = document.querySelector('.container');
const question = document.querySelector('.question');
const Yesbtn = document.querySelector('.yes-btn');
const Nobtn = document.querySelector('.no-btn');

const containerRect = container.getBoundingClientRect();
const noBtnRect = Nobtn.getBoundingClientRect();

Yesbtn.addEventListener('click', () => {
    question.textContent = 'တူတူပဲ များကြီးချစ်တယ်​နော်♡';
});

Nobtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;

    const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

    Nobtn.style.left = i + 'px';
    Nobtn.style.top = j + 'px'
})