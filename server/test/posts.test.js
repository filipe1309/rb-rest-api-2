const axios = require('axios');

test('Should get posts', async() => {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'GET'
    });

    const posts = response.data;
    expect(posts).toHaveLength(3);

    const [firstPost] = posts;
    expect(firstPost.id).toBe(1);
    expect(firstPost.title).toBe('REST API: Métodos');
});