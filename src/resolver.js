module.exports = {
    Query: {
        post: (_, __, {dataSources} ) => dataSources.PostApi.getAllPost()
    }
}