.. booky documentation master file, created by
   sphinx-quickstart on Fri Dec  1 20:52:01 2017.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

Welcome to booky's documentation
################################

.. toctree::
   :maxdepth: 3
   :caption: Contents:

Indices and tables
##################

* :ref:`genindex`

What is booky?
##############

Booky is my way of learning nodejs. It's just an app to handle books collection. Right now
I don't do a lot since I have not the time to sped on it: given a isbn I try to find book information. That's all.
But I have **A LOT OF IDEAS**\ .

Building booky
##############

What you need?
==============
- ``nodejs``: to code the app :)
- ``sphinx``: to build this documentation

Where to build?
===============
Everywhere ``nodejs`` exist you should be capable of building the app. I personnaly build on a Ubuntu 17.04.
This document should be built also on Windows, if you installed Sphinx on it. But I didnt try and won't. It's up to you.

Hosting and deployement
=======================
I make the app hosted by ``Heroku``, with a free account.
Source code for the app is hosted by ``GitHub``, and linked to my app on heroku.
I suppose you can make your own choices.

Database
========
The app need a ``Mongodb`` database. I have mine hosted in a sandbox provided for free by ``mLab``.
The app uses ``mongoose`` to interface to the db, and for obvious reasons the connection string is not hardcoded in source code.
For the app to works, you have to set your connection string as an exported environement variable, like this:

.. code-block:: bash

	export MLABOOKYURI=mongodb://<username>:<userpassord>@xxxxxx.mlab.com:yyyyyyy/<dbname>

In javascript it's used thanks to the ``process`` object like this:

.. code-block:: javascript

	mgoose.connect(process.env.MLABOOKYURI, options );
	
Then you can run the app:

.. code-block:: bash

	npm run start
	#or
	npm run devstart
	

.. note:: Right now nothing is done with db :D arf arf I'm evil

Tips & tricks
=============

Node or nodejs ?
****************
I use the ``node`` package, not the ``node-legacy``, so I have to create a sym link to ``nodejs`` executable, named ``node`` in order for some script can work, such
as ``npm run dvstart``.

.. code-block:: bash

	ln -s /usr/bin/nodejs /usr/bin/node 

* More to read at `stackoverflow <https://stackoverflow.com/questions/21168141/cannot-install-packages-using-node-package-manager-in-ubuntu>`_


Resources
#########

* Browserless environment for running JavaScript, the well known `nodejs <https://nodejs.org/en/>`_
* Mozilla Developper Network, `for Express framwork <https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs>`_
* Sphinx, the `Python documentation generator <http://www.sphinx-doc.org/en/stable/index.html>`_
* Cloud platform by `Heroku <https://www.heroku.com/home>`_
* Database by `MongoDB <https://www.mongodb.com/>`_
* MongoDB database hosting by `mLab <https://mlab.com/>`_

About me
########
I got two pseudo, **Patatrak** & **le pangolin**, depending on my mood I use one or the other.
I'm a pretty good embedded firmware engineer with good experience in homebrewed http server and homebrewed web page templating engine. I hated javacript
, really hated it back in the 90s, it was such a f****** piece of shit. I recently look at how we made web app this days, and found learning things like nodejs can worth it. So this app.
And I have to admit it's cool.

you can contact me at lpat@protonmail.com 
