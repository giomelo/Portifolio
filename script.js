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
                        allRepoNames[i].querySelector('a').href = repoSelected.html_url;
                        obj2.splice(index,1);
                        console.log(obj2);
                    }
                    
                }

                function error (err) { 
                    console:log('Erro:', err);
                    let divtela = document.getElementById('tela');
                    divtela.innerHTML = "Resultado não encontrado :(";
                }
                
                function executaPesquisa ()
                {

                    const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
                    let query = document.getElementById('txtPesquisa').value;

                    let xhr = new XMLHttpRequest(); 
                    xhr.onload = exibeResultado;
                    xhr.onerror = error;
                    xhr.open ('GET', ` https://api.github.com/search/repositories?q=${query}{&page,per_page,sort,order}`);
                    xhr.send();

                }

                function exibeResultado()
                    {
                        let resu = JSON.parse(this.responseText);
                        console.log(JSON.parse(this.responseText)); 
                        let divtela = document.getElementById('tela');
                        let texto = '';
                        
                        // //Montar texto html das noticias
                        // let dados = JSON.parse(this.responseText);

                        // for(i = 0; i< dados.articles.length; i++){
                        //     let noticia = dados.articles[i];
                        //     let data = new Date(noticia.publishedAt);
                        //     texto = texto + `
                        //     <div class="box-noticia">
                        //     <img src="${noticia.urlToImage}" alt="">
                        //     <span class="titulo">${noticia.title}</span><br>
                        //     <span class="creditos">${data.toLocaleDateString ()} - ${noticia.source.name} - ${noticia.author}</span><br>
                        //     <span class="text">
                        //     ${noticia.content}
                        //     </span><br>
                        //     <a href="${noticia.url}">Leia mais ...</a>
                        // </div>
                        //     `;
                        // };
                        //preencher a div com o texto html

                        divtela.innerHTML = texto;
                }

                document.getElementById('icon_search').onclick = executaPesquisa();
        }
