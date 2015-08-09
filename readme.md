# nano-template
## A stupidly small function for creating a compiled template

It's [crazy small](https://twitter.com/nrknthuk/status/630498001937526784) and [crazy fast](http://jsperf.com/nano-template).

It doesn't support any logic whatsoever.

`npm install nano-template`

or:

`bower install nano-template`

```javascript
//our string template
var style = 'position: relative; width: <%=size.width%>px; height: <%=size.height%>px; font: \'<%=font%>\'';

//compiled template function
var template = nano( style );

var options = {
  size: {
    width: 100,
    height: 120
  },
  font: '16px Consolas'
};

console.log( template( options ) ); //position: relative; width: 100px; height: 120px; font: '16px Consolas'
```

### Why?

Sometimes you don't need much from your templates. 

I had a [small project](https://github.com/nrkn/text-mode) that needed some basic string templating and it seemed silly to include a templating engine that was bigger than the project.

### License

The MIT License (MIT)

Copyright (c) 2015 Nik Coughlin

Permission is hereby granted, free of charge, 
to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to 
deal in the Software without restriction, including 
without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom 
the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice 
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.