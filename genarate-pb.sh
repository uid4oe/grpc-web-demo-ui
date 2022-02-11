cd src/grpc/catalogpb
protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. catalog.proto
cd ../offerpb/
protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. offer.proto
cd ../orderpb/
protoc --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. order.proto