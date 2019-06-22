import { LightningElement, wire } from 'lwc';
import { customWire } from './../../wire/wire'; 

export default class App extends LightningElement {
  @wire(customWire, {
    graphqlQuery: `
      query(user: $userId) {
        User {
          name,
          id
        }
      }
    `
  })
  wireData;
}