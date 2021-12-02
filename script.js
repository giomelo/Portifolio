window.onload = () =>
        {
            function success () { 
                let obj = JSON.parse(this.responseText);
                console.log(JSON.parse(this.responseText)); 
                // alert(`Nome: ${obj.name} \nBiografia:${obj.bio}`);

                let bio = document.querySelector('#githubBio');
                bio.innerHTML = obj.bio;

                let seguidores = document.querySelector('#seguidores');
                seguidores.innerHTML = obj.followers;

                let perfilName = document.querySelector('#perfil-name');
                perfilName.innerHTML = obj.name;
                
                let perfilPhoto = document.querySelector('#perfil-photo');
                perfilPhoto.src = obj.avatar_url;
                }
                function error (err) { console:log('Erro:', err); }
                var xhr = new XMLHttpRequest();
                xhr.onload = success;
                xhr.onerror = error;
                xhr.open ('GET', 'https://api.github.com/users/giomelo');
                xhr.send();

           
                var xhr = new XMLHttpRequest();
                xhr.onload = repos;
                xhr.onerror = error;
                xhr.open ('GET', 'https://api.github.com/users/giomelo/repos');
                xhr.send();

                function repos(){
                    let obj2 = JSON.parse(this.responseText);
                    console.log(JSON.parse(this.responseText)); 
                    
                    let allRepoNames = document.querySelectorAll('div.content_repo > div');
                    console.log(allRepoNames);

                    for(i =0; i< allRepoNames.length; i++)
                    {
                        let index = Math.floor(Math.random() * obj2.length);
                        let repoSelected = obj2[index];
                        allRepoNames[i].querySelector('h2').innerHTML = repoSelected.name;
                        allRepoNames[i].querySelector('span').innerHTML = repoSelected.description;
                        obj2.splice(index,1);
                        console.log(obj2);
                    }
                    
                }
        }