import { ASYNC_TEST } from './types';

export const testAction = () => dispatch => {
  const quickMaths = Math.floor(Math.random() * Math.floor(400000))
  
  //---------standard fetch statements------------
  // fetch('https://reqres.in/api/users?page=1')
  // .then(response => response.json())
  // .then((results) =>{
  //   dispatch({
  //     type: TEST_ACTION,
  //     payload: results, 
  //   })
  //   console.log(results)
  // })

  // fetch('https://reqres.in/api/users?page=2')
  // .then(response => response.json())
  // .then((results) =>{
  //   dispatch({
  //     type: ASYNC_TEST,
  //     payload: results, 
  //   })
  //   console.log(results)
  // })

  // fetch('https://reqres.in/api/users?page=3')
  // .then(response => response.json())
  // .then((results) =>{
  //   dispatch({
  //     type: AWAIT_TEST,
  //     payload: results, 
  //   })
  //   console.log(results)
  // })

  //--------asynchronous requests and promises method 1----------
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
      fetch('https://reqres.in/api/users?page=5')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise6 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=6')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise7 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=7')
      .then(response => response.json())
      .then((results) =>{
        resolve(results)
      })
    })

    let promise8 = new Promise((resolve, reject) =>{
      fetch('https://reqres.in/api/users?page=8')
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
    })

  }
  asynchronous()

  //--------asynchronous requests and promises method 1----------
//   var url = 'https://reqres.in/api/users?page=4'
//   const asynchronous = async () =>{
//     try{
//       const response = await fetch('https://reqres.in/api/users?page=4') 
//       const response2 = await fetch('https://reqres.in/api/users?page=3')
//       const result = await response.json() && await response2.json()
//       console.log(result)
//     }
//     catch (err) {
//       console.log('fetch failed', err)
//     }
//   }
//   asynchronous()

};
