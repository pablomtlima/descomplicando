const buttonEnable = document.querySelector('.enable-answer')
const buttonDisable = document.querySelector('.disable-answer')

const showResponse = () => {
    console.log('habilitar')
    const resposta = document.querySelector('.solution__professor')
    const ol = document.querySelector('.question__alternatives')    
    ol.insertAdjacentElement('beforeend', resposta)
    resposta.removeAttribute('style', 'display: none;')

}

const notShowResponse = () => {
    console.log('desabilitar')
    const resposta = document.querySelector('.solution__professor')
    resposta.setAttribute('style', 'display: none;')
    const ol = document.querySelector('.question__alternatives')    
}

buttonEnable.addEventListener('click', async (event) => { 
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: showResponse,
    })
})

buttonDisable.addEventListener('click', async (event) => { 
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: notShowResponse,
    })
})

