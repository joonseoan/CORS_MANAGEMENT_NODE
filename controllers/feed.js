exports.getPosts = (req, res, next) => {
    // json(): express's built-in method to convert the object to json format.
    //  because http can't recognize object format, but json format.

    // json() automatically sets up Content-Type: application/json!!!!!!!!!!***********************************
    // res.json({ posts: [{ title: 'First Post', content: 'This is the first post.'}]})

    // json() is only for responding(sending) toward the client.!!!!!!
    //   not receiving the request from the client

    // shall add status code if it is not "200" which is default value.
    res.status(200).json({ posts: [{ title: 'First Post', content: 'This is the first post.'}]})

}

// body-parsor needed to get the client's request.
//  because req's feields is always json in RESTUL API.
// like in axios and fetch.
// Remember, RESTFUL API does not use "form" in HTML
//  which requires urlencoded in body-parser.
exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    // 201: success and resource was created.
    // 200: success! only.
    res.status(201).json({
        message: 'Post created successfully',
        post: {
            id: new Date().toISOString(),
            title,
            content
        }
    });
}
