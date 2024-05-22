const Constants = {};

Constants.SQL = {
    GET_ALL: 'SELECT * FROM new',
    GET_BY_NAME: 'SELECT * FROM new WHERE name = ?'
},
Constants.URL= {
    DICTIONARY_BASE: `https://www.dictionaryapi.com/api/v3/references/collegiate/json/`,
    THESAURUS_BASE: `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/`
}

export default Constants;