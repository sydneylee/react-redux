const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.json()); //TODO : app.use() ; middleware 추가하는 방법
app.use(bodyParser.urlencoded({extended:false}));
//TODO - proxy port : 제시된 포트는 5000이었으므로,여기서와 package.json에서 proxy를 500에 넣고, home 에서 testing 으로 연결한  fetch('/api/hello')로 시험하자 실패, 7000으로 두곳에서 다 바꾸니 작동
const port = process.env.PORT || 9999;


let id = 100;
let homeItems = [
    { id:0, title:'title0', content: 'content0' },
    { id:1, title:'title1', content: 'content1' },
    { id:2, title:'title2', content: 'content2' },
    { id:3, title:'title3', content: 'content3' },
    { id:4, title:'title4', content: 'content4' },
    { id:5, title:'title5', content: 'content5' },
    { id:6, title:'title6', content: 'content6' },
    { id:7, title:'title7', content: 'content7' },
    { id:8, title:'title8', content: 'content8' },
    { id:9, title:'title9', content: 'content9' },

];

// var array1 = [{id:1,title:'aaa',content:'aaa1'}, 12, {id:2,title:'aaa2',content:'aaa2'}, 130, 44];
//
// var found = array1.find(function(element) {
//     return element.id!=null && element.id == 2;
// });
// found;
function getItem(id){
    const item = homeItems.find((el) => {
            return (el.id == id);
        });
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (item) {
                resolve(item);
            }
            else {
                reject({error: 'not found' + id});
            }
        }, 1000);
    });
}

function removeItem(id){
    const itemIndex = homeItems.findIndex((el) => {
        return (el.id == id);
    });
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (itemIndex != null) {
                homeItems = homeItems.filter(el=>el.id != id);
                resolve(id);
            }
            else {
                reject({error: 'not found' + id});
            }
        }, 1000);
    });
}

function getItemIndex(id){
    const itemIndex = homeItems.findIndex((el) => {
        return (el.id == id);
    });
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if (itemIndex != null) {
                resolve(itemIndex);
            }
            else {
                reject({error: 'not found' + id});
            }
        }, 1000);
    });
}

function createItem(req, res){
    const newItem = {id:id++, title:req.body.title, content:req.body.content};
    setTimeout(()=>{
        try{
            homeItems = [...homeItems, newItem];
            console.log(homeItems);
            console.log(newItem);
            res.send(newItem);
        }
        catch(e){
            res.status(404).send(e);
        }
    }, 1000);
}


async function updateItem(req, res){
    const newItem = {id:req.body.id, title:req.body.title, content:req.body.content};

    const itemIndex = await getItemIndex(req.body.id);

    setTimeout(()=>{
        try{
            const updatedItems = homeItems.splice(itemIndex, 1, newItem);

            console.log(homeItems);
            console.log(newItem);
            res.send(newItem);
        }
        catch(e){
            res.status(404).send(e);
        }
    }, 1000);

}

// server route :
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/api/items', (req, res) => {
    setTimeout(()=>{res.send(homeItems);}, 1000);
});

app.get('/api/item/remove/:id', async (req, res) => {
    console.log("delete********");
    console.log(req.params.id);
    result = await removeItem(req.params.id);
    res.send(result);
});

app.get('/api/item/:id', async (req, res) => {
    //console.log(req.params.id);
    //homeItems[req.params.id]
    // const items = homeItems.filter((el) => {
    //     return (el.id == req.params.id);
    // });
    // setTimeout(()=>{res.send(items[0]);}, 1000);
    result = await getItem(req.params.id);
    console.log(result);
    res.send(result);
});

app.post('/api/item/save', (req, res) => {
    // console.log(req.body);
    if(req.body.id == ''){
        createItem(req, res);
    }
    else{
        updateItem(req, res);
    }
});


// testing for local
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });


// TODO - for prod env : 여기서의 client/build 는 우리 경우에는 적용이 안됨(우리는 client/아래에 build가 있는게 아니고 바로 build가 server.js와 동일 경로에 있으므로 client/는 제거할 것
// TODO - for prod env : get 방식으로 어떤 경로라도(*)가 오더라도 (요청이 있으면) buile밑에 있는 index.html을 전송해준다(app을 준다 - so that client can do redirect to default route.
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));