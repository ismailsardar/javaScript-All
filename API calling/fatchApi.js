console.clear();

fetch('https://jsonplaceholder.typicode.com/posts/1', {
     // method:'POST',
     // method:'PUT',
     // method:'PATCH',
     method:'DELETE',
     // headers: {
     //      'Content-type': 'application/json; charset=UTF-8',
     //    },
     // body: JSON.stringify({
     //      body: 'barma_jhrflhlr',
          
     // }),
})
     .then(res => {
          if(!res.ok){
               const masseg = `Error : ${res.status}`;
               throw new Error(masseg);
          }
          return res.json();
     })
     .then(res => console.log(res))
     .catch(err => console.log(err));


// async AND await FATCH API

const makeApi = async (url,config) => {

     const res = await fetch(url,config);
     if(!res.ok){
          const masseg = `Error : ${res.status}`;
          throw new Error (masseg);
     }
     const data = await res.json();
     return data;

}

const getData = () => {
     makeApi('https://jsonplaceholder.typicode.com/posts/1')
          .then(res => console.log(res))
          .catch(err => console.log(err));
}
getData();

const setData = () => {
     makeApi('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
               title: 'foo',
               body: 'bar',
               userId: 1,
          }),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
     })
     .then(res => console.log(res))
     .catch(err => console.log(err));
}
setData();

const updateData = () => {
          makeApi('https://jsonplaceholder.typicode.com/posts/2', {
               method: 'PUT',
               body: JSON.stringify({
                    title: 'football',
                    body: 'bardfgdgf',
                    userId: 2,
               }),
               headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                 },
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
     }
updateData();

const patchData = () => {
          makeApi('https://jsonplaceholder.typicode.com/posts/2', {
               method: 'PATCH',
               body: JSON.stringify({
                    title: 'Baseball',
               }),
               headers: {
                   'Content-type': 'application/json; charset=UTF-8',
                 },
          })
          .then(res => console.log(res))
          .catch(err => console.log(err));
     }
patchData();

const deleteData = () => {
     makeApi('https://jsonplaceholder.typicode.com/posts/2', {
          method: 'DELETE',
     })
     .then(res => console.log(res))
     .catch(err => console.log(err));
}
deleteData();