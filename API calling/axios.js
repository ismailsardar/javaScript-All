console.clear();


axios
     .get("https://jsonplaceholder.typicode.com/posts")
     .post("https://jsonplaceholder.typicode.com/posts", {
     .put("https://jsonplaceholder.typicode.com/posts/1", {
     .patch("https://jsonplaceholder.typicode.com/posts/1", {
           body: JSON.stringify({
               
                title: 'Canada',
                
            }),
     })
    .delete("https://jsonplaceholder.typicode.com/posts/1")
     .then(ref => console.log(ref.data))
     .catch(err => console.log(err));


// use async and await

const axiosRequest = async (config) => {
    return await axios(config);
};

const deleteData = () => {
    axiosRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "delete",
    })
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)});
};
deleteData();
const updateData = () => {
    axiosRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "put",
        data: JSON.stringify({
            id: 1,
            title: 'foofffffffffff',
            body: 'barddddddddddddddddd',
            userId: 1,
          }),
    })
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)});
};
updateData();
const setData = () => {
    axiosRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
          }),
    })
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)});
};
setData();
const getData = () => {
    axiosRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)});
};
getData();