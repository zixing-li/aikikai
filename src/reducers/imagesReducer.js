export default function() {
  let array = [];
  for (let i=1; i<=23; i++) {
    array.push({src: require(`../assets/o (${i}).jpg`)})
  };
  return array;
}
