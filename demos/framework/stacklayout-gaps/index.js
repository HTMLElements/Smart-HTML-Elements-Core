/// <reference path="../../../source/typescript/smart.elements.d.ts" />
window.onload = function () {
    const stackPanel = document.querySelector('.smart-stack-layout');
    const app = new smartApp({
        data: {
            spacing: 'space-between',
            orientation: 'horizontal'
        }
    });
    app.notify(function (changes) {
        if (changes.propertyName === 'spacing') {
            stackPanel.classList.remove('space-between', 'space-around', 'space-evenly');
        }
        if (changes.propertyName === 'orientation') {
            stackPanel.classList.remove('vertical');
        }
        stackPanel.classList.add(changes.newValue);
    });
};
