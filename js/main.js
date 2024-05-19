import {createElement, dataToJson, jsonToData, getData, setData, pushState, words} from './data.js'
function checkExp() {
    let exp = jsonToData(getData('exp'))
    if (exp === undefined || exp === null) {setData('exp', dataToJson(words)); exp = jsonToData(getData('exp'))}
    return exp
}
function createWordLine(word) {
    const item = createElement('li', '', ['main__item'])
    const rus = createElement('h2', word.rus, ['main__item-rus'])
    const uzb = createElement('h2', word.uzbek, ['main__item-uzb'])
    const testCount = createElement('h2', word.status.tests, ['main__item-count'])
    const trueCount = createElement('h2', word.status.trues, ['main__item-count'])
    item.append(rus, uzb, testCount, trueCount)
    return item
}

function renderWords() {
    let data = checkExp()

    const main = document.getElementById('main')
    main.innerHTML = ''
    const title = createElement('h1', 'Словарь', ['main__title'])
    const wordsList = createElement('ul', '', ['list-reset','words__list'])
    main.append(title, wordsList)
    const head = createElement('li', '', ['main__item'])
    head.append(createElement('h2', 'Слово', ['main__item-rus']), 
                createElement('h2', 'Перевод', ['main__item-uzb']),
                createElement('h2', 'Попыток', ['main__item-count']),
                createElement('h2', 'Правильных', ['main__item-count']))
    wordsList.append(head)
    for (const word of data) {wordsList.append(createWordLine(word))}
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function createTest() {
    let testData = []
    let dat = checkExp()
    for (let iter = 0; iter < 20; iter++) {
        let item = {}
        const word = dat[Math.floor(Math.random() * dat.length)]
        console.log(word);
        if (Math.floor(Math.random() * 2) === 0) {
            item.question = word.uzbek
            item.answer = word.rus
            item.variants = []
            for (let i = 0; i < 3; i++) {
                item.variants.push(dat[Math.floor(Math.random() * dat.length)].rus)
            }
        } else {
            item.question = word.rus
            item.answer = word.uzbek
            item.variants = []
            for (let i = 0; i < 3; i++) {
                item.variants.push(dat[Math.floor(Math.random() * dat.length)].uzbek)
            }
        }
        item.variants.push(item.answer)
        item.variants = shuffleArray(item.variants)
        item.status = false
        item.correct = null
        testData.push(item)
        dat.splice(dat.indexOf(word), 1);
    }
    setData('test', dataToJson(testData))
    return testData
}

function createTestCard(data, id, content) {
    const cont = createElement('div', '', ['test__info'])
    content.append(cont)
    const question = createElement('h2', `Как переводится слово: `, ['test__question'])
    const questionData = createElement('span', data.question)
    question.append(questionData)
    const variantList = createElement('ul', '', ['list-reset', 'test__variant-list'])
    for (const variantData of data.variants) {
        const variant = createElement('li', '', ['test__variant'])
        const variantBtn = createElement('button', variantData, ['btn-reset', 'test__variant-btn'])
        variant.append(variantBtn)
        variantList.append(variant)
        const btnNext = createElement('button', 'Далее', ['btn-reset', 'test__variant-btn'])
        variantBtn.addEventListener('click', ()=>{
            if (data.status != true) {
                data.status = true
                if (data.answer === variantData) {
                    data.correct = true
                    variantList.innerHTML = ''
                    variantList.append(variantBtn)
                    variantBtn.classList.add('correct')
                } else {
                    data.correct = false
                    variantList.innerHTML = ''
                    variantList.append(variantBtn)
                    variantBtn.classList.add('incorrect')
                }
                let newData = jsonToData(getData('test'))
                newData[id] = data
                setData('test', dataToJson(newData))
                variantBtn.disabled = true
                cont.append(btnNext)
            } else {
                alert('Перейдите к следующему вопросу!')
            }
        })
        btnNext.addEventListener('click', ()=>{
            cont.innerHTML = ''
            renderQuestion(content)
            return
        })
    }
    cont.append(question, variantList)
}
function renderTest() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    const title = createElement('h1', 'Проверка навыков', ['main__title'])
    const content = createElement('div', '', ['main__list'])
    main.append(title, content)
    let testData = jsonToData(getData('test'))
    if (testData === null || testData === undefined) {
        const startTest = createElement('button', 'Начать тестирование', ['btn-reset', 'test__start'])
        content.append(startTest)
        startTest.addEventListener('click', ()=>{
            createTest()
            renderQuestion(content)
            return
        })
    } else {
        const continueTest = createElement('button', 'Продолжить тестирование', ['btn-reset', 'test__start'])
        content.append(continueTest)
        continueTest.addEventListener('click', ()=>{
            renderQuestion(content)
            return
        })
    }

    createHistoryTest(content)
}

function createHistoryTest(content) {
    const history = createElement('div', '', ['test__history'])
    content.append(history)
    
    const title = createElement('h2', 'История тестирований', ['test__history-title'])
    history.append(title)
    let results = jsonToData(getData('results'))
    if (results.length === 0) {
        const noResults = createElement('h3', 'Вы еще не проходили тестирование!', ['test__history-null'])
        history.append(noResults)
    } else {
        const resultsCont = createElement('div', '', ['test__history-result-list'])
        history.append(resultsCont)
        for (const result of results) {
            const resultLine = createElement('div', '', ['test__history-result'])
            let id = results.indexOf(result)
            id++
            const resultLineId = createElement('h4', id, ['test__history-result-item'])
            const resultLineDate = createElement('h4', result.date, ['test__history-result-item']) 
            const resultLineCount = createElement('h4', result.degree, ['test__history-result-item'])
            const resultLineMore = createElement('button', 'Подробнее', ['btn-reset', 'test__history-result-more'])
            resultLine.append(resultLineId, resultLineDate, resultLineCount, resultLineMore)
            resultsCont.append(resultLine)
        }
    }
}

function renderQuestion(content) {
    content.innerHTML = ''
    let testData = jsonToData(getData('test'))
    for (const data of testData) {
        if (data.status === true) {continue}
        createTestCard(data, testData.indexOf(data),content)
        return
    }
    finishTest(testData)
    return
}
function finishTest(testData) {
    let exp = jsonToData(getData('exp'))
    let correctCount = 0
    for (const data of testData) {
        let elemId
        for (const elem of exp) {
            if (elem.rus === data.question || elem.uzbek === data.question){
                elemId = exp.indexOf(elem);
                break
            }
        }
        exp[elemId].status.tests += 1
        if (data.correct) {
            correctCount++
            exp[elemId].status.trues += 1
        }
    }
    let results = jsonToData(getData('results'))
    let result = {}
    result.correct = correctCount
    result.count = testData.length
    result.questions = testData
    result.degree = `${((100/testData.length)*correctCount)}%`
    result.date = getDate()
    results.push(result)
    setData('exp', dataToJson(exp))
    localStorage.removeItem('test')
    setData('results', dataToJson(results))
    renderTest()
    return
}

function getDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`
}

function renderSettings() {
    const main = document.getElementById('main')
    main.innerHTML = ''
    const title = createElement('h1', 'Настройки', ['main__title'])
    const content = createElement('div', '', ['main__list'])

    // const personal = createElement('div', '', ['settings__personal'])
    // const name = createElement('div', '', ['settings__personal-name'])
    // const nameInput = createElement('input', '', ['settings__personal-name-input'], {required: true, id: 'settings-name'})
    // nameInput.addEventListener('input', () => {
    //     nameInput.value = nameInput.value.replace(/[^A-Za-zА-Яа-я]/g, '')
    // })
    // const nameLabel = createElement('label', 'Имя', ['settings__personal-name-label'])
    // nameLabel.setAttribute('for', 'settings-name')
    // name.append(nameInput, nameLabel)
    // const nameSave = createElement('button', 'Сохранить', ['btn-reset', 'settings__personal-name-save'])
    // personal.append(name, nameSave)
    const dataCont = createElement('div', '', ['settings__data'])
    const dataTitle = createElement('h2', 'Данные', ['settings__data-title'])
    const dataBtn = createElement('button', 'Удалить', ['btn-reset', 'settings__data-delete'])
    dataCont.append(dataTitle, dataBtn)
    content.append(dataCont)
    main.append(title, content)
    dataBtn.addEventListener('click', ()=>{
        localStorage.removeItem('exp')
        checkExp()
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    let results = jsonToData(getData('results'))
    if (results === null || results === undefined) {
        results = []
        setData('results', dataToJson(results))
    } 
    checkExp()
    const testBtn = document.getElementById('test')
    testBtn.addEventListener('click', ()=>{renderTest()})
    const vocabBtn = document.getElementById('vocab')
    vocabBtn.addEventListener('click', ()=>{renderWords()})
    const sett = document.getElementById('settings')
    sett.addEventListener('click', ()=>{
        renderSettings()
    })
})