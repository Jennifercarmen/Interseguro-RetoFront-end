import axios from 'axios'

const interseguroUrl = 'https://testsoat.interseguro.com.pe/talentfestapi/destinos'

export function getDestination() {
  return axios.get(interseguroUrl).then(response => {
      const {data} = response,
      destinationList= []
      for (let destination in data){
          destinationList.push({
              name:data[destination]
          })
      }
      return destinationList
  }).catch(e => {
    console.log(e);
  })
}
