import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    // /authors?filter[query]=J
    return this.store.query('author', {
      filter: {
        query: 'J'
      }
    });

    //return this.store.findAll('author')
  }
});
