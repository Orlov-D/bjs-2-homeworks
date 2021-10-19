function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    hash = args.join(',');
    if (hash in cache) {
      return "Из кэша: " + cache[hash];
    } else if (Object.keys(cache).length === 5) {
      delete cache[Object.keys(cache)[0]];
      cache[hash] = func(...args);
      return "Вычисляем: " + cache[hash];
    } else {
      cache[hash] = func(...args);
      return "Вычисляем: " + cache[hash];
    }
  };
}

function debounceDecoratorNew(func, ms) {
  let flag;
  return function () {
    if (flag) {
      return;
    }
    func();
    flag = true;
    setTimeout(() => {
      flag = false;
    }, ms);
  }
}

function debounceDecorator2(func) {
  let flag;
  function withCounter() {
    withCounter.history++;
    if (flag) {
      return;
    }
    func();
    flag = true;
    setTimeout(() => {
      flag = false;
    }, ms);
  }
  withCounter.history = 0;
  return withCounter;
}
