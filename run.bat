docker build -t file-server .
docker run --name file-server-app -p 9001:9000 -d file-server
