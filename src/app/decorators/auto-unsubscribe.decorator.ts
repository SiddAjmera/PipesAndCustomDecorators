export function AutoUnsubscribe(target) {
  const original = target.prototype.ngOnDestroy;

  target.prototype.ngOnDestroy = function() {
    for( let prop in this ) {
      let property = this[prop];
      if( property && (typeof property.unsubscribe === 'function') ) {
        property.unsubscribe();
      }
    }
    if(original && (typeof original === 'function')) {
      original.apply(this, arguments);
    }
  }
}