import managerPost from "./managerPost.js";

managerPost.createPost("Bài viết 1", "Nội dung bài viết 1", "Tác giả 1");
managerPost.createPost("Bài viết 2", "Nội dung bài viết 2", "Tác giả 2");
managerPost.createPost("Bài viết 3", "Nội dung bài viết 3", "Tác giả 1");

managerPost.displayPosts();

managerPost.searchPosts("Tác giả 1")