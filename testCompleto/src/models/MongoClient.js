import mongoose from 'mongoose'

export default class MongoClient{
    constructor(){
        mongoose.connect('mongodb+srv://Fabo:Progreso22@clusterfabo.hyrfo.mongodb.net/coderTest?retryWrites=true&w=majority')
    }
}