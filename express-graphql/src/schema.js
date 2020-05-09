import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLScalarType
} from 'graphql';
import CustomerModel from './modules/customer/customer.model';

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

//Root query 
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: { id: { type: GraphQLID }},
      resolve(parentValue, args) {
        return CustomerModel.findById(args.id);
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parentValue, args){
        return CustomerModel.find({});
      }
    }
  }
 
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCustomer: {
      type: CustomerType,
      args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email: {
            type: new GraphQLNonNull(GraphQLString)
        },
        age: {
            type: new GraphQLNonNull(GraphQLInt)
        },
      },
      resolve(parent, args) {
        let dish = new CustomerModel({
            name: args.name,
            email: args.email,
            age: args.age,
        });
        return dish.save();
      }
    },
    updateCustomer: {
      type: CustomerType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        return CustomerModel.findByIdAndUpdate(args.id, {$set: agrs}, { new : true});
      }
    },
    deleteCustomer: {
      type: CustomerType,
      args: { 
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        console.log('args', args)
        return CustomerModel.findByIdAndDelete(args.id);
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})