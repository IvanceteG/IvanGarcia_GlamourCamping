const bd = [
    {
        id: 1,
        title: "L'Encant d'Acampar al Costat del Llac",
        content: "Hi ha poques experiències a la vida tan tranquil·les i refrescants com acampar al costat d'un llac. La combinació de la natura en el seu estat més pur amb la calma de les aigües és simplement irresistible...",
        image: "../images/noticia1.png",
    },
    {
        id: 2,
        title: "Glamping: Una Nova Manera de Gaudir de la Natura",
        content: "El glamping (glamour + camping) és la tendència més recent en el món del turisme de natura, oferint una combinació única entre el luxe d'un hotel i l'experiència d'acampar a l'aire lliure...",
        image: "../images/noticia2.png",
    },
    {
        id: 3,
        title: "Els Millors Destins per Gaudir del Glamping amb Estil",
        content: "El glamping ha esdevingut una de les maneres més populars de connectar amb la natura sense renunciar a les comoditats modernes. Però no tots els destins de glamping són iguals...",
        image: "../images/noticia3.png",
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // Verificar si estamos en la página de detalle
    if (window.location.pathname.includes('detallnoticia.html')) {
        const params = new URLSearchParams(window.location.search);
        const newsId = parseInt(params.get('id'), 10);

        // Buscar la noticia correspondiente en el array 'bd'
        const news = bd.find(item => item.id === newsId);

        if (news) {
            // Mostrar los detalles de la noticia
            document.getElementById('news-title').textContent = news.title;
            document.getElementById('news-image').src = news.image;
            document.getElementById('news-content').textContent = news.content;
        } else {
            // Mostrar un mensaje si no se encuentra la noticia
            document.querySelector('main').innerHTML = '<p>No s\'ha trobat la notícia.</p>';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        bd.forEach(news => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <h2>${news.title}</h2>
                <p>${news.content.substring(0, 100)}...</p>
                <a href="detallNoticia.html?id=${news.id}" class="read-more">Llegir més</a>
            `;
            newsContainer.appendChild(newsItem);
        });
    }
});
