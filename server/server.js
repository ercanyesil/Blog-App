const {ApolloServer, gql} = require('apollo-server');
const qgl = require('graphql-tag');

const typeDefs=gql`

    type Query{
        ilkTip:String!
    }

`;

const resolvers ={
    Query:{
        ilkTip:()=>{
            return 'İlk tip oluşturuldu'
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port:5000}).then((res)=>{
    console.log(`server ${res.url} çalışıyor`);
});