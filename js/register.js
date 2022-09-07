function Register(e){
    e.preventDefault();
    const email=document.querySelector('#email').value ||'';
    const password=document.querySelector('#password').value||'';
    const username=document.querySelector('#username').value||''
    fetch(GetUrlRoot()+'auth/register',{
        method:'post',
        body:JSON.stringify({user:{email,password,username}}),
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
        alert('There is error in your data')
    })
}