const duration = 600;

const slidingCardOut = [
  { pickOld: ".slide-out-bg", use: ["fade", { duration }] },
  {
    pickOld: ".slide-out-card",
    use: ["wait", duration, { then: "toRight" }, { duration }]
  }
];
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
    this.use('fade', { duration })
  );

  this.transition(
    this.fromRoute('book.detail.index'),
    this.use('toLeft', { duration }),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('author.detail.index'),
    this.use('fade', { duration }),
    this.reverse('fade', { duration })
  );

  this.transition(
    this.fromRoute('author.index'),
    this.use('explode',
      {
        pickNew: '.slide-out-bg',
        use: ['fade', { duration }]
      },
      {
        pickNew: '.slide-out-card',
        use: ['toLeft', { duration }]
      }
    ),
    this.reverse('explode', ...slidingCardOut)
  );
}
