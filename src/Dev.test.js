const axios = require('axios');

let searchUsers = (value) => {
  return axios.get(`/person?name=${value}`).then(res => res.data)
}

let body = {
  firstName: 'Ted', 
  lastName: 'Jones', 
  address: '1234 H Street', 
  age: 65,
  interests: ['Cats', 'Hockey', 'Foosball', 'Ping Pong'], 
  picture: 'https://res.cloudinary.com/dtkadxjhq/image/upload/v1526689504/bzi0yuvxegpzga9teyuc.png' 
}

let user2 = {
  firstName: 'greg',
  lastName: 'Smith'
}

let addUser = (person) => {
  return axios.post('/person', person).then(res => res.data)
}

describe('Search users', () => {
  test('Testing to see if test gets results back', () => {
    let promise = searchUsers('Willy');
    promise.then(results => {
      expect(result.length).toBeGreaterThan(0);
    })
  })
  test('Testing to see if users returned matches input', () => {
    let promise = searchUsers('Willy');
    promise.then(results => {
      for (let person of results){
        expect(person.firstName).toMatch('Willy');
      }
    })
  })
})

describe('Add user', () => {
  test('Testing to successfully add user', () => {
    let promise = addUser(body);
    promise.then(response => {
      expect(response.firstName).toBe('Ted');
      expect(response.lastName).toBe('Jones');
      expect(response.interests.length).toEqual(4);
      expect(response.addres).toBe('1234 H Street');
      expect(person.age).toEqual(65);
    })
  })
  test('Testing to successfully add user', () => {
    let promise = addUser(body);
    promise.then(response => {
      expect(response.firstName).toBe('Ted');
      expect(response.lastName).toBe('Jones');
      expect(response.interests.length).toEqual(4);
      expect(response.addres).toBe('1234 H Street');
      expect(person.age).toEqual(65);
    })
  })
  test('Testing fail of add user', () => {
    let promise = addUser(user2);
    promise.then(response => {
      expect(response).toBeFalsy();
    })
  })
})