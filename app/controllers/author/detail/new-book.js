import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    saveBook(event) {
      event.preventDefault();
      let book = this.store.createRecord("book", this.model.book);
      book.save().then(() => {
        this.transitionToRoute("author.detail");
      });
    }
  }
});
