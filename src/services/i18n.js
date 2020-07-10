const languageFiles = {
    en: require('../translations/en').default
}

const lang = "en"

function t(key) {
    let path = key.split(".")
    var target = languageFiles[lang]
    while(path.length && typeof(target) !== 'undefined') {
        var segment = path.shift()
        target = target[segment]
    }
    if(typeof(target) === 'undefined') {
        return key
    }
    return target
}

export default t
