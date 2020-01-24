document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);


    button.addEventListener('click', function () {
        btnClicked();
    })

    function btnClicked() {
        let sqHolder = document.createElement('div');
        sqHolder.className = 'squareHolder';
        let inText = document.createElement('div');
        sqHolder.appendChild(inText);
        document.body.appendChild(sqHolder);
    }
});