const {ApolloServer, gql} = require('apollo-server');
const qgl = require('graphql-tag');

const typeDefs=gql`

    type Article{
        id:ID!,
        title:String!,
        contents:String!
    }
    type Query{
        articlesBring:[Article]!
    }

`;

const resolvers ={
    Query:{
        articlesBring(){
            const articles =[
                {id:1,title:'title 1',contents:'contents 1'},
                {id:2,title:'title 2',contents:'contents 2'},
                {id:3,title:'title 3',contents:'contents 3'},
            ];
            return articles;
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