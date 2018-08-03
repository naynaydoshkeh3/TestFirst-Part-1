describe('Looping', () => {
  // Let's repeat ourselves several times
  describe('The function `repeat`', () => {
    it('returns an empty string with 0 repeats', () => {
      /*
       From this spec, we learn that we are creating the function 'repeat'
       which takes two arguments, a string and a number, and returns a string
      */

      expect(repeat('yo', 0)).toBe('');
    });
    it('repeats a string once', () => {
      expect(repeat('yo', 1)).toBe('yo');
    });
    it('repeats a string twice', () => {
      expect(repeat('yo', 2)).toBe('yoyo');
    });
    it('repeats a string many times', () => {
      expect(repeat('yo', 10)).toBe('yoyoyoyoyoyoyoyoyoyo');
    });
    it('does not use String.prototype.repeat', () => {
      /*
       This may be the first time you've seen spyOn!
       This block of code is 'spying' on the built in String method `repeat`.
      */

      spyOn(String.prototype, 'repeat').and.callThrough();

      repeat('yo', 4);

      /* 
       This test is making sure that you did not call the built in
       `repeat` in your code to pass the specs. You gotta do it yourself!
      */

      expect(String.prototype.repeat.calls.count()).toEqual(0);
    });
  });

  // Let's iterate over all the elements of an array using a loop
  describe('the function `sum`', () => {
    it('computes the sum of an empty array', () => {
      //Again, this statement tells us a lot about `sum`, the function we are creating
      expect(sum([])).toEqual(0);
    });

    it('computes the sum of an array of one number', () => {
      expect(sum([7])).toEqual(7);
    });

    it('computes the sum of an array of two numbers', () => {
      expect(sum([7, 11])).toEqual(18);
    });

    it('computes the sum of an array of many numbers', () => {
      expect(sum([1, 3, 5, 7, 9])).toEqual(25);
    });
  });

  describe('the function `join`', () => {
    it('turns an empty array into an empty string', () => {
      expect(join([])).toEqual('');
    });

    it('turns an array with one element into a string', () => {
      expect(join(['a'])).toEqual('a');
    });

    it('turns an array with many elements into a string', () => {
      expect(join(['apple', 'banana', 'cherry'])).toEqual('applebananacherry');
    });

    it('inserts a delimiter between elements', () => {
      expect(join(['apple', 'banana', 'cherry'], '/')).toEqual(
        'apple/banana/cherry'
      );
    });

    /* 
      This test is to make sure you don't use "for (let i in a)" on an array
      Remember how we can add any type of key/value pair to an array object
      since it's just like a regular object? When we loop over this array,
      we only want the numeric indexed properties!
    */

    it('ignores non-indexed properties set on the array object', () => {
      const fruitArray = ['apple', 'banana', 'cherry'];

      fruitArray.type = 'fruits';
      expect(fruitArray.type).toEqual('fruits');

      fruitArray.first = function() {
        return this[0];
      };

      expect(fruitArray.first()).toEqual('apple');

      expect(join(fruitArray)).toEqual('applebananacherry');
    });

    // No cheatin' now
    it('does not call Array.prototype.join', () => {
      spyOn(Array.prototype, 'join');

      join(['apple', 'banana', 'cherry']);

      expect(Array.prototype.join.calls.count()).toEqual(0);
    });
  });

  describe('the function `gridGenerator`', () => {
    it('returns an empty string when input is 0', () => {
      expect(gridGenerator(0)).toEqual('');
    });
    // all characters (even whitespaces) are values of the grid
    it('creates a grid with 3 columns and rows when input is 3', () => {
      //Remember, '\n' is the character for a new line.
      expect(gridGenerator(3)).toEqual('# #\n # \n# #\n');

      /* 
        This grid is a 3 x 3 and will look like:
        # #
         #
        # #
      */
    });

    it('creates a grid with 2 columns and rows when input is 2', () => {
      expect(gridGenerator(2)).toEqual('# \n #\n');
    });
  });
});

/* 
  Let's practice looping over objects using the for(let i in obj) since
  Here we have to also be aware of properties that are on an object's internal prototype (.__proto__)
*/

describe('looping over objects', () => {
  describe('the function `paramify`', () => {
    it('works on an empty object', () => {
      expect(paramify({})).toEqual('');
    });

    it('converts an object with one element', () => {
      expect(
        paramify({
          size: 14,
        })
      ).toEqual('size=14');
    });

    it('converts an object with two elements', () => {
      expect(
        paramify({
          height: 74,
          width: 12,
        })
      ).toEqual('height=74&width=12');
    });

    it('converts an object with many elements', () => {
      const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
      expect(paramify(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    /* 
      This one might be a bit tricky ;-)
      Maybe there is a built in method that can help you?
    */

    it('outputs the parameters in alphabetical order', () => {
      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      expect(paramify(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    /* 
      This one is also tricky, here we want you to only `paramify` the properties
      of the object and avoid any that are on the object's 'internal prototype' (.__proto__) property.
    */
    it("skips properties of the object's prototype", () => {
      /* 
        Alphabet is a constructor function that will use the `new` method of
        object creation
      */
      const Alphabet = function() {
        this.a = 1;
        this.b = 2;
      };

      Alphabet.prototype.c = 3;

      const alphabet = new Alphabet();

      // see how we're skipping `c` ?
      expect(paramify(alphabet)).toEqual('a=1&b=2');
    });

    it('calls Object.prototype.hasOwnProperty and does not use Object.keys', () => {
      spyOn(Object.prototype, 'hasOwnProperty').and.callThrough();
      spyOn(Object, 'keys').and.callThrough();

      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      paramify(object);

      expect(object.hasOwnProperty).toHaveBeenCalled();
      /*
        We ask that you don't use Object.keys in this function
        You will use this function in `paramifyObjectKeys!`
      */
      expect(Object.keys.calls.count()).toEqual(0);
    });
  });

  describe('the function `paramifyObjectKeys`', () => {
    /*
      Most of these specs are the same as `paramify` above, but we expect you
      to use a different way of looping over your object...
    */
    it('works on an empty object', () => {
      expect(paramifyObjectKeys({})).toEqual('');
    });

    it('converts an object with one element', () => {
      expect(
        paramifyObjectKeys({
          size: 14,
        })
      ).toEqual('size=14');
    });

    it('converts an object with two elements', () => {
      expect(
        paramifyObjectKeys({
          height: 74,
          width: 12,
        })
      ).toEqual('height=74&width=12');
    });

    it('converts an object with many elements', () => {
      const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
      expect(paramifyObjectKeys(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    it('outputs the parameters in alphabetical order', () => {
      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      expect(paramifyObjectKeys(object)).toEqual('a=1&b=2&c=3&d=4&e=5&f=6');
    });

    it("skips properties of the object's prototype", () => {
      const Alphabet = function() {
        this.a = 1;
        this.b = 2;
      };

      Alphabet.prototype.c = 3;

      const alphabet = new Alphabet();

      // see how we're skipping `c` again?
      expect(paramifyObjectKeys(alphabet)).toEqual('a=1&b=2');
    });

    it('calls Object.keys and does not use Object.prototype.hasOwnProperty', () => {
      spyOn(Object.prototype, 'hasOwnProperty').and.callThrough();
      spyOn(Object, 'keys').and.callThrough();

      const object = { f: 6, e: 5, d: 4, c: 3, b: 2, a: 1 };
      paramifyObjectKeys(object);

      expect(Object.keys).toHaveBeenCalled();
      expect(object.hasOwnProperty.calls.count()).toEqual(0);
    });
  });

  describe('The function `renameFiles`', () => {
    /*
      You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (n), where "n" is the smallest positive integer such that the obtained name is not used yet.

      Return an array of names that will be given to the files.

      Example:

      var files = ['myFile', 'anotherFile', 'family-picture', 'myFile', 'another-file', 'myFile'];
      var newFileNames = renameFiles(files);
      console.log(newFilesNames);
      --> ['myFile', 'anotherFile', 'family-picture', 'myFile(1)', 'anotherFile(1)', 'myFile(2)']    
    */

    it('returns an array', () => {
      expect(
        Array.isArray(renameFiles(['file', 'fileTwo', 'fileThree', 'fileFour']))
      ).toEqual(true);
    });

    it('does not rename files if duplicates are not present', () => {
      expect(
        renameFiles(['FullstackTestFirst', 'GuessingGame', 'FileWatcher'])
      ).toEqual(['FullstackTestFirst', 'GuessingGame', 'FileWatcher']);
    });

    it('renames files if there are duplicates by adding `(n)` to the end of the filename where `n` is the smallest positive integer that the obtained name did not use.', () => {
      expect(renameFiles(['hello', 'world', 'hello'])).toEqual([
        'hello',
        'world',
        'hello(1)',
      ]);
    });

    it('does not rename files to names that are already taken', () => {
      expect(
        renameFiles([
          'a(1)',
          'a(6)',
          'a',
          'a',
          'a',
          'a',
          'a',
          'a',
          'a',
          'a',
          'a',
          'a',
        ])
      ).toEqual([
        'a(1)',
        'a(6)',
        'a',
        'a(2)',
        'a(3)',
        'a(4)',
        'a(5)',
        'a(7)',
        'a(8)',
        'a(9)',
        'a(10)',
        'a(11)',
      ]);
      //This definitely increases the difficulty of the problem! If a file already exists, you can't use that name. For example, if file(3) already exists, you shouldn't name another file 'file(3)'.
    });

    //This is a tricky one! You will need to use all the tools (and debugging tools) to get to a solution.
  });
});
