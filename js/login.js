function Login(e){
    e.preventDefault();
    const email=document.querySelector('#email').value ||'';
    const password=document.querySelector('#password').value||'';

    fetch(GetUrlRoot()+'auth/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }).then(res=>res.json()).then(res=>{
        if(res.statut||res.error){
           throw new Error();
        }
        console.log(res);
        SetUser(res.user)
        SetToken(res.access)
        window.location = '/find-friends.html';
    }).catch(_=>{
        alert('There is no such user')
    })
}