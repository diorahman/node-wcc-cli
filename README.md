Qt Creator Remote Compiler Plugin CLI
===

Harmattan optimized. This is just an example of https://github.com/diorahman/node-wcc usage. You can wildly think of any use cases! :-)

Prerequisites
---

Install node-wcc (https://github.com/diorahman/node-wcc)

Install optimist (https://github.com/substack/node-optimist)

Clone this repo

And then run: 
    
	$ node wcc.js login --username your_nokia_developer_user_name --password your_nokia_developer_user_pasword
	{ session: { id: 'rKksf4kAsCduUR4E2g....' } }

Use the received sessionId to build the zipped project,

	$ node wcc.js build --zipFile harmattan.zip --sessionId rKksf4kAsCduUR4E2gPm....
	{ project: { id: 'LcG5Y2...' } }
	
Check build status by using the retrieved projectId
	
	$ node wcc.js status --sessionId rKksf4kAsCduUR4E2gPmO... --projectId LcG5Y...
	success
	
Download the file if it's success

	$ node wcc.js status --sessionId rKksf4kAsCduUR4E2gPmO... --projectId LcG5Y...
	harmattan_0.0.1_armel_qt-4_7_4_meego_1_2_harmattan.deb

TODO 
---
* Cleanup Code
* Tests
* Pull request please! :-) 

LICENSE (MIT)
---

_Copyright (c) 2010 Dhi Aurrahman_

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

