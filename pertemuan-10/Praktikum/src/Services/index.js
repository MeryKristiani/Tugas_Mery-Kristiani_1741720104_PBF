import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

// Daftar API - GET
const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc');

// Daftar API - POST
const postNewsBlog = (dataYgDiKirim) => PostAPI('post', dataYhDiKirim);

// Daftar API - DELETE
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('post', dataYgDiHapus);

const API = {           // inisialisasi function-function yang akan disediakan global API.
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;
