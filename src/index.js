const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolver");
const PostApi = require("./DataSource/PostAPI");

const server  = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({PostApi: new PostApi()})
})

server.listen().then(({ url }) => {
    console.log(`server ready  at ${url}`)
})