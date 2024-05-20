export function createElement(tag = 'div', text = '', classList = [], attrs = {}) {
    let element = document.createElement(tag)
    element.classList.add(...classList)
    element.innerHTML = text
    for (const prop in attrs) {element[prop] = attrs[prop]}
    return element
}

export function dataToJson(data) {return JSON.stringify(data)}
export function jsonToData(data) {return JSON.parse(data)}
export function getData(name) {return localStorage.getItem(name)}
export function setData(name, data) {localStorage.setItem(name, data)}
export function pushState(typ, info, link) {history.pushState({type: typ}, info, link);}

export let words = [
    {
        rus: 'мочь',
        uzbek: 'qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'сказать',
        uzbek: 'aytmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'говорить',
        uzbek: 'gapirmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'знать',
        uzbek: 'bilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'cтать',
        uzbek: `bo'lmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'хотеть',
        uzbek: 'xohlamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'идти',
        uzbek: `bormoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'иметь',
        uzbek: `ega bo'lmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'видеть',
        uzbek: `ko'rmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'думать',
        uzbek: `o'ylamoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'сделать',
        uzbek: 'qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'жить',
        uzbek: 'yashamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'делать',
        uzbek: 'qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'смотреть',
        uzbek: 'tomosha qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'работать',
        uzbek: 'ishlamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'понять',
        uzbek: 'tushunmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'пойти',
        uzbek: 'bormoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'спросить',
        uzbek: `so'ramoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'дать',
        uzbek: 'bermoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'понимать',
        uzbek: 'tushunmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'получить',
        uzbek: 'qabul qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'сидеть',
        uzbek: `o'tirmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'оказаться',
        uzbek: `paydo bo'lmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'взять',
        uzbek: 'olmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'прийти',
        uzbek: 'kelmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'являться',
        uzbek: `bo'lmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'любить',
        uzbek: 'sevmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'стоить',
        uzbek: 'turmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'остаться',
        uzbek: 'qolmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'выйти',
        uzbek: 'chiqmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'начать',
        uzbek: 'boshlamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'считать',
        uzbek: 'sanamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'увидеть',
        uzbek: `ko'rib qolmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'казаться',
        uzbek: 'tuyilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'писать',
        uzbek: 'yozmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'найти',
        uzbek: 'topmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'стоять',
        uzbek: 'turmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'пройти',
        uzbek: `o'tmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'принять',
        uzbek: 'qabul qilmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'давать',
        uzbek: 'bermoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'ответить',
        uzbek: 'javob bermoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'помнить',
        uzbek: 'eslamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'ждать',
        uzbek: 'kutmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'находиться',
        uzbek: 'joylashmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'написать',
        uzbek: 'yozmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'оставаться',
        uzbek: 'qolmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'играть',
        uzbek: `o'ynamoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'лежать',
        uzbek: 'yotmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'подумать',
        uzbek: `o'ylamoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'уйти',
        uzbek: 'ketmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'посмотреть',
        uzbek: `ko'rmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'вернуться',
        uzbek: 'qaytmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'читать',
        uzbek: `o'qimoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'бывать',
        uzbek: `bo'lmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'ходить',
        uzbek: 'yurmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'начинать',
        uzbek: 'boshlamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'прийти',
        uzbek: 'kelmoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'показать',
        uzbek: `ko'rsatmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'поставить',
        uzbek: `qo'ymoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'бояться',
        uzbek: `qo'rqmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'существовать',
        uzbek: 'yashamoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'становиться',
        uzbek: `shakllanmoq`,
        status: {
            tests: 0,
            trues: 0,
        },
    },
    {
        rus: 'слышать',
        uzbek: 'eshtimoq',
        status: {
            tests: 0,
            trues: 0,
        },
    },
]
