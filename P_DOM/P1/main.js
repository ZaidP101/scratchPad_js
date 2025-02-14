const box = document.querySelectorAll('.box')
const body = document.querySelector('body')
// const colour = document.querySelector('#id')

box.forEach(function(box){
    box.addEventListener('click', function(e){
        switch (e.target.id) {
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
                case 'yellow':
                    body.style.backgroundColor = e.target.id
                    
                    break;
            default:
                break;
        }
    })
})

