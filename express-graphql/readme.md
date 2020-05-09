### Setup
1) npm install
2) npm start
3) go to http://localhost:4000/graphql

### queries:
1) get all customers:
```
{
  customers{
    name,
    email
  }
}
```
2) get customer by id
```
{
  customer(id: "5ea457facd9e0d2c52130b1d"){
    name
  }
}
```
### mutations:
1) Add customer in db
```
mutation{
  addCustomer(name:"Sandip", age: 32, email: "sandip@gmail.com"){
    name,
    age,
    email
  }
}
```
