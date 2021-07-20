const Element = ({ onClick ,elementType, value, text, children, classes, color, icon, alt, type, placeholder, id, nameInput, src, hover, autoplay, background, speed, width, height, loop, href, target, inner, title, dataValue }) => {
    const element = document.createElement(elementType);

    if (text) element.textContent = text;
    if (color) element.style.backgroundColor = color;
    if (alt) element.setAttribute('alt', alt);
    if (type) element.setAttribute('type', type);
    if (src) element.setAttribute('src', src);
    if (href) element.setAttribute('href', href);
    if (id) element.idList.add(id);
    if (hover) element.setAttribute('hover', 'true');
    if (autoplay) element.setAttribute('autoplay', 'true');
    if (loop) element.setAttribute('loop', 'true');
    if (background) element.setAttribute('background', background);
    if (speed) element.setAttribute('speed', speed);
    if (width) element.style.width = width;
    if (height) element.style.height = height;
    if (placeholder) element.setAttribute('placeholder', placeholder);
    if (nameInput) element.setAttribute('for', nameInput);
    if (target) element.setAttribute('target', target);
    if (inner) element.innerHTML += inner;
    if (classes) classes.map(clss => element.classList.add(clss))
    if (icon) {
        element.classList.add('fas');
        element.classList.add('icones');
    };
    if (title) element.setAttribute('title', title);
    if (value) element.value = value;
    if (onClick) element.addEventListener('click', onClick)
    if (dataValue) element.setAttribute('data-value', dataValue)

    if (children) children.forEach(item => element.appendChild(item))

    _methods(element);

    return element;
}

const _methods = (element) => {
    element.triggerClick = (prop) => {
        const propType = typeof prop;

        const $elementTrigger = propType === 'string' ? document.querySelector(prop) : prop;

        element.addEventListener('click', () => {
            $elementTrigger.click();
        })
    }
}

export default Element;