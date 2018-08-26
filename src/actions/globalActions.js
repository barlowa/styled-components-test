import { ASYNC_TEST } from './types';

export const testAction = () => dispatch => {
  const quickMaths = Math.floor(Math.random() * Math.floor(400000))

  const asynchronous = async () =>{

    let promise1 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise2 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise3 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise4 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=4')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise5 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise6 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise7 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise8 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=4')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise9 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })
    let promise10 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise11 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise12 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise13 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise14 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=4')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise15 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise16 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise17 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise18 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=4')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise19 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })
    let promise20 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise21 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise22 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=3')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise23 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=4')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise24 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })
    


    let result1 = await promise1 
    let result2 = await promise2
    let result3 = await promise3
    let result4 = await promise4
    let result5 = await promise5 
    let result6 = await promise6
    let result7 = await promise7
    let result8 = await promise8
    let result9 = await promise9 
    let result10 = await promise10
    let result11 = await promise11
    let result12 = await promise12
    let result13 = await promise13 
    let result14 = await promise14
    let result15 = await promise15
    let result16 = await promise16
    let result17 = await promise17
    let result18 = await promise18
    let result19 = await promise19
    let result20 = await promise20
    let result21 = await promise21
    let result22 = await promise22
    let result23 = await promise23
    let result24 = await promise24


    dispatch({
      type: ASYNC_TEST,
      users: quickMaths,
      result1: result1, 
      result2: result2, 
      result3: result3, 
      result4: result4, 
      result5: result5, 
      result6: result6, 
      result7: result7, 
      result8: result8, 
      result9: result9, 
      result10: result10, 
      result11: result11, 
      result12: result12, 
      result13: result13, 
      result14: result14, 
      result15: result15, 
      result16: result16, 
      result17: result17, 
      result18: result18, 
      result19: result19, 
      result20: result20, 
      result21: result21, 
      result22: result22, 
      result23: result23, 
      result24: result24, 
    })

  }
  asynchronous()

};
