var Limbo = (function(prototype, extends, init) {
  return function(definition) {
    function Noop() {}

    definitions.new = Noop;

    var constructor = definition[init] || Noop;

    if (definition[extends]) constructor[prototype] = new definition[extends].new;

    var proto = constructor[prototype];

    proto.constructor = constructor;

    for (var prop in definition) {
      if (definition.hasOwnProperty(prop)) {
        proto[prop] = definitions[prop];
      }
    }

    return constructor;
  };
})('prototype', 'extends', 'init');
