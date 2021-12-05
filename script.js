
window.onload = () =>
        {
                function success () { 
                let obj = JSON.parse(this.responseText);
                //console.log(JSON.parse(this.responseText)); 
                // alert(`Nome: ${obj.name} \nBiografia:${obj.bio}`);
                
                let bio = document.querySelector('#githubBio');
                if(bio !=null)
                bio.innerHTML = obj.bio;

                let seguidores = document.querySelector('#seguidores');
                if(seguidores != null)
                seguidores.innerHTML = obj.followers;

                let perfilName = document.querySelector('#perfil-name');
                if(perfilName != null)
                perfilName.innerHTML = obj.name;
                
                let perfilPhoto = document.querySelector('#perfil-photo');
                if(perfilPhoto!=null)
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
                    //console.log(JSON.parse(this.responseText)); 
                    
                    let allRepoNames = document.querySelectorAll('div.content_repo > div');
                    //console.log(allRepoNames);
                    if(allRepoNames != null)
                    {
                        for(i =0; i< allRepoNames.length; i++)
                        {
                            let index = Math.floor(Math.random() * obj2.length);
                            let repoSelected = obj2[index];
                            allRepoNames[i].querySelector('h2').innerHTML = repoSelected.name;
                            allRepoNames[i].querySelector('span.description').innerHTML = repoSelected.description;
                            let data = new Date(repoSelected.updated_at);
                            allRepoNames[i].querySelector('span.date').innerHTML = data.toLocaleDateString();
                            allRepoNames[i].querySelector('a').href = repoSelected.html_url;
                            obj2.splice(index,1);
                            //console.log(obj2);
                        }
                        
                    }   
                   
                }
                document.getElementById('icon_search').addEventListener('click', executaPesquisa);
        }
        
       

        function error (err) { 
            console:log('Erro:', err);
            let divtela = document.getElementById('tela');
            divtela.innerHTML = "Resultado não encontrado :(";
        }

        function executaPesquisa() 
        {
            // let xhr = new XMLHttpRequest(); 
            let query = document.getElementById('txtPesquisa').value;
            
            console.log(query);
            var originalName = query.split(' ').join('');
            console.log(originalName);
            if(originalName != ""){
                fetch("https://api.github.com/users/" + originalName)
                .then((result) => result.json())
                .then((data) =>{
                    console.log(data);
                    if(data != null)
                    {
                        sessionStorage.setItem('avatar', data.avatar_url );
                        sessionStorage.setItem('name', data.name );
                        sessionStorage.setItem('repo', data.public_repos );
                        sessionStorage.setItem('bio', data.bio );
                        sessionStorage.setItem('url', data.html_url );
                        sessionStorage.setItem('data', data);
                        window.location.href = "search.html";
                    }else{
                        alert('Resultado não encontrado');
                    }
                })
            
            }
          
        }
