export default function(){
  // Add your transitions here, like:
  //   this.transition(
  //     this.fromRoute('people.index'),
  //     this.toRoute('people.detail'),
  //     this.use('toLeft'),
  //     this.reverse('toRight')
  //   );

  this.transition(
    this.hasClass('modal-if'),
    this.use('fade', {duration: 600})
  );

  this.transition(
    this.fromRoute('book.detail.index'),
    this.use('toLeft', {duration: 600}),
    this.reverse('toRight')
  );
}
