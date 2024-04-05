const listPost = [];

const MAXPOST = 5;

function createPost(title, content, author) {
  if (listPost.length >= MAXPOST) {
    console.log("Danh sách bài viết đã đầy. Không thể thêm bài viết mới.");
    return;
  }
  
  const newPost = { title, content, author };
  listPost.push(newPost);
}

function displayPosts() {
  console.log("Danh sách bài viết:");
  for (const post of listPost) {
    console.log(`Tiêu đề: ${post.title}`);
    console.log(`Nội dung: ${post.content}`);
    console.log(`Tác giả: ${post.author}`);
    console.log("--------------------");
  }
}

function searchPosts(keyword) {
  console.log(`Kết quả tìm kiếm cho "${keyword}":`);
  for (const post of listPost) {
    if (
      post.title.includes(keyword) ||
      post.content.includes(keyword) ||
      post.author.includes(keyword)
    ) {
      console.log(`Tiêu đề: ${post.title}`);
      console.log(`Nội dung: ${post.content}`);
      console.log(`Tác giả: ${post.author}`);
      console.log("--------------------");
    }
  }
}

const exports = {
  createPost,
  displayPosts,
  searchPosts
}
export default exports