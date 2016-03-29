require('./User');
module.exports = bookshelf.model('BlogPost', {
    tableName: 'blogPosts',
    hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
    user: function() {
      return this.belongsTo('User', 'userId');
    }
})
