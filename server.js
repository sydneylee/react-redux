const express = require('express');

const app = express();
//TODO - proxy port : 제시된 포트는 5000이었으므로,여기서와 package.json에서 proxy를 500에 넣고, home 에서 testing 으로 연결한  fetch('/api/hello')로 시험하자 실패, 7000으로 두곳에서 다 바꾸니 작동
const port = process.env.PORT || 7000;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

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