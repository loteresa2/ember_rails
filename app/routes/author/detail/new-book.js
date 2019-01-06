import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    let author = this.modelFor("author.detail");
    return {
      author,
      book: {
        title: "",
        isbn: "",
        publishDate: "",
        author
      }
    };
  }
});
