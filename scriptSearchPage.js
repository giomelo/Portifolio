window.onload = () =>
        {
                document.getElementById('icon_search').addEventListener('click', executaPesquisa);
                     let divtela = document.getElementById('tela');
                        let texto = '';
                        // //Montar texto html das noticias
                        // for(i = 0; i< dados.articles.length; i++){
                            texto = texto + `
                            <div class="box-noticia">
                            <img src="${sessionStorage.getItem('avatar')}" alt="" style="width: 300px; height: 300px;"><br>
                            <span class="titulo">${sessionStorage.getItem('name')}</span><br>
                            <span class="creditos">Repositórios Públicos: ${sessionStorage.getItem('repo')}</span><br>
                            <span class="text">
                            ${sessionStorage.getItem('bio')}
                            </span><br>
                            <a target="blank" href="${sessionStorage.getItem('url')}">Acessar Perfil</a>
                        </div>
                            `;
                        // };
            
                        divtela.innerHTML = texto;
              
        }

        function executaPesquisa() 
        {
            // let xhr = new XMLHttpRequest(); 
            let query = document.getElementById('txtPesquisa').value;
            
            console.log(query);
            var originalName = query.split(' ').join('');
            console.log(originalName);
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
                    sessionStorage.setItem('data', data.results);
                    window.location.href = "search.html";
                }else{
                    alert('Resultado não encontrado');
                }
            })
        }

       
