const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  authorId: String,
  postId: String,
  imagePath: String,
  imageName: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
