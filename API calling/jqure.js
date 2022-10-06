console.clear();

const makeRequest = async (url,method,data) => {
    try {
        const result = await $.ajax({
            url: url,
            method: method,
            data: data,
        });
        return result;
    } catch (error) {
        console.log(error)
    }
};

const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
    .then((res) => console.log(res))
    
};
deleteData();
const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
        id: 1,
        title: 'foofffffffff',
        body: 'barggggggggggggg',
        userId: 1,
      })
    .then((res) => console.log(res))
    
};
updateData();
const setData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    .then((res) => console.log(res))
    
};
setData();
const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts", "GET")
    .then((res) => console.log(res))
    
};
getData();
