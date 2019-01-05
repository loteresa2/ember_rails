import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model({ search }) {
    if (search) {
      // /authors?filter[query]=J
      return this.store.query('book', {
        filter: {
          query: search
        }
      });
    }
    return this.store.findAll('book')
  }
});
