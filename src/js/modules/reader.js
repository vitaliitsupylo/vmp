function createElement(tag, props, ...children) {

    const element = document.createElement(tag);

    Object.keys(props).forEach(prop => element[prop] = props[prop]);

    if (children.length > 0) {
        children.forEach((child) => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }
            element.appendChild(child);
        });
    }


    return element;

}


function reader(btn, video) {

    let input = createElement('input', {'type': 'file'});

    let fileReader = new FileReader();

    btn.addEventListener('click', () => {
        input.click();
    });

    input.addEventListener('change', () => {
        console.log(1);
        fileReader.readAsDataURL(input.files[0]);
    });

    fileReader.addEventListener('load', (even) => {
        video.setAttribute('src', `${even.srcElement.result}`);
        console.log(even);
    });


}

module.exports = reader;