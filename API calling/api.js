console.clear();

const makeReauest = (method, url,data) => {
    const Xhr = new XMLHttpRequest();
    Xhr.open(method, url);

    Xhr.setRequestHeader('Content-type', 'application/json');

    Xhr.onload = () => {
        let data = Xhr.response;
        console.log(JSON.parse(data));
    }

    Xhr.onerror = () => {
        console.log("Error is Heir...")
    }

    Xhr.send(JSON.stringify(data));
}

const getData = () => {
    makeReauest('GET', 'https://jsonplaceholder.typicode.com/posts');
}
// getData();
const setData = () => {
    makeReauest('POST', 'https://jsonplaceholder.typicode.com/posts',
    { 
     title: 'foo',
     body: 'bar',
     userId: 1,
    });
}
// setData();
const updateData = () => {
    makeReauest('PUT', 'https://jsonplaceholder.typicode.com/posts/1',
    { 
        id: 1,
        title: 'foo-ty',
        body: 'bar-rma',
        userId: 1,
    });
}
// updateData();

const updatePatchData = () => {
    makeReauest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1',
    { 
        
        title: 'This is my first API calling.',
       
    });
}
// updatePatchData();

const dleteData = () => {
    makeReauest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
}
// dleteData();