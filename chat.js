const CALL_APP_ROOT = 'https://meet.jit.si/';
function SendClick() {
    const message = document.createElement('div');
    message.className = 'message my-message'
    message.textContent = document.getElementById('message-input').value
    document.getElementById('message-input').value = ''
    document.querySelector('.messages').prepend(message)
}


const user1 = GetUser();


function StartCall(me,notMe) {
    const frame = document.getElementById('chat-frame')
    const ids = [me.id, notMe.id].sort().join(',')
    console.log(me,notMe);
    console.log(ids);
    frame.setAttribute('src', CALL_APP_ROOT + ids + '-JUSTDISCUSSIT')
    frame.style.setProperty('--height', '100vh')
    const domain = 'meet.jit.si';
    const options = {
        roomName: ids + '-JUSTDISCUSSIT',
        parentNode: document.querySelector('#chat-frame'),
      userInfo:{
        displayName:me.userName
      }
    };
    const onCallEnd=()=>{
        console.log('end');
    }
    const api = new JitsiMeetExternalAPI(domain, options);
    console.log(api.addListener);
    api.addListener('readyToClose', onCallEnd);
    api.removeListener('readyToClose', onCallEnd);
}

function LoadMessages() {

}

setInterval(LoadMessages)

fetch(GetUrlRoot() + 'user/' + getSearchParameters()['id']).then(res => res.json()).then(r => {
    user2=r.user;
    StartCall(user1,r.user);
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
