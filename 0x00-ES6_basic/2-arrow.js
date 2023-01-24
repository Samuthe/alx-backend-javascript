export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.myNeighborhood = (myNewNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(myNewNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
