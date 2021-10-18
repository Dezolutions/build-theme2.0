//Script for ordering by date nad limit "new arrivals" list to 5

const nodeList = document.querySelectorAll('.product-card')
const itemsArray = []
const parent = nodeList[0].parentNode

if(nodeList.length == 0) {
  parent.innerHTML == '<div>  no new arrivals </div>'
} else {
  for (let i = 0; i < nodeList.length; i++) {
    itemsArray.push(parent.removeChild(nodeList[i]))
  }
  
  itemsArray
    .sort((nodeA, nodeB) => {
      const dateA = +nodeA.getAttribute('data-finished')
      const dateB = +nodeB.getAttribute('data-finished')
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
    })
    .forEach((item,i) => {
      if(i < 5){
        parent.appendChild(item)
      }
    })
}
