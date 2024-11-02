chosenCities = document.querySelectorAll('.spot');
bgBlur = document.querySelector('.background-blur');
main = document.querySelector('.main');

cityName = document.querySelector('.city-name-text');
cityDescription = document.querySelector('.city-description-text');


cities = {
    recife: {
        label:'Recife',
        bg:'https://blog.tembici.com.br/wp-content/uploads/2024/02/capa-Recife-antigo.jpg.webp',
        description:'Galo da madrugada<br>São João<br>Maior Carnaval do Nordeste'
    },

    olinda: {
        label:'Olinda',
        bg:'https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094256/igreja-da-se-pe.webp',
        description:'Maior Carnaval do Nordeste junto<br>Homem da Meia-Noite'
    },

    bezerros: {
        label:'Bezerros',
        bg:'https://aldoadv.wordpress.com/files/2008/09/fotos-prefeitura-046.jpg',
        description:'Terra do Papangu<br>Serra Negra'
    },

    camaragibe: {
        label:'Camaragibe',
        bg:'https://turismo.camaragibe.pe.gov.br/wp-content/uploads/2021/10/convento-das-carmelitas.jpg',
        description:'Camaragibe em Cena<br>Aldeia'
    },

    garanhuns: {
        label:'Garanhuns',
        bg:'https://imagens.ne10.uol.com.br/img/imagens/2019/09/02/6a27ab8fea_1.jpg',
        description:'Relógio das flores<br>Festival de Inverno '
    },

    goiana: {
        label:'Goiana',
        bg:'https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/07/setor-bueno-goiania.jpg',
        description:'Festa do Reis<br>Festival dos caboclinhos<br>Festa de Santo Antonio'
    },

    caruaru: {
        label:'Caruaru',
        bg:'https://viajantecurioso.com.br/wp-content/uploads/2018/06/festa-junina-caruaru.jpg',
        description:'Feira de Caruaru<br>Festas Juninas<br>São João de Caruaru'
    },

    surubim: {
        label:'Surubim',
        bg:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiP8ZHiv1MKaBM47hcP7oHRea4eF-NrPKseI0l0Kz6IuUYJAl8DT6dfqeUpcCjSUrvnyZdgWWmsKbH8F5TccaXwHgJ5hsHLWATJhMiFg0NT5BIg1-Ktyed3URadClL5lJWd2UmcslW7NPI/s1600/_MG_3603.JPG',
        description:'Terra da Vaquejada'
    }
}

window.addEventListener('mouseover', (event) =>{

    if(event.target.matches('.spot')){

        inkscape = event.target.getAttribute('inkscape:label');


        
        chosenCities.forEach(city =>{
            if(!city.classList.contains('hidden') && city != event.target){
                city.classList.toggle('hidden');
            }

            for(let city in cities){
                if(cities[city].label == inkscape){
                    main.style.backgroundImage = `url(${cities[city].bg})`
                    cityName.innerHTML = cities[city].label;
                    console.log(main.style)

                    cityDescription.innerHTML = cities[city].description;
                }
            }
        })



        bgBlur.classList.remove('hidden');
        console.log(bgBlur.classList)

    }else{

        chosenCities.forEach(city =>{
            if(city.classList.contains('hidden')){
                city.classList.toggle('hidden');
            }
        })

        main.style.backgroundImage = '';
        cityName.innerHTML = 'Pernambuco'
        cityDescription.innerHTML = 'Maior bloco de carnaval do mundo <br>Capital mais antiga do Brasil <br> Te     rra do frevo';

        bgBlur.classList.add('hidden');
    }
})