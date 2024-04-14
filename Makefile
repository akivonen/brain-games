install:
	npm ci
brain-games:
	make brain-games
make lint:
	npx eslint .
publish: 
	npm publish --dry-run