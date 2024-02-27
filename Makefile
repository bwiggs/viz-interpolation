.PHONY: run

run:
	caddy file-server --listen :8000 --browse
