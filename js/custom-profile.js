let user;
fetch(GetUrlRoot() + 'user/' + getSearchParameters()['id']).then(res => res.json()).then(r => {
    const hobbies=r.hobbies;
    r = r.user
    user=r;
    console.log(r);
    console.log(document.querySelector('#age'),
        document.querySelector('#Country'),
        document.querySelector('#language'),
        document.querySelector('#time'),
        document.querySelector('#dedc'));
    [document.querySelector('#age'),
    document.querySelector('#Country'),
    document.querySelector('#language'),
    document.querySelector('#time'),
    document.querySelector('#dedc')].map(el=>el.setAttribute('disabled',''))
    document.querySelector('#age').setAttribute('value',r.age||'') 
    document.querySelector('#Country').setAttribute('value', r.country||'') 
    document.querySelector('#language').setAttribute('value',r.language||'')  
    document.querySelector('#time').setAttribute('value', r.time ||'') 
    document.querySelector('#dedc').setAttribute('value',r.description||'')  
    document.querySelector('#usename').setAttribute('value',r.username||'')  

    console.log([document.querySelector('#age'),
    document.querySelector('#Country'),
    document.querySelector('#language'),
    document.querySelector('#time'),
    document.querySelector('#dedc')]);
})


function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}


function GoToChat(event){
    event.preventDefault()
    window.location = '/chat.html?id='+user.id;
}