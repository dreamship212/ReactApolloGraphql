const express=require('express');
const app=express();
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose')

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
    
}));

mongoose.connect('mongodb+srv://aosgames:aosgames1@cluster0.boxhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log('bağlantı başarılı mlab için')
})
app.listen(4000,()=>{
    console.log('4000 port dinleniyor');
})