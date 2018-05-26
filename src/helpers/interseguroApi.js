import axios from 'axios'

const interseguroUrl = 'https://testsoat.interseguro.com.pe/talentfestapi/destinos'

export function getDestination(place) {
  return axios.get(interseguroUrl, {
    params: {
      place
    }
  }).then(response => {
      const {data} = response,
      destinationList= []
      for (let destination in data){
          destinationList.push({
              name:destination
          })
      }
    console.log(response)
  }).catch(e => {
    console.log(e);
  })
}
