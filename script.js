const $mainImageBox = document.querySelector ('.principal-image-box')
const $cat1 = document.querySelector ('.cat-1')
const $cat2 = document.querySelector ('.cat-2')
const $cat3 = document.querySelector ('.cat-3')

function handleCat1() {
    $mainImageBox.innerHTML = '<img class="main-image" src="imagens/cat-1.jpg" alt="gato">'
}

function handleCat2() {
    $mainImageBox.innerHTML = '<img class="main-image" src="imagens/cat-2.jpg" alt="gato">'
}

function handleCat3() {
    $mainImageBox.innerHTML = '<img class="main-image" src="imagens/cat-3.jpg" alt="gato">'
}

$cat1.addEventListener('click', handleCat1)
$cat2.addEventListener('click', handleCat2)
$cat3.addEventListener('click', handleCat3)
