
all: inst docu

inst:
	npm install

docu:
	$(MAKE) -C doc html

clean:
	$(MAKE) -C doc clean
