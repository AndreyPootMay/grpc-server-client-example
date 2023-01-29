const PROTO_PATH = './proto/demo.proto';

const parseArgs = require('minimist');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const demo_proto = grpc.loadPackageDefinition(packageDefinition).demo;

const argv = parseArgs(process.argv.slice(2), {
    string: 'target'
});

let target;
if (argv.target) {
    target = argv.target;
} else {
    target = 'localhost:50051';
}

let client = new demo_proto.cases(target, grpc.credentials.createInsecure());

module.exports = client;
