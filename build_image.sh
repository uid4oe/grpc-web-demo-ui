docker rmi uid4oe/alva-ui -f
docker buildx build --platform=linux/amd64 . -t uid4oe/alva-ui:latest
docker push uid4oe/alva-ui:latest