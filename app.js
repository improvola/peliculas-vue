const app = new Vue({
    el: '#app',
    data: {
        lista: peliculas,
        nombrePelicula: '',
       
        
    },
    methods:{
        
       
        darLike: function(peli){
            peli.like = !peli.like;
        }
        
    },

    computed: {
        buscarPeli(){
            return this.lista.filter(post => {
                return post.nombre.toLowerCase().includes(this.nombrePelicula.toLowerCase());
            });
        }
    }
})
