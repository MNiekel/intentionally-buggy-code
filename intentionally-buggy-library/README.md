# Practice contributing to open source by fixing bugs and making bugs for others to fix!

<code>npm install intentionally-buggy-library --save</code>

To run in browser console add this in script tag at end of HTML body:

<code>
type="text/javascript" src="node_modules/intentionally-buggy-library/IBL.js">
</code>

You can then open your console and run IBL methods i.e.:

<code>IBL.reverse('hello world')</code>

For use in Node.js:

<code>const IBL = require('intentionally-buggy-library')</code>

# running tests:

For live testing:

<code>npm run test:dev</code>

Otherwise:

<code>npm test</code>