const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './proto/demo.proto';
const mysqlConnection = require('./mysql_connection');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const demo_proto = grpc.loadPackageDefinition(packageDefinition).demo;

const main = () => {
    const server = new grpc.Server();

    server.addService(demo_proto.cases.service, {
        addCase: addCase,
        listCases: listCases
    });

    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('gRPC server on port 50051')
    });
};

const addCase = (call, callback) => {
    const query = 'INSERT INTO cases (full_name, location, age, infected_type, state) VALUES (' +
        '\'' + call.request.full_name + '\',' +
        '\'' + call.request.location + '\',' +
        +call.request.age + ',' +
        '\'' + call.request.infected_type + '\',' +
        '\'' + call.request.state + '\');';

    mysqlConnection.query(query, function (err, rows, fields) {
        if (err) throw err;
        callback(null, { message: 'Case inserted correctly!' });
    });
};

const listCases = (call) => {
    const query = 'SELECT full_name, location, age, infected_type, state FROM cases;';

    mysqlConnection.query(query, (err, rows, fields) => {
        if (err)
            throw err;

        for (const data of rows) {
            call.write(data);
        }

        call.end();
    });
};

main();