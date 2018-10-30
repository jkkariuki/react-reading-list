import axios from "axios";

export default {
    getBooks: function(){
        return axios.get("/api/books")
    },

    deleteBook: function(id){
        return axios.delete("/api/books/" + id);
    },

    saveBook: function(bookData){
        return axios.post("/api/books", bookData);
    },

    getBook: function(id){
        return axios.get('/api/books/' + id)
    },

    patchBook : function(id, bookData){
        return axios.patch("/api/books/" + id, bookData);
    },
};
